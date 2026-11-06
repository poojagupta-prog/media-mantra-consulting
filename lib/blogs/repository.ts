import { cache } from "react";
import { blogs } from "./data";
import type { BlogRepository, PreparedBlog } from "./types";
import { prepareHtml } from "./html";
import { blogBodies } from "./bodies";
import { prepareLocalBody } from "./local-body";

/** Replace this adapter with a CMS implementation returning the same Blog model. */
const repository: BlogRepository = {
  async getAll() {
    return blogs;
  },
};
export const getBlogs = cache(async (): Promise<PreparedBlog[]> => {
  const blogs = await repository.getAll();
  return blogs
    .map((blog) => {
      const Body = blogBodies[blog.slug];
      if (blog.contentHtml) {
        return { ...blog, ...prepareHtml(blog.contentHtml), hasLocalBody: false };
      }
      if (!Body) throw new Error(`Missing blog body for ${blog.slug}`);
      return {
        ...blog,
        contentHtml: "",
        ...prepareLocalBody(Body()),
        hasLocalBody: true,
      };
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
});
export const getBlog = cache(async (slug: string) =>
  (await getBlogs()).find((blog) => blog.slug === slug),
);
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mediamantraconsulting.com"
).replace(/\/$/, "");
