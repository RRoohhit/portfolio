import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import { Zap, CheckCircle2, ArrowRight, ShieldCheck, MessageSquare } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Technical SEO Services | Rohit Gupta",
  description:
    "Technical SEO services by Rohit Gupta: Core Web Vitals optimization, crawlability, indexation fixes, sitemaps, Schema markup, and JavaScript SEO tuning.",
  path: "/services/technical-seo/",
  keywords: [
    "Technical SEO Specialist",
    "Core Web Vitals Optimization",
    "Lighthouse Performance",
    "Schema JSON-LD",
    "Crawlability Audit",
    "Indexation Fixes",
    "JavaScript SEO",
    "Rohit Gupta SEO",
  ],
});

const INCLUDED_CHECKLIST = [
  { title: "Technical SEO audit", desc: "I review the site architecture, indexation patterns, crawlability, server health, page performance, and structure to find what is actually blocking rankings." },
  { title: "Crawlability and bot access", desc: "I make sure Googlebot can reach the pages you want indexed and stops wasting crawl budget on low-value URLs and duplicate routes." },
  { title: "Indexation and coverage fixes", desc: "I resolve issues like pages being discovered but not indexed, soft 404s, weak canonical signals, and low-value duplicate content." },
  { title: "Robots.txt and sitemap management", desc: "I configure the instructions and URL map so your important pages are discoverable and the site stays clean and indexable." },
  { title: "Canonical and redirect hygiene", desc: "I fix redirect loops, chain redirects, and duplicate URL patterns so authority flows to the right pages instead of getting diluted." },
  { title: "JavaScript SEO and rendering review", desc: "I check how your modern framework renders important content so Google understands the page instead of seeing a broken or incomplete version." },
  { title: "Core Web Vitals tuning", desc: "I optimise LCP, INP, and CLS to improve user experience and keep page speed aligned with modern search expectations — measured with real field data." },
  { title: "Page speed and server performance", desc: "I reduce render blocking, improve server response time, compress assets, and streamline performance so pages load faster and convert better." },
  { title: "Mobile-first and responsiveness checks", desc: "I make sure the site is optimised for real-world mobile interactions and the way Google now prioritises page experience." },
  { title: "Structured data and schema markup", desc: "I add schema where it helps users and search engines understand the business, content, offers, and page context more clearly." },
  { title: "Duplicate content control", desc: "I find and fix issues caused by parameterised URLs, variant pages, multiple slugs, and repeated content across the site." },
  { title: "Internal link architecture", desc: "I improve the flow of authority and context across the website so important pages get the visibility and credibility they deserve." },
  { title: "Website migration support", desc: "I support migrations, re-platforming, and redesigns so rankings are preserved, redirects are correct, and content remains discoverable." },
];

const FAQS = [
  {
    question: "Why is technical SEO important if my content is already good?",
    answer: "Because good content still cannot rank if search engines cannot crawl, index, or understand the page properly. Technical SEO is the foundation behind every solid ranking strategy.",
  },
  {
    question: "Can technical SEO help my website speed?",
    answer: "Yes. Technical SEO and speed optimization are closely related. If the page loads slowly or has render issues, it hurts both rankings and conversion rates.",
  },
  {
    question: "Do you work on React and Next.js websites?",
    answer: "Yes. Many modern websites are built on React or Next.js, and those stacks need careful technical SEO handling to ensure content gets rendered and indexed correctly.",
  },
];

export default function TechnicalSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Technical SEO", path: "/services/technical-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-tech-seo-breadcrumb")}
      {renderJsonLd(faqGraph(FAQS), "jsonld-tech-seo-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Technical SEO" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            Technical foundation & speed
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Technical SEO that makes your site easier to trust, rank, and convert.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            The best content still struggles if the site has crawl issues, slow pages, duplicate URLs, or a weak technical structure. I'm Rohit Gupta, and because I'm also a developer, I don't just diagnose these problems in a report — I get into the code and fix the underlying issues that stop Google from understanding your site and stop users from staying long enough to convert.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Request Technical Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want a technical SEO audit for my website.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp Consultation
            </a>
          </div>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What technical SEO covers
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              I fix the hidden issues that often keep a website from growing, even when the business is strong.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INCLUDED_CHECKLIST.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-zinc-950 to-zinc-950 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-mono font-bold uppercase border border-emerald-500/30">
              SEO visibility tool
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">Check your site structure with the SEO analyzer</h3>
            <p className="text-xs text-white/70 leading-relaxed max-w-xl">
              See the hierarchy, internal linking, and technical structure of your site in a clearer visual way.
            </p>
          </div>
          <Link href="/seo-analyzer/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-emerald-300 transition-colors shadow-md shrink-0">
            Open analyzer
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related technical & growth services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "On-Page SEO", href: "/services/on-page-seo/" },
              { label: "Local SEO", href: "/services/local-seo/" },
              { label: "Google Ads", href: "/services/google-ads/" },
              { label: "Web Development", href: "/services/web-development/" },
              { label: "SEO Audit", href: "/seo-audit/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h3 className="text-xl font-bold text-white tracking-tight">Need a technical cleanup before growth accelerates?</h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            I'll find the blockers holding your site back and build a technical roadmap that supports sustainable rankings.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Request Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
