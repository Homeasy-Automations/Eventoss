"use client";

import { useState } from "react";
import { brandRoster, type ClientCategory } from "@/data/clients";
import Reveal from "@/components/Reveal";
import ClientDetailModal from "@/components/ClientDetailModal";

const tabs: Array<ClientCategory | "All"> = [
  "All",
  "Marketing & Advertising",
  "Events & Entertainment",
  "Media Production & Films",
  "PR & Digital Marketing",
];

/**
 * Grid of the real named-client roster — one card per brand (deduplicated
 * across repeat engagements) — mirrors the filterable tab structure
 * eventoss.in itself uses on its Work page. Clicking a card opens a detail
 * popup (image + description), matching eventoss.in's own project lightbox.
 */
export default function ClientRosterGrid() {
  const [active, setActive] = useState<ClientCategory | "All">("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visible = active === "All" ? brandRoster : brandRoster.filter((c) => c.category === active);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
  const showNext = () => setSelectedIndex((i) => (i === null ? null : (i + 1) % visible.length));

  return (
    <div>
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActive(tab);
              setSelectedIndex(null);
            }}
            className={`label-sm px-4 py-2 border transition-colors duration-300 ${
              active === tab
                ? "bg-[#0F2A3D] text-white border-[#0F2A3D]"
                : "border-[#0F2A3D]/15 text-[#0F2A3D]/60 hover:border-[#0F2A3D]/40"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Each card tracks its own scroll position (rather than one shared
          observer for the whole — often very tall — grid), so cards fade
          in progressively as you scroll past them instead of some being
          missed on first paint and only appearing after a refresh. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mt-8">
        {visible.map((c, i) => (
          <Reveal key={c.slug} direction="up" distance={20} duration={0.55} amount={0.15} delay={(i % 6) * 0.05}>
            <div
              role="button"
              tabIndex={0}
              data-cursor="VIEW"
              onClick={() => setSelectedIndex(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIndex(i);
                }
              }}
              className="group relative h-[240px] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,42,61,0.28)]"
            >
              {/* Full-card background — brand colour panel with the logo (or
                  monogram fallback) as the hero art, so the whole card reads
                  as one image rather than a small watermark in the corner. */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A3D] to-[#16374F]">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain p-7 lg:p-8 grayscale opacity-60 scale-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center text-[88px] leading-none font-black text-white/10 tracking-[-0.05em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-white/20 group-hover:scale-110"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {c.client
                      .split(" ")
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                )}
              </div>

              {/* Permanent bottom-up gradient for text readability against
                  the image, deepening slightly on hover. */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D] via-[#0F2A3D]/70 to-[#0F2A3D]/20 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Orange accent line — grows in on hover */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 z-10" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-5 lg:p-6">
                <p className="label-sm text-white/45 transition-colors duration-500 group-hover:text-white/65">{c.category}</p>
                <h3 className="text-[20px] leading-tight tracking-[-0.01em] mt-3 text-white transition-transform duration-500 group-hover:-translate-y-0.5" style={{ fontFamily: "var(--font-playfair)" }}>
                  {c.client}
                </h3>
                <p className="text-[13px] leading-6 text-white/55 mt-2.5 line-clamp-2 max-h-0 opacity-0 -translate-y-1 group-hover:max-h-20 group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                  {c.description}
                </p>
              </div>

              <span className="absolute inset-0 border border-white/10 group-hover:border-white/25 transition-colors duration-500 pointer-events-none z-10" />
            </div>
          </Reveal>
        ))}
      </div>

      <ClientDetailModal
        client={selectedIndex === null ? null : visible[selectedIndex]}
        onClose={closeModal}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  );
}
