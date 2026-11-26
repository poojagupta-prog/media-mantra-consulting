// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Apply the host redirect before normalizing trailing slashes.
  skipTrailingSlashRedirect: true,
  redirects() {
    /** @type {import('next/dist/lib/load-custom-routes').RouteHas[]} */
    const apexHost = [{ type: "host", value: "mediamantraconsulting\\.com" }];
    return [
      {
        source: "/:path+/",
        has: apexHost,
        destination: "https://www.mediamantraconsulting.com/:path+/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: apexHost,
        destination: "https://www.mediamantraconsulting.com/:path*",
        permanent: true,
      },
      ...[
        "healthcare-pr-in-the-uae",
        "pr-vs-marketing-what-actually-drives-brand-growth-in-2026",
        "top-pr-firms-in-dubai-a-january-2026-breakdown-of-the-best",
        "reputation-building-for-luxury-lifestyle-brands-in-dubai",
        "social-media-pr-vs-traditional-media-what-dubai-brands-prefer",
        "crisis-management-in-uae-how-brands-are-staying-resilient",
        "press-release-trends-in-dubai-press-release-digital-integration-trends-dubai-pr-firms-use-in-2026",
        "how-dubais-hospitality-pr-firms-can-lead-the-future-of-global-tourism",
        "the-future-of-luxury-brand-pr-in-the-uae-and-what-leading-companies-are-doing-differently",
        "leading-trends-and-innovations-shaping-the-future-of-real-estate-pr-companies-in-dubai",
        "fashion-meets-strategy-how-pr-agencies-in-dubai-are-redefining-fashion-brand-identity",
        "why-your-brand-needs-a-leading-pr-agency-in-dubai-for-success",
        "a-beginners-guide-to-understand-pr-agencies-their-services-in-dubai",
        "why-top-pr-agencies-in-dubai-are-a-must-for-expanding-into-the-middle-east-market",
        "the-rise-of-digital-pr-how-the-best-public-relations-agency-in-dubai-is-leading-the-way",
        "how-a-media-relations-agency-in-dubai-builds-trust-and-credibility-for-brands",
        "how-startups-can-leverage-dubai-pr-and-communications-services-for-market-entry",
      ].flatMap((slug) =>
        [`/${slug}`, `/${slug}/`].map((source) => ({
          source,
          destination: `/blogs/${slug}`,
          statusCode: 301,
        })),
      ),
      { source: "/:path+/", destination: "/:path+", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      {
        source: "/terms-and-conditions",
        destination: "/terms-conditions",
        permanent: true,
      },
      { source: "/contact", destination: "/contact-us", permanent: true },
      ...[
        "/b2b-pr-agency-in-dubai",
        "/event-pr-agency",
        "/fashion-pr-agency-in-dubai-across-uae",
        "/financial-pr-agency-in-dubai",
        "/healthcare-pr-agency",
        "/dubais-leading-luxury-lifestyle-pr-agency",
        "/pr-agencies-in-uae",
      ].map((source) => ({ source, destination: "/", permanent: true })),
    ];
  },
  images: {
    remotePatterns: [
      ...(process.env.CONSULTING_MEDIA_ORIGIN
        ? [new URL("/**", process.env.CONSULTING_MEDIA_ORIGIN)]
        : []),
      new URL("https://cms-dev.mediamantraglobal.com/api/uploads/**"),
      new URL("https://cms.mediamantraglobal.com/api/uploads/**"),
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
};

/** @param {string} phase */
module.exports = async (phase) => {
  if (
    phase === "phase-production-build" ||
    phase === "phase-development-server"
  ) {
    const { sitemapSourceDates } = await import("./lib/sitemaps/static-pages.mjs");
    return {
      ...nextConfig,
      env: {
        SITEMAP_SOURCE_DATES: JSON.stringify(sitemapSourceDates(__dirname)),
      },
    };
  }
  return nextConfig;
};
