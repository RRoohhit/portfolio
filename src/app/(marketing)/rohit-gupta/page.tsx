import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { profilePageGraph, breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT, SOCIALS } from "@/config/site";
import heroPortraitImg from "@/assets/images/rohit-gupta-seo.webp";
import {
  CheckCircle2, ArrowRight, MapPin, Mail, Phone, Code2, Search, Target, Globe, Zap, ShieldCheck, Linkedin, Github, Instagram
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "About Rohit Gupta | SEO Expert & Web Developer in Noida",
  description:
    "About Rohit Gupta: Senior SEO expert, web developer & digital marketing consultant in Noida, India. Specializing in technical SEO, WordPress & growth.",
  path: "/rohit-gupta/",
  keywords: [
    "Rohit Gupta",
    "rohit web developer & seo expert freelancer",
    "rohit digital marketing services",
    "hire seo expert india",
    "hire dedicated seo expert",
    "seo expert in noida",
    "white hat seo services",
    "wordpress development company",
    "Rohit Gupta SEO expert",
    "Technical SEO Specialist",
  ],
});

const CORE_EXPERTISE = [
  "Technical SEO",
  "White Hat SEO",
  "Local SEO",
  "International SEO",
  "On-Page SEO",
  "SEO Audits",
  "Keyword Research",
  "Google Business Profile Optimization",
  "Digital Marketing",
  "Google Ads",
  "React Development",
  "Next.js Development",
  "Full-Stack Web Development",
  "Website Performance Optimization",
];

export default function RohitGuptaPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Rohit Gupta", path: "/rohit-gupta/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-rohit-gupta-breadcrumb")}
      {renderJsonLd(profilePageGraph(), "jsonld-profile-page")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About Rohit Gupta" },
          ]}
        />

        {/* Hero Banner */}
        <header className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Verified Entity Profile Page
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Rohit Gupta — Web Developer &amp; SEO Expert Freelancer
              </h1>

              <p className="text-lg sm:text-xl text-emerald-400 font-mono font-bold">
                Hire SEO Expert in India · Rohit Digital Marketing Services · White Hat SEO Firm
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed pt-2">
                I&apos;m <strong>Rohit Gupta</strong> — a freelance <strong>web developer and SEO expert</strong> based in Noida. I started doing this because I kept seeing small businesses get sold overpriced SEO packages that did nothing. So I built my practice on the opposite idea: do the work myself, explain everything in plain language, and only earn results you can actually measure. I help businesses launch fast WordPress and Next.js websites, fix the things holding their rankings back, and rank on Google the clean, white hat way — no shortcuts that could come back to bite them.
              </p>

              {/* Contact info badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                <a
                  href={CONTACT.phoneHref}
                  className="card-3d inline-flex items-center gap-1.5 px-3 py-1.5 text-white/90 hover:text-emerald-400"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="card-3d inline-flex items-center gap-1.5 px-3 py-1.5 text-white/90 hover:text-emerald-400"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  {CONTACT.email}
                </a>
                <a
                  href="https://maps.app.goo.gl/bjJDqfUJRuJPqHBT6"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="View Rohit Gupta Location on Google Maps (Mamura, Sector 66, Noida)"
                  className="card-3d inline-flex items-center gap-1.5 px-3 py-1.5 text-white/70 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mamura, Sector 66, Noida (Current) · Ayodhya (Permanent) ↗</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-zinc-900">
                <Image
                  src={heroPortraitImg}
                  alt="Rohit Gupta — SEO Expert &amp; Full-Stack Web Developer"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 192px, 224px"
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* Bio Overview */}
        <section className="card-3d-interactive p-6 sm:p-8 space-y-5 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-400" />
            Background &amp; Philosophy
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-light">
            <p>
              I run a small white hat SEO practice — not a factory with dozens of clients you never hear back from. When you work with me, I own your entire organic search channel myself: how well Google can crawl your site, how fast it loads, your schema, your content, and your visibility in AI search answers.
            </p>
            <p>
              On the web development side, I build custom <strong>WordPress sites and WooCommerce stores</strong>, plus headless WordPress on Next.js when a project needs a more modern stack. Every site I ship is built to load fast on real devices — I don't just claim it, I test it.
            </p>
            <p>
              The <strong>Rohit Digital Marketing Services</strong> side handles Google Ads, conversion optimization, and getting you cited by AI search engines. The point is simple: you get one person who actually understands all of it, so you're never stuck coordinating between five different vendors.
            </p>
          </div>
        </section>

        {/* Core Expertise Grid */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              My Core Areas of Expertise
            </h3>
            <p className="text-xs sm:text-sm text-white/60">
              Key competencies across search engine optimization, web architecture, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CORE_EXPERTISE.map((item) => (
              <div
                key={item}
                className="card-3d p-4 flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono font-semibold text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="card-3d-interactive p-6 sm:p-8 space-y-5 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" />
            Professional Experience
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-light">
            <p>
              My experience covers SEO, web development, page speed optimization, keyword research, technical audits, and digital marketing.
            </p>
            <p>
              For every project, I start with the business goal. Then I build a clear strategy around search visibility, site speed, content, and conversions.
            </p>
          </div>
        </section>

        {/* My Approach to SEO & White Hat Philosophy */}
        <section className="card-3d-interactive p-6 sm:p-8 space-y-5 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            My White-Hat SEO Philosophy &amp; Methodology
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-light">
            <p>
              I only work with white hat methods that follow Google&apos;s own rules. I don&apos;t buy links, don&apos;t use private blog networks, and don&apos;t stuff keywords. Those shortcuts might look good for a month, but they cause ranking crashes and long-term damage — and I&apos;d rather earn you a ranking that lasts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "1. Technical Foundation", desc: "Audit and fix crawlability, Core Web Vitals, indexation, sitemaps, canonicals, and schema markup — the boring stuff that quietly decides whether anyone can rank at all." },
                { title: "2. Intent & Keyword Architecture", desc: "Research what your customers are actually typing and why, then map those searches to the right pages instead of cramming every keyword onto one." },
                { title: "3. On-Page & Semantic SEO", desc: "Optimize title tags, headings, internal links, alt-text, and content depth so each page clearly answers the question it's meant to answer." },
                { title: "4. Ethical Authority Building", desc: "Earn contextual links the honest way — digital PR, unlinked mentions, local citations, and genuinely useful content people want to reference." },
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-950 border border-white/10 space-y-1">
                  <h4 className="text-sm font-bold text-emerald-400 font-mono">{step.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Clients Choose Rohit */}
        <section className="card-3d-interactive p-6 sm:p-8 space-y-5 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Why Clients Work With Me
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Developer + SEO Hybrid", desc: "I write clean React, Next.js, and Node.js code myself — so I don't just point out technical problems, I fix them directly in your codebase." },
              { title: "Transparent & Measurable", desc: "No jargon reports or vanity numbers. Every month you see real movements in rankings, organic traffic, and conversions." },
              { title: "100% Penalty-Free", desc: "Because I stay strictly white hat, your site's search standing is protected even through Google's core updates." },
              { title: "Direct Communication", desc: "You talk straight to me — the person doing the work — so nothing gets lost in translation between account managers." },
            ].map((reason, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-950 border border-white/10 space-y-1">
                <h4 className="text-sm font-bold text-white tracking-tight">{reason.title}</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries & Locations Served */}
        <section className="card-3d-interactive p-6 sm:p-8 space-y-5 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Industries &amp; Locations Served
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-white/80">
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider">Industries Served</h3>
              <ul className="space-y-1 text-xs text-white/75">
                <li>• E-Commerce & Retail (Shopify, WooCommerce, Next.js)</li>
                <li>• B2B Tech, SaaS & Enterprise Portals</li>
                <li>• Local Service Businesses (Legal, Clinics, Home Services)</li>
                <li>• Tourism, Hospitality & Heritage Projects</li>
                <li>• Educational Institutions & EdTech Platforms</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider">Locations Served</h3>
              <ul className="space-y-1 text-xs text-white/75">
                <li>• <Link href="/seo-expert-noida/" className="hover:text-emerald-400 underline">Noida & Greater Noida</Link> (Current Base)</li>
                <li>• <Link href="/seo-expert-delhi/" className="hover:text-emerald-400 underline">Delhi NCR</Link> (Connaught Place, South/West Delhi)</li>
                <li>• <Link href="/seo-expert-mumbai/" className="hover:text-emerald-400 underline">Mumbai</Link> & <Link href="/seo-expert-pune/" className="hover:text-emerald-400 underline">Pune</Link> (Maharashtra)</li>
                <li>• <Link href="/seo-expert-bangalore/" className="hover:text-emerald-400 underline">Bengaluru</Link>, <Link href="/seo-expert-hyderabad/" className="hover:text-emerald-400 underline">Hyderabad</Link>, <Link href="/seo-expert-chennai/" className="hover:text-emerald-400 underline">Chennai</Link> & <Link href="/seo-expert-kolkata/" className="hover:text-emerald-400 underline">Kolkata</Link></li>
                <li>• <Link href="/seo-expert-gurgaon/" className="hover:text-emerald-400 underline">Gurgaon</Link>, Ghaziabad, <Link href="/seo-expert-ayodhya/" className="hover:text-emerald-400 underline">Ayodhya</Link> & 100+ Indian cities</li>
                <li>• <Link href="/international-seo-expert/" className="hover:text-emerald-400 underline">International Remote Clients</Link> — USA, UK, UAE, Australia, Canada &amp; beyond</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Verified Profiles Section */}
        <section className="card-3d-interactive p-6 sm:p-8 space-y-4 shadow-2xl">
          <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">Official Professional Profiles</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              LinkedIn Profile
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              Instagram Profile
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold"
            >
              <Github className="w-4 h-4 text-white" />
              GitHub Profile
            </a>
          </div>
        </section>

        {/* Work With Rohit Gupta CTA */}
        <section className="card-3d-interactive p-8 sm:p-10 text-center space-y-5 shadow-2xl border-emerald-500/30">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Work With Rohit Gupta
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            If you need help with SEO, digital marketing or a high-performance website, get in touch to discuss your project and goals.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="btn-3d-emerald text-xs font-mono font-black group"
            >
              Contact Rohit Gupta
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services/"
              className="btn-3d-dark text-xs font-mono font-bold"
            >
              Explore SEO Services
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
