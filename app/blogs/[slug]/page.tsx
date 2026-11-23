import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getBlog, getBlogs, SITE_URL } from "@/lib/blogs/repository";
import { blogDate } from "@/lib/blogs/query";
import { blogBodies } from "@/lib/blogs/bodies";
import { BlogCard } from "@/components/blogs/blog-card";
import { TableOfContents, ShareTools } from "@/components/blogs/article-tools";
import "../blogs.css";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return (await getBlogs()).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog((await params).slug);
  if (!blog) notFound();
  const url = `${SITE_URL}/blogs/${blog.slug}`;
  const images = blog.featuredImage
    ? [
        {
          url: new URL(blog.featuredImage.src, SITE_URL).href,
          alt: blog.featuredImage.alt,
        },
      ]
    : [];
  return {
    title: { absolute: blog.seo.title || blog.title },
    description: blog.seo.description || blog.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.seo.description || blog.excerpt,
      url,
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      authors: blog.author.name ? [blog.author.name] : [],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images,
    },
  };
}
export default function BlogDetailPage(props: Props) {
  return (
    <Suspense
      fallback={
        <div className="media-wrap blog-loading" role="status">
          Opening this perspective…
        </div>
      }
    >
      <Article {...props} />
    </Suspense>
  );
}
async function Article({ params }: Props) {
  const blog = await getBlog((await params).slug);
  if (!blog) notFound();
  const Body = blog.hasLocalBody ? blogBodies[blog.slug] : undefined;
  const blogs = await getBlogs();
  const index = blogs.findIndex((item) => item.id === blog.id);
  const previous = blogs[index + 1];
  const next = blogs[index - 1];
  const related = blogs
    .filter((item) => item.id !== blog.id)
    .sort(
      (a, b) =>
        Number(b.category === blog.category) -
        Number(a.category === blog.category),
    )
    .slice(0, 3);
  const url = `${SITE_URL}/blogs/${blog.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishedAt,
    ...(blog.author.name
      ? { author: { "@type": "Organization", name: blog.author.name } }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "Media Mantra Consulting",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    image: blog.featuredImage
      ? new URL(blog.featuredImage.src, SITE_URL).href
      : undefined,
    mainEntityOfPage: url,
    url,
    articleSection: blog.category,
    keywords: blog.tags.join(", "),
    inLanguage: "en",
  };
  return (
    <div className="blog-page blog-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      {blog.featuredImage && (
        <figure className="blog-cover">
          <Image
            src={blog.featuredImage.src}
            alt={blog.featuredImage.alt}
            width={blog.featuredImage.width}
            height={blog.featuredImage.height}
            sizes="100vw"
            preload
          />
        </figure>
      )}
      <header className="media-wrap blog-article-header">
        <Link className="blog-back" href="/blogs">
          <ArrowLeft size={16} /> Back to the journal
        </Link>
        <p className="media-label">{blog.category} / Perspective</p>
        <h1>{blog.title}</h1>
        <div className="blog-article-byline">
          <span>
            {blog.author.name ? (
              <>
                By <strong>{blog.author.name}</strong>
              </>
            ) : (
              "From the journal"
            )}
          </span>
          <time dateTime={blog.publishedAt}>{blogDate(blog.publishedAt)}</time>
          <span>{blog.readingMinutes} min read</span>
        </div>
      </header>
      <div className="media-wrap blog-reading-layout">
        <aside>
          <div className="blog-sidebar">
            <TableOfContents entries={blog.toc} />
            <Link className="media-link" href="/blogs">
              Explore more perspectives <ArrowRight size={16} />
            </Link>
          </div>
        </aside>
        <div className="blog-reading-main">
          <article className="blog-prose" aria-label={blog.title}>
            {Body ? (
              <Body />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
            )}
          </article>
          {blog.tags.length > 0 && (
            <ul className="blog-tags" aria-label="Article tags">
              {blog.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
          {/* TODO: Restore the Comments component once the CMS is ready. */}
        </div>
        <aside className="blog-share-rail">
          <ShareTools title={blog.title} url={url} />
        </aside>
      </div>
      <nav className="media-wrap blog-adjacent" aria-label="Adjacent articles">
        {previous ? (
          <Link rel="prev" href={`/blogs/${previous.slug}`}>
            <span>
              <ArrowLeft size={16} /> Previous article
            </span>
            <strong>{previous.title}</strong>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link rel="next" href={`/blogs/${next.slug}`}>
            <span>
              Next article <ArrowRight size={16} />
            </span>
            <strong>{next.title}</strong>
          </Link>
        ) : (
          <div />
        )}
      </nav>
      <section className="blog-related">
        <div className="media-wrap">
          <div className="blog-section-heading">
            <div>
              <p className="media-label">Keep exploring</p>
              <h2>Another point of view.</h2>
            </div>
            <Link className="media-link" href="/blogs">
              All perspectives <ArrowRight size={17} />
            </Link>
          </div>
          <div className="blog-grid">
            {related.map((item) => (
              <BlogCard blog={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
