"use client";
import { useEffect, useRef, useState } from "react";
import { Copy, Mail, Camera } from "lucide-react";
import type { TocEntry } from "@/lib/blogs/types";
export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [active, setActive] = useState(entries[0]?.id || "");
  const listRef = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const headings = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((heading): heading is HTMLElement => !!heading);
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = headings[0]?.id || "";
      // Match the article's scroll offset so a clicked heading becomes active
      // as soon as it settles below the fixed navigation.
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= 180) current = heading.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [entries]);
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!list || !link || !window.matchMedia("(min-width: 769px)").matches)
      return;
    const listBounds = list.getBoundingClientRect();
    const linkBounds = link.getBoundingClientRect();
    if (linkBounds.top < listBounds.top) {
      list.scrollTop -= listBounds.top - linkBounds.top;
    } else if (linkBounds.bottom > listBounds.bottom) {
      list.scrollTop += linkBounds.bottom - listBounds.bottom;
    }
  }, [active]);
  if (!entries.length) return null;
  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <p className="media-label">In this article</p>
      <ol ref={listRef}>
        {entries.map((entry) => (
          <li
            key={entry.id}
            className={entry.level === 3 ? "blog-toc-nested" : ""}
          >
            <a
              href={`#${entry.id}`}
              aria-current={active === entry.id ? "location" : undefined}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function ShareTools({ title, url }: { title: string; url: string }) {
  const [status, setStatus] = useState("");
  const [fallback, setFallback] = useState(false);
  async function copy(instagram = false) {
    try {
      await navigator.clipboard.writeText(url);
      setFallback(false);
      setStatus(
        instagram
          ? "Link copied. Paste it into an Instagram message or link sticker."
          : "Article link copied.",
      );
    } catch {
      setFallback(true);
      setStatus("Select and copy the link below.");
    }
  }
  const encoded = encodeURIComponent(url);
  return (
    <section className="blog-share" aria-label="Share this article">
      <p className="media-label">Share</p>
      <div>
        <a
          href={`mailto:?subject=${encodeURIComponent(title)}&body=${encoded}`}
          aria-label="Share by email"
          title="Share by email"
        >
          <Mail size={18} aria-hidden="true" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X (opens in a new tab)"
          title="Share on X"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="currentColor"
          >
            <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.4l4.4 6.7L18.9 2Zm-1.1 18h1.8L7.2 3.9H5.3L17.8 20Z" />
          </svg>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook (opens in a new tab)"
          title="Share on Facebook"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M13.8 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.4c-.9-.1-1.8-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.6v2.7h-3V13h3v9h3.5Z" />
          </svg>
        </a>
        <button
          type="button"
          onClick={() => copy(true)}
          aria-label="Copy link for Instagram"
          title="Copy link for Instagram"
        >
          <Camera size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => copy()}
          aria-label="Copy link"
          title="Copy link"
        >
          <Copy size={18} aria-hidden="true" />
        </button>
      </div>
      <p role="status">{status}</p>
      {fallback && (
        <label>
          Article link
          <input
            aria-label="Article link to copy"
            readOnly
            value={url}
            onFocus={(event) => event.target.select()}
          />
        </label>
      )}
    </section>
  );
}
