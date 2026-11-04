
const entries = [
  {
    slug: "boat-middle-east-pr-campaign",
    sector: "Consumer Technology PR",
    source: {
      brand: "boAt",
      title: "Making waves. Expanding reach across the UAE.",
      description:
        "A strategic media relations campaign spotlighting boAt's expansion into Lulu Hypermarkets, strengthening the audio brand's visibility across the Middle East.",
      image: "/images/case-studies/boat/boat-uae-coverage-hero.png",
      alt: "Selected boAt UAE retail expansion coverage in Gulf News, Pan Time Arabia and Dubai Magazine",
      services: ["Public Relations", "Media Relations", "Consumer Technology"],
      challenge:
        "Build awareness of boAt's growing UAE retail footprint and communicate its expanded product availability to regional consumers.",
      approach:
        "Position boAt's retail expansion as a compelling consumer technology story through targeted business, technology, and lifestyle media coverage.",
    },
    execution:
      "Secure regional editorial coverage highlighting boAt's partnership with Lulu Hypermarkets, expanding accessibility, and strengthening market presence.",
    result:
      "The campaign generated measurable media visibility across leading regional publications, including Gulf News, Pan Time Arabia, Dubai Magazine and Emirates Reporter. The coverage report records 15 placements in two languages and 26M+ reported potential viewership; this is potential audience, not verified impressions.",
    metrics: [
      { value: "15", label: "Media placements" },
      { value: "2", label: "Languages" },
      { value: "26M+", label: "Reported potential viewership" },
    ],
    gallery: [
      "/images/case-studies/boat/gulf-news-coverage.jpg",
      "/images/case-studies/boat/pan-time-arabia-coverage.jpg",
      "/images/case-studies/boat/dubai-magazine-coverage.jpg",
      "/images/case-studies/boat/one-ville-news-coverage.jpg",
      "/images/case-studies/boat/emirates-reporter-coverage.jpg",
    ],
  },
  {
    slug: "atlys-uae-travel-technology-pr",
    sector: "Travel Technology PR",
    source: {
      brand: "Atlys",
      title: "From visa complexity to a national conversation.",
      description: "Turning a complex travel service into a compelling media story through strategic storytelling, bilingual outreach, executive thought leadership, and timely travel insights.",
      image: "/images/case-studies/atlys/atlys-airport-hero.jpg",
      alt: "Traveller using a phone in an airport terminal before a flight",
      services: ["Public Relations", "Media Relations", "Thought Leadership", "Strategic Communications"],
      challenge: "Build trust in a complex visa services category where travellers face changing requirements, limited appointment availability, and uncertainty around approvals. Atlys needed stronger credibility and recognition among UAE residents.",
      approach: "Develop four connected editorial narratives covering Schengen visa applications, US tourist visas, AI-driven innovation, and winter travel trends. Target national, business, lifestyle, travel, and Arabic-language publications.",
    },
    listingTitle: "Simplifying visas. Shaping travel conversations.",
    listingDescription: "How four connected media narratives established Atlys as a credible voice across the UAE travel technology landscape.",
    overview: "Media Mantra Consulting developed a four-month PR programme to strengthen Atlys's presence in the UAE travel technology market. By connecting the brand with traveller concerns, emerging technology, and seasonal travel trends, the campaign established a consistent editorial presence across regional media.",
    period: "August–November 2025",
    resultHeading: "Four months. One consistent conversation.",
    execution: "Implement a coordinated four-month media relations programme featuring bilingual outreach, targeted press pitches, executive thought leadership, technology-focused commentary, and data-led destination stories.",
    result: "A sustained media campaign strengthened Atlys's visibility across the UAE's travel, technology, and business media landscape. The campaign report records 32 media outcomes, including seven flagship editorial wins, across four strategic storylines and coverage in English and Arabic. Notable outlets include Gulf News, Gulf Business, Khaleej Times, Arabian Business, and MSN.",
    metrics: [
      { value: "32", label: "Media outcomes" },
      { value: "7", label: "Flagship editorial wins" },
      { value: "4", label: "Strategic storylines" },
      { value: "2", label: "Languages: English and Arabic" },
    ],
    gallery: [
      "/images/case-studies/atlys/uae-airline-travel.jpg",
      "/images/case-studies/atlys/winter-travel-destinations.png",
    ],
  },
] as const;

export const portfolioSectors = entries.map(({ sector }) => sector);
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
export const getPortfolioStudy = (slug: string) =>
  portfolioStudies.find((study) => study.slug === slug);
export const galleryImage = (path: string) => path;
