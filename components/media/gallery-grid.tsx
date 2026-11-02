"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X, Expand, Film } from "lucide-react";
import { media, type MediaItem } from "./content";
import { MediaImage } from "./shared";
export function GalleryGrid({
  items = media,
  compact = false,
}: {
  items?: MediaItem[];
  compact?: boolean;
}) {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<MediaItem | null>(null);
  const isOpen = active !== null;
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const filtered = items.filter(
    (i) => category === "All" || i.category === category,
  );
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
          {[
            "All",
            "Events",
            "Campaigns",
            "Media",
            "Team",
            "Behind the Scenes",
          ].map((c) => (
            <button
              key={c}
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" aria-live="polite">
        {filtered.length} gallery items
      </p>
      <div
        className={compact ? "gallery-grid gallery-compact" : "gallery-grid"}
      >
        {filtered.map((item, index) => (
          <figure
            key={item.id}
            className={`gallery-item gallery-shape-${index % 3}`}
          >
            <button
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setActive(item);
              }}
              aria-label={`Open ${item.title}`}
            >
              <MediaImage src={item.image} alt={item.alt} />
              <span className="gallery-expand">
                {item.videoUrl || item.posterOnly ? (
                  <Film size={18} />
                ) : (
                  <Expand size={18} />
                )}
              </span>
              <span className="gallery-overlay">
                <span className="media-label">{item.category}</span>
                <strong>{item.title}</strong>
              </span>
            </button>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
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
