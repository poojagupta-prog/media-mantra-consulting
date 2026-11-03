import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { createRequire } from "node:module";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";
import { prepareHtml, plainText } from "../lib/blogs/html.ts";
import { queryBlogs, listingUrl } from "../lib/blogs/query.ts";
import { parseComments, validateComment } from "../lib/blogs/comments.ts";
import { blogs as catalogue } from "../lib/blogs/data.js";
const require = createRequire(import.meta.url);
const localSource = readFileSync("lib/blogs/local-body.ts", "utf8");
const localCompiled = ts.transpileModule(localSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const localModule = { exports: {} };
runInNewContext(localCompiled, { module: localModule, exports: localModule.exports, require });
const blogs = catalogue.map((blog) => {
  const source = readFileSync(`lib/blogs/bodies/${blog.slug}.tsx`, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const compiledModule = { exports: {} };
  runInNewContext(compiled, { module: compiledModule, exports: compiledModule.exports, require });
  const body = compiledModule.exports.default();
  const html = renderToStaticMarkup(body);
  const prepared = prepareHtml(html);
  const local = localModule.exports.prepareLocalBody(body);
  assert.deepEqual(JSON.parse(JSON.stringify(local.toc)), prepared.toc);
  assert.ok(local.readingMinutes > 0);
  return { ...blog, ...prepared };
});
test("hardcoded catalogue has unique complete articles and local images", () => {
  assert.equal(new Set(blogs.map((blog) => blog.slug)).size, blogs.length);
  assert.ok(blogs.length > 9);
  for (const blog of blogs) {
    assert.ok(plainText(blog.contentHtml).length > 500);
    assert.ok(Number.isFinite(Date.parse(blog.publishedAt)));
    assert.ok(blog.author.name);
    assert.ok(blog.sourceUrl);
    assert.ok(
      blog.featuredImage && existsSync(`public${blog.featuredImage.src}`),
    );
  }
});
test("pagination covers all articles exactly once and bounds invalid inputs", () => {
  const first = queryBlogs(blogs, {});
  const second = queryBlogs(blogs, { page: "2" });
  assert.equal(first.items.length, 9);
  assert.equal(second.items.length, 8);
  assert.equal(
    new Set([...first.items, ...second.items].map((blog) => blog.id)).size,
    17,
  );
  assert.equal(queryBlogs(blogs, { page: "-1" }).page, 1);
  assert.equal(queryBlogs(blogs, { page: "oops" }).page, 1);
  assert.equal(queryBlogs(blogs, { page: "999" }).page, 2);
});
test("combined search/category filtering, empty state and link encoding", () => {
  const result = queryBlogs(blogs, {
    q: "LUXURY",
    category: "Luxury & lifestyle",
    page: "5",
  });
  assert.ok(result.total > 0);
  assert.equal(result.page, 1);
  assert.ok(
    result.items.every((blog) => blog.category === "Luxury & lifestyle"),
  );
  assert.equal(queryBlogs(blogs, { q: "xyz-no-results" }).total, 0);
  assert.equal(queryBlogs(blogs, { category: "Not real" }).total, 0);
  assert.equal(
    listingUrl({ page: "2", q: "PR & media", category: "Digital PR" }),
    "/blogs?q=PR+%26+media&category=Digital+PR&page=2",
  );
});
test("HTML sanitization removes executable content and preserves editorial markup", () => {
  const result = prepareHtml(
    '<script>alert(1)</script><svg onload="alert(1)"></svg><p style="color:red" onclick="alert(1)">Safe</p><a href="jav&#x61;script:alert(1)">link</a><img src="https://example.com/a.png" onerror="alert(1)"><iframe src="https://evil.com/embed"></iframe><iframe src="https://www.youtube-nocookie.com/embed/123"></iframe><table><tr><th>Heading</th><td>Cell</td></tr></table><blockquote>Quote</blockquote>',
  );
  assert.doesNotMatch(
    result.contentHtml,
    /<script|<svg|onclick|onerror|javascript:|style=|evil\.com/,
  );
  assert.match(result.contentHtml, /<table>/);
  assert.match(result.contentHtml, /loading="lazy"/);
  assert.match(
    result.contentHtml,
    /sandbox="allow-scripts allow-same-origin allow-presentation"/,
  );
});
test("TOC IDs are unique, escaped, generated from H2/H3 only", () => {
  const result = prepareHtml(
    '<h2 id="location">A &amp; B</h2><h3>A &amp; B</h3><h2>A B 2</h2><h2>A B</h2><h4>Excluded</h4>',
  );
  assert.equal(result.toc.length, 4);
  assert.equal(new Set(result.toc.map((entry) => entry.id)).size, 4);
  assert.equal(result.toc[0].text, "A & B");
  assert.equal(result.toc[1].level, 3);
  for (const entry of result.toc)
    assert.ok(result.contentHtml.includes(`id="${entry.id}"`));
  assert.doesNotMatch(result.contentHtml, /id="location"/);
});
test("every local article exposes its section headings to the table of contents", () => {
  for (const blog of blogs) {
    assert.ok(blog.toc.length > 0, `Missing section headings: ${blog.slug}`);
    for (const heading of blog.toc) {
      assert.match(blog.contentHtml, new RegExp(`id="${heading.id}"`));
    }
  }
  const social = blogs.find((blog) =>
    blog.slug.startsWith("social-media-pr-vs"),
  );
  assert.ok(
    social.toc.some((heading) => heading.text === "Measuring What Works"),
  );
  const fashion = blogs.find((blog) => blog.slug.startsWith("fashion-meets"));
  assert.ok(
    fashion.toc.some((heading) => heading.text === "Building a Brand Identity"),
  );
  const firms = blogs.find((blog) => blog.slug.startsWith("top-pr-firms"));
  assert.ok(
    firms.toc.some(
      (heading) =>
        heading.text === "1. Media Mantra Consulting" && heading.level === 3,
    ),
  );
});
test("comment validation and corrupted storage handling", () => {
  assert.equal(
    validateComment({
      name: "Reader",
      email: "reader@example.com",
      body: "A thoughtful perspective.",
    }),
    null,
  );
  assert.ok(validateComment({ name: " ", email: "invalid", body: "short" }));
  assert.ok(
    validateComment({
      name: "Reader",
      email: "invalid",
      body: "Long enough comment",
    }),
  );
  assert.deepEqual(parseComments("{invalid"), []);
  assert.deepEqual(
    parseComments('[{"id":"x","name":"A","body":"Hi","createdAt":"bad"}]'),
    [],
  );
});
