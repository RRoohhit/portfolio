"use client";
import React, { useState, Suspense, lazy } from "react";
import { SeoToolsHero } from "./components/SeoToolsHero";
import { SITE_URL } from "@/config/site";

// Heavy tool modules are code-split so the default "generators" view stays light.
// recharts (Dashboard) and the AI/review tools load only when their tab is opened.
const TechnicalCodeGenerators = lazy(() =>
  import("./components/TechnicalCodeGenerators").then((m) => ({ default: m.TechnicalCodeGenerators }))
);
const QuickSeoHealthReport = lazy(() =>
  import("./components/QuickSeoHealthReport").then((m) => ({ default: m.QuickSeoHealthReport }))
);
const SerpMetaPreview = lazy(() =>
  import("./components/SerpMetaPreview").then((m) => ({ default: m.SerpMetaPreview }))
);
const JsonLdGenerator = lazy(() =>
  import("./components/JsonLdGenerator").then((m) => ({ default: m.JsonLdGenerator }))
);
const LocalSeoVisibilityModule = lazy(() =>
  import("./components/LocalSeoVisibilityModule").then((m) => ({ default: m.LocalSeoVisibilityModule }))
);
const GoogleBusinessReviewTool = lazy(() =>
  import("./components/GoogleBusinessReviewTool").then((m) => ({ default: m.GoogleBusinessReviewTool }))
);
const SeoDashboard = lazy(() =>
  import("./components/SeoDashboard").then((m) => ({ default: m.SeoDashboard }))
);
const AiSearchOptimizer = lazy(() =>
  import("./components/AiSearchOptimizer").then((m) => ({ default: m.AiSearchOptimizer }))
);
const UrlAnalyzer = lazy(() =>
  import("./components/UrlAnalyzer").then((m) => ({ default: m.UrlAnalyzer }))
);
const OnPageContentAnalyzer = lazy(() =>
  import("./components/OnPageContentAnalyzer").then((m) => ({ default: m.OnPageContentAnalyzer }))
);
const FolderAnalyzer = lazy(() =>
  import("./components/FolderAnalyzer").then((m) => ({ default: m.FolderAnalyzer }))
);
const AllInOneGenerator = lazy(() =>
  import("./components/AllInOneGenerator").then((m) => ({ default: m.AllInOneGenerator }))
);
const MetaTagAnalyzer = lazy(() =>
  import("./components/MetaTagAnalyzer").then((m) => ({ default: m.MetaTagAnalyzer }))
);
const KeywordResearchTool = lazy(() =>
  import("./components/KeywordResearchTool").then((m) => ({ default: m.KeywordResearchTool }))
);
const RedirectChecker = lazy(() =>
  import("./components/RedirectChecker").then((m) => ({ default: m.RedirectChecker }))
);
const KeywordHeatmap = lazy(() =>
  import("./components/KeywordHeatmap").then((m) => ({ default: m.KeywordHeatmap }))
);

import type { ToolsSubTab } from "@/types/seo-tools";

export type { ToolsSubTab };

const ToolLoader: React.FC = () => (
  <div className="flex items-center justify-center py-16" role="status" aria-label="Loading tool">
    <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-emerald-400 animate-spin" />
  </div>
);

export const SeoToolsPage: React.FC = () => {
  const [domain, setDomain] = useState<string>(SITE_URL);
  const [projectPath, setProjectPath] = useState<string>("/src/pages, /blog");
  const [domainError, setDomainError] = useState<boolean>(false);
  const [activeSubTab, setActiveSubTab] = useState<ToolsSubTab>("generators");

  const handleAnalyze = () => {
    if (!domain.trim()) {
      setDomainError(true);
      return;
    }
    setDomainError(false);
  };

  const handleRequireDomain = () => {
    setDomainError(true);
    // Scroll smoothly to top domain input
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* HERO SECTION WITH DOMAIN BINDING & SUB-TAB NAVIGATION */}
      <SeoToolsHero 
        domain={domain}
        setDomain={(d) => {
          setDomain(d);
          if (d.trim()) setDomainError(false);
        }}
        projectPath={projectPath}
        setProjectPath={setProjectPath}
        onAnalyze={handleAnalyze}
        domainError={domainError}
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
      />

      <Suspense fallback={<ToolLoader />}>
        {/* SUB-TAB CONTENT 1: TECHNICAL CODE GENERATORS */}
        {activeSubTab === "generators" && (
          <TechnicalCodeGenerators 
            domain={domain}
            projectPath={projectPath}
            onRequireDomain={handleRequireDomain}
          />
        )}

        {/* SUB-TAB CONTENT 2: QUICK SEO HEALTH REPORT (PDF & HTML SUMMARY) */}
        {activeSubTab === "health-report" && (
          <QuickSeoHealthReport 
            initialDomain={domain}
            onRequireDomain={handleRequireDomain}
          />
        )}

        {/* SUB-TAB CONTENT 3: GOOGLE SERP OPTIMIZATION & JSON-LD SCHEMA GENERATOR */}
        {activeSubTab === "schema-serp" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <SerpMetaPreview />
            <JsonLdGenerator domain={domain} />
          </div>
        )}

        {/* SUB-TAB CONTENT 4: LOCAL SEO VISIBILITY SIMULATOR */}
        {activeSubTab === "local-seo" && (
          <LocalSeoVisibilityModule />
        )}

        {/* SUB-TAB CONTENT: GOOGLE BUSINESS REVIEW EXPORTER & AI INSIGHTS */}
        {activeSubTab === "reviews" && (
          <GoogleBusinessReviewTool />
        )}

        {/* SUB-TAB CONTENT: RANK TRACKING & KEYWORD DIFFICULTY HEATMAP */}
        {activeSubTab === "dashboard" && (
          <SeoDashboard />
        )}

        {/* SUB-TAB CONTENT: AI SEARCH / AEO / GEO OPTIMIZATION */}
        {activeSubTab === "ai-seo" && (
          <AiSearchOptimizer
            domain={domain}
            onRequireDomain={handleRequireDomain}
          />
        )}

        {/* SUB-TAB CONTENT: LIVE URL ANALYZER (fetch & scan any website) */}
        {activeSubTab === "url-analyzer" && (
          <UrlAnalyzer />
        )}

        {/* SUB-TAB CONTENT: ON-PAGE CONTENT ANALYZER (headings, words, links, schema) */}
        {activeSubTab === "on-page" && (
          <OnPageContentAnalyzer />
        )}

        {/* SUB-TAB CONTENT: FOLDER UPLOAD ANALYZER */}
        {activeSubTab === "folder-analyzer" && (
          <FolderAnalyzer domain={domain} />
        )}

        {/* SUB-TAB CONTENT: ALL-IN-ONE SEO DEPLOYMENT KIT */}
        {activeSubTab === "all-in-one" && (
          <AllInOneGenerator
            domain={domain}
            onRequireDomain={handleRequireDomain}
          />
        )}

        {/* SUB-TAB CONTENT: META TAG ANALYZER & OPTIMIZER */}
        {activeSubTab === "meta-tags" && (
          <MetaTagAnalyzer domain={domain} />
        )}

        {/* SUB-TAB CONTENT: KEYWORD RESEARCH & IDEA GENERATOR */}
        {activeSubTab === "keyword-research" && (
          <KeywordResearchTool />
        )}

        {/* SUB-TAB CONTENT: REDIRECT & URL STATUS CHECKER */}
        {activeSubTab === "redirect-check" && (
          <RedirectChecker />
        )}

        {/* SUB-TAB CONTENT: KEYWORD DIFFICULTY HEATMAP */}
        {activeSubTab === "keyword-heatmap" && (
          <KeywordHeatmap />
        )}
      </Suspense>

    </div>
  );
};