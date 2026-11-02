import type { Metadata } from "next";
import { Mic2, ArrowUpRight, Play } from "lucide-react";
import { EpisodeList } from "@/components/media/episode-list";
import {
  Heading,
  Label,
  MediaImage,
  RelatedNews,
} from "@/components/media/shared";
import catalogue from "@/data/podcasts.json";

export const metadata: Metadata = {
  title: "Podcasts | Pure Reality With Udit",
  description:
    "Watch every video from Pure Reality With Udit. Candid conversations about life, business, leadership and the untold chapters behind success.",
  openGraph: {
    title: "Pure Reality With Udit | Podcasts",
    description:
      "Real people. Real stories. Explore the full Pure Reality video collection.",
    type: "website",
    images: [
      { url: catalogue.videos[0].thumbnail, alt: catalogue.videos[0].title },
    ],
  },
};
function ChannelButton() {
  return (
    <a
      className="youtube-channel-button"
      href={catalogue.channelUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Play size={21} aria-hidden="true" />
      Visit YouTube Channel
      <ArrowUpRight size={18} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export default function Podcasts() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pure Reality With Udit — videos",
    numberOfItems: catalogue.videos.length,
    itemListElement: catalogue.videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: video.title,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      image: video.thumbnail,
    })),
  };
  return (
    <div className="media-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section className="podcast-hero">
        <div className="media-wrap media-split">
          <div>
            <Label>On the record / Pure Reality With Udit</Label>
            <h1>
              Real people.
              <br />
              Real stories.
              <br />
              <em>Pure Reality.</em>
            </h1>
            <p className="media-copy">
              Behind every success story are chapters you haven’t heard. Join
              Udit and his guests for candid conversations about life, business
              and everything in between.
            </p>
            <div className="podcast-hero-actions">
              <ChannelButton />
              <a className="media-link" href="#episodes">
                Explore all episodes ↓
              </a>
            </div>
          </div>
          <div className="podcast-cover">
            <div className="podcast-art">
              <MediaImage
                src="/images/newsroom/story-6.jpg"
                alt="Pure Reality With Udit podcast artwork"
                preload
              />
            </div>
            <div className="podcast-cover-foot">
              <Mic2 size={28} aria-hidden="true" />
              <span>
                Pure Reality With Udit
                <br />
                <small>Conversations beyond the headlines</small>
              </span>
              <span className="sound-bars" aria-hidden="true">
                ▂▅▃▇▅▂▆▃
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="episodes" className="media-wrap media-section">
        <Heading
          label={`The listening room / ${catalogue.videos.length} videos`}
          title="Make room for"
          accent="perspective."
        >
          The complete video collection from @PRwithUdit. Choose a conversation
          and press Play to watch here, or open the original on YouTube.
        </Heading>
        <div className="podcast-library-meta">
          <span>Latest first · Original YouTube titles</span>
          <span>Pause. Reflect. Pick up a new perspective.</span>
        </div>
        <EpisodeList />
      </section>
      <RelatedNews podcast />
      <section className="media-closing">
        <div className="media-wrap">
          <Label>Keep the conversation going</Label>
          <h2>
            Your next perspective
            <br />
            is a conversation away.
          </h2>
          <p>
            Subscribe to Pure Reality on YouTube for new episodes and more
            stories from Udit and his guests.
          </p>
          <ChannelButton />
        </div>
      </section>
    </div>
  );
}
