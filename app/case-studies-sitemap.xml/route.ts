import { connection } from "next/server";
import { portfolioStudies } from "@/components/CaseStudies/case-studies-data";
import { caseStudyStories } from "@/components/CaseStudies/case-study-stories";
import { contentSitemap, sourceDates } from "@/lib/sitemaps/xml";

async function getPublishedStudies() {
  const updatedAt = sourceDates().caseStudies;
  return portfolioStudies
    .filter(({ slug }) => Object.hasOwn(caseStudyStories, slug))
    .map(({ slug }) => ({ slug, updatedAt }));
}

export async function GET(request: Request) {
  await connection();
  return contentSitemap("case-studies", getPublishedStudies, request);
}
