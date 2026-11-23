import { connection } from "next/server";
import { getPublishedBlogs } from "@/lib/blogs/repository";
import { contentSitemap } from "@/lib/sitemaps/xml";

export async function GET(request: Request) {
  await connection();
  return contentSitemap("blogs", getPublishedBlogs, request);
}
