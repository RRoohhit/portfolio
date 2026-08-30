import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  BarChart3,
  Search,
  BadgeCheck,
  Zap,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Google Ads Management Services | Rohit Gupta",
  description:
    "Google Ads PPC management by Rohit Gupta: search ads, Performance Max, landing page optimization, and trackable ROI in India.",
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
  {
    title: "Account audit before we spend a rupee",
    desc: "We review your current account, search terms, quality scores, bidding logic, and conversion setup to find where budget is leaking before we even optimize anything.",
  },
  {
    title: "Keyword research built around buying intent",
    desc: "We target the searches that are closest to a sale, not just high-volume keywords. That means better CTR, lower CPC, and more profitable campaigns.",
  },
  {
    title: "Campaign structure that is actually manageable",
    desc: "Tightly grouped campaigns, keyword themes, and proper match type controls help your account stay clean, scalable, and easier to optimize over time.",
  },
  {
    title: "Ad copy that speaks like a real person",
    desc: "We write ads that match customer intent, highlight your offer clearly, and improve relevance so Google rewards your campaigns with lower costs.",
  },
  {
    title: "Negative keywords that save wasted spend",
    desc: "We cut out irrelevant traffic early. This is one of the fastest ways to lower wasted clicks, especially for new or under-optimized accounts.",
  },
  {
    title: "Performance Max campaigns with control",
    desc: "When used correctly, Performance Max can scale fast. We structure the campaign around the right goals, assets, signals, and conversion tracking so it does not burn budget blindly.",
  },
  {
    title: "Landing page alignment",
    desc: "Even good ads underperform when the landing page is weak. We check message match, speed, offer clarity, and conversion flow before scaling traffic.",
  },
  {
    title: "Precise conversion tracking",
    desc: "If the data is wrong, your decisions are wrong. We set up proper tracking so you know exactly which campaigns, keywords, and pages are actually driving leads and sales.",
  },
  {
    title: "Quality Score optimization",
    desc: "We improve ad relevance, expected CTR, and landing page experience so your ads become more efficient and easier to scale without rising costs.",
  },
  {
    title: "Search term pruning and expansion",
    desc: "Every month we look at what search terms are working, which are wasting budget, and which gaps can be turned into new profitable clicks.",
  },
  {
    title: "Budget pacing and bid strategy",
    desc: "We manage spend with enough control to keep learning and enough aggression to scale the campaigns that are producing real business results.",
  },
  {
    title: "Clear monthly reporting",
    desc: "You get a simple, honest report: spend, clicks, cost per lead, conversions, ROAS, and the next optimization steps for the month ahead.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit and goal mapping",
    desc: "We review the current account, customer intent, and business targets to identify the biggest leaks and the fastest opportunities for ROI.",
  },
  {
    step: "02",
    title: "Keyword and campaign build",
    desc: "We research intent-based keywords, build the structure, set up ad groups, and align everything around the right landing page experience.",
  },
  {
    step: "03",
    title: "Launch with smart controls",
    desc: "We launch in a controlled way, monitor early performance, and remove wasted traffic before it grows into a costly problem.",
  },
  {
    step: "04",
    title: "Optimize for efficiency",
    desc: "We keep testing keywords, ad variations, negative terms, bids, and landing page improvements so the account becomes more efficient month by month.",
  },
  {
    step: "05",
    title: "Scale what works",
    desc: "Once the account is stable, we scale the campaigns and channels that are producing leads, calls, and sales at a healthy cost.",
  },
];

const FAQS = [
  {
    question: "Do I need Google Ads if I already have SEO?",
    answer:
      "SEO is the long game, but Google Ads gives you immediate visibility when you need leads now. The best approach is usually both: SEO builds long-term authority and ads give you quick, measurable demand.",
  },
  {
    question: "How fast can I expect results?",
    answer:
      "Some businesses start seeing clicks and leads within days of launch, especially if the account setup, keywords, and landing page are strong. Real optimization and scale usually happens over the first few weeks.",
  },
  {
    question: "Is Google Ads worth it for small businesses?",
    answer:
      "Yes, when it is managed properly. The real issue is not whether ads work — it is whether your budget is being spent intelligently and whether the traffic is converting on your site.",
  },
  {
    question: "Can you optimize my existing account?",
    answer:
      "Absolutely. We can audit an existing Google Ads account, find what is wasting money, fix the structure, improve targeting, and help you unlock better conversion efficiency.",
  },
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
      {renderJsonLd(faqGraph(FAQS), "jsonld-google-ads-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Google Ads" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            Paid Search & Performance Marketing
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Google Ads that bring ready-to-buy leads, not just clicks.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            If your ads are not generating quality leads, it is usually not a budget problem. It is usually a strategy problem.
            We build Google Ads campaigns around intent, relevance, and conversion data so your budget works harder and your business gets more qualified enquiries.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Get a Free Ads Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to improve my Google Ads performance and need a strategy call.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp Strategy Call
            </a>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Search, title: "Intent-first campaigns", text: "We focus on the searches that matter most to your business, not just broad traffic." },
            { icon: BadgeCheck, title: "Lower wasted spend", text: "Poor targeting and weak match types kill budgets fast. We clean that up systematically." },
            { icon: Zap, title: "Better conversion efficiency", text: "From ad copy to landing pages, every layer is tuned to turn clicks into leads and sales." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10">
              <Icon className="w-5 h-5 text-emerald-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What we handle for your Google Ads account
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              The goal is simple: more qualified clicks, lower wasted spend, and a cleaner path to revenue.
            </p>
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

        <section className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            Our process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-blue-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-blue-400/40">{step.step}</span>
                  <h4 className="text-sm font-bold text-white tracking-tight">{step.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            Why ads and SEO work best together
          </h3>
          <p className="text-sm text-white/75 leading-relaxed">
            Paid ads get you visibility now, while SEO builds compounding organic growth for the future. The strongest marketing systems use both together: ads reveal the most valuable search intent quickly, and SEO turns those same keywords into lasting brand authority over time.
          </p>
          <Link href="/services/seo/" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
            Explore SEO Services <ArrowRight className="w-3 h-3" />
          </Link>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/40 via-zinc-950 to-zinc-950 border border-blue-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to make your ad spend finally work for you?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Tell me your website, your goal, and your current ad setup. I’ll show you where the leaks are and what we should fix first.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Google Ads Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
