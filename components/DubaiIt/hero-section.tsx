import { photos } from "@/components/common/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Label, MediaImage } from "@/components/media/shared";

export function DubaiHero() {
  return (
    <section className="relative flex min-h-[min(820px,88svh)] items-end bg-[#073f43] text-white max-[768px]:min-h-[670px]">
      <MediaImage
        src={photos.city}
        alt="Dubai skyline across the water"
        preload
        className="object-[center_58%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,30,34,.93),rgba(2,30,34,.28)_75%),linear-gradient(0deg,#073f43,transparent_45%)]" />
      <div className="media-wrap relative pt-[95px] max-[768px]:pt-[65px]">
        <Reveal>
          <Label>Dubai-it / A philosophy of action</Label>
          <h1>
            Dream it.
            <br />
            <em className="text-[#92dfd4]">Dubai-it.</em>
          </h1>
          <p className="my-[30px] max-w-[480px] leading-[1.8]">
            In Dubai, bold ideas are a beginning. What defines the city is the
            drive to make them real.
          </p>
          <Button href="#the-idea" light>
            Discover the idea
          </Button>
        </Reveal>
        <div className="mt-[65px] flex justify-between gap-[25px] border-t border-white/25 py-[30px] font-mono text-[10px] tracking-[.1em] uppercase max-[768px]:mt-[45px] max-[768px]:flex-wrap max-[768px]:leading-[1.7]">
          <span>Vision → action → achievement</span>
          <span>Explore the story ↓</span>
        </div>
      </div>
    </section>
  );
}
