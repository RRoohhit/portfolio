import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import {
  Search, CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe, Target,
  Users, Award, TrendingUp, HelpCircle, Phone, MessageSquare, Briefcase,
  DollarSign, Clock, FileCheck, Check
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Hire SEO Expert India | Dedicated SEO Specialist — Rohit Gupta",
  description:
    "Hire SEO Expert India: dedicated specialist and team for #1 Google rankings, 99/100 Core Web Vitals, and 100% White Hat growth — Rohit Gupta.",
  path: "/services/hire-seo-expert/",
  keywords: [
    "hire seo expert india",
    "hire seo expert",
    "hire seo specialist",
    "hire professional seo expert",
    "hiring an seo expert",
    "hire dedicated seo expert",
    "hire seo professional",
    "hire seo expert in india",
    "hire seo",
    "hire seo experts",
    "hire seo expert team",
    "hire dedicated seo expert india",
    "seo ekspert",
    "freelance seo expert india",
    "dedicated seo consultant",
    "hire technical seo specialist",
  ],
});

const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated SEO Specialist (Full-Time / Part-Time)",
    tag: "Most Popular for Growing Brands",
    desc: "Hire Rohit Gupta as your dedicated SEO specialist. Direct communication, daily execution across technical audits, on-page optimization, keyword architecture, and content roadmaps.",
    deliverables: [
      "100% dedicated focus on your domain(s)",
      "Daily/Weekly sprint updates via Slack or WhatsApp",
      "Comprehensive technical SEO & Core Web Vitals fixes",
      "Continuous competitor SERP analysis & keyword expansion",
      "No agency markups or junior account managers",
    ],
    pricing: "Flexible monthly retainer",
  },
  {
    title: "Hire Dedicated SEO Expert Team",
    tag: "For E-Commerce & Enterprise Scale",
    desc: "Deploy a full-stack SEO powerhouse managed by Rohit Gupta. Includes technical SEO engineering, high-authority White Hat link building, content writers, and React/Next.js developers.",
    deliverables: [
      "Multi-disciplinary execution (Tech + Content + Links)",
      "Large-scale programmatic SEO & faceted navigation fixes",
      "Digital PR and contextual high-DA link acquisition",
      "Custom analytics & Looker Studio live dashboard",
      "Dedicated weekly strategy and revenue sync calls",
    ],
    pricing: "Custom enterprise roadmap",
  },
  {
    title: "SEO Advisory & Technical Audit Retainer",
    tag: "For In-House Marketing Teams",
    desc: "Strategic guidance and technical leadership for founders, CTOs, and marketing heads who already have content creators but need senior SEO direction.",
    deliverables: [
      "Deep crawl audits (Screaming Frog, GSC, Semrush)",
      "Custom JSON-LD schema engineering & architecture",
      "AI Search (AEO/GEO) citation optimization playbook",
      "Developer-ready Jira/GitHub technical issue tickets",
      "Quarterly algorithmic core update risk assessments",
    ],
    pricing: "Project or monthly advisory",
  },
];

const WHY_HIRE_ROHIT = [
  {
    icon: ShieldCheck,
    title: "100% White Hat & Penalty-Free",
    desc: "Strict adherence to Google Search Essentials. No automated link spam, PBNs, or low-quality tricks that risk algorithmic deindexing.",
  },
  {
    icon: Zap,
    title: "Developer + SEO Specialist Hybrid",
    desc: "I don't just export audit spreadsheets; I write clean React, Next.js, and TypeScript code to directly implement speed and schema fixes.",
  },
  {
    icon: TrendingUp,
    title: "Proven 4,700%+ Organic Traffic Growth",
    desc: "Track record of scaling niche portals, e-commerce stores, and B2B platforms to Top-3 rankings for ultra-competitive commercial queries.",
  },
  {
    icon: Globe,
    title: "AI Search & AEO/GEO Ready",
    desc: "Future-proof your organic presence to capture citations across ChatGPT Search, Google AI Overviews, and Perplexity AI.",
  },
  {
    icon: Award,
    title: "Direct Access to Senior Expert",
    desc: "No middlemen or junior account managers. You collaborate directly with Rohit Gupta from strategy conception to technical execution.",
  },
  {
    icon: Target,
    title: "Measurable Revenue & ROI Focus",
    desc: "Rankings are only meaningful if they drive conversions. Every sprint is aligned with qualified inbound leads and organic sales.",
  },
];

const VETTING_CHECKLIST = [
  {
    step: "01",
    title: "Review Verifiable Case Studies & Real SERP Data",
    desc: "Look for transparent before/after traffic curves, keyword position histories, and Core Web Vitals achievements rather than generic promises.",
  },
  {
    step: "02",
    title: "Evaluate Technical Code-Level Competency",
    desc: "Ensure your SEO professional understands JavaScript hydration, Server-Side Rendering (SSR), canonical hierarchies, and Schema JSON-LD.",
  },
  {
    step: "03",
    title: "Insist on Transparent White-Hat Link Practices",
    desc: "A legitimate SEO expert earns contextual links through digital PR, thought leadership, and resource outreach—never paid link farms.",
  },
  {
    step: "04",
    title: "Verify Clear Monthly Reporting & SLA Cadence",
    desc: "Demand plain-language monthly reports tracking keyword movements, organic impressions, qualified leads, and next month's priorities.",
  },
];

const HIRE_FAQS = [
  {
    question: "Why should I hire an SEO expert in India instead of a local agency in the US/UK?",
    answer:
      "Hiring an SEO expert in India like Rohit Gupta delivers senior-level technical expertise, 100% white-hat methodologies, and rapid agile execution at a fraction of Western agency retainers (saving 60% to 75% in overhead). You receive direct 1-on-1 collaboration with a specialized developer-SEO hybrid rather than being passed off to junior account executives.",
  },
  {
    question: "What is the difference between hiring a freelancer vs a dedicated SEO expert team?",
    answer:
      "A dedicated SEO specialist provides hands-on, high-focus optimization for small to mid-sized businesses, handling technical audits, on-page optimization, and keyword strategy directly. An SEO expert team is ideal for enterprise and high-SKU e-commerce stores requiring simultaneous mass content production, large-scale digital PR, and custom web engineering.",
  },
  {
    question: "How quickly will my website rank on Google after hiring an SEO expert?",
    answer:
      "Initial technical crawl fixes and schema validations typically show indexing impact within 1 to 2 weeks. Noticeable keyword rank improvements and impression surges usually take 4 to 8 weeks, while competitive commercial keywords reach top 3 positions within 3 to 6 months of consistent White Hat execution.",
  },
  {
    question: "What tools do you use for SEO audits and rank tracking?",
    answer:
      "I utilize industry-standard enterprise intelligence tools including Google Search Console, Google Analytics 4, Screaming Frog SEO Spider, Ahrefs, Semrush, Google PageSpeed Insights, Chrome UX Report (CrUX), and AI Search Citation parsers.",
  },
  {
    question: "Do you offer white hat SEO services with zero risk of Google penalties?",
    answer:
      "Yes. Every strategy strictly adheres to Google's official Search Essentials guidelines. I never buy links, use private blog networks (PBNs), or engage in automated keyword stuffing. Your domain's search equity is built to compound sustainably across core algorithm updates.",
  },
  {
    question: "How do we get started with hiring Rohit Gupta as our SEO expert?",
    answer:
      "Getting started is simple: click 'Request Free SEO Consultation' or reach out via WhatsApp (+91 96966 21216). We'll schedule a discovery call, perform a free 24-hour technical audit of your website, and present a tailored 90-day SEO growth roadmap.",
  },
];

export default function HireSeoExpertPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Hire SEO Expert", path: "/services/hire-seo-expert/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-hire-seo-breadcrumb")}
      {renderJsonLd(faqGraph(HIRE_FAQS), "jsonld-hire-seo-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Hire SEO Expert India" },
          ]}
        />

        {/* Hero Section */}
        <header className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Top-Ranked SEO Specialist &amp; Consultant in India
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Hire SEO Expert India —{" "}
              <span className="text-emerald-400">Dedicated SEO Specialist &amp; Team</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl font-light">
              Accelerate your organic growth with a dedicated, full-stack <strong>SEO expert &amp; web developer</strong>. Whether you need to <strong>hire an SEO specialist</strong> for technical Core Web Vitals audits, <strong>hire a dedicated SEO expert in India</strong>, or scale with a high-performance <strong>SEO expert team</strong>, I deliver verified #1 Google rankings through 100% ethical White Hat strategies.
            </p>
          </div>

          {/* Quick CTA & Contact Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact/"
              className="btn-3d-emerald text-xs font-mono font-black py-3.5 px-6 flex items-center gap-2"
            >
              <span>Hire Dedicated SEO Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I would like to discuss hiring you as our SEO expert / specialist.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-5 flex items-center gap-2 text-emerald-400"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Instant Chat</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="card-3d text-xs font-mono text-white/70 py-3.5 px-4 flex items-center gap-2 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 96966 21216</span>
            </a>
          </div>

          {/* Highlight badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs font-mono text-white/70">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>100% White Hat</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>No Long Contracts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Core Web Vitals 99+</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>AI Search Ready</span>
            </div>
          </div>
        </header>

        {/* Engagement Models */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Flexible Hiring Models</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Choose How You Want to <span className="text-emerald-400">Hire SEO Talent</span>
            </h2>
            <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
              Tailored engagement structures suited for startups, mid-market enterprises, and digital marketing agencies across India and worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div
                key={idx}
                className="card-3d-interactive p-6 rounded-3xl space-y-4 flex flex-col justify-between border border-white/10 hover:border-emerald-500/40 transition-colors shadow-xl"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 inline-block">
                    {model.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{model.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{model.desc}</p>

                  <div className="pt-2 space-y-2">
                    <p className="text-[11px] font-mono uppercase text-white/40 font-bold tracking-wider">Key Deliverables:</p>
                    <ul className="space-y-1.5">
                      {model.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="text-xs font-mono text-emerald-400 font-bold">{model.pricing}</div>
                  <Link
                    href="/contact/"
                    className="btn-3d-dark w-full py-2.5 px-4 text-xs font-mono font-bold flex items-center justify-center gap-1.5"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Hire Rohit Gupta Section */}
        <section className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Why Businesses Hire Rohit Gupta as Their <span className="text-emerald-400">SEO Professional</span>
            </h2>
            <p className="text-sm text-white/65 leading-relaxed max-w-3xl">
              Most SEO consultants send static recommendations and wait for your developers to act. As a seasoned full-stack engineer and technical SEO specialist, I audit, code, optimize, and rank your web assets from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {WHY_HIRE_ROHIT.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-white/65 leading-relaxed font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Vetting Checklist */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Hiring Best Practices</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              The 4-Step Checklist for <span className="text-amber-400">Hiring an SEO Expert</span>
            </h2>
            <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
              Use this framework when interviewing candidates to separate true technical authorities from short-term tricksters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VETTING_CHECKLIST.map((step) => (
              <div key={step.step} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 shadow-xl">
                <div className="text-xs font-mono font-black text-amber-400">{step.step}</div>
                <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO FAQs */}
        <section className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-400" />
              Frequently Asked Questions About Hiring an SEO Expert
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Clear answers regarding pricing, timelines, white hat deliverables, and hiring engagement processes.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {HIRE_FAQS.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Hire a Top-Rated <span className="text-emerald-400">SEO Expert in India</span>?
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
            Claim your free 24-hour technical SEO audit and discover how we can take your target keywords to Position #1 on Google.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact/"
              className="btn-3d-emerald text-xs font-mono font-black py-3.5 px-8"
            >
              Get Free SEO Audit &amp; Proposal
            </Link>
            <Link
              href="/case-studies/"
              className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-6"
            >
              View Verified Case Studies
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
