"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Check, Download, PartyPopper } from "lucide-react";

interface SuccessConfettiProps {
  show: boolean;
  message?: string;
  type?: "copy" | "download" | "generate";
}

export const SuccessConfetti: React.FC<SuccessConfettiProps> = ({
  show,
  message = "Snippet generated successfully!",
  type = "copy"
}) => {
  const particles = Array.from({ length: 12 });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-[200] max-w-sm pointer-events-none"
        >
        <div className="relative p-4 rounded-2xl bg-zinc-950/95 border border-emerald-500/50 text-white shadow-2xl backdrop-blur-2xl flex items-center gap-3 overflow-hidden">
          {/* Radial Emerald Glow */}
          <div className="absolute inset-0 bg-emerald-500/10 animate-pulse pointer-events-none" />

          {/* Radiating Framer Motion Particles */}
          {particles.map((_, i) => {
            const angle = (i / particles.length) * 360;
            const x = Math.cos((angle * Math.PI) / 180) * 50;
            const y = Math.sin((angle * Math.PI) / 180) * 50;
            const size = (i % 3) + 3;

            return (
              <motion.span
                key={i}
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{
                  opacity: 0,
                  x,
                  y,
                  scale: 0
                }}
                transition={{
                  duration: 0.85,
                  ease: "easeOut"
                }}
                style={{
                  width: `${size}px`,
                  height: `${size}px`
                }}
                className={`absolute left-6 top-6 rounded-full ${
                  i % 2 === 0 ? "bg-emerald-400 shadow-emerald-400" : "bg-cyan-300 shadow-cyan-300"
                } shadow-sm`}
              />
            );
          })}

          {/* Icon Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: [0, 1.25, 1], rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-xl bg-emerald-400 text-black flex items-center justify-center shrink-0 shadow-lg font-black"
          >
            {type === "download" ? (
              <Download className="w-5 h-5 text-black" />
            ) : type === "copy" ? (
              <Check className="w-5 h-5 text-black" />
            ) : (
              <Sparkles className="w-5 h-5 text-black" />
            )}
          </motion.div>

          {/* Content */}
          <div className="space-y-0.5 pr-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <PartyPopper className="w-3.5 h-3.5 text-emerald-400" />
              <span>Positive Feedback</span>
            </div>
            <p className="text-xs font-sans font-medium text-white/90 leading-snug">
              {message}
            </p>
          </div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
