import test from "node:test";
import assert from "node:assert/strict";
import {
  channelId,
  fetchChannelCatalogue,
  parseVideoPage,
} from "../lib/youtube-catalogue.mjs";
import { readFile } from "node:fs/promises";
const video = (id, title = "Original title") => ({
  lockupViewModel: {
    contentType: "LOCKUP_CONTENT_TYPE_VIDEO",
    contentId: id,
    metadata: { lockupMetadataViewModel: { title: { content: title } } },
    contentImage: {
      thumbnailViewModel: {
        image: {
          sources: [{ url: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }],
        },
      },
    },
  },
});
const continuation = (token) => ({
  continuationItemRenderer: {
    continuationEndpoint: { continuationCommand: { token } },
  },
});
const initial = (contents) =>
  new Response(
    `var ytInitialData = ${JSON.stringify({ metadata: { channelMetadataRenderer: { externalId: channelId } }, contents: { twoColumnBrowseResultsRenderer: { tabs: [{ tabRenderer: { selected: true, content: { richGridRenderer: { contents } } } }] } } })};</script><script>{"INNERTUBE_CLIENT_VERSION":"test-version"}</script>`,
  );
test("follows every continuation and deduplicates original video IDs", async () => {
  let calls = 0;
  const result = await fetchChannelCatalogue(async (_url, options) => {
    calls++;
    if (calls === 1)
      return initial([video("aaaaaaaaaaa"), continuation("page2")]);
    assert.equal(JSON.parse(options.body).continuation, "page2");
    return Response.json({
      onResponseReceivedActions: [
        {
          appendContinuationItemsAction: {
            continuationItems: [
              video("aaaaaaaaaaa"),
              video("bbbbbbbbbbb", "Original second title"),
            ],
          },
        },
      ],
    });
  });
  assert.equal(calls, 2);
  assert.deepEqual(
    result.videos.map((v) => v.id),
    ["aaaaaaaaaaa", "bbbbbbbbbbb"],
  );
  assert.equal(result.videos[1].title, "Original second title");
});
test("rejects incomplete pagination instead of replacing the saved catalogue", async () => {
  let calls = 0;
  await assert.rejects(
    fetchChannelCatalogue(async () =>
      ++calls === 1
        ? initial([video("aaaaaaaaaaa"), continuation("page2")])
        : Response.json({ error: "unavailable" }),
    ),
    /Unrecognised/,
  );
});
test("ignores non-video lockups and rejects repeated continuation tokens", async () => {
  assert.equal(
    parseVideoPage({
      lockupViewModel: {
        ...video("aaaaaaaaaaa").lockupViewModel,
        contentType: "LOCKUP_CONTENT_TYPE_PLAYLIST",
      },
    }).videos.length,
    0,
  );
  let calls = 0;
  await assert.rejects(
    fetchChannelCatalogue(async () =>
      ++calls === 1
        ? initial([video("aaaaaaaaaaa"), continuation("repeat")])
        : Response.json({
            onResponseReceivedActions: [continuation("repeat")],
          }),
    ),
    /repeated/,
  );
});
test("saved catalogue has unique IDs and original YouTube thumbnail URLs", async () => {
  const data = JSON.parse(
    await readFile(new URL("../data/podcasts.json", import.meta.url)),
  );
  assert.ok(data.videos.length > 0);
  assert.equal(new Set(data.videos.map((v) => v.id)).size, data.videos.length);
  for (const v of data.videos) {
    assert.match(v.id, /^[\w-]{11}$/);
    assert.ok(v.title.trim());
    assert.equal(new URL(v.thumbnail).hostname, "i.ytimg.com");
  }
});
