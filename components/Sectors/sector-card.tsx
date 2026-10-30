import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { photo, type Sector } from "./sectors-data";

export function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-black/5">
        <Image
          src={photo(sector.image)}
          alt={sector.alt}
          fill
          unoptimized
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background font-mono text-xs">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mb-3 mt-6 font-mono text-[10px] uppercase tracking-[.1em] text-teal">
        {sector.label}
      </p>
      <h3 className="text-[clamp(1.7rem,2.5vw,2.4rem)] font-medium leading-[1.12] tracking-[-.05em]">
        {sector.title}
      </h3>
      <p className="mb-6 mt-4 text-sm leading-7 text-muted">
        {sector.description}
      </p>
      <div className="mt-auto border-t border-black/15 pt-4">
        <p className="text-[10px] leading-5 uppercase tracking-[.07em] text-muted">
          {sector.tags}
        </p>
        <Link
          href="/contact"
          aria-label={`Let’s talk about ${sector.title}`}
          className="mt-4 inline-flex items-center gap-3 text-xs font-semibold transition-colors hover:text-teal"
        >
          Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
