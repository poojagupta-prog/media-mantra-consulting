import sanitizeHtml from "sanitize-html";
import { parseDocument, DomUtils } from "htmlparser2";
import type { TocEntry } from "./types";

export function plainText(html: string): string {
  return DomUtils.textContent(parseDocument(html)).replace(/\s+/g, " ").trim();
}

/** Strict allowlist: no scripts, styles, forms, event handlers or arbitrary embeds. */
export function prepareHtml(html: string) {
  const clean = sanitizeHtml(html, {
    allowedTags: [
      "p",
      "br",
      "hr",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "s",
      "sup",
      "sub",
      "ul",
      "ol",
      "li",
      "blockquote",
      "a",
      "figure",
      "figcaption",
      "img",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
      "caption",
      "pre",
      "code",
      "div",
      "span",
      "iframe",
      "video",
      "source",
    ],
    allowedAttributes: {
      a: ["href", "title", "rel"],
      img: ["src", "alt", "width", "height", "loading", "decoding"],
      th: ["colspan", "rowspan", "scope"],
      td: ["colspan", "rowspan"],
      ol: ["start"],
      iframe: [
        "src",
        "title",
        "loading",
        "allowfullscreen",
        "sandbox",
        "referrerpolicy",
      ],
      video: ["src", "poster", "controls", "preload"],
      source: ["src", "type"],
    },
    allowedSchemes: ["https", "http", "mailto", "tel"],
    allowedSchemesByTag: {
      img: ["https"],
      iframe: ["https"],
      video: ["https"],
      source: ["https"],
    },
    allowProtocolRelative: false,
    allowedIframeHostnames: [
      "www.youtube.com",
      "www.youtube-nocookie.com",
      "player.vimeo.com",
    ],
    transformTags: {
      a: (_tag, attrs) => ({
        tagName: "a",
        attribs: { ...attrs, rel: "noopener noreferrer" },
      }),
      img: (_tag, attrs) => ({
        tagName: "img",
        attribs: {
          ...attrs,
          alt: attrs.alt || "",
          loading: "lazy",
          decoding: "async",
        },
      }),
      iframe: (_tag, attrs) => ({
        tagName: "iframe",
        attribs: {
          ...attrs,
          title: attrs.title || "Embedded video",
          loading: "lazy",
          sandbox: "allow-scripts allow-same-origin allow-presentation",
          referrerpolicy: "strict-origin-when-cross-origin",
          allowfullscreen: "",
        },
      }),
      video: (_tag, attrs) => ({
        tagName: "video",
        attribs: { ...attrs, controls: "", preload: "none" },
      }),
    },
    exclusiveFilter: (frame) => frame.tag === "iframe" && !frame.attribs.src,
  });
  const document = parseDocument(clean);
  const toc: TocEntry[] = [];
  const ids = new Set<string>();
  for (const heading of DomUtils.findAll(
    (el) => el.name === "h2" || el.name === "h3",
    document.children,
  )) {
    const text = DomUtils.textContent(heading).replace(/\s+/g, " ").trim();
    if (!text) continue;
    const base = `section-${
      text
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "heading"
    }`;
    let id = base;
    let suffix = 2;
    while (ids.has(id)) id = `${base}-${suffix++}`;
    ids.add(id);
    heading.attribs.id = id;
    heading.attribs.tabindex = "-1";
    toc.push({ id, text, level: Number(heading.name[1]) });
  }
  return {
    contentHtml: DomUtils.getOuterHTML(document),
    toc,
    readingMinutes: Math.max(
      1,
      Math.ceil(plainText(clean).split(/\s+/).length / 220),
    ),
  };
}
