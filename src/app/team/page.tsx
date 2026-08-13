import type { Metadata } from "next";
import Link from "next/link";
import { team } from "@/data/team";
import { ArrowUpRight } from "lucide-react";
import PageVideoHero from "@/components/PageVideoHero";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Team — People Behind Every Standing Ovation | Eventoss",
  description: "Founder-led. Delivery-obsessed.",
};

export default function TeamPage() {
  return (
    <div className="bg-transparent">
      <PageVideoHero
        videoSrc="/herovid.mp4"
        poster="/images/gallery/team-outdoor.jpeg"
        chipLeft="Leadership · Members"
        chipRight="Patna HQ"
        bottomLabel="EVENTOSS ENTERTAINMENT · LEADERSHIP"
        eyebrow="LEADERSHIP · FOUNDER-LED · DELIVERY-OBSESSED"
        heading={
          <span className="block text-[11vw] lg:text-[4.6vw]">
            The people behind every{" "}
            <span className="text-[#FF8A5B]">
              standing{" "}
              <span className="italic font-normal" style={{ fontFamily: "var(--font-cormorant)" }}>
                ovation.
              </span>
            </span>
          </span>
        }
      />

      <section className="pt-8 lg:pt-10">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10 border-b border-[#0F2A3D]/10 pb-8">
          <Reveal>
            <p className="label-sm opacity-30 tracking-[0.18em] mb-4">LEADERSHIP · FOUNDER-LED · DELIVERY-OBSESSED</p>
            <h2 className="text-[30px] lg:text-[42px] leading-[0.95] tracking-[-0.03em]" style={{ fontFamily: "var(--font-playfair)" }}>
              <WordReveal as="span" className="block" text="Twelve years, one" />
              <span className="block"><span className="italic font-light" style={{ fontFamily: "var(--font-cormorant)" }}>standing</span> promise: show up prepared.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-10 lg:py-16">
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
                  <img src={member.image} alt={member.name} className="w-full h-[480px] object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
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
