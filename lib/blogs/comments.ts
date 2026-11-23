/** Browser-only preview adapter. A future API adapter must add moderation/rate limits. */
export interface BlogComment {
  id: string;
  name: string;
  body: string;
  createdAt: string;
}
export interface CommentInput {
  name: string;
  email: string;
  body: string;
}
export interface CommentRepository {
  read(slug: string): string;
  add(slug: string, input: CommentInput): void;
  clear(slug: string): void;
}
export function validateComment(input: CommentInput) {
  if (input.name.trim().length < 2 || input.name.trim().length > 80)
    return "Please enter a name between 2 and 80 characters.";
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim()) ||
    input.email.length > 254
  )
    return "Please enter a valid email address.";
  if (input.body.trim().length < 10 || input.body.trim().length > 3000)
    return "Please write a comment between 10 and 3,000 characters.";
  return null;
}
export function parseComments(raw: string): BlogComment[] {
  try {
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data
      .filter(
        (item): item is BlogComment =>
          item &&
          typeof item.id === "string" &&
          typeof item.name === "string" &&
          item.name.length <= 80 &&
          typeof item.body === "string" &&
          item.body.length <= 3000 &&
          typeof item.createdAt === "string" &&
          Number.isFinite(Date.parse(item.createdAt)),
      )
      .slice(0, 50);
  } catch {
    return [];
  }
}
const key = (slug: string) => `mm-blog-comments-v1:${slug}`;
const changed = () => window.dispatchEvent(new Event("mm-comments"));
export const localCommentRepository: CommentRepository = {
  read(slug) {
    try {
      return localStorage.getItem(key(slug)) || "[]";
    } catch {
      return "[]";
    }
  },
  add(slug, input) {
    const error = validateComment(input);
    if (error) throw new Error(error);
    const comments = parseComments(this.read(slug));
    // Email is validated for the future API contract, but never stored locally.
    comments.unshift({
      id: crypto.randomUUID(),
      name: input.name.trim(),
      body: input.body.trim(),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem(key(slug), JSON.stringify(comments.slice(0, 50)));
    changed();
  },
  clear(slug) {
    localStorage.removeItem(key(slug));
    changed();
  },
};
export function subscribeComments(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("mm-comments", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("mm-comments", callback);
  };
}
