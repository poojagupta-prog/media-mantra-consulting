import type { Metadata } from "next";
import { photos } from "@/components/common/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import {
  Closing,
  Heading,
  Label,
  MediaImage,
  RelatedNews,
  TextLink,
} from "@/components/media/shared";
import { dubaiFocus, media } from "@/components/media/content";
import { GalleryGrid } from "@/components/media/gallery-grid";
export const metadata: Metadata = {
  title: "Dubai IT",
  description:
    "A preview of Dubai IT: technology, human stories and new possibilities. Initiative details await confirmation.",
};
export default function DubaiIT() {
  return (
    <div className="media-page">
      <section className="dubai-hero">
        <MediaImage
          src={photos.city}
          alt="Dubai skyline across the water"
          preload
        />
        <div className="dubai-shade" />
        <div className="media-wrap">
          <Reveal>
            <Label>Dubai IT / An editorial preview</Label>
            <h1>
              Tomorrow has
              <br />a <em>new address.</em>
            </h1>
            <p>
              Big ideas. Human stories. A city that invites us to imagine what
              comes next.
            </p>
            <Button href="#overview" light>
              Explore the perspective
            </Button>
          </Reveal>
          <div className="hero-foot">
            <span>Dubai · Technology · Possibility</span>
            <span>01 / A new perspective ↓</span>
          </div>
        </div>
      </section>
      <section id="overview" className="media-wrap media-section">
        <Heading
          label="01 / The initiative"
          title="Where ambition"
          accent="meets a voice."
        >
          Dubai IT is a working editorial concept for exploring technology and
          communications in Dubai. Its scope, ownership and company involvement
          are awaiting confirmation.
        </Heading>
        <p className="media-notice">
          Concept preview. No official partnership, government endorsement or
          commissioned campaign is claimed.
        </p>
        <div className="media-three focus-grid">
          {dubaiFocus.map(([n, t, d]) => (
            <Reveal key={n}>
              <Label>{n} / Focus area</Label>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="dubai-project">
        <div className="media-wrap media-split">
          <div className="project-image">
            <MediaImage
              src={photos.tech}
              alt="Glass towers photographed from below"
            />
          </div>
          <div>
            <Label>02 / Project notebook</Label>
            <h2>
              Ideas taking
              <br />
              <em>shape.</em>
            </h2>
            <p className="media-copy">
              From emerging technology to the people behind it, this space is
              designed for campaign stories with context and substance.
            </p>
            <p className="media-notice">
              Featured campaign placeholder. Brief, partners, deliverables and
              outcomes require approval.
            </p>
            <TextLink href="/#case-studies">
              Explore existing concept case studies
            </TextLink>
          </div>
        </div>
      </section>
      <section className="media-wrap media-section">
        <Heading label="03 / In the frame" title="A city in" accent="motion.">
          An illustrative visual notebook. Approved project photography and
          video will replace these reference images.
        </Heading>
        <GalleryGrid items={media.slice(0, 3)} compact />
        <TextLink href="/gallery">Explore the gallery</TextLink>
      </section>
      <section className="vision-note">
        <div className="media-wrap media-split">
          <div>
            <Label>04 / Vision & leadership</Label>
            <h2>
              Inspired by
              <br />
              <em>possibility.</em>
            </h2>
          </div>
          <div>
            <p>
              We acknowledge the role of Dubai’s leadership and communities in
              shaping the city’s aspirations. This independent editorial
              perspective does not imply affiliation or endorsement.
            </p>
            <div className="impact-note">
              <Label>Impact, with evidence</Label>
              <p>
                Verified achievements and measurable results will be published
                when supporting records are available.
              </p>
            </div>
          </div>
        </div>
      </section>
      <RelatedNews label="05 / Regional conversations" />
      <Closing
        title="Have a story for what comes next?"
        text="Let’s explore the people, ideas and possibilities behind it."
      />
    </div>
  );
}
