import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const compiled = ts.transpileModule(
  readFileSync("app/api/contact/route.ts", "utf8"),
  {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  },
).outputText;

function handler(
  env = {},
  fetch = () => {
    throw new Error("Unexpected upstream request");
  },
) {
  const routeModule = { exports: {} };
  runInNewContext(compiled, {
    module: routeModule,
    exports: routeModule.exports,
    Response,
    AbortSignal,
    fetch,
    process: { env },
    require: () => ({ services: [{ title: "Public relations" }] }),
  });
  return routeModule.exports.POST;
}

const enquiry = {
  name: " Alex Morgan ",
  email: "alex@example.com",
  company: "Example",
  service: "Public relations",
  message: "We would like to discuss our launch.",
};
const request = (body) =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

test("contact API rejects invalid fields and oversized enquiries before forwarding", async () => {
  const post = handler();
  for (const body of [
    null,
    [],
    {},
    { ...enquiry, name: " " },
    { ...enquiry, email: "invalid" },
    { ...enquiry, service: "Unknown" },
    { ...enquiry, message: "x".repeat(5001) },
    { ...enquiry, company: 123 },
  ]) {
    assert.equal((await post(request(body))).status, 400);
  }
  assert.equal(
    (await post(request({ ...enquiry, message: "x".repeat(21_000) }))).status,
    413,
  );
  assert.equal(
    (
      await post(
        new Request("http://localhost/api/contact", {
          method: "POST",
          body: "{",
        }),
      )
    ).status,
    400,
  );
});

test("unconfigured contact API never reports successful delivery", async () => {
  assert.equal((await handler()(request(enquiry))).status, 503);
});

test("contact API forwards normalized known fields with server authentication", async () => {
  let sent;
  const post = handler(
    {
      CONTACT_API_URL: "https://forms.example/contact",
      CONTACT_API_TOKEN: "test-token",
    },
    async (url, options) => {
      sent = { url, options };
      return new Response(null, { status: 204 });
    },
  );
  const response = await post(request({ ...enquiry, extra: "omit me" }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(sent.url, "https://forms.example/contact");
  assert.equal(sent.options.headers.Authorization, "Bearer test-token");
  assert.deepEqual(JSON.parse(sent.options.body), {
    ...enquiry,
    name: "Alex Morgan",
  });
});

test("upstream errors and timeouts return delivery failure without exposing details", async () => {
  for (const fetch of [
    async () => new Response("private error", { status: 500 }),
    async () => {
      throw new Error("private token");
    },
  ]) {
    const response = await handler(
      { CONTACT_API_URL: "https://forms.example/contact" },
      fetch,
    )(request(enquiry));
    assert.equal(response.status, 502);
    assert.doesNotMatch(await response.text(), /private/);
  }
});
