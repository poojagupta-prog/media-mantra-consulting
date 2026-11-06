"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { links, services } from "./data";
import { ScrollToSection } from "@/components/ui/scroll-to-section";
import { offices, contactEmails } from "./contact-details";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="overflow-hidden bg-[#19181b] text-white">
      <div className="mx-auto grid w-[min(1440px,calc(100%-112px))] gap-7 border-b border-white/15 py-8 max-[768px]:w-[calc(100%-40px)] md:grid-cols-2 lg:grid-cols-[.8fr_1fr_1fr] lg:gap-10">
        <div className="md:col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label="Media Mantra Consulting home"
            className="inline-block w-44 rounded-xl  p-3 transition-transform hover:-translate-y-0.5"
          >
            <Image
              src="/logo.png"
              alt="Media Mantra Consulting"
              width={180}
              height={135}
              className="h-auto w-full"
            />
          </Link>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mt-5 text-white/50">
            Dubai · Gurugram · Connected to the world
          </p>
        </div>
        {offices.map((office) => (
          <section
            key={office.title}
            className="min-w-0 border-l border-[#92dfd4]/30 pl-5"
          >
            <h2 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[.12em] text-[#92dfd4]">
              {office.title}
            </h2>
            <address className="space-y-2 text-xs leading-relaxed not-italic text-white/70">
              <p className="max-w-sm">{office.address}</p>
              <a
                href={`tel:${office.telephone}`}
                className="inline-block text-white transition-colors hover:text-[#92dfd4] focus-visible:outline-offset-4"
              >
                {office.phone}
              </a>
              <div className="flex flex-col items-start gap-1">
                {contactEmails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="max-w-full break-words transition-colors hover:text-[#92dfd4] focus-visible:outline-offset-4"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </address>
          </section>
        ))}
      </div>
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] border-b border-white/15 py-5 max-[768px]:w-[calc(100%-40px)]">
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-start gap-x-6 gap-y-3"
        >
          {[
            ...links,
            // ["/dubai-it", "Dubai IT"],
            ["/podcasts", "Podcasts"],
            ["/awards", "Awards"],
            ["/gallery", "Gallery"],
            ["/blogs", "Blogs"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
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
      <div className="mx-auto grid w-[min(1440px,calc(100%-112px))] gap-5 border-b border-white/15 py-6 max-[768px]:w-[calc(100%-40px)] md:grid-cols-[220px_1fr]">
        <Link
          href="/services"
          className="font-mono text-[10px] uppercase tracking-[.13em] text-[#92dfd4] hover:text-white"
        >
          Explore our services ↗
        </Link>
        <nav
          aria-label="Services"
          className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="text-sm text-white/70 transition-colors hover:text-[#92dfd4]"
            >
              {service.title}
            </Link>
          ))}
        </nav>
      </div>
      <div
        aria-hidden="true"
        className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] pt-5 text-[clamp(2.8rem,8vw,8rem)] font-semibold leading-none tracking-[-.08em] text-[#324340]"
      >
        <div className="relative isolate w-fit pb-[.3em]">
          media mantra<span className="text-teal">.</span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 block select-none whitespace-nowrap text-end text-[clamp(1.15rem,3.5vw,3.5rem)] max-[768px]:text-[clamp(1.15rem,4.5vw,4.5rem)] tracking-[-.05em] text-white/[.07]">
            Consultancy FZCO
          </span>
        </div>
        <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase block mt-4 text-white/60">
          Consulting · PR & communications · Dubai & Gurugram
        </span>
      </div>
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] flex flex-wrap justify-between gap-3 py-7 text-[10px] text-white/45">
        <span>© {year} Media Mantra Consultancy FZCO</span>
        <ScrollToSection targetId="top" className="text-white/75">
          Back to top ↑
        </ScrollToSection>
      </div>
    </footer>
  );
}
