"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [overNavbar, setOverNavbar] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 300 });
  const springY = useSpring(y, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024 && !("ontouchstart" in window));
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (isDesktop) document.body.classList.add("custom-cursor-active");
    else document.body.classList.remove("custom-cursor-active");
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setOverNavbar(!!target.closest("header"));
      const el = target.closest("[data-cursor]");
      if (el) {
        setIsHovering(true);
        setLabel(el.getAttribute("data-cursor") || "VIEW");
      }
    };
    const handleLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]");
      if (el) {
        setIsHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, [isDesktop, isVisible, x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden lg:flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible && !overNavbar ? 1 : 0 }}
      transition={{ duration: 0.18 }}
    >
      <motion.div
        animate={{
          width: isHovering ? 96 : 20,
          height: isHovering ? 96 : 20,
          backgroundColor: isHovering ? "#fff" : "rgba(255,255,255,0.95)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="rounded-full flex items-center justify-center border border-white/20"
      >
        <motion.span
          animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
          className="text-[10px] font-semibold tracking-[0.18em] text-[#0F2A3D] uppercase whitespace-nowrap"
        >
          {label}
        </motion.span>
      </motion.div>
      {!isHovering && (
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full"
          layoutId="dot"
        />
      )}
    </motion.div>
  );
}
