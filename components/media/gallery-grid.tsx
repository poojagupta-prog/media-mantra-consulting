"use client";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X, Expand, Film, Plus } from "lucide-react";
import { media, type MediaItem } from "./content";
import { MediaImage } from "./shared";

const PAGE_SIZE = 9;

export function GalleryGrid({
  items = media,
  compact = false,
}: {
  items?: MediaItem[];
  compact?: boolean;
}) {
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const gridId = useId();
  const [active, setActive] = useState<MediaItem | null>(null);
  const isOpen = active !== null;
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const filtered = items.filter(
    (i) => category === "All" || i.category === category,
  );
  const visibleItems = filtered.slice(0, visibleCount);
  const move = (direction: number) => {
    if (active)
      setActive(
        filtered[
          (filtered.findIndex((i) => i.id === active.id) +
            direction +
            filtered.length) %
            filtered.length
        ],
      );
  };
  useEffect(() => {
    if (!isOpen) return;
    const el = dialog.current;
    el?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      el?.close();
      document.body.style.overflow = previous;
      trigger.current?.focus();
    };
  }, [isOpen]);
  return (
    <>
      {!compact && (
        <div className="media-filters" aria-label="Gallery categories">
          {["All", ...new Set(items.map((item) => item.category))].map((c) => (
            <button
              key={c}
              aria-pressed={c === category}
              onClick={() => {
                setCategory(c);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" aria-live="polite">
        Showing {visibleItems.length} of {filtered.length} gallery items
      </p>
      <div
        id={gridId}
        className={compact ? "gallery-grid gallery-compact" : "gallery-grid"}
      >
        {visibleItems.map((item, index) => (
          <figure key={item.id} className="gallery-item">
            <button
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setActive(item);
              }}
              aria-label={`Open ${item.title}`}
              aria-haspopup="dialog"
            >
              <MediaImage
                src={item.image}
                alt={item.alt}
                className="object-[50%_20%]"
              />
              <span className="gallery-expand" aria-hidden="true">
                {item.videoUrl || item.posterOnly ? (
                  <Film size={18} />
                ) : (
                  <Expand size={18} />
                )}
              </span>
              <span className="gallery-overlay">
                <span className="gallery-meta">
                  <span className="media-label">{item.category}</span>
                  <span className="gallery-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <strong>{item.title}</strong>
              </span>
            </button>
            <figcaption className="sr-only">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      {visibleItems.length < filtered.length && (
        <div className="gallery-pagination">
          <p>
            {visibleItems.length} / {filtered.length} images
          </p>
          <button
            type="button"
            aria-controls={gridId}
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Load more <Plus size={18} />
          </button>
        </div>
      )}
      {active && (
        <dialog
          ref={dialog}
          className="media-lightbox"
          aria-labelledby="lightbox-title"
          onCancel={() => setActive(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              move(1);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          <div className="lightbox-top">
            <h2 id="lightbox-title">{active.title}</h2>
            <button
              autoFocus
              onClick={() => setActive(null)}
              aria-label="Close gallery"
            >
              <X />
            </button>
          </div>
          <div className="lightbox-picture">
            {active.videoUrl ? (
              <video
                key={active.id}
                src={active.videoUrl}
                poster={active.image}
                controls
                preload="metadata"
                aria-label={active.title}
              />
            ) : (
              <MediaImage
                src={active.image}
                alt={active.alt}
                className="object-contain!"
              />
            )}
          </div>
          <div className="lightbox-bottom">
            <p aria-live="polite">{active.caption}</p>
            <div>
              <button onClick={() => move(-1)} aria-label="Previous image">
                <ArrowLeft />
              </button>
              <span>
                {filtered.findIndex((i) => i.id === active.id) + 1} /{" "}
                {filtered.length}
              </span>
              <button onClick={() => move(1)} aria-label="Next image">
                <ArrowRight />
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
