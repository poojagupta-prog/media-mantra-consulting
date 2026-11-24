import "server-only";
export function cmsUrl() {
  const base = new URL(process.env.CONSULTING_CMS_API_BASE_URL || "");
  if (
    !["http:", "https:"].includes(base.protocol) ||
    base.pathname.replace(/\/$/, "") !== "/api/consulting" ||
    base.search ||
    base.hash ||
    base.username ||
    base.password
  )
    throw new Error("Invalid Consulting CMS namespace");
  return new URL("/api/consulting/blogs", base);
}
