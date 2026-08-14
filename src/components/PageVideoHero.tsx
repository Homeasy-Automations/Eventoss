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
  /**
   * Single-block heading (most pages). Revealed as one fast cascade.
   * Use `headingLines` instead if you want each line to stagger in
   * separately (that's what the homepage hero uses).
   */
  heading?: ReactNode;
  /** Up to 4 lines, each staggered slightly after the previous one. */
  headingLines?: ReactNode[];
  /** Optional small italic caption under the heading — good for filling
   *  the empty space below a short headline with a bit of brand voice. */
  tagline?: string;
  minHeightClassName?: string;
  /** Height of the scroll-room wrapper the video stays pinned inside. */
  pinHeightClassName?: string;
};

/**
 * PINNED hero. The video sits inside a tall wrapper and is
 * `position: sticky`, so it freezes in the viewport while the visitor
 * keeps scrolling through that extra height. During that scroll, the
 * eyebrow + heading cascade in over the still-pinned footage — starting
 * almost immediately (no dead scroll before anything happens) and
 * finishing well before the wrapper's scroll room runs out. Once that
 * room is used up, the sticky video releases naturally and the page's
 * next section (solid background) scrolls up to cover it — no manual
 * "unpin" logic needed, it's plain CSS sticky.
 */
export default function PageVideoHero({
  videoSrc,
  poster,
  chipLeft,
  chipRight,
  bottomLabel,
  eyebrow,
  heading,
  headingLines,
  tagline,
  minHeightClassName = "h-[calc(100svh-64px)] min-h-[560px]",
  pinHeightClassName = "h-[170svh]",
}: PageVideoHeroProps) {
  const pinRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  /* EYEBROW — leads the cascade, settled almost immediately */
  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const eyebrowY = useTransform(scrollYProgress, [0, 0.12], [16, 0]);

  /* HEADING — up to 4 lines, each a touch behind the last. Fixed hook
     count (rules-of-hooks safe) even though not every page uses all 4. */
  const line0Opacity = useTransform(scrollYProgress, [0.02, 0.19], [0, 1]);
  const line0Y = useTransform(scrollYProgress, [0.02, 0.19], [32, 0]);
  const line1Opacity = useTransform(scrollYProgress, [0.07, 0.24], [0, 1]);
  const line1Y = useTransform(scrollYProgress, [0.07, 0.24], [32, 0]);
  const line2Opacity = useTransform(scrollYProgress, [0.12, 0.29], [0, 1]);
  const line2Y = useTransform(scrollYProgress, [0.12, 0.29], [32, 0]);
  const line3Opacity = useTransform(scrollYProgress, [0.17, 0.34], [0, 1]);
  const line3Y = useTransform(scrollYProgress, [0.17, 0.34], [32, 0]);
  const lineMotions = [
    { opacity: line0Opacity, y: line0Y },
    { opacity: line1Opacity, y: line1Y },
    { opacity: line2Opacity, y: line2Y },
    { opacity: line3Opacity, y: line3Y },
  ];

  /* TAGLINE — arrives just after the heading finishes */
  const taglineOpacity = useTransform(scrollYProgress, [0.22, 0.38], [0, 1]);
  const taglineY = useTransform(scrollYProgress, [0.22, 0.38], [18, 0]);

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const lines = headingLines ?? (heading ? [heading] : []);

  return (
    <div ref={pinRef} className={`relative ${pinHeightClassName}`}>
      <div
        className={`sticky top-0 bg-[#0F2A3D] overflow-hidden ${minHeightClassName}`}
      >
        {/* VIDEO */}

        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0"
        >
          {videoSrc ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={videoSrc}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : (
            // Defensive fallback: if a page ever forgets to pass videoSrc,
            // show the poster image instead of a silently blank/frozen hero.
            <img
              src={poster}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* VIDEO OVERLAY */}

        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* CENTER VIGNETTE — keeps the big centered text readable over any footage */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45 pointer-events-none" />

        {/* SCROLL-REVEAL TEXT — big, centered, fills the frame instead of
            hugging the bottom edge. Cascades in fast, no dead scroll. */}

        <div
          className="
            absolute
            inset-0
            z-10
            flex
            flex-col
            items-center
            justify-center
            px-6
            lg:px-10
            text-center
            pointer-events-none
          "
        >
          <motion.span
            style={{ opacity: eyebrowOpacity, y: eyebrowY }}
            className="hero-eyebrow-rule label-sm text-white/85 tracking-[0.34em] mb-5 lg:mb-7"
          >
            {eyebrow}
          </motion.span>

          <div
            className="hero-glow-text font-semibold leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {lines.map((line, i) => (
              <motion.div
                key={i}
                style={{ opacity: lineMotions[i].opacity, y: lineMotions[i].y }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {tagline && (
            <motion.p
              style={{
                opacity: taglineOpacity,
                y: taglineY,
                fontFamily: "var(--font-cormorant)",
              }}
              className="mt-6 lg:mt-8 text-[16px] lg:text-[20px] italic text-white/85"
            >
              {tagline}
            </motion.p>
          )}
        </div>

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
    </div>
  );
}
