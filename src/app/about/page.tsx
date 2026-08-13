import type { Metadata } from "next";
import Link from "next/link";
import PageVideoHero from "@/components/PageVideoHero";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "About — Eventoss Corporate Events Division",
  description: "A decade-long legacy, focused on corporate impact.",
};

export default function AboutPage() {
  return (
    <div className="bg-transparent">
      <PageVideoHero
        videoSrc="/husk.mp4"
        poster="/images/eventoss-conference-hall.jpg"
        chipLeft="01 — Corporate Events Division"
        chipRight="Patna · Delhi · Ranchi"
        bottomLabel="EVENTOSS ENTERTAINMENT · ABOUT THE DIVISION"
        eyebrow="ABOUT THE DIVISION · EST. 2012 · 12+ YEARS"
        heading={
          <span className="block text-[12vw] lg:text-[5vw]">
            Corporate events is our{" "}
            <span
              className="text-[#4ADE9E] italic font-normal"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              craft.
            </span>
          </span>
        }
      />

      <section className="pt-10 lg:pt-14">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <Reveal className="grid lg:grid-cols-12 gap-6">
            <p className="lg:col-span-6 text-[14px] leading-6 opacity-60 max-w-[560px]">Eventoss Entertainment Pvt Ltd brings over a decade of experience to conferences, meets, launches, and culture celebrations — delivered with the energy corporate brands deserve.</p>
            <div className="lg:col-span-6 flex gap-3 lg:justify-end items-start">
              <Link href="/contact" className="bg-[#0F2A3D] text-white px-7 h-10 inline-flex items-center label-sm">Start a conversation</Link>
              <Link href="/services" className="border border-[#0F2A3D]/15 px-7 h-10 inline-flex items-center label-sm hover:bg-[#0F2A3D] hover:text-white">Explore services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-10 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-1 hidden lg:block"><span className="vertical-label">OUR STORY — 01</span></div>
          <Reveal direction="right" className="lg:col-span-5">
            <p className="label-sm opacity-30 lg:hidden">Our story — 01</p>
            <h2 className="text-[30px] lg:text-[42px] leading-[0.92] tracking-[-0.03em] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
              <WordReveal as="span" className="block" text="A decade-long legacy," />
              <span className="block"><span className="italic font-light">focused on</span> corporate impact.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-7 opacity-60 max-w-[520px]">
              <p><span className="dropcap">F</span>ounded in Patna, Eventoss Entertainment has grown into a multi-city agency trusted by brands and organisations across India. While the wider group spans marketing and media, this division exists for one purpose: planning and delivering outstanding corporate events.</p>
              <p>From intimate leadership forums to thousand-guest family days, we bring the same discipline — research-led concepts, rigorous production, and calm show-day execution.</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#0F2A3D]/10 pt-8 max-w-[520px]">
              <div><p className="text-xl" style={{ fontFamily: "var(--font-playfair)" }}>2012</p><p className="label-sm opacity-30">Founded</p></div>
              <div><p className="text-xl" style={{ fontFamily: "var(--font-playfair)" }}>Patna</p><p className="label-sm opacity-30">HQ</p></div>
              <div><p className="text-xl" style={{ fontFamily: "var(--font-playfair)" }}>India</p><p className="label-sm opacity-30">Pan-India</p></div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8"><img src="/images/eventoss-about.jpeg" alt="Story" className="w-full h-[520px] object-cover" /></div>
              <div className="col-span-4 flex flex-col gap-4">
                <img src="/images/gallery/team-outdoor.jpeg" alt="detail" className="w-full h-[250px] object-cover" />
                <div className="bg-[#F4F3F0] p-6 border border-[#0F2A3D]/5 flex-1"><p className="label-sm opacity-30">Legacy</p><p className="text-lg leading-tight mt-3" style={{ fontFamily: "var(--font-playfair)" }}>4,700+ projects of pattern recognition — so edge cases are solved before they surface.</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F3F0] border-y border-[#0F2A3D]/10">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <Reveal direction="right" className="lg:col-span-5">
              <p className="label-sm opacity-30">Presence — 02</p>
              <h3 className="text-[32px] lg:text-[44px] leading-[0.9] tracking-[-0.03em] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>Rooted in <span className="italic font-light">Patna.</span><br />Present where your teams are.</h3>
              <p className="text-[15px] leading-7 opacity-60 mt-6 max-w-[480px]">Our home base is 208-A, Kaushalya Estate, Dak Bungalow Road, Patna — with operational presence across Delhi, Ranchi, and additional cities through our 8-office network. Wherever your event lands, we bring local fluency and national production standards.</p>
              <div className="mt-10 grid grid-cols-2 gap-4 max-w-[420px]">
                {[
                  { city: "Patna HQ", addr: "Kaushalya Estate, Dak Bungalow Road" },
                  { city: "Delhi", addr: "Operational presence · NCR" },
                  { city: "Ranchi", addr: "Operational presence · Jharkhand" },
                  { city: "Pan-India", addr: "8-office network" },
                ].map((p) => (
                  <div key={p.city} className="bg-white border border-[#0F2A3D]/10 p-5"><p className="label-sm">{p.city}</p><p className="text-xs opacity-60 mt-2 leading-relaxed">{p.addr}</p></div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1} className="lg:col-span-7">
              <div className="bg-white border border-[#0F2A3D]/10 p-6 lg:p-10">
                <img src="/images/gallery/womens-day-stage.png" alt="Map editorial" className="w-full h-[380px] object-cover" />
                <div className="grid grid-cols-3 gap-6 mt-8 border-t border-[#0F2A3D]/10 pt-6">
                  <div><p className="text-2xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>12+</p><p className="label-sm opacity-30">Years</p></div>
                  <div><p className="text-2xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>410+</p><p className="label-sm opacity-30">Clients</p></div>
                  <div><p className="text-2xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>4,700+</p><p className="label-sm opacity-30">Projects</p></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Traits — ASYMMETRIC NOT 4 EQUAL */}
      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-10 lg:py-16">
        <Reveal className="border-b border-[#0F2A3D]/10 pb-8 flex justify-between items-end">
          <div><p className="label-sm opacity-30">What shapes us — 03</p><h3 className="text-[30px] lg:text-[44px] leading-none tracking-[-0.03em] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>Four traits that shape <span className="italic font-light">every engagement</span></h3></div>
          <p className="hidden lg:block label-sm opacity-20">Est. 2012 · Pattern · Precision · Pull</p>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <Reveal delay={0.05} className="lg:col-span-7 border border-[#0F2A3D]/10 overflow-hidden bg-[#FCFCFB] grid lg:grid-cols-2">
            <img src="/images/eventoss-team-crowd.jpg" alt="Experience" className="w-full h-[360px] object-cover" />
            <div className="p-7 flex flex-col justify-center"><p className="label-sm opacity-20">01</p><h4 className="text-[22px] mt-2" style={{ fontFamily: "var(--font-playfair)" }}>Experience</h4><p className="text-[13.5px] leading-6 opacity-60 mt-3">Twelve years and 4,700+ projects mean we anticipate edge cases before they become problems.</p></div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 border border-[#0F2A3D]/10 overflow-hidden bg-white">
            <img src="/images/eventoss-detail-coffee.jpg" alt="Innovative" className="w-full h-[220px] object-cover" />
            <div className="p-6"><p className="label-sm opacity-20">02</p><h4 className="text-[18px] mt-2" style={{ fontFamily: "var(--font-playfair)" }}>Innovative</h4><p className="text-[13.5px] leading-6 opacity-60 mt-3">Fresh formats, smart tech, and modern production that keep corporate audiences genuinely engaged.</p></div>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-5 border border-[#0F2A3D]/10 overflow-hidden bg-white">
            <img src="/images/gallery/gala-portrait.webp" alt="Creative" className="w-full h-[240px] object-cover" />
            <div className="p-6"><p className="label-sm opacity-20">03</p><h4 className="text-[18px] mt-2" style={{ fontFamily: "var(--font-playfair)" }}>Creative</h4><p className="text-[13.5px] leading-6 opacity-60 mt-3">Themes, stages, and moments designed to feel distinctive — never template-driven.</p></div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 border border-[#0F2A3D]/10 overflow-hidden bg-[#FCFCFB] grid lg:grid-cols-2">
            <div className="p-7 flex flex-col justify-center order-2 lg:order-1"><p className="label-sm opacity-20">04</p><h4 className="text-[22px] mt-2" style={{ fontFamily: "var(--font-playfair)" }}>Experimental</h4><p className="text-[13.5px] leading-6 opacity-60 mt-3">We test ideas, iterate boldly, and push the brief when it serves a stronger outcome.</p></div>
            <img src="/images/gallery/press-group.webp" alt="Experimental" className="w-full h-[360px] object-cover order-1 lg:order-2" />
          </Reveal>
        </div>
      </section>

      {/* Process — STICKY STORYTELLING, NOT 4 EQUAL CARDS */}
      <section className="pattern-dark text-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <Reveal direction="right" className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
              <p className="label-sm text-white/30">Process — 04 · Research → Concept → Develop → Test</p>
              <h3 className="text-[36px] lg:text-[44px] leading-[0.9] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>A clear path from<br /><span className="italic font-light">brief to bravo.</span></h3>
              <p className="text-sm leading-6 text-white/50 mt-4 max-w-[360px]">Sticky narrative — steps reveal as you scroll. Zero-surprise delivery with cinematic transitions.</p>
              <img src="/images/gallery/office-exterior.webp" alt="Process" className="w-full h-[300px] object-cover mt-8 opacity-70" />
            </Reveal>
            <div className="lg:col-span-7 space-y-0 divide-y divide-white/10 border-y border-white/10">
              {[
                { n: "01", t: "Research", d: "Context before concept. Audience, objectives, constraints — grounded in reality, not assumptions." },
                { n: "02", t: "Concept", d: "Narrative, theme, and experience architecture that turns goals into a compelling story." },
                { n: "03", t: "Develop", d: "Vendors, production, run-of-show, hospitality — orchestration for zero surprises." },
                { n: "04", t: "Test", d: "Rehearsals, tech checks, contingency, show-calling — calm, precise, unforgettable." },
              ].map((s) => (
                <div key={s.n} className="py-10 flex gap-6">
                  <span className="text-[48px] font-black leading-none opacity-20" style={{ fontFamily: "var(--font-inter)" }}>{s.n}</span>
                  <div>
                    <h4 className="text-[22px]" style={{ fontFamily: "var(--font-playfair)" }}>{s.t}</h4>
                    <p className="text-sm leading-6 text-white/60 mt-2 max-w-[420px]">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-between items-center border-t border-white/10 pt-6">
            <span className="label-sm text-white/30">Zero-surprise delivery</span>
            <Link href="/contact" className="bg-white text-[#0F2A3D] px-7 h-10 inline-flex items-center label-sm">Plan with us →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
