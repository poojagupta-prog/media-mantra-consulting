import { connection } from "next/server";
import { portfolioStudies } from "@/components/CaseStudies/case-studies-data";
import { caseStudyStories } from "@/components/CaseStudies/case-study-stories";
import { contentSitemap } from "@/lib/sitemaps/xml";

async function getPublishedStudies() {
  return portfolioStudies.filter(({ slug }) => Object.hasOwn(caseStudyStories, slug));
}

export async function GET(request: Request) {
  await connection();
  return contentSitemap("case-studies", getPublishedStudies, request);
}
