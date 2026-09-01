import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=(), clipboard-read=(self), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // COOP relaxed from same-origin → unsafe-none so Bing's headless Chromium
  // renderer can share the browsing context needed to load JS module chunks.
  { key: "Cross-Origin-Opener-Policy", value: "unsafe-none" },
  { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
  { key: "X-Robots-Tag", value: "all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self' https:; frame-ancestors 'self' https://*.bing.com https://*.microsoft.com;",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: path.join(__dirname),
  // Allow the preview environment's wildcard hostname to fetch dev resources.
  allowedDevOrigins: ["*.monkeycode-ai.live", "rohitguptaseo.in", "www.rohitguptaseo.in"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "motion"],
  },
  // Raise the static-page generation timeout for slower build environments.
  staticPageGenerationTimeout: 120,
  async redirects() {
    return [
      // www → non-www permanent redirect for canonical consistency
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rohitguptaseo.in" }],
        destination: "https://rohitguptaseo.in/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Long immutable cache for static assets (icons, fonts, images)
      {
        source: "/:path(.*\\.(?:svg|ico|png|jpg|jpeg|webp|avif|woff|woff2))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Short cache for the generated SEO files (sitemap.xml, robots.txt)
      {
        source: "/:path(sitemap.xml|robots.txt|manifest.webmanifest|manifest.json)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;