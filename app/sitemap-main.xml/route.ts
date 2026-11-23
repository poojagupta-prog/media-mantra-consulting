import { services } from "@/components/common/data";
import { contentEntries, siteOrigin, xmlResponse } from "@/lib/sitemaps/xml";

export function GET() {
  const paths: string[] = JSON.parse(process.env.SITEMAP_STATIC_PATHS!);
  const origin = siteOrigin();
  return xmlResponse([
    ...paths.map((path) => ({ url: origin + path })),
    ...contentEntries("services", services),
  ]);
}
