import { execFileSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Ungrouped pages and the (public) group are public routing spaces.
// Keep protected sections in a private route group or list their segment here.
const privateSegment =
  /^(admin|api|auth|cms|dashboard|internal|login|logout|private|preview|settings|user|users|staff|editor|manage|members|signin|signup|password|session|callback|oauth|account|sign-in|sign-up|register|drafts?)(?:$|-)/i;
const excludedPaths = new Set(["/dubai-it", "/pr-agency-in-dubai-uae"]);

function staticPageFiles(appDir) {
  const paths = new Map();
  function visit(directory, segments) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const name = entry.name;
      if (entry.isFile() && /^page\.(tsx?|jsx?)$/.test(name)) {
        const path = "/" + segments.join("/");
        if (!excludedPaths.has(path)) paths.set(path, join(directory, name));
      }
      if (!entry.isDirectory()) continue;
      const child = join(directory, name);
      if (name === "(public)") {
        visit(child, segments);
      } else if (
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) &&
        !privateSegment.test(name)
      ) {
        visit(child, [...segments, name]);
      }
    }
  }
  visit(appDir, []);
  return paths;
}

export function staticPagePaths(appDir) {
  return [...staticPageFiles(appDir).keys()].sort();
}

function sourceModified(root, ...files) {
  const dates = files.map((file) => {
    try {
      const date = execFileSync("git", ["--literal-pathspecs", "log", "-1", "--format=%cI", "--", file], {
        cwd: root,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
      if (date) return Date.parse(date);
    } catch {
      // Source archives may have neither Git nor its history.
    }
    return sourceFileModified(join(root, file));
  });
  return new Date(Math.max(...dates)).toISOString();
}

function sourceFileModified(path) {
  const stat = statSync(path);
  if (!stat.isDirectory()) return stat.mtimeMs;
  return Math.max(
    stat.mtimeMs,
    ...readdirSync(path).map((file) => sourceFileModified(join(path, file))),
  );
}

export function sitemapSourceDates(root) {
  const pages = [...staticPageFiles(join(root, "app"))]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, file]) => ({
      path,
      lastModified: sourceModified(root, relative(root, file)),
    }));
  const services = sourceModified(root, "app/services/[slugs]", "components/common/data.ts");
  const caseStudies = sourceModified(root, "app/case-studies/[slug]", "components/CaseStudies");

  return {
    pages,
    services,
    caseStudies,
    mainSitemap: [
      sourceModified(root, "app/sitemap-main.xml/route.ts", "lib/sitemaps/static-pages.mjs", "lib/sitemaps/xml.ts"),
      services,
      ...pages.map(({ lastModified }) => lastModified),
    ].sort().at(-1),
    blogSitemap: sourceModified(root, "app/blog-sitemap.xml/route.ts", "lib/sitemaps/xml.ts"),
    caseStudiesSitemap: [
      sourceModified(root, "app/case-studies-sitemap.xml/route.ts", "lib/sitemaps/xml.ts"),
      caseStudies,
    ].sort().at(-1),
  };
}
