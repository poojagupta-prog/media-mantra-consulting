"use client";

import { MapPin, Quote } from "lucide-react";
import { ParallaxImage } from "../common/scroll-motion";
import { photos } from "../common/data";
import { Reveal } from "../ui/reveal";
import { ArrowText } from "../ui/arrow-text";
import { useState } from "react";

const locations = [
  {
    name: "Dubai Marina",
    area: "Destination storytelling",
    x: 27,
    y: 67,
    note: "A launch story that makes a place feel like somewhere people want to be.",
  },
  {
    name: "Palm Jumeirah",
    area: "Hospitality & lifestyle",
    x: 32,
    y: 43,
    note: "Thoughtful experiences give people a story worth sharing.",
  },
  {
    name: "Downtown Dubai",
    area: "Brand positioning",
    x: 58,
    y: 56,
    note: "A clear point of view can turn an ambitious idea into a conversation.",
  },
  {
    name: "Dubai Creek",
    area: "Culture & community",
    x: 74,
    y: 34,
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
            <ArrowText href="/about">Get to know our perspective</ArrowText>
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
            className="relative min-h-[360px] overflow-hidden sm:min-h-[480px]"
            aria-label="Illustrated map of Dubai with four interactive locations"
          >
            <svg
              viewBox="0 0 900 520"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label="Stylized map showing Dubai's coastline, Palm Jumeirah and Dubai Creek"
            >
              <rect width="900" height="520" fill="#a6cbc9" />
              <path
                d="M0 467 C140 420 220 391 312 351 C387 319 454 271 534 224 C644 158 745 123 900 82 L900 520 L0 520Z"
                fill="#e8e5d6"
              />
              <path
                d="M0 467 C140 420 220 391 312 351 C387 319 454 271 534 224 C644 158 745 123 900 82"
                fill="none"
                stroke="#f7f5e9"
                strokeWidth="8"
              />
              <path
                d="M405 369 C530 333 623 280 713 234 C787 196 844 186 900 172 M339 420 C481 389 586 336 670 300 C762 257 845 245 900 224 M491 520 C512 432 581 361 681 303 M672 520 C669 411 731 328 806 258 M782 520 C764 398 803 307 900 247"
                fill="none"
                stroke="#fffaf0"
                strokeWidth="10"
                opacity=".85"
              />
              <path
                d="M543 268 C605 282 653 317 714 311 C788 303 813 362 900 360"
                fill="none"
                stroke="#a6cbc9"
                strokeWidth="19"
              />
              <path
                d="M543 268 C605 282 653 317 714 311 C788 303 813 362 900 360"
                fill="none"
                stroke="#f7f5e9"
                strokeWidth="3"
                opacity=".8"
              />
              <path
                d="M287 361 C265 326 244 288 237 246"
                fill="none"
                stroke="#e8e5d6"
                strokeWidth="12"
              />
              <path
                d="M237 247 C191 231 178 180 207 145 C233 115 284 120 307 154 C338 199 286 244 237 247Z"
                fill="none"
                stroke="#e8e5d6"
                strokeWidth="13"
              />
              <path
                d="M237 243 L236 151 M236 180 L204 158 M236 180 L270 155 M236 205 L194 190 M236 205 L286 187 M236 225 L206 221 M236 225 L277 219"
                fill="none"
                stroke="#e8e5d6"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <path
                d="M95 500 L570 267 M317 520 L738 244 M585 520 L840 193"
                fill="none"
                stroke="#d2c9b7"
                strokeWidth="2"
                strokeDasharray="5 9"
              />
              <text
                x="55"
                y="95"
                fill="#367d80"
                fontSize="14"
                letterSpacing="4"
              >
                ARABIAN GULF
              </text>
              <text
                x="490"
                y="442"
                fill="#79918a"
                fontSize="13"
                letterSpacing="3"
              >
                DUBAI
              </text>
            </svg>
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
                <span className="whitespace-nowrap rounded bg-[#073f43] px-2 py-1 font-mono text-[9px] uppercase tracking-[.08em] text-white shadow-sm">
                  {point.name}
                </span>
              </button>
            ))}
            <span className="absolute bottom-4 left-4 rounded bg-white/80 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[#315b55]">
              Illustrative map · not to scale
            </span>
          </div>
          <div
            className="flex min-h-[260px] flex-col justify-between bg-[#073f43] p-7 text-white sm:p-10"
            aria-live="polite"
          >
            <div>
              <div className="mb-10 flex items-center justify-between text-[#92dfd4]">
                <span className="font-mono text-[10px] uppercase tracking-[.13em]">
                  Story preview / 0{active + 1}
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
