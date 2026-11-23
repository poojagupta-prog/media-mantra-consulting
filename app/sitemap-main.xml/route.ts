import { services } from "@/components/common/data";
import { contentEntries, siteOrigin, sitemapResponse } from "@/lib/sitemaps/xml";

export function GET(request: Request) {
  const paths: string[] = JSON.parse(process.env.SITEMAP_STATIC_PATHS!);
  const origin = siteOrigin();
  return sitemapResponse([
    ...paths.map((path) => ({ url: origin + path })),
    ...contentEntries("services", services),
  ], "main", request);
}
