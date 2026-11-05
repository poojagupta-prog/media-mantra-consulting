import { services } from "@/components/common/data";
import nodemailer from "nodemailer";

const recipient = "mediamantragroupindia@gmail.com";

/** Email validated enquiries; delivery credentials are only read on the server. */
export async function POST(request: Request) {
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

  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT?.trim() || "587");
  const secureSetting = process.env.SMTP_SECURE?.trim();
  const secure = secureSetting ? secureSetting === "true" : port === 465;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (
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
      to: [recipient],
      replyTo: enquiry.email,
      subject: `New website enquiry: ${enquiry.service}`,
      text: [
        "New enquiry from the Media Mantra Consulting website",
        "",
        `Name: ${enquiry.name}`,
        `Email: ${enquiry.email}`,
        `Company: ${enquiry.company || "Not provided"}`,
        `Service: ${enquiry.service}`,
        "",
        "Message:",
        enquiry.message,
      ].join("\n"),
    });
    if (
      !result.accepted.some((address) => address.toLowerCase() === recipient)
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
