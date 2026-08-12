"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const EASE: [number, number, number, number] = [0.83, 0, 0.17, 1];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div key={pathname}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}

        {/* Curtain wipe -- an editorial "page break" panel that sweeps up to
            cover the outgoing view and sweeps away to reveal the new one,
            instead of a plain crossfade. Pointer-events are disabled so it
            never blocks interaction once the sweep finishes. */}
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[999] pointer-events-none bg-[#0F2A3D] origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        />
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[998] pointer-events-none bg-[#FF3D00] origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: EASE }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
