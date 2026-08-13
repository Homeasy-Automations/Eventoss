"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type PageVideoHeroProps = {
  /** Local video file, e.g. "/herovid.mp4". */
  videoSrc?: string;
  /** Poster/fallback image shown before the video can play. */
  poster: string;
  chipLeft: string;
  chipRight: string;
  bottomLabel: string;
  eyebrow: string;
  /** Large heading, revealed on scroll. Pass white/accent-colored spans. */
  heading: ReactNode;
  minHeightClassName?: string;
};

/**
 * Video-only on load. As the visitor scrolls, the eyebrow + heading fade
 * and rise in over the footage — same behaviour as the Home hero — then
 * the page's own content continues in the section right below.
 */
export default function PageVideoHero({
  videoSrc = "/herovid.mp4",
  poster,
  chipLeft,
  chipRight,
  bottomLabel,
  eyebrow,
  heading,
  minHeightClassName = "h-[calc(100svh-64px)] min-h-[560px]",
}: PageVideoHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.07]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.16], [0, 1]);
  const overlayY = useTransform(scrollYProgress, [0, 0.16], [36, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div
      ref={heroRef}
      className={`relative bg-[#0F2A3D] overflow-hidden ${minHeightClassName}`}
    >
      {/* VIDEO */}

      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* VIDEO OVERLAY */}

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* BOTTOM GRADIENT — keeps the reveal text readable over the footage */}

      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

      {/* SCROLL-REVEAL TEXT — hidden at rest, fades + rises in as you scroll */}

      <motion.div
        style={{ opacity: overlayOpacity, y: overlayY }}
        className="
          absolute
          inset-x-0
          bottom-[14%]
          lg:bottom-[16%]
          z-10
          px-6
          lg:px-10
          text-center
          pointer-events-none
        "
      >
        <span className="label-sm text-white/70">{eyebrow}</span>
        <div
          className="
            mt-4
            leading-[1.05]
            tracking-[-0.02em]
            text-white
            [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]
          "
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {heading}
        </div>
      </motion.div>

      {/* TOP LEFT CHIP */}

      <div className="absolute top-6 lg:top-8 left-6 lg:left-10 z-20">
        <span className="label-sm text-white/75 bg-black/20 backdrop-blur-sm border border-white/15 px-3 py-1.5">
          {chipLeft}
        </span>
      </div>

      {/* TOP RIGHT CHIP */}

      <div className="absolute top-6 lg:top-8 right-6 lg:right-10 z-20 hidden lg:block">
        <span className="label-sm text-white/75 bg-black/20 backdrop-blur-sm border border-white/15 px-3 py-1.5">
          {chipRight}
        </span>
      </div>

      {/* BOTTOM LEFT LABEL */}

      <div className="absolute bottom-8 left-6 lg:left-10 z-20">
        <span className="label-sm text-white/65">{bottomLabel}</span>
      </div>

      {/* SCROLL INDICATOR — fades out as the reveal text fades in */}

      <motion.div
        style={{ opacity: scrollHintOpacity }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-20
          flex
          flex-col
          items-center
          text-white/70
        "
      >
        <span className="text-[10px] tracking-[0.3em] mb-2">SCROLL TO REVEAL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-white/50"
        />
      </motion.div>
    </div>
  );
}
