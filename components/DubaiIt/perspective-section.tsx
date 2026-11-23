import { photos } from "@/components/common/data";
import { Label, MediaImage, TextLink } from "@/components/media/shared";

export function DubaiPerspective() {
  return (
    <section className="bg-[#e7efea] py-20">
      <div className="media-wrap media-split">
        <div className="relative h-[520px] overflow-hidden rounded-[180px_180px_12px_12px] max-[768px]:h-[370px]">
          <MediaImage src={photos.tech} alt="Modern towers seen from below" />
        </div>
        <div>
          <Label>Our point of view</Label>
          <h2 className="mb-[25px]">
            Progress deserves
            <br />
            <em>a powerful story.</em>
          </h2>
          <p className="media-copy mb-[26px]">
            For us, the Dubai-it mindset starts with action. We listen closely,
            shape a clear plan, bring the right people into the conversation and
            make sure the work is seen for what it achieves.
          </p>
          <TextLink href="/about-us">Get to know Media Mantra</TextLink>
        </div>
      </div>
    </section>
  );
}
