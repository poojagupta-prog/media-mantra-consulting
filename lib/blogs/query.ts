import type { BlogQuery, PreparedBlog } from "./types";
export const PAGE_SIZE = 9;
export function queryBlogs(blogs: PreparedBlog[], query: BlogQuery) {
  const q = (query.q || "").trim().slice(0, 160);
  const category = (query.category || "").trim().slice(0, 80);
  const terms = q.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const filtered = blogs.filter(
    (blog) =>
      (!category || blog.category === category) &&
      terms.every((term) =>
        `${blog.title} ${blog.excerpt} ${blog.category} ${blog.tags.join(" ")}`
          .toLocaleLowerCase()
          .includes(term),
      ),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const requested = /^\d+$/.test(query.page || "") ? Number(query.page) : 1;
  const page = Math.min(
    totalPages,
    Math.max(1, Number.isSafeInteger(requested) ? requested : 1),
  );
  return {
    items: filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    total: filtered.length,
    totalPages,
    page,
    q,
    category,
  };
}
export function listingUrl({ page = "1", q = "", category = "" }: BlogQuery) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (category) params.set("category", category);
  if (page !== "1") params.set("page", page);
  return `/blogs${params.size ? `?${params}` : ""}`;
}
export const blogDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
