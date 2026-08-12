"use client";

import { useState } from "react";
import { brandRoster, type ClientCategory } from "@/data/clients";
import Reveal from "@/components/Reveal";

const tabs: Array<ClientCategory | "All"> = [
  "All",
  "Marketing & Advertising",
  "Events & Entertainment",
  "Media Production & Films",
  "PR & Digital Marketing",
];

/**
 * Compact, non-clickable grid of the real named-client roster — one card
 * per brand (deduplicated across repeat engagements) — mirrors the
 * filterable tab structure eventoss.in itself uses on its Work page.
 */
export default function ClientRosterGrid() {
  const [active, setActive] = useState<ClientCategory | "All">("All");

  const visible = active === "All" ? brandRoster : brandRoster.filter((c) => c.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
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
            <div className="group relative h-[190px] border border-[#0F2A3D]/10 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0F2A3D]/25 hover:shadow-[0_24px_60px_rgba(15,42,61,0.16)]">
              {/* Logo-as-background layer */}
              <div className="absolute inset-0 bg-[#FCFCFB]">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain p-8 grayscale opacity-[0.12] scale-95 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-25 group-hover:grayscale-0 group-hover:scale-110"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 -bottom-4 text-[92px] leading-none font-black text-[#0F2A3D] opacity-[0.06] tracking-[-0.05em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-[0.1] group-hover:scale-110 group-hover:-translate-y-1"
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

              {/* Orange accent line — grows in on hover */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 z-10" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col p-5 lg:p-6">
                <p className="label-sm opacity-30 transition-colors duration-500 group-hover:opacity-50">{c.category}</p>
                <h3 className="text-[19px] leading-tight tracking-[-0.01em] mt-4 transition-transform duration-500 group-hover:translate-x-0.5" style={{ fontFamily: "var(--font-playfair)" }}>
                  {c.client}
                </h3>
                <p className="text-[13px] leading-6 opacity-60 mt-2.5 line-clamp-3">{c.description}</p>
              </div>

              <span className="absolute inset-0 border border-transparent group-hover:border-[#0F2A3D]/5 transition-colors duration-500 pointer-events-none z-10" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
