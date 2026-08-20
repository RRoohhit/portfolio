import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Target, BarChart3 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Google Ads Management Services | Rohit Gupta",
  description:
    "Google Ads management by Rohit Gupta: Search campaigns, Performance Max, ad copy, conversion tracking, and high ROI PPC optimization.",
  path: "/services/google-ads/",
  keywords: [
    "Google Ads Management",
    "Google Ads Expert India",
    "PPC Management India",
    "Performance Max",
    "Google Search Ads",
    "Google Ads Consultant",
    "Quality Score Optimization",
    "Rohit Gupta Google Ads",
    "Conversion Tracking Setup",
  ],
});

const WHATS_INCLUDED = [
  { title: "Google Ads Account Audit", desc: "Complete audit of your existing account: campaign structure, Quality Scores, wasted spend, keyword overlap, negative keyword gaps, and conversion tracking accuracy." },
  { title: "Keyword Research & Planning", desc: "In-depth keyword research using Google Keyword Planner, search query data, and competitor analysis to identify the highest-intent, best-ROI search terms for your budget." },
  { title: "Campaign Structure & Ad Groups", desc: "Building tightly-themed ad groups with clear keyword-to-ad-to-landing-page relevance chains that improve Quality Score and lower your cost-per-click." },
  { title: "Ad Copy Creation", desc: "Writing compelling responsive search ads (RSAs) and testing multiple headline/description combinations to improve CTR and conversion rates over time." },
  { title: "Negative Keyword Management", desc: "Building and continuously refining negative keyword lists to eliminate irrelevant searches and reduce wasted spend — one of the highest-ROI optimizations in Google Ads." },
  { title: "Performance Max Campaigns", desc: "Setting up and optimizing Performance Max campaigns with proper asset groups, audience signals, and conversion goals to maximize reach while maintaining profitability." },
  { title: "Landing Page Alignment", desc: "Reviewing and advising on landing page relevance, speed (Core Web Vitals), and conversion optimization to maximize the conversion rate of your paid traffic." },
  { title: "Conversion Tracking & GA4", desc: "Setting up accurate conversion tracking via Google Tag Manager and GA4 so every lead, call, form submission, or purchase is measured correctly." },
  { title: "Quality Score Optimization", desc: "Systematically improving Ad Relevance, Expected CTR, and Landing Page Experience scores to lower your CPCs and improve ad position competitively." },
  { title: "Search Term Analysis", desc: "Weekly search term reports to find new profitable keywords, identify irrelevant traffic, and continuously refine targeting for better ROI." },
  { title: "Bid Strategy Management", desc: "Selecting and adjusting smart bidding strategies (Target CPA, Target ROAS, Maximize Conversions) based on account data maturity and business goals." },
  { title: "Monthly Performance Reporting", desc: "Monthly report covering spend, impressions, clicks, CTR, conversions, cost-per-conversion, ROAS, and actionable next-step recommendations." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Account Audit & Goal Setting", desc: "Audit existing account performance (or start fresh), define conversion goals, set KPIs, and establish baseline cost-per-conversion benchmarks." },
  { step: "02", title: "Keyword Research & Campaign Build", desc: "Research target keywords, build campaign structure, write ad copy, and set up conversion tracking before launch." },
  { step: "03", title: "Launch & Monitor", desc: "Launch campaigns with conservative budgets, monitor search terms daily in the first 2 weeks, add negative keywords immediately, and adjust bids based on early data." },
  { step: "04", title: "Optimize & Scale", desc: "Pause low-performers, scale high-converters, refine ad copy, test new ad variants, and improve landing pages based on conversion data." },
  { step: "05", title: "Report & Plan", desc: "Monthly performance review, ROAS/CPA analysis, competitive insights, and a clear plan for the next month's optimizations." },
];

export default function GoogleAdsPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Google Ads", path: "/services/google-ads/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-google-ads-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Google Ads" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            Paid Search & Performance Marketing
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Google Ads Management Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Google Ads gives your business immediate visibility for high-intent search queries — but poorly managed accounts
            waste budget fast. Rohit Gupta manages Google Ads campaigns with a focus on quality score improvement,
            wasted spend elimination, and conversion rate optimization to deliver profitable paid search results
            alongside your organic SEO strategy.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Get Google Ads Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        {/* What's Included */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included — Google Ads Management
            </h2>
            <p className="text-xs sm:text-sm text-white/60">Full-service Google Ads management across 12 key areas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-blue-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            The Google Ads Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-blue-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-blue-400/40">{step.step}</span>
                  <h3 className="text-sm font-bold text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why combine with SEO */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            Why Combine Google Ads with SEO?
          </h2>
          <p className="text-sm text-white/75 leading-relaxed">
            Google Ads and SEO work best together. Ads deliver immediate traffic and conversion data; SEO builds long-term
            organic authority. The Google Ads search term reports reveal the highest-converting queries to target with SEO;
            SEO rankings reduce dependency on paid traffic over time. Rohit Gupta manages both, which means your paid and
            organic strategy are aligned around the same conversion goals and keyword intelligence.
          </p>
          <Link href="/services/seo/" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
            Explore SEO Services <ArrowRight className="w-3 h-3" />
          </Link>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/40 via-zinc-950 to-zinc-950 border border-blue-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Get More from Your Ad Budget?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a Google Ads account audit to find out where your budget is being wasted and how to improve your ROAS immediately.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Google Ads Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
