"use client";

import React, { useState } from "react";
import {
  Globe,
  Loader2,
  ArrowRight,
  Repeat,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Copy,
  Check,
  Link2,
  Route,
  ShieldCheck,
  Code2,
  FileSpreadsheet,
  Download,
  Info,
} from "lucide-react";
import { CopyButton } from "./ui/CopyButton";

interface RedirectHop {
  hop: number;
  url: string;
  status: number;
  location: string;
  contentType: string;
  isRedirect: boolean;
}

interface CheckResult {
  requestedUrl: string;
  finalUrl: string;
  chain: RedirectHop[];
  stopped?: string;
}

const statusInfo = (status: number) => {
  if (status >= 200 && status < 300)
    return { label: `${status} OK`, cls: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40", icon: CheckCircle2, color: "text-emerald-400" };
  if (status >= 300 && status < 400)
    return { label: `${status} Redirect`, cls: "bg-amber-500/20 text-amber-300 border-amber-500/40", icon: Repeat, color: "text-amber-400" };
  if (status >= 400 && status < 500)
    return { label: `${status} Client Error`, cls: "bg-rose-500/20 text-rose-300 border-rose-500/40", icon: XCircle, color: "text-rose-400" };
  if (status >= 500)
    return { label: `${status} Server Error`, cls: "bg-rose-500/20 text-rose-300 border-rose-500/40", icon: XCircle, color: "text-rose-400" };
  return { label: `${status}`, cls: "bg-white/10 text-white/70 border-white/20", icon: Globe, color: "text-white/60" };
};

export const RedirectChecker: React.FC = () => {
  const [url, setUrl] = useState("https://example.com");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [ruleType, setRuleType] = useState<"nextjs" | "nginx" | "htaccess">("nextjs");

  const run = async () => {
    const trimmed = url.trim();
    if (!trimmed) {
      setError("Please enter a URL to check.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/seo/redirect-check", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Check failed. Please try again.");
        return;
      }
      setResult(data);
    } catch {
      setError("Network error while checking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const redirectHops = result?.chain.filter((h) => h.isRedirect).length ?? 0;
  const finalHop = result?.chain[result.chain.length - 1];

  const recommendations = (() => {
    if (!result) return [] as string[];
    const recs: string[] = [];
    if (redirectHops === 0)
      recs.push("No redirects found — this URL resolves directly (200 OK). Optimal for crawl budget & speed.");
    if (redirectHops >= 3)
      recs.push(`${redirectHops} redirect hops detected! Long redirect chains waste crawl budget and add 300ms+ latency per hop. Consolidate to a direct 301.`);
    if (result.chain.some((h) => /^http:\/\//.test(h.url)))
      recs.push("Insecure HTTP protocol detected — set up permanent 301 redirect to HTTPS with HSTS headers.");
    if (result.chain.some((h) => h.isRedirect && !h.location))
      recs.push("Empty Location header found on a redirect — browsers treat this as an infinite loop. Fix the server rule.");
    if (finalHop && finalHop.status >= 400)
      recs.push(`Final destination status is HTTP ${finalHop.status} (Error) — canonical link is broken. Update internal links before publishing.`);
    return recs;
  })();

  // Generate server configuration redirect code snippet
  const generateServerConfigCode = () => {
    if (!result) return "";
    const sourcePath = new URL(result.requestedUrl).pathname || "/old-path";
    const destPath = result.finalUrl;

    if (ruleType === "nextjs") {
      return `// next.config.ts Redirect Rule
async redirects() {
  return [
    {
      source: '${sourcePath}',
      destination: '${destPath}',
      permanent: true, // 301 Permanent Redirect
    },
  ];
}`;
    }

    if (ruleType === "nginx") {
      return `# Nginx 301 Permanent Redirect Rule
location = ${sourcePath} {
    return 301 ${destPath};
}`;
    }

    return `# Apache .htaccess 301 Redirect Rule
Redirect 301 ${sourcePath} ${destPath}`;
  };

  const exportCsv = () => {
    if (!result) return;
    const rows = [
      ["Hop", "URL", "Status Code", "Location Header", "Content Type"],
      ...result.chain.map((h) => [
        String(h.hop),
        h.url,
        String(h.status),
        h.location || "N/A",
        h.contentType || "N/A",
      ]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `redirect-chain-${new URL(result.requestedUrl).hostname}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-1.5">
          <Route className="w-3.5 h-3.5 text-emerald-400" />
          <span>Redirect Chain &amp; HTTP Status Tracer</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Trace Every Redirect Hop &amp; Inspect HTTP Headers</h3>
        <p className="text-xs text-white/60">Enter any URL to follow its full redirect chain (301, 302, protocol switches), detect redirect loops, and generate server rules.</p>
      </div>

      <div className="p-4 sm:p-5 bg-black border border-white/15 rounded-2xl space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") void run();
              }}
              placeholder="https://example.com/old-page"
              className="w-full pl-9 pr-3 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/60 input-glow"
            />
          </div>
          <button
            onClick={() => void run()}
            disabled={loading}
            className="px-5 py-2.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Link2 className="w-4 h-4" />}
            {loading ? "Checking…" : "Trace Redirects"}
          </button>
        </div>
        {error && <p className="text-xs text-rose-400 font-mono">{error}</p>}
      </div>

      {result && (
        <div className="space-y-5">
          
          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 bg-black rounded-xl border border-white/10">
              <div className="text-[9px] font-mono uppercase text-white/40 font-bold mb-0.5">Redirect Hops</div>
              <div className={`text-xl font-black ${redirectHops >= 3 ? "text-rose-400" : redirectHops > 0 ? "text-amber-400" : "text-emerald-400"}`}>
                {redirectHops} {redirectHops === 1 ? "hop" : "hops"}
              </div>
            </div>
            <div className="p-3.5 bg-black rounded-xl border border-white/10">
              <div className="text-[9px] font-mono uppercase text-white/40 font-bold mb-0.5">Final Status</div>
              <div className={`text-xl font-black ${finalHop && finalHop.status >= 400 ? "text-rose-400" : "text-emerald-400"}`}>
                {finalHop?.status}
              </div>
            </div>
            <div className="p-3.5 bg-black rounded-xl border border-white/10 col-span-2 text-left">
              <div className="text-[9px] font-mono uppercase text-white/40 font-bold mb-0.5">Final Resolved Destination</div>
              <div className="text-xs font-bold text-emerald-300 font-mono truncate">{result.finalUrl}</div>
            </div>
          </div>

          {/* Hop Chain Listing */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-white/50 font-bold tracking-wider">
                Redirect Hop Trace ({result.chain.length} steps)
              </span>
              <button
                onClick={exportCsv}
                className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg text-[10px] font-mono font-bold hover:bg-emerald-500/30 transition-colors flex items-center gap-1.5"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Export Chain CSV
              </button>
            </div>

            {result.chain.map((hop, idx) => {
              const info = statusInfo(hop.status);
              const Icon = info.icon;
              return (
                <div key={idx} className="p-4 bg-black border border-white/10 rounded-xl space-y-2 hover:border-emerald-500/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px] font-mono font-bold">
                      Hop {hop.hop}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${info.cls}`}>
                      <Icon className={`w-3 h-3 inline mr-1 ${info.color}`} />
                      {info.label}
                    </span>
                    {hop.isRedirect && hop.location && (
                      <span className="text-[10px] font-mono text-amber-300 truncate max-w-md">
                        → Location: {hop.location}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-white/90 break-all">{hop.url}</p>
                  {hop.contentType && (
                    <div className="text-[10px] font-mono text-white/40 pt-1 border-t border-white/5">
                      Content-Type: {hop.contentType}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Server Config Rule Generator Box */}
          <div className="p-4 rounded-2xl bg-black border border-emerald-500/30 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-white">
                <Code2 className="w-4 h-4 text-emerald-400" />
                Generate Direct 301 Server Redirect Code
              </div>
              <div className="flex items-center gap-2">
                {(["nextjs", "nginx", "htaccess"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setRuleType(t)}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase ${
                      ruleType === t ? "bg-white text-black" : "bg-white/5 text-white/60 hover:text-white"
                    }`}
                  >
                    {t === "nextjs" ? "Next.js" : t === "nginx" ? "Nginx" : ".htaccess"}
                  </button>
                ))}
                <CopyButton text={generateServerConfigCode()} label="Copy Code" />
              </div>
            </div>
            <pre className="text-[11px] font-mono text-emerald-300 bg-zinc-950 p-3 rounded-lg border border-white/5 overflow-x-auto whitespace-pre scrollbar-thin">
              {generateServerConfigCode()}
            </pre>
          </div>

          {/* Recommendations Box */}
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span>Crawl Budget &amp; SEO Recommendations</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-white/75 font-mono">
              {recommendations.map((r, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};
