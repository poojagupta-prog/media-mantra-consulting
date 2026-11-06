import { BrandStar } from "@/components/ui/brand-star";
import Image from "next/image";
import { serviceImages } from "@/lib/service-images";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactModalLink } from "@/components/common/contact-modal-link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { services } from "@/components/common/data";
import { ScrollToSection } from "@/components/ui/scroll-to-section";

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
            Media Mantra Consultancy FZCO
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
              Looking for a communications partner that thinks like a founder
              and works like a newsroom? Media Mantra Consultancy in Dubai takes
              you from the first spark of a story to the moments that define
              your reputation, with strategy, creativity and care at every step.
            </p>
            <ScrollToSection
              targetId="services-list"
              className="inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-xs font-semibold uppercase tracking-wider"
            >
              Explore our services <ArrowDown size={17} />
            </ScrollToSection>
          </div>
        </div>
        <BrandStar
          aria-hidden="true"
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
                Our expertise
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
              Every brand needs a different blend. Explore each discipline
              below, or bring us a challenge and we'll build the right mix. As a
              PR and communications agency, Media Mantra Consultancy pairs
              regional insight with global experience, so your message lands
              where it matters.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white transition-[transform,box-shadow,border-color] duration-300 hover:border-teal/30 hover:shadow-[0_20px_50px_rgba(25,24,27,.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal motion-safe:hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#c9eae2]">
                  <Image
                    src={
                      serviceImages[service.slug as keyof typeof serviceImages]
                    }
                    alt=""
                    fill
                    sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1552px) calc((100vw - 144px) / 2), 704px"
                    className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="max-w-lg text-[clamp(1.65rem,2.6vw,2.5rem)] font-medium leading-[1.12] tracking-[-.05em] transition-colors group-hover:text-teal">
                      {service.title}
                    </h3>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-teal/20 bg-[#edf6f3] text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                      <ArrowUpRight aria-hidden="true" size={21} />
                    </span>
                  </div>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                    {service.text}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2 border-t border-black/10 pt-5">
                      {service.tags.split(" · ").map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f3f5f2] px-3 py-1.5 text-[11px] leading-4 text-teal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#19181b]/80 py-20 text-white md:py-28">
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
          <div className="w-full space-y-7 lg:max-w-lg">
            <p className="text-base leading-7 text-white/75">
              Whether you&apos;re launching, growing or recovering, Media Mantra
              Consultancy is ready to listen. Tell us what you&apos;re working on,
              and we&apos;ll show you how a smarter story can move your business
              forward.
            </p>
            <ContactModalLink
              href="/contact"
              className="inline-flex items-center gap-5 rounded-full bg-[#c9eae2] py-3 pl-6 pr-3 text-sm font-medium text-foreground hover:bg-white"
            >
              Let’s talk{" "}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
                <ArrowUpRight size={20} />
              </span>
            </ContactModalLink>
          </div>
        </div>
      </section>
    </div>
  );
}
