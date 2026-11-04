import type { Metadata } from "next";
import { Award } from "lucide-react";
import { awards } from "@/components/media/content";
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
    "A home for verified awards, recognition and the stories behind the work. Award records are awaiting confirmation.",
};
export default function Awards() {
  const years = [...new Set(awards.map((a) => a.year))].sort(
    (a, b) => (b ?? 0) - (a ?? 0),
  );
  return (
    <div className="media-page">
      <section className="awards-hero media-wrap">
        <Label>Awards & recognition</Label>
        <div className="award-orbit" aria-hidden="true">
          <Award strokeWidth={0.7} />
        </div>
        <h1>
          Good work.
          <br />
          <em>Lasting resonance.</em>
        </h1>
        <p>
          Recognition means more when there is a meaningful story behind it.
        </p>
        <span className="media-status">
          Recognition archive · Awaiting verified records
        </span>
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
      <section className="media-wrap media-section">
        <Heading
          label="Featured recognition"
          title="Every honour has"
          accent="a story."
        >
          This archive is prepared for confirmed achievements. No awards,
          awarding bodies or results are claimed in these previews.
        </Heading>
        {awards.map((a) => (
          <article key={a.id} className="award-feature">
            <div className="award-mark">
              {a.image ? (
                <MediaImage src={a.image} alt={a.name} />
              ) : (
                <Award size={100} strokeWidth={0.8} aria-hidden="true" />
              )}
              <span>Awaiting official award imagery</span>
            </div>
            <div>
              <Label>{a.status}</Label>
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
                  <dd>{a.year ?? "To be confirmed"}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>
      <section className="media-wrap awards-timeline">
        <Heading
          label="Through the years"
          title="A record of"
          accent="recognition."
        />
        {years.map((year) => (
          <div className="timeline-row" key={year ?? "pending"}>
            <h3>{year ?? "Year pending"}</h3>
            <div>
              {awards
                .filter((a) => a.year === year)
                .map((a) => (
                  <div key={a.id}>
                    <h4>{a.name}</h4>
                    <p>
                      {a.status} · {a.organization}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
      <RelatedNews label="Recognition in the press" />
      <Closing title="Let’s create work worth talking about." />
    </div>
  );
}
