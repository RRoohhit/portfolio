"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Download, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Copy, 
  Check, 
  Printer, 
  RefreshCw,
  Layers
} from "lucide-react";
import { SITE_URL } from "@/config/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface QuickSeoHealthReportProps {
  initialDomain?: string;
  onRequireDomain?: () => void;
}

export interface AuditIssue {
  id: string;
  category: "Core Web Vitals" | "Crawler Directives" | "On-Page Meta" | "Schema Markup" | "Security & Mobile";
  title: string;
  status: "pass" | "warning" | "fail";
  impact: "High" | "Medium" | "Low";
  currentValue: string;
  recommendedFix: string;
  description: string;
}

interface AuditFindingLike {
  type: "critical" | "warning" | "passed";
  title: string;
  description: string;
  fix: string;
}

function categorizeFinding(title: string): AuditIssue["category"] {
  if (/lcp|inp|cls|fid|vital|page weight|performance/i.test(title)) return "Core Web Vitals";
  if (/schema|structured data|json-ld/i.test(title)) return "Schema Markup";
  if (/robots|noindex|nofollow|indexing/i.test(title)) return "Crawler Directives";
  if (/viewport|charset|https|ssl|frame|security|mobile/i.test(title)) return "Security & Mobile";
  return "On-Page Meta";
}

function buildIssuesFromAudit(audit: {
  findings?: AuditFindingLike[];
  metrics?: { lcp?: string; cls?: string; ttfb?: string };
}): AuditIssue[] {
  const issues: AuditIssue[] = [];

  for (const finding of audit.findings || []) {
    const status: AuditIssue["status"] =
      finding.type === "passed" ? "pass" : finding.type === "warning" ? "warning" : "fail";
    const impact: AuditIssue["impact"] =
      finding.type === "critical" ? "High" : finding.type === "warning" ? "Medium" : "Low";
    issues.push({
      id: `audit-finding-${issues.length}`,
      category: categorizeFinding(finding.title),
      title: finding.title,
      status,
      impact,
      currentValue: finding.description,
      recommendedFix: finding.fix,
      description: finding.description,
    });
  }

  const metrics = audit.metrics || {};
  if (metrics.lcp) {
    const value = parseFloat(metrics.lcp);
    issues.push({
      id: "audit-metric-lcp",
      category: "Core Web Vitals",
      title: "Largest Contentful Paint (LCP)",
      status: Number.isFinite(value) && value <= 2.5 ? "pass" : "warning",
      impact: "High",
      currentValue: `${metrics.lcp} (measured estimate)`,
      recommendedFix: "Optimize render-blocking hero assets with dynamic import splitting & webp/avif compression.",
      description: "Google requires LCP under 2.5s for optimal SERP ranking and mobile user experience.",
    });
  }
  if (metrics.cls) {
    const value = parseFloat(metrics.cls);
    issues.push({
      id: "audit-metric-cls",
      category: "Core Web Vitals",
      title: "Cumulative Layout Shift (CLS)",
      status: Number.isFinite(value) && value <= 0.1 ? "pass" : "warning",
      impact: "High",
      currentValue: `${metrics.cls} (measured estimate)`,
      recommendedFix: "Reserve space for images and set explicit width/height to prevent layout shift.",
      description: "CLS measures visual stability during page load.",
    });
  }
  if (metrics.ttfb) {
    const value = parseInt(metrics.ttfb, 10);
    issues.push({
      id: "audit-metric-ttfb",
      category: "Core Web Vitals",
      title: "Time to First Byte (TTFB)",
      status: Number.isFinite(value) && value <= 800 ? "pass" : "warning",
      impact: "Medium",
      currentValue: `${metrics.ttfb} (measured estimate)`,
      recommendedFix: "Enable SSR/static rendering and Brotli compression to minimize server response time.",
      description: "TTFB measures the time before the server sends the first byte of the response.",
    });
  }

  return issues;
}

export const QuickSeoHealthReport: React.FC<QuickSeoHealthReportProps> = ({
  initialDomain = SITE_URL,
  onRequireDomain
}) => {
  const [urlInput, setUrlInput] = useState<string>(initialDomain);
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [analyzedFor, setAnalyzedFor] = useState<string | null>(null);
  const [realIssues, setRealIssues] = useState<AuditIssue[] | null>(null);
  const [scanError, setScanError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "fail" | "warning" | "pass">("all");
  const { copied, copy } = useCopyToClipboard();

  const cleanDomain = urlInput.trim() ? urlInput.trim().replace(/\/$/, "") : "https://yourwebsite.com";

  // Recommended checklist shown until a real scan replaces it with live results.
  const getTemplateIssues = (): AuditIssue[] => {
    return [
      {
        id: "lcp",
        category: "Core Web Vitals",
        title: "Largest Contentful Paint (LCP)",
        status: "warning",
        impact: "High",
        currentValue: "2.8s (Needs Improvement)",
        recommendedFix: "Optimize render-blocking hero assets with dynamic import splitting & webp/avif compression.",
        description: "Google requires LCP under 2.5s for optimal SERP ranking and mobile user experience."
      },
      {
        id: "inp",
        category: "Core Web Vitals",
        title: "Interaction to Next Paint (INP)",
        status: "pass",
        impact: "High",
        currentValue: "110ms (Good)",
        recommendedFix: "Maintain main-thread execution under 150ms during heavy client interactions.",
        description: "INP measures overall page responsiveness during user clicks and touch interactions."
      },
      {
        id: "sitemap",
        category: "Crawler Directives",
        title: "W3C XML Sitemap Declaration",
        status: "pass",
        impact: "High",
        currentValue: "sitemap.xml verified in robots.txt",
        recommendedFix: "Auto-generate sitemap timestamps on every new blog or page publish.",
        description: "Sitemaps guide Googlebot to newly created routes and updated canonical content."
      },
      {
        id: "llms-txt",
        category: "Crawler Directives",
        title: "LLMs.txt AI Directive File",
        status: "fail",
        impact: "Medium",
        currentValue: "404 Not Found",
        recommendedFix: "Generate standard /llms.txt file to guide AI crawlers (Gemini, ChatGPT, Perplexity).",
        description: "Standard directive file used by modern generative search engines to index context."
      },
      {
        id: "canonical",
        category: "On-Page Meta",
        title: "Self-Referencing Canonical Tags",
        status: "pass",
        impact: "High",
        currentValue: "100% Matching target domain",
        recommendedFix: "Ensure all query parameter URLs resolve to primary self-referencing canonical tag.",
        description: "Prevents duplicate content penalties across tracking URLs and session parameters."
      },
      {
        id: "og-meta",
        category: "On-Page Meta",
        title: "Open Graph & Twitter Cards",
        status: "warning",
        impact: "Medium",
        currentValue: "Missing og:image:alt tag",
        recommendedFix: "Add high-resolution 1200x630px og:image with descriptive alt accessibility text.",
        description: "Rich social meta tags boost click-through rates across LinkedIn, X, and WhatsApp links."
      },
      {
        id: "jsonld",
        category: "Schema Markup",
        title: "JSON-LD Rich Snippet Schema",
        status: "pass",
        impact: "High",
        currentValue: "Organization & Person Schema Present",
        recommendedFix: "Add Article & FAQPage schema markup to key technical blog posts.",
        description: "Structured data enables Google Rich Snippets, Knowledge Graph panels, and zero-click answer boxes."
      },
      {
        id: "ssl",
        category: "Security & Mobile",
        title: "HTTPS SSL & Security Headers",
        status: "pass",
        impact: "High",
        currentValue: "TLS 1.3 Active with HSTS",
        recommendedFix: "Enforce strict HTTP Strict Transport Security (HSTS) with 1-year max-age.",
        description: "HTTPS is a baseline ranking signal and guards user data integrity."
      },
      {
        id: "viewport",
        category: "Security & Mobile",
        title: "Mobile Viewport Responsiveness",
        status: "pass",
        impact: "High",
        currentValue: "Responsive Viewport Meta Tag Verified",
        recommendedFix: "Keep minimum touch target sizes at 44px for smooth mobile navigation.",
        description: "Google utilizes mobile-first indexing for all web domain SERP placements."
      }
    ];
  };

  const auditIssues = realIssues ?? getTemplateIssues();

  const filteredIssues = auditIssues.filter((item) => {
    if (activeFilter === "all") return true;
    return item.status === activeFilter;
  });

  const passCount = auditIssues.filter((i) => i.status === "pass").length;
  const warningCount = auditIssues.filter((i) => i.status === "warning").length;
  const failCount = auditIssues.filter((i) => i.status === "fail").length;
  const healthScore = Math.round((passCount / auditIssues.length) * 100);
  const healthGrade =
    healthScore >= 90 ? "A" : healthScore >= 80 ? "B" : healthScore >= 70 ? "C" : healthScore >= 50 ? "D" : "F";

  const handleRunAnalysis = async () => {
    const target = urlInput.trim();
    if (!target) {
      if (onRequireDomain) onRequireDomain();
      return;
    }
    setAnalyzing(true);
    setScanError(null);
    try {
      const res = await fetch("/api/seo/audit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: target }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setScanError(data.error || "Audit failed. Check the URL and try again.");
        return;
      }
      setRealIssues(buildIssuesFromAudit(data.audit));
      setAnalyzedFor(target);
    } catch {
      setScanError("Network error while running the health scan. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const generateReportHtml = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Quick SEO Health Report - ${cleanDomain}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #09090b; color: #f4f4f5; margin: 0; padding: 40px; }
    .card { background: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 24px; margin-bottom: 20px; }
    h1 { color: #ffffff; font-size: 24px; margin-top: 0; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
    .badge-pass { background: #065f46; color: #34d399; }
    .badge-warning { background: #78350f; color: #fbbf24; }
    .badge-fail { background: #831843; color: #f43f5e; }
    .score-box { font-size: 48px; font-weight: 900; color: #34d399; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { text-align: left; padding: 12px; border-bottom: 1px solid #27272a; font-size: 13px; }
    th { color: #a1a1aa; font-weight: 600; text-transform: uppercase; font-size: 11px; }
    .footer { margin-top: 40px; text-align: center; color: #71717a; font-size: 12px; border-top: 1px solid #27272a; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="card">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <span class="badge badge-pass">Official SEO Audit Summary</span>
        <h1 style="margin-top:8px;">Quick SEO Health Report</h1>
        <p style="color:#a1a1aa; margin:0;">Target Website: <strong>${cleanDomain}</strong> • Generated on ${new Date().toLocaleDateString()}</p>
      </div>
      <div style="text-align:right;">
        <div class="score-box">${healthScore}%</div>
        <span style="color:#a1a1aa; font-size:12px;">Health Rating: Grade ${healthGrade}</span>
      </div>
    </div>

    <div class="grid">
      <div style="background:#09090b; padding:16px; border-radius:8px;">
        <div style="color:#34d399; font-weight:bold; font-size:18px;">${passCount} Passed Checks</div>
        <div style="color:#71717a; font-size:12px;">Fully compliant technical factors</div>
      </div>
      <div style="background:#09090b; padding:16px; border-radius:8px;">
        <div style="color:#fbbf24; font-weight:bold; font-size:18px;">${warningCount} Warnings</div>
        <div style="color:#71717a; font-size:12px;">Performance & social metadata gaps</div>
      </div>
      <div style="background:#09090b; padding:16px; border-radius:8px;">
        <div style="color:#f43f5e; font-weight:bold; font-size:18px;">${failCount} Critical Fixes</div>
        <div style="color:#71717a; font-size:12px;">Immediate directive file needed</div>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>Detailed Audit Findings & Actionable Solutions</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Check Name</th>
          <th>Status</th>
          <th>Current Value</th>
          <th>Recommended Fix</th>
        </tr>
      </thead>
      <tbody>
        ${auditIssues
          .map(
            (issue) => `
          <tr>
            <td style="color:#a1a1aa;">${issue.category}</td>
            <td style="font-weight:bold; color:#ffffff;">${issue.title}</td>
            <td><span class="badge badge-${issue.status}">${issue.status}</span></td>
            <td style="color:#d4d4d8;">${issue.currentValue}</td>
            <td style="color:#34d399;">${issue.recommendedFix}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  </div>

  <div class="footer">
    Report generated by <strong>Rohit Gupta Technical SEO Suite</strong> • No database required.
  </div>
</body>
</html>`;
  };

  const handleDownloadHtmlPdf = () => {
    const htmlContent = generateReportHtml();
    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `SEO-Health-Report-${cleanDomain.replace(/https?:\/\//, "").replace(/[^a-z0-9]/gi, "-")}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintPdf = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(generateReportHtml());
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  const handleCopyMarkdownReport = () => {
    const md = `# Quick SEO Health Report for ${cleanDomain}
Generated: ${new Date().toLocaleDateString()}
Health Score: ${healthScore}%

## Summary Metrics
- Passed Checks: ${passCount}
- Warnings: ${warningCount}
- Critical Fixes: ${failCount}

## Audit Items Breakdown
${auditIssues
  .map(
    (item) => `
### [${item.status.toUpperCase()}] ${item.title} (${item.category})
- Current Status: ${item.currentValue}
- Impact Level: ${item.impact}
- Recommendation: ${item.recommendedFix}
`
  )
  .join("\n")}

Report provided by Rohit Gupta SEO Tools.
`;
    copy(md);
  };

  return (
    <div className="bg-black/90 border border-white/10 rounded-3xl p-5 sm:p-8 space-y-8 shadow-2xl">
      
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest mb-2">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Instant Health Audit & PDF Summary Generator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Quick SEO Health Report Generator
          </h2>
          <p className="text-xs text-white/60 mt-1 max-w-xl font-light leading-relaxed">
            Input any target website URL to generate an executive SEO health audit report summarizing Core Web Vitals, crawler directives, social metadata, and structured schemas with instant downloadable reports.
          </p>
        </div>

        {/* Action Buttons for Download & Print */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handleDownloadHtmlPdf}
            className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Report</span>
          </button>

          <button
            onClick={handlePrintPdf}
            className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print / PDF</span>
          </button>

          <button
            onClick={handleCopyMarkdownReport}
            className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied!" : "Copy Summary"}</span>
          </button>
        </div>
      </div>

      {/* URL Input & Analysis Bar */}
      <div className="p-4 sm:p-5 bg-black border border-white/15 rounded-2xl space-y-3 shadow-xl">
        <label htmlFor="health-report-url-input" className="text-[10px] font-mono text-white/60 uppercase font-bold tracking-wider block">
          Website URL to Analyze for Health Report
        </label>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Globe className="w-4 h-4 text-white/40 absolute left-3.5 top-3" />
            <input
              id="health-report-url-input"
              name="url"
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="w-full bg-zinc-950 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-all input-glow"
            />
          </div>

          <button
            onClick={handleRunAnalysis}
            disabled={analyzing}
            className="w-full sm:w-auto px-6 py-2.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg active:scale-95"
          >
            {analyzing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-black" />
                <span>Scanning Website...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Run SEO Health Scan</span>
              </>
            )}
          </button>
        </div>
      </div>

      {scanError && (
        <div className="p-3 bg-rose-500/15 border border-rose-500/30 rounded-xl text-xs font-mono text-rose-300 flex items-center gap-2">
          <XCircle className="w-4 h-4 shrink-0" />
          {scanError}
        </div>
      )}

      {/* HEALTH SCORE DASHBOARD SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 sm:p-6 bg-black/80 border border-white/10 rounded-2xl shadow-inner">
        
        {/* Main Score Circle */}
        <div className="md:col-span-4 flex flex-col justify-center items-center text-center p-4 border-b md:border-b-0 md:border-r border-white/10 space-y-2">
          <span className="text-[10px] font-mono uppercase text-white/50 tracking-widest font-bold">
            Overall SEO Health Score
          </span>
          
          <div className="relative flex items-center justify-center w-28 h-28 rounded-full border-4 border-emerald-500/30 bg-emerald-500/10 shadow-2xl">
            <span className="text-3xl font-black font-mono text-emerald-400">
              {healthScore}%
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Grade {healthGrade} • High Indexability</span>
          </div>

          <p className="text-[11px] font-mono text-white/40 truncate max-w-[200px]">
            Target: <strong className="text-white">{cleanDomain}</strong>
          </p>
        </div>

        {/* Audit Metrics Grid - Responsive 1 to 3 cols */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3 my-auto">
          
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase">Passed Checks</span>
            </div>
            <div className="text-2xl font-black font-mono text-white">{passCount}</div>
            <p className="text-[10px] font-mono text-white/50">Core Web Vitals & SSL compliant</p>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl space-y-1">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase">Warnings</span>
            </div>
            <div className="text-2xl font-black font-mono text-white">{warningCount}</div>
            <p className="text-[10px] font-mono text-white/50">Social metadata & LCP bottlenecks</p>
          </div>

          <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl space-y-1">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-mono font-bold text-rose-300 uppercase">Critical Fixes</span>
            </div>
            <div className="text-2xl font-black font-mono text-white">{failCount}</div>
            <p className="text-[10px] font-mono text-white/50">Missing LLMs.txt AI directive</p>
          </div>

        </div>

      </div>

      {/* FILTER & AUDIT FINDINGS TABLE */}
      <div className="space-y-4">
        
        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {realIssues ? "Live Audit Findings" : "Common Audit Issues & Fixes"}
            </span>
          </div>
          {analyzedFor && realIssues && (
            <span className="hidden sm:block text-[10px] font-mono text-white/40 truncate max-w-[260px]">
              Results for: <strong className="text-emerald-400">{analyzedFor}</strong>
            </span>
          )}

          <div className="flex items-center gap-1.5 overflow-x-auto">
            {(["all", "fail", "warning", "pass"] as const).map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase font-bold tracking-wider transition-all ${
                    isActive
                      ? "bg-white text-black shadow"
                      : "bg-black text-white/60 border border-white/10 hover:text-white"
                  }`}
                >
                  {filter === "all" ? "All Issues" : filter === "fail" ? "Critical" : filter === "warning" ? "Warnings" : "Passed"}
                </button>
              );
            })}
          </div>
        </div>

        {!realIssues && (
          <p className="text-[10px] font-mono text-white/40">
            Showing a recommended audit checklist. Run a scan above to analyze the target URL and replace these with live findings.
          </p>
        )}

        {/* Issues List Cards */}
        <div className="space-y-3">
          <AnimatePresence>
            {filteredIssues.map((issue) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="p-4 bg-black border border-white/10 rounded-2xl space-y-2 hover:border-white/20 transition-all shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {issue.status === "pass" && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    {issue.status === "warning" && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />}
                    {issue.status === "fail" && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}

                    <span className="text-xs font-mono font-bold text-white tracking-tight">
                      {issue.title}
                    </span>

                    <span className="px-2 py-0.5 rounded text-[9px] font-mono text-white/50 bg-white/5 border border-white/10 uppercase">
                      {issue.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase ${
                      issue.status === "pass" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" :
                      issue.status === "warning" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" :
                      "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                    }`}>
                      {issue.status}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">Impact: {issue.impact}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono border-t border-white/5">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-white/40 uppercase block">Current Audit Diagnostic</span>
                    <p className="text-white/80 font-light">{issue.currentValue}</p>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] text-emerald-400 uppercase font-bold block">Recommended Optimization Solution</span>
                    <p className="text-emerald-300 font-light">{issue.recommendedFix}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
};
