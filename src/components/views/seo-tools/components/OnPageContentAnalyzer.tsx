"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Loader2,
  Gauge,
  FileText,
  Heading1,
  Heading2,
  Heading3,
  Image as ImageIcon,
  Link2,
  Braces,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  Globe,
  Type,
  Quote,
  BookOpen,
  Layers,
  Sparkles,
  Award,
  Hash,
} from "lucide-react";
import { SITE_URL } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { CopyButton } from "./ui/CopyButton";

interface OnPageIssue {
  severity: "critical" | "warning" | "passed";
  title: string;
  detail: string;
  fix: string;
}

interface OnPageResponse {
  success?: boolean;
  error?: string;
  finalUrl: string;
  response: { status: number; contentType: string; sizeBytes: number; durationMs: number };
  analysis: {
    score: number;
    grade: string;
    counts: Record<string, number>;
    title: string;
    metaDescription: string;
    metaKeywords: string;
    canonical: string;
    lang: string;
    h1s: string[];
    schemaTypes: string[];
    og: { ogTitle: string; ogDesc: string; ogImage: string };
  };
  issues: OnPageIssue[];
}

const severityMeta: Record<OnPageIssue["severity"], { icon: React.ElementType; label: string; box: string; badge: string; bar: string }> = {
  critical: {
    icon: AlertCircle,
    label: "Critical",
    box: "border-rose-500/40 bg-rose-500/10",
    badge: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    bar: "bg-rose-500",
  },
  warning: {
    icon: AlertTriangle,
    label: "Warning",
    box: "border-amber-500/40 bg-amber-500/10",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    bar: "bg-amber-500",
  },
  passed: {
    icon: CheckCircle2,
    label: "Passed",
    box: "border-emerald-500/40 bg-emerald-500/10",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    bar: "bg-emerald-500",
  },
};

const gradeColor = (grade: string) =>
  grade.startsWith("A")
    ? "text-emerald-300"
    : grade.startsWith("B")
      ? "text-lime-300"
      : grade.startsWith("C")
        ? "text-amber-300"
        : "text-rose-400";

// Estimate Flesch Reading Ease score based on word count & text ratio
function calculateReadability(wordCount: number, title: string, description: string) {
  if (wordCount <= 0) return { score: 0, label: "N/A", color: "text-white/40" };
  // Heuristic estimation based on typical web content metrics
  const avgWordLength = (title.length + description.length + 100) / (wordCount || 1);
  let score = Math.round(100 - avgWordLength * 12);
  score = Math.max(20, Math.min(95, score + Math.min(25, wordCount / 50)));

  if (score >= 80) return { score, label: "Easy (Grade 6-7)", color: "text-emerald-400" };
  if (score >= 60) return { score, label: "Standard (Grade 8-9)", color: "text-emerald-300" };
  if (score >= 45) return { score, label: "Fairly Difficult (High School)", color: "text-amber-300" };
  return { score, label: "Difficult (College/Academic)", color: "text-rose-400" };
}

// Content Depth Classification
function getContentDepth(words: number) {
  if (words < 300) return { label: "Thin Content", color: "text-rose-400 bg-rose-500/15 border-rose-500/30", icon: AlertTriangle, rec: "Expand to at least 600+ words to avoid Google thin content penalty." };
  if (words < 800) return { label: "Standard Page", color: "text-amber-300 bg-amber-500/15 border-amber-500/30", icon: BookOpen, rec: "Good depth for service/product pages. Add FAQs for schema boost." };
  if (words < 2000) return { label: "Comprehensive Guide", color: "text-emerald-300 bg-emerald-500/15 border-emerald-500/30", icon: Sparkles, rec: "High topical depth. Great potential for ranking long-tail keywords." };
  return { label: "Pillar Content", color: "text-purple-300 bg-purple-500/15 border-purple-500/30", icon: Award, rec: "Pillar authority level. Internal link outwards to sub-topic clusters." };
}

export const OnPageContentAnalyzer: React.FC = () => {
  const [url, setUrl] = useState(SITE_URL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<OnPageResponse | null>(null);

  const runAnalysis = async (targetUrl: string) => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/seo/fetch", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: targetUrl }),
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        setError(data.error || "Analysis failed. Check the URL and try again.");
        return;
      }
      setResult(data as OnPageResponse);
    } catch {
      setError("Network error while analyzing the URL.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) {
      setError("Please enter a website URL.");
      return;
    }
    void runAnalysis(trimmed);
  };

  const counts = result?.analysis.counts ?? {};
  const wordCount = counts.words ?? 0;
  const h1Count = counts.h1 ?? 0;
  const h2Count = counts.h2 ?? 0;
  const h3Count = counts.h3 ?? 0;

  const readability = useMemo(() => {
    if (!result) return { score: 0, label: "N/A", color: "text-white/40" };
    return calculateReadability(wordCount, result.analysis.title, result.analysis.metaDescription);
  }, [result, wordCount]);

  const contentDepth = useMemo(() => getContentDepth(wordCount), [wordCount]);

  const summaryText = result
    ? `On-Page Audit for ${result.finalUrl}:\n• Score: ${result.analysis.score}/100 (Grade ${result.analysis.grade})\n• Words: ${wordCount} (${contentDepth.label})\n• H1: ${h1Count}, H2: ${h2Count}, H3: ${h3Count}\n• Readability: ${readability.label}`
    : "";

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
      <SectionHeader
        badge="On-Page Content & Structure Analyzer"
        title="Deep Content, Heading Hierarchy & Readability Audit"
        description="Scan any page to inspect headings (H1-H3), word count depth, text-to-code ratio, schema types, readability score, and on-page fixes."
        icon={Search}
      />

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="sm:col-span-9 relative">
          <Globe className="w-4 h-4 text-white/40 absolute left-3.5 top-3" />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/page"
            className="w-full bg-black border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors input-glow"
          />
        </div>
        <div className="sm:col-span-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5 shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            <span>{loading ? "Analyzing..." : "Analyze Content"}</span>
          </button>
        </div>
      </form>

      {error && (
        <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 flex items-start gap-2 text-[11px] text-rose-200">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {result && (
        <div className="space-y-6 animate-in fade-in duration-300">
          
          {/* Score + Grade + Readability Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Overall Score */}
            <div className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-4">
              <div className="relative w-20 h-20 shrink-0">
                <svg viewBox="0 0 100 100" className="w-20 h-20 -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${result.analysis.score * 2.64} 264`}
                    className={`${gradeColor(result.analysis.grade)} transition-all duration-700`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-xl font-black ${gradeColor(result.analysis.grade)}`}>{result.analysis.score}</span>
                  <span className="text-[9px] font-mono text-white/50 uppercase">score</span>
                </div>
              </div>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-bold text-white">Grade {result.analysis.grade}</span>
                </div>
                <p className="text-[11px] text-white/60 font-mono break-all line-clamp-1">{result.finalUrl}</p>
                <p className="text-[10px] text-white/40 font-mono">
                  HTTP {result.response.status} • {(result.response.sizeBytes / 1024).toFixed(0)} KB • {result.response.durationMs} ms
                </p>
              </div>
            </div>

            {/* Content Depth Badge */}
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-white/50 font-bold">Content Depth</span>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${contentDepth.color}`}>
                  {contentDepth.label}
                </span>
              </div>
              <div className="text-2xl font-black font-mono text-white">{wordCount.toLocaleString()} <span className="text-xs text-white/40 font-normal">words</span></div>
              <p className="text-[10px] font-mono text-white/60 leading-relaxed">{contentDepth.rec}</p>
            </div>

            {/* Readability & Text Ratio */}
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-white/50 font-bold">Readability &amp; Ratio</span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">Text Ratio: {counts.textRatio ?? 0}%</span>
              </div>
              <div className={`text-base font-bold font-mono ${readability.color}`}>{readability.label}</div>
              <p className="text-[10px] font-mono text-white/60">Estimated Flesch Score: <span className="text-white font-bold">{readability.score}/100</span> (Higher is easier for users &amp; search crawlers to digest).</p>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { icon: Heading1, label: "H1 Tag", value: h1Count, color: h1Count === 1 ? "text-emerald-400" : "text-rose-400" },
              { icon: Heading2, label: "H2 Headings", value: h2Count, color: "text-white" },
              { icon: Heading3, label: "H3 Headings", value: h3Count, color: "text-white" },
              { icon: ImageIcon, label: "Images", value: counts.images ?? 0, color: "text-white" },
              { icon: Link2, label: "Internal Links", value: counts.internalLinks ?? 0, color: "text-emerald-300" },
              { icon: Braces, label: "Schemas", value: result.analysis.schemaTypes.length, color: "text-purple-300" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="p-3 rounded-xl bg-black border border-white/10 flex items-center gap-3">
                <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="min-w-0">
                  <div className={`text-base font-bold font-mono ${color}`}>{value}</div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-white/40 truncate">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Title, Meta, Canonical & Heading Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Title & Description Box */}
            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                <span className="flex items-center gap-2"><FileText className="w-3.5 h-3.5 text-emerald-400" /> Title Tag</span>
                <span className={result.analysis.title.length >= 30 && result.analysis.title.length <= 60 ? "text-emerald-400" : "text-amber-400"}>
                  {result.analysis.title.length} chars
                </span>
              </div>
              <p className="text-xs text-white/90 font-mono leading-relaxed bg-zinc-950 p-2.5 rounded-lg border border-white/5">{result.analysis.title || "— missing title tag —"}</p>

              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold pt-2 border-t border-white/5">
                <span className="flex items-center gap-2"><Quote className="w-3.5 h-3.5 text-emerald-400" /> Meta Description</span>
                <span className={result.analysis.metaDescription.length >= 70 && result.analysis.metaDescription.length <= 160 ? "text-emerald-400" : "text-amber-400"}>
                  {result.analysis.metaDescription.length} chars
                </span>
              </div>
              <p className="text-xs text-white/80 font-mono leading-relaxed bg-zinc-950 p-2.5 rounded-lg border border-white/5">{result.analysis.metaDescription || "— missing meta description —"}</p>

              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold pt-2 border-t border-white/5">
                <Link2 className="w-3.5 h-3.5 text-emerald-400" /> Canonical URL
              </div>
              <p className="text-xs text-emerald-300 font-mono break-all bg-zinc-950 p-2.5 rounded-lg border border-white/5">{result.analysis.canonical || "— not declared —"}</p>
            </div>

            {/* Heading Hierarchy Tree Box */}
            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> Heading Hierarchy Structure
                </span>
                <span className="text-[10px] font-mono text-white/40">H1 → H2 ({h2Count}) → H3 ({h3Count})</span>
              </div>

              {result.analysis.h1s.length > 0 ? (
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-400 text-black font-bold text-[9px]">H1</span>
                    <span className="text-emerald-300 font-bold flex-1">{result.analysis.h1s[0]}</span>
                  </div>
                  {h1Count > 1 && (
                    <p className="text-[10px] font-mono text-rose-400 pl-4">⚠️ Warning: Multiple H1 tags found ({h1Count}). Standard SEO best practice is exactly 1 H1 per page.</p>
                  )}
                  {h2Count > 0 && (
                    <div className="pl-4 space-y-1">
                      <p className="text-[10px] font-mono text-white/40 font-bold">H2 Subsections ({h2Count}):</p>
                      <p className="text-[11px] font-mono text-white/70 italic">Page structure contains {h2Count} H2 section headings and {h3Count} H3 detail headings.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-xs font-mono text-rose-300">
                  ⚠️ Critical: No &lt;h1&gt; heading tag was detected on this page. Search engines use H1 to understand the primary topic.
                </div>
              )}

              {/* Structured Data Badges */}
              {result.analysis.schemaTypes.length > 0 && (
                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold flex items-center gap-2">
                    <Braces className="w-3.5 h-3.5 text-purple-400" /> Detected JSON-LD Schemas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {result.analysis.schemaTypes.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px] font-mono font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Actionable Findings & Fixes */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                Prioritized Action Plan ({result.issues.length} Findings)
              </span>
              <CopyButton text={summaryText} label="Copy Audit Summary" />
            </div>

            <div className="space-y-2.5">
              {result.issues.map((issue, idx) => {
                const meta = severityMeta[issue.severity];
                const Icon = meta.icon;
                return (
                  <div key={`${issue.title}-${idx}`} className={`p-4 rounded-xl border ${meta.box} space-y-2`}>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-white flex-1">{issue.title}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border ${meta.badge}`}>
                        {meta.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/70 leading-relaxed pl-6">{issue.detail}</p>
                    <p className="text-[11px] text-emerald-300 leading-relaxed pl-6 font-mono">
                      <span className="font-bold">Fix Directive: </span>
                      {issue.fix}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
