import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuditProvider } from "@/components/providers/AuditProvider";
import { StructuredData } from "@/components/shared/StructuredData";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingContactClient from "@/components/layout/FloatingContactClient";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";
import { CONTACT } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Variable fonts: one single woff2 file per family covers every weight
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  axes: ["opsz"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hire SEO Expert & Specialist Near Me | Noida, Delhi, India",
  description:
    "Hire a proven SEO specialist in Noida, Delhi & India. 2+ yrs White Hat technical SEO & AI, 200+ sites ranked #1. Free SEO audit today.",
  keywords: [
    "SEO specialist near me",
    "SEO expert near me",
    "SEO executive near me",
    "hire SEO specialist",
    "hire SEO expert India",
    "SEO specialist in Noida",
    "SEO expert in Delhi",
    "SEO consultant India",
    "SEO executive in Noida",
    "SEO services near me",
    "freelance SEO specialist India",
    "technical SEO specialist",
    "SEO expert for hire",
    "SEO services Noida",
    "SEO services Delhi",
    "e-commerce SEO expert",
    "local SEO specialist",
    "full stack web developer and SEO specialist",
    "Google Ads expert",
  ],
  authors: [{ name: "Rohit Gupta" }],
  creator: "Rohit Gupta",
  verification: {
    google: "IWz8BQJBZj13aj8Mtgvbq4j-7wfGraaeSAzBydH9O_Q",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    siteName: "Rohit Gupta - SEO Specialist & Full Stack Web Developer",
    title: "Hire SEO Expert & Specialist Near Me | Noida, Delhi, India",
    description:
      "Hire a proven SEO specialist in Noida, Delhi & India. 200+ businesses ranked, Core Web Vitals 99/100. Free audit today.",
    url: SITE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Rohit Gupta - SEO Specialist & Web Developer",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Specialist & Expert Near Me | Hire SEO Expert India",
    description:
      "Rank #1 on Google & AI search. 200+ businesses ranked, Core Web Vitals 99/100. Noida, Delhi & India. Free SEO audit.",
    images: [OG_IMAGE],
    site: "@rohitguptacodec",
    creator: "@rohitguptacodec",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "any", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
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
    "geo.placename": "Ayodhya, Uttar Pradesh",
    "geo.position": "26.795;82.199",
    ICBM: "26.795, 82.199",
    city: "Noida, Delhi, Gurgaon, Ghaziabad, Lucknow, Ayodhya",
    state: "Uttar Pradesh, Delhi NCR, India",
    area: "India, Worldwide (Remote)",
    language: "en-IN",
    distribution: "global",
    rating: "general",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`dark scroll-smooth ${inter.variable} ${jetBrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="google-site-verification" content="IWz8BQJBZj13aj8Mtgvbq4j-7wfGraaeSAzBydH9O_Q" />
        <StructuredData />
        <noscript>
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui,sans-serif", color: "#eee" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 12px" }}>Hire SEO Specialist &amp; Expert Near Me in Noida, Delhi &amp; India</p>
            <p>Rohit Gupta is a full stack web developer and SEO specialist helping businesses in Noida, Delhi, NCR and all of India rank #1 on Google and AI search. Services: Technical SEO, On-Page SEO, Web Development, Core Web Vitals, Local SEO, Google Ads.</p>
            <p>Call/WhatsApp: <a href={CONTACT.phoneHref} style={{ color: "#34d399" }}>{CONTACT.phone}</a> &nbsp;|&nbsp; Email: <a href={`mailto:${CONTACT.email}`} style={{ color: "#34d399" }}>{CONTACT.email}</a></p>
          </div>
        </noscript>
      </head>
      <body className="bg-black text-zinc-100 font-sans antialiased selection:bg-emerald-400 selection:text-black min-h-screen [overflow-x:clip]">
        <div aria-hidden="true" className="noise-overlay hidden md:block" />
        <ScrollProgress />
        <AuditProvider>
          <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-emerald-400 selection:text-black [overflow-x:clip]">
            <Navbar />
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 [overflow-x:clip]">
              {children}
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