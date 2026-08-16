"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/config/site";
import {
  Phone,
  Menu,
  X,
  Home,
  FolderGit2,
  Gauge,
  Sparkles,
  BookOpen,
  Mail,
  ChevronRight,
  Network,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

/* ── Constants (module-level — not recreated on every render) ── */

const TAB_PATHS: Record<string, string> = {
  home: "/",
  projects: "/projects",
  "seo-tools": "/seo-tools",
  "seo-analyzer": "/seo-analyzer",
  "ai-lab": "/ai-lab",
  blog: "/blog",
  contact: "/contact",
};

const tabFromPath = (path: string): string => {
  if (path === "/" || path === "") return "home";
  const match = path.match(/^\/([a-z-]+)/);
  return match ? match[1] : "home";
};

/* ── Types ── */

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  badge?: string;
  subHighlights?: string[];
}

interface NavCategory {
  category: string;
  items: NavItem[];
}

/* ── Static nav data ── */

const categorizedNav: NavCategory[] = [
  {
    category: "Core Pages",
    items: [
      { id: "home", label: "Home Overview", icon: Home, desc: "Featured Highlights & Expertise" },
      { id: "projects", label: "Featured Projects", icon: FolderGit2, desc: "Case Studies & Live Demos" },
      { id: "contact", label: "Contact & Hire", icon: Mail, desc: "Schedule Audit or Hire Specialist" },
    ],
  },
  {
    category: "SEO & Technical Suite",
    items: [
      {
        id: "seo-tools",
        label: "SEO Tools & Directives",
        icon: Gauge,
        desc: "14 Directives, Google SERP & Schema, PDF Reports",
        badge: "Updated",
        subHighlights: ["SERP & Schema Generator", "Quick PDF Health Report", "14 Technical Directives"],
      },
      {
        id: "seo-analyzer",
        label: "SEO Analyzer & Mind Map",
        icon: Network,
        desc: "Interactive SEO analysis with visual mind mapping",
        badge: "New",
        subHighlights: ["Visual Mind Map", "Content Gap Analysis", "Internal Linking"],
      },
      {
        id: "ai-lab",
        label: "AI Lab & Density Tracker",
        icon: Sparkles,
        desc: "Keyword Density Engine & Gemini AI SEO Assistant",
        badge: "AI",
        subHighlights: ["AI Density Tracker", "Gemini SEO Optimizer"],
      },
    ],
  },
  {
    category: "Knowledge & Articles",
    items: [
      { id: "blog", label: "SEO Blog & Insights", icon: BookOpen, desc: "Technical Articles & Case Studies" },
    ],
  },
];

/* ── Navbar ── */

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const activeTab = tabFromPath(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* Scroll listener */
  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  /* Close menu on scroll past threshold (UX improvement) */
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onScroll = () => {
      if (window.scrollY > 80) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen]);

  const handleMobileClose = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        suppressHydrationWarning
        className={`h-16 fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          mounted && scrolled
            ? "bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Animated top accent hairline */}
        <div
          className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent transition-opacity duration-500 ${
            mounted && scrolled ? "opacity-100" : "opacity-25"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

          {/* Brand Logo */}
          <Link
            href="/"
            onClick={handleMobileClose}
            className="flex items-center gap-2.5 group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg flex-shrink-0"
          >
            <div className="relative w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-300 text-black font-black flex items-center justify-center rounded-xl text-sm italic shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-400/45 group-hover:scale-105 transition-all duration-200">
              RG
              {/* Subtle ring on hover */}
              <div className="absolute inset-0 rounded-xl ring-2 ring-emerald-400/0 group-hover:ring-emerald-400/40 transition-all duration-200" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold tracking-tight text-base sm:text-lg uppercase text-white group-hover:text-emerald-300 transition-colors leading-none">
                Rohit Gupta
              </span>
              <span className="hidden sm:block mt-0.5 px-2 py-[2px] rounded-md bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-emerald-300/75 font-mono whitespace-nowrap">
                SEO Architect & Full Stack
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Pill */}
          <nav className="hidden lg:flex items-center flex-1 justify-center" aria-label="Main navigation">
            <div className="relative flex items-center gap-0.5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full p-1.5 shadow-lg shadow-black/30">
              {[
                { id: "home", label: "Home" },
                { id: "projects", label: "Projects" },
                { id: "seo-tools", label: "SEO Tools" },
                { id: "seo-analyzer", label: "SEO Analyzer" },
                { id: "ai-lab", label: "AI Lab" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <Link
                    key={item.id}
                    href={TAB_PATHS[item.id]}
                    className={`relative px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest rounded-full transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "text-black bg-gradient-to-r from-emerald-400 to-teal-300 shadow-md shadow-emerald-500/35"
                        : "text-white/65 hover:text-white hover:bg-white/8"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <a
              href={CONTACT.phoneHref}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 border border-white/15 text-[10px] uppercase tracking-tighter rounded-full text-white/75 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all font-mono whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              {CONTACT.phone}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 z-50 flex-shrink-0 ${
              mobileMenuOpen
                ? "bg-emerald-400 text-black border-emerald-400"
                : "bg-white/5 text-white border-white/20 hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Full-Screen Mobile Menu ── */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="lg:hidden fixed inset-0 z-[100] bg-zinc-950/98 backdrop-blur-3xl overflow-y-auto mobile-menu-enter"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}
        >
          <div className="flex flex-col min-h-full p-5 sm:p-6 max-w-lg mx-auto w-full pt-4">

            {/* Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-300 text-black font-black flex items-center justify-center rounded-xl text-sm italic shadow-md">
                  RG
                </div>
                <div className="flex flex-col">
                  <span className="font-bold tracking-tight text-base uppercase text-white font-mono">
                    Rohit Gupta
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono uppercase font-bold">SEO Architect & Full Stack Dev</span>
                </div>
              </div>
              <button
                onClick={handleMobileClose}
                className="p-2.5 rounded-xl bg-white/8 text-white border border-white/15 hover:bg-emerald-400 hover:text-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Available Badge */}
            <div className="py-3.5 px-4 my-4 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-between text-xs font-mono shadow-lg">
              <div className="flex items-center gap-2">
                <span className="relative flex">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute opacity-75" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative" />
                </span>
                <span className="text-white font-bold">Ayodhya • Delhi NCR</span>
              </div>
              <span className="text-[10px] text-emerald-300 font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35">
                Available for Hire
              </span>
            </div>

            {/* Categorized Navigation */}
            <div className="space-y-5 flex-1">
              {categorizedNav.map((cat, catIdx) => (
                <div key={catIdx} className={`space-y-2 mobile-menu-item mobile-menu-item-${catIdx + 1}`}>
                  <div className="text-[10px] font-mono font-bold uppercase text-white/35 tracking-widest pl-1">
                    {cat.category}
                  </div>

                  <div className="space-y-2">
                    {cat.items.map((item) => {
                      const isActive = activeTab === item.id;
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.id}
                          className={`rounded-2xl border transition-all overflow-hidden ${
                            isActive
                              ? "bg-white text-black border-white shadow-2xl shadow-white/10"
                              : "bg-zinc-900/70 text-white border-white/10 hover:border-white/20 hover:bg-zinc-900"
                          }`}
                        >
                          <Link
                            href={TAB_PATHS[item.id]}
                            onClick={handleMobileClose}
                            className="w-full p-4 text-left flex items-center justify-between gap-3 group"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2.5 rounded-xl border shrink-0 ${
                                  isActive
                                    ? "bg-black text-emerald-400 border-black/20"
                                    : "bg-white/5 border-white/10 text-emerald-400 group-hover:bg-emerald-500/10"
                                }`}
                              >
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm font-bold font-mono uppercase tracking-wide">
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span
                                      className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase ${
                                        isActive
                                          ? "bg-black text-emerald-400"
                                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                      }`}
                                    >
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className={`text-xs font-sans mt-0.5 leading-relaxed ${isActive ? "text-zinc-500" : "text-white/50"}`}>
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                            <ChevronRight
                              className={`w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1 ${
                                isActive ? "text-black/50" : "text-white/25"
                              }`}
                            />
                          </Link>

                          {/* Sub-highlights */}
                          {item.subHighlights && (
                            <div
                              className={`px-4 pb-3 flex flex-wrap gap-1.5 ${
                                isActive ? "border-t border-zinc-200 pt-2" : "border-t border-white/5 pt-2"
                              }`}
                            >
                              {item.subHighlights.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={TAB_PATHS[item.id]}
                                  onClick={handleMobileClose}
                                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase transition-all ${
                                    isActive
                                      ? "bg-zinc-100 text-zinc-700 font-bold hover:bg-zinc-200"
                                      : "bg-white/5 text-white/55 border border-white/10 hover:text-white hover:bg-white/10"
                                  }`}
                                >
                                  • {sub}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Bottom CTA (Contact options) ── */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <p className="text-[10px] font-mono uppercase text-white/30 font-bold tracking-widest">
                Get in Touch
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={CONTACT.phoneHref}
                  onClick={handleMobileClose}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileClose}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/8 text-white border border-white/15 text-xs font-mono font-bold uppercase tracking-wider hover:bg-white/12 hover:border-white/25 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  WhatsApp
                </a>
              </div>
              <Link
                href="/contact"
                onClick={handleMobileClose}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 text-white/70 border border-white/10 text-xs font-mono font-bold hover:bg-white/10 hover:text-white transition-all"
              >
                <ArrowRight className="w-4 h-4 text-emerald-400" />
                View full contact page
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
};