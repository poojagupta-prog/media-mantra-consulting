import type { CaseStudyStory } from "./story-types";

export const educationStory: CaseStudyStory = {
  theme: "academy", hero: "editorial",
  heroLines: ["Learning opens doors.", "Stories open conversations."],
  heroKicker: "Bradford International Alliance / Education & professional skills",
  heroImage: {
    src: "/images/case-studies/education/learning-commons.webp",
    alt: "AI-generated illustration of adult learners collaborating in an imagined Dubai learning commons; not a BIA campus or event",
    caption: "AI-generated editorial illustration / Not a BIA campus or campaign event",
    width: 1672, height: 941,
  },
  period: "UAE & regional media / Four-month programme",
  seoTitle: "Bradford International Alliance: Education PR Case Study",
  sections: [
    {
      id: "context", kind: "narrative", eyebrow: "The education brief",
      title: "Recognition starts with a reason to believe.",
      aside: "An education story built around access, careers and relevance to working life.",
      paragraphs: [
        "Bradford International Alliance (BIA), an education and professional training provider, needed a regional media presence that could do more than announce institutional milestones. Its audiences included prospective learners considering flexible study, employers looking for career-ready talent and industry peers following developments in workforce skills. The communications challenge was to speak to those interests through a coherent programme.",
        "Over four months, the approach paired announcements with named authored articles and feature coverage. Three campaign subjects supplied the major news moments: Graduation Day, the launch of Sapio Solutions and a Dubai skill-sharing session on generative AI. Alongside them, editorial subjects explored accessible education, practical skills and leadership beyond the classroom.",
        "The result was a programme with two complementary roles for media. Syndication distributed institutional news across regional networks. Bylines and features gave the narrative room to explain why the subjects mattered, keeping attention on learning and professional development between announcements.",
      ],
    },
    {
      id: "approach", kind: "chapters", eyebrow: "Two complementary tracks",
      title: "Make the milestone visible. Give the idea room to grow.",
      items: [
        { label: "Announcement-led", title: "Breadth at the right moments", copy: "Graduation, market entry and a topical business session provided distinct reasons for coverage. Wire distribution and regional pickup extended the institutional stories beyond a single publication, while the Sapio campaign also included a market-trends angle in Khaleej Times." },
        { label: "Editorial-led", title: "A voice between announcements", copy: "Authored articles and features explored flexible education, careers, business skills and AI. Named placements in titles including Emirates Reporter, Khaleej Times and Business Today complemented the announcement stream with more space for explanation and perspective." },
      ],
    },
    {
      id: "programme", kind: "timeline", eyebrow: "The four-month narrative",
      title: "A sequence of stories, rather than isolated announcements.",
      period: "Programme sequence / Months 1–4",
      items: [
        { title: "Month 1 / Achievement and access", copy: "Graduation Day supplied the first major milestone, with 60 tracked placements. The accompanying editorial subjects addressed accessible education and flexible learning for the UAE workforce, introducing the programme’s central connection between study and working life." },
        { title: "Month 2 / A broader business story", copy: "Sapio Solutions’ UAE launch introduced integrated web development, branding and digital marketing services. Eight placements covered the launch and its market context. The editorial programme also explored education pathways that fit people’s lives and the role of branding in digital business." },
        { title: "Month 3 / Skills for a changing workplace", copy: "The Dubai skill-sharing session examined generative AI, business models and value propositions. Its campaign recorded 39 tracked placements across 38 unique outlets. Other editorial subjects considered professional learners and cybersecurity for business leaders." },
        { title: "Month 4 / Readiness and leadership", copy: "Career readiness, practical AI tools and leadership beyond the classroom extended the narrative. Coverage subjects connected education with CVs, interview preparation, productivity and decision-making, keeping the focus on how learning relates to professional life." },
      ],
    },
    {
      id: "learning-interlude", kind: "image", eyebrow: "From learning to working life",
      title: "The story continues beyond the classroom.",
      image: {
        src: "/images/case-studies/education/professional-learning.webp",
        alt: "AI-generated editorial illustration of a notebook, laptop and book in an imagined professional learning space",
        caption: "AI-generated editorial illustration / Supporting learning imagery",
      },
    },
    {
      id: "results", kind: "metrics", eyebrow: "Programme outcomes",
      title: "Four months of connected visibility.",
      metrics: [{ value: "115", label: "Reported total media placements" }, { value: "8", label: "Reported premium named placements" }, { value: "4", label: "Programme months" }],
      copy: "The campaign summary reports 115 placements: 60 for Graduation Day, eight for Sapio’s launch, 39 for the skill-sharing event and eight premium named placements. The premium placements sit within the total, rather than being additional to it.",
      note: "Programme totals are reported summary figures. The editorial schedule lists nine entries while the summary reports eight premium placements, so the schedule is presented as selected subject examples rather than a reconciled byline count. Monthly unique visitor and valuation estimates apply only to Graduation Day.",
    },
    {
      id: "graduation-measurement", kind: "evidence", eyebrow: "Graduation Day in context",
      title: "A closer look at the measured campaign.",
      copy: "Graduation Day is the only campaign stream with audience and valuation estimates recorded. Its November–December 2025 coverage included regional newswire sites and business blogs, with MENAFN, PR MENA and GCC Wire among the named outlets.",
      rows: [
        { label: "Tracked placements", value: "60", context: "Graduation Day only" },
        { label: "Reported publisher MUV total", value: "993,748", context: "Potential audience indicator; not verified article readership or deduplicated campaign reach" },
        { label: "Reported AVE estimate", value: "$195,000", context: "Advertising value equivalency estimate" },
        { label: "Reported PRV estimate", value: "$585,000", context: "PR valuation estimate" },
      ],
      note: "AVE and PRV are reporting estimates, not earned revenue or proven return on investment. Their combined reported value is $780,000; it is not a separate additional outcome. No equivalent audience or valuation figures were recorded for Sapio, the skill-sharing campaign or the premium editorial stream.",
    },
    {
      id: "editorial", kind: "press", eyebrow: "Selected editorial subjects",
      title: "A consistent thread through different publications.",
      copy: "Selected subjects from the editorial schedule, rewritten here as summaries. These examples show the range of the narrative; they are not a new count of premium placements.",
      items: [
        { publication: "Emirates Reporter", title: "Access to education and global careers", copy: "A feature conversation connected accessible learning with professional ambition; a later feature returned to institutional initiatives and leadership beyond the classroom." },
        { publication: "Khaleej Times", title: "Flexible study and the UAE workforce", copy: "An authored article placed flexible learning within the needs of a growing workforce, connecting the education proposition with working life." },
        { publication: "Business Today", title: "The business role of a digital presence", copy: "A feature explored how website and brand signals influence business audiences, broadening the programme’s practical business subjects." },
        { publication: "Pan Time Arabia & One Ville News", title: "Readiness for the next professional step", copy: "Editorial subjects covered career preparation for graduates and practical AI tools for business leaders, extending the skills narrative into everyday decisions." },
      ],
    },
    {
      id: "takeaway", kind: "narrative", eyebrow: "The wider lesson", tone: "tint",
      title: "A stronger education narrative connects the institution with the individual.",
      paragraphs: [
        "The programme’s organising idea was the relevance of learning to people’s lives. Graduation supplied achievement, flexible study supplied access and the skills subjects supplied a connection to the workplace. These were different stories, but they gave the institution a consistent editorial territory.",
        "The documented outcome is a sustained body of media coverage. Its strategic value lies in giving an education brand several ways to be understood across regional media. The placement record does not establish changes in enrolment, employer preference or learner trust, and the case study keeps those distinctions clear.",
      ],
    },
  ],
};
