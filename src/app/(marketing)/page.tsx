import type { Metadata } from "next";
import { HomePage } from "@/components/views/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { FAQ_DATA } from "@/data/faqData";

export const metadata: Metadata = buildPageMetadata({
  title: "Hire SEO Expert & Specialist Near Me | Noida, Delhi, India",
  description:
    "Hire a proven SEO specialist near Me in Noida, Delhi & India. 200+ businesses ranked #1 with White Hat, Technical & AI SEO. Free audit today.",
  path: "/",
  keywords: [
    "SEO specialist near me",
    "hire SEO specialist India",
    "SEO expert in Delhi",
    "technical SEO specialist",
    "local SEO expert India",
  ],
});

export default function Home() {
  return (
    <>
      {renderJsonLd(breadcrumbGraph([{ name: "Home", path: "/" }]), "jsonld-home-breadcrumb")}
      {/* FAQPage JSON-LD mirrors the FAQ accordion rendered inside HomePage */}
      {renderJsonLd(faqGraph(FAQ_DATA), "jsonld-home-faq")}
      <HomePage />
    </>
  );
}