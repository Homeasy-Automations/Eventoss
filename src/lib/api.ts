// Base URL of the standalone Eventoss backend (deployed separately, e.g. on
// Render). Set NEXT_PUBLIC_API_URL in the frontend's env — see .env.example.
// Falls back to same-origin "/api" for local dev if it's left unset, so
// `next dev` still works with a colocated backend if you ever run one.
export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");

export function apiPath(path: string): string {
  return `${API_URL}${path}`;
}
