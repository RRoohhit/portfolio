import { NextResponse } from "next/server";
import { SITE_URL } from "@/config/site";
import { BLOG_POSTS } from "@/data/blogPosts";
import { CASE_STUDIES } from "@/data/portfolioData";

const INDEXNOW_KEY = "b84f3e691a0c4f8287d3e691a0c4f828";
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

export async function GET() {
  try {
    const urls: string[] = [
      `${SITE_URL}/`,
      `${SITE_URL}/rohit-gupta/`,
      `${SITE_URL}/contact/`,
      `${SITE_URL}/seo-audit/`,
      `${SITE_URL}/testimonials/`,
      `${SITE_URL}/blog/`,
      `${SITE_URL}/case-studies/`,
      `${SITE_URL}/projects/`,
      `${SITE_URL}/seo-tools/`,
      `${SITE_URL}/ai-lab/`,
      `${SITE_URL}/seo-analyzer/`,
      `${SITE_URL}/services/`,
      `${SITE_URL}/services/seo/`,
      `${SITE_URL}/services/technical-seo/`,
      `${SITE_URL}/services/on-page-seo/`,
      `${SITE_URL}/services/off-page-seo/`,
      `${SITE_URL}/services/content-seo/`,
      `${SITE_URL}/services/local-seo/`,
      `${SITE_URL}/services/google-business-profile-seo/`,
      `${SITE_URL}/services/ecommerce-seo/`,
      `${SITE_URL}/services/international-seo/`,
      `${SITE_URL}/services/ai-search-optimization/`,
      `${SITE_URL}/services/white-hat-seo/`,
      `${SITE_URL}/services/digital-marketing/`,
      `${SITE_URL}/services/google-ads/`,
      `${SITE_URL}/services/social-media-marketing/`,
      `${SITE_URL}/services/web-development/`,
      `${SITE_URL}/services/react-development/`,
      `${SITE_URL}/services/nextjs-development/`,
      `${SITE_URL}/seo-expert-noida/`,
      `${SITE_URL}/local-seo-noida/`,
      `${SITE_URL}/google-business-profile-seo-noida/`,
      `${SITE_URL}/seo-expert-delhi/`,
      `${SITE_URL}/seo-expert-gurgaon/`,
      `${SITE_URL}/seo-expert-ghaziabad/`,
      `${SITE_URL}/seo-expert-ayodhya/`,
      ...CASE_STUDIES.map((cs) => `${SITE_URL}/case-studies/${cs.id}/`),
      ...BLOG_POSTS.map((post) => `${SITE_URL}/blog/${post.slug}/`),
    ];

    const host = new URL(SITE_URL).host;

    const payload = {
      host,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: urls,
    };

    // Submit to both api.indexnow.org and bing.com
    const endpoints = [
      "https://api.indexnow.org/indexnow",
      "https://www.bing.com/indexnow",
    ];

    const results = await Promise.all(
      endpoints.map(async (endpoint) => {
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(payload),
          });
          return {
            endpoint,
            status: res.status,
            ok: res.ok || res.status === 200 || res.status === 202,
          };
        } catch (err: any) {
          return {
            endpoint,
            error: err.message,
            ok: false,
          };
        }
      })
    );

    return NextResponse.json({
      success: true,
      submittedCount: urls.length,
      host,
      keyLocation: INDEXNOW_KEY_LOCATION,
      results,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  return GET();
}
