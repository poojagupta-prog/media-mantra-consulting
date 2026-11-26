import { readdirSync } from "node:fs";
import { join } from "node:path";

// Ungrouped pages and the (public) group are public routing spaces.
// Keep protected sections in a private route group or list their segment here.
const privateSegment =
  /^(admin|api|auth|cms|dashboard|internal|login|logout|private|preview|settings|user|users|staff|editor|manage|members|signin|signup|password|session|callback|oauth|account|sign-in|sign-up|register|drafts?)(?:$|-)/i;
const excludedPaths = new Set(["/dubai-it", "/pr-agency-in-dubai-uae"]);

export function staticPagePaths(appDir) {
  const paths = new Set();
  function visit(directory, segments) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const name = entry.name;
      if (entry.isFile() && /^page\.(tsx?|jsx?)$/.test(name)) {
        const path = "/" + segments.join("/");
        if (!excludedPaths.has(path)) paths.add(path);
      }
      if (!entry.isDirectory()) continue;
      const child = join(directory, name);
      if (name === "(public)") {
        visit(child, segments);
      } else if (
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) &&
        !privateSegment.test(name)
      ) {
        visit(child, [...segments, name]);
      }
    }
  }
  visit(appDir, []);
  return [...paths].sort();
}
