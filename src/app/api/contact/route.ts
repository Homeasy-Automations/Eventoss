import { NextResponse } from "next/server";
import { Resend } from "resend";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { contactSchema } from "@/lib/validation";
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

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  const values = parsed.data;
  const referenceId = generateReferenceId("EVT");
  const submittedAt = new Date();
  const fullName = `${values.firstName} ${values.lastName}`.trim();

  // Save first — the enquiry must not be lost even if the email provider is down.
  try {
    await connectDB();
    await Enquiry.create({
      referenceId,
      formType: "contact",
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      company: values.company || undefined,
      eventType: values.eventType,
      eventDate: values.eventDate || undefined,
      city: values.city || undefined,
      guests: values.guests || undefined,
      budget: values.budget || undefined,
      message: values.message,
    });
  } catch (err) {
    console.error("Contact route — MongoDB save failed:", err);
    return NextResponse.json({ ok: false, message: "Could not save your enquiry, please try again" }, { status: 500 });
  }

  const emailFields = {
    referenceId,
    formTypeLabel: "Website Contact Form",
    name: fullName,
    email: values.email,
    phone: values.phone,
    company: values.company || undefined,
    eventType: values.eventType,
    eventDate: values.eventDate || undefined,
    city: values.city || undefined,
    guests: values.guests || undefined,
    budget: values.budget || undefined,
    message: values.message,
    submittedAt,
  };

  // Resend's `.send()` resolves (doesn't throw) on API errors, so each
  // call's `{ data, error }` shape must be checked explicitly — a thrown
  // exception here would only catch network-level failures, not
  // rejected sends (bad API key, unverified domain, etc).
  const emailStatus = { ownerSent: false, senderSent: false };

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      replyTo: values.email,
      subject: `New Enquiry — ${referenceId} — ${fullName}`,
      html: buildOwnerEmail(emailFields),
    });
    if (error) console.error("Contact route — owner email error:", error);
    else emailStatus.ownerSent = true;
  } catch (err) {
    console.error("Contact route — owner email send failed:", err);
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: values.email,
      subject: `We've received your enquiry — ${referenceId} | Eventoss`,
      html: buildSenderReceiptEmail(emailFields),
    });
    if (error) console.error("Contact route — sender email error:", error);
    else emailStatus.senderSent = true;
  } catch (err) {
    console.error("Contact route — sender email send failed:", err);
  }

  // Best-effort — an enquiry that saved fine but couldn't update its email
  // status shouldn't fail the whole request; the person already has their receipt.
  try {
    await Enquiry.updateOne({ referenceId }, { $set: { emailStatus } });
  } catch (err) {
    console.error("Contact route — emailStatus update failed:", err);
  }

  return NextResponse.json({ ok: true, message: "Enquiry received", referenceId });
}
