import assert from "node:assert/strict";
import { test } from "node:test";
import { contentSitemap } from "../lib/sitemaps/xml.ts";
import { staticPagePaths } from "../lib/sitemaps/static-pages.mjs";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

for (const section of ["blogs", "case-studies"]) {
  test(`${section} reflects publication changes between requests`, async () => {
    const records = [];
    const read = async () => records;
    const fetchXml = async () => {
      const response = await contentSitemap(section, read);
      assert.equal(response.status, 200);
      assert.match(response.headers.get("Content-Type"), /application\/xml/);
      assert.equal(response.headers.get("Cache-Control"), "no-store");
      return response.text();
    };
    records.push(
      { slug: "new-post", status: "draft" },
      { slug: "../admin" },
      { slug: "later", publishedAt: "2999-01-01" },
      { slug: "gone", status: "deleted" },
    );
    assert.doesNotMatch(await fetchXml(), /<loc>/);
    records[0].status = "published";
    records[0].publishedAt = "2025-01-01";
    records[0].updatedAt = "invalid";
    records.push({ ...records[0] });
    const published = await fetchXml();
    assert.equal(published.match(/<loc>/g)?.length, 1);
    assert.ok(published.includes(`/${section}/new-post</loc>`));
    assert.match(published, /<lastmod>2025-01-01T00:00:00.000Z<\/lastmod>/);
    records.pop();
    records[0].updatedAt = "2026-01-01";
    assert.match(await fetchXml(), /<lastmod>2026-01-01/);
    records[0].status = "unpublished";
    assert.doesNotMatch(await fetchXml(), /<loc>/);
    records.splice(0);
    const failed = await contentSitemap(section, async () => {
      throw new Error("offline");
    });
    assert.equal(failed.status, 503);
    assert.ok(failed.headers.has("Retry-After"));
    assert.equal(failed.headers.get("Cache-Control"), "no-store");
    assert.match(await fetchXml(), /<urlset[^>]*>\s*<\/urlset>/);
  });
}

test("discovers new public page files and omits private and noncanonical routes", (t) => {
  const root = mkdtempSync(join(tmpdir(), "sitemap-pages-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const path of [
    "",
    "(public)/culture",
    "services",
    "services/[slug]",
    "dubai-it",
    "careers/openings",
    "admin/tools",
    "api/v1",
    "(private)/tools",
    "cms",
    "auth",
    "_hidden",
    "@modal",
  ]) {
    mkdirSync(join(root, path), { recursive: true });
    writeFileSync(join(root, path, "page.tsx"), "");
  }
  assert.deepEqual(staticPagePaths(root), [
    "/",
    "/careers/openings",
    "/culture",
    "/services",
  ]);
});

test("browser navigation renders anchors and raw XML remains available", async () => {
  const headers = {
    accept: "text/html,application/xml",
    "sec-fetch-mode": "navigate",
  };
  const records = async () => [{ slug: "new-post", updatedAt: "2026-01-01" }];
  const url = "https://example.com/blog-sitemap.xml";
  const html = await contentSitemap(
    "blogs",
    records,
    new Request(url, { headers }),
  );
  assert.match(html.headers.get("content-type"), /text\/html/);
  const body = await html.text();
  assert.ok(body.includes('href="/blogs/new-post"'));
  assert.ok(body.includes('href="/sitemap.xml"'));
  assert.ok(body.includes('href="?raw=1"'));
  assert.ok(body.includes("Updated 2026-01-01"));
  for (const request of [
    new Request(url + "?raw=1", { headers }),
    new Request(url),
  ]) {
    const xml = await contentSitemap("blogs", records, request);
    assert.match(xml.headers.get("content-type"), /application\/xml/);
    assert.doesNotMatch(await xml.text(), /<a /);
  }
});
