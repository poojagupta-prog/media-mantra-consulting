import { connection } from "next/server";
import { getPublishedBlogs } from "@/lib/blogs/repository";
import { contentSitemap } from "@/lib/sitemaps/xml";

export async function GET() {
  await connection();
  return contentSitemap("blogs", getPublishedBlogs);
}
