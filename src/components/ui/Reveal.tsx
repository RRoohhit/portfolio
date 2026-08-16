"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  /** Direction the element travels from as it enters. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Animation delay in seconds. */
  delay?: number;
  /** How far (px) the element travels. */
  distance?: number;
  /** Delay children automatically with a stagger. */
  as?: "div" | "section" | "li" | "article" | "span";
  className?: string;
  /** Animate only once and keep visible. */
  once?: boolean;
  /** Viewport margin: fraction of the element visible before animating. */
  amount?: number;
}

const offsets: Record<NonNullable<RevealProps["direction"]>, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered reveal wrapper built on framer-motion (already a project
 * dependency). Falls back to a plain element when the user prefers reduced
 * motion, keeping accessibility intact.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  distance = 28,
  as = "div",
  className,
  once = true,
  amount = 0.2,
}) => {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];
  const distanceX = reduceMotion ? 0 : offset.x > 0 ? distance : offset.x < 0 ? -distance : 0;
  const distanceY = reduceMotion ? 0 : offset.y > 0 ? distance : offset.y < 0 ? -distance : 0;

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x: distanceX, y: distanceY, filter: "blur(4px)" }}
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once, amount }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
