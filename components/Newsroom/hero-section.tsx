import { ArrowDown, Asterisk } from "lucide-react";
import { ScrollToSection } from "@/components/ui/scroll-to-section";
import { FeaturedStory } from "./featured-story";
import { articles } from "./newsroom-data";

const publishers = ["Khaleej Times", "Gulf News", "exchange4media", "Campaign Middle East"];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-[#dcece5] lg:block" />
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <div className="grid items-center gap-14 pb-16 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20 xl:gap-24">
          <div>
            <p className="mb-9 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.16em] text-teal md:mb-12">
              <span className="h-2 w-2 rounded-full bg-orange" />
              The newsroom / Media Mantra
            </p>
            <h1 className="text-[clamp(4.25rem,7.8vw,8rem)] font-[600] leading-[.94] tracking-[-.075em]">
              A story<br />
              worth<br />
              <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-teal">talking about.</span>
            </h1>
            <p className="mt-8 max-w-sm text-base leading-8 text-muted md:mt-10">
              New chapters. Bold moves. Fresh perspectives. Discover the people
              and moments putting Media Mantra in the headlines.
            </p>
            <ScrollToSection
              targetId="coverage"
              className="group mt-8 inline-flex items-center gap-4 text-sm font-medium"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-teal/35 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                <ArrowDown size={20} aria-hidden="true" />
              </span>
              Explore the coverage
              <span className="font-mono text-[10px] text-muted">({String(articles.length).padStart(2, "0")})</span>
            </ScrollToSection>
          </div>
          <div className="relative mx-auto w-full max-w-xl pb-4 pr-4 lg:pt-5">
            <div aria-hidden="true" className="absolute bottom-0 left-4 right-0 top-4 rounded-[8px] bg-teal/20 lg:top-9" />
            <Asterisk aria-hidden="true" strokeWidth={1.1} className="absolute -right-5 -top-8 z-20 h-20 w-20 rotate-12 text-orange md:-right-7 md:h-24 md:w-24" />
            <FeaturedStory />
          </div>
        </div>
        <div className="relative flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-foreground/15 py-7 md:py-9">
          <p className="shrink-0 font-mono text-[9px] uppercase leading-5 tracking-[.15em] text-muted">In the pages of</p>
          <div className="flex flex-1 flex-wrap items-center justify-between gap-x-7 gap-y-4">
            {publishers.map((publisher) => (
              <span key={publisher} className="font-[Georgia,'Times_New_Roman',serif] text-lg font-bold tracking-[-.035em] text-foreground/75 md:text-xl">{publisher}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
