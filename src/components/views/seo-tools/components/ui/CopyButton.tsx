"use client";

import React from "react";
import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  disabled?: boolean;
  onCopy?: () => void;
}

/**
 * Standard clipboard button used across the SEO tools suite. Renders the
 * copied/check state automatically via the shared useCopyToClipboard hook.
 */
export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  label = "Copy",
  copiedLabel = "Copied!",
  className,
  disabled,
  onCopy,
}) => {
  const { copied, copy } = useCopyToClipboard();

  const handleClick = () => {
    if (disabled) return;
    copy(text);
    onCopy?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={label}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-[10px] font-mono font-bold uppercase tracking-wider hover:bg-white/20 transition-colors ${
        copied ? "text-emerald-300" : ""
      } ${disabled ? "opacity-40 cursor-not-allowed hover:bg-white/10" : ""} ${className ?? ""}`}
    >
      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
};
