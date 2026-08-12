import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // In production, integrate with email/CRM (e.g., Resend, SendGrid, Hubspot)
    // For now, log and return success
    console.log("Contact enquiry:", body);
    // Simulate delay
    await new Promise((r) => setTimeout(r, 800));
    return NextResponse.json({ ok: true, message: "Enquiry received" });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
