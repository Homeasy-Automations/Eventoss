import type { Metadata } from "next";
import Link from "next/link";
import { pillars } from "@/data/services";
import { HeroImageBand } from "@/components/HeroImageBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Services — 7 Event Verticals | Eventoss",
  description: "Seven specialised event verticals — corporate, brand experiences, MICE, exhibitions, live entertainment, government, and sports — planned with research, creative direction, and show-day precision.",
};

export default function ServicesPage() {
  return (
    <div className="bg-transparent">
      {/* Hero editorial like reference */}
      <section className="pt-[60px]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 border-b border-[#0F2A3D]/10">
            <span className="label-sm opacity-30">Services — 7 Verticals</span>
            <span className="label-sm opacity-30">Research → Concept → Develop → Test</span>
          </div>

          <div className="mt-8 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h1 className="orange-display text-[12vw] lg:text-[8vw] leading-[0.82]">
                <WordReveal as="span" className="block" text="EVERY" />
                <WordReveal as="span" className="block ml-[12%]" text="FORMAT." delay={0.08} />
                <WordReveal as="span" className="block" text="ONE STANDARD." delay={0.16} />
              </h1>
              <p className="label-sm opacity-30 mt-4 tracking-[0.2em]">CORPORATE · BRAND · MICE · EXHIBITIONS · ENTERTAINMENT · GOVERNMENT · SPORTS</p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="text-[14px] leading-6 opacity-60">Seven specialised event verticals — each planned with research, creative direction, and show-day precision.</p>
              <div className="hairline mt-6" />
              <p className="label-sm opacity-30 mt-3">Est. 2012 · Pan-India · Founder-led</p>
            </div>
          </div>

          <HeroImageBand
            src="/images/eventoss-hero-stage.jpg"
            alt="Eventoss corporate event production"
            chipLeft="Full Catalogue"
            chipRight="7 Verticals · Pan-India"
            quote="No templates, no generic party planning."
            quoteAttribution="Eventoss Corporate Events"
            heightClassName="h-[320px] lg:h-[420px]"
          />
        </div>
      </section>

      {/* Editorial list — magazine spreads */}
      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
        <div className="space-y-10 lg:space-y-14">
          {pillars.map((s, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={s.slug} delay={Math.min(idx, 3) * 0.05}>
                <Link href={`/services/${s.slug}`} data-cursor="VIEW" className="group block">
                  <div className={`grid lg:grid-cols-12 gap-6 items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`lg:col-span-7 relative overflow-hidden ${reversed ? "lg:order-2" : ""}`}>
                      <img src={s.image} alt={s.title} className="img-zoom w-full h-[360px] lg:h-[460px] object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]" />
                      {/* curtain overlay — darkens and lifts a "View" cue in on hover, Bolte-style */}
                      <div className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="shift-on-hover absolute top-4 left-4 bg-white border border-[#0F2A3D]/10 px-3 py-1.5 label-sm transition-transform duration-500 group-hover:-translate-y-1">{s.number}</span>
                      <span className="reveal-on-hover absolute bottom-4 left-4 label-sm text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                        View vertical <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                      </span>
                      <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />
                    </div>
                    <div className={`lg:col-span-5 ${reversed ? "lg:pr-6" : "lg:pl-2"}`}>
                      <div className={`border border-[#0F2A3D]/10 p-6 lg:p-8 bg-[#FCFCFB] lg:bg-white lg:-ml-10 ${reversed ? "lg:-mr-10 lg:ml-0" : ""} relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_24px_60px_rgba(15,42,61,0.14)] group-hover:-translate-y-1`}>
                        {/* accent bar grows in from the left on hover */}
                        <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                        <span className="hidden lg:flex absolute -top-3 left-6 w-6 h-6 rounded-full bg-[#0F2A3D] text-white items-center justify-center text-xs transition-transform duration-500 group-hover:rotate-45 group-hover:bg-[#FF3D00]">→</span>
                        <p className="label-sm opacity-30">{s.number} — Vertical</p>
                        <h3 className="text-[20px] lg:text-[24px] leading-none tracking-[-0.02em] mt-3" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                        <p className="text-[13px] leading-6 opacity-60 mt-3">{s.tagline}</p>
                        <p className="text-[12px] leading-6 opacity-40 mt-4 line-clamp-2 hidden lg:block">{s.subservices.slice(0, 5).join(" · ")}…</p>
                        <span className="inline-flex items-center gap-2 label-sm mt-5 border-b border-[#0F2A3D]/20 pb-1 group-hover:border-[#0F2A3D] group-hover:gap-3 transition-all duration-500">Explore vertical</span>
                      </div>
                    </div>
                  </div>
                  <div className="hairline mt-10" />
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Link href="/contact" className="mt-10 flex items-center justify-between bg-[#FF3D00] text-white px-6 lg:px-8 h-12 hover:bg-[#0F2A3D] transition-colors">
          <span className="label-sm text-white">Hybrid, multi-city, or fully custom — we architect it →</span>
          <span className="w-7 h-7 rounded-full bg-white text-[#0F2A3D] flex items-center justify-center text-xs">→</span>
        </Link>
      </section>
    </div>
  );
}
