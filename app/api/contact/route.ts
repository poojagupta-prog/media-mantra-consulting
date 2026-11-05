import { services } from "@/components/common/data";

/** Forward enquiries to the configured CRM/form service without exposing its URL or token. */
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

  const endpoint = process.env.CONTACT_API_URL;
  if (!endpoint) {
    return Response.json(
      {
        error: "Contact service is not configured. Please contact us by email.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_API_TOKEN
          ? { Authorization: `Bearer ${process.env.CONTACT_API_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(enquiry),
      signal: AbortSignal.timeout(15_000),
      cache: "no-store",
      redirect: "error",
    });
    if (!response.ok) throw new Error("Contact service failed.");
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Unable to send your enquiry. Please try again." },
      { status: 502 },
    );
  }
}
