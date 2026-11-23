import { siteOrigin, sitemapResponse } from "@/lib/sitemaps/xml";

export function GET(request: Request) {
  const origin = siteOrigin();
  return sitemapResponse(["sitemap-main.xml", "blog-sitemap.xml", "case-studies-sitemap.xml"]
    .map((name) => ({ url: `${origin}/${name}` })), "index", request);
}
