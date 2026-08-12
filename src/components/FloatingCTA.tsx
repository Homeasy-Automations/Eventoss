"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.3 }}
          className="group fixed bottom-7 right-7 z-40"
        >
          <span className="absolute inset-0 rounded-full bg-[#FF3D00]/40 scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-125 group-active:opacity-100 group-active:scale-125 transition-all duration-500 pointer-events-none" />
          <Link
            href="/contact"
            className="relative flex items-center justify-center w-[76px] h-[76px] rounded-full bg-[#0F2A3D] text-white text-[11px] tracking-[0.08em] leading-tight text-center font-medium shadow-[0_8px_24px_rgba(15,42,61,0.35)] hover:bg-[#FF3D00] hover:scale-110 active:scale-105 active:bg-[#FF3D00] transition-all duration-300"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">ENQUIRE<br />NOW</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
