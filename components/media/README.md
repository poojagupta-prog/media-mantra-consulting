# Editorial content

The new routes reuse the existing Geist/Georgia typography, ivory/teal palette,
Button, Reveal, header, footer and newsroom records. No additional runtime
packages were added.

## Publishing content

`content.ts` contains typed episode and gallery records, award previews,
Dubai focus areas and the supplied client testimonials. Replace preview records
with approved content; remove their placeholder labels only after verification.

- Podcasts now use the real, deduplicated YouTube catalogue in `data/podcasts.json`.
  Run `npm run sync:podcasts` before a deployment to refresh every page of the
  public Videos tab. The import validates the channel ID, follows continuation
  tokens, preserves original titles/thumbnails, and replaces the JSON atomically
  only after a complete fetch. It needs network access but no API key. A failed
  import leaves the last successful catalogue intact. YouTube's public page
  format is not a versioned API; the parser may need updating if that format
  changes. This is a deployment-time snapshot, not a live per-visitor request.
  Schedule the sync followed by a build/deploy in hosting automation if automatic
  publication of future uploads is desired. Shorts are not imported from the
  channel's separate Shorts tab.
- Playback uses YouTube's official IFrame Player API, loaded once after the first
  Play click. Only the selected card mounts an iframe. Switching cards pauses
  and destroys the old player; scrolling below 25% visibility or hiding the tab
  pauses playback without automatically resuming it. A late-loading player cannot
  start off-screen. Original YouTube links remain available on loading/embed
  failures. No fake episode metadata or guest names are added.
- Gallery: set `videoUrl` to a direct, accessible video file for native playback.
  Keep a poster image and a meaningful caption. `posterOnly` marks an artwork
  preview without pretending that a recording is available. Stock photographs
  are labelled references and must not be presented as company events or staff.
- Awards: confirm name, awarding organisation, numeric year, category, image
  and citation. The archive groups records by year, with unverified records
  under “Year pending”. No award is claimed by the current preview.
- Dubai IT: approve the initiative’s identity, scope, company involvement,
  campaign details and any outcome statistics before replacing page notices.
  Existing newsroom links are related regional coverage, not initiative evidence.
- Testimonials: `reviews` contains the five user-supplied quotes, client names
  and designations rendered by the testimonial preview.
- About: the existing management profiles remain explicitly labelled concepts.

Case studies are available at `/case-studies` and on the homepage. The journal
is available at `/blogs`, alongside `/news-room` in Insights & media. See
`lib/blogs/README.md` for content import and CMS integration.

## Interaction checks

Test category buttons with keyboard and pointer. Gallery dialogs support native
focus trapping, Escape, previous/next buttons, arrow keys, backdrop dismissal,
body scroll locking and return of focus to the opening thumbnail. Reduced-motion
preferences disable transforms and make reveal content immediately visible.
