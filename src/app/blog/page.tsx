import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { HeroImageBand } from "@/components/HeroImageBand";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Insights & Updates | Eventoss",
  description: "Eventoss Entertainment's blog — insights on events, public relations, digital marketing, and news from a decade-plus of live experiences.",
};

export default function BlogPage() {
  return (
    <div className="bg-transparent">
      <section className="pt-[60px]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 border-b border-[#0F2A3D]/10">
            <span className="label-sm opacity-30">Blog — {blogPosts.length} articles</span>
            <span className="label-sm opacity-30 hidden lg:block">Est. 2012 · Patna · Delhi · Ranchi</span>
          </div>

          <div className="mt-8">
            <h1 className="orange-display text-[12vw] lg:text-[8vw] leading-[0.82]">
              <WordReveal as="span" className="block" text="THOUGHTS &" />
              <WordReveal as="span" className="block ml-[10%]" text="UPDATES." delay={0.08} />
            </h1>
            <p className="label-sm opacity-30 mt-4 tracking-[0.18em]">EVENTS · PUBLIC RELATIONS · DIGITAL MARKETING · AGENCY NEWS</p>
          </div>

          <HeroImageBand
            src="/images/gallery/blog.png"
            alt="Eventoss blog"
            chipLeft={`${blogPosts.length} Articles`}
            chipRight="Patna · Delhi · Ranchi"
            quote="Notes from a decade-plus of building brands and producing live experiences."
            quoteAttribution="Eventoss Entertainment"
            heightClassName="h-[360px] lg:h-[480px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
        <div className="hairline" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 5) * 0.04}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="READ"
                className="group relative flex flex-col h-full border border-[#0F2A3D]/10 bg-[#FCFCFB] lg:bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_24px_60px_rgba(15,42,61,0.14)] hover:-translate-y-1"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#0F2A3D]/10 px-3 py-1.5 label-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex-1 flex flex-col p-6 lg:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <p className="label-sm opacity-40">{post.date}</p>
                    <span className="w-7 h-7 rounded-full border border-[#0F2A3D]/15 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#FF3D00] group-hover:border-[#FF3D00] group-hover:text-white">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                  <h2 className="text-[19px] lg:text-[20px] leading-[1.15] tracking-[-0.01em] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    {post.title}
                  </h2>
                  <p className="text-[13px] leading-6 opacity-60 mt-3 line-clamp-3 flex-1">{post.excerpt}</p>
                  <span className="reveal-on-hover inline-flex items-center gap-2 label-sm mt-5 border-b border-[#0F2A3D]/20 pb-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-[#0F2A3D] transition-all duration-500">
                    Read the article <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
