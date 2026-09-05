import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import { FileText, CheckCircle2, ArrowRight, Search, Target, ShieldCheck, MessageSquare } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "On-Page SEO Services | Rohit Gupta",
  description:
    "On-Page SEO services by Rohit Gupta: keyword research, search intent optimization, meta tags, heading structure, and internal linking.",
  path: "/services/on-page-seo/",
  keywords: [
    "On-Page SEO Services",
    "Keyword Research",
    "Search Intent Analysis",
    "Title Tag Optimization",
    "Content Optimization",
    "Meta Description",
    "Internal Linking",
    "On-Page SEO Expert",
    "Semantic SEO",
    "Rohit Gupta On-Page SEO",
  ],
});

const WHATS_INCLUDED = [
  { title: "Keyword and intent research", desc: "I identify the exact keywords and intent patterns that matter for your business so every page targets the right audience and stage of the buyer journey." },
  { title: "Search intent alignment", desc: "I match content format and structure to what users expect at each stage of the journey — informational, navigational, commercial, or transactional." },
  { title: "Title and meta optimization", desc: "I rewrite titles and meta descriptions so they're relevant, clickable, and aligned with actual search query intent." },
  { title: "Heading and structure clarity", desc: "I create a clean H1–H6 hierarchy that supports readability and keyword relevance for both users and search engines." },
  { title: "Content improvements", desc: "I improve the quality and depth of content so pages answer the user's question more completely and feel more trustworthy to both Google and customers." },
  { title: "Internal linking strategy", desc: "I link related pages logically so your site distributes authority better and makes navigation easier for real users." },
  { title: "Image and media optimization", desc: "I optimize image names, alt text, file sizes, and loading patterns so pages become lighter and more search-friendly." },
  { title: "Semantic and topic relevance", desc: "I enrich the content with useful entities, supporting context, and topical depth so search engines understand the page's relevance." },
  { title: "Canonical and URL review", desc: "I fix duplication risks, poor slug structure, and canonical mismatches so authority is consolidated and ranking signals stay clean." },
  { title: "CTR improvement", desc: "I look at real search performance data and improve page metadata to increase click-through rate where pages are already ranking well." },
  { title: "Content cannibalization checks", desc: "I find cases where multiple pages compete for the same keyword and resolve them so ranking strength is clearer and more effective." },
  { title: "Content briefs and planning", desc: "I create a content roadmap for new pages and updates so the website grows with direction and better topical authority." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Keyword and intent review", desc: "I study which terms matter to your business and which search intent each page should satisfy before making any content change." },
  { step: "02", title: "Page-by-page audit", desc: "I review titles, H1s, metadata, internal links, page structure, and content depth to find issues that limit rankings or clicks." },
  { step: "03", title: "Gap analysis", desc: "I compare the content against competitors and the current SERP to identify what is missing or underdeveloped." },
  { step: "04", title: "Implementation", desc: "I improve the actual page content and structure, then apply the necessary on-page changes directly to the website or CMS." },
  { step: "05", title: "Track and refine", desc: "I monitor performance and keep improving based on ranking movement, CTR, and actual search visibility results." },
];

const FAQS = [
  {
    question: "What is the difference between technical SEO and on-page SEO?",
    answer: "Technical SEO focuses on site architecture, crawlability, speed, and infrastructure. On-page SEO focuses on what is written on the page itself—content, keywords, headings, metadata, and internal links.",
  },
  {
    question: "Does on-page SEO matter if I already have content?",
    answer: "Yes. Even good content can underperform if the page is poorly structured, weakly targeted, or not aligned with search intent. On-page optimization helps the page perform closer to its potential.",
  },
  {
    question: "Do you optimize existing pages or create new ones too?",
    answer: "Both. I can improve existing pages, fix weak pages, and build content strategy for new pages that support the business goals and target categories.",
  },
];

export default function OnPageSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "On-Page SEO", path: "/services/on-page-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-on-page-seo-breadcrumb")}
      {renderJsonLd(faqGraph(FAQS), "jsonld-on-page-seo-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "On-Page SEO" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            Content and keyword optimization
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            On-page SEO that makes each page clearer, stronger, and more useful.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            On-page SEO is where a website becomes easier for Google to understand and easier for customers to trust. It is about more than keywords—it is about matching the page to the actual intent behind the search and making the content feel genuinely helpful. I'm Rohit Gupta, and when I optimize a page I work through the same checklist I use on every site I ship: sharpen the intent, strengthen the structure, and make the words serve real people first.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Get On-Page Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to improve on-page SEO and strengthen my existing website pages.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp Strategy Call
            </a>
          </div>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            Who needs strong on-page SEO?
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            If you want more qualified traffic from search, every important page matters. Service pages, landing pages, blog posts, product pages, and location pages all need to align with actual user intent.
          </p>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What on-page SEO includes
            </h3>
            <p className="text-xs sm:text-sm text-white/60">
              A practical, page-level optimization system built around clarity, search intent, and user usefulness.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              The process
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-emerald-400/40">{step.step}</span>
                  <h4 className="text-sm font-bold text-white tracking-tight">{step.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Technical SEO", href: "/services/technical-seo/" },
              { label: "Off-Page SEO", href: "/services/off-page-seo/" },
              { label: "E-Commerce SEO", href: "/services/ecommerce-seo/" },
              { label: "SEO Audit", href: "/seo-audit/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to make your pages work harder for you?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            I can audit your most important pages, improve the structure, and lift the clarity and relevance that help you rank and convert better.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request On-Page Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
