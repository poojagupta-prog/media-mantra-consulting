import type { Metadata } from "next";
import { Closing } from "@/components/media/shared";
import { DubaiHero } from "@/components/DubaiIt/hero-section";
import { DubaiIdea } from "@/components/DubaiIt/idea-section";
import { DubaiTransformation } from "@/components/DubaiIt/transformation-section";
import { DubaiContribution } from "@/components/DubaiIt/contribution-section";
import { DubaiPerspective } from "@/components/DubaiIt/perspective-section";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Dubai-it | Turning ambition into action",
  description:
    "Explore the Dubai-it philosophy and how Media Mantra Consulting contributes through stories, connections and communications that turn ideas into action.",
};

export default function DubaiIT() {
  return (
    <div className="media-page">
      <DubaiHero />
      <DubaiIdea />
      <DubaiTransformation />
      <DubaiContribution />
      <DubaiPerspective />
      <Closing
        title="Have an idea ready for action?"
        text="Let’s shape the story that helps it connect, grow and make an impact."
      />
    </div>
  );
}
