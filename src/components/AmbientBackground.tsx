/**
 * Site-wide ambient background — a soft gradient wash + hairline grid,
 * mounted ONCE at the root layout, outside `<PageTransition>` (which
 * animates opacity per route) and outside `<main>`.
 *
 * Why here and not per-page: if this lived inside each page (or inside the
 * animated route wrapper), it would remount / restart on every navigation
 * and could be clipped by any ancestor that establishes a new containing
 * block for `fixed` elements (transform, filter, backdrop-filter, etc).
 * Kept as a sibling of `<main>` in RootLayout, it stays truly viewport-fixed
 * and simply sits there continuously while pages animate in front of it —
 * so every route shares the exact same backdrop instead of each page
 * defining its own.
 *
 * Layering: this is `fixed` + `z-0`. `<main>` and `<Footer>` are `relative
 * z-10` so page content always paints above it. Sections are free to be
 * fully opaque (most are, for readability) or semi-transparent with
 * `backdrop-blur` where you want this wash to show through.
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* hairline grid, faded out toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,42,61,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,42,61,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 0%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 0%, black, transparent)",
        }}
      />
      {/* brand-colour gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% -5%, rgba(46,134,193,0.16) 0%, transparent 52%), radial-gradient(circle at 88% 12%, rgba(255,122,41,0.10) 0%, transparent 48%), radial-gradient(circle at 50% 105%, rgba(27,156,110,0.10) 0%, transparent 55%)",
        }}
      />
    </div>
  );
}
