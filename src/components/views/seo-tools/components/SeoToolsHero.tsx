"use client";
import React from "react";
import type { ToolsSubTab } from "@/types/seo-tools";
import {
  Globe,
  FolderGit2,
  Code2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Zap,
  ShieldCheck,
  Search,
  FileCode,
  FileText,
  MapPin,
  Bot,
  FolderOpen,
  PackageOpen,
  Hash,
  Lightbulb,
  Route,
  SearchCheck,
  BarChart3,
} from "lucide-react";

interface SeoToolsHeroProps {
  domain: string;
  setDomain: (domain: string) => void;
  projectPath: string;
  setProjectPath: (path: string) => void;
  onAnalyze: () => void;
  domainError: boolean;
  activeSubTab: ToolsSubTab;
  setActiveSubTab: (tab: ToolsSubTab) => void;
}

// Tab definitions with category grouping
const TAB_GROUPS: Array<{
  category: string;
  tabs: Array<{
    id: ToolsSubTab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
    badgeColor?: string;
  }>;
}> = [
  {
    category: "Analyzers",
    tabs: [
      { id: "url-analyzer", label: "URL Analyzer", icon: Globe },
      { id: "on-page", label: "On-Page Content", icon: SearchCheck },
      { id: "folder-analyzer", label: "Folder Audit", icon: FolderOpen },
      { id: "meta-tags", label: "Meta Tags", icon: Hash },
    ],
  },
  {
    category: "Research",
    tabs: [
      { id: "keyword-research", label: "Keyword Research", icon: Lightbulb },
      { id: "keyword-heatmap", label: "KW Heatmap", icon: BarChart3 },
      { id: "redirect-check", label: "Redirect Checker", icon: Route },
      { id: "dashboard", label: "Rank Dashboard", icon: FileCode },
    ],
  },
  {
    category: "Generators",
    tabs: [
      { id: "generators", label: "Code Directives", icon: Code2, badge: "24+", badgeColor: "emerald" },
      { id: "schema-serp", label: "SERP & Schema", icon: Search },
      { id: "all-in-one", label: "All-in-One Kit", icon: PackageOpen, badge: "New", badgeColor: "amber" },
    ],
  },
  {
    category: "AI & Advanced",
    tabs: [
      { id: "ai-seo", label: "AI / AEO / GEO", icon: Bot, badge: "AI", badgeColor: "violet" },
      { id: "health-report", label: "Health Report (PDF)", icon: FileText },
      { id: "local-seo", label: "Local SEO", icon: MapPin },
      { id: "reviews", label: "Review Tool", icon: ShieldCheck },
    ],
  },
];

const BADGE_COLORS: Record<string, string> = {
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  violet: "bg-violet-500/20 text-violet-300 border-violet-500/40",
};

export const SeoToolsHero: React.FC<SeoToolsHeroProps> = ({
  domain,
  setDomain,
  projectPath,
  setProjectPath,
  onAnalyze,
  domainError,
  activeSubTab,
  setActiveSubTab,
}) => {
  return (
    <div className="space-y-0">
      {/* Main Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white/8 via-white/4 to-black border border-white/10 p-5 sm:p-10 rounded-3xl space-y-8 shadow-2xl">
        {/* Glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/4 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Hero text */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/8 border border-white/15 text-white font-mono text-[10px] uppercase tracking-widest shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Developer Technical SEO &amp; Review Suite 2026</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Tools, Code Generators &amp;{" "}
            <span className="text-gradient">Website Analyzers</span>
          </h1>

          <p className="text-sm sm:text-base text-white/65 font-light leading-relaxed max-w-2xl">
            24+ production web crawler directives, sitemaps, PWA workers and JSON-LD markup bound
            to your domain — plus a live URL scanner, folder upload auditor, AI search optimizer
            and an all-in-one deployment kit. Zero database required.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { icon: CheckCircle2, text: "24+ Code Directives" },
              { icon: CheckCircle2, text: "Instant Copy & Download" },
              { icon: CheckCircle2, text: "URL & Folder Analyzer" },
              { icon: CheckCircle2, text: "AI Search Optimizer" },
            ].map((pill) => (
              <span
                key={pill.text}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
              >
                <pill.icon className="w-3 h-3" />
                {pill.text}
              </span>
            ))}
          </div>
        </div>

        {/* Domain & Project Config */}
        <div className="p-4 sm:p-6 bg-black/70 border border-white/12 rounded-2xl space-y-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-white font-bold uppercase tracking-wider">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Step 1: Website Configuration &amp; Domain Binding</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded font-bold flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Auto-injects into all generators
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Domain */}
            <div className="sm:col-span-6 relative">
              <label
                htmlFor="seo-hero-domain"
                className="text-[10px] font-mono uppercase text-white/55 mb-1 block font-bold"
              >
                Target Website Domain <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-white/35 absolute left-3.5 top-3" />
                <input
                  id="seo-hero-domain"
                  name="domain"
                  type="url"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onAnalyze()}
                  placeholder="https://yourwebsite.com"
                  aria-describedby={domainError ? "domain-error" : undefined}
                  className={`w-full bg-black border rounded-xl pl-10 pr-4 py-2.5 text-sm font-mono text-white placeholder-white/25 focus:outline-none transition-all input-glow ${
                    domainError
                      ? "border-rose-500 ring-1 ring-rose-500/40 bg-rose-500/8"
                      : "border-white/15 focus:border-emerald-400"
                  }`}
                />
              </div>
              {domainError && (
                <p
                  id="domain-error"
                  className="text-[10px] font-mono text-rose-400 mt-1 flex items-center gap-1"
                  role="alert"
                >
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  Please enter a valid website domain before generating code.
                </p>
              )}
            </div>

            {/* Project Path */}
            <div className="sm:col-span-4 relative">
              <label
                htmlFor="seo-hero-project-path"
                className="text-[10px] font-mono uppercase text-white/55 mb-1 block font-bold"
              >
                Project Routes / Folder Path
              </label>
              <div className="relative">
                <FolderGit2 className="w-4 h-4 text-white/35 absolute left-3.5 top-3" />
                <input
                  id="seo-hero-project-path"
                  name="projectPath"
                  type="text"
                  value={projectPath}
                  onChange={(e) => setProjectPath(e.target.value)}
                  placeholder="/src/pages, /app, /blog"
                  className="w-full bg-black border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm font-mono text-white placeholder-white/25 focus:outline-none focus:border-emerald-400 transition-all input-glow"
                />
              </div>
            </div>

            {/* Analyze Button */}
            <div className="sm:col-span-2 flex items-end">
              <button
                onClick={onAnalyze}
                className="w-full py-2.5 px-4 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5 shadow-lg active:scale-95 group"
              >
                <Zap className="w-4 h-4 fill-black transition-transform group-hover:scale-110" />
                Analyze
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation — categorized */}
        <div className="space-y-3 border-t border-white/8 pt-6">
          <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest font-bold">
            <BarChart3 className="w-3 h-3" />
            Select a Tool
          </div>

          <div className="space-y-3">
            {TAB_GROUPS.map((group) => (
              <div key={group.category} className="space-y-2">
                <div className="text-[9px] font-mono uppercase tracking-widest text-white/25 font-bold pl-0.5 sm:hidden">
                  {group.category}
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/25 font-bold shrink-0">
                    {group.category}
                  </span>
                  <div className="h-px bg-white/8 flex-1" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tabs.map((tab) => {
                    const isActive = activeSubTab === tab.id;
                    const IconComp = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveSubTab(tab.id)}
                        aria-pressed={isActive}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          isActive
                            ? "bg-white text-black shadow-lg shadow-white/10 scale-[1.02]"
                            : "bg-white/5 text-white/65 hover:text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.01]"
                        }`}
                      >
                        <IconComp
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isActive ? "text-black" : "text-emerald-400"
                          }`}
                        />
                        <span>{tab.label}</span>
                        {tab.badge && (
                          <span
                            className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-black border leading-none ${
                              isActive
                                ? "bg-black/15 text-black border-black/20"
                                : tab.badgeColor
                                ? BADGE_COLORS[tab.badgeColor]
                                : "bg-white/10 text-white/60 border-white/20"
                            }`}
                          >
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
