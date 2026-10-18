"use client";
import React from "react";
import { ProjectCaseStudy } from "@/types";
import { CheckCircle2, Code, ExternalLink, Globe, ListChecks, MonitorPlay } from "lucide-react";

interface ProjectLiveBreakdownProps {
  project: ProjectCaseStudy;
}

export const ProjectLiveBreakdown: React.FC<ProjectLiveBreakdownProps> = ({ project }) => {
  const shortDomain = project.liveUrl.replace("https://", "").replace("www.", "").replace(/\/$/, "");

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-2">
            <MonitorPlay className="w-3.5 h-3.5" />
            <span>Live Website Breakdown</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Live Homepage, Shipped Setup & Code
          </h3>
          <p className="text-xs text-white/60 mt-1">
            Neeche live homepage screenshot, is project me kya-kya banaya/optimize kiya, aur code approach diya hai.
          </p>
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-emerald-300 transition-colors self-start md:self-auto"
        >
          <Globe className="w-4 h-4" />
          <span>{shortDomain}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
          <img
            src={project.afterImageUrl}
            alt={`${project.title} — live homepage screenshot`}
            loading="lazy"
            decoding="async"
            className="w-full h-64 sm:h-[480px] object-cover object-top"
          />
        </div>
        <p className="text-[11px] font-mono text-white/40">
          Upar: {shortDomain} ka live homepage screenshot.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
          <div className="text-xs font-mono text-white/50 uppercase font-bold">Starting Point</div>
          <p className="text-xs text-white/75 leading-relaxed font-light">{project.beforeDescription}</p>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase font-bold">What Shipped Live</div>
          <p className="text-xs text-white/80 leading-relaxed font-light">{project.afterDescription}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
          <ListChecks className="w-4 h-4 text-emerald-400" />
          <span>Is Project Me Kya Banaya / Optimize Kiya:</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="text-[11px] font-mono text-white/50 uppercase">{m.label}</div>
              <div className="text-sm font-black text-white">{m.after}</div>
              <div className="text-[11px] font-mono text-emerald-400">{m.improvement}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
          <Code className="w-4 h-4 text-emerald-400" />
          <span>Code Approach (Pehle vs Ab):</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-white/50 font-bold">Pehle (manual/static approach)</div>
            <pre className="p-4 rounded-xl bg-black border border-white/10 text-xs font-mono text-white/70 overflow-x-auto h-64 leading-relaxed">
              <code>{project.codeComparison.beforeSnippet}</code>
            </pre>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-emerald-400 font-bold">Ab (live site par shipped code pattern)</div>
            <pre className="p-4 rounded-xl bg-black border border-emerald-900/50 text-xs font-mono text-emerald-200 overflow-x-auto h-64 leading-relaxed">
              <code>{project.codeComparison.afterSnippet}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10">
        <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>SEO + Build Highlights:</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.technicalHighlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80 bg-zinc-950 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
