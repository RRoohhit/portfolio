"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlogPost } from "@/types";
import { BLOG_POSTS } from "@/data/portfolioData";
import { SITE_URL } from "@/config/site";
import { SuccessConfetti } from "@/components/ui/SuccessConfetti";
import { 
  X, 
  Share2, 
  Copy, 
  Check, 
  Calendar, 
  Clock, 
  Tag, 
  Sparkles, 
  BookOpen, 
  Bookmark,
  BookmarkCheck,
  Linkedin,
  Twitter,
  Send,
  ArrowRight
} from "lucide-react";

interface ArticleReaderModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onSelectArticle?: (article: BlogPost) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ 
  article, 
  onClose,
  onSelectArticle 
}) => {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [confetti, setConfetti] = useState<{ show: boolean; message: string; type: "copy" | "download" | "generate" }>({
    show: false,
    message: "",
    type: "copy"
  });

  // Check if current article is saved in localStorage
  useEffect(() => {
    if (!article) return;
    setCopied(false);
    setShowShareMenu(false);
    setConfetti({ show: false, message: "", type: "copy" });
    try {
      const savedList: string[] = JSON.parse(localStorage.getItem("saved_articles") || "[]");
      setIsSaved(savedList.includes(article.id));
    } catch (e) {
      setIsSaved(false);
    }
  }, [article]);

  if (!article) return null;

  const articleUrl = typeof window !== "undefined"
    ? `${window.location.origin}/blog/${article.slug}`
    : `${SITE_URL}/blog/${article.slug}`;

  const triggerConfetti = (message: string) => {
    setConfetti({ show: true, message, type: "copy" });
    setTimeout(() => {
      setConfetti((prev) => ({ ...prev, show: false }));
    }, 2800);
  };

  // Toggle Save for Later in localStorage
  const handleToggleSave = () => {
    try {
      const savedList: string[] = JSON.parse(localStorage.getItem("saved_articles") || "[]");
      let updated: string[] = [];

      if (savedList.includes(article.id)) {
        updated = savedList.filter((id) => id !== article.id);
        setIsSaved(false);
        triggerConfetti("Removed article from saved list.");
      } else {
        updated = [...savedList, article.id];
        setIsSaved(true);
        triggerConfetti("Saved article for later reading!");
      }

      localStorage.setItem("saved_articles", JSON.stringify(updated));
      window.dispatchEvent(new Event("saved_articles_updated"));
    } catch (e) {
      console.error("Failed to save article in localStorage", e);
    }
  };

  // Web Share API implementation
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: articleUrl
        });
        triggerConfetti("Shared successfully via Web Share!");
      } catch (err) {
        setShowShareMenu(!showShareMenu);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(articleUrl).catch(() => undefined);
    setCopied(true);
    triggerConfetti("Article link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`"${article.title}" by Rohit Gupta\n\nRead here:`);
    const url = encodeURIComponent(articleUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
    triggerConfetti("Opening Twitter / X to share article!");
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(articleUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
    triggerConfetti("Opening LinkedIn to share article!");
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Check out this technical article by Rohit Gupta: "${article.title}"\n${articleUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank", "noopener,noreferrer");
    triggerConfetti("Opening WhatsApp to share article!");
  };

  // Compute Recommended Reading (2 articles from same category or other articles)
  const otherPosts = BLOG_POSTS.filter((p) => p.id !== article.id);
  const sameCategory = otherPosts.filter((p) => p.category === article.category);
  const remaining = otherPosts.filter((p) => p.category !== article.category);
  const recommendedPosts = [...sameCategory, ...remaining].slice(0, 2);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950/75 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(16,185,129,0.18)] overflow-hidden flex flex-col z-10 text-white"
        >
          {/* Ambient Background Radial Glow inside Modal */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-white/15 flex items-center justify-between bg-black/50 sticky top-0 z-20 backdrop-blur-2xl">
<div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider min-w-0">
              <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">{article.category}</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Save For Later Button */}
              <button
                onClick={handleToggleSave}
                className={`px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 border backdrop-blur-md whitespace-nowrap ${
                  isSaved
                    ? "bg-amber-400/20 text-amber-300 border-amber-400/40 hover:bg-amber-400/30 shadow-md"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
                title={isSaved ? "Article Saved in LocalStorage" : "Save for Later Reading"}
              >
                {isSaved ? (
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Bookmark className="w-3.5 h-3.5" />
                )}
                <span className={isSaved ? "hidden lg:inline" : "hidden lg:inline"}>{isSaved ? "Saved" : "Save for Later"}</span>
              </button>

              {/* Main Share Article Button */}
              <button
                onClick={handleNativeShare}
                className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-emerald-300 transition-colors flex items-center gap-1.5 shadow-lg whitespace-nowrap"
                title="Share Article via Web Share API or Social Networks"
              >
                <Share2 className="w-3.5 h-3.5 stroke-[2.5]" />
                <span className="hidden sm:inline">Share</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Social Share Menu Modal / Popover */}
          <AnimatePresence>
            {showShareMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mx-6 mt-4 p-4 rounded-2xl bg-zinc-900/80 backdrop-blur-2xl border border-emerald-500/40 text-xs font-mono space-y-3 shadow-2xl relative z-30"
              >
                <div className="flex items-center justify-between text-emerald-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Share2 className="w-4 h-4 text-emerald-400" />
                    <span>Share Article On Social Media:</span>
                  </span>
                  <button onClick={() => setShowShareMenu(false)} className="text-white/50 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={handleShareTwitter}
                    className="p-2.5 rounded-xl bg-black/70 border border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all flex items-center justify-center gap-2 font-bold backdrop-blur-md"
                  >
                    <Twitter className="w-4 h-4 text-cyan-400" />
                    <span>Twitter / X</span>
                  </button>

                  <button
                    onClick={handleShareLinkedIn}
                    className="p-2.5 rounded-xl bg-black/70 border border-white/10 hover:border-blue-400 text-white hover:text-blue-400 transition-all flex items-center justify-center gap-2 font-bold backdrop-blur-md"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </button>

                  <button
                    onClick={handleShareWhatsApp}
                    className="p-2.5 rounded-xl bg-black/70 border border-white/10 hover:border-emerald-400 text-white hover:text-emerald-400 transition-all flex items-center justify-center gap-2 font-bold backdrop-blur-md"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={handleCopyLink}
                    className="p-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 font-bold"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied!" : "Copy Link"}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal Scrollable Article Body */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 scrollbar-thin relative z-10">
            
            {/* Category & Metadata Pill */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
                  {article.category}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/15 text-[10px] font-mono font-bold flex items-center gap-1 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-white/50" />
                  {article.readTime}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/15 text-[10px] font-mono font-bold flex items-center gap-1 backdrop-blur-md">
                  <Calendar className="w-3 h-3 text-white/50" />
                  {article.date}
                </span>
                {isSaved && (
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold flex items-center gap-1 backdrop-blur-md">
                    <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Saved for Later</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug uppercase">
                {article.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-2 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-400 text-black font-black flex items-center justify-center text-xs font-mono shadow-xl shrink-0">
                  RG
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono flex flex-wrap items-center gap-1.5">
                    <span>Rohit Gupta</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase tracking-wide">Author &amp; Technical SEO Architect</span>
                  </div>
                  <p className="text-[11px] text-white/60 font-mono">Full Stack Developer &amp; SEO Specialist • Megamind Technosoft</p>
                </div>
              </div>
            </div>

            {/* Excerpt Callout Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/20 via-zinc-900/40 to-black/60 backdrop-blur-xl border border-emerald-500/30 text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light italic border-l-4 border-l-emerald-400 shadow-xl">
              "{article.excerpt}"
            </div>

            {/* Main Article Content */}
            <div className="space-y-4 text-xs sm:text-sm text-white/85 leading-relaxed font-light">
              <p>{article.content}</p>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/70 backdrop-blur-xl border border-emerald-500/30 space-y-3 font-mono text-xs sm:text-sm shadow-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Key Technical Takeaway</span>
                </div>
                <p className="text-white/90 leading-relaxed font-sans font-normal">
                  Integrating proper rendering strategies (SSR/ISR) alongside dynamic JSON-LD schema feeds directly influences Google AI Search overview placement and lowers INP script latency.
                </p>
              </div>
            </div>

            {/* Keywords Tag Cloud */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <div className="text-xs font-mono text-white/50 uppercase font-bold flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-emerald-400" />
                <span>Targeted Keywords &amp; Indexing Terms:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((kw, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white/70">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Action Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xl">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleSave}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 border backdrop-blur-md ${
                    isSaved
                      ? "bg-amber-400/20 text-amber-300 border-amber-400/40"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                >
                  {isSaved ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
                  <span>{isSaved ? "Saved to Reading List" : "Save for Later"}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareTwitter}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400 transition-colors backdrop-blur-md"
                  title="Share on Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </button>

                <button
                  onClick={handleShareLinkedIn}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-blue-400 transition-colors backdrop-blur-md"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>

                <button
                  onClick={handleShareWhatsApp}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 transition-colors backdrop-blur-md"
                  title="Share on WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNativeShare}
                  className="px-4 py-2.5 rounded-xl bg-white text-black text-xs font-mono font-bold hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* RECOMMENDED READING SECTION */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Recommended Reading</span>
                </div>
                <span className="text-[10px] font-mono text-white/50 uppercase">Based on {article.category}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedPosts.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-5 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between space-y-3 group shadow-lg hover:shadow-[0_10px_30px_-5px_rgba(16,185,129,0.18)]"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase border border-emerald-500/30">
                          {rec.category}
                        </span>
                        <span className="text-white/50">{rec.readTime}</span>
                      </div>

                      <h4 
                        onClick={() => onSelectArticle && onSelectArticle(rec)}
                        className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer leading-snug line-clamp-2 uppercase tracking-tight"
                      >
                        {rec.title}
                      </h4>

                      <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-light">
                        {rec.excerpt}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectArticle && onSelectArticle(rec)}
                      className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 pt-2 border-t border-white/5 transition-colors self-start"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      <SuccessConfetti show={confetti.show} message={confetti.message} type={confetti.type} />
    </AnimatePresence>
  );
};
