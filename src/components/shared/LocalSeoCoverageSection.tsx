"use client";
import React from "react";
import Link from "next/link";
import { LOCAL_COVERAGE, INTERNATIONAL_COVERAGE, WHY_HIRE } from "@/data/portfolioData";
import { MapPin, ArrowRight, Sparkles, Map, TrendingUp, CheckCircle2, Phone, Globe2 } from "lucide-react";

interface LocalSeoCoverageSectionProps {
  onContact?: () => void;
}

export const LocalSeoCoverageSection: React.FC<LocalSeoCoverageSectionProps> = ({ onContact }) => {
  return (
    <section id="local-seo-coverage" className="space-y-8 scroll-mt-24" aria-label="SEO and Web Development Service Areas">
      
      {/* Heading Block */}
      <div className="card-3d-interactive p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Based in Noida &amp; Ayodhya · Serving Everywhere — Pan India + Worldwide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
            SEO &amp; Web Development Across <span className="text-emerald-400">100+ Indian Cities &amp; Worldwide</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Rohit Gupta is not limited to Noida or Delhi — he works with businesses in every major Indian city (Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Lucknow &amp; 100+ more) and with remote international clients in the USA, UK, UAE, Canada, Australia, Singapore and beyond — building fast web applications and implementing ethical, long-term search growth strategies anywhere in the world.
          </p>
        </div>

        {/* Quick "Why Hire" proof strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 mt-2">
          {WHY_HIRE.map((item, idx) => (
            <div key={idx} className="card-3d p-3 text-center space-y-0.5">
              <div className="text-lg sm:text-2xl font-black text-emerald-400 font-mono leading-none">{item.metric}</div>
              <div className="text-[9px] text-white/60 font-mono uppercase tracking-wide leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Pan-India Service Regions */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-white/60 uppercase tracking-wider">
          <Map className="w-4 h-4 text-emerald-400" />
          <span>Pan India Presence — Remote &amp; On-Site Available</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
          Serving Businesses Across Every Major Indian Market
        </h3>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-3xl">
          From Delhi NCR to Mumbai, Bengaluru, Hyderabad, Chennai, Pune and Kolkata — get the same senior SEO specialist, remotely or on-site, with zero location bias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {LOCAL_COVERAGE.map((item, idx) => (
          <div
            key={idx}
            className="card-3d-interactive p-5 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="icon-3d w-10 h-10 rounded-xl text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">{item.heading}</h4>
                    <span className="text-[10px] font-mono text-white/50 uppercase">{item.region}</span>
                  </div>
                </div>
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>

              <p className="text-xs text-white/75 leading-relaxed font-light">{item.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {(item.tags as readonly string[]).slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/55">{tag}</span>
                ))}
              </div>
            </div>

            <Link
              href="/services/local-seo/"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:underline pt-2 border-t border-white/5"
            >
              <span>Explore Local SEO Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      {/* ===== International Markets */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center gap-2 text-xs font-mono text-white/60 uppercase tracking-wider">
          <Globe2 className="w-4 h-4 text-cyan-400" />
          <span>International &amp; Remote — Worldwide Reach</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
          Global SEO &amp; Web Development for International Brands
        </h3>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-3xl">
          Hire a senior Indian SEO expert remotely — cost-effective &amp; timezone-friendly (IST &amp; flexible hours) — to rank your business on Google in the USA, UK, UAE, Australia, Singapore and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {INTERNATIONAL_COVERAGE.map((item, idx) => (
          <div
            key={idx}
            className="card-3d-interactive p-5 space-y-3 flex flex-col justify-between border-cyan-500/10"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="icon-3d w-10 h-10 rounded-xl text-cyan-400 shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">{item.heading}</h4>
                    <span className="text-[10px] font-mono text-white/50 uppercase">{item.region}</span>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              </div>

              <p className="text-xs text-white/75 leading-relaxed font-light">{item.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {(item.tags as readonly string[]).slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/15 text-[9px] font-mono text-cyan-200/60">{tag}</span>
                ))}
              </div>
            </div>

            <Link
              href="/services/international-seo/"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:underline pt-2 border-t border-white/5"
            >
              <span>Explore International SEO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      {/* ===== Hiring intent + CTA band */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-3d-interactive p-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Specialized Roles &amp; Engagements</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {["SEO Consultant", "Technical SEO Specialist", "Full-Stack Web Developer", "Digital Marketing Consultant", "Google Business Profile Specialist", "Next.js & React Developer"].map((role) => (
              <li key={role} className="card-3d flex items-center gap-2 p-2.5 text-xs text-white/85">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-3d-interactive p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
              Discuss Your Website &amp; Organic Search Goals
            </h3>
            <p className="text-xs text-white/75 leading-relaxed font-light">
              Get in touch with Rohit Gupta to review your website&apos;s technical health, local SEO visibility, and digital growth roadmap — whether your business is in Noida, Mumbai, the USA or anywhere else. Hindi &amp; English support.
            </p>
          </div>
          <Link
            href="/contact/"
            className="btn-3d-emerald self-start text-xs font-mono font-black group"
          >
            <Phone className="w-4 h-4" />
            <span>Get Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};