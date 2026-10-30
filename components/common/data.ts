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
    title: "Media Relations",
    slug: "media-relations",
    text: "Put your story in the right hands and build lasting relationships with the voices that shape the conversation.",
    icon: "↗",
    color: "bg-[#fbe9df] text-[#cb572a]",
    tags: "Press strategy · Journalist relationships · Media outreach",
    detail: "A strong media presence starts with a story worth telling. We find the angle, identify the right publications and people, and create thoughtful opportunities for your brand to be heard.",
    offerings: ["Media strategy and story development", "Press office and journalist engagement", "Interviews, features and media briefings"],
  },
  {
    title: "Public Relations",
    slug: "public-relations",
    text: "Shape the conversations that matter and create a meaningful connection between your brand and its audiences.",
    icon: "✳",
    color: "bg-[#e0efec] text-teal",
    tags: "Communications strategy · Campaigns · Stakeholder engagement",
    detail: "We bring strategy and storytelling together to help brands show up with clarity and purpose. From a defining announcement to an ongoing communications programme, every move is grounded in your goals.",
    offerings: ["Communications planning and counsel", "Integrated PR campaigns", "Launches and stakeholder communications"],
  },
  {
    title: "Social & Digital Media",
    slug: "social-digital-media",
    text: "Create conversations, communities and digital moments that make people want to stay connected.",
    icon: "◎",
    color: "bg-[#e0efec] text-teal",
    tags: "Social strategy · Community · Digital campaigns",
    detail: "Digital channels are where brands meet people every day. We develop the ideas, content and channel plans that make those interactions feel relevant, consistent and human.",
    offerings: ["Social media strategy and management", "Community engagement", "Digital campaign planning and reporting"],
  },
  {
    title: "Event Management",
    slug: "event-management",
    text: "Turn an occasion into an experience people remember, share and talk about long after it ends.",
    icon: "⌘",
    color: "bg-[#e2ecfa] text-[#275591]",
    tags: "Concept · Production · Guest experience",
    detail: "From the first invitation to the final conversation, we plan every touchpoint with intention. Our events bring audiences and ideas together in ways that feel effortless and memorable.",
    offerings: ["Event concept and planning", "Launches and media events", "Guest, partner and on-site coordination"],
  },
  {
    title: "Reputation Building & Management",
    slug: "reputation-building-management",
    text: "Earn trust over time and navigate sensitive moments with perspective, preparation and care.",
    icon: "◇",
    color: "bg-[#f8e4ec] text-pink",
    tags: "Positioning · Issues management · Counsel",
    detail: "Reputation is built through what you say, what you do and how consistently the two align. We help you understand perceptions, strengthen credibility and communicate clearly when the stakes are high.",
    offerings: ["Reputation strategy and positioning", "Issues and crisis communications", "Stakeholder messaging and counsel"],
  },
  {
    title: "SEO & Performance Marketing",
    slug: "seo-performance-marketing",
    text: "Help the right people find you, then turn attention into measurable action.",
    icon: "↗",
    color: "bg-[#fff0d6] text-[#9b6900]",
    tags: "Search visibility · Paid campaigns · Optimisation",
    detail: "Creative work should be easy to discover and easy to act on. We combine search thinking, paid media and continuous learning to make your digital presence work harder.",
    offerings: ["SEO planning and content optimisation", "Paid search and social campaigns", "Measurement and performance improvement"],
  },
  {
    title: "Podcast",
    slug: "podcast",
    text: "Give your ideas a voice through conversations your audience will choose to listen to.",
    icon: "◉",
    color: "bg-[#e9e5f0] text-[#705a87]",
    tags: "Show concept · Production · Distribution",
    detail: "A great podcast gives people room to listen, learn and connect. We help shape the format, find the stories and carry each episode from idea to audience.",
    offerings: ["Podcast concept and editorial direction", "Guest and episode planning", "Production and promotion"],
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    text: "Make useful, distinctive content that draws people in and keeps your brand in the conversation.",
    icon: "✦",
    color: "bg-[#fff0d6] text-[#9b6900]",
    tags: "Editorial · Campaign content · Storytelling",
    detail: "We turn ideas and expertise into content with a clear purpose. Every story is crafted for its audience and channel, while adding up to a recognisable brand voice.",
    offerings: ["Editorial content and copywriting", "Campaign storytelling", "Multi-channel content creation"],
  },
  {
    title: "Strategic Content Planning",
    slug: "strategic-content-planning",
    text: "Bring structure to your story with a content plan that connects every message to a purpose.",
    icon: "▤",
    color: "bg-[#e0efec] text-teal",
    tags: "Audience insight · Content pillars · Calendars",
    detail: "Good content becomes more powerful when the thinking behind it is clear. We map audiences, themes, channels and timing into a plan your team can put into action.",
    offerings: ["Audience and channel planning", "Content pillars and messaging", "Editorial calendars and governance"],
  },
  {
    title: "Brand Elevation",
    slug: "brand-elevation",
    text: "Find the distinctive story and presence that move your brand to its next chapter.",
    icon: "✳",
    color: "bg-[#fbe9df] text-[#cb572a]",
    tags: "Brand narrative · Positioning · Visibility",
    detail: "As ambitions grow, a brand needs a sharper point of view. We bring together positioning, narrative and communications to make your next chapter feel unmistakably yours.",
    offerings: ["Brand positioning and narrative", "Voice and messaging development", "Visibility and communications planning"],
  },
];

export const links = [
  ["/", "Home"],
  ["/about", "About us"],
  ["/services", "Services"],
  ["/sectors", "Sectors"],
  ["/news-room", "Newsroom"],
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
    services: ["Public Relations", "Media Relations", "Event Management"],
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
    services: ["Brand Elevation", "Strategic Content Planning"],
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
    services: ["Social & Digital Media", "Content Marketing"],
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
