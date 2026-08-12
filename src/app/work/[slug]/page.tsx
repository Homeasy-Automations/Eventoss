import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/work";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import WordReveal from "@/components/WordReveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Eventoss Work`,
    description: project.tagline,
  };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="bg-transparent">
      <section className="pt-[60px]">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 border-b border-[#0F2A3D]/10">
            <span className="label-sm opacity-30"><Link href="/work" className="hover:opacity-60 inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Work</Link> · {project.number} / 06</span>
            <span className="label-sm opacity-30">{project.eventType} · {project.location} · {project.year}</span>
          </div>
          <h1 className="orange-display text-[10vw] lg:text-[6vw] leading-[0.82] mt-6">
            <WordReveal as="span" className="block" text={project.title.split(" ").slice(0,1).join(" ")} />
            <WordReveal as="span" className="block ml-[8%]" text={project.title.split(" ").slice(1).join(" ") || project.title} delay={0.08} />
          </h1>
          <p className="text-sm leading-6 opacity-60 mt-3 max-w-[600px]">&ldquo;{project.tagline}&rdquo; — {project.client}</p>
          <Reveal className="mt-6 overflow-hidden h-[380px] lg:h-[520px]">
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal direction="right" className="lg:col-span-4">
            <div className="group bg-[#FCFCFB] border border-[#0F2A3D]/10 p-6 lg:p-8 sticky top-20 relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(15,42,61,0.10)]">
              <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <p className="label-sm opacity-30">Project overview</p>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-[#0F2A3D]/10 pb-3"><span className="opacity-50">Client</span><span className="font-medium text-right max-w-[160px]">{project.client}</span></div>
                <div className="flex justify-between border-b border-[#0F2A3D]/10 pb-3"><span className="opacity-50">Event type</span><span className="font-medium">{project.eventType}</span></div>
                <div className="flex justify-between border-b border-[#0F2A3D]/10 pb-3"><span className="opacity-50">Location</span><span className="font-medium">{project.location}</span></div>
                <div className="flex justify-between"><span className="opacity-50">Year</span><span className="font-medium">{project.year}</span></div>
              </div>
              <div className="mt-8"><p className="label-sm opacity-30">Highlights</p><ul className="mt-4 space-y-2">{project.highlights.map((h) => (<li key={h} className="text-sm leading-6 flex gap-2"><span className="w-1 h-1 bg-[#0F2A3D] rounded-full mt-2 flex-shrink-0" /> {h}</li>))}</ul></div>
              <Link href="/contact" className="mt-8 w-full bg-[#0F2A3D] text-white h-11 inline-flex items-center justify-center label-sm transition-colors duration-300 hover:bg-[#FF3D00]">Start a similar project</Link>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="lg:col-span-8">
            <p className="label-sm opacity-30">The story</p>
            <div className="mt-6 space-y-6 text-[15px] leading-7 opacity-70 max-w-[680px]">
              {project.story.map((para, i) => (<p key={i}><span className={i===0?"dropcap":""}>{i===0?para[0]:""}</span>{i===0?para.slice(1):para}</p>))}
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="group overflow-hidden relative">
                  <img src={img} alt={`${project.title} ${i+1}`} className="img-zoom w-full h-[260px] object-cover" />
                  <span className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/50 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            {/* on-the-ground project footage — real Eventoss YouTube video */}
            <div className="mt-10">
              <p className="label-sm opacity-30 mb-3">Watch — footage from this event</p>
              <div className="aspect-video overflow-hidden border border-[#0F2A3D]/10 bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={`${project.title} — Eventoss project footage`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="group relative overflow-hidden mt-12 bg-[#F4F3F0] border border-[#0F2A3D]/5 p-6 lg:p-8 transition-colors duration-500 hover:bg-[#0F2A3D] hover:text-white">
              <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <p className="text-lg leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>&ldquo;Precision is not an accident. Every moment was show-called, every transition timed — so leadership could focus on the conversation, not the logistics.&rdquo;</p>
              <p className="label-sm opacity-30 mt-4 group-hover:text-white/50 transition-colors duration-500">— Eventoss show-calling team</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 lg:px-10 pb-16">
        <div className="hairline" />
        <Reveal>
          <Link href={`/work/${next.slug}`} className="group block mt-8 bg-[#FCFCFB] border border-[#0F2A3D]/10 overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(15,42,61,0.14)]">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 overflow-hidden relative">
                <img src={next.heroImage} alt={next.title} className="w-full h-[360px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                <span className="curtain-overlay absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/50 via-[#0F2A3D]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                <p className="label-sm opacity-30">Next project — {next.number}</p>
                <h3 className="text-[26px] leading-none tracking-[-0.03em] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>{next.title}</h3>
                <p className="text-sm opacity-60 mt-3">{next.tagline}</p>
                <span className="inline-flex items-center gap-2 label-sm mt-6 border border-[#0F2A3D] px-6 h-10 w-fit group-hover:bg-[#0F2A3D] group-hover:text-white">View case study <ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
