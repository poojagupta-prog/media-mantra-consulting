import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { getPublishedBlogs } from "@/lib/blogs/repository";
import { blogImageSources, socialImageSize } from "@/lib/blogs/social-image";

const maxImageBytes = 20 * 1024 * 1024;

async function loadImage(src: string) {
  const localOrigin = "https://local.invalid";
  const url = new URL(src, localOrigin);
  if (url.origin === localOrigin && src.startsWith("/images/")) {
    const path = url.pathname;
    if (!path.startsWith("/images/")) return;
    return readFile(join(process.cwd(), "public", path));
  }
  const mediaOrigin = process.env.CONSULTING_MEDIA_ORIGIN;
  const allowed =
    (mediaOrigin && url.origin === new URL(mediaOrigin).origin) ||
    (["https://cms.mediamantraglobal.com", "https://cms-dev.mediamantraglobal.com"].includes(url.origin) &&
      url.pathname.startsWith("/api/uploads/")) ||
    url.origin === "https://images.unsplash.com";
  if (!allowed || url.username || url.password) return;

  const response = await fetch(url, {
    redirect: "error",
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok || !response.body) return;

  const chunks: Uint8Array[] = [];
  let size = 0;
  const reader = response.body.getReader();
  for (;;) {
    const { done, value } = await reader.read();
    if (done) return Buffer.concat(chunks, size);
    size += value.byteLength;
    if (size > maxImageBytes) {
      await reader.cancel();
      return;
    }
    chunks.push(value);
  }
}

export async function GET(
  _request: Request,
  { params }: RouteContext<"/blogs/[slug]/social-image/[card]">,
) {
  const { slug, card } = await params;
  if (card !== "og" && card !== "twitter") return new Response(null, { status: 404 });
  const blog = (await getPublishedBlogs()).find((post) => post.slug === slug);
  if (!blog) return new Response(null, { status: 404 });

  for (const src of blogImageSources(blog, card)) {
    try {
      const input = await loadImage(src);
      if (!input) continue;
      const image = await sharp(input, { limitInputPixels: 40_000_000 })
        .autoOrient()
        .resize({ ...socialImageSize, fit: "cover" })
        .flatten({ background: "#ffffff" })
        .jpeg({ quality: 85 })
        .toBuffer();
      return new Response(new Uint8Array(image), {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=300, s-maxage=300",
        },
      });
    } catch {
      // Try the next CMS image if this one is unavailable or invalid.
    }
  }
  return new Response(null, { status: 404 });
}
