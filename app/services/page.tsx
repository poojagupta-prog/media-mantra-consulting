import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import { services } from "@/components/common/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Media Mantra Consulting's media, public relations, digital, events, content and brand services.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#c9eae2] py-20 md:py-28">
        <div className="relative z-10 mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
          <p className="mb-9 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.13em] text-teal">
            <span className="h-2 w-2 rounded-full bg-orange" /> What we do /
            Media Mantra Consulting
          </p>
          <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-[650] leading-[.92] tracking-[-.075em]">
            Ideas that move.
            <br />
            <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">
              Stories that stay.
            </span>
          </h1>
          <div className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-teal/25 pt-8">
            <p className="max-w-xl text-lg leading-8 md:text-xl">
              From the first spark of a story to the moments that define a
              reputation, we bring strategy, creativity and care to every
              connection.
            </p>
            <a
              href="#services-list"
              className="inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-xs font-semibold uppercase tracking-wider"
            >
              Explore our services <ArrowDown size={17} />
            </a>
          </div>
        </div>
        <Asterisk
          aria-hidden="true"
          strokeWidth={0.7}
          className="pointer-events-none absolute -right-20 top-12 h-72 w-72 text-teal/15 md:h-[550px] md:w-[550px]"
        />
      </section>
      <section
        id="services-list"
        className="scroll-mt-24 bg-background py-20 md:py-28"
      >
        <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[.13em] text-teal">
                Our expertise / 01—10
              </p>
              <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-[550] leading-none tracking-[-.065em]">
                The right mix for
                <br />
                <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">
                  your next move.
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted">
              Explore each discipline, or bring us a challenge and we’ll find
              the best way forward together.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex min-h-72 flex-col rounded-[26px] border border-black/10 bg-white p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(25,24,27,.09)] md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[.13em] text-muted">
                    Service / {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${service.color}`}
                  >
                    {service.icon}
                  </span>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="max-w-lg text-[clamp(1.7rem,3vw,2.8rem)] font-medium leading-[1.08] tracking-[-.055em] group-hover:text-teal">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                    {service.text}
                  </p>
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[.09em] text-muted">
                    {service.tags}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={21}
                    className="shrink-0 transition-transform group-hover:rotate-45"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#19181b] py-20 text-white md:py-28">
        <div className="mx-auto flex w-[min(1440px,calc(100%-112px))] flex-wrap items-end justify-between gap-8 max-[768px]:w-[calc(100%-40px)]">
          <div>
            <p className="mb-7 font-mono text-[10px] uppercase tracking-[.13em] text-[#92dfd4]">
              Let’s make something matter
            </p>
            <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-[600] leading-[.95] tracking-[-.07em]">
              Have a story
              <br />
              <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-[#92dfd4]">
                to tell?
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-5 rounded-full bg-[#c9eae2] py-3 pl-6 pr-3 text-sm font-medium text-foreground hover:bg-white"
          >
            Let’s talk{" "}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
