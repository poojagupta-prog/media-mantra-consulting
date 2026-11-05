import { photos } from "@/components/common/data";

// Editorial previews. Replace only with approved, attributable publication records.
export type MediaItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  caption: string;
  videoUrl?: string;
  posterOnly?: boolean;
};
export const media: MediaItem[] = [
  {
    id: "city",
    title: "A different perspective",
    category: "Campaigns",
    image: photos.city,
    alt: "Dubai skyline reflected in the waterfront",
    caption:
      "Illustrative stock photography · Campaign moodboard, not commissioned work.",
  },
  {
    id: "conversation",
    title: "Room for conversation",
    category: "Behind the Scenes",
    image: photos.hero,
    alt: "Sunlit contemporary office interior",
    caption: "Illustrative stock photography · Workspace inspiration.",
  },
  {
    id: "people",
    title: "Better, together",
    category: "Team",
    image: photos.team,
    alt: "People collaborating around a table",
    caption: "Illustrative stock photography · Not the Media Mantra team.",
  },
  {
    id: "press",
    title: "In the conversation",
    category: "Media",
    image: "/images/newsroom/story-1.jpeg",
    alt: "Media Mantra Consulting press photograph",
    caption:
      "Existing newsroom asset · See the newsroom for the original coverage.",
  },
  {
    id: "gather",
    title: "Places that connect us",
    category: "Events",
    image: photos.lifestyle,
    alt: "Light-filled retail interior",
    caption:
      "Illustrative stock photography · Event setting inspiration, not a company event.",
  },
  {
    id: "podcast",
    title: "Pure Reality With Udit",
    category: "Media",
    image: "/images/newsroom/story-6.jpg",
    alt: "Pure Reality With Udit launch artwork",
    caption:
      "Existing podcast launch artwork · Video URL awaiting confirmation.",
    posterOnly: true,
  },
];
export const featuredAward = {
  name: "PR agency Head of the Year 2026",
  recipient: "Udit Pathak",
  organization: "Adgully IMAGEXX Awards",
  year: 2026,
  category: "PR Agency Head of the Year",
  image: "/images/about/udit.jpeg",
  description:
    "Udit Pathak recognised as PR Agency Head of the Year at the Adgully IMAGEXX Awards 2026.",
  announcement:
    "https://www.linkedin.com/posts/uditpathak_mediamantra-imagexxawards2026-publicrelations-activity-7468181386911264768-Z3GG",
};

// Source: https://mediamantraglobal.com/awards/
// Keep undated honours undated, as listed by the global website.
export const awardGroups = [
  {
    name: "Udit Pathak Awards",
    description: "Agency leadership & industry accolades",
    honours: [
      "PR Agency Head of the Year 2026 — Adgully IMAGEXX Awards",
      "Brand Communication Icon 2026",
      "PR Agency Head of the Year — Adgully IMAGEXX Awards 2024",
      "PR & Corp Comm Maestro 2024 — e4m",
      "PR Professional of the Year 2022 and 2021 — IPRCCA",
      "Top 100 Influential Game Changers — E4M 2022 & 2023",
      "People & Team PR Agency Head of the Year 2022 — Campaign India Awards",
      "Featured in e4m’s ‘30 Under 30’ and ‘40 Under 40’ lists",
      "Top 10 men leading large PR agencies in India",
    ],
  },
  {
    name: "Puja Pathak Awards",
    description: "Founder honours & leadership recognition",
    honours: [
      "Women Entrepreneur of the Year 2026 — Adgully",
      "E4m Mentor of the Year 2024",
      "SABRE Award Jury Member SE Asia 2025",
      "Featured in Trailblazers — an initiative by the Department of Media Business Studies at IIMC Delhi",
      "2019 E4M — 40 Under 40 in PR",
      "Adgully’s Powerful Influencer Award 2021",
    ],
  },
  {
    name: "Industry Awards",
    description: "Agency wins across campaigns & consultancy",
    honours: [
      "AdGully IMAGEXX Agency of the Year 2026 — 14 awards, including 6 Gold and 5 Silver",
      "IPRCCA 2024 — 2 Gold, 3 Silver, 2 Bronze",
      "PRPCL North Winner 2026",
      "Media Mantra’s journey to e4m PR Agencies — 13 Years of Bold Thinking",
      "Top 20 PR Companies — e4m PR & Corporate Communications Watchlist 2026",
      "Adgully IMAGEXX Independent PR Agency of the Year 2025 — 12 awards, including 5 Gold, 2 Silver, 3 Bronze",
      "IPRCCA 2025 — Large PR Consultancy of the Year; 3 Gold, 3 Silver, 2 Bronze",
      "BW Excel Awards 2025 — Agency of the Year (Large)",
      "PRPCL 2025",
      "IMAGEXX 2024 — 8 Gold, 2 Silver, 4 Bronze",
      "PRPCL 2024",
      "India’s PRide 2026 — Brand Communications",
      "Best Hospitality and Travel Sector Campaign — #BloomInAbundance for Swastik Wellbeing",
    ],
  },
];
export const dubaiFocus = [
  [
    "01",
    "Innovation, made human.",
    "Translate complex technology into stories people can understand, relate to and act on.",
  ],
  [
    "02",
    "Ideas without borders.",
    "Explore the conversations connecting local ambition with a global audience.",
  ],
  [
    "03",
    "Progress with purpose.",
    "Put people, culture and meaningful outcomes at the centre of a communications story.",
  ],
];
export const testimonials = [
  {
    title: "The client perspective",
    text: "Approved client feedback will appear here, with permission and attribution.",
    attribution: "Testimonial placeholder · No client quote supplied",
  },
];
