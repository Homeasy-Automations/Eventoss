import type { Metadata } from "next";
import Link from "next/link";
import { team } from "@/data/team";
import { ArrowUpRight } from "lucide-react";
import { VideoTeaserHero } from "@/components/VideoTeaserHero";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Team — People Behind Every Standing Ovation | Eventoss",
  description: "Founder-led. Delivery-obsessed.",
};

export default function TeamPage() {
  return (
    <div className="bg-transparent">
      <section className="pt-[60px]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 border-b border-[#0F2A3D]/10">
            <span className="label-sm opacity-30">Leadership — 01</span>
            <span className="label-sm opacity-30">Founder-led · Delivery-obsessed</span>
          </div>
          <h1 className="orange-display text-[11vw] lg:text-[7.4vw] leading-[0.82] mt-6">
            <WordReveal as="span" className="block" text="THE PEOPLE" />
            <WordReveal as="span" className="block ml-[8%]" text="BEHIND EVERY" delay={0.08} />
            <WordReveal as="span" className="block" text="STANDING OVATION." delay={0.16} />
          </h1>
          <p className="text-[14px] leading-6 opacity-60 mt-4 max-w-[560px]">Founder-led. Delivery-obsessed. Meet the leadership team steering Eventoss Corporate Events.</p>
          <VideoTeaserHero
            src="/images/gallery/team-outdoor.jpeg"
            alt="Eventoss leadership team"
            chipLeft="Leadership · Members"
            chipRight="Patna HQ"
            quote="Strategy, client partnerships, creative direction — founder-led on every engagement."
            quoteAttribution="Patna HQ"
            heightClassName="h-[300px] lg:h-[400px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
        {/* Featured founder full bleed */}
        <Reveal className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 group border border-[#0F2A3D]/10 overflow-hidden bg-[#FCFCFB] grid lg:grid-cols-2">
            <div className="relative overflow-hidden">
              <img src={team[0].image} alt={team[0].name} className="w-full h-[560px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <span className="absolute top-4 left-4 bg-white border border-[#0F2A3D]/10 px-3 py-1 label-sm">01 — Founder</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <p className="label-sm opacity-30">{team[0].title}</p>
              <h3 className="text-[26px] leading-none tracking-[-0.02em] mt-3" style={{ fontFamily: "var(--font-playfair)" }}>{team[0].name}</h3>
              <p className="text-[13.5px] leading-6 opacity-60 mt-4">{team[0].bio}</p>
              <div className="mt-6 flex gap-2">
                <span className="w-8 h-8 rounded-full border border-[#0F2A3D]/10 flex items-center justify-center text-xs">in</span>
                <span className="w-8 h-8 rounded-full border border-[#0F2A3D]/10 flex items-center justify-center text-xs">@</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[#0F2A3D] text-white p-7 flex flex-col justify-center flex-1">
              <p className="label-sm opacity-40">Patna HQ</p>
              <p className="text-lg leading-snug mt-3" style={{ fontFamily: "var(--font-playfair)" }}>&ldquo;Strategy, client partnerships, creative direction — founder-led on every engagement.&rdquo;</p>
              <p className="label-sm opacity-30 mt-4">208-A, Kaushalya Estate · 8-office network</p>
            </div>
            <img src="/images/eventoss-aliwaris-action.jpg" alt="Eventoss entertainment direction in action" className="w-full h-[260px] object-cover transition-transform duration-700 hover:scale-[1.04]" />
          </div>
        </Reveal>

        {/* Two remaining — asymmetric 6/6 but with overlap */}
        <div className="mt-6 grid lg:grid-cols-12 gap-6">
          {team.slice(1).map((member, idx) => (
            <Reveal key={member.slug} delay={idx * 0.08} direction={idx === 0 ? "right" : "left"} className={idx === 0 ? "lg:col-span-6" : "lg:col-span-6 lg:mt-12"}>
              <div className="group border border-[#0F2A3D]/10 overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-[480px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <span className="absolute top-4 left-4 bg-white border border-[#0F2A3D]/10 px-3 py-1 label-sm">0{idx + 2}</span>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0F2A3D]/70 to-transparent p-6">
                    <p className="text-white label-sm opacity-70">{member.title}</p>
                    <h3 className="text-white text-[20px] leading-none mt-2" style={{ fontFamily: "var(--font-playfair)" }}>{member.name}</h3>
                  </div>
                </div>
                <div className="p-6"><p className="text-[13.5px] leading-6 opacity-60">{member.bio}</p></div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex items-center justify-between bg-[#F4F3F0] border border-[#0F2A3D]/10 p-6 lg:p-8">
          <div><p className="label-sm opacity-30">Join the team</p><p className="text-xl mt-2" style={{ fontFamily: "var(--font-playfair)" }}>We&apos;re always looking for delivery-obsessed talent.</p></div>
          <Link href="/contact" className="bg-[#0F2A3D] text-white px-8 h-11 inline-flex items-center gap-2 label-sm">Get in touch <ArrowUpRight className="w-3 h-3" /></Link>
        </Reveal>
      </section>
    </div>
  );
}
