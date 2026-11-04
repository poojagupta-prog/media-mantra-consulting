
export type PortfolioStudy = {
  slug: string;
  sector: string;
  brand: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  services: readonly string[];
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  metrics: readonly { value: string; label: string }[];
  gallery: readonly string[];
  listingTitle?: string;
  listingDescription?: string;
  overview?: string;
  period?: string;
  resultHeading?: string;
  scope?: "sector-portfolio" | "partnership";
};

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
      alt: "boAt UAE campaign artwork showing headphones and earbuds with the announcement of availability at Lulu",
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
  {
    slug: "real-estate-sector-pr-portfolio",
    scope: "sector-portfolio",
    sector: "Real Estate PR",
    source: {
      brand: "Real Estate Sector",
      title: "Places with presence. Stories with substance.",
      description: "Six distinct developer stories across the UAE: branded residences, wellness living, strategic partnerships, luxury positioning and events, brought into focus through PR and communications.",
      image: "/images/case-studies/real-estate/waterfront-residences.webp",
      alt: "AI-generated architectural illustration of imagined waterfront residences in warm limestone; not a named client development",
      services: ["Brand Positioning", "Media Relations", "Press Amplification", "Event Management"],
      challenge: "Give each developer a distinctive story while communicating the significance of project launches, partnerships and market entry.",
      approach: "Shape client-specific narratives for English and Arabic media, combining national and trade coverage with launch events and digital amplification where relevant.",
    },
    period: "UAE / 2026 portfolio",
    execution: "Deliver communications across six client portfolios, from branded residence launches and wellness positioning to partnership announcements and two Amirah events.",
    result: "The portfolio records 115+ media placements across five developer brands, alongside two Amirah Developments events attended by 700 and 100 people respectively. Client project values and commercial milestones are presented separately.",
    metrics: [
      { value: "115+", label: "Reported portfolio media placements" },
      { value: "6", label: "Client portfolios" },
      { value: "2", label: "Amirah events" },
    ],
    gallery: ["/images/case-studies/real-estate/wellness-atrium.webp"],
  },
  {
    slug: "bradford-international-alliance-education-pr",
    sector: "Education PR",
    source: {
      brand: "Bradford International Alliance",
      title: "Learning opens doors. Stories open conversations.",
      description: "A four-month education PR programme connecting accessible learning, career readiness and professional skills through institutional news, authored articles and features.",
      image: "/images/case-studies/education/learning-commons.webp",
      alt: "AI-generated illustration of adult learners in an imagined Dubai learning commons; not a BIA campus or campaign event",
      services: ["Education PR", "Media Relations", "Thought Leadership", "Press Amplification"],
      challenge: "Build regional visibility for institutional milestones while developing a consistent editorial voice around accessible education and career relevance.",
      approach: "Pair announcement-led distribution with named authored articles and features across a four-month programme.",
    },
    period: "Four-month programme",
    execution: "Connect Graduation Day, the Sapio Solutions launch and a generative AI skill-sharing event with ongoing education and professional-skills commentary.",
    result: "The programme summary reports 115 total placements, including eight premium named placements. Audience and valuation estimates apply only to Graduation Day, not the entire programme.",
    metrics: [
      { value: "115", label: "Reported total media placements" },
      { value: "8", label: "Reported premium named placements" },
      { value: "4", label: "Programme months" },
    ],
    gallery: ["/images/case-studies/education/professional-learning.webp"],
  },
  {
    slug: "deca-unico-partnership-pr-campaign",
    scope: "partnership",
    sector: "Real Estate PR",
    source: {
      brand: "DECA × UNICO",
      title: "Two perspectives. One shared direction.",
      description: "Bringing UNICO’s appointment of DECA as its exclusive integration, sales and marketing partner into the UAE’s national, property and construction media conversation.",
      image: "/images/case-studies/deca-unico/connected-residences.webp",
      alt: "AI-generated architectural illustration of imagined complementary residential buildings; not a DECA or UNICO development",
      services: ["Partnership Communications", "Media Relations", "Real Estate PR", "Bilingual Outreach"],
      challenge: "Explain the significance of a commercial appointment through the complementary capabilities and residential vision behind the partnership.",
      approach: "Connect international development ambition with local launch and market expertise, retaining a consistent message across English and Arabic coverage.",
    },
    period: "December 2025",
    execution: "Communicate the exclusive partnership through national, property, construction and regional digital media.",
    result: "The December 2025 campaign summary reports 15 placements in English and Arabic, alongside a publisher MUV total above 19 million. Publisher audience estimates are not verified campaign readership, and these placements overlap with the DECA work in the sector portfolio.",
    metrics: [
      { value: "15", label: "Reported media placements" },
      { value: "2", label: "Languages: English and Arabic" },
      { value: "19M+", label: "Reported publisher MUV total" },
    ],
    gallery: ["/images/case-studies/deca-unico/community-courtyard.webp"],
  },
] as const;

export const portfolioSectors = [...new Set(entries.map(({ sector }) => sector))];
export const portfolioStudies: PortfolioStudy[] = entries.map(({ source, ...entry }) => ({
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

export const getPortfolioStudy = (slug: string) =>
  portfolioStudies.find((study) => study.slug === slug);
export const galleryImage = (path: string) => path;
