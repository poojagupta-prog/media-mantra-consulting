"use client";
import Link from "next/link";
import { links, services } from "./data";


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
      <div className="mx-auto grid w-[min(1440px,calc(100%-112px))] gap-7 border-b border-white/15 py-10 max-[768px]:w-[calc(100%-40px)] md:grid-cols-[220px_1fr]">
        <Link href="/services" className="font-mono text-[10px] uppercase tracking-[.13em] text-[#92dfd4] hover:text-white">Explore our services ↗</Link>
        <nav aria-label="Services" className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="text-sm text-white/70 transition-colors hover:text-[#92dfd4]">{service.title}</Link>)}
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
