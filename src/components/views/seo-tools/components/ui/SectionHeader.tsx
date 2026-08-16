"use client";

import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  icon?: React.ElementType;
  badgeClassName?: string;
  right?: React.ReactNode;
}

/**
 * Shared header block used across the SEO tools suite: a pill badge with an
 * optional icon, a bold title and a supporting description line. An optional
 * `right` slot renders action controls (toggles, device switchers, ...).
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  icon: Icon,
  badgeClassName,
  right,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
      <div>
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-1.5 ${badgeClassName ?? ""}`}
        >
          {Icon && <Icon className="w-3.5 h-3.5 text-white" />}
          <span>{badge}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h3>
        {description && <p className="text-xs text-white/60">{description}</p>}
      </div>
      {right}
    </div>
  );
};
