import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { profilePageGraph, breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT, SOCIALS } from "@/config/site";
import heroPortraitImg from "@/assets/images/rohit-gupta-seo.webp";
import {
  CheckCircle2, ArrowRight, MapPin, Mail, Phone, Code2, Search, Target, Globe, Zap, ShieldCheck, Linkedin, Github, Twitter
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Rohit Gupta — SEO Expert, Digital Marketing Consultant & Web Developer",
  description:
    "About Rohit Gupta — SEO specialist, digital marketing consultant and full-stack web developer focused on technical SEO, white hat practices, Next.js development and online growth.",
  path: "/rohit-gupta/",
  keywords: [
    "Rohit Gupta",
    "Rohit Gupta SEO",
    "Rohit Gupta SEO expert",
    "Rohit Gupta digital marketing",
    "Rohit Gupta web developer",
    "About Rohit Gupta",
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
                About Rohit Gupta
              </h1>

              <p className="text-lg sm:text-xl text-emerald-400 font-mono font-bold">
                SEO Expert, Digital Marketing Consultant &amp; Full-Stack Web Developer
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed pt-2">
                I’m <strong>Rohit Gupta</strong>, an SEO specialist and full-stack web developer focused on helping businesses improve their search visibility, website performance and digital growth.
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
                  alt="Rohit Gupta — SEO Expert & Full-Stack Web Developer"
                  fill
                  sizes="224px"
                  className="object-cover object-top"
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
              My work combines technical SEO, white hat SEO, local SEO, international SEO, on-page optimization, keyword research, Google Business Profile optimization and modern web development.
            </p>
            <p>
              On the development side, I work with technologies including React.js, Next.js, JavaScript, TypeScript, Node.js, databases and modern web performance practices.
            </p>
            <p>
              My approach is focused on building websites and SEO strategies that are technically sound, useful to users and designed for sustainable organic growth.
            </p>
          </div>
        </section>

        {/* Core Expertise Grid */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              My Core Areas of Expertise
            </h2>
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
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" />
            Professional Experience
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-light">
            <p>
              My professional experience includes SEO, web development, website performance optimization, search strategy, keyword research, technical audits and digital marketing.
            </p>
            <p>
              For every project, I focus on understanding the business objective first and then developing a practical strategy around search visibility, technical performance, content, user experience and conversions.
            </p>
          </div>
        </section>

        {/* My Approach to SEO */}
        <section className="card-3d-interactive p-6 sm:p-8 space-y-5 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            My Approach to SEO
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-light">
            <p>
              I focus primarily on ethical, white hat SEO practices. My process includes technical analysis, search-intent research, content optimization, internal linking, structured data, website performance and legitimate authority building.
            </p>
          </div>
        </section>

        {/* Verified Profiles Section */}
        <section className="card-3d-interactive p-6 sm:p-8 space-y-4 shadow-2xl">
          <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider">Official Professional Profiles</h2>
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
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Work With Rohit Gupta
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            If you need help with SEO, digital marketing or a high-performance website, get in touch to discuss your project and goals.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-3d-emerald text-xs font-mono font-black group"
            >
              Contact Rohit Gupta
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
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
