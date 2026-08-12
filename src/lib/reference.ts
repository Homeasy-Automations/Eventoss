/**
 * Generates a reference number used as the "order number" on receipt
 * emails and stored on the Enquiry document, e.g. EVT-20260813-4F2A.
 */
export function generateReferenceId(prefix: "EVT" | "CON" = "EVT"): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${y}${m}${d}-${rand}`;
}
