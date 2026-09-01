import type { Metadata } from "next";
import { HomePage } from "@/components/views/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { FAQ_DATA } from "@/data/faqData";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in India | Digital Marketing & Web Development | Rohit Gupta",
  description:
    "Hire Rohit Gupta: SEO expert in India for #1 Google rankings, technical audits, WordPress development & local SEO across India and globally.",
  path: "/",
  keywords: [
    "Rohit Gupta",
    "wordpress development company",
    "hire seo expert india",
    "hire seo expert",
    "hire seo specialist",
    "hire professional seo expert",
    "rohit web developer & seo expert freelancer",
    "seo expert in noida",
    "white hat seo services",
    "hiring an seo expert",
    "hire dedicated seo expert",
    "hire seo professional",
    "white hat seo firm",
    "hire seo expert in india",
    "hire seo",
    "rohit web developer & seo expert freelancer noida reviews",
    "hire seo experts",
    "hire seo expert team",
    "rohit digital marketing services",
    "seo ekspert",
    "local seo services in noida",
    "hire dedicated seo expert india",
    "aeo tools available in india for ai search",
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