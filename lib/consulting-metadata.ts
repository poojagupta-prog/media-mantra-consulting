import type { Metadata } from "next";

type SocialImage = { url: string; alt: string };
type PageDetails = {
  title: string;
  description: string;
  socialTitle: string;
  socialDescription?: string;
  keywords?: string[];
  basicRobots?: boolean;
} & (
  | { article: true; imageUrl?: never; imageAlt?: never }
  | { article?: never; imageUrl: string; imageAlt: string }
);

const siteOrigin = "https://mediamantraconsulting.com";

const pageDetails: Record<string, PageDetails> = {
  "/": {
    title: "PR Agency in Dubai, UAE | Media Mantra Consultancy FZCO",
    description: "Media Mantra Consultancy FZCO is a PR agency in Dubai, UAE for media relations, reputation management, events and digital PR. Talk to our team today.",
    socialTitle: "Media Mantra — PR Agency in Dubai, UAE",
    keywords: ["PR agency in Dubai", "PR company in Dubai", "public relations agency UAE", "media relations Dubai", "reputation management Dubai"],
    imageUrl: "/og/home.jpg",
    imageAlt: "Media Mantra — PR Agency in Dubai, UAE — Media Mantra Consultancy FZCO",
  },
  "/about-us": {
    title: "About Media Mantra Consultancy FZCO | PR Agency in Dubai",
    description: "Meet the team behind Media Mantra Consultancy FZCO, a Dubai PR agency with offices in Gurugram and Australia — our people, philosophy and mantras.",
    socialTitle: "About Media Mantra Consultancy FZCO",
    keywords: ["about Media Mantra Consultancy", "Dubai PR agency team", "Udit Pathak", "PR consultancy Dubai"],
    imageUrl: "/og/about-us.jpg",
    imageAlt: "About Media Mantra Consultancy FZCO — Media Mantra Consultancy FZCO",
  },
  "/services": {
    title: "PR & Communication Services in Dubai | Media Mantra",
    description: "Media relations, public relations, social media, events, reputation management, SEO, podcasts and content services from a Dubai PR agency.",
    socialTitle: "PR & Communication Services in Dubai",
    keywords: ["PR services Dubai", "communication services UAE", "media relations", "reputation management", "event PR"],
    imageUrl: "/og/services.jpg",
    imageAlt: "PR & Communication Services in Dubai — Media Mantra Consultancy FZCO",
  },
  "/sectors": {
    title: "Sector PR in Dubai: Real Estate, Tech, Luxury | Media Mantra",
    description: "Sector-focused PR in Dubai for real estate, technology, finance, retail, fashion, sports and hospitality brands — from a team that knows each market.",
    socialTitle: "PR by Sector in Dubai",
    keywords: ["sector PR Dubai", "real estate PR Dubai", "luxury PR Dubai", "tech PR UAE", "hospitality PR Dubai", "healthcare PR UAE"],
    imageUrl: "/og/sectors.jpg",
    imageAlt: "PR by Sector in Dubai — Media Mantra Consultancy FZCO",
  },
  "/case-studies": {
    title: "PR Case Studies in Dubai & UAE | Media Mantra Consulting",
    description: "PR case studies from Dubai and the UAE: boAt, Atlys, Centurion Properties, DECA × UNICO, Bradford International Alliance and six real estate developers.",
    socialTitle: "PR Case Studies from Dubai & the UAE",
    keywords: ["PR case studies Dubai", "UAE PR campaign examples", "real estate PR case study", "consumer tech PR UAE"],
    imageUrl: "/og/case-studies.jpg",
    imageAlt: "PR Case Studies from Dubai & the UAE — Media Mantra Consultancy FZCO",
  },
  "/blogs": {
    title: "PR Insights & Blogs from Dubai | Media Mantra Consulting",
    description: "PR insights from a Dubai agency: digital PR, crisis management, luxury and real estate communications, healthcare PR and press release trends in the UAE.",
    socialTitle: "PR Insights & Perspectives from Dubai",
    keywords: ["PR blog Dubai", "PR insights UAE", "digital PR trends Dubai", "crisis management UAE"],
    imageUrl: "/og/blogs.jpg",
    imageAlt: "PR Insights & Perspectives from Dubai — Media Mantra Consultancy FZCO",
  },
  "/news-room": {
    title: "Newsroom: Media Mantra in the News | Media Mantra Consulting",
    description: "Media Mantra Consulting in Khaleej Times, Gulf News, Zawya, Campaign Middle East and exchange4media — company news, partnerships and leadership stories.",
    socialTitle: "Media Mantra in the News",
    keywords: ["Media Mantra news", "Media Mantra Consulting press coverage", "Udit Pathak news"],
    imageUrl: "/og/news-room.jpg",
    imageAlt: "Media Mantra in the News — Media Mantra Consultancy FZCO",
  },
  "/podcasts": {
    title: "Pure Reality With Udit Podcast | Media Mantra Consulting",
    description: "Watch Pure Reality With Udit: candid conversations with founders and leaders about business, leadership and the untold chapters behind the headlines.",
    socialTitle: "Pure Reality With Udit — Podcast",
    keywords: ["Pure Reality With Udit podcast", "Udit Pathak podcast", "Dubai business podcast"],
    imageUrl: "/og/podcasts.jpg",
    imageAlt: "Pure Reality With Udit — Podcast — Media Mantra Consultancy FZCO",
  },
  "/awards": {
    title: "Awards & Recognition | Media Mantra Consultancy FZCO",
    description: "Awards and industry recognition for Media Mantra Consultancy FZCO, including Udit Pathak's MDME 2026 Excellence in PR & Communications Leadership award.",
    socialTitle: "Awards & Recognition — Media Mantra",
    keywords: ["Media Mantra awards", "Udit Pathak MDME 2026", "PR awards UAE"],
    imageUrl: "/og/awards.jpg",
    imageAlt: "Awards & Recognition — Media Mantra — Media Mantra Consultancy FZCO",
  },
  "/gallery": {
    title: "Gallery: Events & Team Moments | Media Mantra Consulting",
    description: "Photos from Media Mantra Consulting's events, client launches and team moments in Dubai — the people and conversations behind the headlines.",
    socialTitle: "Gallery — Life Between the Headlines",
    keywords: ["Media Mantra gallery", "PR events Dubai photos"],
    imageUrl: "/og/gallery.jpg",
    imageAlt: "Gallery — Life Between the Headlines — Media Mantra Consultancy FZCO",
  },
  "/contact-us": {
    title: "Contact Us | PR Agency in Dubai | Media Mantra Consulting",
    description: "Contact Media Mantra Consultancy FZCO, a PR agency in Business Bay, Dubai. Call +971 56 179 1863 or send your brief — offices in Gurugram and Australia.",
    socialTitle: "Contact Media Mantra — PR Agency in Dubai",
    keywords: ["contact PR agency Dubai", "PR agency Business Bay", "hire PR firm Dubai"],
    imageUrl: "/og/contact-us.jpg",
    imageAlt: "Contact Media Mantra — PR Agency in Dubai — Media Mantra Consultancy FZCO",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Media Mantra Consulting",
    description: "How Media Mantra Consultancy FZCO collects, uses and protects your personal information, and the choices and rights you have over it.",
    socialTitle: "Privacy Policy",
    imageUrl: "/og/privacy-policy.jpg",
    imageAlt: "Privacy Policy — Media Mantra Consultancy FZCO",
    basicRobots: true,
  },
  "/terms-conditions": {
    title: "Terms and Conditions | Media Mantra Consulting",
    description: "Read the terms and conditions for using the Media Mantra Consultancy FZCO website, including intellectual property, privacy and liability.",
    socialTitle: "Terms and Conditions",
    imageUrl: "/og/terms-conditions.jpg",
    imageAlt: "Terms and Conditions — Media Mantra Consultancy FZCO",
    basicRobots: true,
  },
  "/services/media-relations": {
    title: "Media Relations Agency in Dubai | Media Mantra Consulting",
    description: "Media relations in Dubai that put your story in front of the UAE journalists and editors who shape the conversation — and earn credible coverage.",
    socialTitle: "Media Relations Agency in Dubai",
    keywords: ["media relations agency Dubai", "press coverage UAE", "journalist outreach Dubai", "press release distribution UAE"],
    imageUrl: "/og/services-media-relations.jpg",
    imageAlt: "Media Relations Agency in Dubai — Media Mantra Consultancy FZCO",
  },
  "/services/public-relations": {
    title: "Public Relations Agency in Dubai, UAE | Media Mantra",
    description: "Strategic public relations in Dubai: we map your audiences, build the narrative and measure the change so people understand, trust and choose your brand.",
    socialTitle: "Public Relations Agency in Dubai, UAE",
    keywords: ["public relations agency Dubai", "PR firm UAE", "corporate PR Dubai", "brand PR"],
    imageUrl: "/og/services-public-relations.jpg",
    imageAlt: "Public Relations Agency in Dubai, UAE — Media Mantra Consultancy FZCO",
  },
  "/services/social-digital-media": {
    title: "Social Media & Digital PR Agency in Dubai | Media Mantra",
    description: "Social media and digital PR in Dubai: a distinctive brand voice, content worth sharing and communities that talk back — strategy, creative and reporting.",
    socialTitle: "Social Media & Digital PR in Dubai",
    keywords: ["social media agency Dubai", "digital PR Dubai", "social media management UAE", "influencer marketing Dubai"],
    imageUrl: "/og/services-social-digital-media.jpg",
    imageAlt: "Social Media & Digital PR in Dubai — Media Mantra Consultancy FZCO",
  },
  "/services/event-management": {
    title: "Event Management & Launch PR in Dubai | Media Mantra",
    description: "Event management and launch PR in Dubai — from concept to the final goodbye, we turn occasions into experiences people remember, share and talk about.",
    socialTitle: "Event Management & Launch PR in Dubai",
    keywords: ["event management PR Dubai", "brand launch events Dubai", "press events UAE"],
    imageUrl: "/og/services-event-management.jpg",
    imageAlt: "Event Management & Launch PR in Dubai — Media Mantra Consultancy FZCO",
  },
  "/services/reputation-building-management": {
    title: "Reputation & Crisis Management in Dubai | Media Mantra",
    description: "Reputation building and crisis management in Dubai: monitor what is said about you, build credibility steadily and respond fast when something goes wrong.",
    socialTitle: "Reputation & Crisis Management in Dubai",
    keywords: ["reputation management Dubai", "crisis communication UAE", "online reputation management Dubai"],
    imageUrl: "/og/services-reputation-building-management.jpg",
    imageAlt: "Reputation & Crisis Management in Dubai — Media Mantra Consultancy FZCO",
  },
  "/services/seo-performance-marketing": {
    title: "SEO & Performance Marketing Agency in Dubai | Media Mantra",
    description: "SEO and performance marketing in Dubai: show up in search and AI answers, run paid campaigns against clear goals and get honest reporting on results.",
    socialTitle: "SEO & Performance Marketing in Dubai",
    keywords: ["SEO agency Dubai", "performance marketing UAE", "GEO AI search optimisation", "Google Ads Dubai"],
    imageUrl: "/og/services-seo-performance-marketing.jpg",
    imageAlt: "SEO & Performance Marketing in Dubai — Media Mantra Consultancy FZCO",
  },
  "/services/podcast": {
    title: "Podcast Production Services in Dubai | Media Mantra",
    description: "Podcast production in Dubai: show concept, recording, editing and distribution that give your brand a voice people choose to listen to.",
    socialTitle: "Podcast Production Services in Dubai",
    keywords: ["podcast production Dubai", "corporate podcast UAE", "video podcast studio Dubai"],
    imageUrl: "/og/services-podcast.jpg",
    imageAlt: "Podcast Production Services in Dubai — Media Mantra Consultancy FZCO",
  },
  "/services/content-marketing": {
    title: "Content Marketing Agency in Dubai | Media Mantra Consulting",
    description: "Content marketing in Dubai that is useful, distinctive and honest — articles, stories and campaign content that build authority and search visibility.",
    socialTitle: "Content Marketing Agency in Dubai",
    keywords: ["content marketing agency Dubai", "blog writing UAE", "thought leadership content"],
    imageUrl: "/og/services-content-marketing.jpg",
    imageAlt: "Content Marketing Agency in Dubai — Media Mantra Consultancy FZCO",
  },
  "/services/strategic-content-planning": {
    title: "Content Strategy & Planning in Dubai | Media Mantra",
    description: "Content strategy in Dubai: we map your audience, key themes and publishing calendar so every message has a purpose and moves your business forward.",
    socialTitle: "Content Strategy & Planning in Dubai",
    keywords: ["content strategy Dubai", "content calendar planning", "editorial strategy UAE"],
    imageUrl: "/og/services-strategic-content-planning.jpg",
    imageAlt: "Content Strategy & Planning in Dubai — Media Mantra Consultancy FZCO",
  },
  "/services/brand-elevation": {
    title: "Brand Positioning & Elevation in Dubai | Media Mantra",
    description: "Brand elevation in Dubai: we find what makes you different, sharpen your story and positioning, and raise your visibility with the audiences that matter.",
    socialTitle: "Brand Positioning & Elevation in Dubai",
    keywords: ["brand positioning Dubai", "brand strategy UAE", "brand storytelling"],
    imageUrl: "/og/services-brand-elevation.jpg",
    imageAlt: "Brand Positioning & Elevation in Dubai — Media Mantra Consultancy FZCO",
  },
  "/case-studies/boat-middle-east-pr-campaign": {
    title: "boAt UAE Retail Expansion PR Case Study | Media Mantra",
    description: "How Media Mantra turned boAt's Lulu Hypermarket launch into a UAE consumer-tech story — media relations, coverage and results across the region.",
    socialTitle: "boAt Middle East: UAE Retail Expansion PR Case Study",
    keywords: ["boAt Middle East PR case study", "UAE PR campaign", "Dubai PR results"],
    article: true,
  },
  "/case-studies/atlys-uae-travel-technology-pr": {
    title: "Atlys UAE Travel Tech PR Case Study | Media Mantra",
    description: "How Media Mantra built four months of UAE coverage for Atlys with bilingual outreach and executive thought leadership on visas and travel.",
    socialTitle: "Atlys UAE: Travel Technology PR Case Study",
    keywords: ["Atlys UAE PR case study", "UAE PR campaign", "Dubai PR results"],
    article: true,
  },
  "/case-studies/real-estate-sector-pr-portfolio": {
    title: "UAE Real Estate PR: 6 Developer Case Studies | Media Mantra",
    description: "Real estate PR in the UAE: six developer stories covering branded residences, wellness living, partnerships and luxury positioning by Media Mantra.",
    socialTitle: "UAE Real Estate PR: Six Developer Stories",
    keywords: ["UAE Real Estate PR PR case study", "UAE PR campaign", "Dubai PR results"],
    article: true,
  },
  "/case-studies/bradford-international-alliance-education-pr": {
    title: "Bradford International Alliance Education PR | Case Study",
    description: "A four-month education PR programme for Bradford International Alliance linking accessible learning, career readiness and skills with UAE media.",
    socialTitle: "Bradford International Alliance: Education PR Case Study",
    keywords: ["Bradford International Alliance PR case study", "UAE PR campaign", "Dubai PR results"],
    article: true,
  },
  "/case-studies/deca-unico-partnership-pr-campaign": {
    title: "DECA × UNICO Partnership PR Case Study, Dubai | Media Mantra",
    description: "How Media Mantra took UNICO's appointment of DECA as exclusive sales and marketing partner into national, business and property media across the UAE.",
    socialTitle: "DECA × UNICO: Dubai Partnership PR Case Study",
    keywords: ["DECA × UNICO PR case study", "UAE PR campaign", "Dubai PR results"],
    article: true,
  },
  "/case-studies/centurion-properties-uae-real-estate-pr": {
    title: "Centurion Properties UAE Real Estate PR Case Study",
    description: "How Media Mantra brought Centurion Properties' milestones and its AED 10.5 billion CITIC Construction agreement to UAE business and property media.",
    socialTitle: "Centurion Properties: UAE Real Estate PR Case Study",
    keywords: ["Centurion Properties PR case study", "UAE PR campaign", "Dubai PR results"],
    article: true,
  },
};

export function consultingMetadata(path: string, heroImage?: SocialImage) {
  const details = pageDetails[path];
  const canonical = new URL(path, siteOrigin).href;
  const socialDescription = details.socialDescription ?? details.description;
  const image = details.article ? heroImage! : {
    url: details.imageUrl,
    alt: details.imageAlt,
  };
  const socialImage = {
    url: new URL(image.url, siteOrigin).href,
    alt: image.alt,
    width: 1200,
    height: 630,
  };

  return {
    title: { absolute: details.title },
    description: details.description,
    keywords: details.keywords ?? null,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      ...(details.basicRobots ? {} : {
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      }),
    },
    openGraph: {
      type: details.article ? "article" : "website",
      url: canonical,
      title: { absolute: details.socialTitle },
      description: socialDescription,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: details.socialTitle },
      description: socialDescription,
      images: [socialImage],
    },
  } satisfies Metadata;
}
