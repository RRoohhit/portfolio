"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Thin gradient progress bar pinned to the very top of the viewport that
 * fills as the user scrolls the page. Uses rAF + passive listeners and
 * respects prefers-reduced-motion.
 */
export const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      if (!barRef.current) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none"
      style={{ background: "transparent" }}
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left rounded-r-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-[0_0_10px_rgba(52,211,153,0.7)] will-change-transform"
        style={{
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
