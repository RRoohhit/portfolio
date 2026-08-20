"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Zap,
} from "lucide-react";

/* ── Constants (module-level — not recreated on every render) ── */

const TAB_PATHS: Record<string, string> = {
  home: "/",
  "rohit-gupta": "/rohit-gupta/",
  services: "/services/",
  "seo-audit": "/seo-audit/",
  "case-studies": "/case-studies/",
  projects: "/projects/",
  "seo-tools": "/seo-tools/",
  "seo-analyzer": "/seo-analyzer/",
  "ai-lab": "/ai-lab/",
  blog: "/blog/",
  contact: "/contact/",
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

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "rohit-gupta", label: "About" },
  { id: "services", label: "Services" },
  { id: "seo-audit", label: "SEO Audit" },
  { id: "case-studies", label: "Case Studies" },
  { id: "seo-tools", label: "SEO Tools" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const categorizedNav: NavCategory[] = [
  {
    category: "Core Pages",
    items: [
      { id: "home", label: "Home Overview", icon: Home, desc: "Featured Highlights & Expertise" },
      { id: "seo-audit", label: "Free SEO Audit", icon: Zap, desc: "Technical & On-Page SEO Analysis", badge: "Free" },
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [glider, setGlider] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  /* Scroll listener */
  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 16);
    setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Measure active item rect for 100% centered animated glider */
  useEffect(() => {
    const el = itemRefs.current[activeTab];
    const container = navRef.current;
    if (el && container) {
      const elRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setGlider({
        left: elRect.left - containerRect.left,
        top: elRect.top - containerRect.top,
        width: elRect.width,
        height: elRect.height,
      });
    }
  }, [activeTab, mounted]);

  /* Close menu on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  /* Close menu on scroll past threshold */
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
      {/* ══════════════════════════ HEADER ══════════════════════════ */}
      <header
        suppressHydrationWarning
        className={[
          "fixed inset-x-0 top-0 z-50 h-[68px] transition-all duration-500 ease-out",
          mounted && scrolled
            ? [
              "bg-[#050505]/88 backdrop-blur-2xl",
              "border-b border-white/[0.06]",
              "shadow-[0_1px_0_0_rgba(255,255,255,0.04),0_16px_64px_-8px_rgba(0,0,0,0.85),0_4px_24px_-4px_rgba(52,211,153,0.05)]",
            ].join(" ")
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        {/* 3D rim lights — top edge layered glow */}
        <div
          className={[
            "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent",
            "transition-opacity duration-700",
            mounted && scrolled ? "opacity-100" : "opacity-20",
          ].join(" ")}
        />
        <div
          className={[
            "absolute top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent",
            "transition-opacity duration-700",
            mounted && scrolled ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Ambient glow orb */}
        {mounted && scrolled && (
          <div className="pointer-events-none absolute left-1/3 -top-8 w-56 h-20 bg-emerald-500/[0.05] blur-3xl rounded-full" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4 relative">

          {/* ── Brand Logo (Image Logo from public/) ── */}
          <Link
            href="/"
            aria-label="Rohit Gupta SEO Specialist Homepage"
            onClick={handleMobileClose}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl flex-shrink-0"
          >
            {/* 3D Image Logo badge */}
            <div className="relative w-10 h-10 flex-shrink-0">
              {/* Shadow / depth layer */}
              <div className="absolute inset-0 rounded-xl bg-emerald-700/60 translate-y-[3px] blur-[3px]" />
              {/* Main face frame */}
              <div
                className={[
                  "relative w-10 h-10 rounded-xl overflow-hidden p-0.5 select-none",
                  "bg-gradient-to-br from-emerald-300 via-emerald-400 to-teal-500",
                  "shadow-[0_4px_16px_rgba(52,211,153,0.35),0_1px_0_rgba(255,255,255,0.15)_inset]",
                  "group-hover:shadow-[0_8px_32px_rgba(52,211,153,0.55),0_1px_0_rgba(255,255,255,0.2)_inset]",
                  "group-hover:scale-105 group-hover:-translate-y-0.5",
                  "transition-all duration-300 flex items-center justify-center",
                ].join(" ")}
              >
                <Image
                  src="/apple-touch-icon.png"
                  alt="Rohit Gupta Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover rounded-[10px]"
                />
                {/* Gloss top sheen */}
                <div className="absolute inset-x-0 top-0 h-[45%] bg-white/20 rounded-t-xl blur-[1px] pointer-events-none" />
                {/* Hover ring */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-emerald-300/30 transition-all duration-300" />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <span className="font-bold tracking-tight text-base sm:text-lg uppercase text-white group-hover:text-emerald-300 transition-colors duration-200 leading-none">
                Rohit Gupta
              </span>
              <span className="hidden sm:flex items-center gap-1 mt-[3px] px-2 py-[2px] rounded-md bg-white/[0.04] border border-white/[0.08] text-[9px] uppercase tracking-widest text-emerald-300/70 font-mono whitespace-nowrap">
                SEO Architect&nbsp;<span className="text-white/20">•</span>&nbsp;Full Stack
              </span>
            </div>
          </Link>

          {/* ── Desktop Floating Pill Navigation ── */}
          <nav className="hidden lg:flex items-center flex-1 justify-center" aria-label="Main navigation">
            {/* 3D pill container */}
            <div
              ref={navRef}
              className={[
                "relative flex items-center h-[36px] p-1",
                "bg-white/[0.04] border border-white/[0.08]",
                "backdrop-blur-xl rounded-full",
                /* Inset top highlight + bottom shadow = 3D card depth */
                "shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_-1px_0_0_rgba(0,0,0,0.5)_inset,0_8px_32px_-4px_rgba(0,0,0,0.6),0_2px_8px_-2px_rgba(0,0,0,0.4)]",
                "transition-all duration-500",
              ].join(" ")}
            >
              {/* Animated emerald glider — 100% mathematically centered */}
              {mounted && glider && (
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    left: glider.left,
                    top: glider.top,
                    width: glider.width,
                    height: glider.height,
                    background: "linear-gradient(135deg, #34d399 0%, #2dd4bf 100%)",
                    boxShadow:
                      "0 0 24px rgba(52,211,153,0.45), 0 2px 8px rgba(52,211,153,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
                    transition:
                      "left 0.32s cubic-bezier(0.34,1.56,0.64,1), top 0.32s cubic-bezier(0.34,1.56,0.64,1), width 0.32s cubic-bezier(0.34,1.56,0.64,1), height 0.32s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                />
              )}

              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                const isHov = hoveredItem === item.id;
                return (
                  <Link
                    key={item.id}
                    href={TAB_PATHS[item.id]}
                    ref={(el) => { itemRefs.current[item.id] = el; }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={[
                      "relative inline-flex items-center justify-center h-7 px-3.5",
                      "text-[10px] font-bold uppercase tracking-widest leading-none rounded-full",
                      "transition-all duration-150 whitespace-nowrap select-none",
                      isActive
                        ? "text-black"
                        : isHov
                          ? "text-white/90 bg-white/[0.05]"
                          : "text-white/55 hover:text-white/85",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="relative z-10 inline-flex items-center justify-center leading-none mt-[-0.5px]">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* ── Right: 3D CTA Button ── */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "group relative hidden lg:inline-flex items-center gap-2",
                "h-[36px] px-4 rounded-full overflow-hidden",
                "text-[10px] uppercase tracking-wider font-black font-mono whitespace-nowrap",
                "bg-gradient-to-r from-emerald-500 to-teal-400 text-black",
                "shadow-[0_0_20px_rgba(52,211,153,0.3),0_2px_8px_rgba(52,211,153,0.25),inset_0_1px_0_rgba(255,255,255,0.25)]",
                "hover:shadow-[0_0_36px_rgba(52,211,153,0.55),0_4px_16px_rgba(52,211,153,0.35)]",
                "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                "transition-all duration-200",
              ].join(" ")}
            >
              {/* Gloss top sheen */}
              <div className="absolute inset-x-0 top-0 h-[48%] bg-white/18 rounded-t-full pointer-events-none" />
              <MessageSquare className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Instant Chat</span>
              <Zap className="w-3 h-3 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={[
              "lg:hidden p-2.5 rounded-xl border",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
              "z-50 flex-shrink-0 transition-all duration-200",
              mobileMenuOpen
                ? "bg-emerald-400 text-black border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.45)]"
                : "bg-white/[0.04] text-white border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2]",
            ].join(" ")}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ══════════════════════════ MOBILE MENU ══════════════════════════ */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="lg:hidden fixed inset-0 z-[100] bg-[#050505]/98 backdrop-blur-3xl overflow-y-auto mobile-menu-enter"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}
        >
          {/* Ambient mesh */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/[0.06] rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-teal-400/[0.04] rounded-full blur-3xl" />
          </div>

          <div className="flex flex-col min-h-full p-5 sm:p-6 max-w-lg mx-auto w-full pt-4 relative z-10">

            {/* Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9">
                  <div className="absolute inset-0 rounded-xl bg-emerald-700/50 translate-y-0.5 blur-[3px]" />
                  <div className="relative w-9 h-9 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-emerald-300 via-emerald-400 to-teal-500 shadow-md select-none flex items-center justify-center">
                    <Image
                      src="/apple-touch-icon.png"
                      alt="Rohit Gupta Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover rounded-[8px]"
                    />
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-white/20 rounded-t-xl" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold tracking-tight text-base uppercase text-white font-mono leading-tight">Rohit Gupta</span>
                  <span className="text-[10px] text-emerald-400 font-mono uppercase font-bold">SEO Architect &amp; Full Stack</span>
                </div>
              </div>
              <button
                onClick={handleMobileClose}
                className="p-2.5 rounded-xl bg-white/[0.05] text-white border border-white/[0.12] hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Available Badge */}
            <div className="py-3.5 px-4 my-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl flex items-center justify-between text-xs font-mono shadow-lg">
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
                          className={[
                            "rounded-2xl border transition-all overflow-hidden",
                            isActive
                              ? "bg-white text-black border-white shadow-2xl shadow-white/10"
                              : "bg-white/[0.03] text-white border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.055]",
                          ].join(" ")}
                        >
                          <Link
                            href={TAB_PATHS[item.id]}
                            onClick={handleMobileClose}
                            className="w-full p-4 text-left flex items-center justify-between gap-3 group"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={[
                                  "p-2.5 rounded-xl border shrink-0",
                                  isActive
                                    ? "bg-black text-emerald-400 border-black/20"
                                    : "bg-white/[0.05] border-white/[0.08] text-emerald-400 group-hover:bg-emerald-500/10",
                                ].join(" ")}
                              >
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm font-bold font-mono uppercase tracking-wide">{item.label}</span>
                                  {item.badge && (
                                    <span
                                      className={[
                                        "px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase",
                                        isActive
                                          ? "bg-black text-emerald-400"
                                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
                                      ].join(" ")}
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
                              className={`w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1 ${isActive ? "text-black/50" : "text-white/25"}`}
                            />
                          </Link>
                          {item.subHighlights && (
                            <div className={`px-4 pb-3 flex flex-wrap gap-1.5 ${isActive ? "border-t border-zinc-200 pt-2" : "border-t border-white/[0.06] pt-2"}`}>
                              {item.subHighlights.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={TAB_PATHS[item.id]}
                                  onClick={handleMobileClose}
                                  className={[
                                    "px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase transition-all",
                                    isActive
                                      ? "bg-zinc-100 text-zinc-700 font-bold hover:bg-zinc-200"
                                      : "bg-white/[0.04] text-white/55 border border-white/[0.08] hover:text-white hover:bg-white/10",
                                  ].join(" ")}
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

            {/* Bottom CTA */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <p className="text-[10px] font-mono uppercase text-white/30 font-bold tracking-widest">Get in Touch</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileClose}
                  className="relative flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:opacity-90 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[46%] bg-white/18 rounded-t-xl pointer-events-none" />
                  <MessageSquare className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Instant Chat</span>
                </a>
                <a
                  href={CONTACT.phoneHref}
                  onClick={handleMobileClose}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.04] text-white border border-white/[0.12] text-xs font-mono font-bold uppercase tracking-wider hover:bg-white/[0.08] hover:border-white/20 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  Call Now
                </a>
              </div>
              <Link
                href="/contact/"
                onClick={handleMobileClose}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.03] text-white/70 border border-white/[0.08] text-xs font-mono font-bold hover:bg-white/[0.07] hover:text-white transition-all"
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
