import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pillars } from "@/data/services";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export function generateStaticParams() {
  return pillars.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = pillars.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Eventoss`,
    description: service.description,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = pillars.find((s) => s.slug === slug);
  if (!service) notFound();
  const idx = pillars.findIndex((s) => s.slug === slug);
  const next = pillars[(idx + 1) % pillars.length];
  const prev = pillars[(idx - 1 + pillars.length) % pillars.length];

  return (
    <div className="bg-transparent">
      <section className="pt-[60px]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 border-b border-[#0F2A3D]/10">
            <span className="label-sm opacity-30"><Link href="/services" className="hover:opacity-60">Services</Link> · {service.number}</span>
            <span className="label-sm opacity-30">Research → Concept → Develop → Test</span>
          </div>
          <h1 className="orange-display text-[10vw] lg:text-[6vw] leading-[0.82] mt-6 max-w-[900px]">
            <WordReveal as="span" className="block" text={service.title.split(" ").slice(0,2).join(" ") || service.title} />
            <WordReveal as="span" className="block ml-[8%]" text={service.title.split(" ").slice(2).join(" ") || service.title} delay={0.08} />
          </h1>
          <p className="text-[14px] leading-6 opacity-60 mt-4 max-w-[640px]">{service.tagline}</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="bg-[#0F2A3D] text-white px-7 h-10 inline-flex items-center label-sm">Start a conversation</Link>
            <Link href="/work" className="border border-[#0F2A3D]/15 px-7 h-10 inline-flex items-center label-sm hover:bg-[#0F2A3D] hover:text-white">View work</Link>
          </div>
          <Reveal className="mt-8 overflow-hidden h-[360px] lg:h-[460px]">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-top" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal direction="right" className="lg:col-span-7">
            <p className="label-sm opacity-30">Overview — {service.number}</p>
            <h2 className="text-[28px] lg:text-[36px] leading-[0.92] tracking-[-0.03em] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Planned with precision.<br />Delivered with <span className="italic font-light">impact.</span>
            </h2>
            <p className="text-[15px] leading-7 opacity-60 mt-6 max-w-[600px]">{service.description}</p>

            {/* Gallery wall — framed, alternating aspect-ratio photo cards, one per
                sub-offering. Mat-board border + numbered corner tab echo the
                site's existing card language; grayscale→colour hover matches
                the team page treatment. */}
            <p className="label-sm opacity-30 mt-10">What&apos;s included — {service.subservices.length} offerings</p>
            <div className="mt-4 grid grid-cols-2 gap-4 lg:gap-5">
              {service.subservices.map((sub, i) => (
                <div
                  key={sub.slug}
                  className={`group ${i % 2 === 1 ? "mt-6 lg:mt-10" : ""}`}
                >
                  <div className="relative overflow-hidden bg-white border border-[#0F2A3D]/10 p-1.5">
                    <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`}>
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                      />
                      <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/90 border border-[#0F2A3D]/10 flex items-center justify-center label-sm text-[10px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="accent-bar absolute left-0 bottom-0 right-0 h-[3px] bg-[#FF3D00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    </div>
                  </div>
                  <h3 className="text-[15px] leading-5 mt-3" style={{ fontFamily: "var(--font-playfair)" }}>{sub.title}</h3>
                  <p className="text-[12.5px] leading-5 opacity-50 mt-1.5">{sub.blurb}</p>
                </div>
              ))}
            </div>

            {/* Full offerings checklist — the original detailed, text-based
                list, kept alongside the curated photo gallery above so
                nothing from the previous list view is lost. */}
            <p className="label-sm opacity-30 mt-12">Full list of services — {service.fullOfferings.length}</p>
            <div className="mt-4 grid grid-cols-1 gap-0 border-y border-[#0F2A3D]/10 divide-y divide-[#0F2A3D]/10">
              {service.fullOfferings.map((item, i) => (
                <div key={item} className="group flex gap-4 py-4 items-start transition-colors duration-300 hover:bg-[#FCFCFB] active:bg-[#FCFCFB] px-2 -mx-2">
                  <span className="w-7 h-7 rounded-full bg-[#0F2A3D] text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-[#FF3D00]">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-sm leading-6">{item}</span>
                  <span className="ml-auto label-sm opacity-20 hidden lg:block">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="lg:col-span-5">
            <div className="group bg-[#FCFCFB] border border-[#0F2A3D]/10 p-6 lg:p-8 sticky top-20 relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(15,42,61,0.10)]">
              <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <p className="label-sm opacity-30">What we cover</p>
              <ul className="mt-6 space-y-3">
                {service.subservices.map((sub) => (
                  <li key={sub.slug} className="flex items-center gap-3 text-sm leading-6">
                    <img src={sub.image} alt="" className="w-9 h-9 rounded-full object-cover border border-[#0F2A3D]/10 flex-shrink-0 grayscale" />
                    {sub.title}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3">
                <Link href="/contact" className="w-full bg-[#0F2A3D] text-white h-11 inline-flex items-center justify-center label-sm gap-2 transition-all duration-300 hover:bg-[#FF3D00] hover:gap-3">
                  Start a conversation <ArrowRight className="w-3 h-3" />
                </Link>
                <a href="https://wa.me/917061528401" target="_blank" rel="noopener noreferrer" className="w-full border border-[#0F2A3D] h-11 inline-flex items-center justify-center label-sm transition-colors duration-300 hover:bg-[#0F2A3D] hover:text-white">
                  WhatsApp us
                </a>
              </div>
              <p className="text-xs opacity-40 mt-4 text-center">Response within 24 hours · Patna · Delhi · Ranchi</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 pb-12">
        <Reveal className="grid lg:grid-cols-3 gap-4">
          <div className="group overflow-hidden relative lg:col-span-2">
            <img src={service.image} alt={service.title} className="img-zoom w-full h-[420px] object-top" />
            <span className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/40 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="group overflow-hidden relative">
            <img src={service.secondaryImage} alt={service.title} className="img-zoom w-full h-[420px] object-cover" />
            <span className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/40 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[#0F2A3D]/10 bg-[#FCFCFB]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 py-10">
          <div className="hairline" />
          <p className="label-sm opacity-30 text-center py-3">RESEARCH → CONCEPT → DEVELOP → TEST — EVERY VERTICAL FOLLOWS THE SAME RIGOROUS SEQUENCE</p>
          <div className="hairline" />
          <div className="grid lg:grid-cols-4 gap-6 mt-8">
            {[
              { n: "01", t: "Research" },
              { n: "02", t: "Concept" },
              { n: "03", t: "Develop" },
              { n: "04", t: "Test" },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06} className="group border border-[#0F2A3D]/10 p-6 bg-white relative overflow-hidden transition-all duration-500 hover:shadow-[0_16px_40px_rgba(15,42,61,0.10)] hover:-translate-y-1">
                <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                <p className="text-3xl font-black opacity-10 transition-opacity duration-500 group-hover:opacity-25" style={{ fontFamily: "var(--font-inter)" }}>{p.n}</p>
                <p className="label-sm mt-3">{p.t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <Link href={`/services/${prev.slug}`} className="group border border-[#0F2A3D]/10 p-6 lg:p-8 flex justify-between items-center transition-colors duration-500 hover:bg-[#0F2A3D] hover:text-white">
            <div><p className="label-sm opacity-30 group-hover:text-white/50 transition-colors duration-500">Previous</p><p className="text-lg mt-2" style={{ fontFamily: "var(--font-playfair)" }}>{prev.title}</p></div>
            <ArrowUpRight className="w-5 h-5 rotate-180 transition-transform duration-500 group-hover:-translate-x-1" />
          </Link>
          <Link href={`/services/${next.slug}`} className="group border border-[#0F2A3D]/10 p-6 lg:p-8 flex justify-between items-center transition-colors duration-500 hover:bg-[#0F2A3D] hover:text-white">
            <div><p className="label-sm opacity-30 group-hover:text-white/50 transition-colors duration-500">Next</p><p className="text-lg mt-2" style={{ fontFamily: "var(--font-playfair)" }}>{next.title}</p></div>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
