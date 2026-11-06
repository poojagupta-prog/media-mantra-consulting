import type { PortfolioStudy } from "./case-studies-data";

export type StoryImage = { src: string; alt: string; caption: string };
export type StoryMetric = { value: string; label: string };
type SectionBase = { id: string; eyebrow: string; title: string };
export type StorySection = SectionBase & (
  | { kind: "narrative"; paragraphs: string[]; aside?: string; tone?: "paper" | "tint" }
  | { kind: "statement"; copy: string; note: string }
  | { kind: "chapters"; introduction?: string; items: { title: string; copy: string; label?: string }[] }
  | { kind: "timeline"; period?: string; months?: string[]; items: { title: string; copy: string }[] }
  | { kind: "metrics"; metrics: readonly StoryMetric[]; copy: string; note: string }
  | { kind: "gallery"; images: StoryImage[]; copy: string; publications?: string[] }
  | { kind: "image"; image: StoryImage; copy?: string }
  | { kind: "project"; client: string; location: string; number: string; paragraphs: string[]; metrics: StoryMetric[]; publications?: string[]; note?: string }
  | { kind: "press"; copy: string; items: { publication: string; title: string; copy: string }[] }
  | { kind: "evidence"; copy: string; rows: { label: string; value: string; context: string }[]; note: string }
);

export type CaseStudyStory = {
  theme: "electric" | "journey" | "architecture" | "academy" | "alliance";
  hero: "campaign" | "immersive" | "architectural" | "editorial";
  heroLines: string[];
  heroKicker: string;
  heroImage: StoryImage & { width: number; height: number };
  period: string;
  seoTitle: string;
  sections: StorySection[];
};
export type ComposedStudy = { study: PortfolioStudy; story: CaseStudyStory };
