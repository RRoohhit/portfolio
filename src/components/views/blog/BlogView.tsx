"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ReadingProgressBar } from "./components/ReadingProgressBar";
import { ArticleContent } from "./components/ArticleContent";
import { formatShortDate as formatDate } from "@/lib/utils/date";
import { BLOG_POSTS } from "@/data/blogPosts";
import {
  X,
  BookOpen,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  User,
  Calendar,
  Search,
  Tag,
  LayoutGrid,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  Bookmark,
  Hash,
} from "lucide-react";

// ── Module-level derived constants ───────────────────────────────────────────
const POST_COUNT = BLOG_POSTS.length;
const TOTAL_MINS = BLOG_POSTS.reduce((acc, p) => {
  const m = parseInt(p.readTime, 10);
  return acc + (Number.isNaN(m) ? 0 : m);
}, 0);

type Post = (typeof BLOG_POSTS)[number];

// ── Tiny DifficultyBadge for read-time indicator ─────────────────────────────
const ReadTimeBadge: React.FC<{ readTime: string }> = ({ readTime }) => {
  const mins = parseInt(readTime, 10);
  const color =
    mins <= 5
      ? "text-emerald-400 bg-emerald-500/15 border-emerald-500/30"
      : mins <= 10
      ? "text-amber-400 bg-amber-500/15 border-amber-500/30"
      : "text-rose-400 bg-rose-500/15 border-rose-500/30";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold border uppercase tracking-wide ${color}`}
    >
      <Clock className="w-3 h-3" />
      {readTime}
    </span>
  );
};

// ── Category color map ────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  "Technical SEO": "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  "Core Web Vitals": "bg-sky-500/15 text-sky-300 border-sky-500/25",
  "Local SEO": "bg-violet-500/15 text-violet-300 border-violet-500/25",
  "AI Search": "bg-amber-500/15 text-amber-300 border-amber-500/25",
  "Content Strategy": "bg-rose-500/15 text-rose-300 border-rose-500/25",
  "E-Commerce SEO": "bg-teal-500/15 text-teal-300 border-teal-500/25",
};
const getCategoryColor = (cat: string) =>
  CATEGORY_COLORS[cat] ?? "bg-white/10 text-white/60 border-white/15";

// ── Main BlogView Component ───────────────────────────────────────────────────
export const BlogView: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Post | null>(null);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  /* Press "/" to focus search (unless typing in a field or reading an article) */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "/") return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (selectedArticle) return;
      e.preventDefault();
      searchInputRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedArticle]);

  /* Press Escape to close modal */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedArticle) setSelectedArticle(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedArticle]);

  /* Lock body scroll when article modal is open */
  useEffect(() => {
    document.body.style.overflow = selectedArticle ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedArticle]);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))],
    []
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: BLOG_POSTS.length };
    for (const post of BLOG_POSTS) {
      counts[post.category] = (counts[post.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.keywords.some((k) => k.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const [featuredPost, ...restPosts] = filteredPosts;

  const openArticle = useCallback((post: Post) => {
    setSelectedArticle(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="space-y-10">
      <ReadingProgressBar
        activePostTitle={
          selectedArticle ? selectedArticle.title : "Technical SEO Knowledge Base"
        }
        totalEstMinutes={
          selectedArticle ? parseInt(selectedArticle.readTime, 10) || 6 : 6
        }
      />

      {/* ── Blog Header ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl">
        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        {/* Top row: badge + stats */}
        <div className="flex flex-wrap items-center justify-between gap-3 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400 text-black text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-widest shadow-lg shadow-emerald-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical SEO Knowledge Base</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/50">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <LayoutGrid className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white font-bold">{POST_COUNT}</span> Articles
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              ~<span className="text-white font-bold">{TOTAL_MINS}</span> min combined
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2 relative">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Technical SEO &amp;{" "}
            <span className="text-gradient">Full Stack Engineering</span> Articles
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
            In-depth tutorials, Core Web Vitals optimization guides, and hiring-ready SEO playbooks
            authored by <strong className="text-white font-semibold">Rohit Gupta</strong> — a White
            Hat technical SEO specialist &amp; full stack developer.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="pt-1 space-y-4 relative">
          {/* Search */}
          <div className="relative max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" />
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, keywords…"
              aria-label="Search articles"
              className="w-full pl-10 pr-16 py-3 rounded-xl bg-black/60 border border-white/12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/15 transition-all input-glow"
            />
            <kbd
              aria-hidden="true"
              className="hidden sm:inline-flex absolute right-3.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-md bg-white/8 border border-white/12 text-[10px] font-mono text-white/40"
            >
              /
            </kbd>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-emerald-400 text-black border-emerald-400 shadow-md shadow-emerald-500/20"
                    : "bg-white/5 text-white/60 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/8"
                }`}
              >
                <Hash className="w-3 h-3 opacity-60" />
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[9px] leading-none font-extrabold ${
                    activeCategory === cat
                      ? "bg-black/20 text-black"
                      : "bg-white/10 text-white/40"
                  }`}
                >
                  {categoryCounts[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>

          {/* Result count */}
          <div className="flex items-center justify-between text-[10px] font-mono text-white/35 pt-0.5 border-t border-white/5">
            <span>
              Showing{" "}
              <span className="text-emerald-400 font-bold">{filteredPosts.length}</span> of{" "}
              <span className="text-white/60 font-bold">{POST_COUNT}</span> articles
              {activeCategory !== "All" && (
                <>
                  {" "}in{" "}
                  <span className="text-emerald-400 font-bold">{activeCategory}</span>
                </>
              )}
            </span>
            <span className="hidden sm:inline">
              Press{" "}
              <kbd className="px-1 py-0.5 rounded bg-white/8 border border-white/12 text-white/50">
                /
              </kbd>{" "}
              to search ·{" "}
              <kbd className="px-1 py-0.5 rounded bg-white/8 border border-white/12 text-white/50">
                Esc
              </kbd>{" "}
              to close reader
            </span>
          </div>
        </div>
      </div>

      {/* ── Featured Post ────────────────────────────────────────────────── */}
      {featuredPost && (
        <article className="group relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-950/30 via-zinc-950 to-zinc-950 shadow-2xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-emerald-500/10">
          {/* Background accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="p-6 sm:p-8 lg:p-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              {/* Left: content */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400 text-black text-[10px] font-mono font-extrabold uppercase tracking-widest shadow-md">
                    <TrendingUp className="w-3 h-3" />
                    Featured
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${getCategoryColor(featuredPost.category)}`}
                  >
                    {featuredPost.category}
                  </span>
                  <ReadTimeBadge readTime={featuredPost.readTime} />
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-emerald-300 transition-colors leading-tight tracking-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-sm text-white/65 leading-relaxed font-light max-w-xl">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-white/45">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    Rohit Gupta
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-400" />
                    {featuredPost.keywords.length} keywords
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => openArticle(featuredPost)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 text-white border border-white/15 text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/12 hover:border-white/25 transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    Quick Read
                  </button>
                </div>
              </div>

              {/* Right: keyword tags */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/8 space-y-3">
                  <div className="text-[10px] font-mono uppercase text-white/35 font-bold tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    Topics Covered
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredPost.keywords.slice(0, 10).map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/55 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors cursor-default"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* ── Articles Grid ────────────────────────────────────────────────── */}
      {restPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {restPosts.map((post, idx) => (
            <article
              key={post.id}
              className="blog-card-enter bg-zinc-950 border border-white/10 rounded-2xl flex flex-col hover:border-emerald-500/35 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
            >
              {/* Card top accent stripe */}
              <div className={`h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-emerald-400 to-transparent`} />

              <div className="p-5 flex flex-col flex-1 space-y-4">
                {/* Meta row */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase border ${getCategoryColor(post.category)}`}
                  >
                    {post.category}
                  </span>
                  <ReadTimeBadge readTime={post.readTime} />
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Keyword tags - show first 3 */}
                <div className="flex flex-wrap gap-1.5">
                  {post.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-white/50 bg-white/5 border border-white/10"
                    >
                      {kw}
                    </span>
                  ))}
                  {post.keywords.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-white/35">
                      +{post.keywords.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-white/8 flex items-center justify-between gap-3 bg-black/20">
                <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-white/40">
                  <Calendar className="w-3 h-3 text-emerald-400/60" />
                  {formatDate(post.date)}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openArticle(post)}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/60 hover:bg-white/10 hover:text-white transition-all"
                  >
                    Preview
                  </button>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-400/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-bold hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all"
                  >
                    Read
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        filteredPosts.length === 0 && (
          <div className="py-20 rounded-3xl bg-zinc-950 border border-white/8 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-white/20" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">No articles found</p>
              <p className="text-sm text-white/45 font-light mt-1">
                Try a different keyword or select a different category.
              </p>
            </div>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-white/60 hover:text-white hover:border-white/20 transition-all"
            >
              Clear all filters
            </button>
          </div>
        )
      )}

      {/* ── Article Reader Modal ─────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 overflow-hidden bg-black/92 backdrop-blur-2xl flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-6"
            onClick={() => setSelectedArticle(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Reading: ${selectedArticle.title}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-white/15 rounded-t-3xl sm:rounded-3xl max-w-3xl w-full max-h-[96dvh] sm:max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
            >
              {/* Modal Header (sticky) */}
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/10 shrink-0 bg-zinc-950/95 backdrop-blur-xl">
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
                    <span
                      className={`px-2.5 py-1 rounded-full font-bold uppercase border ${getCategoryColor(selectedArticle.category)}`}
                    >
                      {selectedArticle.category}
                    </span>
                    <ReadTimeBadge readTime={selectedArticle.readTime} />
                    <span className="text-white/35 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(selectedArticle.date)}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-tight line-clamp-2">
                    {selectedArticle.title}
                  </h2>
                  {/* Author */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-400 text-black font-black flex items-center justify-center text-[9px] font-mono shrink-0">
                      RG
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-none">Rohit Gupta</p>
                      <p className="text-[9px] font-mono text-white/40 mt-0.5">SEO Architect &amp; Full Stack Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/blog/${selectedArticle.slug}`}
                    onClick={() => setSelectedArticle(null)}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-400/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold hover:bg-emerald-400 hover:text-black transition-all"
                    title="Open full article page"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Full Page
                  </Link>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-xl bg-white/8 hover:bg-white/15 text-white/60 hover:text-white transition-all border border-white/10"
                    aria-label="Close article reader"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Article Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 scrollbar-thin">
                <ArticleContent content={selectedArticle.content} className="article-body" />

                {/* Key Takeaways */}
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/25 border border-emerald-500/25 space-y-3">
                  <div className="text-[10px] font-mono uppercase font-bold text-emerald-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Key Technical Takeaways
                  </div>
                  <ul className="space-y-2 text-xs text-white/75">
                    {selectedArticle.keywords.slice(0, 10).map((kw) => (
                      <li key={kw} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{kw}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer (sticky) */}
              <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-t border-white/10 shrink-0 bg-zinc-950/95 backdrop-blur-xl">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-mono text-white/40 hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Close (Esc)
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const posts = filteredPosts;
                      const idx = posts.findIndex((p) => p.id === selectedArticle.id);
                      if (idx > 0) setSelectedArticle(posts[idx - 1]);
                    }}
                    disabled={filteredPosts.findIndex((p) => p.id === selectedArticle.id) <= 0}
                    className="px-3 py-1.5 text-xs font-mono border border-white/10 rounded-lg text-white/50 hover:text-white hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    ← Prev
                  </button>
                  <Link
                    href={`/blog/${selectedArticle.slug}`}
                    onClick={() => setSelectedArticle(null)}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-black text-xs font-mono font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-colors shadow-lg"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    Full Article
                  </Link>
                  <button
                    onClick={() => {
                      const posts = filteredPosts;
                      const idx = posts.findIndex((p) => p.id === selectedArticle.id);
                      if (idx < posts.length - 1) setSelectedArticle(posts[idx + 1]);
                    }}
                    disabled={filteredPosts.findIndex((p) => p.id === selectedArticle.id) >= filteredPosts.length - 1}
                    className="px-3 py-1.5 text-xs font-mono border border-white/10 rounded-lg text-white/50 hover:text-white hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};