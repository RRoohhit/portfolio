"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, Mail, Sparkles, X, Send } from "lucide-react";
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
        <div className="w-72 bg-zinc-950/95 border border-white/20 rounded-3xl p-4 space-y-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          
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
          <div className="space-y-2 font-mono">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#25D366] text-black shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-xl bg-black/15 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-black" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black uppercase tracking-wider">WhatsApp Chat</div>
                <div className="text-[9px] text-black/75 font-semibold">Instant reply on WhatsApp</div>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${ROHIT_PROFILE.phone}`}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white text-black shadow-lg hover:bg-zinc-100 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-xl bg-black text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black uppercase tracking-wider">Call Directly</div>
                <div className="text-[9px] text-zinc-600 font-semibold">{ROHIT_PROFILE.phone}</div>
              </div>
            </a>

            {/* Email Inquiry */}
            <a
              href={`mailto:${ROHIT_PROFILE.email}?subject=SEO%20and%20Web%20Project%20Inquiry`}
              className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900 border border-white/15 text-white shadow-lg hover:bg-zinc-850 hover:border-white/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-wider">Email Inquiry</div>
                <div className="text-[9px] text-white/50 truncate">{ROHIT_PROFILE.email}</div>
              </div>
            </a>

            {/* Free SEO Audit Trigger */}
            <button
              onClick={() => {
                setExpanded(false);
                openAudit();
              }}
              className="w-full flex items-center gap-3 p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 shadow-lg hover:bg-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] text-left"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-400 text-black flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-wider">Request Free Audit</div>
                <div className="text-[9px] text-emerald-300/80">Get 1-on-1 technical SEO review</div>
              </div>
            </button>
          </div>

        </div>
      )}

      {/* Primary Floating Chat Toggle Button (NO extra circle arrow next to it) */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? "Close chat options" : "Open quick chat options"}
        aria-expanded={expanded}
        className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
          expanded
            ? "bg-zinc-950 text-white border border-white/20 shadow-black/80"
            : "bg-emerald-400 text-black hover:bg-emerald-300 hover:scale-105 active:scale-95 shadow-emerald-500/30"
        }`}
      >
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-emerald-400/50 animate-ping pointer-events-none" />
        )}
        {expanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-black" />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
