"use client";
import Link from "next/link";
import { links } from "./data";


export function Footer() {
  return (
    <footer className="overflow-hidden bg-[#19181b] text-white">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] flex flex-wrap justify-between gap-10 border-b border-white/15 py-12">
        <div>
          <p className="text-lg font-medium">Media Mantra Consulting</p>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mt-4 text-white/50">
            Dubai, UAE · Connected to the world
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-start gap-6"
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-white/70 hover:text-[#91dcd3]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div
        aria-hidden="true"
        className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] pt-8 text-[clamp(3.8rem,12.3vw,13rem)] font-semibold leading-none tracking-[-.08em] text-[#324340]"
      >
        media mantra<span className="text-teal">.</span>
        <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase block mt-4 text-white/60">
          Consulting · PR & communications · Dubai
        </span>
      </div>
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] flex flex-wrap justify-between gap-3 py-7 text-[10px] text-white/45">
        <span>© 2026 Media Mantra Consulting</span>
        <span>Concept website · Illustrative content & photography</span>
        <a href="#main-content" className="text-white/75">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
