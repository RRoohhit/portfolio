"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Thin gradient progress bar pinned to the very top of the viewport that
 * fills as the user scrolls the page. Uses rAF + passive listeners and
 * respects prefers-reduced-motion.
 */
export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0;
      setProgress(pct);
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
        className="h-full rounded-r-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
        style={{
          width: `${progress}%`,
          transition: progress === 0 ? "none" : "width 0.1s linear",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
