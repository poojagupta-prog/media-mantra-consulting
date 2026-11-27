import { JsonLd } from "@/components/common/json-ld";
import { organizationRef, schemaContext, siteUrl } from "@/lib/schema";
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getBlog, getBlogs, SITE_URL } from "@/lib/blogs/repository";
import { blogImageSources, socialImageSize, type SocialCard } from "@/lib/blogs/social-image";
import type { Blog } from "@/lib/blogs/types";
import { blogDate } from "@/lib/blogs/query";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { Comments } from "@/components/blogs/comments";
import { BlogCard } from "@/components/blogs/blog-card";
import { BlogFaq } from "@/components/blogs/blog-faq";
import { BlogImage } from "@/components/blogs/blog-image";
import { BlogArticleSkeleton } from "@/components/blogs/blog-skeleton";
import { TableOfContents, ShareTools } from "@/components/blogs/article-tools";
import "../blogs.css";

// Work around the Next.js 16.4.6 static-shell validator invariant.
export const instant = false;

type Props = { params: Promise<{ slug: string }> };
function blogCanonicalUrl(blog: Blog) {
  const raw = blog.seo.canonicalUrl;
  if (typeof raw === "string" && raw.trim() && URL.canParse(raw, siteUrl)) {
    const canonical = new URL(raw, siteUrl);
    if (canonical.protocol === "https:" || canonical.protocol === "http:") {
      return canonical.href;
    }
  }
  return new URL(`/blogs/${blog.slug}`, siteUrl).href;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog((await params).slug);
  if (!blog) notFound();
  const { seo } = blog;
  const articlePath = `/blogs/${blog.slug}`;
  const url = blogCanonicalUrl(blog);
  const title = seo.title || blog.title;
  const description = seo.description || blog.excerpt;
  const keywords = Array.isArray(seo.metaKeywords)
    ? seo.metaKeywords.filter((keyword) => typeof keyword === "string" && keyword.trim())
    : [];
  const images = (card: SocialCard) => blogImageSources(blog, card).length
    ? [{
        url: new URL(`${articlePath}/social-image/${card}`, siteUrl).href,
        alt: blog.featuredImage?.alt || blog.title,
        ...socialImageSize,
      }]
    : [];
  return {
    title: { absolute: title },
    description,
    ...(keywords.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      url,
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      authors: blog.author.name ? [blog.author.name] : [],
      images: images("og"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images("twitter"),
    },
  };
}
export default function BlogDetailPage(props: Props) {
  return (
    <Suspense fallback={<BlogArticleSkeleton />}>
      <Article {...props} />
    </Suspense>
  );
}
async function Article({ params }: Props) {
  const blog = await getBlog((await params).slug);
  if (!blog) notFound();
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
  const url = blogCanonicalUrl(blog);
  const { name: author, url: cmsAuthorUrl } = blog.author;
  const authorUrl =
    typeof cmsAuthorUrl === "string" &&
    /^https?:\/\//i.test(cmsAuthorUrl) &&
    URL.canParse(cmsAuthorUrl)
      ? new URL(cmsAuthorUrl).href
      : new URL("/about-us", siteUrl).href;
  const structuredData = {
    "@context": schemaContext,
    "@type": "BlogPosting",
    headline: blog.seo.title || blog.title,
    description: blog.seo.description || blog.excerpt,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || undefined,
    ...(author
      ? { author: { "@type": "Organization", name: author, url: authorUrl } }
      : {}),
    publisher: organizationRef,
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
      <Breadcrumbs
        article
        labels={{ "/blogs": "Blogs", ["/blogs/" + blog.slug]: blog.title }}
      />
      <JsonLd data={structuredData} />
      {blog.featuredImage && (
        <figure className="blog-cover">
          <BlogImage
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
            <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
          </article>
          {blog.tags.length > 0 && (
            <ul className="blog-tags" aria-label="Article tags">
              {blog.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
          {!!blog.faqs?.length && (
            <BlogFaq key={blog.slug} faqs={blog.faqs} />
          )}
          {blog.comments?.enabled && (
            <Comments key={blog.slug} slug={blog.slug} />
          )}
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
