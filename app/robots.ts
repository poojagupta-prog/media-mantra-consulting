import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { siteOrigin } from "@/lib/sitemaps/xml";

const crawlers = [
  "*",
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "CCBot",
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  await connection();

  return {
    rules: crawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    sitemap: `${siteOrigin()}/sitemap.xml`,
  };
}
