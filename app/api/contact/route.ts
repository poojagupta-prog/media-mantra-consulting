import { isValidContactPhone } from "@/lib/contact-phone";
import { services } from "@/components/common/data";
import { isIP } from "node:net";
import nodemailer from "nodemailer";

// Configure one or more plain email addresses separated by commas.
const recipients = (
  process.env.CONTACT_TO_EMAIL || "info@mediamantraconsulting.com"
)
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_TRACKED_CLIENTS = 10_000;
// Per server instance. The hosting proxy must overwrite client IP headers.
const clients = new Map<string, { count: number; resetAt: number }>();

function rateLimit(request: Request): Response | null {
  const now = Date.now();
  // Entries are inserted in expiry order; remove idle clients without timers.
  for (const [key, entry] of clients) {
    if (entry.resetAt > now) break;
    clients.delete(key);
  }

  const forwarded = request.headers
    .get("x-forwarded-for")
    ?.split(",", 1)[0]
    ?.trim();
  const realIP = request.headers.get("x-real-ip")?.trim();
  const ip =
    forwarded && isIP(forwarded)
      ? forwarded
      : realIP && isIP(realIP)
        ? realIP
        : "unknown";
  let client = clients.get(ip);
  if (!client && clients.size < MAX_TRACKED_CLIENTS) {
    client = { count: 0, resetAt: now + RATE_WINDOW_MS };
    clients.set(ip, client);
  }

  if (!client || client.count >= RATE_LIMIT) {
    // At capacity, reject new clients until space expires instead of evicting limits.
    const resetAt = client?.resetAt ?? clients.values().next().value!.resetAt;
    return Response.json(
      { error: "Too many enquiries. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.max(1, Math.ceil((resetAt - now) / 1000))),
          "Cache-Control": "no-store",
        },
      },
    );
  }
  client.count += 1;
  return null;
}

/** Email validated enquiries; delivery credentials are only read on the server. */
export async function POST(request: Request) {
  const limited = rateLimit(request);
  if (limited) return limited;

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 20_000)
      return Response.json({ error: "Enquiry is too large." }, { status: 413 });
    body = JSON.parse(text);
  } catch {
    return Response.json({ error: "Invalid enquiry." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Invalid enquiry." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const limits = {
    name: 120,
    email: 254,
    countryCode: 4,
    phone: 14,
    company: 150,
    service: 200,
    message: 5000,
  };
  const enquiry: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = fields[key] ?? (key === "company" ? "" : undefined);
    if (
      typeof value !== "string" ||
      value.trim().length > limit ||
      (key !== "company" && !value.trim())
    ) {
      return Response.json(
        { error: "Please check the required fields." },
        { status: 400 },
      );
    }
    enquiry[key] = value.trim();
  }
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email) ||
    ![...services.map(({ title }) => title), "Something else"].includes(
      enquiry.service,
    )
  ) {
    return Response.json(
      { error: "Please check your email and service." },
      { status: 400 },
    );
  }

  if (!isValidContactPhone(enquiry.countryCode, enquiry.phone)) {
    return Response.json(
      { error: "Please check your country code and phone number." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT?.trim() || "587");
  const secureSetting = process.env.SMTP_SECURE?.trim();
  const secure = secureSetting ? secureSetting === "true" : port === 465;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (
    recipients.length === 0 ||
    !host ||
    !user ||
    !pass?.trim() ||
    !from ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    (secureSetting && !["true", "false"].includes(secureSetting))
  ) {
    return Response.json(
      {
        error: "Contact service is not configured. Please contact us by email.",
      },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      requireTLS: !secure,
      auth: { user, pass },
      connectionTimeout: 5_000,
      greetingTimeout: 5_000,
      socketTimeout: 10_000,
      dnsTimeout: 5_000,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
    const result = await transporter.sendMail({
      from,
      to: recipients,
      replyTo: enquiry.email,
      subject: `New website enquiry: ${enquiry.service}`,
      text: [
        "New enquiry from the Media Mantra Consulting website",
        "",
        `Name: ${enquiry.name}`,
        `Email: ${enquiry.email}`,
        `Phone: ${enquiry.countryCode} ${enquiry.phone}`,
        `Company: ${enquiry.company || "Not provided"}`,
        `Service: ${enquiry.service}`,
        "",
        "Message:",
        enquiry.message,
      ].join("\n"),
    });
    if (
      !result.accepted.some((address) =>
        recipients.some(
          (recipient) => recipient.toLowerCase() === address.toLowerCase(),
        ),
      )
    ) {
      throw new Error("Email service did not accept the enquiry.");
    }
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Unable to send your enquiry. Please try again." },
      { status: 502 },
    );
  }
}
