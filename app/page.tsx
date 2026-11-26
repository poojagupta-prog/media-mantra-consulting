import {
  PodcastPreview,
  RecognitionPreview,
  GalleryPreview,
  TestimonialPreview,
} from "@/components/media/previews";
import { ScrollProgress } from "@/components/common/scroll-motion";
import { CapabilitiesSection } from "@/components/Home/capabilities";
import { CaseStudies } from "@/components/Home/case-studies-section";
import { Dubai } from "@/components/Home/dubai";
import { EditorialSection } from "@/components/Home/editorial-section";
import { HeroSection } from "@/components/Home/hero-section";
import { HomeFAQ, faqData } from "@/components/Home/home-faq";
import { consultingMetadata } from "@/lib/consulting-metadata";
import { IntroductionSection } from "@/components/Home/intro";
import { Manifesto } from "@/components/Home/our-mantra";
import { OurProcess } from "@/components/Home/our-process";
import { PressRoomSection } from "@/components/Home/press-room-section";
import { RegionalExpertise } from "@/components/Home/regional-expertise";
import { SectorsSection } from "@/components/Home/sector-section";
import { Marquee } from "@/components/ui/marquee";

const homeMetadata = consultingMetadata("/");
export const metadata = {
  ...homeMetadata,
  // Keep the trailing slash in the spreadsheet's absolute homepage URL.
  metadataBase: null,
};

const pageUrl = homeMetadata.alternates.canonical;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#business`,
      name: "Media Mantra Consultancy FZCO",
      url: pageUrl,
      description: metadata.description,
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqData.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="[&_section[id]]:scroll-mt-[100px] [&_h2]:text-balance [&_h3]:text-balance [&_p]:text-pretty">
      <ScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
      <RecognitionPreview />
      <PodcastPreview />
      <OurProcess />
      <TestimonialPreview />
      <GalleryPreview />
      <Manifesto />
      <HomeFAQ />
    </div>
  );
}
