import { ScrollProgress } from "@/components/common/scroll-motion";
import { CapabilitiesSection } from "@/components/Home/capabilities";
import { CaseStudies } from "@/components/Home/case-studies-section";
import { Dubai } from "@/components/Home/dubai";
import { EditorialSection } from "@/components/Home/editorial-section";
import { HeroSection } from "@/components/Home/hero-section";
import { HomeFAQ } from "@/components/Home/home-faq";
import { IntroductionSection } from "@/components/Home/intro";
import { Manifesto } from "@/components/Home/our-mantra";
import { OurProcess } from "@/components/Home/our-process";
import { PressRoomSection } from "@/components/Home/press-room-section";
import { RegionalExpertise } from "@/components/Home/regional-expertise";
import { SectorsSection } from "@/components/Home/sector-section";
import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  return (
    <div className="[&_section[id]]:scroll-mt-[100px] [&_h2]:text-balance [&_h3]:text-balance [&_p]:text-pretty">
      <ScrollProgress />
      <HeroSection />
      <Marquee />
      <PressRoomSection />
      <IntroductionSection />
      <CapabilitiesSection />
      <EditorialSection />
      <SectorsSection />
      <Dubai />
      <RegionalExpertise />
      <CaseStudies />
      <OurProcess />
      <Manifesto />
      <HomeFAQ />
    </div>
  );
}
