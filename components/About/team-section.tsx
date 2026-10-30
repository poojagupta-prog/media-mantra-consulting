import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { Stagger } from "@/components/common/scroll-motion";

import { team } from "./about-data";

export function TeamSection() {
  return (
    <section
      id="team"
      className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] py-24 md:py-32"
    >
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-7 text-teal">
            03 / Meet the team
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
            The people who{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
              make it happen.
            </span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-7 text-muted">
          Curious minds. Different perspectives. One shared appetite for what is
          possible.
        </p>
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((person) => (
          <article
            key={person.name}
            className={`min-w-0 transition-[transform,box-shadow] duration-350 ease-[ease] motion-safe:hover:-translate-y-[7px] hover:shadow-[0_18px_30px_#19181b1c] group ${person.color}`}
          >
            <div className="relative h-80 overflow-hidden md:h-88">
              <Image
                src={person.image}
                alt={`Portrait of ${person.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase absolute left-4 top-4 rounded-full bg-white px-3 py-1.5">
                {person.number} / The team
              </span>
            </div>
            <div className="p-6">
              <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-3 opacity-70">
                {person.role}
              </p>
              <h3 className="text-3xl tracking-[-.06em]">{person.name}</h3>
              <p className="mt-5 border-t border-black/20 pt-4 text-sm leading-6">
                {person.line}
              </p>
            </div>
          </article>
        ))}
      </Stagger>
      <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mt-6 text-muted">
        Concept profiles and photography for this demo website.
      </p>
    </section>
  );
}
