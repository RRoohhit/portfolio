"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { ProjectCaseStudy } from "@/types";
import { ArrowLeftRight, CheckCircle2, XCircle, Zap, Shield, Search, Code, TrendingUp, Award } from "lucide-react";

interface BeforeAfterSliderProps {
  project: ProjectCaseStudy;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ project }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeView, setActiveView] = useState<"visual" | "lighthouse" | "code" | "metrics">("visual");
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure the comparison container once so the clipped "before" image can
  // span the full container width regardless of the slider position.
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const rankingBefore = project.metrics.find((m) => /rank|position|serp/i.test(m.label))?.before ?? project.metrics[0]?.before ?? "";
  const rankingAfter = project.metrics.find((m) => /rank|position|serp/i.test(m.label))?.after ?? project.metrics[0]?.after ?? "";

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
      
      {/* Top Header & View Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-2">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Interactive Quantifiable Growth Comparison</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Before vs. After Optimization Engine
          </h3>
          <p className="text-xs text-white/60 mt-1">
            Drag the slider horizontally to compare legacy site performance against Rohit's re-architected platform.
          </p>
        </div>

        {/* Comparison Mode Tabs */}
        <div className="flex items-center gap-1 bg-black p-1.5 rounded-xl border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveView("visual")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              activeView === "visual"
                ? "bg-white text-black font-bold shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            Visual UI Slider
          </button>
          <button
            onClick={() => setActiveView("lighthouse")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              activeView === "lighthouse"
                ? "bg-white text-black font-bold shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            Lighthouse & Vitals
          </button>
          <button
            onClick={() => setActiveView("metrics")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              activeView === "metrics"
                ? "bg-white text-black font-bold shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            SERP & Metrics
          </button>
          <button
            onClick={() => setActiveView("code")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              activeView === "code"
                ? "bg-white text-black font-bold shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            Code & Schema
          </button>
        </div>
      </div>

      {/* VIEW 1: Visual Image Comparison Slider */}
      {activeView === "visual" && (
        <div className="space-y-6">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[360px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-zinc-700 bg-black shadow-2xl"
          >
            {/* AFTER Image (Full Width Underneath) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={project.afterImageUrl}
                alt="After Optimization - Re-engineered high-performance website interface"
                loading="lazy"
                decoding="async"
                width={1000}
                height={800}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-emerald-500/90 text-black px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold backdrop-blur-md shadow-lg flex items-center gap-1.5 max-w-[calc(100%-1rem)]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="leading-tight">AFTER: Re-engineered Website ({rankingAfter} - Speed {project.lighthouse.after.performance})</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden border-r-2 border-white shadow-2xl"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={project.beforeImageUrl}
                alt="Before Optimization - Legacy slow unoptimized website"
                loading="lazy"
                decoding="async"
                width={1000}
                height={800}
                className="absolute inset-0 w-full h-full object-cover object-top max-w-none"
                style={{ width: containerWidth || "100%" }}
              />
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-rose-500/90 text-white px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold backdrop-blur-md shadow-lg flex items-center gap-1.5 max-w-[calc(100%-1rem)]">
                <XCircle className="w-3.5 h-3.5 shrink-0" />
                <span className="leading-tight">BEFORE: Legacy Site ({rankingBefore} - Speed {project.lighthouse.before.performance})</span>
              </div>
            </div>

            {/* Slider Drag Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black shadow-2xl flex items-center justify-center font-bold border-2 border-black">
                <ArrowLeftRight className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>

          {/* Side-by-side descriptive notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <XCircle className="w-4 h-4" />
                <span>Pre-SEO & Legacy State</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.beforeDescription}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Post-SEO & Re-architected State</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.afterDescription}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Lighthouse & Core Web Vitals Comparison */}
      {activeView === "lighthouse" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Before Scores */}
            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">Before Optimization</span>
                <span className="px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 text-xs font-mono font-bold">Lighthouse {project.lighthouse.before.performance}/100</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-black/40 rounded-xl border border-rose-900/30">
                  <div className="text-2xl font-extrabold text-rose-400">{project.lighthouse.before.performance}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-1">Performance</div>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-rose-900/30">
                  <div className="text-2xl font-extrabold text-amber-400">{project.lighthouse.before.accessibility}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-1">Accessibility</div>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-rose-900/30">
                  <div className="text-2xl font-extrabold text-amber-400">{project.lighthouse.before.bestPractices}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-1">Best Practices</div>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-rose-900/30">
                  <div className="text-2xl font-extrabold text-amber-400">{project.lighthouse.before.seo}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-1">SEO Score</div>
                </div>
              </div>

              <div className="pt-2 border-t border-rose-900/30 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>Largest Contentful Paint (LCP):</span>
                  <span className="text-rose-400 font-bold">{project.lighthouse.before.lcp}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>First Input Delay (FID):</span>
                  <span className="text-rose-400 font-bold">{project.lighthouse.before.fid}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Cumulative Layout Shift (CLS):</span>
                  <span className="text-rose-400 font-bold">{project.lighthouse.before.cls}</span>
                </div>
              </div>
            </div>

            {/* After Scores */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">After Rohit's Engineering</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">Lighthouse {project.lighthouse.after.performance}/100</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-black/40 rounded-xl border border-emerald-900/30">
                  <div className="text-2xl font-extrabold text-emerald-400">{project.lighthouse.after.performance}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-1">Performance</div>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-emerald-900/30">
                  <div className="text-2xl font-extrabold text-emerald-400">{project.lighthouse.after.accessibility}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-1">Accessibility</div>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-emerald-900/30">
                  <div className="text-2xl font-extrabold text-emerald-400">{project.lighthouse.after.bestPractices}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-1">Best Practices</div>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-emerald-900/30">
                  <div className="text-2xl font-extrabold text-emerald-400">{project.lighthouse.after.seo}</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-1">SEO Score</div>
                </div>
              </div>

              <div className="pt-2 border-t border-emerald-900/30 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>Largest Contentful Paint (LCP):</span>
                  <span className="text-emerald-400 font-bold">{project.lighthouse.after.lcp} (Passing)</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>First Input Delay (FID):</span>
                  <span className="text-emerald-400 font-bold">{project.lighthouse.after.fid} (Passing)</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Cumulative Layout Shift (CLS):</span>
                  <span className="text-emerald-400 font-bold">{project.lighthouse.after.cls} (Zero Shift)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* VIEW 3: SERP & Growth Metrics Grid */}
      {activeView === "metrics" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 relative overflow-hidden group hover:border-zinc-600 transition-colors">
              <div className="flex justify-between items-center text-xs text-zinc-400 font-mono">
                <span>{m.label}</span>
                <span className="text-emerald-400 font-extrabold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  {m.improvement}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800/80">
                <div>
                  <div className="text-[10px] font-mono text-rose-400 uppercase">Before</div>
                  <div className="text-lg font-bold text-zinc-400 line-through">{m.before}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">After Work</div>
                  <div className="text-xl font-black text-white">{m.after} {m.unit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 4: Code & Schema Audit */}
      {activeView === "code" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-rose-400">
              <span className="font-bold">Legacy Unoptimized Code Structure</span>
              <span>No Structured Data</span>
            </div>
            <pre className="p-4 rounded-xl bg-black border border-rose-900/50 text-xs font-mono text-rose-200 overflow-x-auto h-64 leading-relaxed">
              <code>{project.codeComparison.beforeSnippet}</code>
            </pre>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
              <span className="font-bold">Rohit's Re-engineered Next.js & JSON-LD Schema</span>
              <span>100% Indexable & SSR</span>
            </div>
            <pre className="p-4 rounded-xl bg-black border border-emerald-900/50 text-xs font-mono text-emerald-200 overflow-x-auto h-64 leading-relaxed">
              <code>{project.codeComparison.afterSnippet}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Key Technical Highlights Bullet List */}
      <div className="pt-6 border-t border-zinc-800">
        <h4 className="text-sm font-bold text-zinc-300 uppercase font-mono tracking-wider mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-400" />
          <span>Proven Optimization Strategy Executed:</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.technicalHighlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 bg-zinc-950 p-3 rounded-xl border border-zinc-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
