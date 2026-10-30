import { sectors } from "./sectors-data";
import { SectorCard } from "./sector-card";

const container =
  "mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]";

export function SectorDirectory() {
  return (
    <section id="sector-directory" className="scroll-mt-10 py-20 md:py-28">
      <div className={container}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[.13em] text-teal">
              Sector expertise / 01—12
            </p>
            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-[550] leading-none tracking-[-.065em]">
              Fluent in{" "}
              <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">
                your world.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted">
            Every industry has its own language. We find the human story
            within it, and help you tell it with clarity, confidence and
            purpose.
          </p>
        </div>
        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector, index) => (
            <SectorCard key={sector.title} sector={sector} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
