import type { MetadataRoute } from "next";

export function siteOrigin() {
  const url = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mediamantraconsulting.com");
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password ||
      url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin");
  }
  return url.origin;
}

const entities: Record<string, string> = {
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
};

export function xmlResponse(entries: MetadataRoute.Sitemap, index = false) {
  const root = index ? "sitemapindex" : "urlset";
  const tag = index ? "sitemap" : "url";
  const seen = new Set<string>();
  const lines = ['<?xml version="1.0" encoding="UTF-8"?>',
    `<${root} xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`];
  for (const { url, lastModified } of entries) {
    if (seen.has(url)) continue;
    seen.add(url);
    const loc = url.replace(/[&<>"']/g, (char) => entities[char]);
    const date = lastModified ? new Date(lastModified).toISOString() : undefined;
    lines.push(`  <${tag}><loc>${loc}</loc>${date ? `<lastmod>${date}</lastmod>` : ""}</${tag}>`);
  }
  lines.push(`</${root}>`);
  return new Response(lines.join("\n"), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}

type ContentRecord = {
  status?: "draft" | "scheduled" | "published" | "unpublished" | "deleted";
  slug: string;
  updatedAt?: string;
  publishedAt?: string;
};

export function contentEntries(section: string, records: readonly ContentRecord[]): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  return records.flatMap(({ slug, publishedAt, updatedAt }) => {
    if (typeof slug !== "string" || !/^[\p{L}\p{N}_-]+$/u.test(slug)) return [];
    const lastModified = [updatedAt, publishedAt].find((value) => value && Number.isFinite(Date.parse(value)));
    return [{ url: `${origin}/${section}/${encodeURIComponent(slug)}`, lastModified }];
  });
}

export async function contentSitemap(section: string, readPublished: () => Promise<readonly ContentRecord[]>) {
  try {
    const now = Date.now();
    const records = (await readPublished()).filter(({ status, publishedAt }) =>
      (!status || status === "published") && (!publishedAt || Date.parse(publishedAt) <= now),
    );
    const response = xmlResponse(contentEntries(section, records));
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    console.error(`Failed to generate the ${section} sitemap`);
    return new Response("Sitemap temporarily unavailable", {
      status: 503, headers: { "Cache-Control": "no-store", "Retry-After": "60" },
    });
  }
}
