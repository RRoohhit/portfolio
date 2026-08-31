"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall, FileSearch, ShieldCheck, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/config/site";

export const HireCtaBanner: React.FC = () => {
  return (
    <section aria-labelledby="hire-cta-heading" className="space-y-6">
      <Reveal>
        <div className="relative overflow-hidden card-3d-interactive p-6 sm:p-10 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/50 via-zinc-950 to-zinc-950 shadow-2xl">
          {/* Ambient glows */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-5">
            <div className="space-y-3 text-center sm:text-left sm:max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5" />
                Response within 2 hours · Free 20-min strategy call
              </div>
              <h3 id="hire-cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to <span className="text-gradient">Rank #1 on Google</span> and Grow Your Revenue?
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Book a free 20-minute strategy call. You will leave with a clear picture of why you are not ranking yet — and a practical roadmap to fix it. No pressure, no jargon, no obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact/"
                className="btn-3d-emerald group text-xs font-mono font-black py-4 px-8 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <FileSearch className="w-4 h-4" />
                <span>Claim My Free SEO Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to discuss my website growth. Can we talk?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-dark text-xs font-mono font-bold py-4 px-8 flex items-center justify-center gap-2 hover:text-emerald-400"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Me Now</span>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="btn-3d-dark text-xs font-mono font-bold py-4 px-8 flex items-center justify-center gap-2 hover:text-emerald-400"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>{CONTACT.phone}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-2 text-[11px] font-mono text-white/50 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% white hat, penalty-free
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Free audit worth ₹5,000</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>No lock-in contracts</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default HireCtaBanner;