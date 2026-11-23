"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";
import catalogue from "@/data/podcasts.json";
import { YouTubeVideo } from "./youtube-video";

export type PodcastVideo = (typeof catalogue.videos)[number];
export function PodcastCard({ video }: { video: PodcastVideo }) {
  return (
    <article className="episode-card youtube-card">
      <Link
        href={`/podcasts#video-${video.id}`}
        className="youtube-thumbnail"
        aria-label={`Watch ${video.title}`}
      >
        <VideoThumbnail video={video} />
        <span className="youtube-play">
          <Play size={24} aria-hidden="true" />
          Watch episode
        </span>
      </Link>
      <div className="episode-body">
        <p className="media-label">Pure Reality With Udit</p>
        <h3>
          <Link href={`/podcasts#video-${video.id}`}>{video.title}</Link>
        </h3>
      </div>
    </article>
  );
}
function VideoThumbnail({ video }: { video: PodcastVideo }) {
  return (
    <>
      <Image
        src={video.thumbnail}
        alt=""
        fill
        unoptimized
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        className="object-cover"
      />
      {video.duration && (
        <span className="youtube-duration">{video.duration}</span>
      )}
    </>
  );
}
export function EpisodeList() {
  const [active, setActive] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  return (
    <div className="podcast-video-grid">
      {catalogue.videos.map((video) => (
        <article
          key={video.id}
          id={`video-${video.id}`}
          className="episode-card youtube-card"
        >
          <div className="youtube-frame">
            {active === video.id ? (
              <YouTubeVideo
                key={`${video.id}-${attempt}`}
                id={video.id}
                title={video.title}
                onRetry={() => setAttempt((n) => n + 1)}
              />
            ) : (
              <button
                type="button"
                className="youtube-thumbnail"
                onClick={() => setActive(video.id)}
                aria-label={`Play ${video.title}`}
              >
                <VideoThumbnail video={video} />
                <span className="youtube-play">
                  <Play size={24} fill="currentColor" aria-hidden="true" />
                  Play episode
                </span>
              </button>
            )}
          </div>
          <div className="episode-body">
            <p className="media-label">Pure Reality With Udit</p>
            <h3>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.title}
                <span className="sr-only">
                  {" "}
                  (opens on YouTube in a new tab)
                </span>
              </a>
            </h3>
            <a
              className="media-link"
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
