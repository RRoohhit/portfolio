"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ROHIT_PROFILE, EXPERIENCES, EDUCATIONS, TECHNICAL_SKILLS, SEO_TOOLS } from "@/data/portfolioData";
import { LazySection } from "@/components/ui/LazySection";
import { Reveal } from "@/components/ui/Reveal";
import { useAudit } from "@/components/providers/AuditProvider";
import { TestimonialsStrip } from "@/components/views/home/TestimonialsStrip";
import heroPortraitImg from "@/assets/images/rohit-gupta-seo.webp";
import { CONTACT } from "@/config/site";
import {
  TrendingUp, Award, Zap, ArrowRight, CheckCircle2, MapPin,
  Sparkles, Code2, Search, Target, Gauge, Star,
  Activity, Globe, BarChart3, Layers, ShieldCheck, Users,
  Cpu, LayoutGrid, Check, ExternalLink, Route, LineChart, FileText, FastForward, MessageSquare,
} from "lucide-react";

const ProcessSection = dynamic(
  () => import("@/components/views/home/ProcessSection").then((m) => ({ default: m.ProcessSection })),
  { loading: () => <div className="min-h-[280px]" /> }
);
const WhyHireMeSection = dynamic(
  () => import("@/components/views/home/WhyHireMeSection").then((m) => ({ default: m.WhyHireMeSection })),
  { loading: () => <div className="min-h-[320px]" /> }
);
const PricingSection = dynamic(
  () => import("@/components/views/home/PricingSection").then((m) => ({ default: m.PricingSection })),
  { loading: () => <div className="min-h-[400px]" /> }
);
const HireCtaBanner = dynamic(
  () => import("@/components/views/home/HireCtaBanner").then((m) => ({ default: m.HireCtaBanner })),
  { loading: () => <div className="min-h-[220px]" /> }
);

const MARQUEE_SERVICES = [
  { label: "Hire SEO Expert India", icon: Target },
  { label: "WordPress Development Company", icon: Code2 },
  { label: "Hire Dedicated SEO Specialist", icon: Users },
  { label: "White Hat SEO Firm", icon: ShieldCheck },
  { label: "SEO Expert in Noida", icon: MapPin },
  { label: "Local SEO Services in Noida", icon: MapPin },
  { label: "AEO Tools & AI Search", icon: Sparkles },
  { label: "Performance Optimization", icon: Gauge },
  { label: "Core Web Vitals 99+", icon: Zap },
  { label: "Schema JSON-LD", icon: Search },
  { label: "React & Next.js Apps", icon: Code2 },
  { label: "Organic Growth", icon: Award },
];

const SERVICES = [
  {
    number: "01",
    icon: Search,
    title: "Hire Dedicated SEO Expert & Team",
    desc: "Deploy a dedicated SEO specialist or expert team for technical audits, Core Web Vitals (99/100), and 100% White Hat #1 rankings.",
    highlights: ["Dedicated Monthly Retainer", "100% White Hat SEO", "Direct Senior Collaboration"],
    color: "emerald",
  },
  {
    number: "02",
    icon: Code2,
    title: "WordPress Development Company",
    desc: "Custom Gutenberg themes, WooCommerce store engineering, sub-second speed optimization, and Headless WordPress with Next.js.",
    highlights: ["Zero Page Builder Bloat", "Sub-Second LCP < 1.0s", "Custom WooCommerce Builds"],
    color: "blue",
  },
  {
    number: "03",
    icon: Globe,
    title: "Local SEO Services in Noida & NCR",
    desc: "Dominate Google Maps 3-Pack and 'near me' local searches across Noida Sector 18, 62, 63, Greater Noida, and Delhi NCR.",
    highlights: ["Google Business Profile", "Local Citation Architecture", "Geo-Targeted Landing Pages"],
    color: "violet",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "AI Search Optimization (AEO Tools)",
    desc: "Win high-converting citations in ChatGPT Search, Perplexity AI & Google AI Overviews. Future-proof your entity for AEO/GEO.",
    highlights: ["AEO / GEO Strategy", "AI Citation Building", "llms.txt Architecture"],
    color: "amber",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Rohit Digital Marketing Services",
    desc: "Data-driven keyword clustering, Google Ads management, conversion rate optimization (CRO), and high-ROI multi-channel growth.",
    highlights: ["High-ROI Google Ads PPC", "Topical Authority Mapping", "Conversion-Focused Copy"],
    color: "rose",
  },
  {
    number: "06",
    icon: Layers,
    title: "White Hat SEO Firm & Technical Audits",
    desc: "Deep crawl analysis, Schema JSON-LD structured data, and ethical link acquisition aligned with Google Search Essentials.",
    highlights: ["Zero Penalty Risk", "Core Web Vitals Fix", "1,400+ Quality Backlinks"],
    color: "teal",
  },
];

const HERO_STATS = [
  { value: "100%", label: "White Hat SEO", icon: ShieldCheck, color: "emerald" },
  { value: "2+", label: "Years Experience", icon: Award, color: "amber" },
  { value: "99+", label: "Lighthouse Performance", icon: Gauge, color: "blue" },
  { value: "Data", label: "Driven Strategy", icon: Star, color: "violet" },
];

const WEB_VITALS_METRICS = [
  { metric: "LCP", name: "Largest Contentful Paint", value: "0.8s", benchmark: "Target < 2.5s", status: "Optimal", color: "text-emerald-400", border: "border-emerald-500/30" },
  { metric: "INP", name: "Interaction to Next Paint", value: "42ms", benchmark: "Target < 200ms", status: "Instant", color: "text-cyan-400", border: "border-cyan-500/30" },
  { metric: "CLS", name: "Cumulative Layout Shift", value: "0.00", benchmark: "Target < 0.1", status: "Zero Shift", color: "text-amber-400", border: "border-amber-500/30" },
  { metric: "TTFB", name: "Time to First Byte", value: "110ms", benchmark: "Target < 800ms", status: "Edge Fast", color: "text-purple-400", border: "border-purple-500/30" },
];

const INTERACTIVE_TOOLS_SUITE = [
  {
    title: "Visual SEO Mind Map Analyzer",
    desc: "Interactive canvas graph visualizer for technical site hierarchy, crawl depth, and orphan page detection.",
    link: "/seo-analyzer",
    badge: "Interactive Mind Map",
    icon: Route,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    title: "SERP & Social Card Previewer",
    desc: "Real-time Google pixel width title gauge, OpenGraph & X Twitter card multi-platform previewer.",
    link: "/seo-tools",
    badge: "SERP & Schema",
    icon: LayoutGrid,
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    title: "AI Search & LLMs Directive Generator",
    desc: "Generates robots.txt rules for GPTBot, ClaudeBot & PerplexityBot, plus llms.txt entity files.",
    link: "/ai-lab",
    badge: "AEO / GEO AI Search",
    icon: Cpu,
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];

const SkillsRadarChart = dynamic(
  () => import("@/components/shared/SkillsRadarChart").then((m) => ({ default: m.SkillsRadarChart })),
  { ssr: false }
);
const IndustryPulse = dynamic(
  () => import("@/components/shared/IndustryPulse").then((m) => ({ default: m.IndustryPulse })),
  { ssr: false }
);
const LocalSeoCoverageSection = dynamic(
  () => import("@/components/shared/LocalSeoCoverageSection").then((m) => ({ default: m.LocalSeoCoverageSection })),
  { loading: () => <div className="min-h-[420px]" /> }
);
const FaqSection = dynamic(
  () => import("@/components/shared/FaqSection").then((m) => ({ default: m.FaqSection })),
  { loading: () => <div className="min-h-[360px]" /> }
);
const SectionLoader: React.FC = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-emerald-400 animate-spin" />
  </div>
);

const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  blue:    { border: "border-blue-500/30",    bg: "bg-blue-500/10",    text: "text-blue-400",    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  violet:  { border: "border-violet-500/30",  bg: "bg-violet-500/10",  text: "text-violet-400",  badge: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
  amber:   { border: "border-amber-500/30",   bg: "bg-amber-500/10",   text: "text-amber-400",   badge: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  rose:    { border: "border-rose-500/30",    bg: "bg-rose-500/10",    text: "text-rose-400",    badge: "bg-rose-500/20 text-rose-300 border-rose-500/30" },
  teal:    { border: "border-teal-500/30",    bg: "bg-teal-500/10",    text: "text-teal-400",    badge: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
};

export const HomePage: React.FC = () => {
  const router = useRouter();
  const { openAudit } = useAudit();

  return (
    <div className="space-y-10 md:space-y-16 lg:space-y-24">

      {/* HERO SECTION */}
      <section
        className="hero-full-bleed relative min-h-[85dvh] sm:min-h-[90dvh] lg:min-h-screen flex flex-col justify-center lg:justify-start isolate pt-16 sm:pt-20"
      >
        <div className="absolute inset-0 -z-20 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 -z-20 bg-radial-glow pointer-events-none" />
        {/* Ambient GPU-accelerated background lighting */}
        <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18)_0%,transparent_70%)] -z-10 pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.12)_0%,transparent_70%)] -z-10 pointer-events-none" />
        <div className="absolute bottom-16 left-1/3 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.14)_0%,transparent_70%)] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#050505] -z-10 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center py-8 sm:py-10 lg:py-0">

          {/* Left Column: Copy & CTAs */}
          <Reveal direction="right" distance={40} className="lg:col-span-7 space-y-5 sm:space-y-6 lg:space-y-8 relative z-20">

            <div className="space-y-3 sm:space-y-4">
              {/* Available badge — Always single line on all devices */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] min-[380px]:text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider whitespace-nowrap max-w-full overflow-hidden shrink-0 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="truncate">Available for SEO &amp; Web Development Projects</span>
              </div>
              <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-black text-white tracking-tight leading-[1.1] sm:leading-[1.08]">
                Rohit Gupta —{" "}
                <span className="relative inline-block text-emerald-400">
                  SEO Expert in India &amp; Worldwide
                  <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 7C60 2 140 2 198 7" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
                  </svg>
                </span>
              </h1>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                Namaste! 🙏 I&apos;m Rohit Gupta, the SEO expert that Indian businesses trust to rank #1 on Google — and I work with clients <strong className="text-white">across all of India &amp; worldwide</strong>. Whether your business is in {" "}
                <Link href="/seo-expert-noida/" className="text-white hover:text-emerald-400 font-semibold underline">Noida</Link>,{" "}
                <Link href="/seo-expert-delhi/" className="text-white hover:text-emerald-400 font-semibold underline">Delhi</Link>,{" "}
                <Link href="/seo-expert-mumbai/" className="text-white hover:text-emerald-400 font-semibold underline">Mumbai</Link>,{" "}
                <Link href="/seo-expert-bangalore/" className="text-white hover:text-emerald-400 font-semibold underline">Bengaluru</Link>, Hyderabad, Chennai, Pune, Kolkata — or you&apos;re in the USA, UK, UAE or Australia and need a senior remote SEO expert — I deliver. You can{" "}
                <Link href="/services/hire-seo-expert/" className="text-white hover:text-emerald-400 font-semibold underline">hire a dedicated SEO expert</Link>, build a lightning-fast{" "}
                <Link href="/services/wordpress-development/" className="text-white hover:text-emerald-400 font-semibold underline">WordPress website</Link>, dominate{" "}
                <Link href="/services/local-seo/" className="text-white hover:text-emerald-400 font-semibold underline">local SEO</Link>, or get your brand cited by{" "}
                <Link href="/services/ai-search-optimization/" className="text-white hover:text-emerald-400 font-semibold underline">ChatGPT and Google AI Overviews</Link> — 100% white hat strategies backed by real code, data and measurable results.
              </p>
            </div>

            {/* Hero CTAs: Button 1 full line on mobile; Buttons 2 & 3 side-by-side in 1 line on mobile */}
            <div className="space-y-2.5 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-3.5 w-full">
              {/* Button 1: Get SEO Consultation */}
              <Link
                href="/contact/"
                className="btn-3d-emerald group text-xs font-mono font-black w-full sm:w-auto justify-center flex items-center gap-2 py-3.5 px-5 shadow-lg"
              >
                <span>Get SEO Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>

              {/* Buttons 2 & 3: Side-by-side in ONE line on mobile */}
              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3 w-full sm:w-auto">
                <Link
                  href="/case-studies/"
                  className="btn-3d-dark text-[10px] sm:text-xs font-mono font-bold text-center justify-center flex items-center py-3 px-2 sm:px-4 leading-none truncate"
                >
                  <span className="truncate">View Case Studies</span>
                </Link>

                <a
                  href={`${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-3d-dark text-[10px] sm:text-xs font-mono font-bold text-center justify-center flex items-center gap-1.5 py-3 px-2 sm:px-4 leading-none hover:text-emerald-400 truncate"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">WhatsApp Me</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-4 gap-y-2.5 pt-1">
              {[
                "100% White Hat, no penalties",
                "Free technical SEO audit",
                "No long-term contracts",
                "Transparent monthly reports",
              ].map((point) => (
                <span key={point} className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-white/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {point}
                </span>
              ))}
            </div>

          </Reveal>

          {/* Right Column: Portrait */}
          <Reveal direction="left" distance={40} delay={0.1} className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full z-10 isolate">
            <div className="absolute inset-0 flex items-end justify-center lg:justify-end pointer-events-none -z-10">
              <div className="w-[320px] sm:w-[500px] lg:w-[750px] xl:w-[1000px] aspect-square rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.45),rgba(16,185,129,0.12)_55%,transparent_75%)] blur-3xl animate-pulse" />
            </div>
            <div className="relative flex justify-center lg:justify-end w-full">
              <Image
                src={heroPortraitImg}
                alt="Rohit Gupta — SEO Expert & Web Developer"
                priority
                fetchPriority="high"
                width={1400}
                height={1400}
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 75vw, 1100px"
                className="
                  relative w-auto
                  h-[360px] sm:h-[480px] md:h-[640px] lg:h-[840px] xl:h-[1020px] 2xl:h-[1150px]
                  max-h-[min(96vh,1150px)] max-w-full
                  object-contain origin-bottom saturate-110
                  scale-105 lg:scale-115 xl:scale-125 2xl:scale-130 transition-transform duration-500
                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]
                  drop-shadow-[0_0_55px_rgba(16,185,129,0.45)]
                "
              />
            </div>
          </Reveal>

        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="-mt-8 sm:-mt-16 md:-mt-20 hero-full-bleed py-3.5 bg-gradient-to-r from-emerald-950/40 via-zinc-950/90 to-emerald-950/40 border-y border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl relative z-20">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-3 sm:gap-4">
          {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-2xl card-3d text-xs sm:text-sm font-mono text-white/90 font-medium flex items-center gap-2 whitespace-nowrap hover:text-emerald-300 transition-all cursor-default group"
              >
                <ItemIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>{item.label}</span>
                <span className="text-white/20 ml-1">•</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* STATS BAR (SHOWING RIGHT AFTER MARQUEE TICKER) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 p-3 sm:p-5 card-3d-interactive">
          {HERO_STATS.map((stat) => {
            const Icon = stat.icon;
            const c = colorMap[stat.color];
            return (
              <div
                key={stat.label}
                className={`p-3 sm:p-4 rounded-2xl border ${c.border} ${c.bg} flex flex-col items-center text-center gap-1 sm:gap-1.5 shadow-lg hover:scale-[1.03] transition-transform duration-300`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${c.text}`} />
                <span className={`text-xl sm:text-2xl lg:text-3xl font-black font-mono ${c.text}`}>{stat.value}</span>
                <span className="text-[10px] sm:text-xs text-white/70 font-mono uppercase tracking-wide leading-tight font-bold">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* SOCIAL PROOF STRIP */}
      <TestimonialsStrip />

      {/* CORE WEB VITALS PERFORMANCE BENCHMARK BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="p-4 sm:p-6 lg:p-8 card-3d-interactive space-y-5 sm:space-y-6 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono uppercase font-bold tracking-widest">
                <FastForward className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sub-Second Performance &amp; Google Core Web Vitals</span>
              </div>
              <p className="text-base sm:text-xl lg:text-2xl font-black text-white uppercase tracking-tight leading-tight">
                Verified 99–100/100 Lighthouse Performance Benchmarks
              </p>
            </div>
            <div className="btn-3d-emerald text-[10px] sm:text-xs py-2 px-4 shrink-0 pointer-events-none">
              ⚡ Lighthouse 99/100 Certified
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {WEB_VITALS_METRICS.map((m) => (
              <div key={m.metric} className={`p-3 sm:p-4 rounded-2xl card-3d border ${m.border} space-y-1.5`}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-white/60">{m.metric}</span>
                  <span className={`text-[10px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded bg-white/5 ${m.color}`}>
                    {m.status}
                  </span>
                </div>
                <div className={`text-xl sm:text-2xl lg:text-3xl font-black font-mono ${m.color}`}>{m.value}</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-white/50 leading-tight">{m.name}</div>
                <div className="text-[10px] font-mono text-white/35 pt-1 border-t border-white/5">{m.benchmark}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="space-y-6 sm:space-y-8 cv-auto">
        <Reveal className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
            <Zap className="w-3 h-3" />
            <span>Full-Spectrum Digital Growth</span>
          </div>
          <h2 id="services-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            What I Do for <span className="text-gradient">Your Business</span>
          </h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
            From a single-page audit to a full-scale Next.js rebuild with AI search optimization — I cover every layer of modern digital growth.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((svc, idx) => {
            const Icon = svc.icon;
            const c = colorMap[svc.color];
            return (
              <Reveal key={svc.number} delay={(idx % 3) * 0.1} amount={0.15}>
                <div
                  className={`card-3d-interactive p-5 sm:p-6 space-y-3 sm:space-y-4 relative overflow-hidden group h-full`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${c.text}`} />
                    </div>
                    <span className="text-xs font-mono font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {svc.number}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-display font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{svc.desc}</p>
                  </div>
                  <ul className="space-y-2 pt-1 border-t border-white/5">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs font-mono text-white/80">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${c.text} shrink-0`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="flex justify-center pt-2">
          <Link
            href="/contact/"
            className="btn-3d-emerald group text-xs font-mono font-black"
          >
            Get a Free Strategy Call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* HOW I WORK PROCESS */}
      <ProcessSection />

      {/* INTERACTIVE LIVE SEO TOOLS QUICK LAUNCH */}
      <section className="space-y-6 sm:space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cv-auto">
        <Reveal className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Built-In Live SEO &amp; AI Intelligence Tools</span>
          </div>
          <h2 id="tools-suite-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Test Drive My <span className="text-gradient">Proprietary SEO Tools</span>
          </h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
            Free interactive tools built directly into this portfolio for audit engineers, developers, and marketing leads.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {INTERACTIVE_TOOLS_SUITE.map((tool) => {
            const ToolIcon = tool.icon;
            return (
              <div key={tool.title} className="card-3d-interactive p-5 sm:p-6 space-y-4 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${tool.color}`}>
                      {tool.badge}
                    </span>
                    <ToolIcon className="w-5 h-5 text-white/50 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{tool.title}</h3>
                  <p className="text-xs sm:text-[13px] text-white/65 leading-relaxed">{tool.desc}</p>
                </div>

                <Link
                  href={tool.link}
                  className="btn-3d-dark w-full py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Launch Tool</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT & BIO */}
      <section id="about-us-section" className="scroll-mt-24 space-y-6 cv-auto">
        <Reveal as="div">
          <div className="flex items-center justify-between">
            <span id="about-heading" className="text-[10px] uppercase text-white/40 tracking-[0.2em] font-bold flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              About Rohit Gupta
            </span>
            <Link href="/rohit-gupta/" className="text-xs font-mono text-emerald-400 hover:underline font-bold flex items-center gap-1">
              Read Full Entity Profile Page →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

          <Reveal direction="right" distance={32} className="lg:col-span-7">
            <div className="card-3d-interactive p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl h-full flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
                  Rohit — Web Developer &amp; SEO Expert Freelancer in Noida
                </h2>
                <p className="text-sm leading-relaxed text-white/75">
                  I&apos;m Rohit Gupta, a freelance web developer and SEO specialist from Noida with roots in Ayodhya. Over 2+ years I&apos;ve helped 200+ businesses — from Noida salons and coaching institutes to Mumbai startups, Bengaluru SaaS brands, and UK/US eCommerce companies — rank higher, load faster and convert better through 100% ethical White Hat SEO. What makes me different? I&apos;m the strategist who also writes the code: the person who audits your Core Web Vitals fixes them, and the person who plans your keyword clusters builds the schema that powers them. My clients span across India and internationally, and I&apos;m available on-site in Delhi NCR &amp; Ayodhya, and 100% remote everywhere else.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] uppercase text-white/40 font-bold tracking-[0.2em] font-mono">Core Service Capabilities:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    "Technical SEO & Schema JSON-LD",
                    "Local & International SEO",
                    "Full-Stack React & Next.js Dev",
                    "Digital Marketing & Google Ads",
                  ].map((item) => (
                    <div key={item} className="card-3d p-3 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs sm:text-[13px] text-white/90 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/rohit-gupta/"
                  className="btn-3d-dark text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 py-2 px-4 inline-flex items-center gap-2"
                >
                  <span>Learn more about Rohit Gupta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" distance={32} delay={0.1} className="lg:col-span-5">
            <div className="space-y-4 sm:space-y-6 h-full flex flex-col justify-between">
            <div className="card-3d-interactive bg-gradient-to-br from-white via-zinc-100 to-zinc-200 text-black p-5 sm:p-6 rounded-3xl flex flex-col justify-between space-y-4 shadow-2xl">
              <div>
                <p className="text-[10px] uppercase text-black/60 mb-1.5 tracking-widest font-mono font-bold">Contact Rohit Gupta</p>
                <p className="text-sm sm:text-base lg:text-lg font-extrabold tracking-tight font-mono break-all text-black">{ROHIT_PROFILE.email}</p>
              </div>
              <div className="pt-4 border-t border-black/10 flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase font-bold text-black/70">NOIDA (CURRENT) · AYODHYA (PERMANENT)</span>
                <Link
                  href="/rohit-gupta/"
                  className="arrow-3d w-9 h-9 flex items-center justify-center font-bold text-black shadow-md hover:scale-110 transition-transform"
                  aria-label="View Rohit Gupta profile page"
                >
                  →
                </Link>
              </div>
            </div>

            <div className="card-3d-interactive p-5 sm:p-6 space-y-3 shadow-2xl">
              <h4 className="text-[10px] uppercase text-white/40 tracking-[0.2em] font-mono font-bold">Education Credentials</h4>
              <div className="space-y-2.5 text-xs sm:text-[13px]">
                {EDUCATIONS.map((edu, idx) => (
                  <div key={idx} className="card-3d p-3 space-y-1">
                    <div className="font-bold text-white italic">{edu.degree}</div>
                    <div className="text-white/60 text-xs">{edu.institution}</div>
                    <div className="flex justify-between text-[10px] font-mono text-white/40 pt-1 border-t border-white/5">
                      <span>{edu.period}</span>
                      <span className="text-emerald-400 font-bold">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* WHY HIRE ROHIT COMPARISON */}
      <WhyHireMeSection />

      {/* LOCAL SEO COVERAGE */}
      <section className="space-y-6 cv-auto">
        <LocalSeoCoverageSection onContact={() => router.push("/contact")} />
      </section>

      {/* SKILLS RADAR CHART */}
      <section className="space-y-6 cv-auto">
        <LazySection minHeight="420px">
          <Suspense fallback={<SectionLoader />}>
            <SkillsRadarChart />
          </Suspense>
        </LazySection>
      </section>

      {/* TECHNICAL SKILLS MATRIX */}
      <section className="space-y-6 sm:space-y-8 cv-auto">
        <Reveal className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-white/60 uppercase tracking-wider">
            <Zap className="w-4 h-4 text-white" />
            <span>Technology &amp; Tools Stack</span>
          </div>
          <h2 id="tech-stack-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            The <span className="text-gradient">Tech Stack</span> Behind the Rankings
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TECHNICAL_SKILLS.map((skillGroup, idx) => (
            <Reveal key={idx} delay={(idx % 3) * 0.08} amount={0.1}>
              <div className="card-3d-interactive p-4 sm:p-5 space-y-3 shadow-xl h-full">
                <h3 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <div className="icon-3d p-1.5 rounded-lg text-emerald-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {skillGroup.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="card-3d px-2 sm:px-2.5 py-1 text-xs font-mono text-white/85 hover:border-emerald-400/50 hover:text-emerald-300 hover:scale-105 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="pt-2">
          <h3 className="text-sm font-bold text-white font-mono mb-3 sm:mb-4 flex items-center gap-2">
            <Search className="w-4 h-4 text-amber-400" />
            Specialized SEO &amp; Performance Tools Utilized:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SEO_TOOLS.map((tool, idx) => (
              <div key={idx} className="card-3d p-3 sm:p-4 space-y-1">
                <h4 className="text-xs font-bold text-white font-mono">{tool.name}</h4>
                <p className="text-[11px] sm:text-xs text-white/55 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY PULSE */}
      <section className="space-y-6">
        <LazySection minHeight="480px">
          <Suspense fallback={<SectionLoader />}>
            <IndustryPulse />
          </Suspense>
        </LazySection>
      </section>

      {/* PRICING & PACKAGES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingSection />
      </section>

      {/* FINAL HIRE CTA BANNER */}
      <HireCtaBanner />

      {/* FAQ SECTION */}
      <section className="space-y-6 cv-auto">
        <FaqSection />
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="space-y-6 sm:space-y-8 cv-auto">
        <Reveal className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-white/60 uppercase tracking-wider">
            <Award className="w-4 h-4 text-white" />
            <span>Professional Career Experience</span>
          </div>
          <h2 id="experience-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Work Experience (<span className="text-gradient">SEO &amp; Development</span>)
          </h2>
        </Reveal>

        <div className="space-y-4 sm:space-y-5">
          {EXPERIENCES.map((exp) => (
            <Reveal key={exp.id}>
            <div className="card-3d-interactive p-5 sm:p-6 lg:p-8 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-base sm:text-lg font-extrabold text-white">{exp.role}</h3>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                        PRESENT
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-white/55 mt-1">{exp.company} · {exp.location}</p>
                </div>
                <div className="text-xs font-mono text-white/65 card-3d px-3 py-1.5 self-start whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-[13px] text-white/75">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400/80 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
};
