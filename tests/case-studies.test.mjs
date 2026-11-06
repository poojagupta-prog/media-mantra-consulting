import assert from "node:assert/strict";
import test from "node:test";
import { parseDocument } from "htmlparser2";

// Run against a production build served by `npm start -- --port 3100`.
const origin = process.env.CASE_STUDY_TEST_URL || "http://localhost:3100";
function elements(node, predicate) {
  return [ ...(node.type === "tag" && predicate(node) ? [node] : []), ...(node.children || []).flatMap((child) => elements(child, predicate)) ];
}
function text(node) {
  if (node.name === "script" || node.name === "style") return "";
  return node.type === "text" ? node.data : (node.children || []).map(text).join("");
}

for (const [slug, theme, metrics, galleryCount] of [
  ["boat-middle-east-pr-campaign", "electric", ["15", "2", "26M+"], 5],
  ["atlys-uae-travel-technology-pr", "journey", ["32", "7", "4", "2"], 2],
  ["real-estate-sector-pr-portfolio", "architecture", ["115+", "6", "2"], 0],
  ["bradford-international-alliance-education-pr", "academy", ["115", "8", "4"], 0],
  ["deca-unico-partnership-pr-campaign", "alliance", ["15", "2", "19M+"], 0],
]) {
  test(`${slug}: server-rendered story, metadata, navigation and images`, async () => {
    const response = await fetch(`${origin}/case-studies/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    const document = parseDocument(html);
    const find = (predicate) => elements(document, predicate);
    assert.equal(find((node) => node.name === "h1").length, 1);
    assert.match(html, new RegExp(`cs-${theme}`));
    assert.ok(text(find((node) => node.name === "article" && node.attribs.class?.includes("cs-story"))[0]).split(/\s+/).length > 700, "Long-form content must be present in the server response");
    assert.ok(find((node) => node.name === "link" && node.attribs.rel === "canonical")[0].attribs.href.endsWith(`/case-studies/${slug}`));
    assert.ok(find((node) => node.name === "meta" && node.attribs.property === "og:image")[0].attribs.content.startsWith("https://"));
    const schema = JSON.parse(elementsIncludingScripts(document).find((node) => node.name === "script" && node.attribs.type === "application/ld+json").children[0].data);
    assert.equal(schema["@graph"][0]["@type"], "Article");
    assert.equal(schema["@graph"][1].itemListElement.length, 3);
    const ids = find((node) => Boolean(node.attribs.id)).map((node) => node.attribs.id);
    assert.equal(ids.length, new Set(ids).size, "Anchor IDs must be unique");
    for (const link of find((node) => node.name === "a" && node.attribs.href?.startsWith("#"))) {
      assert.ok(ids.includes(link.attribs.href.slice(1)), `Broken chapter link: ${link.attribs.href}`);
    }
    for (const metric of metrics) assert.ok(find((node) => node.attribs.class === "cs-number").some((node) => text(node) === metric), `Missing server-rendered metric ${metric}`);
    assert.equal(find((node) => node.name === "button" && node.attribs["aria-haspopup"] === "dialog").length, galleryCount);
    if (galleryCount) assert.ok(find((node) => node.name === "dialog" && node.attribs["aria-labelledby"] === "cs-lightbox-title").length);
    assert.equal(find((node) => ["a", "iframe", "embed", "object"].includes(node.name) && /\.pdf(?:$|[?#])/i.test(node.attribs.href || node.attribs.src || node.attribs.data || "")).length, 0, "Do not link or embed source PDFs");
    if (theme === "academy") {
      const scoped = find((node) => node.name === "section" && node.attribs.id === "graduation-measurement")[0];
      assert.deepEqual(elements(scoped, (node) => node.name === "strong").map(text), ["60", "993,748", "$195,000", "$585,000"]);
      assert.match(text(scoped), /Graduation Day/);
      assert.match(text(scoped), /not earned revenue/);
      const results = find((node) => node.name === "section" && node.attribs.id === "results")[0];
      assert.ok(!text(results).includes("993,748"), "Graduation-only MUV must not become a programme-wide result");
      assert.match(text(results), /schedule lists nine entries/);
      assert.equal(find((node) => node.name === "li" && node.parent?.attribs.class === "cs-timeline-list").length, 4);
    }
    if (theme === "alliance") {
      assert.equal(schema["@graph"][0].about["@type"], "Thing");
      assert.match(text(document), /not verified views/);
      assert.match(text(document), /overlap with the DECA work/);
      assert.ok(!/lorem ipsum/i.test(text(document)), "Do not reproduce placeholder coverage mockups");
    }
    if (theme === "architecture") {
      for (const [id, client, values] of [
        ["bnw", "BnW Developments", ["30+", "97%"]],
        ["aum", "AUM Developments", ["20+", "AED 100M+"]],
        ["deca", "DECA Properties", ["12+"]],
        ["centurion", "Centurion Properties", ["40+", "AED 10.5B", "4"]],
        ["bamx", "BAMX Developments", ["10+", "30"]],
        ["amirah", "Amirah Developments", ["700", "100"]],
      ]) {
        const project = find((node) => node.name === "section" && node.attribs.id === id)[0];
        assert.ok(project && text(project).includes(client), `Missing client section: ${client}`);
        assert.deepEqual(elements(project, (node) => node.name === "dd").map(text), values, `Metrics must remain attributed to ${client}`);
      }
      assert.equal(schema["@graph"][0].about["@type"], "Thing");
      assert.match(text(document), /AI-generated architectural illustration/);
      assert.equal(find((node) => ["a", "iframe", "embed", "object"].includes(node.name) && /\.pdf(?:$|[?#])/i.test(node.attribs.href || node.attribs.src || node.attribs.data || "")).length, 0, "Do not publish or embed the source presentation");
    }
    const images = find((node) => node.name === "img" && decodeURIComponent(node.attribs.src || "").includes("/case-studies/"));
    assert.ok(images.length >= galleryCount);
    const paths = new Set();
    for (const image of images) {
      assert.ok(image.attribs.alt?.length > 15, "Images need meaningful alternative text");
      const src = new URL(image.attribs.src, origin);
      paths.add(src.searchParams.get("url") || src.pathname);
    }
    for (const path of paths) {
      const image = await fetch(new URL(path, origin));
      assert.equal(image.status, 200, `Missing source image ${path}`);
      assert.match(image.headers.get("content-type"), /^image\//);
    }
    const optimized = await fetch(new URL(images[0].attribs.src, origin));
    assert.equal(optimized.status, 200, "Next Image optimizer must serve the hero");
    assert.match(optimized.headers.get("content-type"), /^image\//);
  });
}
function elementsIncludingScripts(node) {
  return [ ...(node.name ? [node] : []), ...(node.children || []).flatMap(elementsIncludingScripts) ];
}

test("listing includes all five stories and unique sector filters; unknown stories are unindexable", async () => {
  const response = await fetch(`${origin}/case-studies`);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const slug of ["boat-middle-east-pr-campaign", "atlys-uae-travel-technology-pr", "real-estate-sector-pr-portfolio", "bradford-international-alliance-education-pr", "deca-unico-partnership-pr-campaign"]) assert.ok(html.includes(`/case-studies/${slug}`));
  const listing = parseDocument(html);
  const filters = elements(listing, (node) => node.name === "button" && node.attribs["aria-pressed"] !== undefined).map(text);
  assert.equal(filters.length, new Set(filters).size);
  assert.ok(filters.includes("Real Estate PR") && filters.includes("Education PR"));
  const missing = await fetch(`${origin}/case-studies/no-such-campaign`);
  // Cache Components can stream the shell before notFound() runs. Next then
  // retains HTTP 200 and injects noindex, as documented for streamed responses.
  assert.ok([200, 404].includes(missing.status));
  const missingDocument = parseDocument(await missing.text());
  assert.ok(elements(missingDocument, (node) => node.name === "meta" && node.attribs.name === "robots" && node.attribs.content.includes("noindex")).length);
  assert.equal(elements(missingDocument, (node) => node.name === "article" && node.attribs.class?.includes("cs-story")).length, 0);
});
