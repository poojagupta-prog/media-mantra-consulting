import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";
import { isIP } from "node:net";

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

const phoneModule = { exports: {} };
runInNewContext(ts.transpileModule(readFileSync("lib/contact-phone.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, { module: phoneModule, exports: phoneModule.exports });

function handler(
  env = {},
  sendMail = () => {
    throw new Error("Unexpected SMTP request");
  },
  onCreateTransport = () => {},
  clock = Date,
) {
  const routeModule = { exports: {} };
  runInNewContext(compiled, {
    module: routeModule,
    exports: routeModule.exports,
    Response,
    Date: clock,
    process: { env },
    require: (name) => name === "@/lib/contact-phone" ? phoneModule.exports : name === "node:net" ? { isIP } : name === "nodemailer" ? {
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
  countryCode: "+91",
  phone: "9876543210",
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
const request = (body, headers = {}) =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  });

test("contact API rejects invalid fields and oversized enquiries before forwarding", async () => {
  for (const body of [
    null,
    [],
    {},
    { ...enquiry, name: " " },
    { ...enquiry, email: "invalid" },
    { ...enquiry, service: "Unknown" },
    { ...enquiry, message: "x".repeat(5001) },
    { ...enquiry, company: 123 },
    ...[undefined, "", " ", 9876543210, "12345", "12345678901234", "123abc4567", "+919876543210", "987 6543210", "123456\n789"].map((phone) => ({ ...enquiry, phone })),
    ...[undefined, "", 91, "91", "+999", "+091"].map((countryCode) => ({ ...enquiry, countryCode })),
  ]) {
    assert.equal((await handler()(request(body))).status, 400);
  }
  assert.equal(
    (await handler()(request({ ...enquiry, message: "x".repeat(21_000) }))).status,
    413,
  );
  assert.equal(
    (
      await handler()(
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
      return { accepted: ["info@mediamantraconsulting.com"] };
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
  assert.deepEqual(Array.from(email.to), ["info@mediamantraconsulting.com"]);
  assert.equal(email.from, emailEnv.CONTACT_FROM_EMAIL);
  assert.equal(email.replyTo, enquiry.email);
  assert.equal(email.subject, `New website enquiry: ${enquiry.service}`);
  for (const detail of ["Name: Alex Morgan", `Email: ${enquiry.email}`, `Phone: ${enquiry.countryCode} ${enquiry.phone}`, `Company: ${enquiry.company}`, `Service: ${enquiry.service}`, enquiry.message]) {
    assert.ok(email.text.includes(detail));
  }
  assert.doesNotMatch(email.text, /omit me/);
});

test("configured recipients support comma-separated addresses and case-insensitive acceptance", async () => {
  for (const accepted of [["first@example.com", "SECOND@example.com"], ["second@example.com"]]) {
    let sent;
    const post = handler(
      { ...emailEnv, CONTACT_TO_EMAIL: " First@example.com, , second@example.com, " },
      async (email) => {
        sent = email;
        return { accepted };
      },
    );
    assert.equal((await post(request({ ...enquiry, to: ["other@example.com"] }))).status, 200);
    assert.deepEqual(Array.from(sent.to), ["First@example.com", "second@example.com"]);
  }
});

test("recipient lists with no addresses fail configuration and unrelated acceptance fails delivery", async () => {
  assert.equal((await handler({ ...emailEnv, CONTACT_TO_EMAIL: " , , " })(request(enquiry))).status, 503);
  const post = handler(
    { ...emailEnv, CONTACT_TO_EMAIL: "first@example.com,second@example.com" },
    async () => ({ accepted: ["other@example.com"] }),
  );
  assert.equal((await post(request(enquiry))).status, 502);
});

test("enquiries without a company and multiline messages are included correctly", async () => {
  let email;
  const post = handler(emailEnv, async (message) => {
    email = message;
    return { accepted: ["info@mediamantraconsulting.com"] };
  });
  assert.equal((await post(request({ ...enquiry, company: undefined, message: "First line\nSecond line" }))).status, 200);
  assert.match(email.text, /Company: Not provided/);
  assert.ok(email.text.includes("First line\nSecond line"));
});

test("SMTP responses without acceptance of the configured recipient never report success", async () => {
  for (const result of [{ accepted: [] }, { accepted: ["other@example.com"] }, { rejected: ["info@mediamantraconsulting.com"] }, null]) {
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
    async () => ({ accepted: ["info@mediamantraconsulting.com"] }),
    (options) => { transport = options; });
  assert.equal((await post(request(enquiry))).status, 200);
  assert.equal(transport.secure, true);
  assert.equal(transport.requireTLS, false);
});

test("contact rate limit allows five concurrent requests and blocks SMTP on the sixth", async () => {
  let sent = 0;
  const post = handler(emailEnv, async () => {
    sent += 1;
    return { accepted: ["info@mediamantraconsulting.com"] };
  });
  const headers = { "x-forwarded-for": "203.0.113.1, 10.0.0.1" };
  const responses = await Promise.all(Array.from({ length: 6 }, () => post(request(enquiry, headers))));
  assert.deepEqual(responses.map((response) => response.status), [200, 200, 200, 200, 200, 429]);
  assert.equal(sent, 5);
  const limited = responses[5];
  assert.equal(limited.headers.get("Retry-After"), "600");
  assert.equal(limited.headers.get("Cache-Control"), "no-store");
  assert.match((await limited.json()).error, /Too many enquiries/);
  assert.equal((await post(request(enquiry, { "x-forwarded-for": "203.0.113.2" }))).status, 200);
});

test("invalid requests consume quota, retry time decreases, and quota resets at expiry", async () => {
  let now = 0;
  const post = handler({}, undefined, undefined, { now: () => now });
  for (let i = 0; i < 5; i += 1) {
    assert.equal((await post(request({}))).status, 400);
  }
  now = 1501;
  const blocked = await post(request({}));
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get("Retry-After"), "599");
  now = 600_000;
  assert.equal((await post(request({}))).status, 400);
});

test("real IP and IPv6 clients have separate limits; invalid IPs share the fallback", async () => {
  const post = handler();
  for (let i = 0; i < 5; i += 1) {
    assert.equal((await post(request({}, { "x-forwarded-for": `invalid-${i}` }))).status, 400);
  }
  assert.equal((await post(request({}))).status, 429);
  assert.equal((await post(request({}, { "x-real-ip": "203.0.113.1" }))).status, 400);
  assert.equal((await post(request({}, { "x-forwarded-for": "2001:db8::1" }))).status, 400);
});

test("tracking capacity cannot evict existing limits and expired entries free space", async () => {
  let now = 0;
  const post = handler({}, undefined, undefined, { now: () => now });
  for (let i = 0; i < 10_000; i += 1) {
    assert.equal((await post(request({}, { "x-real-ip": `2001:db8::${i.toString(16)}` }))).status, 400);
  }
  const newClient = { "x-real-ip": "203.0.113.1" };
  assert.equal((await post(request({}, newClient))).status, 429);
  assert.equal((await post(request({}, { "x-real-ip": "2001:db8::0" }))).status, 400);
  now = 600_000;
  assert.equal((await post(request({}, newClient))).status, 400);
});


test("phone validation accepts different country codes and preserves leading zeroes", async () => {
  for (const [countryCode, phone] of [["+971", "0501234567"], ["+44", "02079460000"], ["+1", "2025550123"], ["+91", "1234567890123"]]) {
    let sent;
    const response = await handler(emailEnv, async (email) => {
      sent = email;
      return { accepted: ["info@mediamantraconsulting.com"] };
    })(request({ ...enquiry, countryCode, phone }));
    assert.equal(response.status, 200);
    assert.ok(sent.text.includes(`Phone: ${countryCode} ${phone}`));
  }
});
