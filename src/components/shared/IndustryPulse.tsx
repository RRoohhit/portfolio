"use client";
import React, { useState } from "react";
import { 
  Radio, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ExternalLink, 
  Send, 
  Bookmark, 
  Check, 
  Globe, 
  Zap,
  Filter
} from "lucide-react";

export interface PulseItem {
  id: string;
  author: string;
  handle: string;
  role: string;
  timeAgo: string;
  category: "Google Search" | "Next.js & React" | "Technical SEO" | "Google Ads";
  headline: string;
  content: string;
  highlightMetric?: string;
  initialLikes: number;
  initialComments: { id: string; user: string; text: string; time: string }[];
  tags: string[];
}

export const PULSE_FEED: PulseItem[] = [
  {
    id: "pulse-1",
    author: "Rohit Gupta",
    handle: "@rohitgupta_seo",
    role: "Full Stack & Technical SEO Architect",
    timeAgo: "2 hours ago",
    category: "Google Search",
    headline: "Google AI Search Overviews & INP Metric Impact Analysis",
    content: "Google's updated search algorithms are heavily prioritizing pages with Interaction to Next Paint (INP) under 50ms and valid FAQ JSON-LD schemas. We recently migrated a high-traffic client from legacy PHP to Next.js SSR, lowering LCP to 0.6s and seeing an instant 3.2x lift in Google AI Overview snippet citations!",
    highlightMetric: "+320% AI Overview Snippet Citations",
    initialLikes: 84,
    initialComments: [
      { id: "c1", user: "Aman Verma", text: "Incredible results! How did you handle client-side script deferral?", time: "1 hr ago" },
      { id: "c2", user: "Saurabh Mishra", text: "JSON-LD schema truly makes a massive difference in rich snippets.", time: "45 mins ago" }
    ],
    tags: ["#GoogleAIOverviews", "#CoreWebVitals", "#NextJS"]
  },
  {
    id: "pulse-2",
    author: "Rohit Gupta",
    handle: "@rohitgupta_seo",
    role: "Full Stack & Technical SEO Architect",
    timeAgo: "Yesterday",
    category: "Next.js & React",
    headline: "Next.js App Router Caching & Dynamic Image AVIF Conversion",
    content: "Tip for developers: Serving images in WebP or AVIF formats with responsive srcset attributes drops page payload size by over 70%. Paired with Next.js ISR (Incremental Static Regeneration), your server response time drops to under 20ms worldwide.",
    highlightMetric: "70% Payload Reduction",
    initialLikes: 142,
    initialComments: [
      { id: "c3", user: "Rohan Agrawal", text: "Tried this on our e-commerce platform and Lighthouse jumped from 52 to 98!", time: "5 hrs ago" }
    ],
    tags: ["#NextJS", "#ReactJS", "#PageSpeed"]
  },
  {
    id: "pulse-3",
    author: "Rohit Gupta",
    handle: "@rohitgupta_seo",
    role: "Full Stack & Technical SEO Architect",
    timeAgo: "3 days ago",
    category: "Technical SEO",
    headline: "White-Hat Link Velocity & Anchor Text Neutrality Safeguards",
    content: "Never build low-quality spam links! Google's SpamBrain algorithm actively neutralizes unnatural link networks. Focus on high DA guest outreach, technical audit disavowal, and organic brand mentions. Sustainable SEO is built on White-Hat speed and authority.",
    highlightMetric: "100% White-Hat Compliance",
    initialLikes: 96,
    initialComments: [],
    tags: ["#TechnicalSEO", "#WhiteHatSEO", "#BacklinkAudit"]
  },
  {
    id: "pulse-4",
    author: "Rohit Gupta",
    handle: "@rohitgupta_seo",
    role: "Full Stack & Technical SEO Architect",
    timeAgo: "5 days ago",
    category: "Google Ads",
    headline: "Lowering Cost-Per-Click (CPC) via Landing Page Speed Optimization",
    content: "Did you know? Google Ads Quality Score evaluates landing page load speeds. By bringing landing page load time under 1 second, our clients enjoy a 28% reduction in Cost-Per-Click (CPC) while achieving higher ad rank placement on competitor search terms.",
    highlightMetric: "-28% CPC Cost Reduction",
    initialLikes: 118,
    initialComments: [
      { id: "c4", user: "Priya Sharma", text: "Quality score jumped from 6/10 to 9/10 within a week of optimization.", time: "2 days ago" }
    ],
    tags: ["#GoogleAds", "#PPC", "#ConversionRate"]
  }
];

export const IndustryPulse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [likesState, setLikesState] = useState<{ [key: string]: { count: number; userLiked: boolean } }>(() => {
    const initial: { [key: string]: { count: number; userLiked: boolean } } = {};
    PULSE_FEED.forEach((item) => {
      initial[item.id] = { count: item.initialLikes, userLiked: false };
    });
    return initial;
  });

  const [commentsState, setCommentsState] = useState<{ [key: string]: { id: string; user: string; text: string; time: string }[] }>(() => {
    const initial: { [key: string]: { id: string; user: string; text: string; time: string }[] } = {};
    PULSE_FEED.forEach((item) => {
      initial[item.id] = item.initialComments;
    });
    return initial;
  });

  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [newCommentInput, setNewCommentInput] = useState<{ [key: string]: string }>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [savedPosts, setSavedPosts] = useState<{ [key: string]: boolean }>({});

  const categories = ["All", "Google Search", "Next.js & React", "Technical SEO", "Google Ads"];

  const filteredFeed = PULSE_FEED.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const handleToggleLike = (id: string) => {
    setLikesState((prev) => {
      const current = prev[id];
      const newLiked = !current.userLiked;
      return {
        ...prev,
        [id]: {
          userLiked: newLiked,
          count: newLiked ? current.count + 1 : current.count - 1
        }
      };
    });
  };

  const handleToggleSave = (id: string) => {
    setSavedPosts((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSharePost = async (post: PulseItem) => {
    const postUrl = `${window.location.origin}/#pulse-${post.id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.headline,
          text: post.content,
          url: postUrl
        });
      } catch (e) {
        // Fallback to copy link
        navigator.clipboard?.writeText(postUrl).catch(() => undefined);
        setCopiedId(post.id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } else {
      navigator.clipboard?.writeText(postUrl).catch(() => undefined);
      setCopiedId(post.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleAddComment = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const text = newCommentInput[postId]?.trim();
    if (!text) return;

    setCommentsState((prev) => ({
      ...prev,
      [postId]: [
        ...prev[postId],
        { id: `c-${Date.now()}`, user: "Visiting Specialist", text: text, time: "Just now" }
      ]
    }));

    setNewCommentInput((prev) => ({ ...prev, [postId]: "" }));
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest mb-1.5">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Live Professional Stream</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Industry Pulse & Technical SEO Insights Feed
          </h3>
          <p className="text-xs text-white/60">
            Real-time updates, performance benchmarks, and search engine algorithm analysis by Rohit Gupta.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full self-start sm:self-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-white text-black font-bold shadow"
                    : "bg-black text-white/60 border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Social Feed List */}
      <div className="space-y-6">
        {filteredFeed.map((post) => {
          const likeInfo = likesState[post.id];
          const postComments = commentsState[post.id] || [];
          const isCommentsOpen = activeCommentPostId === post.id;
          const isSaved = savedPosts[post.id];

          return (
            <div 
              key={post.id}
              className="p-6 bg-black border border-white/10 rounded-xl space-y-4 hover:border-white/20 transition-colors"
            >
              {/* Author Info Bar */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-black font-black flex items-center justify-center text-xs font-mono italic shadow-md shrink-0">
                    RG
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white tracking-tight">{post.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs text-white/40 font-mono hidden sm:inline">{post.handle}</span>
                    </div>
                    <p className="text-[11px] text-white/60 font-mono">{post.role} • {post.timeAgo}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] uppercase font-bold border border-white/20">
                    {post.category}
                  </span>
                  <button
                    onClick={() => handleToggleSave(post.id)}
                    className={`p-1.5 rounded-lg border text-xs transition-colors ${
                      isSaved ? "bg-white text-black border-white" : "text-white/60 border-white/10 hover:text-white"
                    }`}
                    title={isSaved ? "Saved post" : "Save post"}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Post Headline & Body Content */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-white leading-snug">
                  {post.headline}
                </h4>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  {post.content}
                </p>
              </div>

              {/* Highlight Metric Pill if present */}
              {post.highlightMetric && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Result: {post.highlightMetric}</span>
                </div>
              )}

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social Actions Bar */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                <div className="flex items-center gap-4">
                  {/* Like Button */}
                  <button
                    onClick={() => handleToggleLike(post.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                      likeInfo.userLiked
                        ? "bg-white text-black font-bold border-white"
                        : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{likeInfo.count} Likes</span>
                  </button>

                  {/* Comment Toggle Button */}
                  <button
                    onClick={() => setActiveCommentPostId(isCommentsOpen ? null : post.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                      isCommentsOpen
                        ? "bg-white/20 text-white font-bold border-white/30"
                        : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{postComments.length} Discussions</span>
                  </button>
                </div>

                {/* Share Link Button */}
                <button
                  onClick={() => handleSharePost(post)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-400 text-black font-bold text-xs hover:bg-emerald-300 transition-colors shadow-sm"
                >
                  {copiedId === post.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Post</span>
                    </>
                  )}
                </button>
              </div>

              {/* Expandable Comment Section */}
              {isCommentsOpen && (
                <div className="pt-3 space-y-3 border-t border-white/10 animate-in fade-in-50 duration-200">
                  {postComments.length > 0 ? (
                    <div className="space-y-2">
                      {postComments.map((comment) => (
                        <div key={comment.id} className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-xs space-y-1">
                          <div className="flex justify-between items-center text-[10px] font-mono text-white/50">
                            <span className="font-bold text-white">{comment.user}</span>
                            <span>{comment.time}</span>
                          </div>
                          <p className="text-white/80 font-light">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-white/40 font-mono italic">No discussions yet. Start the conversation!</p>
                  )}

                  {/* Add Comment Input Form */}
                  <form onSubmit={(e) => handleAddComment(post.id, e)} className="flex gap-2">
                    <input
                      type="text"
                      value={newCommentInput[post.id] || ""}
                      onChange={(e) => setNewCommentInput({ ...newCommentInput, [post.id]: e.target.value })}
                      placeholder="Add your technical question or insight..."
                      className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-1.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-white"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-white text-black text-xs font-mono font-bold uppercase rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1"
                    >
                      <Send className="w-3 h-3" />
                      <span>Post</span>
                    </button>
                  </form>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
