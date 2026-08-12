import { NextResponse } from "next/server";
import { Resend } from "resend";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { consultationSchema } from "@/lib/validation";
import { generateReferenceId } from "@/lib/reference";
import { buildOwnerEmail, buildSenderReceiptEmail } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Eventoss <onboarding@resend.dev>";
const OWNER_EMAIL = process.env.OWNER_EMAIL || "info@eventoss.in";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body" }, { status: 400 });
  }

  const parsed = consultationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  const values = parsed.data;
  const referenceId = generateReferenceId("CON");
  const submittedAt = new Date();

  // Save first — the enquiry must not be lost even if the email provider is down.
  try {
    await connectDB();
    await Enquiry.create({
      referenceId,
      formType: "consultation",
      source: values.source || "consultation-modal",
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company || undefined,
      eventType: values.eventType,
      eventDate: values.eventDate || undefined,
      city: values.city || undefined,
      guests: values.guests || undefined,
      budget: values.budget || undefined,
      message: values.message || undefined,
    });
  } catch (err) {
    console.error("Consultation route — MongoDB save failed:", err);
    return NextResponse.json({ ok: false, message: "Could not save your request, please try again" }, { status: 500 });
  }

  const emailFields = {
    referenceId,
    formTypeLabel: "Consultation Popup",
    name: values.name,
    email: values.email,
    phone: values.phone,
    company: values.company || undefined,
    eventType: values.eventType,
    eventDate: values.eventDate || undefined,
    city: values.city || undefined,
    guests: values.guests || undefined,
    budget: values.budget || undefined,
    message: values.message || undefined,
    source: values.source || undefined,
    submittedAt,
  };

  // Resend's `.send()` resolves (doesn't throw) on API errors, so each
  // call's `{ data, error }` shape must be checked explicitly.
  const emailStatus = { ownerSent: false, senderSent: false };

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      replyTo: values.email,
      subject: `New Consultation Request — ${referenceId} — ${values.name}`,
      html: buildOwnerEmail(emailFields),
    });
    if (error) console.error("Consultation route — owner email error:", error);
    else emailStatus.ownerSent = true;
  } catch (err) {
    console.error("Consultation route — owner email send failed:", err);
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: values.email,
      subject: `We've received your request — ${referenceId} | Eventoss`,
      html: buildSenderReceiptEmail(emailFields),
    });
    if (error) console.error("Consultation route — sender email error:", error);
    else emailStatus.senderSent = true;
  } catch (err) {
    console.error("Consultation route — sender email send failed:", err);
  }

  try {
    await Enquiry.updateOne({ referenceId }, { $set: { emailStatus } });
  } catch (err) {
    console.error("Consultation route — emailStatus update failed:", err);
  }

  return NextResponse.json({ ok: true, message: "Consultation request received", referenceId });
}
