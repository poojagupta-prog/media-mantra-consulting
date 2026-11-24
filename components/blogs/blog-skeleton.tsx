export function BlogListingSkeleton() {
  return (
    <section id="articles" className="media-wrap blog-library">
      <p className="sr-only" role="status">Loading articles…</p>
      <div className="blog-skeleton-listing" aria-hidden="true">
        <div className="blog-skeleton-block blog-skeleton-heading" />
        <div className="blog-skeleton-block blog-skeleton-search" />
        <div className="blog-skeleton-topics">
          {[1, 2, 3].map((topic) => (
            <div key={topic} className="blog-skeleton-block" />
          ))}
        </div>
        <div className="blog-grid blog-editorial-grid">
          {[1, 2, 3].map((card) => (
            <div className="blog-card" key={card}>
              <div className="blog-card-link">
                <div className="blog-image blog-skeleton-block" />
                <div className="blog-card-copy">
                  <div className="blog-skeleton-block blog-skeleton-label" />
                  <div className="blog-skeleton-block blog-skeleton-title" />
                  <div className="blog-skeleton-block blog-skeleton-summary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogArticleSkeleton() {
  return (
    <div className="blog-page blog-detail">
      <p className="sr-only" role="status">Loading article…</p>
      <div aria-hidden="true">
        <div className="blog-cover blog-skeleton-block blog-skeleton-cover" />
        <div className="media-wrap blog-article-header">
          <div className="blog-skeleton-block blog-skeleton-label" />
          <div className="blog-skeleton-block blog-skeleton-heading" />
          <div className="blog-skeleton-block blog-skeleton-summary" />
        </div>
      </div>
    </div>
  );
}
