import { caseStudies as homepageStudies } from "@/components/common/data";
import { sectors } from "@/components/Sectors/sectors-data";

// These are concept examples already used on the homepage. Replace with approved
// client material before publishing claims about completed work.
const entries = [
  { slug: "dune-house-hospitality-launch", sector: "Hospitality PR", source: homepageStudies[0], execution: "A media preview, neighbourhood guide and creator programme would bring the property story into travel, design and lifestyle conversations.", result: "Illustrative outcome: a coherent launch narrative across press, creator and guest touchpoints.", gallery: ["photo-1571896349842-33c89424de2d", "photo-1512453979798-5ea266f8880c"] },
  { slug: "nova-technology-storytelling", sector: "B2B PR", source: homepageStudies[1], execution: "Leadership commentary, interviews and plain-language explainers would make the technology useful to audiences beyond specialist press.", result: "Illustrative outcome: a more accessible positioning and a repeatable editorial platform for the brand.", gallery: ["photo-1497366811353-6870744d04b2", "photo-1522071820081-009f0129c71c"] },
  { slug: "common-ground-community-launch", sector: "Retail PR", source: homepageStudies[2], execution: "Neighbourhood pop-ups and a social content series would connect local creative voices with the brand experience.", result: "Illustrative outcome: a launch designed to begin an ongoing community conversation.", gallery: ["photo-1441986300917-64674bd600d8", "photo-1483985988355-763728e1935b"] },
] as const;

export const portfolioSectors = sectors.map(({ title }) => title);
export const portfolioStudies = entries.map(({ source, ...entry }) => ({
  ...entry,
  title: source.title,
  description: source.description,
  image: source.image,
  alt: source.alt,
  services: source.services,
  challenge: source.challenge,
  strategy: source.approach,
  brand: source.brand,
}));

export type PortfolioStudy = (typeof portfolioStudies)[number];
export const getPortfolioStudy = (slug: string) => portfolioStudies.find((study) => study.slug === slug);
export const galleryImage = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;
