import { ScrollStatement } from "../common/scroll-motion";
import { ArrowUpRight } from "lucide-react";
import { ContactModalLink } from "../common/contact-modal-link";

export function Manifesto() {
  return (
    <section className="bg-teal py-24 text-white md:py-32">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-10 text-white/65">
          Our mantra
        </p>
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="min-w-0 flex-1">
            <ScrollStatement>
              Be clear. Be bold. Be culturally connected. Tell stories that earn
              attention — and give people a reason to care.
            </ScrollStatement>
          </div>
          <div className="w-full sm:w-auto lg:w-80 lg:shrink-0">
            <ContactModalLink
              href="/contact"
              className="group flex items-start justify-between gap-6 border-t border-white/35 pt-6 pb-3 text-white transition-colors hover:border-[#b6e9df] hover:text-[#b6e9df]"
            >
              <span className="text-2xl leading-tight font-medium tracking-[-.035em]">
                Talk to a PR agency in Dubai that{" "}
                <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal text-[#b6e9df]">
                  gets it
                </span>
              </span>
              <ArrowUpRight
                size={28}
                aria-hidden="true"
                className="mt-1 shrink-0 transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
              />
            </ContactModalLink>
          </div>
        </div>
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mt-12 text-[#b6e9df]">
          Media Mantra Consultancy / PR & communications / Dubai
        </p>
      </div>
    </section>
  );
}
