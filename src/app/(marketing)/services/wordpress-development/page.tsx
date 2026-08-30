import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import {
  Code2, CheckCircle2, ArrowRight, Zap, ShieldCheck, Layers, ShoppingCart,
  Globe, Layout, RefreshCw, Gauge, Server, HelpCircle, Phone, MessageSquare
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "WordPress Development Company India | Rohit Gupta",
  description:
    "WordPress development in India: custom Gutenberg themes, WooCommerce, Core Web Vitals speed, and Headless Next.js architecture.",
  path: "/services/wordpress-development/",
  keywords: [
    "wordpress development company",
    "wordpress development company in india",
    "custom wordpress development",
    "hire wordpress developer",
    "woocommerce development company",
    "wordpress speed optimization",
    "wordpress technical seo",
    "headless wordpress nextjs",
    "wordpress development agency noida",
    "rohit gupta wordpress developer",
  ],
});

const WORDPRESS_SOLUTIONS = [
  {
    icon: Layout,
    title: "Custom WordPress Theme & Gutenberg Block Development",
    desc: "We build lightweight WordPress themes from scratch. No bloated page builders like Elementor or Divi. Clean HTML5, fast load times.",
    features: [
      "Custom Native Gutenberg Blocks",
      "Full Site Editing (FSE) Compatibility",
      "Tailwind CSS & Clean Semantic HTML",
      "Zero Unused CSS or JS Bloat",
    ],
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Development & Optimization",
    desc: "Build a high-converting online store. We add Razorpay and Stripe, set up product schema, and make checkout blazing fast.",
    features: [
      "Custom WooCommerce Checkout Flows",
      "Product & Category Schema Markup",
      "Dynamic Pricing & Multi-Currency",
      "Sub-Second Cart & Checkout Speed",
    ],
  },
  {
    icon: Gauge,
    title: "WordPress Core Web Vitals & Speed Optimization",
    desc: "Turn your slow WordPress site into a 95+ PageSpeed machine. We target LCP < 1.2s, INP < 50ms, and fast server response.",
    features: [
      "Redis / Memcached Object Caching",
      "Next-Gen AVIF / WebP Image Delivery",
      "Critical CSS Extraction & JS Deferral",
      "Server Response (TTFB) < 150ms Tuning",
    ],
  },
  {
    icon: Layers,
    title: "Headless WordPress with Next.js & React",
    desc: "Use WordPress as your CMS backend and Next.js 15 as your frontend. You get fast page loads, great SEO, and easy content editing.",
    features: [
      "WPGraphQL / REST API Integration",
      "Next.js App Router & Server Components",
      "Edge-Cached Incremental Static Regeneration (ISR)",
      "100/100 Lighthouse Performance Scores",
    ],
  },
  {
    icon: ShieldCheck,
    title: "WordPress Security Hardening & Malware Cleanup",
    desc: "We protect your site with Cloudflare WAF, strong admin rules, and automated daily backups. Fast cleanup if your site is hacked.",
    features: [
      "Database Prefix & Vulnerability Audits",
      "Automated Daily Off-Site Backups",
      "Zero-Trust Admin & 2FA Enforcement",
      "Malware Removal & Penalty Recovery",
    ],
  },
  {
    icon: RefreshCw,
    title: "WordPress Migration & SEO Equity Preservation",
    desc: "We move your site to WordPress or Next.js with full 301 redirects. No ranking drops. No broken pages.",
    features: [
      "Zero Ranking Drop Guarantee",
      "Automated 301 Redirect Mapping",
      "Database Schema & Media Migration",
      "Post-Migration Search Console Monitoring",
    ],
  },
];

const WP_FAQS = [
  {
    question: "Why choose Rohit Gupta over a WordPress development company?",
    answer:
      "I build lean, custom WordPress sites with no heavy plugins or bloated themes. You get fast load times, clean code, and direct access to a senior developer who also understands technical SEO.",
  },
  {
    question: "Can you fix the Core Web Vitals and slow speed of my current WordPress site?",
    answer:
      "Yes. Most slow WordPress sites have unoptimized images, heavy plugins, and render-blocking scripts. I audit your site, set up server caching, and fix the root causes to hit green scores for LCP, INP, and CLS.",
  },
  {
    question: "Do you build custom WooCommerce stores for Indian and international clients?",
    answer:
      "Yes. I build WooCommerce stores with custom checkouts, Razorpay, Paytm, Stripe, and PayPal. I also add Product schema so your items appear in Google Shopping results.",
  },
  {
    question: "What is Headless WordPress and is it right for my business?",
    answer:
      "Headless WordPress uses WordPress as your content editor but serves pages via Next.js. This gives you faster page loads, better security, and higher SEO scores while keeping your team on the WordPress dashboard they already know.",
  },
  {
    question: "How do you protect SEO rankings during a WordPress redesign?",
    answer:
      "I run a full URL mapping before and after migration. I set up 301 redirects, preserve meta tags, and monitor Search Console for crawl errors after launch. This protects your organic traffic.",
  },
];

export default function WordPressDevelopmentPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "WordPress Development", path: "/services/wordpress-development/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-wp-dev-breadcrumb")}
      {renderJsonLd(faqGraph(WP_FAQS), "jsonld-wp-dev-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "WordPress Development Company" },
          ]}
        />

        {/* Hero Header */}
        <header className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            Custom WordPress &amp; WooCommerce Engineering
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              WordPress Development Company —{" "}
              <span className="text-blue-400">Fast, Custom &amp; SEO-First</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl font-light">
              Need a fast, custom WordPress website? Rohit Gupta builds <strong>WordPress sites and WooCommerce stores</strong> in India that load fast, rank well on Google, and stay secure. No bloated themes or page builders.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact/"
              className="btn-3d-emerald text-xs font-mono font-black py-3.5 px-6 flex items-center gap-2"
            >
              <span>Consult WordPress Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I would like to discuss a custom WordPress development project.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-5 flex items-center gap-2 text-emerald-400"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <Link
              href="/services/web-development/"
              className="card-3d text-xs font-mono text-white/70 py-3.5 px-4 flex items-center gap-2 hover:text-white"
            >
              <span>Explore All Web Dev</span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs font-mono text-white/70">
            <div>
              <span className="text-emerald-400 font-bold">Lighthouse 95+</span>
              <p className="text-[10px] text-white/40">Guaranteed Speed</p>
            </div>
            <div>
              <span className="text-blue-400 font-bold">100% Custom</span>
              <p className="text-[10px] text-white/40">Zero Theme Bloat</p>
            </div>
            <div>
              <span className="text-amber-400 font-bold">SEO Built-In</span>
              <p className="text-[10px] text-white/40">Schema &amp; Sitemaps</p>
            </div>
            <div>
              <span className="text-purple-400 font-bold">Next.js Ready</span>
              <p className="text-[10px] text-white/40">Headless Architecture</p>
            </div>
          </div>
        </header>

        {/* Core Solutions Grid */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Enterprise <span className="text-blue-400">WordPress Development Services</span>
            </h2>
            <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
              From bespoke corporate web portals to high-volume WooCommerce e-commerce stores, every build is crafted for conversion and search dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORDPRESS_SOLUTIONS.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="card-3d-interactive p-6 rounded-3xl space-y-4 border border-white/10 hover:border-blue-500/40 transition-colors shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">{sol.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{sol.desc}</p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-white/10">
                    {sol.features.map((feat, featIdx) => (
                      <li key={featIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison: Custom WordPress vs Bloated Builders */}
        <section className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Custom Engineered WordPress vs <span className="text-rose-400">Bloated Page Builders</span>
            </h2>
            <p className="text-sm text-white/65 leading-relaxed max-w-3xl">
              Why generic WordPress themes fail in 2026 search engines and how bespoke code unlocks exponential ranking performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-zinc-950 border border-rose-500/30 space-y-3">
              <h3 className="text-sm font-bold text-rose-400 font-mono uppercase tracking-wider">Traditional Agency Builds (Elementor / Avada)</h3>
              <ul className="space-y-2 text-xs text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Average load time: 4.5s to 8.2s with failing Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>40+ active plugins creating serious security vulnerabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Excessive DOM depth (&gt; 2,500 nodes) slowing down mobile browsers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Zero built-in semantic JSON-LD schema for Google rich snippets</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-emerald-500/30 space-y-3">
              <h3 className="text-sm font-bold text-emerald-400 font-mono uppercase tracking-wider">Rohit Gupta Custom WordPress Architecture</h3>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Sub-second page loads (&lt; 0.8s LCP) and 95+ PageSpeed scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Zero unnecessary plugins — clean native PHP, Gutenberg &amp; React</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Ultra-clean semantic HTML5 markup designed for Google crawl efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Automated Schema JSON-LD, OpenGraph, and XML sitemaps built-in</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-400" />
              WordPress Development FAQs
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Common questions about custom WordPress themes, WooCommerce stores, speed optimization, and maintenance.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {WP_FAQS.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/40 via-zinc-950 to-zinc-950 border border-blue-500/30 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Build a Fast, Scalable <span className="text-blue-400">WordPress Website</span> Today
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you need a brand-new custom WordPress theme, a high-converting WooCommerce store, or an urgent speed optimization overhaul, get in touch for a tailored proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact/"
              className="btn-3d-emerald text-xs font-mono font-black py-3.5 px-8"
            >
              Get WordPress Consultation
            </Link>
            <Link
              href="/case-studies/"
              className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-6"
            >
              View Development Portfolio
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
