import type { Metadata } from "next";
import { HomePage } from "@/components/views/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { FAQ_DATA } from "@/data/faqData";

export const metadata: Metadata = buildPageMetadata({
  title: "Rohit Gupta — SEO Expert, Digital Marketing Consultant & Web Developer",
  description:
    "Rohit Gupta is an SEO expert, digital marketing consultant & full-stack web developer helping businesses improve organic search visibility, website performance and online growth.",
  path: "/",
  keywords: [
    "Rohit Gupta",
    "Rohit Gupta SEO",
    "Rohit Gupta SEO expert",
    "Rohit Gupta digital marketing",
    "Rohit Gupta web developer",
    "SEO Expert India",
    "Technical SEO Specialist",
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