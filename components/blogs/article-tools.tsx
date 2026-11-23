"use client";
import { useEffect, useRef, useState } from "react";
import { Copy, Mail } from "lucide-react";
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
  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setFallback(false);
      setStatus("Article link copied.");
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
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp (opens in a new tab)"
          title="Share on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
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
