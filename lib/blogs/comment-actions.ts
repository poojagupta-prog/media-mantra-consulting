"use server";

import { createHmac } from "node:crypto";
import { headers } from "next/headers";
import { cmsUrl } from "./cms-url";
import { validateComment, type CommentInput } from "./comments";

function commentsUrl(slug: string) {
  if (typeof slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    throw new Error("Invalid article");
  const url = cmsUrl();
  url.pathname += "/" + slug + "/comments";
  return url;
}

export async function loadComments(slug: string, cursor: string | null) {
  try {
    const url = commentsUrl(slug);
    if (cursor) url.searchParams.set("cursor", cursor);
    const response = await fetch(url, {
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(10000),
    });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  }
}

export async function submitComment(slug: string, input: CommentInput) {
  if (
    !input ||
    typeof input.name !== "string" ||
    typeof input.email !== "string" ||
    typeof input.body !== "string"
  )
    return { error: "Invalid comment." };
  const { name, email, body } = input;
  const error = validateComment({ name, email, body });
  if (error) return { error };

  try {
    const url = commentsUrl(slug);
    const outgoing = new Headers({ "Content-Type": "application/json" });
    const key = process.env.CONSULTING_COMMENT_PROXY_SECRET;
    const readerHeader = process.env.CONSULTING_TRUSTED_READER_HEADER;
    if (key && readerHeader) {
      const reader = (await headers()).get(readerHeader) || "anonymous";
      const hash = createHmac("sha256", key)
        .update("reader:" + reader)
        .digest("hex");
      outgoing.set("x-consulting-reader", hash);
      outgoing.set(
        "x-consulting-signature",
        createHmac("sha256", key).update(hash).digest("hex"),
      );
    }
    const response = await fetch(url, {
      method: "POST",
      headers: outgoing,
      body: JSON.stringify({ name, email, body }),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(10000),
    });
    const result: { message?: unknown; error?: unknown } | null =
      await response.json();
    if (response.status === 201 && typeof result?.message === "string")
      return { message: result.message };
    return {
      error: typeof result?.error === "string" ? result.error : "Please try again.",
    };
  } catch {
    return { error: "Comments are temporarily unavailable." };
  }
}
