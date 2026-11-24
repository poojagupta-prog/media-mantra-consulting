"use client";
import { useState, useEffect, useCallback } from "react";
import { type BlogComment, validateComment } from "@/lib/blogs/comments";
import { blogDate } from "@/lib/blogs/query";
import { loadComments, submitComment } from "@/lib/blogs/comment-actions";
export function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const load = useCallback(
    (page: string | null, signal?: AbortSignal) => {
      return loadComments(slug, page)
        .then((data) => {
          if (
            !Array.isArray(data?.items) ||
            (data.nextCursor !== null && typeof data.nextCursor !== "string") ||
            !data.items.every(
              (item: BlogComment) =>
                item &&
                typeof item.id === "string" &&
                typeof item.name === "string" &&
                typeof item.body === "string" &&
                Number.isFinite(Date.parse(item.createdAt)),
            )
          )
            throw new Error();
          if (!signal?.aborted) {
            setComments((previous) =>
              page ? [...previous, ...data.items] : data.items,
            );
            setCursor(data.nextCursor);
            setLoadError(false);
          }
        })
        .catch(() => {
          if (!signal?.aborted) setLoadError(true);
        })
        .finally(() => {
          if (!signal?.aborted) setLoading(false);
        });
    },
    [slug],
  );
  useEffect(() => {
    const controller = new AbortController();
    void load(null, controller.signal);
    return () => controller.abort();
  }, [load]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <section className="blog-comments" aria-labelledby="comments-title">
      <p className="media-label">Keep the conversation going</p>
      <h2 id="comments-title">What’s your perspective?</h2>
      <p className="blog-comment-notice" id="comment-notice">
        Your email stays private. Comments are screened for abusive language.
      </p>
      <form
        aria-describedby="comment-notice"
        onSubmit={async (event) => {
          event.preventDefault();
          if (sending) return;
          setError("");
          setMessage("");
          const form = event.currentTarget;
          const values = new FormData(form);
          const input = {
            name: String(values.get("name") || ""),
            email: String(values.get("email") || ""),
            body: String(values.get("body") || ""),
          };
          const invalid = validateComment(input);
          if (invalid) {
            setError(invalid);
            return;
          }
          setSending(true);
          try {
            const result = await submitComment(slug, input);
            if (!result.message) throw new Error(result.error || "Please try again.");
            form.reset();
            setMessage(result.message);
            await load(null);
          } catch (err) {
            setError(err instanceof Error ? err.message : "Please try again.");
          } finally {
            setSending(false);
          }
        }}
      >
        <div className="blog-form-row">
          <label>
            Name <span>(required)</span>
            <input
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={80}
            />
          </label>
          <label>
            Email <span>(required, never displayed)</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </label>
        </div>
        <label>
          Your comment <span>(10–3,000 characters)</span>
          <textarea
            name="body"
            required
            minLength={10}
            maxLength={3000}
            rows={5}
          />
        </label>
        <button className="blog-submit" type="submit" disabled={sending}>
          {sending ? "Submitting…" : "Submit comment ↗"}
        </button>
        {error && (
          <p role="alert" className="blog-form-error">
            {error}
          </p>
        )}
        <p role="status">{message}</p>
      </form>
      <div className="blog-comment-list">
        <div className="blog-comment-list-heading">
          <h3>Reader comments</h3>
        </div>
        {comments.length
          ? comments.map((comment) => (
              <article key={comment.id}>
                <div>
                  <strong>{comment.name}</strong>
                  <time dateTime={comment.createdAt}>
                    {blogDate(comment.createdAt)}
                  </time>
                </div>
                <p>{comment.body}</p>
              </article>
            ))
          : !loadError && !loading && <p>No approved comments yet.</p>}
        {loadError && <p role="alert">Comments could not be loaded.</p>}
        {(cursor || loadError) && (
          <button
            type="button"
            disabled={loading}
            onClick={() => {
              setLoading(true);
              void load(cursor);
            }}
          >
            {loadError ? "Retry" : "Load more"}
          </button>
        )}
      </div>
    </section>
  );
}
