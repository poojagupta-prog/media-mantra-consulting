export const sectors = [
  {
    title: "Tech PR for Startups",
    label: "Ideas into impact",
    image: "photo-1522071820081-009f0129c71c",
    alt: "Startup team collaborating in a creative office",
    description:
      "Great idea, small megaphone? We fix that. We help founders explain what they've built in plain language, earn credibility from the right media, and get noticed by investors, customers and talent in Dubai's crowded tech scene.",
    tags: "Founder stories / Launches / Innovation",
  },
  {
    title: "Financial PR",
    label: "Confidence through clarity",
    image: "photo-1486406146926-c627a92ad1ab",
    alt: "Glass towers rising in a financial district",
    description:
      "Money is serious, but your message shouldn't sound like a spreadsheet. We turn complex financial stories into clear, credible narratives and build trust through considered messaging, expert perspectives and reputation-led communications that investors actually remember.",
    tags: "Fintech / Corporate reputation / Trust",
  },
  {
    title: "Consumer Tech Publicity",
    label: "Innovation meets everyday life",
    image: "photo-1511707171634-5f897ff02aa9",
    alt: "Smartphone displaying apps on a wooden surface",
    description:
      "Nobody buys specs, they buy what a gadget does for their day. We bring the human benefit into focus and connect products to people through launches, reviews and digital experiences that make everyday life feel smarter.",
    tags: "Product launches / Reviews / Digital life",
  },
  {
    title: "B2B PR",
    label: "Expertise that opens doors",
    image: "photo-1497366811353-6870744d04b2",
    alt: "Modern workplace with collaborative meeting spaces",
    description:
      "Complex doesn't have to mean boring. We translate technical know-how into stories that decision-makers trust, building your authority through thought leadership and trade media that reach the people who actually sign the contracts.",
    tags: "Thought leadership / Trade media / Authority",
  },
  {
    title: "Global & International PR",
    label: "Stories without borders",
    image: "photo-1512453979798-5ea266f8880c",
    alt: "Dubai skyline and its distinctive modern architecture",
    description:
      "Going global is easy to say and hard to do well. We pair international ambition with local understanding, shaping one consistent brand story that still respects the culture, context and conversations of every market you enter.",
    tags: "Market entry / Local insight / Global stories",
  },
  {
    title: "Retail PR",
    label: "From discovery to desire",
    image: "photo-1441986300917-64674bd600d8",
    alt: "Clothing displayed in a contemporary retail store",
    description:
      "Footfall follows buzz. We make your brand part of the shopping conversation, giving store openings, seasonal collections and customer experiences the kind of buzz that gets people through the door and keeps them coming back.",
    tags: "Store openings / Brand experiences / Campaigns",
  },
  {
    title: "Fashion PR",
    label: "Style with a point of view",
    image: "photo-1483985988355-763728e1935b",
    alt: "Fashion shoppers exploring clothing collections",
    description:
      "Fashion moves fast and forgets faster. We give designers and labels a distinctive voice, then connect them with the editors, creators and communities who decide what's worth wearing and what shapes the culture.",
    tags: "Collections / Designer stories / Culture",
  },
  {
    title: "Sports & Athlete PR",
    label: "Beyond the final whistle",
    image: "photo-1461896836934-ffe607ba8211",
    alt: "Athletes competing on an outdoor running track",
    description:
      "The score is only half the story. We tell what happens behind the performance, building meaningful profiles for athletes and teams, and helping sporting brands form lasting connections with fans long after the match ends.",
    tags: "Athlete profiles / Events / Fan connection",
  },
  {
    title: "Artist & Entertainment PR",
    label: "Talent in the spotlight",
    image: "photo-1470229722913-7c0e2dbbafd3",
    alt: "Live concert crowd beneath colourful stage lights",
    description:
      "Talent deserves an audience. We give creative work the attention it earns, shaping publicity around the artist, the craft and the personality behind it, from a first release to a defining moment on stage.",
    tags: "Releases / Talent stories / Live experiences",
  },
  {
    title: "Luxury & Lifestyle PR",
    label: "Distinctive by design",
    image: "photo-1611652022419-a9419f74343d",
    alt: "Gold jewellery arranged on a neutral background",
    description:
      "Luxury never shouts, it lingers. We communicate the details that make a brand exceptional, shaping thoughtful stories around craftsmanship, heritage and the art of living well for audiences who notice everything.",
    tags: "Craftsmanship / Heritage / Brand desire",
  },
  {
    title: "Hospitality PR",
    label: "Places people talk about",
    image: "photo-1571896349842-33c89424de2d",
    alt: "Resort swimming pool surrounded by palm trees",
    description:
      "A great stay deserves a great story. We turn hotels, restaurants and travel experiences into places worth sharing, bringing them to life through the people, the flavours and the little moments that guests remember.",
    tags: "Hotels / Dining / Destinations",
  },
  {
    title: "Real Estate PR",
    label: "An address. A bigger story.",
    image: "photo-1600596542815-ffad4c1539a9",
    alt: "Contemporary residence with landscaped gardens and a pool",
    description:
      "Buyers don't just choose buildings, they choose a life. We tell the story behind developments, design and communities, showing what makes a place matter and why investors and residents should care about it in Dubai.",
    tags: "Developments / Architecture / Communities",
  },
];

export type Sector = (typeof sectors)[number];

export const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
