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

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mediamantraconsulting.com";

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
  const url = new URL(`/case-studies/${slug}`, siteOrigin).toString();
  return {
    title: story.seoTitle,
    description: study.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: story.seoTitle,
      description: study.description,
      url,
      images: [
        {
          url: new URL(story.heroImage.src, siteOrigin).toString(),
          alt: story.heroImage.alt,
          width: story.heroImage.width,
          height: story.heroImage.height,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: story.seoTitle,
      description: study.description,
      images: [new URL(story.heroImage.src, siteOrigin).toString()],
    },
  };
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
  const url = new URL(`/case-studies/${slug}`, siteOrigin).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: story.seoTitle,
        description: study.description,
        image: new URL(story.heroImage.src, siteOrigin).toString(),
        mainEntityOfPage: url,
        inLanguage: "en",
        about: {
          "@type": study.scope ? "Thing" : "Organization",
          name:
            study.scope === "sector-portfolio"
              ? "UAE real estate communications"
              : study.brand,
        },
        author: {
          "@type": "Organization",
          name: "Media Mantra Consulting",
          url: siteOrigin,
        },
        articleSection: study.sector,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case studies",
            item: new URL("/case-studies", siteOrigin).toString(),
          },
          { "@type": "ListItem", position: 3, name: study.brand, item: url },
        ],
      },
    ],
  };
  return (
    <article className={`cs-story cs-${story.theme}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
              <ContactModalLink href="/contact">
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
