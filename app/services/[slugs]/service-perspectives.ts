/** Editorial direction for each service, written from a PR and media consultancy perspective. */
export const servicePerspectives = {
  "media-relations": {
    label: "The media desk",
    question: "Why would this story matter to an editor today?",
    intro:
      "We begin with news value and audience relevance, then build a focused press programme around the people most likely to care.",
    phases: [
      [
        "Find the angle",
        "Shape a timely, credible story with a clear human or industry hook.",
      ],
      [
        "Build the relationship",
        "Match the story to journalists and outlets, with useful assets and spokespeople ready.",
      ],
      [
        "Follow through",
        "Handle queries, interviews and coverage with care; keep the relationship alive after publication.",
      ],
    ],
    signals: [
      "Relevant coverage",
      "Message pull-through",
      "Journalist engagement",
    ],
  },
  "public-relations": {
    label: "The communications plan",
    question: "What should people understand, feel and do next?",
    intro:
      "Public relations connects business goals to the people who shape a brand’s future. We align narrative, channels and actions around that shared purpose.",
    phases: [
      [
        "Map the publics",
        "Identify the audiences, stakeholders and concerns that should shape the plan.",
      ],
      [
        "Build the narrative",
        "Create messages and campaign moments that are useful, consistent and credible.",
      ],
      [
        "Measure the change",
        "Review what people took away and how perceptions or behaviours shifted.",
      ],
    ],
    signals: [
      "Audience understanding",
      "Stakeholder response",
      "Communication outcomes",
    ],
  },
  "social-digital-media": {
    label: "The social conversation",
    question: "What would make someone choose to engage?",
    intro:
      "We listen before we publish, then develop platform-native ideas that invite participation and give communities a reason to stay.",
    phases: [
      [
        "Listen closely",
        "Study audience conversations, cultural cues and the questions people are already asking.",
      ],
      [
        "Create for the channel",
        "Shape formats, voices and publishing rhythms around each platform’s behaviour.",
      ],
      [
        "Respond and learn",
        "Manage the conversation, watch the response and adapt the plan in real time.",
      ],
    ],
    signals: [
      "Meaningful engagement",
      "Community response",
      "Audience growth quality",
    ],
  },
  "event-management": {
    label: "The experience plan",
    question: "What should guests remember when they leave?",
    intro:
      "For us, an event is a live communications channel. Every invitation, space and interaction should reinforce the story and invite the right people in.",
    phases: [
      [
        "Define the moment",
        "Set the audience, purpose and story before choosing a format or venue.",
      ],
      [
        "Design the journey",
        "Plan invitations, programming, guest flow and media opportunities as one experience.",
      ],
      [
        "Extend its life",
        "Capture content, follow up with attendees and carry the conversation beyond the room.",
      ],
    ],
    signals: [
      "Audience attendance",
      "Guest experience",
      "Post-event conversation",
    ],
  },
  "reputation-building-management": {
    label: "The trust agenda",
    question: "What will earn confidence before it is needed?",
    intro:
      "Reputation is shaped through consistent action and communication. We help teams understand risks, prepare responses and strengthen relationships over time.",
    phases: [
      [
        "Read the landscape",
        "Listen to stakeholders and identify expectations, vulnerabilities and emerging issues.",
      ],
      [
        "Prepare with care",
        "Clarify responsibilities, messages and response routes before difficult moments arrive.",
      ],
      [
        "Act consistently",
        "Communicate with empathy and accountability, then track whether trust is recovering.",
      ],
    ],
    signals: ["Stakeholder sentiment", "Issue readiness", "Trust indicators"],
  },
  "seo-performance-marketing": {
    label: "The discovery engine",
    question: "Are the right people finding a useful answer?",
    intro:
      "We connect the story people search for with pages and campaigns that serve their intent. Visibility matters most when it leads to meaningful action.",
    phases: [
      [
        "Understand intent",
        "Research the language, questions and needs behind relevant searches.",
      ],
      [
        "Improve discovery",
        "Build helpful content and clear page structure, supported by focused paid campaigns.",
      ],
      [
        "Optimise the path",
        "Review search visibility, qualified traffic and conversion behaviour together.",
      ],
    ],
    signals: [
      "Relevant search visibility",
      "Qualified visits",
      "Conversion quality",
    ],
  },
  podcast: {
    label: "The listening room",
    question: "What conversation deserves an episode?",
    intro:
      "A brand podcast works when it gives listeners something valuable. We develop an editorial premise, find compelling voices and plan how every episode reaches its audience.",
    phases: [
      [
        "Find the premise",
        "Define the listener, the point of view and a format that can sustain a series.",
      ],
      [
        "Make the episode",
        "Plan guests, interviews, production and a recognisable listening experience.",
      ],
      [
        "Grow the audience",
        "Create clips and cross-channel promotion, then learn from retention and feedback.",
      ],
    ],
    signals: ["Listener retention", "Episode discovery", "Audience feedback"],
  },
  "content-marketing": {
    label: "The editorial studio",
    question: "What value does this story give its audience?",
    intro:
      "We make content that earns attention by being useful, distinctive and connected to a wider communications narrative.",
    phases: [
      [
        "Choose the story",
        "Find the overlap between audience needs and the brand’s real expertise.",
      ],
      [
        "Craft for purpose",
        "Develop a strong editorial idea, then adapt it across formats and channels.",
      ],
      [
        "Learn what lasts",
        "Review engagement and onward action to sharpen the next story.",
      ],
    ],
    signals: ["Content engagement", "Returning audiences", "Useful actions"],
  },
  "strategic-content-planning": {
    label: "The editorial map",
    question: "How does every piece add up to one clear story?",
    intro:
      "A content plan gives teams a shared direction. We turn audience insight and business priorities into themes, formats, ownership and an achievable publishing rhythm.",
    phases: [
      [
        "Set the direction",
        "Define audiences, goals, editorial pillars and the role of each channel.",
      ],
      [
        "Build the system",
        "Create calendars, briefs, approvals and a practical workflow for the team.",
      ],
      [
        "Review and refine",
        "Use performance and audience feedback to keep the plan relevant.",
      ],
    ],
    signals: [
      "Editorial consistency",
      "Publishing efficiency",
      "Audience response",
    ],
  },
  "brand-elevation": {
    label: "The next chapter",
    question: "What makes this brand impossible to confuse?",
    intro:
      "We uncover the distinct point of view behind a brand and make it visible through a consistent story, voice and communications presence.",
    phases: [
      [
        "Find the truth",
        "Listen to leaders, customers and culture to identify what is genuinely distinctive.",
      ],
      [
        "Shape the narrative",
        "Develop positioning, messages and a voice the whole team can use.",
      ],
      [
        "Make it visible",
        "Bring the story to life through media, content and moments that reinforce it.",
      ],
    ],
    signals: ["Message clarity", "Brand recognition", "Stakeholder resonance"],
  },
} as const;
