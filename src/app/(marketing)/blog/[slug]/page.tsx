import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, User, Tag, ArrowLeft, BookOpen, ChevronRight, Share2, MessageCircleQuestion } from "lucide-react";
import { BLOG_POSTS, getClusterForPost, getPostsForCluster } from "@/data/blogPosts";
import { ROHIT_PROFILE } from "@/data/portfolioData";
import { ArticleContent, parseArticleContent } from "@/components/views/blog/components/ArticleContent";
import { TableOfContents } from "@/components/views/blog/components/TableOfContents";
import { ReadingProgressBar } from "@/components/views/blog/components/ReadingProgressBar";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { formatReadableDate } from "@/lib/utils/date";
import { OG_IMAGE, SITE_URL } from "@/lib/seo";
import { CONTACT } from "@/config/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const url = new URL(`/blog/${post.slug}/`, SITE_URL).href;
  return {
    title: post.title,
    description: post.excerpt.slice(0, 140),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    category: post.category,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt.slice(0, 148),
      url,
      siteName: "Rohit Gupta - SEO Specialist & Full Stack Web Developer",
      authors: ["Rohit Gupta"],
      publishedTime: `${post.date}T00:00:00Z`,
      modifiedTime: `${post.date}T00:00:00Z`,
      tags: post.keywords,
      section: post.category,
      locale: "en_IN",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt.slice(0, 148),
      images: [OG_IMAGE],
    },
    keywords: [...post.keywords, "SEO", "Rohit Gupta", "technical SEO India"],
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const fullUrl = new URL(`/blog/${post.slug}/`, SITE_URL).href;
  const wordCount = post.content.split(/\s+/).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${fullUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        image: OG_IMAGE,
        datePublished: `${post.date}T00:00:00Z`,
        dateModified: `${post.date}T00:00:00Z`,
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        wordCount,
        timeRequired: `PT${parseInt(post.readTime, 10) || 6}M`,
        inLanguage: "en-IN",
        mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl },
        author: {
          "@type": "Person",
          name: "Rohit Gupta",
          url: `${SITE_URL}/rohit-gupta/`,
        },
        publisher: {
          "@type": "Organization",
          name: "Rohit Gupta - SEO Specialist & Full Stack Web Developer",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: OG_IMAGE },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${fullUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
          { "@type": "ListItem", position: 3, name: post.title, item: fullUrl },
        ],
      },
      ...(post.faqs
        ? [
            {
              "@type": "FAQPage",
              "@id": `${fullUrl}#faq`,
              mainEntity: post.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
    ],
  };

  // SEO topic-cluster navigation: which guide series this article belongs to
  const postClusters = getClusterForPost(post.slug);
  const cluster =
    postClusters.length > 0
      ? { ...postClusters[0], posts: getPostsForCluster(postClusters[0].slug) }
      : null;
  let clusterIndex = -1;
  if (cluster) {
    for (let i = 0; i < cluster.posts.length; i++) {
      if (cluster.posts[i].slug === post.slug) {
        clusterIndex = i;
        break;
      }
    }
  }
  const clusterPrev = cluster && clusterIndex > 0 ? cluster.posts[clusterIndex - 1] : null;
  const clusterNext = cluster && clusterIndex >= 0 && clusterIndex < cluster.posts.length - 1 ? cluster.posts[clusterIndex + 1] : null;
  // Cluster-aware related posts: prefer siblings from the same topic-cluster(s)
  // so readers (and crawlers) follow a coherent learning path, then fall back
  // to the newest articles so the slot is never empty.
  const siblingSlugs = new Set(
    postClusters
      .flatMap((c) => getPostsForCluster(c.slug))
      .map((p) => p.slug)
  );
  const relatedPosts = BLOG_POSTS
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aIn = siblingSlugs.has(a.slug) ? 0 : 1;
      const bIn = siblingSlugs.has(b.slug) ? 0 : 1;
      return aIn - bIn;
    })
    .slice(0, 2);

  // Table of contents: pulled straight from the article's own headings so it
  // always matches the rendered content.
  const tableOfContents = parseArticleContent(post.content)
    .filter((block) => block.type === "h2")
    .map((block) => block.text ?? "")
    .filter(Boolean)
    .slice(0, 12)
    .map((text, idx) => ({ index: idx + 1, text }));

  const articleUrl = `${SITE_URL}/blog/${post.slug}/`;
  const shareHrefs = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${post.title} — ${articleUrl}`)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
  };

  return (
    <article className="space-y-8 pt-24 lg:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs + Back link */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog/" },
            { name: post.title },
          ]}
        />
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to all articles
        </Link>
      </div>

      <ReadingProgressBar
        activePostTitle={post.title}
        totalEstMinutes={parseInt(post.readTime, 10) || 6}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8 items-start">
      <div className="min-w-0 space-y-8">
      {/* Article Header */}
      <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-emerald-400 text-black font-extrabold uppercase tracking-widest">
            {post.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            {post.readTime}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            {formatReadableDate(post.date)}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
          {post.h1 || post.title}
        </h1>

        <div className="flex items-center gap-3 pt-2 border-t border-white/10">
          <Link
            href="/rohit-gupta/"
            className="w-10 h-10 rounded-full bg-emerald-400 text-black font-black flex items-center justify-center text-xs font-mono shrink-0 hover:scale-105 transition-transform"
          >
            RG
          </Link>
          <div className="flex-1">
            <div className="text-xs sm:text-sm font-bold text-white font-mono flex items-center gap-2 flex-wrap">
              <span className="text-white/70 font-normal">Written by</span>
              <Link href="/rohit-gupta/" className="text-emerald-400 hover:underline font-bold">
                Rohit Gupta
              </Link>
              <span className="text-[10px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase tracking-wide">
                SEO Expert &amp; Full-Stack Web Developer
              </span>
            </div>
            <p className="text-[11px] text-white/60 font-mono">Digital Marketing Consultant &amp; Web Developer</p>
          </div>
          {/* Share actions */}
          <div className="flex items-center gap-2">
            <a
              href={shareHrefs.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-colors text-white/70"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a
              href={shareHrefs.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X / Twitter"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-colors text-white/70"
            >
              <span className="text-xs font-mono font-black">X</span>
            </a>
            <a
              href={shareHrefs.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-colors text-white/70"
            >
              <span className="text-xs font-mono font-black">in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Table of Contents (stacked below header on small screens) */}
      {tableOfContents.length > 0 && (
        <div className="lg:hidden">
          <TableOfContents items={tableOfContents} />
        </div>
      )}

      {/* Article Body */}
      <div className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
        <blockquote className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/20 via-zinc-900/40 to-black/60 border border-emerald-500/30 border-l-4 border-l-emerald-400 text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light italic">
          &ldquo;{post.excerpt}&rdquo;
        </blockquote>

        <ArticleContent content={post.content} />

        {/* Keywords */}
        <div className="pt-4 border-t border-white/10 space-y-2">
          <div className="text-xs font-mono text-white/50 uppercase font-bold flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-emerald-400" />
            <span>Targeted Keywords &amp; Indexing Terms</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span key={kw} className="px-3 py-1 rounded-lg bg-black border border-white/10 text-xs font-mono text-white/70">
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Author CTA */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-4 mt-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-wide">Need a Rank #1 SEO specialist near you?</h3>
              <p className="text-xs text-white/70 mt-1">
                Get a free technical SEO audit and a 90-day ranking roadmap from Rohit Gupta, serving Noida, Delhi &amp; all India.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Hire Rohit
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              <User className="w-3.5 h-3.5 text-emerald-400" />
              {CONTACT.phone}
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
              <MessageCircleQuestion className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <dl className="space-y-3">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <dt className="text-sm font-bold text-white leading-snug">{faq.question}</dt>
                  <dd className="text-xs text-white/70 leading-relaxed font-light">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
      </div>
      {/* Sticky Table of Contents (desktop) */}
      {tableOfContents.length > 0 && (
        <aside className="hidden lg:block lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1">
          <TableOfContents items={tableOfContents} variant="sidebar" />
        </aside>
      )}
      </div>
      {/* ── Guide Series / Cluster navigation ── */}
      {cluster && (
        <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-3">
          <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-wider flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Part of the {cluster.title} series</span>
          </div>
          {cluster.pillarSlug && (
            <p className="text-xs text-white/70 leading-relaxed">
              New here? Start with the pillar guide:{' '}
              <Link
                href={`/blog/${cluster.pillarSlug}`}
                className="text-emerald-400 hover:underline font-medium"
              >
                {cluster.posts.find((p) => p.slug === cluster.pillarSlug)?.title ??
                  cluster.title}
              </Link>{' '}
              to build the full picture in order.
            </p>
          )}
          <div className="flex flex-wrap gap-2 items-center">
            {clusterPrev && (
              <Link
                href={`/blog/${clusterPrev.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                Prev: {clusterPrev.title}
              </Link>
            )}
            {clusterNext && (
              <Link
                href={`/blog/${clusterNext.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-400/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 hover:bg-emerald-400 hover:text-black transition-colors"
              >
                Next: {clusterNext.title}
                <ArrowLeft className="w-3 h-3 rotate-180" />
              </Link>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cluster.posts.slice(0, 12).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${
                  p.slug === post.slug
                    ? "bg-emerald-400 text-black border-emerald-400"
                    : "card-3d text-white/55 hover:text-white"
                }`}
              >
                {p.slug === post.slug ? `You are here · ${p.title}` : p.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-xs font-mono uppercase text-white/50 tracking-[0.2em] font-bold">
          {cluster ? (
            <>
              Continue the {cluster.title} series
            </>
          ) : (
            "More Technical SEO Articles"
          )}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedPosts.map((rec) => (
            <Link
              key={rec.slug}
              href={`/blog/${rec.slug}`}
              className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group shadow-xl flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase border border-emerald-500/30">
                    {rec.category}
                  </span>
                  <span className="text-white/50 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {rec.readTime}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug line-clamp-2">
                  {rec.title}
                </h3>
                <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-light">{rec.excerpt}</p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-white/5">
                Read Article
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}