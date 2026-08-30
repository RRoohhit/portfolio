"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(false);

  /* SVG ring dimensions */
  const size = 44;
  const stroke = 3;
  const radius = (size - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;

  const updateState = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
    
    const shouldBeVisible = scrollY > 400;
    if (shouldBeVisible !== isVisibleRef.current) {
      isVisibleRef.current = shouldBeVisible;
      setVisible(shouldBeVisible);
    }

    if (circleRef.current) {
      const offset = circumference - (pct / 100) * circumference;
      circleRef.current.style.strokeDashoffset = `${offset}`;
    }
  }, [circumference]);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateState);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateState();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateState]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-6 right-4 sm:right-6 z-40 btop-visible group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full"
    >
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Scroll progress ring */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 rotate-[-90deg]"
          aria-hidden="true"
        >
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={stroke}
            fill="none"
          />
          {/* Progress */}
          <circle
            ref={circleRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#34d399"
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
          />
        </svg>

        {/* Button face */}
        <div className="icon-btn-3d w-8 h-8 rounded-full flex items-center justify-center group-hover:text-black group-hover:bg-emerald-400 group-hover:border-emerald-400 transition-all duration-200 shadow-xl">
          <ArrowUp className="w-4 h-4 text-white group-hover:text-black transition-colors duration-200" />
        </div>
      </div>
    </button>
  );
};

export default BackToTopButton;
