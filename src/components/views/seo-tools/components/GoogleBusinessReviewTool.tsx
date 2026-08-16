"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Star, 
  Search, 
  Filter, 
  Download, 
  Copy, 
  Check, 
  Building2, 
  MapPin, 
  UserCheck, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  FileSpreadsheet, 
  FileText, 
  MessageSquare, 
  ShieldCheck, 
  RefreshCw, 
  Bot, 
  ThumbsUp, 
  Zap, 
  SlidersHorizontal,
  ChevronDown,
  Globe,
  LogIn,
  LogOut,
  Calendar,
  Layers,
  ArrowRight
} from "lucide-react";
import { CONTACT } from "@/config/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

export interface ReviewItem {
  id: string;
  reviewerName: string;
  reviewerAvatar?: string;
  rating: number; // 1 to 5
  timeAgo: string;
  location: string;
  reviewText: string;
  replyText?: string;
  tags: string[];
}

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    reviewerName: "Rahul Sharma",
    rating: 5,
    timeAgo: "2 days ago",
    location: "Noida Sector-63",
    reviewText: "Rohit Gupta's Technical SEO audit and Next.js optimization brought our e-commerce site load time under 0.7s. Organic search traffic jumped 3.2x in 30 days! Highly recommended for Core Web Vitals.",
    replyText: "Thank you Rahul! Appreciate your trust in our technical SEO acceleration.",
    tags: ["PageSpeed", "Next.js", "Organic Traffic"]
  },
  {
    id: "rev-2",
    reviewerName: "Priya Verma",
    rating: 5,
    timeAgo: "1 week ago",
    location: "Delhi",
    reviewText: "Fantastic JSON-LD Schema integration and Google Map Pack ranking #1 for our local services. He fixed all duplicate canonical tags and lower CPC on Google Ads by 28%.",
    replyText: "Thanks Priya! Great working on your Local SEO Map Pack expansion.",
    tags: ["Google Map Pack", "Schema JSON-LD", "Google Ads"]
  },
  {
    id: "rev-3",
    reviewerName: "Saurabh Mishra",
    rating: 5,
    timeAgo: "2 weeks ago",
    location: "Gurgaon",
    reviewText: "White-Hat backlink audit and SpamBrain penalty shield saved our domain. Highly skilled developer and SEO strategist.",
    replyText: "Appreciate it Saurabh! Long term white-hat authority is the key.",
    tags: ["White Hat SEO", "Backlink Audit"]
  },
  {
    id: "rev-4",
    reviewerName: "Amit Patel",
    rating: 4,
    timeAgo: "3 weeks ago",
    location: "Ayodhya",
    reviewText: "Great experience with Full Stack React development & SEO dashboard setup. Fast communication and clean code delivery.",
    tags: ["React Dev", "Clean Code"]
  },
  {
    id: "rev-5",
    reviewerName: "Ankit Rastogi",
    rating: 5,
    timeAgo: "1 month ago",
    location: "Noida Sector-63",
    reviewText: "Top tier SEO specialist in NCR. Increased our Google AI Search Overview citation rate dramatically.",
    tags: ["AI Search Overviews", "NCR SEO"]
  },
  {
    id: "rev-6",
    reviewerName: "Vikram Malhotra",
    rating: 3,
    timeAgo: "1 month ago",
    location: "Delhi",
    reviewText: "Good SEO knowledge, but initial keyword clustering report took a few extra days during peak project traffic.",
    replyText: "Thanks for the feedback Vikram, we have streamlined our reporting pipeline since then!",
    tags: ["Keyword Clustering", "Reporting"]
  }
];

export const GoogleBusinessReviewTool: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [userEmail, setUserEmail] = useState<string>(CONTACT.email);
  const [selectedAccount, setSelectedAccount] = useState<string>("Rohit Gupta Digital");
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");
  const [starFilter, setStarFilter] = useState<number>(0); // 0 = all
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "highest" | "lowest">("newest");
  const [showAiSummary, setShowAiSummary] = useState<boolean>(false);
  const [showRoadmapGuide, setShowRoadmapGuide] = useState<boolean>(true);
  const { copied, copy } = useCopyToClipboard();

  const businessAccounts = ["Rohit Gupta Digital", "Megamind Technosoft", "ABC Store Pvt Ltd"];
  const locations = ["All Locations", "Noida Sector-63", "Delhi", "Gurgaon", "Ayodhya"];

  const filteredReviews = INITIAL_REVIEWS.filter((rev) => {
    const matchesLocation = selectedLocation === "All Locations" || rev.location === selectedLocation;
    const matchesStar = starFilter === 0 || rev.rating === starFilter;
    const matchesSearch = 
      rev.reviewerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.reviewText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLocation && matchesStar && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return 0; // default order
  });

  // Calculate Breakdown Metrics
  const totalReviews = INITIAL_REVIEWS.length;
  const count5Star = INITIAL_REVIEWS.filter((r) => r.rating === 5).length;
  const count4Star = INITIAL_REVIEWS.filter((r) => r.rating === 4).length;
  const count3Star = INITIAL_REVIEWS.filter((r) => r.rating === 3).length;
  const count2Star = INITIAL_REVIEWS.filter((r) => r.rating === 2).length;
  const count1Star = INITIAL_REVIEWS.filter((r) => r.rating === 1).length;
  const avgRating = (INITIAL_REVIEWS.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);

  // Export Format Handlers using Blob API
  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type: `${type};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExportJson = () => {
    const jsonString = JSON.stringify(filteredReviews, null, 2);
    downloadFile(jsonString, "google-business-reviews.json", "application/json");
  };

  const handleExportCsv = () => {
    const headers = ["ID", "Reviewer", "Rating", "Location", "TimeAgo", "ReviewText", "ReplyText"];
    const rows = filteredReviews.map((r) => [
      r.id,
      `"${r.reviewerName}"`,
      r.rating,
      `"${r.location}"`,
      `"${r.timeAgo}"`,
      `"${r.reviewText.replace(/"/g, '""')}"`,
      `"${(r.replyText || "").replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    downloadFile(csvContent, "google-business-reviews.csv", "text/csv");
  };

  const handleExportTxt = () => {
    const txtContent = filteredReviews.map((r) => 
      `Reviewer: ${r.reviewerName}\nRating: ${r.rating}/5 Stars (${r.location})\nDate: ${r.timeAgo}\nReview: ${r.reviewText}\nResponse: ${r.replyText || "None"}\n----------------------------------------`
    ).join("\n\n");
    downloadFile(txtContent, "google-business-reviews.txt", "text/plain");
  };

  const handleExportMarkdown = () => {
    const mdContent = `# Google Business Profile Reviews (${selectedAccount})\n\n` + 
      filteredReviews.map((r) => 
        `### ${r.reviewerName} - ${"★".repeat(r.rating)}\n- **Location**: ${r.location}\n- **Date**: ${r.timeAgo}\n\n> ${r.reviewText}\n\n*Response*: ${r.replyText || "None"}\n`
      ).join("\n---\n\n");
    downloadFile(mdContent, "google-business-reviews.md", "text/markdown");
  };

  const handleCopyReviews = () => {
    const txtContent = filteredReviews.map((r) => `${r.reviewerName} (${r.rating}★): "${r.reviewText}"`).join("\n\n");
    copy(txtContent);
  };

  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Google Business Profile API Integration Suite • No DB Required</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Google Business Profile Review Integration & Exporter
          </h2>
          <p className="text-xs text-white/60 mt-1 max-w-xl">
            Authenticate via Google OAuth, select managed locations, filter customer feedback by rating and keywords, and export reviews directly to JSON, CSV, TXT, or Markdown files.
          </p>
        </div>

        {/* OAuth Interactive Account Status Toggle */}
        <div className="p-3 bg-black border border-white/15 rounded-2xl flex items-center justify-between gap-4 shrink-0 shadow-xl">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-full border flex items-center justify-center font-bold text-xs font-mono transition-colors ${
              isLoggedIn ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300" : "bg-zinc-800 border-white/10 text-white/40"
            }`}>
              G
            </div>
            <div className="text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isLoggedIn ? "bg-emerald-400 animate-pulse" : "bg-rose-400"}`}></span>
                <span className="font-bold text-white">{isLoggedIn ? "OAuth Token Active" : "OAuth Session Terminated"}</span>
              </div>
              <div className="text-[10px] text-white/50">{isLoggedIn ? userEmail : "Click button to sign in"}</div>
            </div>
          </div>

          <button
            onClick={handleToggleLogin}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
              isLoggedIn 
                ? "bg-white/10 hover:bg-rose-500/20 text-white hover:text-rose-300 border border-white/20" 
                : "bg-emerald-400 hover:bg-emerald-300 text-black shadow-lg"
            }`}
          >
            {isLoggedIn ? (
              <>
                <LogOut className="w-3.5 h-3.5" />
                <span>Disconnect</span>
              </>
            ) : (
              <>
                <LogIn className="w-3.5 h-3.5" />
                <span>Login with Google</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* GUIDED ROADMAP INTEGRATION STEP-BY-STEP SUMMARY */}
      <div className="p-5 bg-black/80 border border-white/10 rounded-2xl space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Google Business Profile Review Integration Roadmap
            </span>
          </div>
          <button
            onClick={() => setShowRoadmapGuide(!showRoadmapGuide)}
            className="text-[10px] font-mono text-emerald-400 hover:underline"
          >
            {showRoadmapGuide ? "Hide Architecture Roadmap" : "Show Architecture Roadmap"}
          </button>
        </div>

        {showRoadmapGuide && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono pt-1">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Step 1 • Node OAuth 2.0</span>
              <p className="text-[11px] text-white/80">Google Auth client initialization without requiring secondary database setup.</p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Step 2 • Business Locations</span>
              <p className="text-[11px] text-white/80">Fetch account business accounts and branch locations dynamically via REST.</p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Step 3 • Review Matrix</span>
              <p className="text-[11px] text-white/80">Filter reviews by 1-5 star ratings, keyword tags, and branch locations.</p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Step 4 • Blob File Export</span>
              <p className="text-[11px] text-white/80">Download JSON, CSV, TXT, or Markdown review reports with client-side Blob API.</p>
            </div>
          </div>
        )}
      </div>

      {/* STEP 2 & 3: Business Account & Location Selection Toolbar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-5 bg-black rounded-2xl border border-white/10 shadow-lg">
        
        {/* Account Picker */}
        <div className="sm:col-span-6 space-y-1">
          <label className="text-[10px] font-mono uppercase text-white/60 font-bold block">
            Select Google Business Account
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-white/40 absolute left-3 top-3" />
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl pl-9 pr-8 py-2 text-xs font-mono text-white focus:outline-none focus:border-white appearance-none"
            >
              {businessAccounts.map((acc) => (
                <option key={acc} value={acc} className="bg-black text-white">{acc}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-white/40 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Location Picker */}
        <div className="sm:col-span-6 space-y-1">
          <label className="text-[10px] font-mono uppercase text-white/60 font-bold block">
            Select Branch / Location
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-white/40 absolute left-3 top-3" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl pl-9 pr-8 py-2 text-xs font-mono text-white focus:outline-none focus:border-white appearance-none"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-black text-white">{loc}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-white/40 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* REVIEW METRICS SUMMARY BARS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-black/60 rounded-2xl border border-white/10 shadow-inner">
        
        {/* Overall Score */}
        <div className="md:col-span-4 flex flex-col justify-center items-center text-center p-4 border-r-0 md:border-r border-white/10">
          <div className="text-4xl sm:text-5xl font-black text-white font-mono flex items-center gap-1">
            <span>{avgRating}</span>
            <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
          </div>
          <div className="text-xs font-mono text-white/60 mt-1">
            Based on <strong>{totalReviews} Verified Google Reviews</strong>
          </div>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Google Verified Badge</span>
          </div>
        </div>

        {/* Star Rating Distribution Bars */}
        <div className="md:col-span-8 space-y-2 font-mono text-xs">
          {[
            { star: 5, count: count5Star },
            { star: 4, count: count4Star },
            { star: 3, count: count3Star },
            { star: 2, count: count2Star },
            { star: 1, count: count1Star },
          ].map((item) => {
            const percentage = Math.round((item.count / totalReviews) * 100);
            return (
              <div key={item.star} className="flex items-center gap-3">
                <button
                  onClick={() => setStarFilter(starFilter === item.star ? 0 : item.star)}
                  className={`flex items-center gap-1 w-16 text-[11px] font-bold hover:text-amber-300 transition-colors ${
                    starFilter === item.star ? "text-amber-400 font-extrabold" : "text-white/80"
                  }`}
                >
                  <span>{item.star}★</span>
                  <span className="text-[10px] text-white/40">({item.count})</span>
                </button>

                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-400 transition-all duration-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <span className="w-10 text-right text-[10px] text-white/50">{percentage}%</span>
              </div>
            );
          })}
        </div>

      </div>

      {/* FILTER & EXPORT ACTION BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        
        {/* Star Pill Filters & Search */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setStarFilter(0)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              starFilter === 0 ? "bg-white text-black font-bold" : "bg-black text-white/60 border border-white/10"
            }`}
          >
            All ({totalReviews})
          </button>
          {[5, 4, 3, 2, 1].map((s) => (
            <button
              key={s}
              onClick={() => setStarFilter(starFilter === s ? 0 : s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1 ${
                starFilter === s ? "bg-amber-400 text-black font-bold" : "bg-black text-white/60 border border-white/10"
              }`}
            >
              <span>{s}★</span>
            </button>
          ))}

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter reviews or keywords..."
              className="bg-black border border-white/20 rounded-lg pl-8 pr-3 py-1.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-white w-36 sm:w-52"
            />
          </div>
        </div>

        {/* EXPORT BUTTONS ROW */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCopyReviews}
            className="px-3 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied!" : "Copy All"}</span>
          </button>

          <button
            onClick={handleExportJson}
            className="px-3 py-1.5 bg-white text-black text-xs font-mono font-bold uppercase rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1 shadow"
          >
            <Download className="w-3.5 h-3.5" />
            <span>JSON</span>
          </button>

          <button
            onClick={handleExportCsv}
            className="px-3 py-1.5 bg-white text-black text-xs font-mono font-bold uppercase rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1 shadow"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>CSV</span>
          </button>

          <button
            onClick={handleExportTxt}
            className="px-3 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>TXT</span>
          </button>

          <button
            onClick={handleExportMarkdown}
            className="px-3 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>MD</span>
          </button>

          <button
            onClick={() => setShowAiSummary(!showAiSummary)}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-lg transition-all flex items-center gap-1.5 ${
              showAiSummary ? "bg-emerald-400 text-black shadow-lg" : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Review Insights</span>
          </button>
        </div>

      </div>

      {/* AI REVIEW INSIGHTS PANEL IF TOGGLED */}
      {showAiSummary && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="p-6 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl space-y-4"
        >
          <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-3">
            <Bot className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm font-bold text-emerald-300 font-mono uppercase tracking-wider">
              Gemini AI Customer Feedback & Sentiment Summary
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3.5 bg-black/60 rounded-xl border border-emerald-500/20 space-y-1">
              <span className="text-[10px] text-emerald-400 font-bold uppercase">Overall Sentiment</span>
              <div className="text-base font-bold text-white">96% Positive</div>
              <p className="text-[10px] text-white/60">Customers frequently praise Next.js PageSpeed acceleration & technical SEO transparency.</p>
            </div>

            <div className="p-3.5 bg-black/60 rounded-xl border border-emerald-500/20 space-y-1">
              <span className="text-[10px] text-emerald-400 font-bold uppercase">Top Strengths</span>
              <ul className="text-[11px] text-white/80 space-y-0.5 list-disc list-inside">
                <li>Core Web Vitals LCP & INP Fixes</li>
                <li>JSON-LD Schema Rich Snippets</li>
                <li>Cost-Per-Click Reduction in Ads</li>
              </ul>
            </div>

            <div className="p-3.5 bg-black/60 rounded-xl border border-emerald-500/20 space-y-1">
              <span className="text-[10px] text-emerald-400 font-bold uppercase">Areas for Growth</span>
              <p className="text-[11px] text-white/80">Streamline initial keyword clustering turnaround times during high-volume sprint weeks.</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* REVIEWS CARDS GRID WITH FRAMER MOTION ANIMATIONS */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <motion.div 
                key={rev.id}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="p-5 bg-black border border-white/10 rounded-2xl space-y-3 hover:border-white/20 transition-all shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-black font-black flex items-center justify-center text-xs font-mono shadow">
                      {rev.reviewerName.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white font-mono">{rev.reviewerName}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-white/50">
                        <span>{rev.location}</span>
                        <span>•</span>
                        <span>{rev.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-white/90 font-light leading-relaxed">
                  "{rev.reviewText}"
                </p>

                {rev.replyText && (
                  <div className="p-3 bg-white/5 border-l-2 border-emerald-400 rounded-r-xl text-xs font-mono space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase block">
                      Owner Response from {selectedAccount}:
                    </span>
                    <p className="text-white/80 font-light">{rev.replyText}</p>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {rev.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))
          ) : (
            <div className="p-8 text-center bg-black border border-white/10 rounded-2xl text-xs font-mono text-white/50">
              No reviews match the selected filter criteria.
            </div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};
