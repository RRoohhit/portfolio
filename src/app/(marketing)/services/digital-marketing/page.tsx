import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import { BarChart3, CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Services & SEO | Rohit Gupta",
  description:
    "Full-funnel digital marketing services: Technical SEO, Google Ads PPC, conversion copywriting, and AI search optimization.",
  path: "/services/digital-marketing/",
  keywords: [
    "rohit digital marketing services",
    "Digital Marketing Consultant Rohit Gupta",
    "Rohit Gupta digital marketing",
    "hire seo expert india",
    "Google Ads Consultant",
    "Performance Marketing",
    "Conversion Rate Optimization",
  ],
});

const GROWTH_CHANNELS = [
  {
    title: "Search engine optimization",
    desc: "I build the organic foundation with technical SEO, keyword strategy, local visibility, and content that matches what customers actually search for.",
  },
  {
    title: "Google Ads and paid acquisition",
    desc: "I structure campaigns around real business goals and keep refining the targeting, so your spend produces leads and revenue — not just clicks and numbers on a screen.",
  },
  {
    title: "Content strategy and conversion copy",
    desc: "I create pages and content that both rank and convert, so the website earns back its keep by bringing in enquiries, not just visitors.",
  },
  {
    title: "Conversion rate optimization",
    desc: "I reduce friction in the funnel so more of the traffic you already have turns into real enquiries and sales action.",
  },
];

const PROCESS = [
  { step: "01", title: "Audit and diagnosis", desc: "I review your current channels, traffic, conversions, and positioning to find what is actually holding growth back." },
  { step: "02", title: "Growth plan", desc: "I map the right mix of SEO, ads, offer positioning, and landing pages around your revenue goals — and explain it in plain language." },
  { step: "03", title: "Execution", desc: "I build the campaign structure, service pages, tracking, and content system so everything works together instead of in isolation." },
  { step: "04", title: "Optimization", desc: "I monitor the data monthly and improve based on what is converting, what is wasting budget, and what is scaling efficiently." },
];

const FAQS = [
  {
    question: "Do I need SEO and ads together?",
    answer: "In many cases, yes. SEO builds long-term visibility while ads bring immediate demand. I help you run both together so they reinforce each other, without wasting budget or depending too much on one channel.",
  },
  {
    question: "Is digital marketing right for small businesses?",
    answer: "Yes — when it's focused. The trick is not to do everything at once. I help you pick the channels and offers that will create the best return for your specific business instead of spreading a small budget too thin.",
  },
  {
    question: "Can you help with both strategy and execution?",
    answer: "Yes. I shape the growth strategy and also do the execution across the channels that matter — so you're not stuck coordinating between consultants who never talk to each other.",
  },
];

export default function DigitalMarketingPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Digital Marketing", path: "/services/digital-marketing/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-digital-marketing-breadcrumb")}
      {renderJsonLd(faqGraph(FAQS), "jsonld-digital-marketing-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Rohit Digital Marketing Services" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4" />
            Full-funnel growth system
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Digital marketing that connects visibility, trust, and revenue.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            I don't believe in isolated marketing tricks — and I think you already know they don't work. Real digital marketing works like a system: search visibility, content trust, paid ads, and conversion flow all feed each other. I help you connect those pieces so the business grows consistently instead of jumping between one-off tactics.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to improve my digital marketing and growth strategy.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp chat
            </a>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">The channels we connect</h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Real growth happens when the right channels reinforce each other instead of competing for attention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {GROWTH_CHANNELS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-5 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">How we work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {PROCESS.map((step) => (
              <div key={step.step} className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400">{step.step}</span>
                <h4 className="text-sm font-bold text-white tracking-tight">{step.title}</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to build a growth engine that keeps working?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Let’s review what is working, what is leaking, and where the next best growth opportunity is for your business.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Schedule consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
