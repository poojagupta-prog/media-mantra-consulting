import { JsonLd } from "@/components/common/json-ld";
import { breadcrumbSchema, organizationRef, schemaContext } from "@/lib/schema";
import { consultingMetadata } from "@/lib/consulting-metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactModalLink } from "@/components/common/contact-modal-link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Suspense } from "react";
import {
  getPortfolioStudy,
  portfolioStudies,
} from "@/components/CaseStudies/case-studies-data";
import { caseStudyStories } from "@/components/CaseStudies/case-study-stories";
import {
  StoryContents,
  StoryHero,
  StorySectionView,
} from "@/components/CaseStudies/story-renderer";
import { StudyCard } from "@/components/CaseStudies/study-card";
import "../stories.css";

// Work around the Next.js 16.4.6 dev validator invariant on this route.
export const instant = false;

const articleSubjects: Record<string, string> = {
  "boat-middle-east-pr-campaign": "boAt Middle East",
  "atlys-uae-travel-technology-pr": "Atlys UAE",
  "real-estate-sector-pr-portfolio": "UAE Real Estate PR",
  "bradford-international-alliance-education-pr": "Bradford International Alliance",
  "deca-unico-partnership-pr-campaign": "DECA × UNICO",
  "centurion-properties-uae-real-estate-pr": "Centurion Properties"
};

export function generateStaticParams() {
  return portfolioStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getPortfolioStudy(slug);
  const story = caseStudyStories[slug];
  if (!study || !story) return { title: "Case study not found" };
  return caseStudyMetadata(slug, story.heroImage.alt);
}

function caseStudyMetadata(slug: string, imageAlt: string) {
  return consultingMetadata(`/case-studies/${slug}`, {
    url: `/og/case-studies-${slug}.jpg`,
    alt: imageAlt,
  });
}

export default function CaseStudyDetailPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  return (
    <Suspense
      fallback={
        <div
          role="status"
          className="min-h-[70vh] bg-[#19181b] px-5 py-20 text-white"
        >
          Loading case study…
        </div>
      }
    >
      <CaseStudyContent params={params} />
    </Suspense>
  );
}

async function CaseStudyContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getPortfolioStudy(slug);
  const story = caseStudyStories[slug];
  if (!study || !story) notFound();
  const related = portfolioStudies
    .filter((item) => item.slug !== slug)
    .slice(0, 2);
  const path = `/case-studies/${slug}`;
  const metadata = caseStudyMetadata(slug, story.heroImage.alt);
  const url = metadata.alternates.canonical;
  const structuredData = {
    "@context": schemaContext,
    "@type": "Article",
    "@id": `${url}#article`,
    headline: metadata.openGraph.title.absolute,
    description: metadata.description,
    image: metadata.openGraph.images[0].url,
    author: organizationRef,
    publisher: organizationRef,
    about: { "@type": "Organization", name: articleSubjects[slug] ?? study.brand },
    url,
    mainEntityOfPage: url,
    inLanguage: "en",
    articleSection: study.sector,
  };
  return (
    <article className={`cs-story cs-${story.theme}`}>
      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbSchema([
        { href: "/", label: "Home" },
        { href: "/case-studies", label: "Case studies" },
        { href: path, label: study.brand },
      ])} />
      <div className="cs-progress" aria-hidden="true" />
      <StoryHero study={study} story={story} />
      <StoryContents study={study} story={story} />
      <div className="cs-project-strip cs-wrap">
        <span className="cs-eyebrow">The disciplines</span>
        <ul>
          {study.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
      {story.sections.map((section) => (
        <StorySectionView key={section.id} section={section} />
      ))}
      <section className="cs-related">
        <div className="cs-wrap">
          <div className="cs-related-heading">
            <div>
              <p className="cs-eyebrow">Keep exploring</p>
              <h2>Another perspective.</h2>
            </div>
            <Link href="/case-studies">
              <ArrowLeft size={16} aria-hidden="true" /> All case studies
            </Link>
          </div>
          <div className="cs-related-grid">
            {related.map((item) => (
              <StudyCard key={item.slug} study={item} />
            ))}
            <div className="cs-cta">
              <p className="cs-eyebrow">Your next chapter</p>
              <h3>
                A story worth
                <br />
                putting into
                <br />
                <em>the world.</em>
              </h3>
              <ContactModalLink href="/contact-us">
                Let’s discuss your story{" "}
                <ArrowUpRight size={20} aria-hidden="true" />
              </ContactModalLink>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
