"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ListTree } from "lucide-react";

interface TocItem {
  index: number;
  text: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  /** "grid" (default) = 2-column block; "sidebar" = single-column sticky list */
  variant?: "grid" | "sidebar";
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, variant = "grid" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(items[0]?.index ?? null);

  const updateActive = useCallback(() => {
    let current: number | null = null;
    for (const item of items) {
      const el = document.getElementById(`section-${item.index}`);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= 140) {
        current = item.index;
      } else {
        break;
      }
    }
    setActiveIndex(current);
  }, [items]);

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  return (
    <nav
      aria-label="Table of contents"
      className="bg-zinc-950 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl"
    >
      <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider mb-4">
        <ListTree className="w-4 h-4" />
        <span>Table of Contents</span>
      </div>
      <ol
        className={
          variant === "sidebar"
            ? "space-y-1.5"
            : "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5"
        }
      >
        {items.map((item) => {
          const isActive = activeIndex === item.index;
          return (
            <li key={item.index}>
              <a
                href={`#section-${item.index}`}
                aria-current={isActive ? "location" : undefined}
                className={`group flex items-start gap-2.5 text-sm leading-relaxed transition-colors ${
                  isActive
                    ? "text-emerald-300 font-semibold"
                    : "text-white/70 hover:text-emerald-300"
                }`}
              >
                <span className={`font-mono text-xs mt-0.5 shrink-0 ${isActive ? "text-emerald-400" : "text-emerald-400/70"}`}>
                  {String(item.index).padStart(2, "0")}
                </span>
                <span className={`font-light group-hover:underline decoration-emerald-400/40 underline-offset-2 ${isActive ? "underline decoration-emerald-400/40" : ""}`}>
                  {item.text}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default TableOfContents;
