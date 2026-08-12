import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // In production, integrate with email/CRM (e.g., Resend, SendGrid, Hubspot).
    // Tagged separately from the full contact form so leads from the
    // "Get Consultation" popup can be tracked/prioritized by source.
    console.log("Consultation request:", { source: "consultation-modal", ...body });
    // Simulate delay
    await new Promise((r) => setTimeout(r, 800));
    return NextResponse.json({ ok: true, message: "Consultation request received" });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
