import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { HeroImageBand } from "@/components/HeroImageBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Contact — Let's Plan Your Next Corporate Event | Eventoss",
  description: "Share your brief, dates, and city — our team will respond with next steps.",
};

export default function ContactPage() {
  return (
    <div className="bg-transparent">
      <section className="pt-[60px]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 border-b border-[#0F2A3D]/10">
            <span className="label-sm opacity-30">Contact — Start the conversation</span>
            <span className="label-sm opacity-30">Response within 24 hours</span>
          </div>
          <h1 className="orange-display text-[11vw] lg:text-[7.6vw] leading-[0.82] mt-6">
            <WordReveal as="span" className="block" text="LET'S PLAN" />
            <WordReveal as="span" className="block ml-[10%]" text="YOUR NEXT" delay={0.08} />
            <WordReveal as="span" className="block" text="CORPORATE EVENT." delay={0.16} />
          </h1>
          <p className="text-sm leading-6 opacity-60 mt-4 max-w-[520px]">Share your brief, dates, and city — our team will respond with next steps.</p>
          <HeroImageBand
            src="/images/gallery/event-crowd.png"
            alt="Start planning your Eventoss corporate event"
            chipLeft="Response within 24 hours"
            chipRight="Patna · Delhi · Ranchi"
            quote="Share your brief — we'll shape the rest."
            quoteAttribution="Eventoss Corporate Events"
            heightClassName="h-[340px] lg:h-[460px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <Reveal direction="right" className="lg:col-span-5">
            <div className="lg:sticky lg:top-20">
              <h2 className="text-[28px] lg:text-[32px] leading-none tracking-[-0.03em]" style={{ fontFamily: "var(--font-playfair)" }}>Start the conversation</h2>
              <div className="mt-10 space-y-8">
                <div className="border-t border-[#0F2A3D]/10 pt-6">
                  <p className="label-sm opacity-30">Office</p>
                  <p className="text-sm leading-6 mt-3">208-A, Kaushalya Estate,<br />Dak Bungalow Road,<br />Patna, Bihar 800001,<br />India</p>
                </div>
                <div className="border-t border-[#0F2A3D]/10 pt-6 grid grid-cols-2 gap-6">
                  <div>
                    <p className="label-sm opacity-30">Phone</p>
                    <div className="mt-3 space-y-1 text-sm">
                      <a href="tel:+917061528401" className="block hover:underline">+91 70615 28401</a>
                      <a href="tel:+917061528402" className="block hover:underline">+91 70615 28402</a>
                      <a href="tel:+916122230055" className="block hover:underline">+91 0612 2230055</a>
                    </div>
                  </div>
                  <div>
                    <p className="label-sm opacity-30">Email & WhatsApp</p>
                    <div className="mt-3 space-y-1 text-sm">
                      <a href="mailto:info@eventoss.in" className="block hover:underline">info@eventoss.in</a>
                      <a href="https://wa.me/917061528401" className="block hover:underline">+91 70615 28401</a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#0F2A3D]/10 pt-6">
                  <p className="label-sm opacity-30">Offices</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Patna", "Delhi", "Ranchi", "Pan-India · 8-office network"].map((c) => (
                      <span key={c} className="border border-[#0F2A3D]/10 px-3 py-1.5 label-sm bg-white">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#0F2A3D] text-white p-6">
                  <p className="label-sm opacity-50">Prefer WhatsApp?</p>
                  <p className="text-sm leading-6 mt-3 opacity-70">Message us directly for quick coordination on dates, venues, and availability.</p>
                  <a href="https://wa.me/917061528401" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex bg-white text-[#0F2A3D] px-6 h-9 items-center label-sm">Chat on WhatsApp</a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="lg:col-span-7">
            <div className="bg-[#FCFCFB] border border-[#0F2A3D]/10 p-6 lg:p-10">
              <p className="label-sm opacity-30">Enquiry form</p>
              <h3 className="text-xl tracking-[-0.02em] mt-3" style={{ fontFamily: "var(--font-playfair)" }}>Tell us about your event</h3>
              <p className="text-sm opacity-60 mt-2">We respond within 24 hours with next steps and availability.</p>
              <div className="mt-8"><ContactForm /></div>
            </div>
            <div className="mt-6 bg-[#F4F3F0] border border-[#0F2A3D]/5 p-6 flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-[#0F2A3D] text-white flex items-center justify-center flex-shrink-0 text-xs">✓</span>
              <p className="text-sm leading-6 opacity-60">Your information is confidential. We use it only to prepare a tailored proposal and never share it externally.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
