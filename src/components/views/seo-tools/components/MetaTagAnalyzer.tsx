"use client";
import React, { useMemo, useState } from "react";
import { Search, CheckCircle2, AlertCircle, Info, Download, Monitor, Smartphone, Gauge, Sparkles, Hash, Wand2, Globe } from "lucide-react";
import { CopyButton } from "./ui/CopyButton";

interface MetaTagAnalyzerProps {
  domain?: string;
}

export const MetaTagAnalyzer: React.FC<MetaTagAnalyzerProps> = ({ domain = "https://example.com" }) => {
  const [title, setTitle] = useState("Technical SEO Specialist in Noida, Delhi & India | Rohit Gupta");
  const [description, setDescription] = useState(
    "Hire an expert technical SEO specialist ranking 200+ sites #1 on Google & AI search. Core Web Vitals, JSON-LD schema, local SEO & white-hat link building for India businesses."
  );
  const [url, setUrl] = useState(domain);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  const checks = useMemo(() => {
    let titleRec = "";
    if (title.length < 30) titleRec = "Too short — add a primary keyword and value prop to fill 30–60 characters.";
    else if (title.length > 60) titleRec = "Too long — Google will truncate after ~60 chars. Move keywords to the front and trim.";
    else titleRec = "Optimal — a strong, click-worthy title length with room for rich results.";
    let descRec = "";
    if (description.length < 70) descRec = "Too short — add a clear offer and CTA to reach 70–160 characters.";
    else if (description.length > 160) descRec = "Too long — will be truncated in SERPs. Keep the call-to-action within the first 160 chars.";
    else descRec = "Optimal — full snippet visibility with a strong call-to-action.";
    return [
      { label: "Title Tag", current: title.length, max: 70, idealStart: 30, idealEnd: 60, recommendation: titleRec },
      { label: "Meta Description", current: description.length, max: 175, idealStart: 70, idealEnd: 160, recommendation: descRec },
    ];
  }, [title, description]);

  const keywordDensity = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const w of title.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean)) {
      counts[w] = (counts[w] || 0) + 1;
    }
    return Object.entries(counts).filter(([, c]) => c > 1).sort((a, b) => b[1] - a[1]).map(([k, c]) => ({ word: k, count: c }));
  }, [title]);

  const score = useMemo(() => {
    let s = 50;
    if (title.length >= 30 && title.length <= 60) s += 18; else if (title.length > 0) s += 8;
    if (description.length >= 70 && description.length <= 160) s += 18; else if (description.length > 0) s += 8;
    if (title.length > 0) s += 4;
    if (description.length > 0) s += 4;
    if (/^(https?:\/\/)/.test(url)) s += 4;
    return Math.min(100, s);
  }, [title, description, url]);

  const grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : "D";
  const gradeColor = score >= 80 ? "text-emerald-400" : score >= 55 ? "text-amber-400" : "text-rose-400";

  const buildHead = () => {
    const host = url.replace(/\/$/, "");
    const cleanDomain = host.replace(/^https?:\/\//, "").split("/")[0];
    return `<head>
  <title>${(title || "Page Title").trim()}</title>
  <meta name="description" content="${(description || "Page description").trim()}" />
  <link rel="canonical" href="${host}/" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${cleanDomain}" />
  <meta property="og:title" content="${(title || "Page Title").trim()}" />
  <meta property="og:description" content="${(description || "Page description").trim()}" />
  <meta property="og:url" content="${host}/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${(title || "Page Title").trim()}" />
  <meta name="twitter:description" content="${(description || "Page description").trim()}" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>`;
  };

  const downloadHead = () => {
    const blob = new Blob([buildHead()], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "seo-head-tags.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-1.5">
            <Hash className="w-3.5 h-3.5 text-emerald-400" />
            <span>Meta Tag Analyzer &amp; Optimizer</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Title &amp; Description Analyzer with Optimized Head Output</h3>
          <p className="text-xs text-white/60">Paste your title, description and URL to get a real-time SEO score, SERP preview, and a clean, ready-to-use HTML head block.</p>
        </div>
        <div className="flex items-center gap-1 bg-black p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          {(["desktop", "mobile"] as const).map((d) => (
            <button key={d} onClick={() => setDevice(d)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${device === d ? "bg-white text-black font-bold shadow" : "text-white/60 hover:text-white"}`}>
              {d === "desktop" ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
              {d === "desktop" ? "Desktop" : "Mobile"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="mt-title" className="text-[10px] font-mono uppercase text-white/60 mb-1 block font-bold">Page Title (Meta Title)</label>
            <input id="mt-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your page title..." className="w-full px-3 py-2.5 bg-black border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/60 input-glow" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="mt-desc" className="text-[10px] font-mono uppercase text-white/60 mb-1 block font-bold">Meta Description</label>
            <textarea id="mt-desc" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Enter your meta description..." className="w-full px-3 py-2.5 bg-black border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/60 input-glow resize-none" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="mt-url" className="text-[10px] font-mono uppercase text-white/60 mb-1 block font-bold">Page URL / Canonical</label>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <input id="mt-url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/about" className="w-full px-3 py-2.5 bg-black border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/60 input-glow" />
            </div>
          </div>

          <div className="space-y-3">
            {checks.map((c) => {
              const inRange = c.current >= c.idealStart && c.current <= c.idealEnd;
              const pct = Math.min(100, (c.current / c.max) * 100);
              return (
                <div key={c.label} className="p-3 bg-black rounded-xl border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-white">{c.label}</span>
                    <span className={inRange ? "text-emerald-400" : "text-amber-400"}>{c.current} chars {inRange ? "(optimal)" : ""}</span>
                  </div>
                  <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${inRange ? "bg-emerald-400" : c.current > c.idealEnd ? "bg-amber-400" : "bg-sky-400"}`} style={{ width: `${pct}%` }} />
                    <div className="absolute top-0 h-2 w-px bg-white/60" style={{ left: `${(c.idealEnd / c.max) * 100}%` }} />
                  </div>
                  <p className="text-[10px] text-white/60 leading-relaxed">{c.recommendation}</p>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-black border border-white/10 flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke={score >= 80 ? "#34d399" : score >= 55 ? "#fbbf24" : "#fb7185"} strokeWidth="3" strokeLinecap="round" strokeDasharray={`${(score / 100) * 100} 100`} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center"><Gauge className={`w-6 h-6 ${gradeColor}`} /></div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-black ${gradeColor}`}>{score}</span>
                <span className="text-[10px] font-mono uppercase text-white/50 font-bold">SEO Meta Grade {grade}</span>
              </div>
              <p className="text-[11px] text-white/60">Based on title length, description length, keyword placement and canonical URL.</p>
            </div>
          </div>
        </div>

<div className="space-y-4">
          <div className="p-4 rounded-2xl bg-[#202124] text-[#bdc1c6] font-sans shadow-2xl border border-zinc-700">
            <span className="block text-[10px] font-mono uppercase font-bold text-white/50 tracking-wider mb-3">Google SERP Preview ({device.toUpperCase()})</span>
            <div className={`space-y-1.5 ${device === "mobile" ? "max-w-[92%]" : ""}`}>
              <div className="flex items-center gap-2 text-xs text-[#dadce0] truncate">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Search className="w-3.5 h-3.5 text-white" /></div>
                <span className="text-[11px] text-[#bdc1c6] truncate">{url.replace(/^https?:\/\//, "")}</span>
              </div>
              <h4 className="text-base sm:text-lg text-[#8ab4f8] font-normal leading-snug line-clamp-2">{title || "Your page title will appear here"}</h4>
              <p className="text-xs text-[#bdc1c6] leading-relaxed line-clamp-3"><span className="text-[#80868b] mr-1">—</span>{description || "Your meta description will appear here on Google search results."}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider"><Sparkles className="w-4 h-4 text-emerald-400" /><span>Keyword Over-Optimization Check (Title)</span></div>
            {keywordDensity.length === 0 ? (
              <p className="text-[11px] text-white/60">No repeated keywords found — keyword stuffing is not detected.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {keywordDensity.map((k) => (
                  <span key={k.word} className={`px-2 py-0.5 rounded text-[10px] font-mono border ${k.count >= 3 ? "border-rose-500/40 text-rose-300 bg-rose-500/10" : k.count === 2 ? "border-amber-500/40 text-amber-300 bg-amber-500/10" : "border-emerald-500/40 text-emerald-300 bg-emerald-500/10"}`}>
                    &quot;{k.word}&quot; × {k.count}
                  </span>
                ))}
                {keywordDensity.some((k) => k.count >= 3) && <p className="text-[10px] text-amber-300 w-full">Reduce repeats: repeating a keyword 3+ times in the title may trigger spam filters.</p>}
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-white/40 font-bold"><Info className="w-3.5 h-3.5 text-emerald-400" /><span>Best-Practice Guidelines</span></div>
            <ul className="space-y-1.5 text-[11px] text-white/70">
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> 1 unique title &amp; description per page.</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Primary keyword near the front of the title.</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Include a clear call-to-action &amp; differentiator in the description.</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Self-referencing canonical avoids duplicate content.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 rounded-2xl bg-black border border-emerald-500/30 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider"><Wand2 className="w-4 h-4 text-emerald-400" /><span>Optimized HTML Head Block (auto-generated)</span></div>
          <div className="flex items-center gap-2">
            <CopyButton text={buildHead()} label="Copy" />
            <button onClick={downloadHead} className="px-3 py-1.5 bg-white text-black text-xs font-mono font-bold rounded-lg hover:bg-emerald-400 transition-colors flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" /> Download
            </button>
          </div>
        </div>
        <pre className="text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-72 scrollbar-thin leading-relaxed p-3 bg-[#0a0a0a] rounded-lg">{buildHead()}</pre>
      </div>

      {score < 80 && (
        <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-start gap-2 text-[11px] text-amber-200">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>Score is below 80 — apply the suggestions above (ideal 30–60 title chars and 70–160 description chars) to maximize SERP click-through.</span>
        </div>
      )}
    </div>
  );
};
