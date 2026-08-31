"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Target, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Copy, 
  Check, 
  RefreshCw, 
  FileText, 
  BarChart3, 
  Zap, 
  Layers, 
  Lightbulb, 
  BookOpen
} from "lucide-react";

export const AiKeywordDensityTracker: React.FC = () => {
  const [targetKeyword, setTargetKeyword] = useState<string>("Technical SEO Specialist");
  const [content, setContent] = useState<string>(
    `As a Technical SEO Specialist, optimizing web applications for search engine crawlers requires strict attention to detail. A skilled Technical SEO Specialist understands the importance of Core Web Vitals, dynamic rendering, and server-side cached responses. 

When businesses hire a Technical SEO Specialist, they expect measurable improvements in LCP and INP metrics. By implementing structured JSON-LD schema markup, any Technical SEO Specialist can help search engines understand the exact entity context of a business. 

In addition to site architecture, a Technical SEO Specialist must conduct regular crawl error audits and maintain clean XML sitemaps to ensure fast indexing.`
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [highlightKeyword, setHighlightKeyword] = useState<boolean>(true);

  // Sample Preset Content
  const loadPreset = (presetType: "ideal" | "under" | "over") => {
    if (presetType === "ideal") {
      setTargetKeyword("Technical SEO Specialist");
      setContent(
        `As a Technical SEO Specialist, building fast and search-engine-friendly web applications is paramount. Modern search engines evaluate performance, crawlability, and semantic content structure.

When working as a Technical SEO Specialist, key responsibilities include auditing Core Web Vitals, generating structured XML sitemaps, and fixing indexing errors. A dedicated Technical SEO Specialist ensures that search bots can seamlessly discover and render every critical page on your site.`
      );
    } else if (presetType === "under") {
      setTargetKeyword("Core Web Vitals Optimization");
      setContent(
        `Web performance is crucial for user retention and search engine rankings. Slow pages increase bounce rates and harm overall user engagement across mobile and desktop devices.

To improve loading speeds, developers should optimize image compression, leverage browser caching, and defer non-critical JavaScript scripts. Having a fast website improves user trust and conversion rates.`
      );
    } else if (presetType === "over") {
      setTargetKeyword("Ayodhya Web Development");
      setContent(
        `Welcome to Ayodhya Web Development. We offer the best Ayodhya Web Development services in Ayodhya. If you need Ayodhya Web Development, our Ayodhya Web Development agency provides top Ayodhya Web Development solutions for your business in Ayodhya Web Development field. Contact our Ayodhya Web Development team today for Ayodhya Web Development excellence.`
      );
    }
  };

  // Calculations
  const metrics = useMemo(() => {
    const cleanContent = content.trim();
    if (!cleanContent) {
      return {
        totalWords: 0,
        keywordCount: 0,
        density: 0,
        status: "under",
        statusText: "Empty Content",
        statusColor: "text-zinc-500",
        neededCountMin: 0,
        neededCountMax: 0,
        h1Matches: 0,
        introMatch: false,
      };
    }

    const words = cleanContent.split(/\s+/).filter(Boolean);
    const totalWords = words.length;

    const trimmedKeyword = targetKeyword.trim().toLowerCase();
    let keywordCount = 0;
    let wordCountInKeyword = 1;

    if (trimmedKeyword) {
      wordCountInKeyword = trimmedKeyword.split(/\s+/).filter(Boolean).length;
      // Regex search for exact phrase (case-insensitive)
      const escapedKw = trimmedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escapedKw, "gi");
      const matches = cleanContent.match(regex);
      keywordCount = matches ? matches.length : 0;
    }

    // Density calculation: (Count * WordLengthOfKeyword / TotalWords) * 100
    const density = totalWords > 0 ? parseFloat(((keywordCount * wordCountInKeyword / totalWords) * 100).toFixed(2)) : 0;

    // Ideal range: 2.0% - 3.0%
    let status: "under" | "ideal" | "over" = "ideal";
    let statusText = "Ideal Keyword Density (2.0% - 3.0%)";
    let statusColor = "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";

    if (density < 1.8) {
      status = "under";
      statusText = "Under-Optimized (< 1.8%)";
      statusColor = "text-amber-400 bg-amber-500/10 border-amber-500/30";
    } else if (density > 3.2) {
      status = "over";
      statusText = "Keyword Stuffing Risk (> 3.2%)";
      statusColor = "text-rose-400 bg-rose-500/10 border-rose-500/30";
    }

    // Recommended keyword count for 2.5% target density
    const targetDensity = 0.025; // 2.5%
    const targetTotalOccurrences = Math.round((totalWords * targetDensity) / wordCountInKeyword);
    const neededCountMin = Math.max(1, Math.round((totalWords * 0.02) / wordCountInKeyword));
    const neededCountMax = Math.max(2, Math.round((totalWords * 0.03) / wordCountInKeyword));

    // Check introduction (first 100 words)
    const introText = words.slice(0, 80).join(" ").toLowerCase();
    const introMatch = trimmedKeyword ? introText.includes(trimmedKeyword) : false;

    return {
      totalWords,
      keywordCount,
      density,
      status,
      statusText,
      statusColor,
      targetTotalOccurrences,
      neededCountMin,
      neededCountMax,
      introMatch,
      wordCountInKeyword
    };
  }, [content, targetKeyword]);

  const handleCopy = () => {
    navigator.clipboard?.writeText(content).catch(() => undefined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render Highlighted Text
  const renderHighlightedContent = () => {
    if (!targetKeyword.trim() || !highlightKeyword) return content;
    const trimmedKw = targetKeyword.trim();
    const escaped = trimmedKw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = content.split(new RegExp(`(${escaped})`, "gi"));

    return parts.map((part, i) => {
      if (part.toLowerCase() === trimmedKw.toLowerCase()) {
        return (
          <mark key={i} className="bg-emerald-400 text-black font-bold px-1 rounded">
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-8 bg-zinc-950/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Lab Real-Time On-Page Analysis Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            AI Keyword Density & SERP Optimization Tracker
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-xl font-light leading-relaxed">
            Analyze your article draft or sales copy against focus search terms in real-time. Reach the recommended 2.0% – 3.0% density benchmark to prevent algorithmic keyword stuffing penalties.
          </p>
        </div>

        {/* Quick Sample Presets */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block w-full sm:w-auto">Load Test Samples:</span>
          <button
            onClick={() => loadPreset("ideal")}
            className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold rounded-xl hover:bg-emerald-500/30 transition-all"
          >
            Ideal (2.4%)
          </button>
          <button
            onClick={() => loadPreset("under")}
            className="px-3 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold rounded-xl hover:bg-amber-500/30 transition-all"
          >
            Under (0.0%)
          </button>
          <button
            onClick={() => loadPreset("over")}
            className="px-3 py-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-mono font-bold rounded-xl hover:bg-rose-500/30 transition-all"
          >
            Over-stuffed (8.5%)
          </button>
        </div>
      </div>

      {/* Target Keyword Input Bar */}
      <div className="p-5 bg-black border border-zinc-800 rounded-2xl space-y-3 shadow-xl">
        <label htmlFor="ai-density-target-keyword" className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider block">
          Focus Target Keyword / Search Phrase *
        </label>
        <div className="relative">
          <Target className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3.5" />
          <input
            id="ai-density-target-keyword"
            name="targetKeyword"
            type="text"
            value={targetKeyword}
            onChange={(e) => setTargetKeyword(e.target.value)}
            placeholder="e.g. Technical SEO Specialist, Ayodhya Web Development"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-all"
          />
        </div>
      </div>

      {/* REAL-TIME DENSITY METRICS HUD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Total Words */}
        <div className="p-4 bg-black/80 border border-zinc-800 rounded-2xl space-y-1">
          <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">Total Word Count</span>
          <div className="text-2xl font-black font-mono text-white">{metrics.totalWords} <span className="text-xs font-normal text-zinc-500">words</span></div>
          <p className="text-[10px] font-mono text-zinc-500">Recommended: 300+ words</p>
        </div>

        {/* Metric 2: Keyword Occurrences */}
        <div className="p-4 bg-black/80 border border-zinc-800 rounded-2xl space-y-1">
          <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">Keyword Matches</span>
          <div className="text-2xl font-black font-mono text-emerald-400">
            {metrics.keywordCount} <span className="text-xs font-normal text-zinc-500">times</span>
          </div>
          <p className="text-[10px] font-mono text-zinc-500">
            Optimal target: {metrics.neededCountMin} – {metrics.neededCountMax} times
          </p>
        </div>

        {/* Metric 3: Live Keyword Density % */}
        <div className="p-4 bg-black/80 border border-zinc-800 rounded-2xl space-y-1">
          <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">Keyword Density</span>
          <div className="text-2xl font-black font-mono text-white">
            {metrics.density}%
          </div>
          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-1">
            <div 
              className={`h-full transition-all duration-300 ${
                metrics.status === "ideal" ? "bg-emerald-400" :
                metrics.status === "under" ? "bg-amber-400" : "bg-rose-500"
              }`}
              style={{ width: `${Math.min(100, (metrics.density / 4) * 100)}%` }}
            />
          </div>
        </div>

        {/* Metric 4: Optimization Status */}
        <div className="p-4 bg-black/80 border border-zinc-800 rounded-2xl space-y-1">
          <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">Optimization Status</span>
          <div className={`px-2.5 py-1 rounded-xl border text-xs font-mono font-bold inline-flex items-center gap-1.5 ${metrics.statusColor}`}>
            {metrics.status === "ideal" && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
            {metrics.status === "under" && <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
            {metrics.status === "over" && <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />}
            <span>{metrics.statusText}</span>
          </div>
          <p className="text-[10px] font-mono text-zinc-500 pt-0.5">
            {metrics.introMatch ? "✓ Injected in intro" : "⚠ Missing in first 80 words"}
          </p>
        </div>

      </div>

      {/* TEXT EDITOR AND LIVE PREVIEW split view */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Editor Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <label htmlFor="ai-density-content" className="text-zinc-400 uppercase font-bold flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-400" /> Draft Content Editor
            </label>
            <button
              onClick={handleCopy}
              className="text-zinc-400 hover:text-white flex items-center gap-1 text-[10px]"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied!" : "Copy Text"}</span>
            </button>
          </div>

          <textarea
            id="ai-density-content"
            name="content"
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your blog post, landing page copy, or product description here to measure keyword density..."
            className="w-full bg-black border border-zinc-800 rounded-2xl p-4 text-xs font-sans text-white leading-relaxed placeholder-zinc-700 focus:outline-none focus:border-white transition-all scrollbar-thin"
          />
        </div>

        {/* Live Highlight & Optimization Feedback Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400 uppercase font-bold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> SERP Highlighting & AI Advice
            </span>
            <label htmlFor="ai-density-highlight" className="flex items-center gap-1.5 text-[10px] text-zinc-400 cursor-pointer">
              <input
                id="ai-density-highlight"
                name="highlightKeyword"
                type="checkbox"
                checked={highlightKeyword}
                onChange={(e) => setHighlightKeyword(e.target.checked)}
                className="rounded border-zinc-800 bg-black text-emerald-500 focus:ring-0"
              />
              <span>Highlight Keywords</span>
            </label>
          </div>

          <div className="bg-black border border-zinc-800 rounded-2xl p-4 h-[250px] overflow-y-auto text-xs font-sans text-zinc-300 leading-relaxed scrollbar-thin whitespace-pre-wrap">
            {renderHighlightedContent()}
          </div>

          {/* AI Optimization Feedback Box */}
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase text-[10px]">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Real-Time Actionable Feedback</span>
            </div>

            {metrics.status === "ideal" && (
              <p className="text-zinc-300 font-light leading-relaxed">
                ✓ Perfect! Your keyword density of <strong className="text-emerald-400">{metrics.density}%</strong> falls directly inside the Google SERP sweet spot (2.0% – 3.0%). Your text maintains natural readability while signaling strong topic relevance.
              </p>
            )}

            {metrics.status === "under" && (
              <p className="text-zinc-300 font-light leading-relaxed">
                ⚠ Low Density (<strong className="text-amber-400">{metrics.density}%</strong>): Consider inserting the phrase <strong className="text-white">"{targetKeyword}"</strong> {Math.max(1, metrics.neededCountMin - metrics.keywordCount)} more time(s) to reach the recommended 2.0% benchmark.
              </p>
            )}

            {metrics.status === "over" && (
              <p className="text-zinc-300 font-light leading-relaxed">
                🚨 Over-Optimized (<strong className="text-rose-400">{metrics.density}%</strong>): Remove at least {Math.max(1, metrics.keywordCount - metrics.neededCountMax)} occurrence(s) of <strong className="text-white">"{targetKeyword}"</strong> or substitute with semantic LSI synonyms to avoid algorithmic penalties.
              </p>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
