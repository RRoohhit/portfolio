import type { Metadata } from "next";
import { ProjectsPage } from "@/components/views/projects/ProjectsPage";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Case Studies & Rank #1 Results | Rohit Gupta India",
  description:
    "See verified SEO case studies: 4,766% organic traffic growth, 99/100 Core Web Vitals and Rank #1 Google results engineered for Noida, Delhi & India businesses.",
  path: "/projects",
  keywords: [
    "SEO case studies",
    "technical SEO portfolio",
    "Core Web Vitals results",
    "SEO specialist Noida",
    "SEO results India",
  ],
});

export default function Projects() {
  return (
    <>
      {renderJsonLd(
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects/" },
        ]),
        "jsonld-projects-breadcrumb"
      )}
      <div className="space-y-6 pt-24 lg:pt-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Projects" },
          ]}
        />
        <ProjectsPage />
      </div>
    </>
  );
}
