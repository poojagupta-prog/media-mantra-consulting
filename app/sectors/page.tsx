import { consultingMetadata } from "@/lib/consulting-metadata";
import { HeroSection } from "@/components/Sectors/hero-section";
import { SectorDirectory } from "@/components/Sectors/sector-directory";
import { CTA } from "@/components/Sectors/cta";

export const metadata = consultingMetadata("/sectors");

export default function SectorsPage() {
  return (
    <div>
      <HeroSection />
      <SectorDirectory />
      <CTA />
    </div>
  );
}
