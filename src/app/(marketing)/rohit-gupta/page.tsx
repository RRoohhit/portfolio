import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { profilePageGraph, breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT, SOCIALS } from "@/config/site";
import heroPortraitImg from "@/assets/images/rohit-gupta-seo.webp";
import {
  CheckCircle2, ArrowRight, MapPin, Mail, Phone, Code2, Search, Target, Globe, Zap, ShieldCheck, Linkedin, Github, Twitter, Instagram
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
                I&apos;m <strong>Rohit Gupta</strong> — a professional <strong>web developer &amp; SEO expert freelancer</strong> based in Noida, India. I help businesses hire dedicated SEO expertise, build lightning-fast WordPress and Next.js websites, and achieve #1 Google rankings through 100% White Hat SEO services.
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
                <div className="card-3d inline-flex items-center gap-1.5 px-3 py-1.5 text-white/70">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Noida, UP (Current) · Ayodhya, UP (Permanent)</span>
                </div>
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
              I run a boutique <strong>White Hat SEO firm</strong> and freelance agency. Clients in India, the UK, the UAE, and the US <strong>hire me as their dedicated SEO expert</strong>. I own their full organic search channel — crawlability, Core Web Vitals, schema, content, and AI Overview citations.
            </p>
            <p>
              On the web development side, I build custom <strong>WordPress sites and WooCommerce stores</strong>. I also build Headless WordPress with Next.js. All sites load in under 1.2 seconds on real Chrome data.
            </p>
            <p>
              <strong>Rohit Digital Marketing Services</strong> also covers Google Ads PPC, conversion rate optimization (CRO), and AI search visibility (AEO/GEO). You get one point of contact for all digital growth.
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
              I focus only on White-Hat SEO that follows Google&apos;s Search Essentials. I do not buy links, use private blog networks (PBNs), or stuff keywords. These shortcuts cause ranking drops and long-term penalties.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "1. Technical Foundation", desc: "Audit and fix crawlability, Core Web Vitals, indexation, sitemaps, canonicals, and schema markup." },
                { title: "2. Intent & Keyword Architecture", desc: "Research exact buyer & user intent, map keywords to specific landing pages, and structure content logically." },
                { title: "3. On-Page & Semantic SEO", desc: "Optimize title tags, H1-H6 headers, internal link equity, alt-text, entities, and rich content depth." },
                { title: "4. Ethical Authority Building", desc: "Earn contextual dofollow links via digital PR, unlinked brand mentions, local citations, and resource outreach." },
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
              { title: "Developer + SEO Hybrid", desc: "I write clean React/Next.js/Node.js code myself — meaning I don't just point out technical errors, I fix them directly in the codebase." },
              { title: "Transparent & Measurable", desc: "No opaque reporting or fluff metrics. Monthly reports track ranking movements, organic traffic growth, impressions, and conversions." },
              { title: "100% Penalty-Free Guarantee", desc: "Strict adherence to White-Hat standards means your website's search equity is protected across Google core updates." },
              { title: "Direct Communication", desc: "You work directly with me — the technical specialist executing the work — ensuring zero miscommunication." },
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
            <a
              href={SOCIALS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold"
            >
              <Twitter className="w-4 h-4 text-sky-400" />
              X (Twitter) Profile
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
