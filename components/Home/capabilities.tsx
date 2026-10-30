import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";
import { ServiceCards } from "../ui/service-cards";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-[#e6efeb] py-20 md:py-26">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-7">
          <div>
            <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 text-teal">
              What we bring to the table
            </p>
            <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
              Sharp thinking.
              <br />
              <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
                Serious impact.
              </span>
            </h2>
          </div>
          <ArrowText href="/services">All our capabilities</ArrowText>
        </Reveal>
        <ServiceCards limit={6} />
      </div>
    </section>
  );
}
