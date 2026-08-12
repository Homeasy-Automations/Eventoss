"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";
import VideoShowcase from "@/components/VideoShowcase";
import VideoHero from "@/components/VideoHero";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const featured = services.slice(0, 6);

  return (
    <div className="bg-transparent">
      {/* ── HERO : video plays full-bleed first, headline reveals on scroll ── */}
      <VideoHero
        youtubeId="P6QrNKWBIxY"
        poster="/images/eventoss-hero-stage.jpg"
        chipLeft="Corporate Events · Pan-India"
        chipRight="Patna · Delhi · Ranchi"
        eyebrow="EVENTOSS ENTERTAINMENT · EST. 2012 · 410+ CLIENTS"
        subcopy="Twelve years of research-led planning, sharp production, and calm show-day execution — for conferences, dealer meets, product launches, and culture celebrations across India."
        ctas={[
          { label: "About Us", href: "/about" },
          { label: "Our Work", href: "/work" },
        ]}
      />


      {/* ── bottom marquee strip ── */}
      <div className="bg-[#F5FBFD] overflow-hidden py-3 border-b border-[#0F2A3D]/10">
        <div className="flex w-max whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-6 label-sm opacity-40">
              Conferences · Summits · Launches · Galas · Offsites · Celebrations <span className="w-1 h-1 bg-[#FF7A29] rounded-full" />
            </span>
          ))}
        </div>
      </div>

      {/* ── INTRO 01 : huge faint 01, drop cap, overlapping photos ── */}
      <section className="relative bg-white py-14 lg:py-24 overflow-hidden">
        <span className="hidden lg:block absolute top-10 left-[8%] stroke-number text-[340px] leading-none select-none pointer-events-none">01</span>
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            <div className="hidden lg:block lg:col-span-1">
              <span className="vertical-label">WHO WE ARE — 01</span>
            </div>

            <div className="lg:col-span-5 relative">
              <p className="label-sm opacity-30 lg:hidden">Who we are — 01</p>
              <h2 className="mt-3 text-[32px] lg:text-[42px] leading-[0.92] tracking-[-0.03em]" style={{ fontFamily: "var(--font-playfair)" }}>
                <WordReveal as="span" className="block" text="Specialists in corporate" />
                <span className="block"><span className="italic font-light">event energy</span> — not generic party planning.</span>
              </h2>
              <div className="mt-8 space-y-5 max-w-[520px]">
                <p className="text-[15px] leading-7 opacity-70">
                  <span className="dropcap">F</span>or over twelve years, Eventoss Entertainment has helped organisations across India run conferences, channel meets, leadership forums, product launches, and culture celebrations with clarity and impact.
                </p>
                <p className="text-[15px] leading-7 opacity-60">
                  This site is dedicated to our Corporate Events division — focused planning, sharp production, and on-ground teams that treat every brief like a brand moment.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-y border-[#0F2A3D]/10 py-4 max-w-[520px]">
                <Link href="/about" className="label-sm hover:opacity-60">About our division — precision is our standard</Link>
                <span className="w-7 h-7 rounded-full bg-[#0F2A3D] text-white flex items-center justify-center text-xs">→</span>
              </div>
              <div className="mt-8 flex gap-6 border-t border-[#0F2A3D]/10 pt-6 max-w-[520px]">
                <div><p className="text-xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>12+</p><p className="label-sm opacity-30">Years</p></div>
                <div className="w-px bg-[#0F2A3D]/10" />
                <div><p className="text-xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>410+</p><p className="label-sm opacity-30">Clients</p></div>
                <div className="w-px bg-[#0F2A3D]/10" />
                <div><p className="text-xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>Pan-India</p><p className="label-sm opacity-30">Presence</p></div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8 relative">
                  <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                    <img src="/images/gallery/event-stage-trio.webp" alt="Stage" className="w-full h-[520px] lg:h-[640px] object-cover" />
                  </motion.div>
                  <p className="label-sm opacity-30 mt-2">01 — Stage & content architecture · Patna HQ</p>
                  {/* overlapping quote — editorial caption overlapping photo */}
                  <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-[#F4F3F0] border border-[#0F2A3D]/10 p-5 max-w-[260px] hidden lg:block">
                    <p className="text-[15px] leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>&ldquo;Precision is not an accident. It&apos;s a process.&rdquo;</p>
                    <p className="label-sm opacity-30 mt-2">— Corporate Events Division</p>
                  </div>
                </div>
                <div className="col-span-4 flex flex-col gap-4 pt-10">
                  <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="overflow-hidden">
                    <img src="/images/gallery/womens-day-detail.png" alt="Detail" className="w-full h-[260px] object-cover" />
                  </motion.div>
                  <div className="bg-[#0F2A3D] text-white p-5 flex-1 flex flex-col justify-center">
                    <p className="label-sm opacity-40">Trusted by</p>
                    <p className="text-sm leading-6 mt-2">410+ clients across BFSI, FMCG, Tech & Manufacturing</p>
                    <span className="mt-4 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs">↗</span>
                  </div>
                  <p className="label-sm opacity-20 hidden lg:block">— 8 offices · Local fluency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATISTICS 02 : BLACK full bleed, huge varied numbers, not equal cards ── */}
      <section className="relative bg-[#0F2A3D] text-white overflow-hidden py-10 lg:py-16">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/gallery/stage-collage.webp" alt="Stats bg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A3D] via-[#0F2A3D]/85 to-[#0F2A3D]" />
        <span className="hidden lg:block absolute top-6 right-10 stroke-number-white text-[280px] leading-none select-none pointer-events-none opacity-20">02</span>
        <div className="relative mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="hidden lg:block lg:col-span-1">
              <span className="vertical-label" style={{ color: "rgba(255,255,255,0.45)" }}>BY NUMBERS — 02</span>
            </div>
            <Reveal direction="right" className="lg:col-span-4">
              <p className="label-sm text-white/40">Legacy in numbers</p>
              <h3 className="text-[36px] lg:text-[44px] leading-[0.9] tracking-[-0.03em] mt-4 text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                Twelve years<br /><span className="italic font-light">and thousands</span><br />of show-days.
              </h3>
              <p className="text-sm leading-6 text-white/50 mt-4 max-w-[360px]">Not dashboard metrics — muscle memory that anticipates edge cases before they surface.</p>
              <div className="hairline-white mt-8 opacity-20" />
            </Reveal>
            {/* numbers — varied sizes, asymmetric */}
            <Reveal direction="left" delay={0.1} className="lg:col-span-7 grid grid-cols-12 gap-0">
              <div className="col-span-5 lg:col-span-4 border-r border-white/10 pr-6 py-6">
                <p className="text-[56px] lg:text-[84px] font-black leading-none tracking-[-0.05em] text-white"><CountUp end={12} suffix="+" /></p>
                <p className="label-sm text-white/50 mt-2">Years</p>
                <p className="text-xs text-white/30 mt-1">Since 2012 · Patna HQ</p>
              </div>
              <div className="col-span-7 lg:col-span-8 pl-6 lg:pl-10 py-6">
                <p className="text-[48px] lg:text-[72px] font-black leading-none tracking-[-0.05em] text-white"><CountUp end={410} suffix="+" /></p>
                <p className="label-sm text-white/50 mt-2">Clients</p>
                <p className="text-xs text-white/30 mt-1">BFSI · FMCG · Tech · Manufacturing</p>
              </div>
              <div className="col-span-12 border-t border-white/10 pt-8 mt-2 grid grid-cols-12 gap-6">
                <div className="col-span-8 lg:col-span-7">
                  <p className="text-[64px] lg:text-[110px] font-black leading-none tracking-[-0.06em] text-white"><CountUp end={4700} suffix="+" /></p>
                  <p className="label-sm text-white/50 mt-2">Projects</p>
                  <p className="text-xs text-white/30 mt-1 max-w-[320px]">Conferences, dealer meets, summits, launches, galas, family days — calm under scale.</p>
                </div>
                <div className="col-span-4 lg:col-span-5 border-l border-white/10 pl-6 lg:pl-10 flex flex-col justify-center">
                  <p className="text-[56px] lg:text-[84px] font-black leading-none tracking-[-0.05em] text-white"><CountUp end={8} /></p>
                  <p className="label-sm text-white/50 mt-2">Offices</p>
                  <p className="text-xs text-white/30 mt-1">Patna · Delhi · Ranchi · +5</p>
                </div>
              </div>
            </Reveal>
          </div>
          {/* horizontal movement */}
          <div className="overflow-hidden mt-12 border-y border-white/10 py-3">
            <div className="flex w-max whitespace-nowrap" style={{ animation: "marquee 18s linear infinite" }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="flex items-center gap-8 pr-8 label-sm text-white/30">ZERO-SURPRISE DELIVERY · RESEARCH → CONCEPT → DEVELOP → TEST <span className="w-1 h-1 bg-white/30 rounded-full" /></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES 03 : sticky left, vertical editorial blocks right (not cards) ── */}
      <section className="relative bg-[#F4F3F0] py-14 lg:py-20">
        <span className="hidden lg:block absolute top-12 right-10 stroke-number text-[300px] leading-none select-none pointer-events-none">03</span>
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* sticky left */}
            <Reveal className="lg:col-span-5 lg:sticky lg:top-24 self-start relative">
              <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-px bg-[#0F2A3D]/10" />
              <span className="vertical-label hidden lg:block absolute -left-10 top-0">WHAT WE DELIVER — 03</span>
              <p className="label-sm opacity-30 lg:hidden">What we deliver — 03</p>
              <h2 className="mt-3 orange-display text-[10vw] lg:text-[4.8vw] leading-[0.82]">
                <WordReveal as="span" className="block" text="FOURTEEN" />
                <WordReveal as="span" className="block ml-[10%]" text="FORMATS." delay={0.08} />
                <WordReveal as="span" className="block" text="ONE STANDARD" delay={0.16} />
                <span className="block ml-[6%] text-[#0F2A3D] text-[24px] lg:text-[28px] tracking-[-0.02em] normal-case font-light italic mt-2" style={{ fontFamily: "var(--font-playfair)" }}>of excellence.</span>
              </h2>
              <p className="text-[14px] leading-6 opacity-60 mt-6 max-w-[420px]">Fourteen specialised corporate event types — each planned with research, creative direction, and show-day precision. No templates, no generic party planning.</p>
              <Link href="/services" className="inline-flex items-center gap-3 mt-8 bg-[#0F2A3D] text-white px-7 h-11 label-sm">
                View all 14 <span className="w-6 h-6 rounded-full bg-white text-[#0F2A3D] flex items-center justify-center text-xs">→</span>
              </Link>
              <div className="mt-10 hidden lg:block border border-[#0F2A3D]/10 bg-white p-5">
                <p className="label-sm opacity-30">Bespoke</p>
                <p className="text-sm leading-6 mt-2 opacity-70">Need hybrid, multi-city or fully custom? We architect it — research-led, zero-surprise.</p>
                <Link href="/contact" className="label-sm border-b border-[#0F2A3D] pb-1 mt-4 inline-block">Tell us your brief →</Link>
              </div>
            </Reveal>

            {/* scrollable right — 6 editorial blocks, each distinct asymmetric */}
            <div className="lg:col-span-7 space-y-14 lg:space-y-20">
              {featured.map((s, i) => {
                // distinct layouts per index
                if (i === 0) {
                  // full width overlapping
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`} data-cursor="VIEW" className="group block">
                      <div className="relative">
                        <div className="overflow-hidden relative">
                          <img src={s.image} alt={s.title} className="w-full h-[420px] lg:h-[480px] object-cover img-zoom" />
                          {/* curtain overlay — darkens and lifts a "View" cue in on hover, Bolte-style */}
                          <div className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <span className="reveal-on-hover absolute bottom-4 left-4 label-sm text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                            View service <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                          </span>
                          <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />
                        </div>
                        <div className="shift-on-hover absolute top-4 left-4 bg-white border border-[#0F2A3D]/10 px-3 py-1.5 label-sm transition-transform duration-500 group-hover:-translate-y-1">{s.number} — {s.title}</div>
                        <div className="lg:absolute lg:-bottom-8 lg:right-8 lg:w-[420px] bg-white border border-[#0F2A3D]/10 p-6 lg:p-7 mt-4 lg:mt-0 relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_24px_60px_rgba(15,42,61,0.14)] group-hover:-translate-y-1">
                          <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                          <h3 className="text-[20px] leading-none tracking-[-0.02em]" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                          <p className="text-[13px] leading-6 opacity-60 mt-3">{s.tagline}</p>
                          <span className="label-sm border-b border-[#0F2A3D]/15 pb-1 mt-4 inline-flex gap-2 group-hover:border-[#0F2A3D] group-hover:gap-3 transition-all duration-500">Explore <span className="group-hover:translate-x-1 transition-transform duration-500">→</span></span>
                        </div>
                        <p className="label-sm opacity-20 mt-3 lg:hidden">{s.number} · Featured</p>
                      </div>
                      <div className="hairline mt-10 hidden lg:block" />
                    </Link>
                  );
                }
                if (i === 1) {
                  // image right, text left overlapping
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`} data-cursor="VIEW" className="group grid lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-7 lg:order-2 overflow-hidden relative">
                        <img src={s.image} alt={s.title} className="w-full h-[380px] object-cover img-zoom" />
                        <div className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="shift-on-hover absolute bottom-3 right-3 bg-[#0F2A3D] text-white px-3 py-1 label-sm transition-transform duration-500 group-hover:-translate-y-1">{s.number}</span>
                        <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />
                      </div>
                      <div className="lg:col-span-5 lg:order-1 bg-white border border-[#0F2A3D]/10 p-6 lg:p-7 lg:mr-[-40px] relative overflow-hidden z-10 transition-all duration-500 group-hover:shadow-[0_24px_60px_rgba(15,42,61,0.14)]">
                        <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                        <h3 className="text-[18px] leading-none" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                        <p className="text-[13px] leading-6 opacity-60 mt-3">{s.tagline}</p>
                        <span className="label-sm opacity-40 mt-4 block group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">→ Discover</span>
                      </div>
                    </Link>
                  );
                }
                if (i === 2) {
                  // tall image left, small text right
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`} data-cursor="VIEW" className="group grid lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-7 overflow-hidden relative">
                        <img src={s.image} alt={s.title} className="w-full h-[520px] object-cover img-zoom" />
                        <div className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="reveal-on-hover absolute bottom-4 left-4 label-sm text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                          View format <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                        </span>
                        <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />
                        <p className="label-sm opacity-20 mt-2">{s.number} — Channel & dealer networks</p>
                      </div>
                      <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="border-l-2 border-[#FF3D00] pl-6 ml-2 relative overflow-hidden">
                          <h3 className="text-[20px] leading-none" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                          <p className="text-[13px] leading-6 opacity-60 mt-3">{s.tagline}</p>
                        </div>
                        <div className="mt-6 bg-[#FF3D00] text-white px-5 py-4 label-sm flex justify-between transition-colors duration-500 group-hover:bg-[#0F2A3D]">View format <span className="group-hover:translate-x-1 transition-transform duration-500 inline-block">→</span></div>
                      </div>
                    </Link>
                  );
                }
                if (i === 3) {
                  // split with caption overlay
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`} data-cursor="VIEW" className="group block relative">
                      <div className="grid lg:grid-cols-2 gap-4">
                        <div className="overflow-hidden relative">
                          <img src={s.image} alt={s.title} className="w-full h-[340px] object-cover img-zoom" />
                          <div className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />
                        </div>
                        <div className="bg-[#0F2A3D] text-white p-7 flex flex-col justify-center relative overflow-hidden transition-colors duration-500 group-hover:bg-[#132F44]">
                          <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                          <p className="label-sm opacity-40">{s.number}</p>
                          <h3 className="text-[22px] leading-none mt-3" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                          <p className="text-sm leading-6 opacity-60 mt-3">{s.tagline}</p>
                          <span className="mt-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:rotate-45 group-hover:border-[#FF3D00] group-hover:bg-[#FF3D00]">→</span>
                        </div>
                      </div>
                    </Link>
                  );
                }
                if (i === 4) {
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`} data-cursor="VIEW" className="group flex flex-col">
                      <div className="overflow-hidden relative">
                        <img src={s.image} alt={s.title} className="w-full h-[380px] object-cover img-zoom" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/50 to-transparent" />
                        <div className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="shift-on-hover absolute bottom-4 left-4 text-white text-[22px] leading-none transition-transform duration-500 group-hover:-translate-y-1" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                        <span className="shift-on-hover absolute top-4 left-4 bg-white px-3 py-1 label-sm transition-transform duration-500 group-hover:-translate-y-1">{s.number}</span>
                        <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />
                      </div>
                      <p className="text-[13px] leading-6 opacity-60 mt-3 max-w-[560px]">{s.tagline}</p>
                    </Link>
                  );
                }
                // i ===5
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} data-cursor="VIEW" className="group grid lg:grid-cols-12 gap-6 items-center border-t border-[#0F2A3D]/10 pt-10">
                    <div className="lg:col-span-5">
                      <p className="label-sm opacity-30">0{s.number} — Final featured</p>
                      <h3 className="text-[20px] leading-none mt-3" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                      <p className="text-[13px] leading-6 opacity-60 mt-3">{s.tagline}</p>
                      <span className="label-sm mt-4 inline-flex border border-[#0F2A3D] px-5 h-9 items-center transition-all duration-500 group-hover:bg-[#0F2A3D] group-hover:text-white group-hover:gap-2">Explore →</span>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden relative">
                      <img src={s.image} alt={s.title} className="w-full h-[340px] object-cover img-zoom" />
                      <div className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors duration-500" />
                    </div>
                  </Link>
                );
              })}
              <Link href="/contact" className="flex items-center justify-between bg-[#FF3D00] text-white px-6 h-12 label-sm hover:bg-[#0F2A3D]">
                <span>Need hybrid / multi-city / bespoke? — Start a conversation</span><span className="w-7 h-7 rounded-full bg-white text-[#0F2A3D] flex items-center justify-center text-xs">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS 04 : BLACK, marquee + sticky image ── */}
      <section className="relative bg-[#0F2A3D] text-white overflow-hidden">
        <div className="overflow-hidden border-y border-white/10">
          <div className="flex w-max whitespace-nowrap" style={{ animation: "marquee 16s linear infinite" }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="flex items-center gap-6 pr-6 py-3">
                <span className="text-[11vw] lg:text-[7vw] font-black leading-none tracking-[-0.05em] text-white" style={{ fontFamily: "var(--font-inter)" }}>RESEARCH · CONCEPT · DEVELOP · TEST ·</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* sticky image */}
            <div className="lg:col-span-6 lg:sticky lg:top-24 h-fit">
              <span className="hidden lg:block stroke-number-white text-[200px] leading-none absolute -top-10 -left-6 select-none pointer-events-none opacity-10">04</span>
              <div className="relative">
                <p className="label-sm text-white/40">Our Process — 04</p>
                <h3 className="text-[36px] lg:text-[48px] leading-[0.85] tracking-[-0.03em] mt-4 text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  How we turn<br />a brief into a<br /><span className="italic font-light">standing ovation.</span>
                </h3>
                <p className="text-sm leading-6 text-white/50 mt-6 max-w-[420px]">A calm, research-led sequence that removes chaos and leaves room for magic on show day. Zero-surprise delivery.</p>
                <div className="hairline-white mt-8 opacity-20" />
                <div className="mt-8 overflow-hidden">
                  <img src="/images/gallery/office-exterior.webp" alt="Process" className="w-full h-[380px] object-cover" />
                  <p className="label-sm text-white/30 mt-3">Run-of-show · Tech checks · Show-calling · Contingency</p>
                </div>
              </div>
            </div>

            {/* steps */}
            <div className="lg:col-span-6 space-y-0">
              {[
                { n: "01", t: "Research", d: "We study your organisation, audience, and objectives so every decision is grounded in context — not assumptions." },
                { n: "02", t: "Concept", d: "Creative direction, theme, and experience architecture that turn business goals into a compelling event narrative." },
                { n: "03", t: "Develop", d: "Detailed planning, vendor orchestration, production design, and run-of-show — built for zero-surprise delivery." },
                { n: "04", t: "Test", d: "Rehearsals, tech checks, and contingency planning so show day is calm, precise, and unforgettable." },
              ].map((step, idx) => (
                <motion.div key={step.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="py-10 lg:py-12 flex gap-6 lg:gap-8 border-b border-white/10 group hover:bg-white/[0.03] px-2 lg:px-6 -mx-2 lg:-mx-6">
                  <span className="text-[48px] lg:text-[64px] font-black leading-none tracking-[-0.05em] text-white/15 group-hover:text-white/30" style={{ fontFamily: "var(--font-inter)" }}>{step.n}</span>
                  <div className="flex-1 pt-2">
                    <h4 className="text-[22px] lg:text-[26px] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-playfair)" }}>{step.t}</h4>
                    <p className="text-sm leading-6 text-white/50 mt-3 max-w-[460px]">{step.d}</p>
                  </div>
                  <span className="hidden lg:flex w-8 h-8 rounded-full border border-white/15 text-white/40 group-hover:bg-white group-hover:text-[#0F2A3D] items-center justify-center text-xs">→</span>
                </motion.div>
              ))}
              <Link href="/about" className="inline-flex items-center gap-2 mt-8 bg-white text-[#0F2A3D] px-7 h-11 label-sm">See process in detail <span className="w-5 h-5 rounded-full bg-[#0F2A3D] text-white flex items-center justify-center text-xs">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY 05 : white, huge pull-quote + asymmetric bottom ── */}
      <section className="relative bg-white py-14 lg:py-20 overflow-hidden">
        <span className="hidden lg:block absolute top-10 right-10 stroke-number text-[300px] leading-none select-none pointer-events-none">05</span>
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 relative">
          <div className="hidden lg:block absolute left-10 top-0 bottom-0 w-px bg-[#0F2A3D]/10" />
          <span className="vertical-label hidden lg:block absolute left-2 top-20">WHY EVENTOSS — 05</span>

          {/* huge pull-quote */}
          <Reveal className="lg:ml-[7%]">
            <h2 className="orange-display text-[10vw] lg:text-[5.6vw] leading-[0.82]">
              <WordReveal as="span" className="block" text="CLIENTS SAY" />
              <WordReveal as="span" className="block ml-[10%]" text="THEY'VE NEVER" delay={0.08} />
              <WordReveal as="span" className="block" text="SEEN A SMOOTHER" delay={0.16} />
              <span className="block ml-[6%] text-[#0F2A3D]" style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}>SHOW-DAY.</span>
            </h2>
            <p className="label-sm opacity-30 mt-4">— 410+ clients · BFSI · FMCG · Tech · Manufacturing</p>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <Reveal direction="right" className="lg:col-span-7 relative">
              <div className="overflow-hidden">
                <img src="/images/gallery/celebrity-event.png" alt="Why" className="w-full h-[460px] lg:h-[560px] object-cover" />
              </div>
              <p className="label-sm opacity-30 mt-2">Founder-led · Delivery-obsessed · Local fluency, national standards</p>
              <div className="hidden lg:block absolute -bottom-8 -right-8 bg-[#F4F3F0] border border-[#0F2A3D]/10 p-6 max-w-[300px]">
                <p className="text-[15px] leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>Headquartered in Patna with presence across Delhi, Ranchi and beyond.</p>
                <p className="label-sm opacity-30 mt-2">208-A, Kaushalya Estate · 8-office network</p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1} className="lg:col-span-5">
              <h3 className="text-[26px] lg:text-[32px] leading-[0.9] tracking-[-0.03em]" style={{ fontFamily: "var(--font-playfair)" }}>
                Built for the pace<br />and <span className="italic font-light">polish</span> corporate<br />audiences expect.
              </h3>
              <div className="mt-8 space-y-0 divide-y divide-[#0F2A3D]/10 border-y border-[#0F2A3D]/10">
                {[
                  "End-to-end planning & production",
                  "Founder-led client partnerships",
                  "Multi-city delivery capability",
                  "4,700+ projects of muscle memory",
                  "Clear process, zero show-day chaos",
                  "Creative that serves business goals",
                ].map((item, idx) => (
                  <div key={item} className="flex gap-4 py-3.5 items-center">
                    <span className="label-sm opacity-20">0{idx + 1}</span>
                    <span className="text-[13.5px]">{item}</span>
                    <span className="ml-auto w-6 h-6 rounded-full border border-[#0F2A3D]/10 flex items-center justify-center text-xs">✓</span>
                  </div>
                ))}
              </div>
              {/* asymmetric 2 images instead of 3 equal */}
              <div className="mt-8 grid grid-cols-12 gap-4">
                <div className="col-span-7 overflow-hidden">
                  <img src="/images/gallery/event-setup.webp" alt="detail" className="w-full h-[200px] object-cover" />
                </div>
                <div className="col-span-5 flex flex-col gap-4">
                  <img src="/images/blog/12-away-from-chaos.jpg" alt="detail" className="w-full h-[92px] object-cover" />
                  <div className="bg-[#0F2A3D] text-white p-4 flex-1 flex flex-col justify-center">
                    <p className="label-sm opacity-40">Next step</p>
                    <Link href="/contact" className="text-sm mt-2 underline">Start a conversation →</Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* bottom bar — not centered button, editorial full-width */}
          <Link href="/contact" className="mt-14 flex items-center justify-between bg-[#0F2A3D] text-white px-6 lg:px-8 h-12 hover:bg-zinc-900">
            <span className="label-sm">Let&apos;s plan your next corporate event — Share your brief</span><span className="w-7 h-7 rounded-full bg-white text-[#0F2A3D] flex items-center justify-center text-xs">→</span>
          </Link>
        </div>
      </section>

      <VideoShowcase />

      <div className="hairline" />
      <div className="bg-[#F4F3F0] overflow-hidden py-3">
        <div className="flex w-max whitespace-nowrap" style={{ animation: "marquee 26s linear infinite" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-6 label-sm opacity-30">Corporate events planned with precision. Delivered with impact. <span className="w-1 h-1 bg-[#0F2A3D] rounded-full" /></span>
          ))}
        </div>
      </div>
      <div className="hairline" />
    </div>
  );
}
