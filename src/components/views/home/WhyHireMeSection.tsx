"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Minus, Crown, ArrowRight, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/config/site";

type Cell = "yes" | "no" | "partial";

const ROWS: { label: string; rohit: Cell; agency: Cell; freelancer: Cell }[] = [
  { label: "Work with the senior expert directly", rohit: "yes", agency: "no", freelancer: "yes" },
  { label: "Developer + SEO specialist (fixes code himself)", rohit: "yes", agency: "no", freelancer: "partial" },
  { label: "100% White Hat, penalty-free strategy", rohit: "yes", agency: "partial", freelancer: "partial" },
  { label: "Core Web Vitals & Speed engineering", rohit: "yes", agency: "partial", freelancer: "partial" },
  { label: "AI Search / AEO citation readiness", rohit: "yes", agency: "partial", freelancer: "no" },
  { label: "Transparent Search Console reporting", rohit: "yes", agency: "partial", freelancer: "partial" },
  { label: "Live dashboard with your KPIs", rohit: "yes", agency: "no", freelancer: "no" },
  { label: "Hindi + English communication", rohit: "yes", agency: "partial", freelancer: "yes" },
  { label: "Fair, transparent monthly pricing", rohit: "yes", agency: "no", freelancer: "yes" },
];

function CellIcon({ value }: { value: Cell }) {
  if (value === "yes") {
    return (
      <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40">
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-red-500/10 border border-red-500/30">
        <X className="w-3.5 h-3.5 text-red-400" />
      </span>
    );
  }
  return (
    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30">
      <Minus className="w-3.5 h-3.5 text-amber-400" />
    </span>
  );
}

export const WhyHireMeSection: React.FC = () => {
  return (
    <section id="why-hire-rohit" aria-labelledby="why-hire-heading" className="space-y-6 sm:space-y-8 scroll-mt-24">
      <Reveal className="space-y-3 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
          <Crown className="w-3 h-3" />
          <span>The Honest Comparison</span>
        </div>
        <h3 id="why-hire-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
          Why Hire Me Over <span className="text-gradient">an Agency or Freelancer?</span>
        </h3>
        <p className="text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
          You deserve to know exactly what you are paying for. Here is how hiring Rohit Gupta compares to the common alternatives in India — no marketing spin.
        </p>
      </Reveal>

      <Reveal>
        <div className="card-3d-interactive rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[320px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-widest text-white/50 font-bold">What you get</th>
                  <th className="p-4 sm:p-5 text-center">
                    <span className="inline-flex flex-col items-center gap-1">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-400 text-black text-[10px] font-mono font-black uppercase tracking-wider">★ Rohit Gupta</span>
                      <span className="text-[10px] font-mono text-emerald-400/80">Recommended</span>
                    </span>
                  </th>
                  <th className="p-4 sm:p-5 text-center text-xs font-mono uppercase tracking-widest text-white/50 font-bold">Agency</th>
                  <th className="p-4 sm:p-5 text-center text-xs font-mono uppercase tracking-widest text-white/50 font-bold">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, idx) => (
                  <tr key={row.label} className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${idx % 2 ? "bg-white/[0.015]" : ""}`}>
                    <td className="p-3.5 sm:p-4 text-xs sm:text-[13px] text-white/85 font-medium leading-snug">{row.label}</td>
                    <td className="p-3.5 sm:p-4 text-center"><CellIcon value={row.rohit} /></td>
                    <td className="p-3.5 sm:p-4 text-center opacity-60"><CellIcon value={row.agency} /></td>
                    <td className="p-3.5 sm:p-4 text-center opacity-60"><CellIcon value={row.freelancer} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
        <Link
          href="/services/hire-seo-expert/"
          className="btn-3d-emerald group text-xs font-mono font-black py-3.5 px-7 flex items-center gap-2"
        >
          <span>See Hiring Options</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <a
          href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, tell me why hiring you beats an agency.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-7 flex items-center gap-2 hover:text-emerald-400"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>Get a Straight Answer</span>
        </a>
      </Reveal>
    </section>
  );
};

export default WhyHireMeSection;