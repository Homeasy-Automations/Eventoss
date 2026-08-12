"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type VideoHeroProps = {
  youtubeId: string;
  poster: string;
  eyebrow?: string;
  title?: ReactNode;
  subcopy?: string;
  ctas?: {
    label: string;
    href: string;
  }[];
  chipLeft?: string;
  chipRight?: string;
};

export default function VideoHero({
  youtubeId,
  poster,

  eyebrow = "EVENTOSS ENTERTAINMENT · EST. 2012 · 410+ CLIENTS",

  /*
   * IMPORTANT:
   * We intentionally keep the default title here.
   * This avoids the old white text classes from Home.tsx.
   */
  title = (
    <>
      <span className="block text-[13px] lg:text-[15px] tracking-[0.18em] font-semibold text-[#0F2A3D]/40 mb-4">
        WE DON&apos;T JUST PLAN EVENTS —
      </span>

      <span className="block text-[#FF3D00] text-[14vw] lg:text-[5.8vw]">
        We engineer
      </span>

      <span
        className="block text-[#0F2A3D] text-[13vw] lg:text-[5.4vw] font-light italic ml-[8%]"
        style={{
          fontFamily: "var(--font-cormorant)",
        }}
      >
        moments
      </span>

      <span className="block text-[#FF3D00] text-[12vw] lg:text-[5vw] ml-[2%]">
        that move
      </span>

      <span
        className="block text-[#0F2A3D] text-[12vw] lg:text-[5vw] font-black ml-[10%]"
        style={{
          fontFamily: "var(--font-inter)",
        }}
      >
        people.
      </span>
    </>
  ),

  subcopy = "Twelve years of research-led planning, sharp production, and calm show-day execution — for conferences, dealer meets, product launches, and culture celebrations across India.",

  ctas = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Our Work",
      href: "/work",
    },
  ],

  chipLeft = "Corporate Events · Pan-India",

  chipRight = "Patna · Delhi · Ranchi",
}: VideoHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  /*
   * Scroll progress is ONLY used for the video movement.
   *
   * We deliberately DO NOT use scroll progress
   * to hide the second frame.
   */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 1.07]
  );

  return (
    <section
      ref={heroRef}
      className="relative bg-white overflow-hidden"
    >
      {/* ============================================================
          FRAME 01
          VIDEO ONLY
      ============================================================ */}

      <div className="relative h-[calc(100svh-64px)] min-h-[620px] bg-[#0F2A3D] overflow-hidden">
        {/* ----------------------------------------------------------
            VIDEO
        ---------------------------------------------------------- */}

        <motion.div
          style={{
            scale: videoScale,
          }}
          className="absolute inset-0"
        >
          {/* Desktop YouTube */}

          <div className="hidden md:block absolute inset-0 overflow-hidden">
            <iframe
              className="
                absolute
                top-1/2
                left-1/2
                w-[177.78vh]
                h-[56.25vw]
                min-w-full
                min-h-full
                -translate-x-1/2
                -translate-y-1/2
                pointer-events-none
              "
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&rel=0&modestbranding=1&playsinline=1`}
              title="Eventoss background video"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          </div>

          {/* Mobile poster */}

          <img
            src={poster}
            alt=""
            className="
              md:hidden
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />
        </motion.div>

        {/* ----------------------------------------------------------
            VERY LIGHT VIDEO OVERLAY
        ---------------------------------------------------------- */}

        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* ----------------------------------------------------------
            TOP LEFT CHIP
        ---------------------------------------------------------- */}

        <div className="absolute top-6 lg:top-8 left-6 lg:left-10 z-20">
          <span
            className="
              label-sm
              text-white/75
              bg-black/20
              backdrop-blur-sm
              border
              border-white/15
              px-3
              py-1.5
            "
          >
            {chipLeft}
          </span>
        </div>

        {/* ----------------------------------------------------------
            TOP RIGHT CHIP
        ---------------------------------------------------------- */}

        <div className="absolute top-6 lg:top-8 right-6 lg:right-10 z-20 hidden lg:block">
          <span
            className="
              label-sm
              text-white/75
              bg-black/20
              backdrop-blur-sm
              border
              border-white/15
              px-3
              py-1.5
            "
          >
            {chipRight}
          </span>
        </div>

        {/* ----------------------------------------------------------
            BOTTOM LEFT LABEL
        ---------------------------------------------------------- */}

        <div className="absolute bottom-8 left-6 lg:left-10 z-20">
          <span className="label-sm text-white/65">
            EVENTOSS ENTERTAINMENT · CORPORATE EVENTS
          </span>
        </div>

        {/* ----------------------------------------------------------
            SCROLL INDICATOR
        ---------------------------------------------------------- */}

        <div
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
          <span className="text-[10px] tracking-[0.3em] mb-2">
            SCROLL TO REVEAL
          </span>

          <motion.span
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-px h-8 bg-white/50"
          />
        </div>
      </div>

      {/* ============================================================
          FRAME 02
          ALL TEXT + CONTENT
      ============================================================ */}

      <section className="relative min-h-[100svh] bg-[#F4F3F0] flex items-center">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10 py-16 lg:py-20">

          {/* ========================================================
              TOP EDITORIAL BAR
          ======================================================== */}

          <div className="flex justify-between items-center border-b border-[#0F2A3D]/10 pb-3">

            <span className="label-sm text-[#0F2A3D]/35 hidden lg:block">
              Corporate Events Division — Est. 2012
            </span>

            <span className="label-sm text-[#0F2A3D]/35">
              Patna · Delhi · Ranchi · Pan-India
            </span>

            <span className="label-sm text-[#0F2A3D]/35 hidden lg:block">
              4,700+ Projects Delivered
            </span>

          </div>

          {/* ========================================================
              MAIN GRID
          ======================================================== */}

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12 lg:mt-16">

            {/* ======================================================
                LEFT SIDE — HEADING
            ====================================================== */}

            <div className="lg:col-span-7 relative">

              {/* Huge editorial 00 */}

              <span
                className="
                  hidden
                  lg:block
                  absolute
                  -top-24
                  -left-10
                  stroke-number
                  text-[280px]
                  leading-none
                  select-none
                  pointer-events-none
                  opacity-30
                "
              >
                00
              </span>

              <div className="relative text-[#0F2A3D]">

                {/* Eyebrow */}

                <p className="label-sm text-[#0F2A3D]/40">
                  {eyebrow}
                </p>

                {/* ==================================================
                    MAIN HEADING
                ================================================== */}

                <h1
                  className="
                    mt-5
                    leading-[0.82]
                    tracking-[-0.04em]
                  "
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {title}
                </h1>

                {/* ==================================================
                    DESCRIPTION
                ================================================== */}

                {subcopy && (
                  <p
                    className="
                      mt-8
                      max-w-[600px]
                      text-[14px]
                      lg:text-[15px]
                      leading-7
                      text-[#0F2A3D]/60
                    "
                  >
                    {subcopy}
                  </p>
                )}

                {/* ==================================================
                    CTA AREA
                ================================================== */}

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    border-t
                    border-[#0F2A3D]/10
                    pt-6
                  "
                >

                  {ctas.map((cta, index) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      data-cursor={
                        index === 0
                          ? "ENQUIRE"
                          : undefined
                      }
                      className={
                        index === 0
                          ? `
                            group
                            inline-flex
                            items-center
                            gap-3
                            bg-[#0F2A3D]
                            text-white
                            pl-6
                            pr-4
                            h-11
                            label-sm
                            hover:bg-[#FF3D00]
                            transition-colors
                          `
                          : `
                            inline-flex
                            items-center
                            gap-2
                            border
                            border-[#0F2A3D]/20
                            text-[#0F2A3D]
                            px-6
                            h-11
                            label-sm
                            hover:bg-[#0F2A3D]
                            hover:text-white
                            transition-colors
                          `
                      }
                    >
                      {cta.label}

                      {index === 0 && (
                        <span
                          className="
                            w-7
                            h-7
                            rounded-full
                            bg-white
                            text-[#0F2A3D]
                            flex
                            items-center
                            justify-center
                            text-xs
                            group-hover:rotate-45
                            transition-transform
                          "
                        >
                          →
                        </span>
                      )}
                    </Link>
                  ))}

                  <span className="hidden xl:block label-sm text-[#0F2A3D]/25 ml-2">
                    Research → Concept → Develop → Test
                  </span>

                </div>
              </div>
            </div>

            {/* ======================================================
                RIGHT SIDE
            ====================================================== */}

            <div className="lg:col-span-5 text-[#0F2A3D]">

              {/* ====================================================
                  PRINCIPLES
              ==================================================== */}

              <div className="border-t border-[#0F2A3D]/10">

                {/* 01 */}

                <div className="py-6 lg:py-7 border-b border-[#0F2A3D]/10">

                  <div className="flex gap-5">

                    <span className="label-sm text-[#0F2A3D]/25">
                      01
                    </span>

                    <div>

                      <h3
                        className="text-[21px] lg:text-[26px] leading-none"
                        style={{
                          fontFamily: "var(--font-playfair)",
                        }}
                      >
                        Research-led planning
                      </h3>

                      <p className="text-[13px] leading-6 text-[#0F2A3D]/50 mt-3 max-w-[390px]">
                        We study your organisation, audience and
                        objectives before shaping the experience.
                      </p>

                    </div>
                  </div>
                </div>

                {/* 02 */}

                <div className="py-6 lg:py-7 border-b border-[#0F2A3D]/10">

                  <div className="flex gap-5">

                    <span className="label-sm text-[#0F2A3D]/25">
                      02
                    </span>

                    <div>

                      <h3
                        className="text-[21px] lg:text-[26px] leading-none"
                        style={{
                          fontFamily: "var(--font-playfair)",
                        }}
                      >
                        Sharp production
                      </h3>

                      <p className="text-[13px] leading-6 text-[#0F2A3D]/50 mt-3 max-w-[390px]">
                        Creative direction, production design,
                        technology and vendor orchestration.
                      </p>

                    </div>
                  </div>
                </div>

                {/* 03 */}

                <div className="py-6 lg:py-7 border-b border-[#0F2A3D]/10">

                  <div className="flex gap-5">

                    <span className="label-sm text-[#0F2A3D]/25">
                      03
                    </span>

                    <div>

                      <h3
                        className="text-[21px] lg:text-[26px] leading-none"
                        style={{
                          fontFamily: "var(--font-playfair)",
                        }}
                      >
                        Calm show-day execution
                      </h3>

                      <p className="text-[13px] leading-6 text-[#0F2A3D]/50 mt-3 max-w-[390px]">
                        Rehearsals, technical checks and
                        contingency planning for zero-surprise
                        delivery.
                      </p>

                    </div>
                  </div>
                </div>

              </div>

              {/* ====================================================
                  STATS
              ==================================================== */}

              <div className="grid grid-cols-2 border border-[#0F2A3D]/10 mt-7">

                {/* 12+ */}

                <div className="p-5 lg:p-6 border-r border-b border-[#0F2A3D]/10">

                  <p
                    className="
                      text-[42px]
                      lg:text-[58px]
                      font-black
                      leading-none
                      tracking-[-0.05em]
                    "
                  >
                    12+
                  </p>

                  <p className="label-sm text-[#0F2A3D]/30 mt-2">
                    YEARS
                  </p>

                </div>

                {/* 410+ */}

                <div className="p-5 lg:p-6 border-b border-[#0F2A3D]/10">

                  <p
                    className="
                      text-[42px]
                      lg:text-[58px]
                      font-black
                      leading-none
                      tracking-[-0.05em]
                    "
                  >
                    410+
                  </p>

                  <p className="label-sm text-[#0F2A3D]/30 mt-2">
                    CLIENTS
                  </p>

                </div>

                {/* 4700+ */}

                <div className="p-5 lg:p-6 border-r border-[#0F2A3D]/10">

                  <p
                    className="
                      text-[42px]
                      lg:text-[58px]
                      font-black
                      leading-none
                      tracking-[-0.05em]
                    "
                  >
                    4,700+
                  </p>

                  <p className="label-sm text-[#0F2A3D]/30 mt-2">
                    PROJECTS
                  </p>

                </div>

                {/* 8 */}

                <div className="p-5 lg:p-6">

                  <p
                    className="
                      text-[42px]
                      lg:text-[58px]
                      font-black
                      leading-none
                      tracking-[-0.05em]
                    "
                  >
                    8
                  </p>

                  <p className="label-sm text-[#0F2A3D]/30 mt-2">
                    OFFICES
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM EDITORIAL LINE
          ======================================================== */}

          <div
            className="
              mt-12
              lg:mt-16
              border-t
              border-[#0F2A3D]/10
              pt-4
              flex
              justify-between
              items-center
            "
          >

            <span className="label-sm text-[#0F2A3D]/25">
              CORPORATE EVENTS · PAN-INDIA
            </span>

            <span className="label-sm text-[#0F2A3D]/25 hidden sm:block">
              Precision is not an accident. It&apos;s a process.
            </span>

            <span className="label-sm text-[#0F2A3D]/25">
              12+ YEARS
            </span>

          </div>

        </div>
      </section>
    </section>
  );
}