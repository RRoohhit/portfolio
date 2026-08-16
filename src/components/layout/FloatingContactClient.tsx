"use client";

import dynamic from "next/dynamic";

// Client-only floating widget. Lazy-loaded with SSR disabled so it mounts
// entirely in the browser after hydration and can never participate in the
// server-rendered layout tree. Mirrors the AuditProvider/QuickAuditModal pattern.
const FloatingContact = dynamic(
  () => import("./FloatingContact").then((m) => m.FloatingContact),
  { ssr: false, loading: () => null }
);

export default function FloatingContactClient() {
  return <FloatingContact />;
}
