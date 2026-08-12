"use client";

const videos = [
  { id: "P6QrNKWBIxY", label: "01 — Recent project" },
  { id: "2l5F7H-GWCY", label: "02 — Recent project" },
  { id: "5csId_CUdKo", label: "03 — Recent project" },
];

/**
 * Embeds real Eventoss project videos (from the company's own YouTube
 * channel) in an editorial grid consistent with the rest of the site.
 */
export default function VideoShowcase() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-7">
            <p className="label-sm opacity-30">Eventoss at a glance — 06</p>
            <h2
              className="text-[32px] lg:text-[44px] leading-[0.9] tracking-[-0.03em] mt-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Some recent projects,<br />
              <span className="italic font-light">straight from the field.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-6 opacity-60 max-w-[420px]">
              A short look at show-days we&apos;ve delivered — filmed on-site, not
              staged for a reel.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {videos.map((v) => (
            <div key={v.id} className="group relative transition-transform duration-500 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden border border-black/10 bg-black transition-all duration-500 group-hover:border-[#0F2A3D]/30 group-hover:shadow-[0_20px_50px_rgba(15,42,61,0.16)]">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={`Eventoss project video ${v.id}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="label-sm opacity-30 mt-2 transition-opacity duration-500 group-hover:opacity-60">{v.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
