"use client";

import React from "react";
import Link from "next/link";
import { Search, CalendarRange, Rocket, BarChart3, ArrowRight, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/config/site";

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Free Technical SEO Audit",
    desc: "I deep-crawl your website, check Core Web Vitals field data, schema, indexation, content gaps and backlink health. You get a plain-language breakdown of what is blocking your rankings — free, no strings attached.",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    step: "02",
    icon: CalendarRange,
    title: "90-Day Growth Roadmap",
    desc: "Based on the audit, you get a prioritised roadmap: exactly which fixes to make first, which keywords to target, which content to publish, and which links to earn. Clear milestones, clear ownership, zero fluff.",
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Weekly Execution Sprints",
    desc: "This is where hiring me differs from an agency: I write the code myself. Every week I ship technical fixes, content, schema, GBP updates and white hat link building — visible progress, sprint by sprint.",
    color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Transparent Ranking Reports",
    desc: "Live Search Console dashboard plus a monthly report: keyword positions, organic traffic, conversions and next-month priorities. You always know exactly where your money is going and what it is returning.",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section aria-labelledby="process-heading" className="space-y-6 sm:space-y-8">
      <Reveal className="space-y-3 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
          <Rocket className="w-3 h-3" />
          <span>Simple, Transparent Process</span>
        </div>
        <h2 id="process-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
          How Working With Me <span className="text-gradient">Feels</span>
        </h2>
        <p className="text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
          No jargon, no junior account managers, no 40-page reports nobody reads. Four clear steps from first audit to compounding rankings.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.step} delay={idx * 0.08} className="h-full">
              <div className="card-3d-interactive p-5 sm:p-6 space-y-3 sm:space-y-4 h-full flex flex-col relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border ${step.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-black text-white/20 group-hover:text-white/40 transition-colors">STEP {step.step}</span>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">{step.title}</h3>
                  <p className="text-xs sm:text-[13px] text-white/65 leading-relaxed font-light">{step.desc}</p>
                </div>
                {idx < STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-white/10 -translate-y-1/2" />
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
        <Link
          href="/contact/"
          className="btn-3d-emerald group text-xs font-mono font-black py-3.5 px-7 flex items-center gap-2"
        >
          <span>Start With a Free Audit</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <a
          href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I'd like to understand your 4-step process better.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-7 flex items-center gap-2 hover:text-emerald-400"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>Ask Me Anything</span>
        </a>
      </Reveal>
    </section>
  );
};

export default ProcessSection;