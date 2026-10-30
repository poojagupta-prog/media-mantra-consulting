export const sectors = [
  {
    title: "Tech PR for Startups",
    label: "Ideas into impact",
    image: "photo-1522071820081-009f0129c71c",
    alt: "Startup team collaborating in a creative office",
    description:
      "Turn a bold idea into a story people believe in. We help founders explain their innovation, build credibility and find their voice.",
    tags: "Founder stories / Launches / Innovation",
  },
  {
    title: "Financial PR",
    label: "Confidence through clarity",
    image: "photo-1486406146926-c627a92ad1ab",
    alt: "Glass towers rising in a financial district",
    description:
      "Make complex financial stories clear and compelling. Build trust through considered messaging, expert perspectives and reputation-led communications.",
    tags: "Fintech / Corporate reputation / Trust",
  },
  {
    title: "Consumer Tech Publicity",
    label: "Innovation meets everyday life",
    image: "photo-1511707171634-5f897ff02aa9",
    alt: "Smartphone displaying apps on a wooden surface",
    description:
      "Bring the human benefit of technology into focus. From new devices to digital experiences, we connect products with everyday life.",
    tags: "Product launches / Reviews / Digital life",
  },
  {
    title: "B2B PR",
    label: "Expertise that opens doors",
    image: "photo-1497366811353-6870744d04b2",
    alt: "Modern workplace with collaborative meeting spaces",
    description:
      "Give specialist expertise a wider audience. We translate business complexity into relevant stories that build authority with the people who matter.",
    tags: "Thought leadership / Trade media / Authority",
  },
  {
    title: "Global & International PR",
    label: "Stories without borders",
    image: "photo-1512453979798-5ea266f8880c",
    alt: "Dubai skyline and its distinctive modern architecture",
    description:
      "Connect global ambition with local understanding. Shape a consistent brand story that respects the culture, context and conversations of each market.",
    tags: "Market entry / Local insight / Global stories",
  },
  {
    title: "Retail PR",
    label: "From discovery to desire",
    image: "photo-1441986300917-64674bd600d8",
    alt: "Clothing displayed in a contemporary retail store",
    description:
      "Make your brand part of the shopping conversation. Bring store openings, seasonal collections and customer experiences to life through engaging publicity.",
    tags: "Store openings / Brand experiences / Campaigns",
  },
  {
    title: "Fashion PR",
    label: "Style with a point of view",
    image: "photo-1483985988355-763728e1935b",
    alt: "Fashion shoppers exploring clothing collections",
    description:
      "Build a distinctive voice in a fast-moving fashion world. Connect designers and labels with the editors, creators and communities that shape culture.",
    tags: "Collections / Designer stories / Culture",
  },
  {
    title: "Sports & Athlete PR",
    label: "Beyond the final whistle",
    image: "photo-1461896836934-ffe607ba8211",
    alt: "Athletes competing on an outdoor running track",
    description:
      "Tell the stories behind the performance. Help athletes, teams and sporting brands build meaningful profiles and lasting connections with their fans.",
    tags: "Athlete profiles / Events / Fan connection",
  },
  {
    title: "Artist & Entertainment PR",
    label: "Talent in the spotlight",
    image: "photo-1470229722913-7c0e2dbbafd3",
    alt: "Live concert crowd beneath colourful stage lights",
    description:
      "Give creative work the attention it deserves. From a debut to a defining moment, we shape publicity around the talent, craft and personality behind it.",
    tags: "Releases / Talent stories / Live experiences",
  },
  {
    title: "Luxury & Lifestyle PR",
    label: "Distinctive by design",
    image: "photo-1611652022419-a9419f74343d",
    alt: "Gold jewellery arranged on a neutral background",
    description:
      "Communicate the detail that makes a brand exceptional. Create thoughtful narratives around craftsmanship, heritage and the art of living well.",
    tags: "Craftsmanship / Heritage / Brand desire",
  },
  {
    title: "Hospitality PR",
    label: "Places people talk about",
    image: "photo-1571896349842-33c89424de2d",
    alt: "Resort swimming pool surrounded by palm trees",
    description:
      "Turn a destination into a story worth sharing. Bring hotels, restaurants and travel experiences to life through the people, flavours and moments that define them.",
    tags: "Hotels / Dining / Destinations",
  },
  {
    title: "Real Estate PR",
    label: "An address. A bigger story.",
    image: "photo-1600596542815-ffad4c1539a9",
    alt: "Contemporary residence with landscaped gardens and a pool",
    description:
      "Look beyond buildings to the possibilities they create. Tell compelling stories about developments, design and the communities that make a place matter.",
    tags: "Developments / Architecture / Communities",
  },
];

export type Sector = (typeof sectors)[number];

export const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
