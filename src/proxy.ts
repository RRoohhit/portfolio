import { NextRequest, NextResponse } from "next/server";

// Cache-busting for dev-mode chunks.
//
// In development Next.js rewrites `_next/static/chunks/**` files in place on
// every recompile while keeping their URLs stable. If a caching proxy or CDN
// stores those versionless URLs (e.g. after a long-lived `immutable` header),
// it keeps serving the stale chunk whose module map no longer matches the
// freshly compiled webpack runtime -> "Cannot read properties of undefined
// (reading 'call')" on the client.
//
// This middleware appends a per-compile build token to every `_next/static`
// request so proxies always fetch a fresh URL after a rebuild, and marks the
// responses as revalidate-able so they are never stored for long.
const TOKEN = process.env.NODE_ENV === "production" ? "" : `v=${Date.now()}`;

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!TOKEN || !pathname.startsWith("/_next/static/")) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.searchParams.set("build", TOKEN);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/_next/static/:path*",
};
