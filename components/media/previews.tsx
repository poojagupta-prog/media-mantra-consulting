import { Award, Quote } from "lucide-react";
import { PodcastCard } from "./episode-list";
import { testimonials } from "./content";
import { galleryItems } from "./gallery-data";
import catalogue from "@/data/podcasts.json";
import { Heading, Label, MediaImage, TextLink } from "./shared";
export function PodcastPreview({ compact = false }: { compact?: boolean }) {
  return (
    <section className="media-wrap media-section">
      <Heading
        label="The listening room"
        title="A little less noise."
        accent="A little more meaning."
      >
        Discover Pure Reality With Udit. Candid conversations about life,
        business and the journeys behind the headlines.
      </Heading>
      {!compact && (
        <div className="media-three">
          {catalogue.videos.slice(0, 2).map((e) => (
            <PodcastCard key={e.id} video={e} />
          ))}
          <div className="podcast-preview-note">
            <Label>Conversations with perspective</Label>
            <h3>
              Take a seat.
              <br />
              Stay curious.
            </h3>
            <p>
              Explore the full collection of conversations, with original videos
              from Pure Reality on YouTube.
            </p>
            <TextLink href="/podcasts">Enter the listening room</TextLink>
          </div>
        </div>
      )}
      {compact && <TextLink href="/podcasts">Explore podcasts</TextLink>}
    </section>
  );
}
export function RecognitionPreview() {
  return (
    <section className="recognition-preview">
      <div className="media-wrap">
        <Award size={44} strokeWidth={1} />
        <div>
          <Label>Awards & recognition</Label>
          <h2>
            Work that leaves <em>an impression.</em>
          </h2>
          <p>
            Our recognition archive is taking shape. Verified award records are
            awaiting confirmation.
          </p>
        </div>
        <TextLink href="/awards">Explore recognition</TextLink>
      </div>
    </section>
  );
}
export function GalleryPreview() {
  return (
    <section className="media-wrap media-section">
      <Heading
        label="The visual notebook"
        title="More than"
        accent="a moment."
      />
      <div className="gallery-preview">
        {galleryItems.slice(0, 3).map((item) => (
          <a key={item.id} href="/gallery" className="group">
            <div className="media-picture">
              <MediaImage
                src={item.image}
                alt={item.alt}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Label>{item.category} / {item.title}</Label>
          </a>
        ))}
      </div>
      <TextLink href="/gallery">Open the gallery</TextLink>
    </section>
  );
}
export function TestimonialPreview() {
  return (
    <section className="media-wrap testimonial-preview">
      <Quote size={44} strokeWidth={1} aria-hidden="true" />
      <div>
        <Label>Client voices / Coming into focus</Label>
        {testimonials.map((t) => (
          <div key={t.title}>
            <h2>{t.title}</h2>
            <p>{t.text}</p>
            <span className="media-status">{t.attribution}</span>
          </div>
        ))}
      </div>
      <TextLink href="/contact">Share your experience</TextLink>
    </section>
  );
}
