import { configuredSiteUrl } from "../site-url.mjs";
import type { MetadataRoute } from "next";
import type { sitemapSourceDates } from "./static-pages.mjs";

export function sourceDates(): ReturnType<typeof sitemapSourceDates> {
  return JSON.parse(process.env.SITEMAP_SOURCE_DATES!);
}

export function siteOrigin() {
  const url = configuredSiteUrl();
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin");
  }
  return url.origin;
}

const entities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

const titles = {
  index: "Sitemap index",
  main: "Main sitemap",
  blogs: "Blog sitemap",
  "case-studies": "Case studies sitemap",
};

function escapeMarkup(value: string) {
  return value.replace(/[&<>"']/g, (char) => entities[char]);
}

export function sitemapResponse(
  entries: MetadataRoute.Sitemap,
  section: keyof typeof titles,
  request?: Request,
) {
  const index = section === "index";
  const html =
    request?.headers.get("sec-fetch-mode") === "navigate" &&
    request.headers.get("accept")?.includes("text/html") &&
    !new URL(request.url).searchParams.has("raw");
  const seen = new Set<string>();
  const rows: string[] = [];
  for (const { url, lastModified } of entries) {
    if (seen.has(url)) continue;
    seen.add(url);
    const loc = escapeMarkup(url);
    const date = lastModified
      ? new Date(lastModified).toISOString()
      : undefined;
    if (html) {
      // Relative links keep preview and local navigation on the current site.
      const href = escapeMarkup(new URL(url).pathname);
      const modified = date
        ? `<time datetime="${date}">Updated ${date.slice(0, 10)}</time>`
        : "";
      rows.push(`<li><a href="${href}">${loc}</a>${modified}</li>`);
    } else {
      const tag = index ? "sitemap" : "url";
      rows.push(
        `  <${tag}><loc>${loc}</loc>${date ? `<lastmod>${date}</lastmod>` : ""}</${tag}>`,
      );
    }
  }

  const title = titles[section];
  const root = index ? "sitemapindex" : "urlset";
  const body = html
    ? `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,follow"><title>${title} | Media Mantra</title>
<link rel="stylesheet" href="/sitemap.css"></head><body><main>
<header><a href="/">Media Mantra</a><nav aria-label="Sitemap navigation">
${index ? "" : '<a href="/sitemap.xml">Sitemap index</a>'}<a href="?raw=1">View XML</a></nav></header>
<h1>${title}</h1><p>${seen.size} ${index ? "sitemap" : "URL"}${seen.size === 1 ? "" : "s"}</p>
<ul>${rows.join("\n")}</ul></main></body></html>`
    : [
        '<?xml version="1.0" encoding="UTF-8"?>',
        `<${root} xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
        ...rows,
        `</${root}>`,
      ].join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": `${html ? "text/html" : "application/xml"}; charset=utf-8`,
      "Cache-Control": "no-store",
      Vary: "Accept, Sec-Fetch-Mode",
    },
  });
}

type ContentRecord = {
  status?: "draft" | "scheduled" | "published" | "unpublished" | "deleted";
  slug: string;
  updatedAt?: string;
  publishedAt?: string;
};

export function contentEntries(
  section: string,
  records: readonly ContentRecord[],
  fallbackDate?: string,
): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  return records.flatMap(({ slug, publishedAt, updatedAt }) => {
    if (typeof slug !== "string" || !/^[\p{L}\p{N}_-]+$/u.test(slug)) return [];
    const lastModified = [updatedAt, publishedAt].find(
      (value) => value && Number.isFinite(Date.parse(value)),
    ) ?? fallbackDate;
    return [
      { url: `${origin}/${section}/${encodeURIComponent(slug)}`, lastModified },
    ];
  });
}

export function publishedContentEntries(section: string, records: readonly ContentRecord[]) {
  const now = Date.now();
  return contentEntries(section, records.filter(
    ({ status, publishedAt }) =>
      (!status || status === "published") &&
      (!publishedAt || Date.parse(publishedAt) <= now),
  ));
}

export async function contentSitemap(
  section: "blogs" | "case-studies",
  readPublished: () => Promise<readonly ContentRecord[]>,
  request?: Request,
) {
  try {
    return sitemapResponse(publishedContentEntries(section, await readPublished()), section, request);
  } catch {
    console.error(`Failed to generate the ${section} sitemap`);
    return new Response("Sitemap temporarily unavailable", {
      status: 503,
      headers: { "Cache-Control": "no-store", "Retry-After": "60" },
    });
  }
}
