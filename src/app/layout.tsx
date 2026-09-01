import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuditProvider } from "@/components/providers/AuditProvider";
import { StructuredData } from "@/components/shared/StructuredData";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScrollHandler from "@/components/layout/SmoothScrollHandler";
import FloatingContactClient from "@/components/layout/FloatingContactClient";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";
import { CONTACT } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Premium modern typography pairing:
// - Plus Jakarta Sans: Primary sans for ultra-clean, crisp body text and UI elements
// - Outfit: Bold, geometric high-impact font for hero headlines and section titles
// - JetBrains Mono: Crisp monospaced font for stats, metrics, badges, and technical tags
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["monospace"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SEO Expert in India | Web Developer | Rohit Gupta",
  description:
    "Rohit Gupta: top SEO expert in Noida & India. Hire dedicated SEO specialists, white hat SEO, WordPress development & local SEO for #1 Google rankings.",
  keywords: [
    "rohit gupta",
    "hire seo expert india",
    "hire seo expert",
    "hire seo specialist",
    "hire professional seo expert",
    "hire dedicated seo expert",
    "hire seo professional",
    "hire dedicated seo expert india",
    "hire seo experts",
    "hire seo expert team",
    "hire seo",
    "hiring an seo expert",
    "rohit web developer & seo expert freelancer",
    "rohit web developer & seo expert freelancer noida reviews",
    "rohit digital marketing services",
    "seo expert in noida",
    "white hat seo services",
    "white hat seo firm",
    "wordpress development company",
    "local seo services in noida",
    "aeo tools available in india for ai search",
    "seo ekspert",
    "SEO Expert India",
    "Technical SEO Specialist",
    "Digital Marketing Consultant",
    "Core Web Vitals Expert",
  ],
  authors: [{ name: "Rohit Gupta", url: `${SITE_URL}/rohit-gupta` }],
  creator: "Rohit Gupta",
  publisher: "Rohit Gupta",
  verification: {
    google: "cOS3XGFct508GjSXqJ8sOKgYDLll8jZo2WqzsLvBWs4",
    other: {
      "msvalidate.01": "1F50D6150FF4AD9C8B68283209539A7F",
    },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "en-IN": `${SITE_URL}/`,
      "en": `${SITE_URL}/`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Rohit Gupta — SEO Expert, Digital Marketing Consultant & Web Developer",
    title: "Rohit Gupta | SEO Expert & Web Developer in India",
    description:
      "Rohit Gupta is an SEO expert, digital marketing consultant & full-stack web developer helping businesses improve organic search visibility, website performance and online growth.",
    url: `${SITE_URL}/`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Rohit Gupta — SEO Expert, Digital Marketing Consultant & Web Developer",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Gupta | SEO Expert & Web Developer in India",
    description:
      "Rohit Gupta is an SEO expert, digital marketing consultant & full-stack web developer helping businesses improve organic search visibility, website performance and online growth.",
    images: [OG_IMAGE],
    site: "@rohitguptacodec",
    creator: "@rohitguptacodec",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "32x32", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Rohit Gupta SEO",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida, Uttar Pradesh",
    "geo.position": "28.570;77.380",
    ICBM: "28.570, 77.380",
    city: "Noida, Ayodhya",
    state: "Uttar Pradesh, Delhi NCR, India",
    area: "India, Worldwide (Remote)",
    language: "en-IN",
    distribution: "global",
    rating: "general",
    "format-detection": "telephone=yes",
    "theme-color": "#050505",
    "msapplication-TileColor": "#050505",
    "msapplication-TileImage": "/web-app-manifest-192x192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`dark ${plusJakartaSans.variable} ${outfit.variable} ${jetBrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="google-site-verification" content="cOS3XGFct508GjSXqJ8sOKgYDLll8jZo2WqzsLvBWs4" />
        <StructuredData />
      </head>
      <body className="bg-black text-zinc-100 font-sans antialiased selection:bg-emerald-400 selection:text-black min-h-screen [overflow-x:clip]">
        <noscript>
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui,sans-serif", color: "#eee" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 12px" }}>Rohit Gupta — SEO Expert, Digital Marketing Consultant &amp; Web Developer</p>
            <p>Rohit Gupta is an SEO expert, digital marketing consultant &amp; full-stack web developer helping businesses improve organic search visibility, website performance and online growth through technical SEO, local SEO, international SEO, digital marketing and high-performance web development.</p>
            <p>Call/WhatsApp: <a href={CONTACT.phoneHref} style={{ color: "#34d399" }}>{CONTACT.phone}</a> &nbsp;|&nbsp; Email: <a href={`mailto:${CONTACT.email}`} style={{ color: "#34d399" }}>{CONTACT.email}</a></p>
          </div>
        </noscript>
        <ScrollProgress />
        <SmoothScrollHandler />
        <AuditProvider>
          <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-emerald-400 selection:text-black [overflow-x:clip]">
            <Navbar />
            <main className="flex-1 w-full [overflow-x:clip]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-16 lg:space-y-24">
                {children}
              </div>
            </main>
            <Footer />
            <FloatingContactClient />
          </div>
        </AuditProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}