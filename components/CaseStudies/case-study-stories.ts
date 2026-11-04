import type { CaseStudyStory } from "./story-types";
import { getPortfolioStudy } from "./case-studies-data";
import { realEstateStory } from "./real-estate-story";
import { educationStory } from "./education-story";
import { decaUnicoStory } from "./deca-unico-story";

const boat = getPortfolioStudy("boat-middle-east-pr-campaign")!;
const atlys = getPortfolioStudy("atlys-uae-travel-technology-pr")!;

/** Ordered, optional sections. Adding a story never requires changing the route. */
export const caseStudyStories: Record<string, CaseStudyStory> = {
  "bradford-international-alliance-education-pr": educationStory,
  "deca-unico-partnership-pr-campaign": decaUnicoStory,
  "real-estate-sector-pr-portfolio": realEstateStory,
  [boat.slug]: {
    theme: "electric",
    hero: "campaign",
    heroLines: ["Making waves.", "Making", "headlines."],
    heroKicker: "boAt / Middle East",
    heroImage: {
      src: boat.image,
      alt: boat.alt,
      caption: "boAt × Lulu / UAE retail expansion campaign artwork.",
      width: 1586, height: 992,
    },
    period: "United Arab Emirates / Retail expansion",
    seoTitle: "boAt Middle East: UAE Retail Expansion PR Case Study",
    sections: [
      {
        id: "opportunity", kind: "narrative", eyebrow: "The opportunity",
        title: "A bigger retail footprint needed a bigger conversation.",
        aside: "From product availability to regional relevance.",
        paragraphs: [
          "boAt’s expansion into Lulu Hypermarkets gave the audio brand a tangible story to tell in the UAE: its products were becoming more accessible through a regional retail partner. Media Mantra Consulting’s role was to bring that development into the media conversation, connecting a distribution announcement with a clear reason for consumers and editors to pay attention.",
          "The campaign centred on the brand’s growing retail footprint and expanded product availability. Business, technology and lifestyle media offered different ways into the same development. For business readers, the story concerned market presence and a retail partnership. For consumer audiences, its relevance lay in access to audio products through a familiar shopping destination.",
          "The UAE retail opportunity provided the organising idea. A new point of sale is also a point of discovery: an opportunity for people to encounter a brand while shopping. The communications task was to explain that availability in a regional context, giving the expansion meaning beyond the announcement itself.",
        ],
      },
      {
        id: "challenge", kind: "statement", eyebrow: "The communications challenge",
        title: "Turn a retail announcement into a consumer technology story.",
        copy: boat.challenge,
        note: "Campaign objective / Awareness of availability and market presence",
      },
      {
        id: "strategy", kind: "chapters", eyebrow: "The strategic approach",
        title: "One expansion. More than one editorial angle.",
        introduction: "The strategy positioned boAt’s retail expansion as a story that could travel across business, technology and lifestyle desks while retaining a consistent core message.",
        items: [
          { label: "Market", title: "Make the partnership the news.", copy: "Lulu Hypermarkets gave the announcement a concrete regional anchor. The partnership connected boAt’s expansion with a recognisable retail setting, making the story about a specific change in market access rather than a general statement of ambition." },
          { label: "Consumer", title: "Explain what becomes easier.", copy: "Expanded availability was the practical benefit at the centre of the campaign. Framing the development around access to the brand’s audio range gave consumer technology and lifestyle audiences a direct connection to the news." },
          { label: "Media", title: "Keep the message coherent.", copy: "Targeted regional media relations brought the expansion to different readerships. The documented coverage shows a recurring emphasis on boAt’s UAE presence and availability at Lulu, reinforcing a recognisable story across publications." },
        ],
      },
      {
        id: "rollout", kind: "timeline", eyebrow: "Campaign breakdown",
        title: "A clear message, carried across the region.",
        items: [
          { title: "The announcement", copy: "The retail partnership and expanded availability supplied the central news hook. Both gave the campaign a specific development around which to build regional awareness." },
          { title: "The editorial approach", copy: "Targeted business, technology and lifestyle media relations translated that announcement into relevant regional coverage. The campaign record includes placements across two languages." },
          { title: "The published story", copy: "Gulf News, Pan Time Arabia, Dubai Magazine and other documented outlets carried the expansion story. The coverage portfolio preserves examples of how the message appeared in regional media." },
        ],
      },
      {
        id: "results", kind: "metrics", eyebrow: "Recorded outcomes",
        title: "The expansion earned its place in the headlines.",
        metrics: boat.metrics,
        copy: boat.result,
        note: "Source: existing campaign coverage record. Potential viewership describes the reported potential audience of coverage; it is not verified impressions, unique reach or sales attribution.",
      },
      {
        id: "coverage", kind: "gallery", eyebrow: "In the press",
        title: "The story, in print and on screen.",
        copy: "Selected coverage assets from the campaign archive. Open each clipping to inspect it at its original proportions. These examples sit within the reported total of 15 placements; the gallery is a selection, not the complete coverage report.",
        images: boat.gallery.map((src, i) => ({ src, alt: `${["Gulf News", "Pan Time Arabia", "Dubai Magazine", "One Ville News", "Emirates Reporter"][i]} coverage of boAt’s UAE retail expansion`, caption: ["Gulf News", "Pan Time Arabia", "Dubai Magazine", "One Ville News", "Emirates Reporter"][i] })),
      },
      {
        id: "takeaway", kind: "narrative", eyebrow: "The takeaway", tone: "tint",
        title: "Make market access a story people can understand.",
        paragraphs: [
          "The campaign gave boAt’s retail expansion a visible editorial presence across regional publications. Its measurable outcome is media visibility: 15 placements, coverage in two languages and a reported potential audience figure. Those results demonstrate the distribution of the story without making claims about customer acquisition or commercial conversion.",
          "The strategic lesson is the value of a concrete local development. By placing the retail partnership and product accessibility at the heart of the narrative, the campaign connected brand expansion with something readers could recognise. A business milestone became a clear consumer story, supported by a documented regional coverage record.",
        ],
      },
    ],
  },
  [atlys.slug]: {
    theme: "journey", hero: "immersive",
    heroLines: ["From visa complexity", "to a national", "conversation."],
    heroKicker: "Atlys / A journey in four chapters",
    heroImage: { src: atlys.image, alt: atlys.alt, caption: "Travel technology, seen through the traveller’s experience.", width: 1280, height: 720 },
    period: "United Arab Emirates / August–November 2025",
    seoTitle: "Atlys UAE: Travel Technology PR Case Study",
    sections: [
      {
        id: "context", kind: "narrative", eyebrow: "Before the departure",
        title: "Every journey starts before the airport.",
        paragraphs: [
          "For Atlys, the UAE communications challenge began with the work that happens before a traveller can leave: understanding visa requirements, finding an appointment and navigating uncertainty around an application. A visa service needs recognition, but it also needs credibility in a category where the details matter to people making real travel plans.",
          atlys.overview!,
          "Rather than relying on one announcement, the programme connected four editorial narratives across August–November 2025. Practical visa topics gave the brand relevance to travellers. Technology and executive thought leadership opened a broader business conversation. Seasonal travel insights gave the programme another route into timely travel coverage.",
        ],
        aside: "The starting point: a traveller’s uncertainty. The ambition: a clearer, more credible media presence.",
      },
      {
        id: "pain-points", kind: "chapters", eyebrow: "The traveller’s perspective",
        title: "Complexity is a human story.",
        introduction: "The existing campaign brief identifies three linked concerns. Together, they explain why trust and clarity were central to the communications objective.",
        items: [
          { title: "Changing requirements", copy: "Understanding what an application requires can be a source of uncertainty. This made visa simplification a relevant editorial subject and gave the programme a practical starting point for explaining the category." },
          { title: "Limited appointments", copy: "Availability creates another layer of difficulty for people planning a trip. The communications challenge was to recognise that friction and make the brand relevant to the planning conversation." },
          { title: "Uncertain approvals", copy: "An application is not an assured outcome. Building credibility in this setting requires a measured story about the service and the traveller’s needs, without treating media visibility as proof of visa approval or service performance." },
        ],
      },
      {
        id: "travel-interlude", kind: "image", eyebrow: "The journey beyond the application",
        title: "A wider world. A more relevant conversation.",
        image: { src: "/images/case-studies/atlys/winter-travel-destinations.png", alt: "Winter travel destination street scene from the Atlys case study image archive", caption: "Travel imagery from the case study archive / Winter destinations" },
      },
      {
        id: "storylines", kind: "chapters", eyebrow: "Four editorial routes",
        title: "One brand. Four ways into the story.",
        introduction: "The campaign’s four documented storylines connected service relevance, business commentary and seasonal interest. Each offered a different editorial entry point into the same travel technology brand.",
        items: [
          { label: "Practical travel", title: "Schengen visa simplification", copy: "Schengen applications placed the programme close to a recognisable traveller concern. Simplification provided a service-led narrative: a way to explain why the category matters and how Atlys wanted to be understood within it." },
          { label: "Destination intent", title: "US tourist visa applications", copy: "The US tourist visa storyline extended that practical conversation to another application context. It broadened the programme’s subject matter while keeping attention on the decisions and uncertainty that precede a trip." },
          { label: "Technology & leadership", title: "AI and the executive perspective", copy: "AI-driven innovation and executive thought leadership added a business and technology dimension. These subjects gave the programme space to discuss the company’s perspective alongside the traveller-facing service narrative." },
          { label: "Seasonal relevance", title: "Winter travel insights", copy: "Data-led destination stories connected the brand with seasonal travel interest. Winter travel offered a timely editorial context, expanding the conversation from application complexity to the trips people were considering." },
        ],
      },
      {
        id: "programme", kind: "timeline", eyebrow: "The four-month programme",
        title: "A sustained presence, from August to November.",
        period: "August–November 2025", months: ["August", "September", "October", "November"],
        items: [
          { title: "Targeted media outreach", copy: "The programme addressed national, business, lifestyle and travel publications. Targeted press pitches linked the brand’s storylines with the editorial interests of these different desks." },
          { title: "English and Arabic communications", copy: "Bilingual outreach supported a regional media presence across both languages. This was part of the coordinated programme, alongside executive commentary and technology-focused storytelling." },
          { title: "Connected editorial narratives", copy: "Practical visa topics, thought leadership and travel insights created several reasons for media engagement across the campaign window. The four storylines describe the programme’s scope; they are not assigned to individual months in the available record." },
        ],
      },
      {
        id: "coverage", kind: "gallery", eyebrow: "Across the media landscape",
        title: "Travel relevance. Business credibility.",
        copy: "The campaign record names Gulf News, Gulf Business, Khaleej Times, Arabian Business and MSN among its notable outlets. The images below are travel imagery from the case study archive, rather than press clippings or evidence of individual editorial placements.",
        publications: ["Gulf News", "Gulf Business", "Khaleej Times", "Arabian Business", "MSN"],
        images: [
          { src: "/images/case-studies/atlys/uae-airline-travel.jpg", alt: "UAE aircraft at an airport, from the Atlys travel image archive", caption: "UAE airline travel / Supporting photograph" },
          { src: "/images/case-studies/atlys/winter-travel-destinations.png", alt: "Winter destination street scene from the Atlys travel image archive", caption: "Winter destinations / Supporting photograph" },
        ],
      },
      {
        id: "results", kind: "metrics", eyebrow: "Arrival, in numbers",
        title: "Four months. One consistent conversation.",
        metrics: atlys.metrics, copy: atlys.result,
        note: "Source: existing campaign record. The seven flagship editorial wins are included within the 32 media outcomes. Storylines and languages describe campaign scope, rather than additional coverage totals.",
      },
      {
        id: "takeaway", kind: "narrative", eyebrow: "What the journey shows", tone: "tint",
        title: "Positioning built through relevance, over time.",
        paragraphs: [
          "The programme strengthened Atlys’s media positioning by giving the brand several connected roles in the editorial conversation: a visa services business, a technology voice and a source of travel-related stories. The documented results show sustained visibility across travel, technology and business media, with coverage in English and Arabic.",
          "The wider strategic takeaway is the value of a sustained narrative in a complex service category. Repeated relevance can give a brand more opportunities to be understood than a single announcement allows. Here, that interpretation rests on the documented four-month programme and its media outcomes; the record does not establish changes in consumer trust, visa approvals or application volumes.",
        ],
      },
    ],
  },
};
