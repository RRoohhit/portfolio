import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe2, Cpu, Star } from "lucide-react";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Bangalore | Rohit Gupta — SaaS & Tech SEO",
  description:
    "Hire Rohit Gupta — SEO expert in Bangalore. SaaS SEO, technical SEO, Core Web Vitals & AI search optimization for Bengaluru startups and tech brands.",
  path: "/seo-expert-bangalore/",
  keywords: [
    "SEO Expert in Bangalore",
    "SEO services Bengaluru",
    "SaaS SEO India",
    "Tech SEO Bangalore",
    "Hire SEO specialist India",
    "Digital marketing Bengaluru",
  ],
});

const LOCAL_FAQS = [
  {
    question: "What's different about SEO for SaaS companies in Bangalore?",
    answer:
      "SaaS buyers research for weeks before they buy, so the classic playbook — thin pages stuffed with keywords — fails. What works in Bangalore's SaaS market is building topic clusters around each feature and problem your product solves, publishing genuinely useful comparison and documentation pages, and earning links from tech publications. I also make sure AI search engines can cite you, which is where a growing share of SaaS demand now comes from.",
  },
  {
    question: "Do you work with Bangalore startups remotely?",
    answer:
      "Yes, and most of my startup clients prefer it. We work on a clear cadence: shared dashboards, weekly or biweekly reviews, and direct messaging when something needs attention. For funded startups scaling quickly, I can also plug into your existing tools and sprint rhythm so SEO moves at the same speed as your product.",
  },
  {
    question: "Can you handle technical SEO for Next.js and React products?",
    answer:
      "That's one of my core strengths. As a developer who also does SEO, I fix rendering and indexing issues directly in the code — JavaScript SEO, meta handling, structured data, and Core Web Vitals. Most agencies can only recommend fixes; I can ship them, which matters a lot for tech brands in Bangalore where poor implementation is the main reason good products don't rank.",
  },
  {
    question: "Which areas of Bengaluru do you cover for local SEO?",
    answer:
      "All of Bengaluru — Koramangala, HSR Layout, Indiranagar, Whitefield, the Outer Ring Road corridor, Electronic City, and south Bengaluru. Even for a SaaS company, a strong Google Business Profile and service-area pages for your office locations build local trust while your content strategy captures the national and global demand.",
  },
  {
    question: "How long does SEO take for a Bangalore startup?",
    answer:
      "Early wins usually appear in 6 to 12 weeks — improved indexing, clean technical health, and initial rankings for lower-competition terms. Meaningful organic traffic and competitive keyword rankings typically build over 4 to 9 months for SaaS, because the buying cycle itself is longer and demands more content depth than a local business.",
  },
];

export default function SeoExpertBangalorePage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Bangalore", path: "/seo-expert-bangalore/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-bangalore-breadcrumb")}
      {renderJsonLd(faqGraph(LOCAL_FAQS, new URL("/seo-expert-bangalore/", SITE_URL).href), "jsonld-seo-bangalore-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Bangalore" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            Bengaluru Tech SEO Specialist — Serving Pan India &amp; Worldwide
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Bangalore — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Bengaluru is India&apos;s startup and SaaS capital — and ranking here means keeping up with fast-moving, technically sharp competitors. I&apos;m Rohit Gupta, and I help SaaS companies and tech startups in Koramangala, Indiranagar, and HSR Layout grow on Google with fast-loading sites, clean code, and AI search visibility that gets them noticed.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Bangalore SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SaaS &amp; Tech SEO Solutions for Bengaluru Brands
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Tech buyers search with high intent — they know what they want before they type. My job is to make sure they find you first, with fast pages and content that answers their questions clearly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "SaaS & B2B Keyword Strategy",
                desc: "I find the high-intent terms your SaaS buyers search before they purchase — including the ones your competitors are missing.",
              },
              {
                title: "Core Web Vitals & Speed",
                desc: "I tune your site myself to reach sub-second load times, so speed helps your rankings instead of hurting them.",
              },
              {
                title: "Documentation & Resource Pages",
                desc: "Your API docs, help centre, and guides can rank too. I make sure they're cleanly coded and structured for search.",
              },
              {
                title: "AI Search (AEO) Optimization",
                desc: "I format your content so ChatGPT, Perplexity, and Google AI Overviews cite your brand when people ask questions.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 shadow-xl">
                <h3 className="text-base font-bold text-white tracking-tight">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight">Key Service Areas in Bengaluru</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Koramangala & HSR Layout Startups",
              "Indiranagar & MG Road",
              "Whitefield & Outer Ring Road (ORR)",
              "Electronic City & IT Corridor",
              "Mysore Road & South Bengaluru",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-400" />
            Frequently Asked Questions — Bangalore SEO
          </h3>
          <div className="space-y-4">
            {LOCAL_FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h4 className="text-sm font-bold text-white">{faq.question}</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Scale Your Bengaluru Brand with SEO</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free technical SEO audit for your Bengaluru startup or enterprise today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request Bangalore SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/international-seo/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors">
              <Globe2 className="w-4 h-4 text-emerald-400" /> International SEO Services
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}