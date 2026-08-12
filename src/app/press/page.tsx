import type { Metadata } from "next";
import { pressMentions } from "@/data/press";
import { HeroImageBand } from "@/components/HeroImageBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Press Mentions — Eventoss In News | Eventoss",
  description: "Check out Eventoss Entertainment's recent coverage in the esteemed publications — real press mentions and media features.",
};

export default function PressPage() {
  return (
    <div className="bg-transparent">
      <section className="pt-[60px]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 border-b border-[#0F2A3D]/10">
            <span className="label-sm opacity-30">Press Mentions — {pressMentions.length} features</span>
            <span className="label-sm opacity-30 hidden lg:block">Est. 2012 · Patna · Delhi · Ranchi</span>
          </div>

          <div className="mt-8">
            <h1 className="orange-display text-[12vw] lg:text-[8vw] leading-[0.82]">
              <WordReveal as="span" className="block" text="EVENTOSS" />
              <WordReveal as="span" className="block ml-[10%]" text="IN NEWS." delay={0.08} />
            </h1>
            <p className="label-sm opacity-30 mt-4 tracking-[0.18em]">CHECK OUT OUR RECENT COVERAGE IN THE ESTEEMED PUBLICATIONS</p>
          </div>

          <HeroImageBand
            src="/images/eventoss-hero-stage.jpg"
            alt="Eventoss press coverage"
            chipLeft={`${pressMentions.length} Features`}
            chipRight="Patna · Delhi · Ranchi"
            quote="From national business dailies to industry trade press — the coverage of a decade-plus legacy."
            quoteAttribution="Eventoss Entertainment"
            heightClassName="h-[360px] lg:h-[480px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
        <div className="hairline" />
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-10">
          {pressMentions.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i, 5) * 0.04}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="READ"
                className="group relative block h-full border border-[#0F2A3D]/10 bg-[#FCFCFB] lg:bg-white p-6 lg:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_24px_60px_rgba(15,42,61,0.14)] hover:-translate-y-1"
              >
                <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                <div className="flex items-start justify-between gap-4">
                  <p className="label-sm opacity-40">{p.publication} · {p.date}</p>
                  <span className="w-7 h-7 rounded-full border border-[#0F2A3D]/15 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#FF3D00] group-hover:border-[#FF3D00] group-hover:text-white">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <h2 className="text-[19px] lg:text-[21px] leading-[1.15] tracking-[-0.01em] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {p.title}
                </h2>
                <p className="text-[13px] leading-6 opacity-60 mt-3 line-clamp-3">{p.excerpt}</p>
                <span className="reveal-on-hover inline-flex items-center gap-2 label-sm mt-5 border-b border-[#0F2A3D]/20 pb-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-[#0F2A3D] transition-all duration-500">
                  Read the feature <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
