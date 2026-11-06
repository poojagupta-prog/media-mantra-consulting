import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogs, SITE_URL } from "@/lib/blogs/repository";
import { listingUrl, queryBlogs, PAGE_SIZE } from "@/lib/blogs/query";
import { BlogCard } from "@/components/blogs/blog-card";
import { BlogSearch } from "@/components/blogs/blog-search";
import { Closing } from "@/components/media/shared";
import "./blogs.css";
type Params = Promise<Record<string, string | string[] | undefined>>;
const first = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;
async function results(searchParams: Params) {
  const params = await searchParams;
  const blogs = await getBlogs();
  return {
    blogs,
    result: queryBlogs(blogs, {
      page: first(params.page),
      q: first(params.q),
      category: first(params.category),
    }),
  };
}
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Params;
}): Promise<Metadata> {
  const { result } = await results(searchParams);
  const title = `Blogs & perspectives${result.page > 1 ? ` · Page ${result.page}` : ""}`;
  const url = `${SITE_URL}${listingUrl({ page: String(result.page), q: result.q, category: result.category })}`;
  return {
    title,
    description:
      "Ideas on reputation, culture and communications. Explore the latest perspectives from Media Mantra Consulting.",
    alternates: { canonical: url },
    robots: result.q ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      url,
      type: "website",
      images: [`${SITE_URL}/logo.png`],
    },
  };
}
export default function BlogsPage({ searchParams }: { searchParams: Params }) {
  return (
    <div className="blog-page">
      <header className="blog-hero media-wrap">
        <p className="media-label">
          <span className="blog-label-dot" /> Blogs & insights
        </p>
        <div className="blog-hero-row">
          <h1>
            Behind the story.
            <br />
            <em>Ahead of the curve.</em>
          </h1>
          <div className="blog-hero-intro">
            <p>
              Fresh thinking on reputation, culture and the conversations that
              shape brands.
            </p>
            <a href="#articles" className="blog-explore">
              Find your next read <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
      <Suspense
        fallback={
          <div className="media-wrap blog-loading" role="status">
            Finding your next read…
          </div>
        }
      >
        <BlogListing searchParams={searchParams} />
      </Suspense>
      <Closing />
    </div>
  );
}
async function BlogListing({ searchParams }: { searchParams: Params }) {
  const { blogs, result } = await results(searchParams);
  const categories = [...new Set(blogs.map((blog) => blog.category))].sort();
  const url = (page: number) =>
    listingUrl({ page: String(page), q: result.q, category: result.category });
  return (
    <>
      <section
        className="media-wrap blog-library"
        aria-labelledby="articles-title"
        id="articles"
      >
        <div className="blog-section-heading">
          <div>
            <p className="media-label">Explore the journal</p>
            <h2 id="articles-title">
              {result.q || result.category
                ? "Your reading list"
                : "The latest perspectives"}
            </h2>
          </div>
          <p>
            {result.total} {result.total === 1 ? "perspective" : "perspectives"}{" "}
            to explore
          </p>
        </div>
        <BlogSearch q={result.q} category={result.category} />
        <nav className="blog-topics" aria-label="Article topics">
          <Link
            href={listingUrl({ q: result.q })}
            aria-current={!result.category ? "page" : undefined}
          >
            All perspectives
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={listingUrl({ q: result.q, category })}
              aria-current={result.category === category ? "page" : undefined}
            >
              {category}
            </Link>
          ))}
        </nav>
        {(result.q || result.category) && (
          <p className="blog-result-note">
            {result.q && <>Results for “{result.q}” · </>}
            {result.category && <>{result.category} · </>}
            <Link href="/blogs">Clear filters</Link>
          </p>
        )}
        {result.items.length ? (
          <div className="blog-grid blog-editorial-grid">
            {result.items.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                featured={blog.id === blogs[0]?.id}
              />
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <h3>No articles found.</h3>
            <p>Try another phrase or explore all perspectives.</p>
            <Link href="/blogs" className="media-link">
              Explore the journal <ArrowRight size={18} />
            </Link>
          </div>
        )}
        {result.total > 0 && (
          <div className="blog-pagination-row">
            <p>
              Showing {(result.page - 1) * PAGE_SIZE + 1}–
              {Math.min(result.page * PAGE_SIZE, result.total)} of{" "}
              {result.total}
            </p>
            <nav className="blog-pagination" aria-label="Blog pagination">
              {result.page > 1 ? (
                <Link
                  rel="prev"
                  href={url(result.page - 1)}
                  aria-label="Previous page"
                >
                  <ArrowLeft size={16} /> Previous
                </Link>
              ) : (
                <span aria-disabled="true">
                  <ArrowLeft size={16} /> Previous
                </span>
              )}
              {Array.from(
                { length: result.totalPages },
                (_, index) => index + 1,
              ).map((page) => (
                <Link
                  key={page}
                  href={url(page)}
                  aria-label={`Page ${page}`}
                  aria-current={page === result.page ? "page" : undefined}
                >
                  {page}
                </Link>
              ))}
              {result.page < result.totalPages ? (
                <Link
                  rel="next"
                  href={url(result.page + 1)}
                  aria-label="Next page"
                >
                  Next <ArrowRight size={16} />
                </Link>
              ) : (
                <span aria-disabled="true">
                  Next <ArrowRight size={16} />
                </span>
              )}
            </nav>
          </div>
        )}
      </section>
    </>
  );
}
