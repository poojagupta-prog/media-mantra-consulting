import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";
import { SectorCarousel } from "./sector-carousal";

export function SectorsSection() {
  return (
    <section className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] py-22 md:py-28">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mb-6 text-teal">
            Worlds we move in
          </p>
          <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
            Fluent in{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
              your world.
            </span>
          </h2>
        </div>
        <ArrowText href="/sectors">Explore our sectors</ArrowText>
      </Reveal>
      <SectorCarousel />
    </section>
  );
}
