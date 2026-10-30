import Image from "next/image";
import { ArrowDown, Asterisk } from "lucide-react";
import { ScrollToSection } from "@/components/ui/scroll-to-section";
import { sectors, photo } from "./sectors-data";

const container =
  "mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#c9eae2] pb-14 pt-16 md:pb-20 md:pt-24">
      <div className={container}>
        <p className="mb-9 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.13em] text-teal">
          <span className="h-2 w-2 rounded-full bg-orange" /> Our sectors /
          Worlds we move in
        </p>
        <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <h1 className="text-[clamp(3.5rem,8.5vw,8.5rem)] font-[650] leading-[.94] tracking-[-.075em]">
            Different worlds.
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">
              One instinct.
            </span>
          </h1>
          <div>
            <p className="max-w-md text-lg leading-8">
              Find the story that matters. From emerging ideas to established
              icons, we bring a fresh perspective and a deep understanding of
              your world.
            </p>
            <ScrollToSection
              targetId="sector-directory"
              className="mt-7 inline-flex items-center gap-4 border-b border-teal/40 pb-2 text-xs font-semibold uppercase tracking-wider"
            >
              Explore our sectors <ArrowDown size={17} aria-hidden="true" />
            </ScrollToSection>
          </div>
        </div>
        <div
          className="mt-14 grid grid-cols-[1.15fr_.85fr] gap-3 md:mt-16 md:grid-cols-[1.2fr_.8fr_1fr] md:gap-5"
          aria-hidden="true"
        >
          {[sectors[4], sectors[6], sectors[8]].map((sector, index) => (
            <div
              key={sector.image}
              className={`relative h-56 overflow-hidden rounded-[3px] md:h-80 ${index === 2 ? "hidden md:block" : ""}`}
            >
              <Image
                src={photo(sector.image)}
                alt=""
                fill
                unoptimized
                preload={index === 0}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-5 left-5 right-4 font-mono text-[10px] uppercase tracking-[.12em] text-white">
                {
                  [
                    "Business without borders",
                    "Culture in motion",
                    "Stories in the spotlight",
                  ][index]
                }
              </span>
            </div>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[.12em] text-teal">
          <span>12 sectors. Countless possibilities.</span>
          <Asterisk
            size={28}
            aria-hidden="true"
            className="shrink-0 text-orange"
          />
        </div>
      </div>
    </section>
  );
}
