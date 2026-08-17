"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Search, Linkedin, Github, MessageSquare, ArrowUp, Zap, ArrowRight } from "lucide-react";
import { CONTACT, SOCIALS, SITE_NAME, AUTHOR } from "@/config/site";
import BackToTopButton from "./BackToTopButton";

const QUICK_NAV = [
  { href: "/", label: "Home" },
  { href: "/rohit-gupta", label: "About Rohit Gupta" },
  { href: "/services/seo", label: "SEO Services" },
  { href: "/services/technical-seo", label: "Technical SEO" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Technical Articles" },
  { href: "/contact", label: "Contact Rohit Gupta" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-zinc-800/60 text-zinc-400 pt-14 pb-8 mt-20">

      {/* Top gradient accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* CTA band */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 relative">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
              <Zap className="w-3 h-3" />
              SEO &amp; Web Development Consultation
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight">
              Ready to Improve Organic Visibility &amp; Website Performance?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Get in touch with Rohit Gupta to discuss technical SEO, search strategy, or modern full-stack web development.
            </p>
          </div>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest shadow-lg shadow-emerald-500/25 hover:bg-emerald-300 transition-all active:scale-[0.98] shrink-0"
          >
            Get Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Top Grid — responsive 1 → 2 → 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Col 1: Bio */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/rohit-gupta" className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-300 text-black font-extrabold flex items-center justify-center text-sm font-mono shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform">
                {AUTHOR.initials}
              </Link>
              <div>
                <Link href="/rohit-gupta" className="text-white font-extrabold tracking-tight text-lg leading-none hover:text-emerald-400 transition-colors">
                  {AUTHOR.name}
                </Link>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">{AUTHOR.role}</p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              {CONTACT.serving}
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-xs font-mono">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors group w-fit"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors group w-fit break-all"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>Noida, UP (Current) · Ayodhya, UP (Permanent)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-emerald-400 hover:border-emerald-400 hover:scale-110 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-sky-400 hover:border-sky-400 hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-white hover:border-white hover:scale-110 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-mono">
              {QUICK_NAV.map((nav) => (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-400 transition-colors flex-shrink-0" />
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Location & Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">Experience &amp; Address</h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-1">
                <p className="text-zinc-300 font-mono font-bold text-[11px]">Current Location</p>
                <p className="text-zinc-400 font-mono text-[10px]">Gali No. 7, Block M, Mamura, Sector 66, Noida, UP 201309</p>
              </div>
              <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-1">
                <p className="text-zinc-300 font-mono font-bold text-[11px]">Permanent Address</p>
                <p className="text-zinc-400 font-mono text-[10px]">Ayodhya, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-600">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Rohit Gupta. All Rights Reserved.{" "}
            <span className="text-zinc-700">SEO Expert, Digital Marketing Consultant &amp; Full-Stack Web Developer.</span>
          </div>
          <div className="flex items-center gap-4">
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