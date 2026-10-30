import type { Metadata } from "next";
import { ScrollProgress } from "@/components/common/scroll-motion";
import { Marquee } from "@/components/ui/marquee";
import { HeroSection } from "@/components/About/hero-section";
import { PageNavigationSection } from "@/components/About/pagenavigation-section";
import { WhoWeAreSection } from "@/components/About/whoweare-section";
import { VisionSection } from "@/components/About/vision-section";
import { TeamSection } from "@/components/About/team-section";
import { ApproachSection } from "@/components/About/approach-section";
import { EssenceSection } from "@/components/About/essence-section";
import { PhilosophySection } from "@/components/About/philosophy-section";
import { MantrasSection } from "@/components/About/mantras-section";
import { CTA } from "@/components/About/cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the people, ideas, philosophy, and mantras behind Media Mantra Consulting in Dubai.",
};

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
      <CTA />
    </div>
  );
}
