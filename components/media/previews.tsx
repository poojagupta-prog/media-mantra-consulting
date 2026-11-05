import { Award, Quote } from "lucide-react";
import { PodcastCard } from "./episode-list";
import { featuredAward, reviews } from "./content";
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
    <section
      className="recognition-preview"
      aria-labelledby="recognition-preview-title"
    >
      <div className="media-wrap">
        <figure className="recognition-preview-photo">
          <MediaImage
            src={featuredAward.image}
            alt={`${featuredAward.recipient} receiving the ${featuredAward.name} by ${featuredAward.organization}`}
            className="object-[50%_30%]"
          />
          <figcaption>
            <Award size={20} strokeWidth={1.25} aria-hidden="true" />
            <span>
              {featuredAward.organization} · {featuredAward.year}
            </span>
          </figcaption>
        </figure>
        <div className="recognition-preview-copy">
          <div className="recognition-preview-eyebrow">
            <Label>Awards & recognition</Label>
            <span>Featured honour / {featuredAward.year}</span>
          </div>
          <h2 id="recognition-preview-title">
            Work that leaves <em>an impression.</em>
          </h2>
          <div className="recognition-preview-award">
            <h3>{featuredAward.name}</h3>
            <p className="recognition-preview-organisation">
              By {featuredAward.organization}
            </p>
            <p className="recognition-preview-category">
              {featuredAward.category}
            </p>
          </div>
          <p className="recognition-preview-description">
            {featuredAward.description}.
          </p>
          <div className="recognition-preview-footer">
            <span>
              {featuredAward.recipient}
              <small>Award recipient</small>
            </span>
            <TextLink href="/awards#recognition">Explore recognition</TextLink>
          </div>
        </div>
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
            <Label>
              {item.category} / {item.title}
            </Label>
          </a>
        ))}
      </div>
      <TextLink href="/gallery">Open the gallery</TextLink>
    </section>
  );
}
export function TestimonialPreview() {
  return (
    <section
      className="media-wrap testimonial-preview"
      aria-label="Client testimonials"
    >
      <Heading
        label="Client voices"
        title="Good stories."
        accent="Lasting partnerships."
      >
        A few words from the brands we work with.
      </Heading>
      <div
        className="testimonial-carousel"
        tabIndex={0}
        role="region"
        aria-label="Client reviews. Hover or focus to pause scrolling."
      >
        <div className="testimonial-track">
          {[false, true].map((isDuplicate) => (
            <div
              key={String(isDuplicate)}
              className="testimonial-group"
              aria-hidden={isDuplicate || undefined}
            >
              {reviews.map((review) => (
                <figure key={review.id} className="testimonial-card">
                  <Quote size={24} strokeWidth={1.25} aria-hidden="true" />
                  <blockquote>“{review.quote}”</blockquote>
                  <figcaption>
                    <strong>{review.clientName}</strong>
                    <span>{review.designation}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-footer">
        <Label>Your next chapter starts with a conversation</Label>
        <TextLink href="/contact">Let’s tell your story</TextLink>
      </div>
    </section>
  );
}
