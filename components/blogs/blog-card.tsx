import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PreparedBlog } from "@/lib/blogs/types";
import { blogDate } from "@/lib/blogs/query";
export function BlogCard({
  blog,
  featured = false,
}: {
  blog: PreparedBlog;
  featured?: boolean;
}) {
  return (
    <article className={`blog-card ${featured ? "blog-featured" : ""}`}>
      <Link href={`/blogs/${blog.slug}`} className="blog-card-link">
        <div className="blog-image">
          {blog.featuredImage && (
            <Image
              src={blog.featuredImage.src}
              alt={blog.featuredImage.alt}
              fill
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 60vw"
                  : "(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
              }
              preload={featured}
            />
          )}
          <span className="blog-arrow">
            <ArrowUpRight size={21} aria-hidden="true" />
          </span>
        </div>
        <div className="blog-card-copy">
          <div className="blog-card-kicker">
            <p className="media-label">
              {featured && (
                <span className="blog-latest-label">
                  Latest story <span aria-hidden="true">/</span>{" "}
                </span>
              )}
              {blog.category}
            </p>
            <div className="blog-meta">
              {blog.author.name && <span>{blog.author.name}</span>}
              <time dateTime={blog.publishedAt}>
                {blogDate(blog.publishedAt)}
              </time>
              <span>{blog.readingMinutes} min read</span>
            </div>
          </div>
          <h3>{blog.title}</h3>
          <p className="blog-excerpt">{blog.excerpt}</p>
          <span className="blog-read-link">
            {featured ? "Read the full story" : "Read article"}{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
