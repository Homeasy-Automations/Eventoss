import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/work";
import { HeroImageBand } from "@/components/HeroImageBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import ClientRosterGrid from "@/components/ClientRosterGrid";
import { clientRoster } from "@/data/clients";

// Real Eventoss Entertainment YouTube video IDs (from the company's own
// channel) — a quick highlights reel before the full case-study list.
const showcaseVideoIds = ["P6QrNKWBIxY", "2l5F7H-GWCY", "5csId_CUdKo"];

export const metadata: Metadata = {
  title: "Work — Selected Corporate Engagements | Eventoss",
  description: "A selection of corporate event engagements across conferences, launches, galas and culture celebrations.",
};

export default function WorkPage() {
  return (
    <div className="bg-transparent">
      <section className="pt-[60px]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 border-b border-[#0F2A3D]/10">
            <span className="label-sm opacity-30">Work — Selected engagements — 06 projects</span>
            <span className="label-sm opacity-30 hidden lg:block">Est. 2012 · Patna · Delhi · Ranchi</span>
          </div>

          <div className="mt-8">
            <h1 className="orange-display text-[12vw] lg:text-[8vw] leading-[0.82]">
              <WordReveal as="span" className="block" text="WORK THAT" />
              <WordReveal as="span" className="block ml-[10%]" text="MOVES ROOMS" delay={0.08} />
              <WordReveal as="span" className="block" text="AND RESULTS." delay={0.16} />
            </h1>
            <p className="label-sm opacity-30 mt-4 tracking-[0.18em]">A SELECTION OF CORPORATE EVENT ENGAGEMENTS — EDITORIAL CASE STUDIES</p>
          </div>

          <HeroImageBand
            src="/images/gallery/promo-activity.webp"
            alt="Eventoss show-day production"
            chipLeft="06 Projects"
            chipRight="Patna · Delhi · Ranchi"
            quote="Every moment show-called, every transition timed."
            quoteAttribution="Eventoss show-calling team"
            heightClassName="h-[360px] lg:h-[480px]"
          />
        </div>
      </section>

      {/* Watch — real Eventoss project footage, straight from the field */}
      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16 border-b border-[#0F2A3D]/10">
        <Reveal className="flex items-end justify-between mb-8">
          <div>
            <p className="label-sm opacity-30">Watch — on-site footage</p>
            <h2 className="text-[26px] lg:text-[32px] leading-none tracking-[-0.02em] mt-3" style={{ fontFamily: "var(--font-playfair)" }}>Straight from show-day.</h2>
          </div>
          <p className="hidden lg:block label-sm opacity-20">Eventoss Entertainment · YouTube</p>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {showcaseVideoIds.map((id, i) => (
            <Reveal key={id} delay={i * 0.08}>
              <div className="aspect-video overflow-hidden border border-[#0F2A3D]/10 bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Eventoss project footage ${i + 1}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
        <div className="hairline" />
        <div className="space-y-12 lg:space-y-20 mt-10">
          {projects.map((p, i) => {
            const isEven = i % 2 === 1;
            return (
              <Reveal key={p.slug} delay={Math.min(i, 3) * 0.05}>
                <Link href={`/work/${p.slug}`} data-cursor="VIEW" className="group block">
                  <div className={`grid lg:grid-cols-12 gap-6 items-center ${isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`lg:col-span-7 overflow-hidden relative ${isEven ? "lg:order-2" : ""}`}>
                      <img src={p.image} alt={p.title} className="w-full h-[380px] lg:h-[520px] object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]" />
                      {/* curtain overlay — darkens and lifts a "View" cue in on hover, Bolte-style */}
                      <div className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="shift-on-hover absolute top-4 left-4 bg-white border border-[#0F2A3D]/10 px-3 py-1.5 label-sm transition-transform duration-500 group-hover:-translate-y-1">{p.number} — {p.year}</span>
                      <span className="shift-on-hover absolute bottom-4 right-4 bg-[#0F2A3D] text-white px-3 py-1.5 label-sm hidden lg:block transition-transform duration-500 group-hover:-translate-y-1">{p.location}</span>
                      <span className="reveal-on-hover absolute bottom-4 left-4 label-sm text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                        View case study <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                      </span>
                      <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />
                    </div>
                    <div className={`lg:col-span-5 ${isEven ? "lg:pr-8" : "lg:pl-2"}`}>
                      <div className={`border border-[#0F2A3D]/10 p-6 lg:p-8 bg-[#FCFCFB] lg:bg-white lg:-ml-10 ${isEven ? "lg:-mr-10 lg:ml-0" : ""} relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_24px_60px_rgba(15,42,61,0.14)] group-hover:-translate-y-1`}>
                        <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                        <span className="hidden lg:flex absolute -top-3 left-6 w-6 h-6 rounded-full bg-[#0F2A3D] text-white items-center justify-center text-xs transition-transform duration-500 group-hover:rotate-45 group-hover:bg-[#FF3D00]">→</span>
                        <p className="label-sm opacity-30">{p.number} · {p.eventType} · {p.year}</p>
                        <h2 className="text-[24px] lg:text-[28px] leading-none tracking-[-0.02em] mt-3" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</h2>
                        <p className="text-sm leading-6 opacity-60 mt-2">&ldquo;{p.tagline}&rdquo;</p>
                        <div className="mt-4 space-y-1.5">
                          {p.highlights.slice(0, 3).map((h) => (
                            <p key={h} className="text-xs flex gap-2 opacity-55">
                              <span className="w-1 h-1 bg-[#0F2A3D] rounded-full mt-1.5 flex-shrink-0" /> {h}
                            </p>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-2 label-sm mt-6 border-b border-[#0F2A3D]/20 pb-1 group-hover:border-[#0F2A3D] group-hover:gap-3 transition-all duration-500">View case study</span>
                        <div className="mt-6 pt-4 border-t border-[#0F2A3D]/10 flex justify-between label-sm opacity-30 text-[10px]">
                          <span>{p.client}</span>
                          <span>{p.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hairline mt-12" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Client roster — the wider list of named engagements, compact
          cards only (no case-study page), filterable by vertical. */}
      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16 border-t border-[#0F2A3D]/10">
        <Reveal className="flex items-end justify-between mb-8">
          <div>
            <p className="label-sm opacity-30">Client roster — {clientRoster.length} engagements</p>
            <h2 className="text-[26px] lg:text-[32px] leading-none tracking-[-0.02em] mt-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Brands we&apos;ve worked with.
            </h2>
          </div>
          <p className="hidden lg:block label-sm opacity-20">Est. 2012 · Pan-India</p>
        </Reveal>
        <ClientRosterGrid />
      </section>
    </div>
  );
}
