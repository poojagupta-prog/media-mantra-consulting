"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { photos } from "../common/data";

const sectors = [
  {
    title: "Real estate and property",
    sub: "More than places. Possibilities.",
    image: "/images/case-studies/real-estate/waterfront-residences.webp",
  },
  {
    title: "Hospitality, luxury and lifestyle",
    sub: "Extraordinary experiences deserve stories that stay with you.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Education and healthcare",
    sub: "Building trust in the brands shaping better futures.",
    image: "/images/case-studies/education/learning-commons.webp",
  },
  {
    title: "Finance, technology and start-ups",
    sub: "The next big thing starts with a story.",
    image: photos.team,
  },
];

export function SectorCarousel() {
  const [active, setActive] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredCard === active) return;

    const timer = window.setTimeout(
      () => setActive((index) => (index + 1) % sectors.length),
      4000,
    );
    return () => window.clearTimeout(timer);
  }, [active, hoveredCard]);

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Sectors we work in"
    >
      <div className="relative h-[300px] overflow-hidden md:h-[450px]">
        {sectors.map((sector, index) => {
          const forward = (index - active + sectors.length) % sectors.length;
          const position = forward === sectors.length - 1 ? -1 : forward;
          const visible = position >= -1 && position <= 1;
          const card = (
            <>
              <div className="relative h-[300px] overflow-hidden md:h-[450px]">
                <img
                  src={sector.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
                />
                {position === 0 && (
                  <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <ArrowUpRight size={23} aria-hidden="true" />
                  </span>
                )}
                {position === 0 && (
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-8">
                    <h3 className="text-2xl leading-tight tracking-tight">
                      {sector.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/90">
                      {sector.sub}
                    </p>
                  </div>
                )}
              </div>
            </>
          );
          const className =
            "absolute left-1/2 top-0 block w-[78%] origin-center text-left transition-[transform,opacity] duration-700 ease-in-out motion-reduce:transition-none md:w-[52%]";
          const style = {
            transform: `translateX(calc(-50% + ${position * 76}%)) scale(${position === 0 ? 1 : 0.78})`,
            opacity: visible ? 1 : 0,
            zIndex: position === 0 ? 2 : 1,
            pointerEvents: visible ? ("auto" as const) : ("none" as const),
          };
          return (
            <Link
              key={sector.title}
              href="/sectors"
              onMouseEnter={() => {
                if (position === 0) setHoveredCard(index);
              }}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={(event) => {
                if (position !== 0) {
                  event.preventDefault();
                  setActive(index);
                }
              }}
              onKeyDown={(event) => {
                if (position !== 0 && event.key === " ") {
                  event.preventDefault();
                  setActive(index);
                }
              }}
              role={position === 0 ? undefined : "button"}
              aria-label={
                position === 0
                  ? `Explore ${sector.title}`
                  : `Show ${sector.title}`
              }
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              className={className}
              style={style}
            >
              {card}
            </Link>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() =>
            setActive((index) => (index - 1 + sectors.length) % sectors.length)
          }
          aria-label="Previous sector"
          className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-teal/85 hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal motion-reduce:transform-none motion-reduce:transition-none"
        >
          <ArrowLeft aria-hidden="true" className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
        </button>
        <div className="flex items-center gap-3" aria-label="Choose a sector">
          {sectors.map((sector, index) => (
            <button
              key={sector.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${sector.title}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${active === index ? "w-8 bg-teal" : "w-2.5 bg-[#b7beb8]"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActive((index) => (index + 1) % sectors.length)}
          aria-label="Next sector"
          className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-teal/85 hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal motion-reduce:transform-none motion-reduce:transition-none"
        >
          <ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
        </button>
      </div>
    </div>
  );
}
