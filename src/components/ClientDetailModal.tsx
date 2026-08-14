"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ClientEntry } from "@/data/clients";

type ClientDetailModalProps = {
  client: ClientEntry | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

/**
 * Full-screen "project detail" popup opened from a we've-worked-with card —
 * mirrors eventoss.in's own work-page lightbox: dark scrim, large image on
 * the left, a description panel on the right, plus prev/next + close
 * controls. Client component because it owns focus/scroll-lock/keyboard
 * behaviour.
 */
export default function ClientDetailModal({ client, onClose, onPrev, onNext }: ClientDetailModalProps) {
  const isOpen = Boolean(client);

  // Portals need a browser `document` — guard so this only renders after
  // mount, avoiding an SSR/hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Lock body scroll + wire up Escape / Arrow keys while open.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!mounted) return null;

  // Rendered via a portal straight to <body> — this deliberately escapes
  // PageTransition's animated wrapper (it moves `y` on a motion.div, which
  // creates a new stacking context) so the popup's z-index is evaluated
  // at the root level and can never end up pinned under the fixed navbar.
  return createPortal(
    <AnimatePresence>
      {client && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pt-20 lg:p-10 lg:pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Scrim */}
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-[#0F2A3D]/90 backdrop-blur-sm cursor-default"
          />

          {/* Top bar controls — prev / next / close, matching the reference lightbox */}
          <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-5 lg:px-8 py-5">
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous project"
                onClick={onPrev}
                className="w-11 h-11 flex items-center justify-center border border-white/25 text-white hover:bg-white hover:text-[#0F2A3D] transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Next project"
                onClick={onNext}
                className="w-11 h-11 flex items-center justify-center border border-white/25 text-white hover:bg-white hover:text-[#0F2A3D] transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center border border-white/25 text-white hover:bg-white hover:text-[#0F2A3D] transition-colors duration-300"
            >
              <X size={20} />
            </button>
          </div>

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${client.client} — project details`}
            className="relative z-[5] w-full max-w-[1150px] max-h-[86vh] overflow-y-auto bg-white grid lg:grid-cols-[1.4fr_1fr]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Image side */}
            <div className="relative min-h-[280px] lg:min-h-[520px] bg-gradient-to-br from-[#0F2A3D] to-[#16374F]">
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.client}
                  className="absolute inset-0 w-full h-full object-contain p-12 lg:p-16"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center text-[140px] leading-none font-black text-white/15 tracking-[-0.05em]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {client.client
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
              )}
            </div>

            {/* Description side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="label-sm text-[#FF3D00] tracking-[0.18em]">{client.category}</p>
              <h3
                className="text-[32px] lg:text-[40px] leading-[0.95] tracking-[-0.02em] mt-4 text-[#0F2A3D]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {client.client}
              </h3>
              <div className="w-10 h-[2px] bg-[#FF3D00] mt-6" />
              <p className="label-sm opacity-40 mt-6">Project description</p>
              <p className="text-[15px] lg:text-base leading-7 text-[#0F2A3D]/75 mt-3">{client.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
