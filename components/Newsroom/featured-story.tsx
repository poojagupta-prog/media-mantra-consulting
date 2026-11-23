import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { articles } from "./newsroom-data";

export function FeaturedStory() {
  const featured = articles[4];

  return (
    <article className="relative overflow-hidden rounded-[8px] bg-[#173f3b] shadow-[0_18px_50px_-25px_rgba(23,63,59,.45)]">
      <a
        href={featured.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${featured.title} — read on ${featured.publisher} (opens in a new tab)`}
        className="group block"
      >
        <div className="relative aspect-[7/5] overflow-hidden bg-[#777578]">
          <Image
            src={featured.image}
            alt="Udit Pathak, co-founder and director of Media Mantra Consulting"
            fill
            preload
            sizes="(max-width: 1023px) 90vw, 45vw"
            className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.035]"
          />
          <span className="absolute left-5 top-5 rounded-full bg-background px-4 py-2 font-mono text-[9px] uppercase tracking-[.13em] text-teal">
            In focus / Partnerships
          </span>
        </div>
        <div className="p-6 text-background sm:p-8">
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.14em] text-[#a5d9cb]">
            <span className="h-px w-7 bg-[#a5d9cb]" aria-hidden="true" />
            {featured.publisher}
          </div>
          <h2 className="text-[clamp(1.5rem,2.25vw,2.15rem)] font-medium leading-[1.18] tracking-[-.04em]">
            {featured.title}
          </h2>
          <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
            <span className="text-xs font-medium">Read the full story</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9eae2] text-[#173f3b] transition-colors group-hover:bg-white">
              <ArrowUpRight size={21} aria-hidden="true" className="transition-transform motion-safe:group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
