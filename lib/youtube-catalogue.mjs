export const channelUrl = "https://www.youtube.com/@PRwithUdit/videos";
export const channelId = "UCy2qmNwqlmhXlV-k8ZWiQcQ";

/** Walk only the supplied channel tab/continuation, never recommendations. */
function* walk(value) {
  if (!value || typeof value !== "object") return;
  yield value;
  for (const child of Object.values(value)) yield* walk(child);
}

export function parseVideoPage(content) {
  const videos = new Map();
  let continuation;
  for (const node of walk(content)) {
    const modern = node.lockupViewModel;
    const legacy = node.videoRenderer;
    if (modern?.contentType === "LOCKUP_CONTENT_TYPE_VIDEO") {
      const image = modern.contentImage?.thumbnailViewModel;
      const thumbnail = image?.image?.sources?.at(-1)?.url;
      const title = modern.metadata?.lockupMetadataViewModel?.title?.content;
      const id = modern.contentId;
      const badge = [...walk(image?.overlays)].find(
        (n) => n.thumbnailBadgeViewModel?.text,
      )?.thumbnailBadgeViewModel?.text;
      if (/^[\w-]{11}$/.test(id) && title && thumbnail)
        videos.set(id, { id, title, thumbnail, duration: badge || "" });
    }
    if (legacy) {
      const id = legacy.videoId;
      const title =
        legacy.title?.runs?.map((r) => r.text).join("") ||
        legacy.title?.simpleText;
      const thumbnail = legacy.thumbnail?.thumbnails?.at(-1)?.url;
      if (/^[\w-]{11}$/.test(id) && title && thumbnail)
        videos.set(id, {
          id,
          title,
          thumbnail,
          duration: legacy.lengthText?.simpleText || "",
        });
    }
    const token =
      node.continuationItemRenderer?.continuationEndpoint?.continuationCommand
        ?.token;
    if (token) continuation = token;
  }
  return { videos: [...videos.values()], continuation };
}

export async function fetchChannelCatalogue(fetcher = fetch) {
  const response = await fetcher(channelUrl, {
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok)
    throw new Error(`YouTube channel returned ${response.status}`);
  const html = await response.text();
  const initial = html.match(/var ytInitialData = (.*?);<\/script>/s)?.[1];
  const version = html.match(/"INNERTUBE_CLIENT_VERSION":"([^"]+)"/)?.[1];
  if (!initial || !version)
    throw new Error(
      "YouTube channel data is unavailable; keeping the previous catalogue.",
    );
  const data = JSON.parse(initial);
  if (data.metadata?.channelMetadataRenderer?.externalId !== channelId)
    throw new Error("Unexpected channel identity.");
  const tab = data.contents?.twoColumnBrowseResultsRenderer?.tabs?.find(
    (t) => t.tabRenderer?.selected,
  )?.tabRenderer;
  if (!tab?.content?.richGridRenderer)
    throw new Error("YouTube videos tab is unavailable.");
  let page = parseVideoPage(tab.content);
  const videos = new Map(page.videos.map((v) => [v.id, v]));
  const tokens = new Set();
  while (page.continuation) {
    if (tokens.has(page.continuation) || tokens.size >= 100)
      throw new Error(
        "Incomplete catalogue: repeated or excessive pagination.",
      );
    tokens.add(page.continuation);
    const next = await fetcher(
      "https://www.youtube.com/youtubei/v1/browse?prettyPrint=false",
      {
        method: "POST",
        signal: AbortSignal.timeout(20000),
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: {
            client: {
              clientName: "WEB",
              clientVersion: version,
              hl: "en",
              gl: "US",
            },
          },
          continuation: page.continuation,
        }),
      },
    );
    if (!next.ok) throw new Error(`YouTube pagination returned ${next.status}`);
    const payload = await next.json();
    const actions =
      payload.onResponseReceivedActions || payload.onResponseReceivedEndpoints;
    if (!actions)
      throw new Error(
        "Unrecognised YouTube continuation; keeping the previous catalogue.",
      );
    page = parseVideoPage(actions);
    for (const video of page.videos) videos.set(video.id, video);
  }
  if (!videos.size)
    throw new Error("No public videos found; keeping the previous catalogue.");
  return {
    channelId,
    channelUrl,
    fetchedAt: new Date().toISOString(),
    videos: [...videos.values()],
  };
}
