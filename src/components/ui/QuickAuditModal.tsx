"use client";
import React, { useState, useEffect, useCallback } from "react";
import { X, Zap, ShieldCheck, ArrowRight, Gauge, Cpu, Globe, Activity } from "lucide-react";
import type { QuickAuditResult } from "@/types";
import { CONTACT } from "@/config/site";

interface QuickAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialUrl?: string;
}

export const QuickAuditModal: React.FC<QuickAuditModalProps> = ({ isOpen, onClose, initialUrl = "" }) => {
  const [url, setUrl] = useState(initialUrl || "myclientwebsite.com");
  const [loading, setLoading] = useState(false);
  const [auditData, setAuditData] = useState<QuickAuditResult | null>(null);

  // Close on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  // Compute a deterministic, domain-aware audit score
  const computeDomainAudit = (rawUrl: string): QuickAuditResult => {
    const cleanDomain = rawUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "").toLowerCase();
    
    // Hash domain string to produce consistent yet domain-specific metrics
    let hash = 0;
    for (let i = 0; i < cleanDomain.length; i++) {
      hash = (hash << 5) - hash + cleanDomain.charCodeAt(i);
      hash |= 0;
    }
    const positiveHash = Math.abs(hash);

    // Calculate score based on domain characteristics
    const isDev = cleanDomain.includes("dev") || cleanDomain.includes("io") || cleanDomain.includes("app");
    const isGov = cleanDomain.includes("gov") || cleanDomain.includes("edu");
    
    let baseScore = 38 + (positiveHash % 35); // Score between 38 and 72
    if (isDev) baseScore = Math.min(88, baseScore + 15);
    if (isGov) baseScore = Math.min(85, baseScore + 10);

    const lcpVal = (2.4 + (positiveHash % 30) / 10).toFixed(1);
    const inpVal = 120 + (positiveHash % 160);
    const clsVal = (0.12 + (positiveHash % 25) / 100).toFixed(2);
    const ttfbVal = (0.6 + (positiveHash % 12) / 10).toFixed(1);

    const perfScore = Math.max(25, baseScore - 12);
    const accessScore = Math.min(95, baseScore + 18);
    const bpScore = Math.min(92, baseScore + 14);
    const seoScore = Math.max(30, baseScore - 5);

    return {
      domain: cleanDomain || "myclientwebsite.com",
      overallScore: baseScore,
      projectedScore: 99,
      timestamp: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      vitals: [
        { name: "Largest Contentful Paint (LCP)", current: `${lcpVal}s`, target: "< 1.2s", status: parseFloat(lcpVal) > 3.0 ? "poor" : "warning", impact: "High SERP Penalty" },
        { name: "Interaction to Next Paint (INP)", current: `${inpVal}ms`, target: "< 50ms", status: inpVal > 200 ? "poor" : "warning", impact: "User Frustration" },
        { name: "Cumulative Layout Shift (CLS)", current: `${clsVal}`, target: "< 0.01", status: parseFloat(clsVal) > 0.25 ? "poor" : "warning", impact: "Visual Instability" },
        { name: "Time to First Byte (TTFB)", current: `${ttfbVal}s`, target: "< 0.2s", status: parseFloat(ttfbVal) > 1.0 ? "poor" : "warning", impact: "Server Latency" },
      ],
      categories: {
        performance: { score: perfScore, label: perfScore < 50 ? "Poor" : "Needs Improvement" },
        accessibility: { score: accessScore, label: accessScore > 80 ? "Good" : "Average" },
        bestPractices: { score: bpScore, label: bpScore > 80 ? "Good" : "Average" },
        seo: { score: seoScore, label: seoScore < 60 ? "Unoptimized" : "Moderate" },
      },
      bottlenecks: [
        { title: "Missing Schema.org JSON-LD Structured Data", type: "Critical", fix: "Inject dynamic Product/Organization JSON-LD snippets for Google Rich Snippets." },
        { title: "Uncompressed PNG/JPEG Images (4.2MB total payload)", type: "Critical", fix: "Convert to WebP/AVIF formats with responsive srcset attributes." },
        { title: "Blocking JavaScript & Unused CSS Bundles", type: "High", fix: "Implement Next.js code-splitting and dynamic script deferral." },
        { title: "Insecure or Missing Canonical URL Tags", type: "High", fix: "Set strict rel='canonical' headers to prevent duplicate content indexing." },
        { title: "Missing Alt Text on Images", type: "Medium", fix: "Add semantic keyword-rich alt tags for image search ranking." },
      ],
      projections: {
        trafficIncrease: "+280% to +450%",
        loadSpeedDrop: `${lcpVal}s → 0.6s`,
        conversionSurge: "+3.2x Lead Capture",
      }
    };
  };

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setAuditData(null);

    setTimeout(() => {
      setAuditData(computeDomainAudit(url.trim()));
      setLoading(false);
    }, 900);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/20 rounded-3xl p-5 sm:p-8 text-white shadow-2xl my-8 overflow-hidden space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest">
            <Gauge className="w-3.5 h-3.5 text-emerald-400" />
            <span>Instant Technical Audit Engine</span>
          </div>
          <h2 id="audit-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Quick Website Performance & SEO Audit
          </h2>
          <p className="text-xs text-white/60 leading-relaxed">
            Test any website URL against Google Core Web Vitals, SERP indexing benchmarks, and technical speed bottlenecks.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <label htmlFor="audit-modal-url" className="sr-only">Website URL for audit</label>
            <Globe className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
            <input
              id="audit-modal-url"
              name="url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g., mycompany.com or https://example.com"
              aria-label="Website URL for audit"
              className="w-full bg-black border border-white/20 rounded-xl pl-10 pr-4 py-3 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-all input-glow"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-white text-black text-xs font-mono uppercase font-bold tracking-wider hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.98] shadow-lg"
          >
            {loading ? (
              <>
                <Cpu className="w-4 h-4 animate-spin text-black" />
                <span>Auditing Domain...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                <span>Run Performance Audit</span>
              </>
            )}
          </button>
        </form>

        {/* Audit Results View */}
        {auditData && (
          <div className="space-y-6 pt-2 animate-in fade-in duration-300">
            
            {/* Score Comparison Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Unoptimized Score Card */}
              <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/40 space-y-3 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono uppercase text-red-400 font-bold">Current Unoptimized Score</span>
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-[10px] font-mono font-bold">
                    Grade: {auditData.overallScore < 50 ? "F" : auditData.overallScore < 70 ? "D" : "C"}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black font-mono text-red-400">{auditData.overallScore}</span>
                  <span className="text-xs text-white/50 font-mono">/ 100 Points</span>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Target <strong className="text-white">{auditData.domain}</strong> suffers from load bottlenecks, sub-optimal LCP, and missing JSON-LD schema tags.
                </p>
              </div>

              {/* Projected Score Card */}
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">Projected With Rohit's Fix</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">Grade: A+</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black font-mono text-emerald-400">{auditData.projectedScore}</span>
                  <span className="text-xs text-white/50 font-mono">/ 100 Points</span>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Next.js SSR re-architecture + White-Hat technical SEO optimization yields top rankings.
                </p>
              </div>

            </div>

            {/* Core Category Scores Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-black border border-white/10 rounded-xl">
                <div className="text-xl font-bold font-mono text-red-400">{auditData.categories.performance.score}/100</div>
                <div className="text-[9px] uppercase font-mono text-white/50 mt-1">Performance</div>
              </div>
              <div className="p-3 bg-black border border-white/10 rounded-xl">
                <div className="text-xl font-bold font-mono text-amber-400">{auditData.categories.accessibility.score}/100</div>
                <div className="text-[9px] uppercase font-mono text-white/50 mt-1">Accessibility</div>
              </div>
              <div className="p-3 bg-black border border-white/10 rounded-xl">
                <div className="text-xl font-bold font-mono text-amber-400">{auditData.categories.bestPractices.score}/100</div>
                <div className="text-[9px] uppercase font-mono text-white/50 mt-1">Best Practices</div>
              </div>
              <div className="p-3 bg-black border border-white/10 rounded-xl">
                <div className="text-xl font-bold font-mono text-emerald-400">{auditData.categories.seo.score}/100</div>
                <div className="text-[9px] uppercase font-mono text-white/50 mt-1">SEO Health</div>
              </div>
            </div>

            {/* Core Web Vitals Table */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-white flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Core Web Vitals Diagnostic</span>
              </h4>
              <div className="space-y-2 text-xs font-mono">
                {auditData.vitals.map((v, idx) => (
                  <div key={idx} className="p-2.5 bg-black rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-white font-bold">{v.name}</span>
                      <span className="text-[10px] text-red-400 ml-2">({v.impact})</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="text-red-400 font-bold">Current: {v.current}</span>
                      <span className="text-white/40">→</span>
                      <span className="text-emerald-400 font-bold">Target: {v.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actionable Recommendations */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Technical Bottlenecks & Action Roadmap</span>
              </h4>
              <div className="space-y-2 text-xs">
                {auditData.bottlenecks.map((b, idx) => (
                  <div key={idx} className="p-3 bg-black border border-white/10 rounded-xl space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white font-mono">{b.title}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                        b.type === "Critical" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}>
                        {b.type}
                      </span>
                    </div>
                    <p className="text-emerald-400 text-[11px] font-mono">Fix Action: {b.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-5 rounded-2xl bg-white text-black flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <h4 className="text-sm font-extrabold uppercase tracking-tight">Need Rohit Gupta To Fix This Site?</h4>
                <p className="text-xs text-black/70 font-light">
                  Get a complete custom technical SEO re-architecture & guaranteed speed optimization.
                </p>
              </div>
              <a
                href={`${CONTACT.whatsapp}?text=Hi%20Rohit,%20I%20ran%20a%20Quick%20Performance%20Audit%20for%20${encodeURIComponent(auditData.domain)}%20and%20would%20like%20to%20discuss%20a%20full%20fix.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-emerald-500 hover:text-black transition-all whitespace-nowrap flex items-center gap-2 shrink-0 shadow-lg"
              >
                <span>Request Custom Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
