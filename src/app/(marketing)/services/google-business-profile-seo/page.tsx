import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import { MapPin, CheckCircle2, ArrowRight, Star, Search, BarChart3, ShieldCheck, Globe, MessageSquare } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Google Business Profile SEO Services — Rohit Gupta",
  description:
    "Google Business Profile SEO by Rohit Gupta: GBP audit, category optimization, review strategy, and Google Map Pack ranking for local businesses.",
  path: "/services/google-business-profile-seo/",
  keywords: [
    "Google Business Profile SEO",
    "Google Maps SEO",
    "GBP Optimization",
    "Google Maps Ranking",
    "Local SEO Consultant",
    "Google Business Profile Expert",
    "Map Pack Optimization",
    "GBP Audit",
    "Rohit Gupta Local SEO",
  ],
});

const GBP_AUDIT_ITEMS = [
  "Primary and secondary category research and selection",
  "Business description optimization and service clarity",
  "Services and products setup with more useful descriptions",
  "Attributes and business highlights",
  "NAP consistency across directories and data sources",
  "Hours, photos, and business profile trust signals",
  "Website and phone link integrity checks",
  "Review and reputation baseline analysis",
  "Local competitor comparison",
  "Map Pack ranking baseline tracking",
];

const GBP_OPTIMIZATION_ITEMS = [
  "Keyword-rich primary and secondary category choices",
  "Service-area and radius configuration",
  "Profile photo and cover image refresh",
  "Google Posts strategy and local offers",
  "Review response templates and trust building",
  "Local citation cleanup and consistency",
  "Local landing pages built for city or service-area intent",
  "Ongoing map visibility reporting and optimization",
];

const PROCESS_STEPS = [
  { step: "01", title: "GBP audit and baseline", desc: "We review your profile against ranking factors and identify what is missing, outdated, or weakening your local visibility." },
  { step: "02", title: "Category and service setup", desc: "We align your categories and services with actual local intent so your profile is clear, relevant, and easier for Google to rank." },
  { step: "03", title: "Local consistency cleanup", desc: "We fix NAP and directory inconsistencies so Google sees one reliable business identity across the web." },
  { step: "04", title: "Reviews and freshness", desc: "We improve your review profile, response system, and ongoing Google Posts so the profile remains active and trustworthy." },
  { step: "05", title: "Local landing pages", desc: "We connect the GBP with service-area pages on your website so local intent and on-site authority support each other." },
  { step: "06", title: "Ongoing tracking", desc: "We monitor improvements in profile views, calls, direction requests, and map placement so we can keep refining what works." },
];

const SEARCH_QUERIES = [
  "Google Business Profile SEO",
  "Google Maps SEO",
  "GBP optimization",
  "Google Maps ranking",
  "Local SEO consultant",
  "Google Business Profile expert",
  "Map Pack optimization",
  "GBP audit",
];

const FAQS = [
  {
    question: "Why is Google Business Profile SEO important?",
    answer: "Because many high-intent customers do not visit your website first—they search locally and choose the business that looks strongest, most relevant, and most trustworthy in the map results.",
  },
  {
    question: "Can this help a local service business even if I already have a website?",
    answer: "Yes. Your website helps with broader search discovery, but your GBP helps capture people who are searching specifically for businesses near them right now.",
  },
  {
    question: "How long does GBP SEO take to show results?",
    answer: "Some people see profile improvements quickly, but better map-pack visibility usually builds steadily over weeks when the profile is cleaned up and kept active consistently.",
  },
];

export default function GoogleBusinessProfileSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Google Business Profile SEO", path: "/services/google-business-profile-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-gbp-seo-breadcrumb")}
      {renderJsonLd(faqGraph(FAQS), "jsonld-gbp-seo-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Google Business Profile SEO" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Local map pack visibility
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Google Business Profile SEO that helps nearby customers choose you.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Your Google profile is what local buyers see first. A strong profile brings phone calls, store visits, and local trust. We optimize your profile to rank in the Google Maps 3-Pack.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Get GBP audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to improve my Google Business Profile and local visibility.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp consultation
            </a>
          </div>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            Who this is for
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            Local service businesses, clinics, agencies, retailers, and professionals benefit most when their Google Business Profile looks strong, responds to local intent, and helps Google trust the business as relevant to the service area.
          </p>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              What we review first
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Every optimization starts with a real audit against local ranking factors and profile quality indicators.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GBP_AUDIT_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What we optimize
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              We improve the factors that help businesses show up in the map results and feel more trustworthy to potential customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GBP_OPTIMIZATION_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">The process</h2>
            <p className="text-xs sm:text-sm text-white/60">A simple, structured workflow focused on map visibility and local trust.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-emerald-400/40">{step.step}</span>
                  <h3 className="text-sm font-bold text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            Search queries this covers
          </h3>
          <div className="flex flex-wrap gap-2">
            {SEARCH_QUERIES.map((q) => (
              <span key={q} className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">{q}</span>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Star className="w-4 h-4" />
            Free GBP audit included
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to show up stronger in local search?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Let’s check your GBP and see what is missing, outdated, or under-optimized in your local profile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request free GBP audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/seo-audit/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Full SEO audit
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
