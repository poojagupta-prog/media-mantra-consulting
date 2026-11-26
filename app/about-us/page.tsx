import {
  RecognitionPreview,
  GalleryPreview,
} from "@/components/media/previews";
import { consultingMetadata } from "@/lib/consulting-metadata";
import { ScrollProgress } from "@/components/common/scroll-motion";
import { Marquee } from "@/components/ui/marquee";
import { HeroSection } from "@/components/About/hero-section";
import { WhoWeAreSection } from "@/components/About/whoweare-section";
import { VisionSection } from "@/components/About/vision-section";
import { TeamSection } from "@/components/About/team-section";
import { ApproachSection } from "@/components/About/approach-section";
import { EssenceSection } from "@/components/About/essence-section";
import { PhilosophySection } from "@/components/About/philosophy-section";
import { MantrasSection } from "@/components/About/mantras-section";
import { CTA } from "@/components/About/cta";

export const metadata = consultingMetadata("/about-us");

export default function AboutUs() {
  return (
    <div className="[&_section[id]]:scroll-mt-24 [&_h2]:text-balance [&_h3]:text-balance">
      <ScrollProgress />
      <HeroSection />
      <Marquee />
      <WhoWeAreSection />
      <VisionSection />
      <TeamSection />
      <ApproachSection />
      <EssenceSection />
      <PhilosophySection />
      <MantrasSection />
      <RecognitionPreview />
      <GalleryPreview />
      <CTA />
    </div>
  );
}
