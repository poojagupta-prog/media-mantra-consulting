import "server-only";
import { cache } from "react";
import { connection } from "next/server";
import { prepareHtml } from "./html";
import type { Blog, PreparedBlog } from "./types";
import { cmsUrl } from "./cms-url";

function validBlog(value: unknown): value is Blog {
  if (!value || typeof value !== "object") return false;
  const b = value as Blog;
  const image = b.featuredImage;
  return (
    typeof b.id === "string" &&
    typeof b.slug === "string" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(b.slug) &&
    [b.title, b.category, b.excerpt, b.contentHtml].every(
      (v) => typeof v === "string" && v.trim().length,
    ) &&
    b.status === "published" &&
    Number.isFinite(Date.parse(b.publishedAt)) &&
    (!b.updatedAt || Number.isFinite(Date.parse(b.updatedAt))) &&
    Array.isArray(b.tags) &&
    b.tags.every((t) => typeof t === "string") &&
    typeof b.featured === "boolean" &&
    !!b.author &&
    (typeof b.author.name === "string" || b.author.name === null) &&
    !!b.seo &&
    typeof b.seo === "object" &&
    [b.seo.title, b.seo.description].every(
      (s) => s === undefined || typeof s === "string",
    ) &&
    (image === null ||
      (!!image &&
        typeof image.src === "string" &&
        typeof image.alt === "string" &&
        Number.isInteger(image.width) &&
        image.width > 0 &&
        Number.isInteger(image.height) &&
        image.height > 0)) &&
    Array.isArray(b.faqs) &&
    b.faqs.every(
      (f) =>
        f &&
        [f.id, f.question, f.answer].every(
          (s) => typeof s === "string" && s.trim(),
        ),
    ) &&
    typeof b.comments?.enabled === "boolean"
  );
}
export const getPublishedBlogs = cache(async (): Promise<Blog[]> => {
  await connection();
  const response = await fetch(cmsUrl(), {
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error("The Consulting journal is unavailable");
  const data = await response.json();
  if (!Array.isArray(data?.items) || !data.items.every(validBlog))
    throw new Error("Invalid Consulting catalogue");
  return data.items;
});
export const getBlogs = cache(async (): Promise<PreparedBlog[]> =>
  (await getPublishedBlogs()).map((blog) => ({
    ...blog,
    ...prepareHtml(blog.contentHtml!),
    hasLocalBody: false,
  })),
);
export const getBlog = cache(async (slug: string) =>
  (await getBlogs()).find((blog) => blog.slug === slug),
);
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mediamantraconsulting.com"
).replace(/\/$/, "");
