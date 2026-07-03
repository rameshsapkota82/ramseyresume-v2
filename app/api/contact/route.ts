import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
  service?: string;
  careerLevel?: string;
  targetRole?: string;
  source?: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";
const VERIFIED_FROM = "Ramsey Resume <noreply@ramseyresume.com>";
const TO_EMAIL = "info@ramseyresume.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const payload = await readPayload(request);
  const errors = validatePayload(payload);

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, error: "Please check the form and try again.", fields: errors },
      { status: 400 },
    );
  }

  const name = payload.name!.trim();
  const email = payload.email!.trim();
  const message = payload.message!.trim();
  const phone = payload.phone?.trim();
  const service = payload.service?.trim();
  const careerLevel = payload.careerLevel?.trim();
  const targetRole = payload.targetRole?.trim();
  const source = payload.source?.trim() || "contact form";

  const subject = `New enquiry from ${name} via ${source}`;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: VERIFIED_FROM,
      to: [TO_EMAIL],
      reply_to: email,
      subject,
      html: buildHtmlEmail({
        name,
        email,
        message,
        phone,
        service,
        careerLevel,
        targetRole,
        source,
      }),
      text: buildTextEmail({
        name,
        email,
        message,
        phone,
        service,
        careerLevel,
        targetRole,
        source,
      }),
    }),
  });

  if (!response.ok) {
    const fallback = await safeReadJson(response);
    return NextResponse.json(
      {
        success: false,
        error:
          fallback?.message ||
          fallback?.error ||
          "We could not send your message right now. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks. Your message has been sent successfully.",
  });
}

async function readPayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as ContactPayload;
  }

  const formData = await request.formData();
  return {
    name: readFormValue(formData, "name"),
    email: readFormValue(formData, "email"),
    message: readFormValue(formData, "message"),
    phone: readFormValue(formData, "phone"),
    service: readFormValue(formData, "service"),
    careerLevel: readFormValue(formData, "careerLevel"),
    targetRole: readFormValue(formData, "targetRole"),
    source: readFormValue(formData, "source"),
  };
}

function readFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : undefined;
}

function validatePayload(payload: ContactPayload) {
  const errors: string[] = [];

  if (!payload.name?.trim()) errors.push("name");
  if (!payload.email?.trim()) errors.push("email");
  if (!payload.message?.trim()) errors.push("message");

  if (payload.name && payload.name.trim().length > 100) errors.push("name");
  if (payload.message && payload.message.trim().length > 5000) errors.push("message");

  if (payload.email && !isValidEmail(payload.email.trim())) errors.push("email");

  return Array.from(new Set(errors));
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatBlock(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:8px 0;font-weight:700;color:#0f172a;">${escapeHtml(label)}</td><td style="padding:8px 0;color:#334155;">${escapeHtml(value)}</td></tr>`;
}

function buildHtmlEmail(data: {
  name: string;
  email: string;
  message: string;
  phone?: string;
  service?: string;
  careerLevel?: string;
  targetRole?: string;
  source: string;
}) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;">
      <h1 style="margin:0 0 16px;font-size:24px;">New Ramsey Resume enquiry</h1>
      <p style="margin:0 0 16px;">A new enquiry was submitted from the ${escapeHtml(data.source)}.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${formatBlock("Name", data.name)}
        ${formatBlock("Email", data.email)}
        ${formatBlock("Phone", data.phone)}
        ${formatBlock("Service", data.service)}
        ${formatBlock("Career level", data.careerLevel)}
        ${formatBlock("Target role", data.targetRole)}
      </table>
      <h2 style="margin:24px 0 12px;font-size:18px;">Message</h2>
      <div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;">
        ${escapeHtml(data.message)}
      </div>
    </div>
  `;
}

function buildTextEmail(data: {
  name: string;
  email: string;
  message: string;
  phone?: string;
  service?: string;
  careerLevel?: string;
  targetRole?: string;
  source: string;
}) {
  return [
    "New Ramsey Resume enquiry",
    "",
    `Source: ${data.source}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.service ? `Service: ${data.service}` : null,
    data.careerLevel ? `Career level: ${data.careerLevel}` : null,
    data.targetRole ? `Target role: ${data.targetRole}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}

async function safeReadJson(response: Response) {
  try {
    return (await response.json()) as { message?: string; error?: string };
  } catch {
    return null;
  }
}
