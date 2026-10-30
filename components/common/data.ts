export const photos = {
  hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
  city: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
  tech: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  lifestyle:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
};

export const services = [
  {
    title: "Public relations",
    slug: "public-relations",
    text: "The right story. The right audience. The right moment. We build meaningful relationships between brands and the world.",
    icon: "↗",
    color: "bg-[#fbe9df] text-[#cb572a]",
    tags: "Media relations · Press office · Brand launches",
  },
  {
    title: "Brand strategy",
    slug: "brand-strategy",
    text: "Find your voice, define your purpose, and shape a narrative that sets your brand apart from the everyday.",
    icon: "✳",
    color: "bg-[#e0efec] text-teal",
    tags: "Positioning · Messaging · Thought leadership",
  },
  {
    title: "Digital & social",
    slug: "digital-social",
    text: "Conversations that connect. Content that moves people. Digital experiences that bring your brand to life.",
    icon: "◎",
    color: "bg-[#e0efec] text-teal",
    tags: "Social strategy · Content · Influencer relations",
  },
  {
    title: "Reputation management",
    slug: "reputation-management",
    text: "Build trust for the long term. Navigate complex moments with clear thinking, confidence, and care.",
    icon: "◇",
    color: "bg-[#f8e4ec] text-pink",
    tags: "Crisis communications · Listening · Counsel",
  },
  {
    title: "Content & storytelling",
    slug: "content-storytelling",
    text: "Turn complex ideas into compelling stories, with editorial craft and a fresh creative perspective.",
    icon: "✦",
    color: "bg-[#fff0d6] text-[#9b6900]",
    tags: "Editorial · Video · Creative campaigns",
  },
  {
    title: "Events & experiences",
    slug: "events-experiences",
    text: "Bring people and brands together through thoughtful experiences that live on beyond the moment.",
    icon: "⌘",
    color: "bg-[#e2ecfa] text-[#275591]",
    tags: "Launches · Experiences · Partnerships",
  },
];

export const links = [
  ["/", "Home"],
  ["/about", "About us"],
  ["/services", "Services"],
  ["/sectors", "Sectors"],
  ["case-studies", "Case studies"],
  ["/contact", "Contact"],
];

export const caseStudies = [
  {
    brand: "THE DUNE HOUSE",
    category: "Hospitality & destinations",
    title: "A new address. The city’s next conversation.",
    description:
      "Introducing a boutique Dubai retreat with a story rooted in local design, thoughtful hospitality, and a different way to experience the city.",
    image: photos.city,
    alt: "Dubai skyline and waterfront at sunset",
    color: "bg-[#dcece5]",
    services: ["Brand launch", "Media relations", "Creator experiences"],
    metrics: [
      ["48", "editorial features"],
      ["3.2M", "potential reach"],
      ["12", "creator partnerships"],
    ],
    challenge:
      "An independent hotel needed to stand out in a crowded luxury market. With no existing brand awareness, the brief was to build curiosity before opening and give travellers a reason to look beyond familiar names.",
    approach:
      "We built a narrative around the people and craftsmanship behind the property. An intimate media preview, neighbourhood guides, and a curated creator programme brought that story to life across travel, design, and lifestyle channels.",
    result:
      "The illustrative eight-week launch generated 48 editorial features and 12 creator partnerships. A consistent story across every touchpoint helped position the property as a destination with a distinctive point of view.",
  },
  {
    brand: "NOVA TECHNOLOGIES",
    category: "Technology & innovation",
    title: "Making a complex idea feel wonderfully human.",
    description:
      "Moving an emerging technology brand from product announcements to a meaningful conversation about the future of work.",
    image: photos.tech,
    alt: "Modern glass towers viewed from street level",
    color: "bg-[#e9e5f0]",
    services: ["Thought leadership", "Corporate positioning"],
    metrics: [
      ["24", "expert interviews"],
      ["2.4×", "share of voice"],
    ],
    challenge:
      "Nova’s technical expertise was strong, but its message was getting lost in industry jargon. The team needed a clearer story that would connect with business leaders beyond the technology press.",
    approach:
      "We translated product capabilities into everyday business stories, developed a leadership point of view, and created a programme of commentary, interviews, and accessible explainers.",
    result:
      "Over a fictional three-month programme, the brand secured 24 expert interviews and increased its share of voice by 2.4 times against a sample competitor set.",
  },
  {
    brand: "COMMON GROUND",
    category: "Lifestyle & culture",
    title: "From a new label to a shared sense of belonging.",
    description:
      "Building a community around a homegrown lifestyle label through real people, local stories, and experiences worth sharing.",
    image: photos.lifestyle,
    alt: "Bright lifestyle boutique with clothing displays",
    color: "bg-[#f5e3d9]",
    services: ["Community building", "Social storytelling"],
    metrics: [
      ["180%", "engagement uplift"],
      ["650", "event visitors"],
    ],
    challenge:
      "A new lifestyle label wanted to build lasting connections with a young UAE audience. The goal was to turn an initial product launch into an ongoing community conversation.",
    approach:
      "We partnered with local creatives to tell their stories, designed a series of neighbourhood pop-ups, and connected the physical experience with a social content series shaped by the community.",
    result:
      "In this sample campaign, the launch attracted 650 event visitors and delivered a 180% increase in engagement compared with the brand’s fictional pre-launch baseline.",
  },
];
