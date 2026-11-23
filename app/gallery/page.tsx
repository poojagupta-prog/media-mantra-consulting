import type { Metadata } from "next";
import { galleryItems, galleryVideos } from "@/components/media/gallery-data";
import { GalleryGrid } from "@/components/media/gallery-grid";
import { Closing, Label, TextLink } from "@/components/media/shared";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the Media Mantra gallery: events, team moments and conversations behind the scenes.",
};
export default function Gallery() {
  return (
    <div className="media-page">
      <section className="media-wrap gallery-hero">
        <Label>The visual notebook / Gallery</Label>
        <h1>
          Life between
          <br />
          <em>the headlines.</em>
          <span aria-hidden="true">↗</span>
        </h1>
        <div className="gallery-intro">
          <p>The places, people and perspectives that inspire a story.</p>
          <p className="media-copy">
            Events, team moments and conversations from the Media Mantra
            gallery. Explore an image for its caption and context.
          </p>
        </div>
      </section>
      <section
        className="media-wrap gallery-section"
        aria-label="Media gallery"
      >
        <GalleryGrid items={galleryItems} />
      </section>
      <section
        className="media-wrap gallery-videos"
        aria-labelledby="gallery-videos-title"
      >
        <div className="media-heading">
          <div>
            <h2 id="gallery-videos-title">
              Moments that <em>move us.</em>
            </h2>
          </div>
          <p className="media-copy">
            A closer look at life at Media Mantra. Press play and step into
            the story.
          </p>
        </div>
        <GalleryGrid items={galleryVideos} compact />
      </section>
      <section className="media-wrap gallery-related">
        <div>
          <Label>Keep exploring</Label>
          <h2>
            Behind every frame,
            <br />
            <em>another story.</em>
          </h2>
        </div>
        <div>
          <TextLink href="/case-studies">
            Explore our projects
          </TextLink>
          <TextLink href="/news-room">
            Read the original press coverage
          </TextLink>
          <TextLink href="/podcasts">Discover Pure Reality With Udit</TextLink>
        </div>
      </section>
      <Closing title="Picture your next story here." />
    </div>
  );
}
