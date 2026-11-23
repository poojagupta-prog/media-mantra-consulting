import { siteOrigin, xmlResponse } from "@/lib/sitemaps/xml";

export function GET() {
  const origin = siteOrigin();
  return xmlResponse(["sitemap-main.xml", "blog-sitemap.xml", "case-studies-sitemap.xml"]
    .map((name) => ({ url: `${origin}/${name}` })), true);
}
