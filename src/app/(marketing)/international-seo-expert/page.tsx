import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Globe2, CheckCircle2, ArrowRight, Clock, MessageSquare, ShieldCheck, DollarSign } from "lucide-react";
import { CONTACT } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "International SEO Expert | Remote SEO Specialist",
  description:
    "International SEO expert: multi-country SEO, hreflang, AI search & remote web development for USA, UK, UAE, Australia & global brands.",
  path: "/international-seo-expert/",
  keywords: [
    "International SEO Expert",
    "Hire Remote SEO Expert",
    "US SEO Expert",
    "UK SEO Expert",
    "UAE SEO Expert",
    "Australia SEO Expert",
    "Canada SEO Expert",
    "Multi-country SEO",
    "hreflang implementation",
    "English keyword research",
    "remote web developer",
    "international digital marketing",
  ],
});

const REGIONS = [
  { flag: "🇺🇸", name: "United States & Canada", markets: "Google.com · Bing · local US/CA citations" },
  { flag: "🇬🇧", name: "United Kingdom & Europe", markets: "Google.co.uk · Germany · France · EU ccTLDs" },
  { flag: "🇦🇪", name: "UAE, Saudi & Middle East", markets: "Dubai · Abu Dhabi · Riyadh · Arabic + English" },
  { flag: "🇦🇺", name: "Australia & New Zealand", markets: "Google.com.au · AU/NZ local SEO" },
  { flag: "🇸🇬", name: "Singapore & Southeast Asia", markets: "Singapore · Malaysia · Indonesia · APAC" },
  { flag: "🌍", name: "Rest of the World", markets: "100% remote · English & Hindi support" },
];

const INTL_FEATURES = [
  { icon: Globe2, title: "Multi-Country SEO Strategy", desc: "ccTLD vs subfolder architecture, hreflang mapping and country-specific keyword strategies for every region you target." },
  { icon: Clock, title: "Flexible Timezone Support", desc: "I work IST + flexible hours so you get real overlap with US, UK, European and Australian business days." },
  { icon: MessageSquare, title: "Clear English Communication", desc: "Direct senior communication in fluent English and Hindi — weekly calls, sprint updates and Search Console dashboards." },
  { icon: ShieldCheck, title: "100% White Hat, Penalty-Free", desc: "Google Search Essentials compliant everywhere. No PBNs, no link buying, no shortcuts that risk your international domains." },
  { icon: DollarSign, title: "Global Quality, India Value", desc: "Senior international SEO expertise at India-based rates — a genuine competitive advantage over local agencies in high-cost markets." },
  { icon: CheckCircle2, title: "AI Search (AEO) Global Edge", desc: "Get your brand cited by ChatGPT, Perplexity and Google AI Overviews in English and international queries." },
];

const FAQS = [
  {
    question: "Can you work with clients in the USA, UK and UAE remotely?",
    answer:
      "Yes. I work 100% remotely with clients across the USA, UK, UAE, Australia, Canada, Singapore and more. I keep flexible IST+ hours to overlap with international business days, communicate in clear English, and use async tools (WhatsApp, Slack, Loom, Notion) so your team always knows what's happening.",
  },
  {
    question: "Do you do international SEO for Google.com and English-language markets?",
    answer:
      "Absolutely. I handle multi-country and multi-language setups including hreflang implementation, ccTLD vs subfolder strategy, English keyword research for US/UK/AU/EU markets, and localized content guidelines — so your site ranks in the right country, in the right language, without duplicate-content issues.",
  },
  {
    question: "Why hire an Indian SEO expert remotely instead of a local agency?",
    answer:
      "You get senior, technical, white hat expertise at a fraction of local-agency costs, with the flexibility of remote work and zero commute overhead. Many international brands hire Indian SEO specialists precisely because they pair global-standard execution with cost efficiency — and my developer+SEO hybrid means fewer vendors, fewer handoffs, and direct code-level fixes.",
  },
];

export default function InternationalSeoExpertPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "International SEO Expert", path: "/international-seo-expert/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-intl-expert-breadcrumb")}
      {renderJsonLd(faqGraph(FAQS), "jsonld-intl-expert-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "International SEO Expert" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Globe2 className="w-4 h-4" />
            Serving 20+ Countries · Remote-First · English &amp; Hindi
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            International SEO Expert — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Your business can be in San Francisco, London, Dubai, Sydney or Singapore — and still get a senior SEO expert who thinks globally and executes technically. Rohit Gupta provides international SEO, multi-country strategy, remote web development and AI search optimization for brands that want to rank on Google in English-speaking markets and beyond. White hat only, measurable always.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Hire International SEO Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I'm interested in hiring you as an international SEO expert for my business.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Me
            </a>
          </div>
        </header>
{/* Regions */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Markets I Help Rank Internationally
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REGIONS.map((region) => (
              <div key={region.name} className="card-3d-interactive p-5 space-y-2">
                <div className="text-2xl">{region.flag}</div>
                <h3 className="text-sm font-bold text-white">{region.name}</h3>
                <p className="text-[11px] text-white/60 font-mono">{region.markets}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Why International Brands Hire Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTL_FEATURES.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div key={idx} className="card-3d-interactive p-5 space-y-3">
                  <div className="icon-3d w-10 h-10 rounded-xl text-cyan-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{f.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How remote collaboration works */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight">How Remote Collaboration Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Free Video Call & Audit", desc: "We review your site, goals and target countries in a free strategy call, then I audit your technical + content + authority baseline." },
              { step: "02", title: "90-Day International Roadmap", desc: "You get a country-by-country keyword plan, hreflang/architecture recommendations and priorities — in plain English." },
              { step: "03", title: "Weekly Sprints + Live Dashboard", desc: "I execute every week with real Search Console reporting, async updates on your timezone, and a live KPI dashboard." },
            ].map((s) => (
              <div key={s.step} className="card-3d p-5 space-y-2">
                <div className="text-xs font-mono font-black text-cyan-400">STEP {s.step}</div>
                <h4 className="text-sm font-bold text-white">{s.title}</h4>
                <p className="text-[11px] text-white/65 leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">International SEO — FAQs</h3>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
                <h4 className="text-sm font-bold text-white">{faq.question}</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-zinc-950 to-zinc-950 border border-cyan-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Rank Internationally?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free international SEO consultation — we&apos;ll map your target countries, audit your current setup and give you a clear action plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Get Free International SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}