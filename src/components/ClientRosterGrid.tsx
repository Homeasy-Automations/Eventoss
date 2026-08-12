"use client";

import { useState } from "react";
import { clientRoster, type ClientCategory } from "@/data/clients";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const tabs: Array<ClientCategory | "All"> = [
  "All",
  "Marketing & Advertising",
  "Events & Entertainment",
  "Media Production & Films",
  "PR & Digital Marketing",
];

/**
 * Compact, non-clickable grid of the real named-client roster — mirrors
 * the filterable tab structure eventoss.in itself uses on its Work page.
 */
export default function ClientRosterGrid() {
  const [active, setActive] = useState<ClientCategory | "All">("All");

  const visible = active === "All" ? clientRoster : clientRoster.filter((c) => c.category === active);

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

      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mt-8" stagger={0.03}>
        {visible.map((c) => (
          <RevealItem key={c.slug} className="h-full">
            <div className="group relative h-full border border-[#0F2A3D]/10 bg-[#FCFCFB] lg:bg-white p-5 lg:p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0F2A3D]/20 hover:shadow-[0_24px_60px_rgba(15,42,61,0.14)]">
              <span className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF3D00] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <div className="flex items-center justify-between gap-4">
                <p className="label-sm opacity-30">{c.category}</p>
                <div className="w-11 h-11 flex-shrink-0 border border-[#0F2A3D]/10 bg-white flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-[#0F2A3D]/25 group-hover:scale-[1.08]">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.client} logo`}
                      className="w-full h-full object-contain p-1.5 grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  ) : (
                    <span className="label-sm opacity-40 transition-colors duration-500 group-hover:opacity-70" style={{ fontFamily: "var(--font-playfair)" }}>
                      {c.client
                        .split(" ")
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-[17px] leading-tight tracking-[-0.01em] mt-4 transition-transform duration-500 group-hover:translate-x-0.5" style={{ fontFamily: "var(--font-playfair)" }}>
                {c.client}
              </h3>
              <p className="text-[13px] leading-6 opacity-60 mt-2.5">{c.description}</p>
              <span className="absolute inset-0 border border-transparent group-hover:border-[#0F2A3D]/5 transition-colors duration-500 pointer-events-none" />
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
