import type { Metadata } from "next";
import { HeroSection } from "@/components/Newsroom/hero-section";
import { CoverageSection } from "@/components/Newsroom/coverage-section";
import { CTA } from "@/components/Newsroom/cta";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "Media Mantra Consulting in the news. Explore company milestones, partnerships, leadership interviews and press coverage from regional and industry publications.",
};

export default function NewsroomPage() {
  return (
    <div>
      <HeroSection />
      <CoverageSection />
      <CTA />
    </div>
  );
}
