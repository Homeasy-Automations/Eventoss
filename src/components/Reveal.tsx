"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Optional stagger/entry delay in seconds. */
  delay?: number;
  /** Visual direction the content enters from. */
  direction?: "up" | "down" | "left" | "right" | "fade";
  /** How far the element travels, in px. */
  distance?: number;
  /** Passed through to the wrapping element. */
  className?: string;
  /** Underlying element tag. */
  as?: "div" | "section";
  /** Re-trigger every time it scrolls into view instead of once. */
  repeat?: boolean;
  /** Fraction of the element that must be visible to trigger. */
  amount?: number;
  duration?: number;
};

/**
 * Shared scroll-triggered reveal used across every page section so
 * transitions feel consistent site-wide (same easing/timing as the
 * hand-built animations already on the homepage hero + intro).
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  className,
  as = "div",
  repeat = false,
  amount = 0.2,
  duration = 0.7,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: {},
  };

  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const Component = motion[as];

  if (shouldReduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount }}
      variants={variants}
    >
      {children}
    </Component>
  );
}

/**
 * Stagger container — wrap a set of siblings in this, then wrap each
 * child in <Reveal> (or use RevealItem) to get a cascading entrance.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  distance = 24,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
}) {
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: {},
  };
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offsets[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
