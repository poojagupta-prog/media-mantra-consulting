import { services } from "@/components/common/data";
import { contentEntries, siteOrigin, sitemapResponse, sourceDates } from "@/lib/sitemaps/xml";

export function GET(request: Request) {
  const dates = sourceDates();
  const origin = siteOrigin();
  return sitemapResponse([
    ...dates.pages.map(({ path, lastModified }) => ({ url: origin + path, lastModified })),
    ...contentEntries("services", services, dates.services),
  ], "main", request);
}
