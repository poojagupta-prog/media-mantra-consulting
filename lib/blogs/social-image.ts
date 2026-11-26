import type { Blog } from "./types";

export const socialImageSize = { width: 1200, height: 630 };
export type SocialCard = "og" | "twitter";

export function blogImageSources(blog: Blog, card: SocialCard) {
  const { ogImage, metaImage } = blog.seo;
  const preferred = card === "og" ? [ogImage, metaImage] : [metaImage, ogImage];
  return [...new Set([...preferred, blog.featuredImage?.src].filter(
    (src): src is string => typeof src === "string" && !!src.trim(),
  ))];
}
