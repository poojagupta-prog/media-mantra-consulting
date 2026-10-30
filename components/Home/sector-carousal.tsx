"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { photos } from "../common/data";

const sectors = [
  {
    title: "Technology & innovation",
    sub: "The next big thing starts with a story.",
    image: photos.tech,
  },
  {
    title: "Real estate & places",
    sub: "More than places. Possibilities.",
    image: photos.city,
  },
  {
    title: "Lifestyle & consumer",
    sub: "Turning everyday brands into conversation.",
    image: photos.lifestyle,
  },
  {
    title: "Professional services",
    sub: "Make expertise impossible to overlook.",
    image: photos.team,
  },
];

export function SectorCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % sectors.length),
      4000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Sectors we work in"
    >
      <div className="relative h-[430px] overflow-hidden md:h-[570px]">
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
                {position === 0 && (
                  <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <ArrowUpRight size={23} aria-hidden="true" />
                  </span>
                )}
                <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase absolute bottom-5 left-5 bg-white px-3 py-2">
                  Sector focus / 0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-2xl tracking-tight">{sector.title}</h3>
              <p className="mt-2 text-xs text-muted">{sector.sub}</p>
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
      <div
        className="mt-2 flex items-center justify-center gap-3"
        aria-label="Choose a sector"
      >
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
    </div>
  );
}
