import type { CaseStudyStory } from "./story-types";

export const realEstateStory: CaseStudyStory = {
  theme: "architecture",
  hero: "architectural",
  heroLines: ["Places with", "presence."],
  heroKicker: "Real estate / A portfolio of perspectives",
  heroImage: {
    src: "/images/case-studies/real-estate/waterfront-residences.webp",
    alt: "AI-generated architectural illustration of imagined waterfront residences in warm limestone; not a named client development",
    caption: "AI-generated architectural illustration / Not a client development",
    width: 1672,
    height: 941,
  },
  period: "United Arab Emirates / 2026 portfolio",
  seoTitle: "Real Estate PR: Six UAE Developer Stories",
  sections: [
    {
      id: "perspective", kind: "narrative", eyebrow: "01 / The sector perspective",
      title: "A distinctive address deserves a distinctive story.",
      aside: "Six clients. Different ambitions. A considered approach to each.",
      paragraphs: [
        "A branded residence, a wellness community and a major construction partnership ask different questions of communications. One needs to introduce a hospitality identity to a new residential setting. Another needs to explain a way of living. A third must make the scale and significance of a business agreement clear. Treating them alike would miss what makes each worth discussing.",
        "Media Mantra Consulting’s UAE real estate portfolio brings together six client stories across launches, positioning, partnerships and events. The work spans English and Arabic communications, national newspapers, specialist construction and property titles, and regional digital platforms. Its common thread is a focus on the particular: the proposition, milestone or experience that gives each developer a recognisable place in the conversation.",
      ],
    },
    {
      id: "bnw", kind: "project", eyebrow: "02 / Branded residences", number: "01",
      client: "BnW Developments", location: "Al Marjan Island, Ras Al Khaimah",
      title: "Introducing Taj Wellington Mews to an international audience.",
      paragraphs: [
        "Taj Wellington Mews brought BnW Developments together with IHCL / Taj Hotels for a branded luxury residential launch on Al Marjan Island. The communications brief centred on introducing the project and positioning Taj’s UAE residential debut for an international audience, connecting the hospitality association with the development’s location and proposition.",
        "The launch received more than 30 placements across English, Arabic and trade publications. Coverage included Khaleej Times, Gulf Times, Al Khaleej and Construction Week, supported by regional digital distribution. Alongside that media outcome, the project reported 97% of residences reserved within hours of the launch event—a commercial milestone for the development, rather than a measure of PR-attributed sales.",
      ],
      metrics: [{ value: "30+", label: "Media placements" }, { value: "97%", label: "Residences reported reserved within hours of launch" }],
      publications: ["Khaleej Times", "Gulf Times", "Al Khaleej", "Construction Week"],
    },
    {
      id: "aum", kind: "project", eyebrow: "03 / Wellness living", number: "02",
      client: "AUM Developments", location: "Jumeirah Village Circle, Dubai",
      title: "Giving VEDA Wellness a clear place in the neighbourhood.",
      paragraphs: [
        "For VEDA Wellness, the story was rooted in family wellbeing and residential life in Jumeirah Village Circle. The AED 100M+ development offered a different proposition from a conventional property announcement: a wellness-oriented community with a lifestyle narrative that could sit alongside the project’s business story.",
        "Communications reached English and Arabic media simultaneously, with more than 20 placements recorded. Khaleej Times and Gulf News featured among the named outlets, alongside print coverage in Gulf News Magazine. The development value describes the project’s scale; the placement count describes the communications outcome.",
      ],
      metrics: [{ value: "20+", label: "Media placements" }, { value: "AED 100M+", label: "Development value" }],
      publications: ["Khaleej Times", "Gulf News", "Gulf News Magazine"],
    },
    {
      id: "wellness-interlude", kind: "image", eyebrow: "The places behind the proposition",
      title: "Architecture draws attention. A clear narrative gives it meaning.",
      image: {
        src: "/images/case-studies/real-estate/wellness-atrium.webp",
        alt: "AI-generated illustration of an imagined travertine wellness atrium with a curved staircase and reflecting pool",
        caption: "AI-generated architectural illustration / Not VEDA Wellness or another named client property",
      },
    },
    {
      id: "deca", kind: "project", eyebrow: "04 / Strategic partnerships", number: "03",
      client: "DECA Properties", location: "Dubai / UNICO × DECA",
      title: "Making the value of a partnership visible.",
      paragraphs: [
        "UNICO’s appointment of DECA as its exclusive sales and marketing partner provided the foundation for a partnership story. The narrative connected an international outlook with local market expertise, bringing the alliance into the context of design-led residential communities in Dubai.",
        "The announcement secured coverage in more than 12 publications. Named outlets included Khaleej Times, Gulf Construction Online, Construction Business News ME and Arabian Business Week. The breadth of business, construction and property titles gave the partnership several relevant editorial settings without reducing the story to the signing itself.",
      ],
      metrics: [{ value: "12+", label: "Publications secured" }],
      publications: ["Khaleej Times", "Gulf Construction Online", "Construction Business News ME", "Arabian Business Week"],
    },
    {
      id: "centurion", kind: "project", eyebrow: "05 / Partnerships & scale", number: "04",
      client: "Centurion Properties", location: "UAE / Corporate communications",
      title: "Communicating ambition through concrete milestones.",
      paragraphs: [
        "Centurion’s programme brought together four campaign subjects: Burj Capital, CITIC, its PR partnership and awards. This gave the brand a sequence of corporate milestones to communicate, including an AED 10.5B memorandum of understanding with CITIC Construction of China.",
        "More than 40 publications were secured across the programme, with coverage including Zawya, Khaleej Times, Construction Week, Campaign Middle East and Trade Arabia. The portfolio also records GCC Top 100 developer recognition. The agreement’s value communicates the scale of the partnership; it is separate from the media results and should not be read as revenue generated by communications.",
      ],
      metrics: [{ value: "40+", label: "Publications secured" }, { value: "AED 10.5B", label: "CITIC Construction MOU value" }, { value: "4", label: "Campaign subjects" }],
      publications: ["Zawya", "Khaleej Times", "Construction Week", "Campaign Middle East", "Trade Arabia"],
      note: "Additional milestone: GCC Top 100 developer recognition.",
    },
    {
      id: "bamx", kind: "project", eyebrow: "06 / Luxury positioning", number: "05",
      client: "BAMX Developments", location: "UAE / Market entry",
      title: "A quieter expression of luxury, with a longer story behind it.",
      paragraphs: [
        "BAMX’s UAE market entry drew on a 30-year global legacy and a positioning centred on understated luxury, quality and long-term value. The communications task was to give that heritage a clear local expression, introducing the developer through a coherent point of view rather than a collection of luxury superlatives.",
        "The programme secured coverage in more than 10 publications. Gulf News, Zawya, TradingView via Reuters and International Business Magazine were among the named platforms, with further regional coverage including English and Arabic editions of Pan Time Arabia. The 30-year figure describes the brand’s background, while the publication count records the media outcome.",
      ],
      metrics: [{ value: "10+", label: "Publications secured" }, { value: "30", label: "Years of global brand heritage" }],
      publications: ["Gulf News", "Zawya", "TradingView via Reuters", "International Business Magazine"],
    },
    {
      id: "amirah", kind: "project", eyebrow: "07 / In-person experiences", number: "06",
      client: "Amirah Developments", location: "UAE / Launch & open house",
      title: "Two different settings. One focus on the guest experience.",
      paragraphs: [
        "Amirah’s work combined the scale of a project launch with the intimacy of an open house. The launch brought together 700 attendees and included live social media amplification, followed by an Instagram reel after the event. The open house welcomed 100 attendees for a smaller showcase, with its own event reel extending the experience online.",
        "These are two distinct event attendance figures, not media placement counts or deduplicated audience reach. Together, the events show the portfolio’s experiential dimension: communications delivered through a physical occasion, supported by social content that carried the story beyond the room.",
      ],
      metrics: [{ value: "700", label: "Project launch attendees" }, { value: "100", label: "Open house attendees" }],
    },
    {
      id: "portfolio-results", kind: "metrics", eyebrow: "08 / The portfolio view",
      title: "Individual stories. A broader body of work.",
      metrics: [{ value: "115+", label: "Reported portfolio media placements" }, { value: "6", label: "Client portfolios" }, { value: "2", label: "Amirah events" }],
      copy: "Across five developer brands, the portfolio reports 115+ media placements, spanning national, trade and regional digital outlets, with English and Arabic coverage. Amirah adds a sixth client story through two events: a 700-attendee launch and a 100-attendee open house.",
      note: "The portfolio total is reported separately from the rounded client-level counts. Event attendance, project values, brand heritage and reservation milestones retain their own client-specific context; they are not additional media placements or measures of PR-attributed revenue.",
    },
    {
      id: "takeaway", kind: "narrative", eyebrow: "09 / The lasting perspective", tone: "tint",
      title: "The strongest sector story leaves room for difference.",
      paragraphs: [
        "Across this work, the role of communications changes with the brief: introducing a hospitality-led residence, explaining wellness living, contextualising a commercial alliance or bringing people together at a launch. The editorial lesson is to begin with that distinction, then choose the narrative and channels that make it understandable.",
        "The result is a sector portfolio with a shared standard of clarity and a different story for every client. Media relations, positioning and event delivery contribute in different ways, with outcomes presented in the context of the work that produced them.",
      ],
    },
  ],
};
