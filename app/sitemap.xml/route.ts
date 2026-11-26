import { getPublishedBlogs } from "@/lib/blogs/repository";
import { publishedContentEntries, siteOrigin, sitemapResponse, sourceDates } from "@/lib/sitemaps/xml";

export async function GET(request: Request) {
  const origin = siteOrigin();
  const dates = sourceDates();
  const blogs = await getPublishedBlogs().catch(() => []);
  const blogLastModified = publishedContentEntries("blogs", blogs).reduce(
    (latest, { lastModified }) =>
      lastModified && new Date(lastModified) > new Date(latest)
        ? new Date(lastModified).toISOString()
        : latest,
    dates.blogSitemap,
  );

  return sitemapResponse([
    { url: `${origin}/sitemap-main.xml`, lastModified: dates.mainSitemap },
    { url: `${origin}/blog-sitemap.xml`, lastModified: blogLastModified },
    { url: `${origin}/case-studies-sitemap.xml`, lastModified: dates.caseStudiesSitemap },
  ], "index", request);
}
