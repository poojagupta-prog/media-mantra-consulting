import type { Metadata } from "next";
import { HeroSection } from "@/components/Sectors/hero-section";
import { SectorDirectory } from "@/components/Sectors/sector-directory";
import { CTA } from "@/components/Sectors/cta";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Explore our PR expertise across technology, finance, retail, fashion, sports, entertainment, luxury, hospitality, real estate and more.",
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
