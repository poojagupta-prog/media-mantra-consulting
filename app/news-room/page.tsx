import { PodcastPreview } from "@/components/media/previews";
import { consultingMetadata } from "@/lib/consulting-metadata";
import { HeroSection } from "@/components/Newsroom/hero-section";
import { CoverageSection } from "@/components/Newsroom/coverage-section";
import { CTA } from "@/components/Newsroom/cta";

export const metadata = consultingMetadata("/news-room");

export default function NewsroomPage() {
  return (
    <div>
      <HeroSection />
      <CoverageSection />
      <PodcastPreview compact />
      <CTA />
    </div>
  );
}
