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
export const awards = [
  {
    id: "recognition",
    name: "Our next recognition story",
    organization: "Awarding body to be confirmed",
    year: null as number | null,
    category: "Category pending verification",
    image: null as string | null,
    status: "Placeholder · No award claimed",
    description:
      "An approved award citation, category and year will appear here once confirmed.",
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
