import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Search, AlertTriangle } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Search Optimization (AEO & GEO) | Rohit Gupta",
  description:
    "AI Search Optimization by Rohit Gupta: rank in Google AI Overviews, ChatGPT, and Perplexity through entity markup, Schema data, and E-E-A-T signals.",
  path: "/services/ai-search-optimization/",
  keywords: [
    "AI Search Optimization",
    "AEO Services",
    "GEO Search Optimization",
    "Google AI Overviews",
    "ChatGPT Visibility",
    "Perplexity SEO",
    "Entity Optimization",
    "AI Search Expert India",
    "Rohit Gupta AI Search",
  ],
});

const WHATS_INCLUDED = [
  { title: "Google AI Overviews", desc: "Find out if your pages appear in AI Overviews. We optimize your content structure so AI engines quote your site." },
  { title: "Entity Brand Optimization", desc: "Establish your brand as a trusted entity. We make sure AI tools understand who you are and what you do." },
  { title: "Structured Schema Data", desc: "Add rich JSON-LD schema tags. We help AI search bots read and extract answers from your pages fast." },
  { title: "E-E-A-T Trust Signals", desc: "Boost your trust and author expertise signals. AI models prefer citing credible, proven sources." },
  { title: "Question-Based Content", desc: "Write content that answers user questions directly. We format answers so AI bots quote them verbatim." },
  { title: "Citation-Focused Strategy", desc: "Build factual, well-researched guides. We help your site become the default source AI tools reference." },
  { title: "Knowledge Graph Presence", desc: "Link your brand across your website, Google profile, and social links. We build entity trust." },
  { title: "ChatGPT & Perplexity Reach", desc: "Optimize your content for ChatGPT, Perplexity, and Copilot. We help you win AI search citations." },
  { title: "Brand Consistency Audit", desc: "Audit your brand details across all web profiles. We ensure AI engines get clear, uniform data." },
];

const AI_PLATFORMS = [
  { name: "Google AI Overviews", color: "text-emerald-400" },
  { name: "ChatGPT / OpenAI", color: "text-amber-400" },
  { name: "Perplexity", color: "text-purple-400" },
  { name: "Bing Copilot", color: "text-blue-400" },
  { name: "Google Gemini", color: "text-cyan-400" },
];

export default function AiSearchOptimizationPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "AI Search Optimization", path: "/services/ai-search-optimization/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-ai-search-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "AI Search Optimization" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            AEO / GEO — AI Answer & Generative Engine Optimization
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            AI Search Optimization Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Rank in Google AI Overviews, ChatGPT, and Perplexity. Rohit Gupta helps businesses get quoted and cited by AI answer engines. We optimize your structured data, entity trust, and helpful content.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Discuss AI Search Strategy <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20AI%20Search%20Optimization%20for%20my%20business" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
              WhatsApp Now →
            </Link>
          </div>
        </header>

        {/* Honest disclaimer */}
        <section className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/20 flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-bold text-white">Honest Positioning — No Guarantees</p>
            <p className="text-xs text-white/65 leading-relaxed">
              No SEO provider can guarantee a specific ranking or citation position in AI systems — these systems use complex,
              constantly-updated algorithms. What this service does is build the right foundation of entity signals, structured
              data, and content authority to improve the likelihood of your brand being understood and cited. Results vary by
              industry, competition, and the AI platform's own evaluation criteria.
            </p>
          </div>
        </section>

        {/* AI Platforms */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            AI Platforms We Optimize For
          </h2>
          <div className="flex flex-wrap gap-3">
            {AI_PLATFORMS.map((p) => (
              <span key={p.name} className={`px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono font-bold ${p.color}`}>
                {p.name}
              </span>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included — AI Search Optimization
            </h3>
            <p className="text-xs sm:text-sm text-white/60">9-point AI search visibility and entity optimization service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-purple-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Tool Banner */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/60 via-zinc-950 to-zinc-950 border border-purple-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-400 text-[10px] font-mono font-bold uppercase border border-purple-500/30">
              Interactive AI Tool
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">Try the AI Lab &amp; LLM Directives Generator</h3>
            <p className="text-xs text-white/70 leading-relaxed max-w-xl">
              Generate custom robots.txt rules for GPTBot, PerplexityBot, and ClaudeBot, plus llms.txt entity files.
            </p>
          </div>
          <Link
            href="/ai-lab/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-purple-300 transition-colors shadow-md shrink-0"
          >
            Launch AI Lab
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Related Services */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Technical SEO", href: "/services/technical-seo" },
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "White Hat SEO", href: "/services/white-hat-seo" },
              { label: "SEO Audit", href: "/seo-audit" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-950 border border-purple-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready for the AI Search Era?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Discuss your AI search visibility goals with Rohit Gupta. We will audit your current entity signals
            and build a practical roadmap for improving your presence in AI-powered search systems.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Schedule AI Search Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
