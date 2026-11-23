# Composed case studies

`case-studies-data.ts` retains the summary records used by the listing and home cards. Existing slugs, source text, services, metrics and galleries are preserved. Rich story content lives separately in `case-study-stories.ts`, so listing cards do not import the long-form stories.

To add a case study:

1. Add its summary record and stable slug to `case-studies-data.ts`.
2. Register the same slug in `caseStudyStories`. Supply a `CaseStudyStory` with a theme, hero, SEO title, descriptive media, campaign period and an ordered `sections` array.
3. Compose optional `narrative`, `statement`, `chapters`, `timeline`, `image`, `metrics` and `gallery` sections in any order. IDs must be unique within the story; chapter links are built from those IDs. A project may repeat section kinds or leave them out entirely.
4. Add source images under `public/images/case-studies/`. Keep press clippings contained in galleries; do not represent travel or illustrative photography as coverage evidence.
5. Preview the route, check keyboard gallery navigation and mobile composition, and run lint, TypeScript and the production build.

For production response checks, build and serve with `npm run build` and `npm start -- --port 3100`, then run `node --test tests/case-studies.test.mjs`. Set `CASE_STUDY_TEST_URL` for another local server. These checks cover both server-rendered narratives, metadata, structured data, anchor IDs, gallery controls, source assets, optimized hero responses, listing URLs and unknown slugs. With Cache Components, an unknown slug may return a streamed HTTP 200 containing the not-found UI and `noindex`, following Next.js's documented behavior. These checks do not replace visual or keyboard browser QA.

No route changes are needed for another composition. New visual directions extend the theme union in `story-types.ts` and add scoped `.cs-{theme}` styles in `app/case-studies/stories.css`. A genuinely new section type extends the discriminated `StorySection` union and its exhaustive renderer once; it then becomes available to any story. Shared hero, navigation, data displays, media viewer and related links are retained.

All narrative and final metric values are server rendered. The client layer enhances only counters and native-dialog galleries. Escape closes the dialog; arrow keys and labelled buttons navigate images; focus returns to the opener. Motion is optional and respects reduced-motion preferences. The reading indicator and media reveals use native CSS timelines with progressive fallback.

Campaign numbers come from the pre-existing campaign records. boAt's 26M+ figure is reported potential viewership, not verified impressions. Atlys's seven flagship editorial wins sit within its 32 outcomes. Its four-month bar shows the campaign window without inventing dates for individual storylines. Strategic interpretation is identified as a takeaway and does not imply measured commercial impact.

The real estate portfolio uses the `architecture` theme, a split `architectural` hero and reusable `project` sections. Each project carries its own client, location, narrative, metrics and selected publication names. The separate portfolio results retain the reported 115+ placement total across five media clients and distinguish Amirah's two events as the sixth client story. Project values and reservation milestones are not attributed to PR. The source presentation remains private and is neither copied into public assets nor linked on the site.

`real-estate-story.ts` contains the rewritten editorial copy. Generated architectural imagery is labelled as illustrative, rather than a depiction of the named developments. Final image prompts and saved asset paths are recorded in `output/imagegen/real-estate-prompts.md`.

The BIA education study uses the `academy` theme and a centred `editorial` hero. DECA × UNICO uses the `alliance` theme and an immersive architectural hero, with results early in its section sequence. Reusable `press` sections present rewritten publication summaries; `evidence` sections keep scoped measurement in semantic definition lists without implying all figures describe the full programme.

BIA's reported 115 placements and eight premium placements come from the summary. Its editorial schedule contains nine rows; the page identifies that mismatch and treats the entries as selected subjects, rather than inventing a reconciled count. Only Graduation Day has MUV, AVE and PRV estimates; those are kept in a separate section and are not presented as revenue, article readership or deduplicated reach. The four-month timeline follows the supplied programme sequence without inventing calendar dates for its month labels.

DECA × UNICO's December 2025 standalone record reports 15 placements. This overlaps with the DECA work already featured in the sector portfolio, rather than adding to the sector total. Its 19M+ publisher MUV figure is potential audience context, not measured campaign impressions. Placeholder article mockups in the source are not used as evidence. Neither source PDF is copied to public assets or linked on the site.

Four additional illustrative images were generated with the built-in image tool and saved under `public/images/case-studies/education/` and `public/images/case-studies/deca-unico/`. Exact prompts, filenames and dimensions are in `output/imagegen/education-and-deca-unico-prompts.md`.
