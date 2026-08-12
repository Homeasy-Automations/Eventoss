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

const principles = [
  {
    number: "01",
    title: "Research-led planning",
    description:
      "We study your organisation, audience and objectives before shaping the experience.",
  },
  {
    number: "02",
    title: "Sharp production",
    description:
      "Creative direction, production design, technology and vendor orchestration.",
  },
  {
    number: "03",
    title: "Calm show-day execution",
    description:
      "Rehearsals, technical checks and contingency planning for zero-surprise delivery.",
  },
];

export default function VideoHero({
  youtubeId,
  poster,

  eyebrow = "EVENTOSS ENTERTAINMENT · EST. 2012 · 410+ CLIENTS",

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
   * Scroll progress is ONLY used for video movement.
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

        {/* VIDEO */}

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

        {/* VIDEO OVERLAY */}

        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* TOP LEFT CHIP */}

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

        {/* TOP RIGHT CHIP */}

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

        {/* BOTTOM LEFT LABEL */}

        <div className="absolute bottom-8 left-6 lg:left-10 z-20">
          <span className="label-sm text-white/65">
            EVENTOSS ENTERTAINMENT · CORPORATE EVENTS
          </span>
        </div>

        {/* SCROLL INDICATOR */}

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
                LEFT SIDE
            ====================================================== */}

            <div className="lg:col-span-7 relative">

              {/* HUGE EDITORIAL 00 */}

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

                {/* EYEBROW */}

                <p className="label-sm text-[#0F2A3D]/40">
                  {eyebrow}
                </p>

                {/* MAIN HEADING */}

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

                {/* DESCRIPTION */}

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

                {/* CTA AREA */}

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
                RIGHT SIDE — PRINCIPLES
            ====================================================== */}

            <div className="lg:col-span-5">

              {/* ====================================================
                  PRINCIPLES OUTER CARD
              ==================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  border
                  border-[#0F2A3D]/15
                  bg-white/30
                  backdrop-blur-[2px]
                "
              >

                {/* ==================================================
                    CARD HEADER
                ================================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    px-5
                    lg:px-7
                    py-5
                    border-b
                    border-[#0F2A3D]/10
                  "
                >
                  <div>
                    <span className="label-sm text-[#0F2A3D]/35">
                      OUR PROCESS
                    </span>

                    <h2
                      className="
                        mt-2
                        text-[25px]
                        lg:text-[31px]
                        leading-none
                        text-[#0F2A3D]
                      "
                      style={{
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      Built with intent.
                    </h2>
                  </div>

                  {/* <motion.div
                    animate={{
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      w-9
                      h-9
                      rounded-full
                      border
                      border-[#FF3D00]/30
                      flex
                      items-center
                      justify-center
                      text-[#FF3D00]
                      text-sm
                    "
                  >
                    +
                  </motion.div> */}
                </div>

                {/* ==================================================
                    PRINCIPLE ITEMS
                ================================================== */}

                <div className="p-3 lg:p-4">

                  {principles.map((item) => (
                    <motion.div
                      key={item.number}
                      initial="rest"
                      whileHover="hover"
                      whileTap="hover"
                      variants={{
                        rest: {
                          backgroundColor: "rgba(15,42,61,0)",
                          scale: 1,
                        },
                        hover: {
                          backgroundColor: "#0F2A3D",
                          scale: 1.015,
                        },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        px-4
                        lg:px-5
                        py-6
                        lg:py-7
                        cursor-default
                      "
                    >
                      {/* =========================================================
                          GHOST NUMBER
                          BEHIND THE CONTENT
                      ========================================================= */}

                      <motion.span
                        variants={{
                          rest: {
                            opacity: 0,
                            scale: 0.85,
                            x: 30,
                          },
                          hover: {
                            opacity: 0.075,
                            scale: 1,
                            x: 0,
                          },
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          absolute
                          z-0
                          right-[18%]
                          top-1/2
                          -translate-y-1/2
                          text-[150px]
                          lg:text-[190px]
                          leading-none
                          font-black
                          text-white
                          pointer-events-none
                          select-none
                          tracking-[-0.08em]
                        "
                      >
                        {item.number}
                      </motion.span>

                      {/* =========================================================
                          ORANGE TOP LINE
                      ========================================================= */}

                      <motion.span
                        variants={{
                          rest: {
                            scaleX: 0,
                            opacity: 0,
                          },
                          hover: {
                            scaleX: 1,
                            opacity: 1,
                          },
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          absolute
                          z-20
                          top-0
                          left-0
                          right-0
                          h-[2px]
                          bg-[#FF3D00]
                          origin-left
                        "
                      />

                      {/* =========================================================
                          CONTENT
                          z-10 = ABOVE GHOST NUMBER
                      ========================================================= */}

                      <div className="relative z-10 flex gap-5 lg:gap-6">

                        {/* NUMBER */}

                        <motion.div
                          variants={{
                            rest: {
                              color: "rgba(15,42,61,0.28)",
                              y: 0,
                              scale: 1,
                            },
                            hover: {
                              color: "#FF3D00",
                              y: -3,
                              scale: 1.08,
                            },
                          }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            shrink-0
                            w-[42px]
                            lg:w-[50px]
                            pt-1
                            text-[13px]
                            font-semibold
                            tracking-[0.08em]
                          "
                        >
                          {item.number}
                        </motion.div>

                        {/* TEXT */}

                        <div className="flex-1 min-w-0">

                          <div className="flex items-start justify-between gap-4">

                            <motion.h3
                              variants={{
                                rest: {
                                  color: "#0F2A3D",
                                  x: 0,
                                },
                                hover: {
                                  color: "#FFFFFF",
                                  x: 4,
                                },
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              className="
                                text-[20px]
                                lg:text-[24px]
                                leading-[1]
                                tracking-[-0.02em]
                              "
                              style={{
                                fontFamily: "var(--font-playfair)",
                              }}
                            >
                              {item.title}
                            </motion.h3>

                            {/* ARROW 

                            <motion.span
                              variants={{
                                rest: {
                                  opacity: 0,
                                  x: -8,
                                  y: 8,
                                  rotate: -45,
                                },
                                hover: {
                                  opacity: 1,
                                  x: 0,
                                  y: 0,
                                  rotate: 0,
                                },
                              }}
                              transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="
                                shrink-0
                                w-8
                                h-8
                                rounded-full
                                bg-[#FF3D00]
                                text-white
                                flex
                                items-center
                                justify-center
                                text-sm
                              "
                            >
                              ↗
                            </motion.span>*/}

                          </div>

                          {/* DESCRIPTION */}

                          <motion.p
                            variants={{
                              rest: {
                                color: "rgba(15,42,61,0.50)",
                                x: 0,
                              },
                              hover: {
                                color: "rgba(255,255,255,0.68)",
                                x: 4,
                              },
                            }}
                            transition={{
                              duration: 0.35,
                            }}
                            className="
                              text-[12px]
                              lg:text-[13px]
                              leading-6
                              mt-3
                              max-w-[390px]
                            "
                          >
                            {item.description}
                          </motion.p>

                          {/* PROGRESS LINE */}

                          <div className="relative mt-5 h-px bg-[#0F2A3D]/8 overflow-hidden">

                            <motion.span
                              variants={{
                                rest: {
                                  x: "-100%",
                                },
                                hover: {
                                  x: "0%",
                                },
                              }}
                              transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="
                                absolute
                                inset-y-0
                                left-0
                                w-full
                                bg-[#FF3D00]
                              "
                            />

                          </div>

                        </div>
                      </div>

                      {/* =========================================================
                          BOTTOM ORANGE LINE
                      ========================================================= */}

                      <motion.span
                        variants={{
                          rest: {
                            scaleX: 0,
                            opacity: 0,
                          },
                          hover: {
                            scaleX: 1,
                            opacity: 1,
                          },
                        }}
                        transition={{
                          duration: 0.65,
                          delay: 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          absolute
                          z-20
                          bottom-0
                          left-0
                          right-0
                          h-px
                          bg-[#FF3D00]/70
                          origin-right
                        "
                      />
                    </motion.div>
                  ))}
                </div>

                {/* ==================================================
                    CARD FOOTER
                ================================================== */}

                <div
                  className="
                    px-5
                    lg:px-7
                    py-4
                    border-t
                    border-[#0F2A3D]/10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="label-sm text-[#0F2A3D]/30">
                    PLAN · PRODUCE · EXECUTE
                  </span>

                  <span className="label-sm text-[#FF3D00]/70">
                    01 — 03
                  </span>
                </div>

              </motion.div>
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