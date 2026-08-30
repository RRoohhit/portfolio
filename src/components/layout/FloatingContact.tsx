"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, Mail, Sparkles, X, Send, Gauge } from "lucide-react";
import { ROHIT_PROFILE } from "@/data/portfolioData";
import { useAudit } from "@/components/providers/AuditProvider";

const WHATSAPP_URL = `https://wa.me/${ROHIT_PROFILE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Rohit, I saw your SEO & Full Stack website. I would like to discuss a project."
)}`;

export const FloatingContact: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const { openAudit } = useAudit();
  const timerRef = useRef<number | null>(null);

  /* Show floating chat widget after scroll or brief delay */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) setVisible(true);
    };
    const showTimer = window.setTimeout(() => {
      setVisible(true);
    }, 3000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(showTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Auto-collapse if left idle for 15 seconds */
  useEffect(() => {
    if (expanded) {
      timerRef.current = window.setTimeout(() => setExpanded(false), 15000);
    }
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [expanded]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-4 sm:left-6 z-50 flex flex-col items-start gap-3"
      role="region"
      aria-label="Contact options"
    >
      {/* Expanded Quick Chat Options Drawer */}
      {expanded && (
        <div className="w-72 card-3d-interactive p-4 space-y-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Online Now • Quick Support
              </span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close chat menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-white/70 font-mono leading-relaxed">
            Need white-hat SEO, site speed fixes, or web development? Select an instant contact option:
          </p>

          {/* Action Links */}
          <div className="space-y-2.5 font-mono">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d flex items-center gap-3 p-3 text-white hover:border-emerald-400/60 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="icon-3d w-9 h-9 rounded-xl bg-[#25D366]/20 text-[#25D366] shrink-0">
                <MessageCircle className="w-4 h-4 fill-[#25D366]/20" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black uppercase tracking-wider text-white group-hover:text-emerald-300">WhatsApp Chat</div>
                <div className="text-[9px] text-emerald-400 font-semibold">Instant reply on WhatsApp</div>
              </div>
            </a>

            {/* Free SEO Audit — opens audit modal */}
            <button
              onClick={() => {
                setExpanded(false);
                openAudit();
              }}
              className="card-3d w-full flex items-center gap-3 p-3 text-white hover:border-emerald-400/60 transition-all hover:scale-[1.02] active:scale-[0.98] group text-left cursor-pointer"
            >
              <div className="icon-3d w-9 h-9 rounded-xl text-amber-400 shrink-0">
                <Gauge className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black uppercase tracking-wider text-white group-hover:text-amber-300">Free SEO Audit</div>
                <div className="text-[9px] text-amber-400 font-semibold">Get instant website score</div>
              </div>
            </button>

            {/* Direct Phone Call */}
            <a
              href={`tel:${ROHIT_PROFILE.phone}`}
              className="card-3d flex items-center gap-3 p-3 text-white hover:border-emerald-400/60 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="icon-3d w-9 h-9 rounded-xl text-emerald-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black uppercase tracking-wider text-white group-hover:text-emerald-300">Call Directly</div>
                <div className="text-[9px] text-white/70 font-semibold">{ROHIT_PROFILE.phone}</div>
              </div>
            </a>

            {/* Email Inquiry */}
            <a
              href={`mailto:${ROHIT_PROFILE.email}?subject=SEO%20and%20Web%20Project%20Inquiry`}
              className="card-3d flex items-center gap-3 p-3 text-white hover:border-emerald-400/60 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="icon-3d w-9 h-9 rounded-xl text-sky-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-sky-300">Email Inquiry</div>
                <div className="text-[9px] text-white/60 truncate">{ROHIT_PROFILE.email}</div>
              </div>
            </a>
          </div>

        </div>
      )}

      {/* Primary Floating Chat Toggle Button */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? "Close chat options" : "Open quick chat options"}
        aria-expanded={expanded}
        className={`relative w-14 h-14 rounded-full p-0 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 overflow-hidden ${
          expanded
            ? "btn-3d-dark text-white shadow-black/80"
            : "bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 text-black shadow-[0_0_24px_rgba(52,211,153,0.5),0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95"
        }`}
      >
        {/* Gloss sheen overlay */}
        <div className="absolute inset-x-0 top-0 h-[48%] bg-white/25 rounded-t-full pointer-events-none" />

        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-emerald-400/50 animate-ping pointer-events-none" />
        )}
        {expanded ? (
          <X className="w-6 h-6 text-white relative z-10" />
        ) : (
          <MessageCircle className="w-7 h-7 text-black relative z-10 fill-black/10" />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
