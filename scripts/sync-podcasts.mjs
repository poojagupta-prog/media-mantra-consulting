import { writeFile, rename } from "node:fs/promises";
import { fetchChannelCatalogue } from "../lib/youtube-catalogue.mjs";
const catalogue = await fetchChannelCatalogue();
const destination = new URL("../data/podcasts.json", import.meta.url);
const temporary = new URL("../data/podcasts.json.tmp", import.meta.url);
await writeFile(temporary, JSON.stringify(catalogue, null, 2) + "\n");
await rename(temporary, destination);
console.log(
  `Synced ${catalogue.videos.length} unique videos from ${catalogue.channelUrl}`,
);
