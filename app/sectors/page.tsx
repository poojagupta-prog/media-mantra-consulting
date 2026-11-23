import type { Metadata } from "next";
import { HeroSection } from "@/components/Sectors/hero-section";
import { SectorDirectory } from "@/components/Sectors/sector-directory";
import { CTA } from "@/components/Sectors/cta";

export const metadata: Metadata = {
  title: "PR Services by Sector in Dubai | Media Mantra Consultancy FZCO",
  description:
    "Sector-focused PR in Dubai for tech, finance, retail, fashion, sports, hospitality and real estate. Media Mantra Consultancy FZCO tells the story your industry needs.",
};

export default function SectorsPage() {
  return (
    <div>
      <HeroSection />
      <SectorDirectory />
      <CTA />
    </div>
  );
}
