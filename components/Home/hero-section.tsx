import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { ArrowText } from "../ui/arrow-text";
import { photos } from "../common/data";

export function HeroSection() {
  return (
    <section
      className="overflow-hidden bg-[#f3f0e8] pt-[26px] max-[768px]:pt-[22px]"
      aria-labelledby="home-hero-title"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <div className="grid grid-cols-[1.15fr_1fr] items-center gap-[clamp(40px,6vw,100px)] pt-[52px] pb-[66px] min-[1600px]:gap-[110px] max-[1101px]:gap-[35px] max-[1024px]:grid-cols-1 max-[768px]:pt-9 max-[768px]:pb-[45px] max-[768px]:gap-9">
          <div className="relative z-2 [&_h1]:mt-[22px] [&_h1]:text-[clamp(60px,6.8vw,106px)] [&_h1]:font-semibold [&_h1]:leading-[.96] [&_h1]:tracking-[-.065em] [&_h1_span:first-of-type]:text-[#00777b] [&_h1_span:first-of-type]:font-normal max-[1101px]:[&_h1]:text-[clamp(54px,7vw,78px)] max-[768px]:[&_h1]:text-[clamp(44px,11.8vw,85px)]">
            <h1 id="home-hero-title">
              Make your
              <br />
              next chapter
              <br />
              <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
                impossible
              </span>
              <br />
              to ignore<span className="text-[#e96540]">.</span>
            </h1>
            <p className="mt-7 max-w-[450px] text-[15px] leading-[1.85] text-[#62635d] max-[768px]:mt-[23px] max-[768px]:text-sm">
              You have the ambition. We find the story. From first impressions
              to lasting reputations, we help brands earn attention, build
              trust, and move the conversation forward.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6 max-[768px]:gap-[22px]">
              <Button>Let’s shape your story</Button>
              <ArrowText href="/services">Explore our expertise</ArrowText>
            </div>
          </div>
          <div className="relative mt-3 mb-9 min-w-0 max-[1024px]:mx-auto max-[1024px]:w-full max-[1024px]:max-w-[560px] max-[1024px]:px-3 max-[768px]:mt-2 max-[768px]:mb-3">
            <div className="relative h-[clamp(460px,39vw,610px)] overflow-hidden rounded-[180px_180px_4px_4px] bg-[#244a4a] max-[1024px]:h-[clamp(380px,70vw,520px)] max-[1024px]:rounded-[45%_45%_4px_4px]">
              <img
                src={photos.city}
                alt="Dubai’s skyline and Burj Khalifa overlooking the city"
                fetchPriority="high"
                className="h-full w-full scale-[1.02] object-cover object-center blur-[2px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,35,35,1),transparent_40%,rgba(7,35,35,.85))]" />
              <div className="absolute top-[20%] right-[25px] left-[25px] flex justify-between gap-4 text-white max-[1101px]:flex-col max-[1101px]:gap-[5px] max-[1024px]:top-[30%] max-[1024px]:right-5 max-[1024px]:left-5 font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase">
                <span>Rooted in Dubai.</span>
                <span>Connected everywhere. ↗</span>
              </div>
              <div className="absolute bottom-[215px] left-8 right-6 text-background [&>span]:text-background [&>span]:text-[9px] [&_p]:mt-3.5 [&_p]:text-[clamp(32px,3vw,47px)] [&_p]:leading-[1.08] [&_p]:tracking-[-.045em] max-[1024px]:bottom-[100px] max-[1024px]:left-5 max-[1024px]:right-5 max-[1024px]:[&_p]:text-[clamp(28px,5vw,42px)]">
                <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase">
                  A new perspective changes everything
                </span>
                <p>
                  Local pulse.
                  <br />
                  <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
                    Global possibility.
                  </span>
                </p>
              </div>
            </div>
            <span
              className="absolute -top-7 -right-[26px] rotate-12 text-[132px] leading-none text-[#e96540] max-[1024px]:text-[clamp(76px,14vw,110px)] max-[1024px]:right-0 max-[1024px]:-top-2.5"
              aria-hidden="true"
            >
              ✳
            </span>
            <div className="absolute -bottom-9 -right-[18px] w-[88%] -rotate-3 bg-[#d8e8be] px-[26px] py-[23px] text-[#183b32] shadow-[0_12px_30px_#163a3212] [&>span]:text-[9px] [&>div]:mt-3 [&>div]:flex [&>div]:justify-between [&>div]:items-end [&>div]:gap-3 [&_p]:text-[clamp(23px,2.2vw,32px)] [&_p]:leading-[1.12] [&_p]:tracking-[-.035em] max-[1024px]:relative max-[1024px]:bottom-auto max-[1024px]:right-auto max-[1024px]:ml-auto max-[1024px]:-mt-14 max-[1024px]:w-[94%] max-[1024px]:-rotate-2 max-[1024px]:p-[clamp(16px,3vw,24px)] max-[1024px]:[&_p]:text-[clamp(21px,3.8vw,30px)]">
              <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase">
                The Media Mantra approach
              </span>
              <div>
                <p>
                  Clear strategy.
                  <br />
                  Bold storytelling.
                  <br />
                  <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em]">
                    Meaningful impact.
                  </span>
                </p>
                <ArrowUpRight
                  size={32}
                  className="shrink-0"
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[.9fr_1fr_1.15fr_1.1fr] gap-6 border-t border-[#233f3426] py-[26px] max-[1101px]:grid-cols-2 max-[1101px]:gap-[25px] max-[768px]:gap-x-4 max-[768px]:gap-y-[22px]">
          <a
            href="#intro"
            className="group/discover flex items-center gap-[13px] text-[#536257] max-[768px]:gap-[9px] max-[768px]:[&>span:last-child]:text-[8px]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#233f3440] transition-colors duration-200 group-hover/discover:bg-[#d8e8be]">
              <ArrowDown size={18} aria-hidden="true" />
            </span>
            <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase">
              A fresh perspective
              <br />
              starts here
            </span>
          </a>
          {[
            ["01", "Find your voice", "Positioning & brand narratives"],
            [
              "02",
              "Earn the conversation",
              "Public relations & media strategy",
            ],
            ["03", "Build what lasts", "Reputation & thought leadership"],
          ].map(([number, title, detail]) => (
            <div
              key={number}
              className="flex gap-[15px] border-l border-[#233f3426] pl-6 [&>span]:pt-[3px] [&>span]:text-[#00777b] [&_h2]:text-sm [&_h2]:font-[550] [&_h2]:tracking-[-.02em] [&_p]:mt-[5px] [&_p]:text-[11px] [&_p]:leading-[1.6] [&_p]:text-[#62635d] max-[1101px]:pl-4 max-[768px]:gap-[9px] max-[768px]:pl-3 max-[768px]:[&_h2]:text-[13px] max-[768px]:[&_p]:text-[10px]"
            >
              <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase">
                {number}
              </span>
              <div>
                <h2>{title}</h2>
                <p>{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
