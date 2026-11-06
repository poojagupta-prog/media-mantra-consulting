# Blog catalogue

`/blogs` renders nine articles per page, newest first. `page`, `q`, and `category`
are URL parameters. Search and topic changes reset pagination. Previous/next and
number links preserve both filters. Invalid page values normalize to the first
page, and out-of-range pages to the last available page; canonical URLs reflect
the normalized page. Search results are noindex/follow. The featured placement
repeats a catalogue article without removing it from chronological pagination.

## Hardcoded content

Edit article metadata in `lib/blogs/data.js` and each article body in its
corresponding `lib/blogs/bodies/<slug>.tsx` file. Register new bodies in
`lib/blogs/bodies/index.ts`. The catalogue uses the `Blog` contract in `types.ts`.
The 17 existing article bodies are JSX markup inside each component return.
The repository reads local JSX headings and text to calculate the table of
contents and reading time. A CMS-provided `contentHtml` takes precedence over
local JSX and is sanitized before appearing in the same article layout. Attribution is retained. There is no blog-fetching script, API request, or synchronization step.
Place images in `public/images/blogs` and reference them with `/images/blogs/...`
paths in `featuredImage`. All current article images are local. Reading time and
the table of contents are calculated from `contentHtml`.

The detail hero displays the local image edge to edge above the article title.
The listing uses the same data for its featured story, cards, filters and pages.

## Connecting a CMS

Implement `BlogRepository.getAll()` in `repository.ts`, returning the `Blog`
contract in `types.ts`. Keep credentials server-side. For a large catalogue,
move filtering/pagination into the repository and provide get-by-slug and related
queries, preserving the `queryBlogs` semantics. React `cache` deduplicates reads
and sanitization within a server render. The local detail pages are prerendered.
For an API adapter, use Next's `use cache` with `cacheLife` and a cache tag, and
invalidate that tag from an authenticated CMS webhook. Validate upstream fields,
slugs, dates and image URLs at that boundary. Add approved image hosts to
`next.config.ts` before supplying remote featured images.

Every article body passes through `prepareHtml` on the server. Its explicit
allowlist removes scripts, styles, forms, event handlers and unsafe protocols.
Only YouTube/YouTube-nocookie/Vimeo iframe hosts are allowed, with a sandbox.
Images, captions, tables, lists, blockquotes and native videos are supported.
Incoming IDs are replaced with unique prefixed H2/H3 IDs used by the TOC.
Add any new CMS markup deliberately to the allowlist and security tests.

`NEXT_PUBLIC_SITE_URL` sets canonical, Open Graph, structured-data and share URLs
(default: https://mediamantraconsulting.com). Set it to the production origin.

## Comments and sharing

`comments.ts` provides a separate browser-preview repository. Comments are
explicitly private local previews, limited to 50 per article; emails are validated
but neither stored nor transmitted. Storage failure is reported, malformed data
is ignored, and clearing previews removes them from the browser. No API endpoint
claims publication. To enable public comments, replace this adapter with an
asynchronous API, add moderation/rate limiting and server validation, and update
the UI notice/status only once publication is real.

Email, X and Facebook use their supported share endpoints. Instagram copies the
article link for pasting into a message or link sticker. Clipboard failure exposes
a selectable URL. External share links open with noopener/noreferrer.

## Verification

`npm run test:blogs` covers source integrity, pagination, filters, XSS payloads,
TOC collisions and comment validation. Use Node 22.18+ for native TypeScript
stripping. `npm run lint`, `npx tsc --noEmit`, and `npm run build` check integration.
Browser QA should cover 390/768/1440px widths, URL/back navigation, empty results,
unknown slugs, TOC active state, clipboard denial, and local comment persistence.
