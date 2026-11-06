// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
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
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

module.exports = nextConfig;
