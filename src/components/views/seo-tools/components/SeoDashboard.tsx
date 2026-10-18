"use client";
import React, { useState } from "react";
import { SEO_METRIC_TRENDS, BACKLINKS_DATA } from "@/data/portfolioData";
import { KeywordHeatmap } from "./KeywordHeatmap";
import { SerpMetaPreview } from "./SerpMetaPreview";
import { JsonLdGenerator } from "./JsonLdGenerator";
import { TrendingUp, Award, Link2, Search, CheckCircle2, ShieldAlert, Cpu, Activity, RefreshCw, Flame } from "lucide-react";

export const SeoDashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<"30d" | "90d" | "all">("all");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="space-y-12">
      
      {/* Dashboard Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Sample SEO Metrics Playground (Demo Data)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SEO Performance Demo — Sample Metrics Explorer
          </h2>
          <p className="text-xs text-white/60 mt-1">
            Interactive demo with sample data to explore traffic, rank and backlink visualizations. Connect Search Console for live client metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-black p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setSelectedPeriod("30d")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedPeriod === "30d" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              30 Days
            </button>
            <button
              onClick={() => setSelectedPeriod("90d")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedPeriod === "90d" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              90 Days
            </button>
            <button
              onClick={() => setSelectedPeriod("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedPeriod === "all" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              All Time Growth
            </button>
          </div>

          <button
            onClick={handleRefresh}
            className="p-2.5 rounded-xl bg-black hover:bg-white/10 text-white border border-white/10 transition-transform active:scale-95"
            title="Refresh Live Metrics"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-emerald-400" : ""}`} />
          </button>
        </div>
      </div>

      {/* Metric High-Level Cards — sample demo data */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-white/60 font-mono">
            <span>Sample Organic Visitors</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">8,400</div>
          <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <span>Sample demo</span>
            <span className="text-white/40">not client data</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-white/60 font-mono">
            <span>Sample Avg. Position</span>
            <Search className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">#12.4</div>
          <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <span>Demo keywords</span>
            <span className="text-white/40">sample set</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-white/60 font-mono">
            <span>Sample Authority Score</span>
            <Award className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">DR 28</div>
          <div className="text-[11px] text-purple-400 font-mono flex items-center gap-1">
            <span>Sample demo</span>
            <span className="text-white/40">illustrative</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-white/60 font-mono">
            <span>Sample Backlink Rows</span>
            <Link2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">86</div>
          <div className="text-[11px] text-blue-400 font-mono flex items-center gap-1">
            <span>Sample table</span>
            <span className="text-white/40">demo data</span>
          </div>
        </div>
      </div>

      {/* KEYWORD DIFFICULTY HEATMAP COMPONENT */}
      <KeywordHeatmap />

      {/* DYNAMIC GOOGLE SERP META PREVIEW COMPONENT */}
      <SerpMetaPreview />

      {/* JSON-LD SCHEMA MARKUP GENERATOR UTILITY */}
      <JsonLdGenerator />

      {/* Traffic & Rank Trends Graphic Visualizer */}
      <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-extrabold text-white">Organic Search Traffic & SERP Trajectory</h3>
            <p className="text-xs text-white/60">Monthly traffic volume mapped against average keyword position improvement.</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-white"></span>
              <span className="text-white/80">Traffic (Visitors)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-emerald-400"></span>
              <span className="text-white/80">SERP Rank (Lower = Better)</span>
            </div>
          </div>
        </div>

        {/* Custom SVG Bar & Trend Chart */}
        <div className="h-64 w-full bg-black/80 rounded-xl border border-white/10 p-4 flex items-end justify-between gap-2 sm:gap-6 relative overflow-hidden">
          {SEO_METRIC_TRENDS.map((item, index) => {
            const heightPercent = (item.organicTraffic / 60000) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                {/* Tooltip on hover */}
                <div className="absolute -top-12 bg-white text-black font-mono text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-20 whitespace-nowrap">
                  {item.date}: {item.organicTraffic.toLocaleString()} visits | SERP #{item.serpPosition}
                </div>

                {/* Bar */}
                <div
                  className="w-full max-w-[48px] bg-gradient-to-t from-white/20 to-white rounded-t-lg transition-all duration-500 group-hover:bg-emerald-400"
                  style={{ height: `${heightPercent}%` }}
                >
                  <div className="w-full h-1 bg-emerald-400 rounded-t-lg"></div>
                </div>

                <span className="text-[10px] font-mono text-white/40 mt-2">{item.date}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Automated Backlink Monitor & Technical Audit Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Backlink Health Table */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Link2 className="w-4 h-4 text-emerald-400" />
              <span>Automated Backlink Health Monitor</span>
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">100% White Hat</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="text-white/40 border-b border-white/10 pb-2">
                  <th className="pb-2">Domain</th>
                  <th className="pb-2">DR</th>
                  <th className="pb-2">Type</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {BACKLINKS_DATA.map((link, idx) => (
                  <tr key={idx} className="hover:bg-white/5">
                    <td className="py-2.5 text-white font-bold">{link.domain}</td>
                    <td className="py-2.5 text-emerald-400">{link.authority}</td>
                    <td className="py-2.5 text-white/60">{link.type}</td>
                    <td className="py-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-black text-white/80 border border-white/10">
                        {link.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical SEO Audit Checklist */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Technical On-Page Audit Checklist</span>
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-black font-bold">Passed 100%</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-black rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white/90 font-medium">Core Web Vitals Pass (LCP 0.6s)</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">PASSED</span>
            </div>

            <div className="p-3 bg-black rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white/90 font-medium">JSON-LD Schema Markup Validated</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">ACTIVE</span>
            </div>

            <div className="p-3 bg-black rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white/90 font-medium">HTTPS / SSL / HSTS Header Enforcement</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">SECURE</span>
            </div>

            <div className="p-3 bg-black rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white/90 font-medium">Sitemap.xml & Robots.txt Indexed</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">100% COVERAGE</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
