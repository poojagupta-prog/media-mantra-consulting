import type { Metadata } from "next";
import { ArrowDown, Award } from "lucide-react";
import { BrandStar } from "@/components/ui/brand-star";
import { awardGroups, featuredAward } from "@/components/media/content";
import {
  Closing,
  Heading,
  Label,
  MediaImage,
  RelatedNews,
} from "@/components/media/shared";
export const metadata: Metadata = {
  title: "Awards & Recognition",
  description:
    "Explore Media Mantra’s awards and industry recognition, including Udit Pathak’s PR agency Head of the Year 2026 honour.",
};
export default function Awards() {
  return (
    <div className="media-page">
      <section className="awards-hero">
        <div className="media-wrap awards-hero-layout">
          <div className="awards-hero-copy">
            <Label>Awards & recognition</Label>
            <h1>
              Good work.
              <br />
              <em>Lasting resonance.</em>
            </h1>
            <p className="media-copy">
              Recognition means more when there is a meaningful story behind it.
            </p>
            <a className="media-link" href="#recognition">
              Explore recognition <ArrowDown size={16} aria-hidden="true" />
            </a>
            <span className="media-status">
              28 honours · Founder & industry recognition
            </span>
          </div>
          <div className="awards-hero-art" aria-hidden="true">
            <div className="award-orbit">
              <Award strokeWidth={0.8} />
            </div>
            <span className="awards-hero-art-note">
              Ideas. Impact. Resonance.
            </span>
          </div>
        </div>
      </section>
      <section className="recognition-intro">
        <div className="media-wrap media-split">
          <Label>The standard we aspire to</Label>
          <h2>
            Thoughtful strategy.
            <br />
            Distinctive creativity.
            <br />
            <em>Meaningful impact.</em>
          </h2>
        </div>
      </section>
      <section
        id="recognition"
        className="media-wrap media-section awards-recognition"
      >
        <Heading
          label="Featured recognition"
          title="Every honour has"
          accent="a story."
        >
          Celebrating the leadership, creativity and impact behind our work.
        </Heading>
        {[featuredAward].map((a) => (
          <article key={a.name} className="award-feature">
            <div className="award-mark">
              {a.image ? (
                <MediaImage
                  src={a.image}
                  alt={a.name}
                  className="object-[50%_30%]"
                />
              ) : (
                <Award size={100} strokeWidth={0.8} aria-hidden="true" />
              )}
            </div>
            <div>
              <Label>Featured award · {a.recipient}</Label>
              <h3>{a.name}</h3>
              <p className="media-copy">{a.description}</p>
              <dl className="award-details">
                <div>
                  <dt>Organisation</dt>
                  <dd>{a.organization}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{a.category}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{a.year}</dd>
                </div>
              </dl>
              <a
                className="media-link"
                href={a.announcement}
                target="_blank"
                rel="noopener noreferrer"
              >
                View announcement
              </a>
            </div>
          </article>
        ))}
      </section>
      <section className="awards-collection" aria-labelledby="honours-title">
        <div className="media-wrap">
          <div className="honours-heading">
            <div>
              <Label>The recognition collection</Label>
              <h2 id="honours-title">
                Made of ambition.
                <br />
                <em>Marked by excellence.</em>
              </h2>
            </div>
            <p>
              Individual vision. Collective brilliance. A collection of the
              moments that recognise both.
            </p>
          </div>
          <nav className="honours-nav" aria-label="Award categories">
            {awardGroups.map((group, index) => (
              <a href={`#honours-${index}`} key={group.name}>
                <span>0{index + 1}</span>
                {group.name.replace(" Awards", "")}
                <ArrowDown size={14} aria-hidden="true" />
              </a>
            ))}
          </nav>
          {awardGroups.map((group, index) => (
            <section
              className={`honours-group honours-group-${index}`}
              id={`honours-${index}`}
              key={group.name}
              aria-labelledby={`honours-label-${index}`}
            >
              <header className="honours-category">
                <div className="honours-category-top">
                  <h3 id={`honours-label-${index}`}>
                    {group.name.replace(" Awards", "")}
                    <em>
                      {index === 2
                        ? "Agency recognition"
                        : "Leadership honours"}
                    </em>
                  </h3>
                  <Award size={24} strokeWidth={1.2} aria-hidden="true" />
                </div>
                <p>{group.description}</p>
                <div className="honours-count">
                  <strong>
                    {String(group.honours.length).padStart(2, "0")}
                  </strong>
                  <span>
                    honours &<br />
                    milestones
                  </span>
                </div>
                <BrandStar
                  className="honours-category-star"
                  aria-hidden="true"
                />
              </header>
              <ul className="honours-grid">
                {group.honours.map((honour, awardIndex) => {
                  const [title, ...details] = honour.split(" — ");
                  const years = [
                    ...new Set(honour.match(/\b(?:19|20)\d{2}\b/g) ?? []),
                  ];
                  return (
                    <li className="honour-card" key={honour}>
                      <div className="honour-card-top">
                        <span className="honour-index">
                          {String(awardIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="honour-year">
                          {years.length ? years.join(" / ") : "Recognition"}
                        </span>
                      </div>
                      <div className="honour-card-copy">
                        <h4>{title}</h4>
                        {details.length > 0 && <p>{details.join(" — ")}</p>}
                      </div>
                      <BrandStar
                        className="honour-card-star"
                        aria-hidden="true"
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>
      <RelatedNews label="Recognition in the press" />
      <Closing title="Let’s create work worth talking about." />
    </div>
  );
}
