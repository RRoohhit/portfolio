"use client";
import React, { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SuccessConfetti } from "@/components/ui/SuccessConfetti";
import { buildZip } from "./TechnicalCodeGenerators";
import {
  FolderOpen,
  FolderUp,
  Loader2,
  FileCode2,
  XCircle,
  AlertTriangle,
  CheckCircle2,
  Download,
  Gauge,
  Info,
  ChevronDown,
  ChevronUp,
  SortAsc,
  SortDesc,
  Trash2,
  Hash
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Types                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

interface IssueItem {
  severity: "critical" | "warning" | "passed";
  title: string;
  detail: string;
  fix: string;
}

interface AnalyzedFile {
  path: string;
  size: number;
  kind: string;
  issues: IssueItem[];
  score: number;
  title: string;
  words: number;
  topKeywords: { word: string; count: number }[];
  images: number;
  altMissing: number;
  h1: number;
}

type SortKey = "score-asc" | "score-desc" | "name-asc" | "name-desc";

interface FolderAnalyzerProps {
  domain: string;
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Constants                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */

const EXT_KIND: Record<string, string> = {
  html: "HTML", htm: "HTML", xhtml: "HTML",
  css: "CSS",
  js: "JS", mjs: "JS",
  json: "JSON",
  txt: "TXT", md: "MD",
  xml: "XML",
};

const STOP_WORDS = new Set([
  "the","a","an","and","or","but","of","to","in","on","for","with","is","are","was","were",
  "be","been","being","at","by","from","as","it","its","this","that","these","those","we",
  "you","your","our","they","their","can","will","not","no","all","more","most","if","then",
  "than","so","such","also","into","about","has","have","had","do","does","did","which",
  "who","whom","when","where","why","how","what","i","he","she","them","his","her","him",
  "there","here","some","any","only","very","just","up","out","off","over","under","again",
  "further","once","should","would","could","may","might","must","www","html",
  "nbsp","amp","quot","gt","lt","home","menu","click","read",
]);

/* ────────────────────────────────────────────────────────────────────────── */
/*  HTML Analysis Engine                                                        */
/* ────────────────────────────────────────────────────────────────────────── */

const stripTags = (html: string): string =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();

const extractTopKeywords = (text: string): { word: string; count: number }[] => {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  const counts: Record<string, number> = {};
  for (const w of words) {
    counts[w] = (counts[w] || 0) + 1;
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word, count]) => ({ word, count }));
};

const analyzeHtml = (content: string, path: string): AnalyzedFile => {
  const issues: IssueItem[] = [];

  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";

  const descMatch =
    content.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)['"]/i) ||
    content.match(/<meta[^>]+content=["']([^"']*)['"'][^>]*name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : "";

  const h1Count = (content.match(/<h1[\s>]/gi) || []).length;
  const imgs = content.match(/<img[\s\S]*?>/gi) || [];
  const imgNoAlt = imgs.filter((img) => !/<img[^>]*\balt=/.test(img)).length;

  const hasViewport  = /name=["']viewport["']/i.test(content);
  const hasCharset   = /charset=/i.test(content);
  const hasLang      = /<html[^>]*\blang=["']/.test(content);
  const hasCanonical = /rel=["']canonical["']/i.test(content);
  const hasSchema    = /type=["']application\/ld\+json["']/i.test(content);
  const hasOg        = /property=["']og:title["']/i.test(content);
  const hasTwitter   = /name=["']twitter:card["']/i.test(content);
  const robotsMatch  = content.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)['"]/i);
  const robotsContent = robotsMatch ? robotsMatch[1].toLowerCase() : "";
  const inlineStyles = (content.match(/style=["']/gi) || []).length;
  
  const plainText = stripTags(content);
  const words = plainText.split(/\s+/).filter(Boolean).length;
  const topKeywords = extractTopKeywords(plainText);

  if (!title)
    issues.push({ severity: "critical", title: "Missing <title>", detail: "No title tag found.", fix: `Add a unique keyword-rich <title> (≤60 chars) to ${path}.` });
  else if (title.length > 60)
    issues.push({ severity: "warning", title: "Title too long", detail: `${title.length} characters.`, fix: "Shorten title to ~60 characters to avoid SERP truncation." });

  if (!description)
    issues.push({ severity: "warning", title: "Missing meta description", detail: "No description meta tag found.", fix: "Add a 140–160 character meta description with the primary keyword." });

  if (h1Count === 0)
    issues.push({ severity: "critical", title: "No H1 heading", detail: "This page has no primary heading.", fix: "Add exactly one H1 describing the page topic." });
  else if (h1Count > 1)
    issues.push({ severity: "warning", title: `${h1Count} H1 headings`, detail: "Multiple H1 tags detected.", fix: "Keep one H1; convert the rest to H2/H3." });

  if (imgs.length > 0 && imgNoAlt > 0)
    issues.push({ severity: "warning", title: `${imgNoAlt}/${imgs.length} images lack alt text`, detail: "Alt text is required for image SEO & accessibility.", fix: 'Write descriptive alt attributes; use alt="" for decorative images.' });

  if (!hasViewport)  issues.push({ severity: "critical", title: "Missing viewport meta",  detail: "Mobile usability will fail.", fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1" />.' });
  if (!hasCharset)   issues.push({ severity: "critical", title: "Missing charset",        detail: "Document encoding not declared.", fix: 'Add <meta charset="utf-8" /> first in <head>.' });
  if (!hasLang)      issues.push({ severity: "warning",  title: "Missing lang attribute", detail: "<html lang> not declared.", fix: 'Set <html lang="en">.' });
  if (!hasCanonical) issues.push({ severity: "warning",  title: "Missing canonical tag",  detail: "Duplicate-content protection absent.", fix: 'Add <link rel="canonical" href="..."> pointing to the final URL.' });
  if (!hasSchema)    issues.push({ severity: "warning",  title: "No JSON-LD structured data", detail: "Rich snippets not possible.", fix: "Add Organization + WebSite JSON-LD (use the Schema generator above)." });
  if (!hasOg)        issues.push({ severity: "warning",  title: "Missing Open Graph tags", detail: "Poor social share previews.", fix: "Add og:title, og:description, og:image (1200×630)." });
  if (!hasTwitter)   issues.push({ severity: "passed",   title: "Twitter card missing",   detail: "Optional but recommended.", fix: "Add twitter:card = summary_large_image." });

  if (robotsContent.includes("noindex")) {
    issues.push({ severity: "critical", title: "Page set to noindex", detail: "Page is blocked from search engine index.", fix: "Remove 'noindex' from robots meta if this page should rank." });
  }

  if (inlineStyles > 12)
    issues.push({ severity: "warning", title: `${inlineStyles} inline styles`, detail: "Inline styles bloat HTML & hurt rendering performance.", fix: "Move styles into external CSS files and use classes." });
  if (words < 200 && path.split("/").pop() === "index.html")
    issues.push({ severity: "warning", title: "Thin homepage content", detail: `Only ~${words} visible words.`, fix: "Expand to 600+ words of unique, helpful content." });

  const penalties =
    issues.filter((i) => i.severity === "critical").length * 18 +
    issues.filter((i) => i.severity === "warning").length * 6;
  const score = Math.max(5, Math.min(99, 100 - penalties));

  return { path, size: content.length, kind: "HTML", issues, score, title, words, topKeywords, images: imgs.length, altMissing: imgNoAlt, h1: h1Count };
};

/* ────────────────────────────────────────────────────────────────────────── */
/*  Helpers                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

function scoreColor(score: number) {
  if (score >= 70) return { ring: "border-emerald-500/40", text: "text-emerald-300", bg: "bg-emerald-500/15" };
  if (score >= 45) return { ring: "border-amber-500/40",   text: "text-amber-300",   bg: "bg-amber-500/15" };
  return               { ring: "border-rose-500/40",   text: "text-rose-300",   bg: "bg-rose-500/15" };
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Component                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */

export const FolderAnalyzer: React.FC<FolderAnalyzerProps> = ({ domain }) => {
  const [scanning, setScanning]     = useState(false);
  const [progress, setProgress]     = useState(0);
  const [total, setTotal]           = useState(0);
  const [results, setResults]       = useState<AnalyzedFile[]>([]);
  const [error, setError]           = useState("");
  const [dragOver, setDragOver]     = useState(false);
  const [showDetail, setShowDetail] = useState<string | null>(null);
  const [sortKey, setSortKey]       = useState<SortKey>("score-asc");
  const [confetti, setConfetti]     = useState<{ show: boolean; message: string; type: "copy" | "download" | "generate" }>({
    show: false, message: "", type: "download",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const scanTokenRef = useRef(0);

  const triggerConfetti = (message: string, type: "copy" | "download" | "generate") => {
    setConfetti({ show: true, message, type });
    setTimeout(() => setConfetti((p) => ({ ...p, show: false })), 2800);
  };

  const handleClearResults = () => {
    scanTokenRef.current += 1;
    setScanning(false);
    setResults([]);
    setError("");
    setShowDetail(null);
    setProgress(0);
  };

  /* ── File Processing ── */
  const processFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const scanToken = scanTokenRef.current + 1;
    scanTokenRef.current = scanToken;

    setScanning(true);
    setError("");
    setResults([]);
    setProgress(0);
    setShowDetail(null);

    const list = Array.from(files)
      .filter((f) => f.size <= 2 * 1024 * 1024)
      .filter((f) => {
        const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
        return Boolean(EXT_KIND[ext]);
      })
      .slice(0, 300);

    if (list.length === 0) {
      setError("No readable HTML/CSS/JS/JSON/TXT files found in selection. Files over 2 MB were skipped.");
      setScanning(false);
      return;
    }

    setTotal(list.length);
    const htmlFiles: AnalyzedFile[] = [];

    for (let i = 0; i < list.length; i++) {
      if (scanTokenRef.current !== scanToken) return;
      const file = list[i];
      const relPath = (file as File & { webkitRelativePath?: string }).webkitRelativePath || file.name;
      const ext = (file.name.split(".").pop() ?? "").toLowerCase();
      try {
        const content = await file.text();
        if (ext === "html" || ext === "htm" || ext === "xhtml") {
          htmlFiles.push(analyzeHtml(content, relPath));
        }
      } catch {
        // skip unreadable binary files silently
      }
      setProgress(i + 1);
      if ((i + 1) % 25 === 0) await new Promise((r) => setTimeout(r, 0));
    }

    if (scanTokenRef.current !== scanToken) return;
    setResults(htmlFiles);
    setScanning(false);

    if (htmlFiles.length === 0) {
      setError("No HTML pages found in the selected folder. Only HTML/HTM/XHTML files can be audited for on-page SEO.");
    }
  }, []);

  /* ── Drag & Drop handlers ── */
  const handleDragOver  = useCallback((e: React.DragEvent) => { e.preventDefault(); setDragOver(true); }, []);
  const handleDragLeave = useCallback((e: React.DragEvent) => { e.preventDefault(); setDragOver(false); }, []);
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    void processFiles(e.dataTransfer.files);
  }, [processFiles]);

  /* ── Computed ── */
  const averageScore    = results.length > 0 ? Math.round(results.reduce((s, r) => s + r.score, 0) / results.length) : 0;
  const totalIssues     = results.reduce((s, r) => s + r.issues.length, 0);
  const totalImages     = results.reduce((s, r) => s + r.images, 0);
  const totalAltMissing = results.reduce((s, r) => s + r.altMissing, 0);
  const progressPct     = total > 0 ? Math.round((progress / total) * 100) : 0;

  const sortedResults = [...results].sort((a, b) => {
    switch (sortKey) {
      case "score-asc":  return a.score - b.score;
      case "score-desc": return b.score - a.score;
      case "name-asc":   return a.path.localeCompare(b.path);
      case "name-desc":  return b.path.localeCompare(a.path);
      default:           return 0;
    }
  });

  /* ── Report Download ── */
  const downloadReport = () => {
    if (results.length === 0) return;
    const cleanDomain = domain.trim() ? domain.trim().replace(/\/$/, "") : "yourwebsite.com";
    const date = new Date().toISOString().slice(0, 10);

    const txtLines = [
      `ON-PAGE SEO AUDIT REPORT — ${cleanDomain}`,
      `Generated: ${date}`,
      `Pages analyzed: ${results.length}`,
      `Overall score: ${averageScore}/100`,
      `Total findings: ${totalIssues}`,
      "",
      ...results.map((r) => [
        `=== ${r.path} ===`,
        `Score: ${r.score}/100 | Words: ${r.words} | Images: ${r.images} (alt missing: ${r.altMissing}) | H1: ${r.h1}`,
        `Title: ${r.title || "(missing)"}`,
        `Top Keywords: ${r.topKeywords.map(k => `${k.word} (${k.count})`).join(", ") || "N/A"}`,
        ...r.issues.map((i) => `  [${i.severity.toUpperCase()}] ${i.title} — ${i.fix}`),
        "",
      ]).flat(),
    ].join("\n");

    const files: { name: string; content: string }[] = [
      { name: "seo-audit/ON-PAGE-SEO-AUDIT-REPORT.txt", content: txtLines },
      ...results.map((r) => ({
        name: `seo-audit/corrected-head/${r.path.replace(/\.(html|htm|xhtml)$/i, "")}---head.html`,
        content: `<!-- Corrected SEO head block for ${r.path} (generated ${date}) -->
<title>${r.title && r.title.length <= 60 ? r.title : `Optimize ${r.title || r.path.split("/").pop()}`} | ${cleanDomain.replace(/^https?:\/\//, "")}</title>
<meta name="description" content="Optimized meta description for this page — 140-160 characters with the primary keyword and a clear value proposition." />
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="canonical" href="${cleanDomain}/${r.path}" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${cleanDomain}/${r.path}" />
<meta property="og:title" content="${r.title || r.path.split("/").pop()}" />
<meta property="og:description" content="Optimized meta description for this page." />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "${r.title || r.path}",
  "url": "${cleanDomain}/${r.path}"
}
</script>`,
      })),
    ];

    const zip = buildZip(files);
    const url = URL.createObjectURL(zip);
    const a   = document.createElement("a");
    a.href     = url;
    a.download = "website-seo-audit-kit.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerConfetti("Full audit report + corrected heads downloaded as ZIP!", "download");
  };

  const avgColor = scoreColor(averageScore);

  return (
    <div className="bg-white/5 border border-white/10 p-5 sm:p-8 rounded-3xl space-y-6 shadow-2xl">

      {/* Header */}
      <div className="border-b border-white/10 pb-5 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest">
          <FolderOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>Website Folder SEO Analyzer</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Upload Your Website Folder — Get a Per-File SEO &amp; Performance Audit
        </h3>
        <p className="text-xs text-white/60 max-w-3xl leading-relaxed font-light">
          Select or drag-and-drop your website folder. Every file is read <strong className="text-white">locally in your browser</strong> — nothing is uploaded to any server. Every HTML page is audited for title, description, headings, keyword density, alt text, structured data, viewport, and content depth.
        </p>
      </div>

      {/* Hidden native folder input */}
      <input
        ref={inputRef}
        type="file"
        multiple
        accept=".html,.htm,.xhtml,.css,.js,.mjs,.json,.txt,.md,.xml"
        className="hidden"
        onChange={(e) => { void processFiles(e.target.files); e.target.value = ""; }}
        {...({ webkitdirectory: "" } as React.InputHTMLAttributes<HTMLInputElement>)}
      />

      {/* Upload / Drag-and-Drop Zone */}
      <button
        onClick={() => !scanning && inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        disabled={scanning}
        aria-label={scanning ? `Scanning folder… ${progress} of ${total} files` : "Click or drag to upload website folder"}
        className={[
          "drag-zone w-full py-10 rounded-2xl flex flex-col items-center justify-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all disabled:cursor-wait",
          dragOver ? "drag-over" : "",
          scanning ? "opacity-70" : "cursor-pointer",
        ].join(" ")}
      >
        {scanning ? (
          <>
            <Loader2 className="w-10 h-10 text-emerald-400 animate-spin" />
            <span className="text-xs font-mono text-white/80 font-bold uppercase tracking-widest">
              Scanning… {progress} / {total} files
            </span>
            <div className="w-64 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="text-[10px] font-mono text-white/40">{progressPct}% complete</span>
          </>
        ) : (
          <>
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
              <FolderUp className="w-7 h-7 text-emerald-400" />
            </div>
            <div className="text-center space-y-1">
              <span className="block text-sm font-bold text-white font-mono uppercase tracking-wider">
                {dragOver ? "Drop your folder here!" : "Click to choose website folder"}
              </span>
              <span className="block text-[11px] font-mono text-white/40">
                Or drag &amp; drop — reads all sub-folders locally (max 300 files · 2 MB each)
              </span>
            </div>
          </>
        )}
      </button>

      {/* Error notice */}
      {error && (
        <div className="p-3.5 bg-amber-500/10 border border-amber-500/25 rounded-xl text-xs font-mono text-amber-200 flex items-start gap-2.5">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <span>{error}</span>
        </div>
      )}

      {/* Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Summary stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Gauge,         label: "Average Score",    value: `${averageScore}/100` },
                { icon: FileCode2,     label: "Pages Audited",    value: String(results.length) },
                { icon: XCircle,       label: "Total Findings",   value: String(totalIssues) },
                { icon: AlertTriangle, label: "Alt Text Missing",  value: totalImages > 0 ? `${totalAltMissing}/${totalImages}` : "0" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className={`p-4 bg-zinc-900 border ${avgColor.ring} rounded-2xl flex flex-col items-center text-center gap-1.5 shadow-lg`}
                  >
                    <Icon className={`w-5 h-5 ${avgColor.text}`} />
                    <div className={`text-2xl font-black font-mono ${avgColor.text}`}>{s.value}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/45 leading-tight">{s.label}</div>
                  </div>
                );
              })}
            </div>

            {/* List header with sort controls & download / clear */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono uppercase text-white/50 font-bold tracking-widest">
                  Sort:
                </span>
                {(
                  [
                    { key: "score-asc",  label: "Score ↑", Icon: SortAsc },
                    { key: "score-desc", label: "Score ↓", Icon: SortDesc },
                    { key: "name-asc",   label: "Name A–Z", Icon: SortAsc },
                    { key: "name-desc",  label: "Name Z–A", Icon: SortDesc },
                  ] as const
                ).map(({ key, label, Icon }) => (
                  <button
                    key={key}
                    onClick={() => setSortKey(key)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all flex items-center gap-1 ${
                      sortKey === key
                        ? "bg-emerald-500/25 text-emerald-300 border border-emerald-500/40"
                        : "bg-white/5 text-white/50 border border-white/10 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={downloadReport}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-400 text-black text-xs font-mono font-bold uppercase rounded-xl hover:bg-emerald-300 transition-all shrink-0 shadow-lg active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download ZIP Report
                </button>

                <button
                  onClick={handleClearResults}
                  className="p-2 bg-white/5 text-white/50 hover:text-rose-400 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
                  title="Clear audit results"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Per-file list */}
            <div className="space-y-2.5">
              {sortedResults.map((r) => {
                const critical = r.issues.filter((i) => i.severity === "critical").length;
                const warnings = r.issues.filter((i) => i.severity === "warning").length;
                const c = scoreColor(r.score);
                const isOpen = showDetail === r.path;

                return (
                  <motion.div
                    key={r.path}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen ? "border-emerald-500/40 bg-zinc-900 shadow-xl" : "border-white/10 bg-zinc-900/60 hover:border-white/20"
                    }`}
                  >
                    {/* Row header */}
                    <button
                      onClick={() => setShowDetail(isOpen ? null : r.path)}
                      className="w-full p-4 flex items-center gap-3 text-left focus:outline-none"
                    >
                      <FileCode2 className="w-5 h-5 text-emerald-400 shrink-0" />

                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-mono font-bold text-white truncate">{r.path}</div>
                        <div className="text-[10px] font-mono text-white/45 mt-0.5 hidden sm:block truncate">
                          {r.words} words · {r.images} img · H1×{r.h1}
                          {r.title ? ` · "${r.title.slice(0, 42)}${r.title.length > 42 ? "…" : ""}"` : ""}
                        </div>
                      </div>

                      {/* Score badge */}
                      <div className={`px-2.5 py-1 rounded-xl font-mono font-black text-sm border shrink-0 ${c.bg} ${c.text} ${c.ring}`}>
                        {r.score}
                      </div>

                      {/* Severity tags */}
                      <div className="hidden md:flex items-center gap-1.5 shrink-0">
                        {critical > 0 && (
                          <span className="px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 text-[9px] font-mono font-bold border border-rose-500/35">
                            {critical} critical
                          </span>
                        )}
                        {warnings > 0 && (
                          <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 text-[9px] font-mono font-bold border border-amber-500/35">
                            {warnings} warning{warnings > 1 ? "s" : ""}
                          </span>
                        )}
                      </div>

                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-white/40 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />
                      )}
                    </button>

                    {/* Mobile severity row */}
                    {(critical > 0 || warnings > 0) && (
                      <div className="px-4 pb-3 flex gap-1.5 md:hidden">
                        {critical > 0 && (
                          <span className="px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 text-[9px] font-mono font-bold border border-rose-500/35">
                            {critical} critical
                          </span>
                        )}
                        {warnings > 0 && (
                          <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 text-[9px] font-mono font-bold border border-amber-500/35">
                            {warnings} warning{warnings > 1 ? "s" : ""}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Expanded issue detail */}
                    {isOpen && (
                      <div className="px-4 pb-4 pt-2 border-t border-white/10 space-y-3">
                        
                        {/* Top Keywords Row */}
                        {r.topKeywords.length > 0 && (
                          <div className="flex items-center gap-2 flex-wrap text-[10px] font-mono bg-black/60 p-2.5 rounded-xl border border-white/5">
                            <span className="text-white/50 uppercase font-bold flex items-center gap-1">
                              <Hash className="w-3 h-3 text-emerald-400" /> Keywords:
                            </span>
                            {r.topKeywords.map((kw) => (
                              <span key={kw.word} className="px-2 py-0.5 bg-white/5 text-emerald-300 rounded border border-white/10 font-bold">
                                {kw.word} ({kw.count})
                              </span>
                            ))}
                          </div>
                        )}

                        {r.issues.length === 0 ? (
                          <div className="flex items-center gap-2 text-xs text-emerald-300 font-mono py-2">
                            <CheckCircle2 className="w-4 h-4" />
                            All core on-page checks passed for this page.
                          </div>
                        ) : (
                          r.issues.map((issue, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-[11px] leading-relaxed">
                              {issue.severity === "critical" ? (
                                <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                              ) : issue.severity === "warning" ? (
                                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                              ) : (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/60 shrink-0 mt-0.5" />
                              )}
                              <div className="min-w-0">
                                <span className="text-white font-mono font-bold">{issue.title}</span>
                                <span className="text-white/55"> — {issue.detail} </span>
                                <span className="text-emerald-300 font-mono">Fix: {issue.fix}</span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SuccessConfetti show={confetti.show} message={confetti.message} type={confetti.type} />
    </div>
  );
};