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
      esModuleInterop: true,
    },
  },
).outputText;

function handler(
  env = {},
  sendMail = () => {
    throw new Error("Unexpected SMTP request");
  },
  onCreateTransport = () => {},
) {
  const routeModule = { exports: {} };
  runInNewContext(compiled, {
    module: routeModule,
    exports: routeModule.exports,
    Response,
    process: { env },
    require: (name) => name === "nodemailer" ? {
      createTransport(options) {
        onCreateTransport(options);
        return { sendMail };
      },
    } : { services: [{ title: "Public relations" }] },
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
const emailEnv = {
  SMTP_HOST: "smtp.example.com",
  SMTP_PORT: "587",
  SMTP_SECURE: "false",
  SMTP_USER: "smtp-user",
  SMTP_PASS: "smtp-password",
  CONTACT_FROM_EMAIL: "Media Mantra Consulting <website@example.com>",
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

test("SMTP credentials, sender, and valid connection settings must be configured", async () => {
  const invalid = [{}, ...["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "CONTACT_FROM_EMAIL"].map((key) => ({ ...emailEnv, [key]: " " })),
    ...["invalid", "0", "65536", "587.5"].map((port) => ({ ...emailEnv, SMTP_PORT: port })),
    { ...emailEnv, SMTP_SECURE: "invalid" }];
  for (const env of invalid) {
    assert.equal((await handler(env)(request(enquiry))).status, 503);
  }
});

test("contact API emails all enquiry details to the fixed recipient with the submitter as Reply-To", async () => {
  let sent;
  let transport;
  const post = handler(
    emailEnv,
    async (email) => {
      sent = email;
      return { accepted: ["mediamantragroupindia@gmail.com"] };
    },
    (options) => { transport = options; },
  );
  const response = await post(request({ ...enquiry, to: ["other@example.com"], from: "other@example.com", extra: "omit me" }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(transport.host, emailEnv.SMTP_HOST);
  assert.equal(transport.port, 587);
  assert.equal(transport.secure, false);
  assert.equal(transport.requireTLS, true);
  assert.equal(transport.auth.user, emailEnv.SMTP_USER);
  assert.equal(transport.auth.pass, emailEnv.SMTP_PASS);
  const email = sent;
  assert.deepEqual(Array.from(email.to), ["mediamantragroupindia@gmail.com"]);
  assert.equal(email.from, emailEnv.CONTACT_FROM_EMAIL);
  assert.equal(email.replyTo, enquiry.email);
  assert.equal(email.subject, `New website enquiry: ${enquiry.service}`);
  for (const detail of ["Name: Alex Morgan", `Email: ${enquiry.email}`, `Company: ${enquiry.company}`, `Service: ${enquiry.service}`, enquiry.message]) {
    assert.ok(email.text.includes(detail));
  }
  assert.doesNotMatch(email.text, /omit me/);
});

test("enquiries without a company and multiline messages are included correctly", async () => {
  let email;
  const post = handler(emailEnv, async (message) => {
    email = message;
    return { accepted: ["mediamantragroupindia@gmail.com"] };
  });
  assert.equal((await post(request({ ...enquiry, company: undefined, message: "First line\nSecond line" }))).status, 200);
  assert.match(email.text, /Company: Not provided/);
  assert.ok(email.text.includes("First line\nSecond line"));
});

test("SMTP responses without acceptance of the configured recipient never report success", async () => {
  for (const result of [{ accepted: [] }, { accepted: ["other@example.com"] }, { rejected: ["mediamantragroupindia@gmail.com"] }, null]) {
    const response = await handler(emailEnv, async () => result)(request(enquiry));
    assert.equal(response.status, 502);
  }
});

test("SMTP errors return delivery failure without exposing credentials", async () => {
  for (const sendMail of [
    async () => { throw new Error("private SMTP password"); },
    async () => {
      throw new Error("private token");
    },
  ]) {
    const response = await handler(
      emailEnv,
      sendMail,
    )(request(enquiry));
    assert.equal(response.status, 502);
    assert.doesNotMatch(await response.text(), /private/);
  }
});

test("port 465 enables implicit TLS when SMTP_SECURE is omitted", async () => {
  let transport;
  const post = handler({ ...emailEnv, SMTP_PORT: "465", SMTP_SECURE: undefined },
    async () => ({ accepted: ["mediamantragroupindia@gmail.com"] }),
    (options) => { transport = options; });
  assert.equal((await post(request(enquiry))).status, 200);
  assert.equal(transport.secure, true);
  assert.equal(transport.requireTLS, false);
});
