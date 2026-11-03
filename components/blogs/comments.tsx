"use client";
import { useState, useSyncExternalStore } from "react";
import {
  localCommentRepository as repository,
  parseComments,
  subscribeComments,
  validateComment,
} from "@/lib/blogs/comments";
import { blogDate } from "@/lib/blogs/query";
export function Comments({ slug }: { slug: string }) {
  const raw = useSyncExternalStore(
    subscribeComments,
    () => repository.read(slug),
    () => "[]",
  );
  const comments = parseComments(raw);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <section className="blog-comments" aria-labelledby="comments-title">
      <p className="media-label">Keep the conversation going</p>
      <h2 id="comments-title">What’s your perspective?</h2>
      <p className="blog-comment-notice" id="comment-notice">
        Comments are private previews saved only in this browser, not published
        or sent to Media Mantra. Your email is not stored. Up to 50 previews are
        kept per article.
      </p>
      <form
        aria-describedby="comment-notice"
        onSubmit={(event) => {
          event.preventDefault();
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
          try {
            repository.add(slug, input);
            form.reset();
            setMessage(
              "Preview saved in this browser. It has not been published.",
            );
          } catch {
            setError(
              "Your browser could not save this preview. Please enable local storage and try again.",
            );
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
        <button className="blog-submit" type="submit">
          Save comment preview ↗
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
          <h3>Local previews ({comments.length})</h3>
          {comments.length > 0 && (
            <button
              type="button"
              onClick={() => {
                try {
                  repository.clear(slug);
                  setMessage("Local previews cleared.");
                  setError("");
                } catch {
                  setError("Could not clear local previews.");
                }
              }}
            >
              Clear previews
            </button>
          )}
        </div>
        {comments.length ? (
          comments.map((comment) => (
            <article key={comment.id}>
              <div>
                <strong>{comment.name}</strong>
                <time dateTime={comment.createdAt}>
                  {blogDate(comment.createdAt)}
                </time>
              </div>
              <p>{comment.body}</p>
              <small>Private browser preview</small>
            </article>
          ))
        ) : (
          <p>No previews yet. Add your thoughts above.</p>
        )}
      </div>
    </section>
  );
}
