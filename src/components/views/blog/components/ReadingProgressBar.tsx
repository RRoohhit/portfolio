"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, CheckCircle2, Share2, ChevronUp, Check, BookOpen } from "lucide-react";

interface ReadingProgressBarProps {
  activePostTitle?: string;
  totalEstMinutes?: number;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  activePostTitle = "Technical SEO Knowledge Base",
  totalEstMinutes = 6,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(totalEstMinutes);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    setTimeRemaining(totalEstMinutes);
    setIsCompleted(false);
    setScrollProgress(0);
  }, [totalEstMinutes, activePostTitle]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
      setScrollProgress(progress);
      setTimeRemaining(Math.max(0, Math.ceil(totalEstMinutes * (1 - progress / 100))));
      if (progress >= 95) setIsCompleted(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalEstMinutes]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* ignore */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const circumference = 2 * Math.PI * 10; // radius=10, small SVG circle
  const dash = (scrollProgress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 hidden sm:block"
    >
      <div className="flex flex-col items-end gap-2">
        {/* Completion badge */}
        <AnimatePresence>
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 8 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-300 shadow-lg"
            >
              <CheckCircle2 className="w-3 h-3" />
              Article Complete! +100 XP
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main widget */}
        <div className="flex items-center gap-2 p-2 bg-black/90 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl">
          {/* Circular progress */}
          <div className="relative w-10 h-10 shrink-0">
            <svg className="w-10 h-10 -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke={isCompleted ? "#34d399" : "#34d399"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference - dash}`}
                className="transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[9px] font-mono font-black text-emerald-400 leading-none">
                {scrollProgress}%
              </span>
            </div>
          </div>

          {/* Reading info */}
          <div className="pr-1 space-y-0.5">
            <div className="flex items-center gap-1 text-[10px] font-mono text-white/70">
              <BookOpen className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="max-w-[120px] truncate text-white/55" title={activePostTitle}>
                {activePostTitle.length > 18
                  ? activePostTitle.slice(0, 18) + "…"
                  : activePostTitle}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-white/45">
              <Clock className="w-3 h-3 text-amber-400 shrink-0" />
              <span>
                {isCompleted ? (
                  <span className="text-emerald-400 font-bold">Done!</span>
                ) : (
                  `~${timeRemaining}m left`
                )}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 border-l border-white/10 pl-2">
            <button
              onClick={handleShare}
              title="Copy article link"
              aria-label="Copy article link"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/12 border border-white/8 text-white/50 hover:text-white transition-all"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Share2 className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              aria-label="Scroll back to top"
              className="p-1.5 rounded-lg bg-emerald-400 text-black hover:bg-emerald-300 transition-colors shadow-md"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Progress bar underline */}
        <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};
