"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Direction the element travels from as it enters. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Animation delay in seconds. */
  delay?: number;
  /** How far (px) the element travels. */
  distance?: number;
  /** HTML Tag to render. */
  as?: "div" | "section" | "li" | "article" | "span";
  className?: string;
  /** Animate only once and keep visible. */
  once?: boolean;
  /** Viewport margin: fraction of the element visible before animating. */
  amount?: number;
}

const offsets: Record<NonNullable<RevealProps["direction"]>, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Ultra-lightweight, hardware-accelerated scroll reveal component.
 * Uses a single shared IntersectionObserver and CSS GPU transforms,
 * avoiding heavy JavaScript animation runtimes on the critical path.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  distance = 24,
  as = "div",
  className = "",
  once = true,
  amount = 0.15,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: amount,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, amount]);

  const offset = offsets[direction];
  const distanceX = offset.x > 0 ? distance : offset.x < 0 ? -distance : 0;
  const distanceY = offset.y > 0 ? distance : offset.y < 0 ? -distance : 0;

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(${distanceX}px, ${distanceY}px, 0)`,
        transitionProperty: "opacity, transform",
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}s`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
