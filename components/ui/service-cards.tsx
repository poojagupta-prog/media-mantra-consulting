"use client";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { services } from "../common/data";

export function ServiceCards({ limit = 6 }: { limit?: number }) {
  return (
    <div className="border-t border-black/20">
      {services.slice(0, limit).map((s) => (
        <Reveal key={s.title}>
          <Link
            href={`/services/${s.slug}`}
            className="group/service grid grid-cols-[minmax(0,1fr)_44px] items-center gap-5 border-b border-black/20 py-7 md:grid-cols-[1fr_1fr_50px]"
          >
            <h3 className="text-2xl font-medium tracking-[-.04em] md:text-4xl">
              {s.title}
            </h3>
            <p className="col-span-2 row-start-2 max-w-xs text-xs leading-6 text-muted md:col-span-1 md:col-start-2 md:row-start-1">{s.text}</p>
            <span className="col-start-2 row-start-1 transition-[transform,background,color] duration-300 group-hover/service:rotate-45 group-hover/service:bg-teal group-hover/service:text-white flex h-11 w-11 items-center justify-center rounded-full border border-black/20 md:col-start-3">
              <ArrowUpRight size={21} />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
