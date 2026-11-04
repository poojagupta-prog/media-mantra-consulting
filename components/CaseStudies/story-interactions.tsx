"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import type { StoryImage, StoryMetric } from "./story-types";

export function AnimatedMetric({ value, label }: StoryMetric) {
  const element = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (!element.current || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const amount = Number.parseInt(value, 10);
    const suffix = value.replace(/^\d+/, "");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stop = () => { cancelAnimationFrame(frame); setDisplay(value); };
    preference.addEventListener("change", stop);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 950, 1);
        setDisplay(`${Math.round(amount * (1 - Math.pow(1 - progress, 3)))}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(element.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); preference.removeEventListener("change", stop); };
  }, [value]);
  return <div ref={element} className="cs-metric"><span className="cs-number" aria-hidden="true">{display}</span><span className="sr-only">{value} </span><span className="cs-metric-label">{label}</span></div>;
}

export function StoryGallery({ images }: { images: StoryImage[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  const move = (direction: number) => setSelected((index) => (index + direction + images.length) % images.length);
  const close = () => dialog.current?.close();
  return <>
    <div className="cs-gallery">
      {images.map((item, index) => <figure key={item.src}>
        <button type="button" className="cs-gallery-open" aria-label={`Enlarge ${item.caption}`} aria-haspopup="dialog" onClick={(event) => {
          trigger.current = event.currentTarget;
          setSelected(index); setOpen(true); dialog.current?.showModal();
        }}>
          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 44vw, 28vw" className="object-contain" />
          <span className="cs-enlarge"><Maximize2 size={17} aria-hidden="true" /></span>
        </button>
        <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{item.caption}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} className="cs-lightbox" aria-labelledby="cs-lightbox-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }} onKeyDown={(event) => {
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
    }}>
      <div className="cs-lightbox-inner">
        <div className="cs-lightbox-top"><p id="cs-lightbox-title" aria-live="polite">{images[selected].caption}</p><button type="button" onClick={close} aria-label="Close image" autoFocus><X size={22} /></button></div>
        {open && <div className="cs-lightbox-image"><Image src={images[selected].src} alt={images[selected].alt} fill sizes="(max-width: 768px) 90vw, 1000px" className="object-contain" /></div>}
        <div className="cs-lightbox-bottom"><button type="button" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft size={20} /></button><span aria-live="polite">{selected + 1} / {images.length}</span><button type="button" onClick={() => move(1)} aria-label="Next image"><ArrowRight size={20} /></button></div>
      </div>
    </dialog>
  </>;
}
