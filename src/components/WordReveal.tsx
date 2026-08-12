"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type WordRevealProps = {
  /** Plain string only — split automatically into masked, word-by-word reveals. */
  text: string;
  className?: string;
  /** Underlying tag for the outer wrapper. */
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Delay before the first word starts, in seconds. */
  delay?: number;
  /** Gap between each word's animation start, in seconds. */
  stagger?: number;
  /** Re-trigger every time it scrolls into view instead of once. */
  repeat?: boolean;
};

/**
 * Cinematic word-by-word text reveal — each word rises out of a clipped
 * mask on a soft, editorial ease, the way large kinetic headlines behave
 * on high-end event/agency sites. Splits on whitespace, wraps each word
 * in an overflow-hidden mask so the motion clips cleanly instead of just
 * fading, and keeps spacing intact between words.
 */
export default function WordReveal({
  text,
  className,
  as = "h1",
  delay = 0,
  stagger = 0.06,
  repeat = false,
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const Wrapper = motion[as as "h1"];

  if (shouldReduceMotion) {
    const Plain = as as "h1";
    return <Plain className={className}>{text}</Plain>;
  }

  return (
    <Wrapper
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount: 0.4 }}
      variants={container}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-top pb-[0.08em]"
        >
          <motion.span className="inline-block will-change-transform" variants={word}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}

/**
 * Same clipped-mask motion, but for pre-split children (e.g. a heading
 * built from several <span> lines) rather than a single string — use
 * this when the line breaks / italics need manual control.
 */
export function LineReveal({
  children,
  className,
  delay = 0,
  repeat = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  repeat?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ y: "100%" }}
      whileInView={{ y: "0%" }}
      viewport={{ once: !repeat, amount: 0.4 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
