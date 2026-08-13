import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/work";
import PageVideoHero from "@/components/PageVideoHero";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import ClientRosterGrid from "@/components/ClientRosterGrid";
import { brandRoster } from "@/data/clients";

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
      <PageVideoHero
        videoSrc="/newyear.mp4"
        poster="/images/eventoss-party-crowd.jpg"
        chipLeft="06 Projects"
        chipRight="Patna · Delhi · Ranchi"
        bottomLabel="EVENTOSS ENTERTAINMENT · SELECTED WORK"
        eyebrow="WORK · SELECTED ENGAGEMENTS · 06 PROJECTS"
        heading={
          <span className="block text-[11vw] lg:text-[4.6vw]">
            Work that{" "}
            <span className="text-[#FF8A5B]">
              moves{" "}
              <span className="italic font-normal" style={{ fontFamily: "var(--font-cormorant)" }}>
                rooms
              </span>
            </span>{" "}
            and results.
          </span>
        }
      />

      <section className="pt-8 lg:pt-10">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 border-b border-[#0F2A3D]/10 pb-8">
          <Reveal>
            <p className="label-sm opacity-30 tracking-[0.18em] mb-4">A SELECTION OF CORPORATE EVENT ENGAGEMENTS — EDITORIAL CASE STUDIES</p>
            <h2 className="text-[30px] lg:text-[42px] leading-[0.95] tracking-[-0.03em]" style={{ fontFamily: "var(--font-playfair)" }}>
              <WordReveal as="span" className="block" text="Every project, a" />
              <span className="block"><span className="italic font-light" style={{ fontFamily: "var(--font-cormorant)" }}>different</span> problem solved.</span>
            </h2>
          </Reveal>
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
        <div className="space-y-12 lg:space-y-16 mt-10">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i, 3) * 0.05}>
              <Link href={`/work/${p.slug}`} data-cursor="VIEW" className="group block">
                {/* Full-bleed image card — the photo IS the card background,
                    text panel sits on top with a gradient + blur for contrast. */}
                <div className="relative overflow-hidden h-[500px] lg:h-[640px]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  {/* Permanent readability gradient — strongest at the bottom where the text panel sits,
                      deepens further on hover for extra contrast. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10 transition-opacity duration-500 group-hover:opacity-95" />

                  {/* Top badges */}
                  <span className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white text-[#0F2A3D] border border-[#0F2A3D]/10 px-3 py-1.5 label-sm transition-transform duration-500 group-hover:-translate-y-1">{p.number} — {p.year}</span>
                  <span className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-[#0F2A3D] text-white px-3 py-1.5 label-sm hidden lg:block transition-transform duration-500 group-hover:-translate-y-1">{p.location}</span>
                  <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />

                  {/* Enlarged text panel — frosted-glass strip over the image bottom, so copy stays readable
                      against any photo while the image still fills the whole card. */}
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10 backdrop-blur-md bg-[#0F2A3D]/45 border-t border-white/10">
                    <span className="accent-bar block absolute left-0 top-0 h-[3px] w-0 bg-[#FF3D00] group-hover:w-full transition-all duration-700" />
                    <p className="label-sm text-white/60">{p.number} · {p.eventType} · {p.year}</p>
                    <h2 className="text-[28px] lg:text-[42px] leading-[0.95] tracking-[-0.02em] mt-3 text-white" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</h2>
                    <p className="text-sm lg:text-base leading-6 text-white/75 mt-3 max-w-[560px]">&ldquo;{p.tagline}&rdquo;</p>
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1.5">
                      {p.highlights.slice(0, 3).map((h) => (
                        <p key={h} className="text-xs flex items-center gap-2 text-white/65">
                          <span className="w-1 h-1 bg-[#FF3D00] rounded-full flex-shrink-0" /> {h}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="inline-flex items-center gap-2 label-sm text-white border-b border-white/30 pb-1 group-hover:border-white group-hover:gap-3 transition-all duration-500">
                        View case study <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                      </span>
                      <span className="label-sm text-white/40 text-[10px] hidden sm:block">{p.client} · {p.location}</span>
                    </div>
                  </div>
                </div>
                <div className="hairline mt-12" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Client roster — the wider list of named engagements, compact
          cards only (no case-study page), filterable by vertical. */}
      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16 border-t border-[#0F2A3D]/10">
        <Reveal className="flex items-end justify-between mb-8">
          <div>
            <p className="label-sm opacity-30">Client roster — {brandRoster.length} brands</p>
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
