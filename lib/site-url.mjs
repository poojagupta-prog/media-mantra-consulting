/** @param {URL} url */
export function normalizeSiteUrl(url) {
  if (url.hostname === "www.mediamantraconsulting.com") {
    url.hostname = "mediamantraconsulting.com";
    url.protocol = "https:";
    url.port = "";
  }
  return url;
}

export function configuredSiteUrl() {
  return normalizeSiteUrl(
    new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mediamantraconsulting.com"),
  );
}
