"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Search, Linkedin, Github, Instagram, Twitter, MessageSquare, ArrowUp, Zap, ArrowRight, ExternalLink } from "lucide-react";
import { CONTACT, SOCIALS, SITE_NAME, AUTHOR } from "@/config/site";
import BackToTopButton from "./BackToTopButton";

const QUICK_NAV = [
  { href: "/", label: "Home" },
  { href: "/rohit-gupta", label: "About Rohit Gupta" },
  { href: "/services", label: "All Services Hub" },
  { href: "/seo-audit", label: "Free SEO Audit" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/testimonials", label: "Client Testimonials" },
  { href: "/blog", label: "Technical Articles" },
  { href: "/contact", label: "Contact Rohit Gupta" },
];

const SERVICE_LINKS = [
  { href: "/services/technical-seo", label: "Technical SEO & Speed" },
  { href: "/services/google-business-profile-seo", label: "Google Business Profile SEO" },
  { href: "/services/on-page-seo", label: "On-Page SEO & Content" },
  { href: "/services/off-page-seo", label: "Off-Page SEO & Link Building" },
  { href: "/services/ecommerce-seo", label: "E-Commerce SEO" },
  { href: "/services/ai-search-optimization", label: "AI Search Optimization" },
  { href: "/services/google-ads", label: "Google Ads & PPC" },
  { href: "/services/web-development", label: "React & Next.js Web Dev" },
];

const LOCAL_LINKS = [
  { href: "/seo-expert-noida", label: "SEO Expert in Noida" },
  { href: "/local-seo-noida", label: "Local SEO Noida" },
  { href: "/google-business-profile-seo-noida", label: "GBP SEO Noida" },
  { href: "/seo-expert-delhi", label: "SEO Expert in Delhi" },
  { href: "/seo-expert-gurgaon", label: "SEO Expert in Gurgaon" },
  { href: "/seo-expert-ghaziabad", label: "SEO Expert in Ghaziabad" },
  { href: "/seo-expert-ayodhya", label: "SEO Expert in Ayodhya" },
];

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isCtaPage =
    pathname?.startsWith("/contact") ||
    pathname?.startsWith("/seo-audit") ||
    pathname?.startsWith("/rohit-gupta");

  return (
    <footer className="relative bg-black border-t border-zinc-800/60 text-zinc-400 pt-14 pb-8 mt-20 isolate">

      {/* Top gradient accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* High-Conversion CTA Banner (Hidden on contact, seo-audit, and about pages) */}
        {!isCtaPage && (
          <div className="relative overflow-hidden card-3d-interactive p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-2xl rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-zinc-950 to-zinc-950">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-2 relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                <Zap className="w-3.5 h-3.5" />
                Free Technical &amp; On-Page SEO Diagnostic
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Ready to Outrank Competitors &amp; Grow Organic Revenue?
              </h3>
              <p className="text-xs sm:text-sm text-white/75 max-w-xl leading-relaxed font-light">
                Get in touch with Rohit Gupta to audit your existing SEO foundation and build a practical roadmap for search growth.
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <Link
                href="/seo-audit"
                className="btn-3d-emerald text-xs font-mono font-black uppercase tracking-wider group"
              >
                Get Free SEO Audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-dark text-xs font-mono font-bold inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* 4 Column Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Link href="/rohit-gupta" className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 text-black font-extrabold flex items-center justify-center text-sm font-mono shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform">
                {AUTHOR.initials}
              </Link>
              <div>
                <Link href="/rohit-gupta" className="text-white font-extrabold tracking-tight text-lg leading-none hover:text-emerald-400 transition-colors">
                  {AUTHOR.name}
                </Link>
                <p className="text-xs text-zinc-500 font-mono mt-1">{AUTHOR.role}</p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              {CONTACT.serving}
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors group w-fit"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-blue-400 transition-colors group w-fit break-all"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{CONTACT.email}</span>
              </a>

              {/* Google Maps Location Button */}
              <a
                href={CONTACT.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                title="View Rohit Gupta Location on Google Maps"
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-950 border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-400 transition-all group"
              >
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-[11px] font-bold flex items-center gap-1 text-white group-hover:text-emerald-400">
                    Open in Google Maps
                    <ExternalLink className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-[10px] text-zinc-400 font-normal">Noida &amp; Ayodhya, UP, India</div>
                </div>
              </a>
            </div>

            {/* Social Media Buttons Bar */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold tracking-wider">Connect &amp; Follow</span>
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp Rohit Gupta"
                  className="icon-btn-3d w-9 h-9 text-emerald-400 hover:text-black hover:bg-emerald-400 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn — Rohit Gupta"
                  className="icon-btn-3d w-9 h-9 text-sky-400 hover:text-black hover:bg-sky-400 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram — Rohit Gupta SEO"
                  className="icon-btn-3d w-9 h-9 text-pink-400 hover:text-black hover:bg-pink-400 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub — Rohit Gupta"
                  className="icon-btn-3d w-9 h-9 text-white hover:text-black hover:bg-white transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider border-b border-white/10 pb-2">
              SEO &amp; Growth Services
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {SERVICE_LINKS.map((nav) => (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-emerald-400 transition-colors flex-shrink-0" />
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations Served */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider border-b border-white/10 pb-2">
              Locations Served
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {LOCAL_LINKS.map((nav) => (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-emerald-400 transition-colors flex-shrink-0" />
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider border-b border-white/10 pb-2">
              Quick Links &amp; Tools
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {QUICK_NAV.map((nav) => (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-emerald-400 transition-colors flex-shrink-0" />
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Rohit Gupta. All Rights Reserved.{" "}
            <span className="text-zinc-600">SEO Expert, Digital Marketing Consultant &amp; Web Developer.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={CONTACT.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-zinc-400"
            >
              <MapPin className="w-3 h-3 text-emerald-400" />
              Google Maps
            </a>
            <span className="text-zinc-800">|</span>
            <Link href="/rohit-gupta" className="hover:text-emerald-400 transition-colors">
              About Rohit
            </Link>
            <span className="text-zinc-800">|</span>
            <BackToTopButton />
          </div>
        </div>

      </div>
    </footer>
  );
};