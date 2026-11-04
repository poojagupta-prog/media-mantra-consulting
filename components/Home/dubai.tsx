"use client";

import { MapPin, Quote } from "lucide-react";
import { ParallaxImage } from "../common/scroll-motion";
import { photos } from "../common/data";
import { Reveal } from "../ui/reveal";
import { ArrowText } from "../ui/arrow-text";
import { useState } from "react";
import Image from "next/image";

const locations = [
  {
    name: "Dubai Marina",
    area: "Destination storytelling",
    x: 29,
    y: 48,
    note: "A launch story that makes a place feel like somewhere people want to be.",
  },
  {
    name: "Palm Jumeirah",
    area: "Hospitality & lifestyle",
    x: 33,
    y: 34,
    note: "Thoughtful experiences give people a story worth sharing.",
  },
  {
    name: "Downtown Dubai",
    area: "Brand positioning",
    x: 67,
    y: 53,
    note: "A clear point of view can turn an ambitious idea into a conversation.",
  },
  {
    name: "Dubai Creek",
    area: "Culture & community",
    x: 81,
    y: 53,
    note: "The strongest messages begin with an understanding of the city.",
  },
];

export function DubaiPerspective() {
  return (
    <section className="relative isolate overflow-hidden bg-[#073f43] py-24 text-white md:py-36">
      <ParallaxImage
        src={photos.city}
        alt="Dubai’s skyline at dusk"
        className="absolute inset-0 -z-20 h-full opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073f43] via-[#073f43]/75 to-transparent" />
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <Reveal>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-10 text-[#92dfd4]">
            Dubai at heart. The world in view.
          </p>
          <h2 className="text-[clamp(3.7rem,8.2vw,8.5rem)] leading-[.93] tracking-[-.075em] font-[650] max-[768px]:text-[clamp(3.5rem,12vw,6rem)] max-w-4xl">
            A city that dreams big.
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-[#92dfd4]">
              So do we.
            </span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 border-t border-white/25 pt-8 md:grid-cols-[1.3fr_1fr]">
          <p className="max-w-lg text-base leading-8 text-white/75">
            Where global ambition meets local culture. We shape communications
            for brands finding their voice in Dubai, across the UAE, and in the
            wider region.
          </p>
          <div>
            <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 flex items-center gap-2 text-[#92dfd4]">
              <MapPin size={14} /> Dubai · UAE · GCC
            </p>
            <ArrowText href="/dubai-it">Explore the Dubai IT</ArrowText>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DubaiMap() {
  const [active, setActive] = useState(2);
  const location = locations[active];

  return (
    <section
      className="bg-[#e8eee7] py-20 md:py-28"
      aria-labelledby="dubai-map-title"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[.13em] text-teal">
              Across the city / Dubai
            </p>
            <h2
              id="dubai-map-title"
              className="text-[clamp(2.6rem,5vw,5.1rem)] font-[550] leading-none tracking-[-.065em]"
            >
              Stories with a{" "}
              <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">
                sense of place.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-muted">
            Explore the markers for a glimpse of the stories we could help shape
            across Dubai.
          </p>
        </div>
        <div className="grid overflow-hidden border border-[#164b4930] bg-[#d3e4df] lg:grid-cols-[1.55fr_.85fr]">
          <div
            className="relative h-[360px] overflow-hidden sm:h-[480px]"
            aria-label="Map of Dubai with four interactive locations"
          >
            <Image
              src="/dubai-map.png"
              alt="Street map of Dubai showing the coastline, Palm Jumeirah and Dubai Creek"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-fill"
            />
            {locations.map((point, index) => (
              <button
                key={point.name}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-label={`Show ${point.name} story preview`}
                aria-pressed={active === index}
                className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 outline-none"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white shadow-[0_4px_14px_#073f4350] transition-transform group-hover:scale-125 group-focus-visible:scale-125 ${active === index ? "scale-110 bg-[#e96540] text-white" : "bg-[#073f43] text-white"}`}
                >
                  <MapPin size={19} fill="currentColor" strokeWidth={1.5} />
                </span>
                <span className="hidden whitespace-nowrap rounded bg-[#073f43] px-2 py-1 font-mono text-[9px] uppercase tracking-[.08em] text-white shadow-sm sm:block">
                  {point.name}
                </span>
              </button>
            ))}
            <a
              href="https://commons.wikimedia.org/wiki/File:Dubai_map_city_landmarks.svg"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 rounded bg-white/90 px-3 py-1.5 font-mono text-[9px] text-[#315b55]"
            >
              Map: AreJay / Wikimedia Commons · CC BY 3.0
            </a>
          </div>
          <div
            className="flex min-h-[360px] flex-col justify-between bg-[#073f43] p-7 text-white sm:min-h-[480px] sm:p-10 lg:h-[480px]"
            aria-live="polite"
          >
            <div>
              <div className="mb-10 flex items-center justify-between text-[#92dfd4]">
                <span className="font-mono text-[10px] uppercase tracking-[.13em]">
                  Story preview
                </span>
                <Quote size={24} strokeWidth={1.3} />
              </div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[.13em] text-[#92dfd4]">
                {location.area}
              </p>
              <h3 className="text-3xl tracking-[-.05em]">{location.name}</h3>
              <p className="mt-6 max-w-sm font-[Georgia,'Times_New_Roman',serif] text-[clamp(1.5rem,2.5vw,2.2rem)] italic leading-snug">
                “{location.note}”
              </p>
            </div>
            <p className="mt-9 border-t border-white/20 pt-4 text-xs leading-5 text-white/60">
              Illustrative copy, not a client testimonial. Hover, focus or tap a
              marker to explore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Dubai() {
  return (
    <>
      <DubaiPerspective />
      <DubaiMap />
    </>
  );
}
