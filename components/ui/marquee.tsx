"use client";
import Image from "next/image";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const publications = [
  { name: "Al Arabiya", logo: "al-arabiya.svg" },
  { name: "Gulf News", logo: "gulf-news.svg" },
  { name: "Khaleej Times", logo: "khaleej-times.svg" },
  { name: "The National", logo: "the-national-color.webp" },
  { name: "Saudi Gazette", logo: "saudi-gazette.svg" },
  { name: "Arab News", logo: "arab-news.png" },
  { name: "Qatar Tribune", logo: "qatar-tribune.svg" },
  { name: "Oman Observer", logo: "oman-observer-color.png" },
  { name: "Kuwait Times", logo: "kuwait-times.svg" },
  { name: "Gulf Business", logo: "gulf-business.png" },
];

export function Marquee() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const group = groupRef.current;
    if (!container || !group) return;

    const updateCopies = () => {
      const width = group.getBoundingClientRect().width;
      if (width)
        setCopies(Math.max(1, Math.ceil(container.clientWidth / width)));
    };

    const observer = new ResizeObserver(updateCopies);
    observer.observe(container);
    observer.observe(group);
    updateCopies();
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="publication-marquee overflow-hidden border-y border-black/10 bg-teal py-5"
      role="img"
      aria-label={`Publications: ${publications.map(({ name }) => name).join(", ")}`}
    >
      <div
        aria-hidden="true"
        className="publication-marquee-track w-max flex"
        style={{
          animationDuration: `${35 * copies}s`,
          animationName: reduced ? "none" : undefined,
        }}
      >
        {Array.from({ length: copies * 2 }, (_, n) => (
          <div
            key={n}
            ref={n === 0 ? groupRef : undefined}
            className="flex shrink-0 items-center gap-20 pr-20 md:gap-32 md:pr-32"
          >
            {publications.map(({ name, logo }) => (
              <span
                key={name}
                className="group relative flex h-10 w-36 shrink-0 items-center justify-center md:h-12 md:w-44"
              >
                <Image
                  src={`/images/publications/${logo}`}
                  alt={name}
                  width={176}
                  height={48}
                  unoptimized
                  className={`h-full w-full object-contain brightness-0 invert transition-[filter] duration-200 ${
                    logo === "gulf-business.png"
                      ? "group-hover:invert-0"
                      : "group-hover:brightness-100 group-hover:invert-0"
                  }`}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
