// Shared HTML email templates for the Eventoss enquiry pipeline.
//
// Two emails go out per submission:
//   1. A "receipt" to the person who filled the form — confirms what
//      was received, formatted like an order confirmation.
//   2. A "new enquiry / order" notification to the Eventoss inbox, with
//      the same details laid out for a fast internal read.
//
// Kept as plain template-literal HTML (table-based layout, inline
// styles only) rather than a JSX email framework, since most email
// clients (Outlook especially) don't reliably support external CSS.

export type EnquiryEmailFields = {
  referenceId: string;
  formTypeLabel: string; // e.g. "Website Contact Form" or "Consultation Popup"
  name: string;
  email: string;
  phone: string;
  company?: string;
  eventType: string;
  eventDate?: string;
  city?: string;
  guests?: string;
  budget?: string;
  message?: string;
  source?: string;
  submittedAt: Date;
};

const NAVY = "#0F2A3D";
const ORANGE = "#FF3D00";
const OFFWHITE = "#FCFCFB";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatSubmittedAt(date: Date): string {
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

/** One "order summary" row — omitted entirely when the value is empty. */
function detailRow(label: string, value?: string): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;font-size:13px;color:#6b7280;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;font-size:13px;color:${NAVY};font-weight:500;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;
}

/** Shared shell: navy header with the EVENTOSS wordmark, off-white card body, footer. */
function emailShell(opts: { preheader: string; eyebrow: string; heading: string; bodyHtml: string; footerHtml: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(opts.heading)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#EFEDE7;font-family:Helvetica,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(opts.preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EFEDE7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background-color:${OFFWHITE};">
            <!-- Header -->
            <tr>
              <td style="background-color:${NAVY};padding:28px 32px;">
                <span style="display:block;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.02em;">EVENTOSS</span>
                <span style="display:block;color:rgba(255,255,255,0.55);font-size:11px;letter-spacing:0.14em;text-transform:uppercase;margin-top:4px;">${escapeHtml(opts.eyebrow)}</span>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                ${opts.bodyHtml}
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color:${NAVY};padding:24px 32px;">
                ${opts.footerHtml}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

const sharedFooter = `
  <p style="margin:0 0 6px 0;color:rgba(255,255,255,0.6);font-size:12px;">Eventoss Entertainment Pvt Ltd</p>
  <p style="margin:0 0 2px 0;color:rgba(255,255,255,0.4);font-size:11px;">208-A, Kaushalya Estate, Dak Bungalow Road, Patna, Bihar 800001</p>
  <p style="margin:0;color:rgba(255,255,255,0.4);font-size:11px;">info@eventoss.in · +91 70615 28401</p>
`;

/** Receipt email sent to the person who submitted the form. */
export function buildSenderReceiptEmail(f: EnquiryEmailFields): string {
  const orderRows = [
    detailRow("Reference No.", f.referenceId),
    detailRow("Submitted", formatSubmittedAt(f.submittedAt)),
    detailRow("Enquiry Type", f.formTypeLabel),
    detailRow("Event Type", f.eventType),
    detailRow("Preferred Date", f.eventDate),
    detailRow("City", f.city),
    detailRow("Estimated Guests", f.guests),
    detailRow("Budget Range", f.budget),
    detailRow("Company", f.company),
  ]
    .filter(Boolean)
    .join("");

  const bodyHtml = `
    <p style="margin:0 0 4px 0;color:#6b7280;font-size:13px;">Hi ${escapeHtml(f.name.split(" ")[0] || f.name)},</p>
    <h1 style="margin:0 0 14px 0;color:${NAVY};font-size:22px;font-weight:600;letter-spacing:-0.01em;">We've received your enquiry</h1>
    <p style="margin:0 0 24px 0;color:#4b5563;font-size:14px;line-height:1.6;">
      Thank you for reaching out to Eventoss. This email confirms the details below were received — our team will
      respond within <strong>24 hours</strong> with next steps.
    </p>

    <!-- "Order summary" card -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #E5E1DA;margin-bottom:20px;">
      <tr>
        <td style="padding:20px 22px 8px 22px;">
          <span style="display:inline-block;background-color:${NAVY};color:#ffffff;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;padding:5px 10px;">${escapeHtml(f.referenceId)}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 22px 20px 22px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${orderRows}
          </table>
        </td>
      </tr>
    </table>

    ${
      f.message
        ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #E5E1DA;margin-bottom:24px;">
            <tr><td style="padding:16px 22px;">
              <p style="margin:0 0 6px 0;color:#6b7280;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;">Your message</p>
              <p style="margin:0;color:${NAVY};font-size:13px;line-height:1.6;">${escapeHtml(f.message)}</p>
            </td></tr>
          </table>`
        : ""
    }

    <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.6;">
      Need to reach us sooner? WhatsApp us at
      <a href="https://wa.me/917061528401" style="color:${ORANGE};text-decoration:none;font-weight:600;">+91 70615 28401</a>
      and quote reference <strong>${escapeHtml(f.referenceId)}</strong>.
    </p>
  `;

  return emailShell({
    preheader: `Your enquiry ${f.referenceId} has been received — Eventoss will respond within 24 hours.`,
    eyebrow: "Enquiry Receipt",
    heading: "We've received your enquiry",
    bodyHtml,
    footerHtml: sharedFooter,
  });
}

/** Internal notification sent to the Eventoss inbox for every new lead. */
export function buildOwnerEmail(f: EnquiryEmailFields): string {
  const orderRows = [
    detailRow("Reference No.", f.referenceId),
    detailRow("Submitted", formatSubmittedAt(f.submittedAt)),
    detailRow("Source", f.formTypeLabel + (f.source ? ` · ${f.source}` : "")),
    detailRow("Name", f.name),
    detailRow("Email", f.email),
    detailRow("Phone", f.phone),
    detailRow("Company", f.company),
    detailRow("Event Type", f.eventType),
    detailRow("Preferred Date", f.eventDate),
    detailRow("City", f.city),
    detailRow("Estimated Guests", f.guests),
    detailRow("Budget Range", f.budget),
  ]
    .filter(Boolean)
    .join("");

  const bodyHtml = `
    <span style="display:inline-block;background-color:${ORANGE};color:#ffffff;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;padding:5px 10px;margin-bottom:14px;">New Enquiry</span>
    <h1 style="margin:0 0 14px 0;color:${NAVY};font-size:22px;font-weight:600;letter-spacing:-0.01em;">${escapeHtml(f.name)} — ${escapeHtml(f.eventType)}</h1>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #E5E1DA;margin-bottom:20px;">
      <tr>
        <td style="padding:20px 22px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${orderRows}
          </table>
        </td>
      </tr>
    </table>

    ${
      f.message
        ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #E5E1DA;margin-bottom:24px;">
            <tr><td style="padding:16px 22px;">
              <p style="margin:0 0 6px 0;color:#6b7280;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;">Message</p>
              <p style="margin:0;color:${NAVY};font-size:13px;line-height:1.6;">${escapeHtml(f.message)}</p>
            </td></tr>
          </table>`
        : ""
    }

    <a href="mailto:${encodeURIComponent(f.email)}?subject=${encodeURIComponent(`Re: Your enquiry ${f.referenceId} — Eventoss`)}"
       style="display:inline-block;background-color:${NAVY};color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:12px 20px;">
      Reply to ${escapeHtml(f.name.split(" ")[0] || f.name)} →
    </a>
  `;

  return emailShell({
    preheader: `New ${f.formTypeLabel.toLowerCase()} lead — ${f.name}, ${f.eventType} (${f.referenceId})`,
    eyebrow: "Internal Notification",
    heading: "New enquiry received",
    bodyHtml,
    footerHtml: sharedFooter,
  });
}
