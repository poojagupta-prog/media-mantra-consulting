"use client";
import { useEffect, useRef, useState } from "react";
import {
  loadYouTubeAPI,
  claimPlayback,
  releasePlayback,
  type YouTubePlayer,
} from "@/lib/youtube-player";

export function YouTubeVideo({
  id,
  title,
  onRetry,
}: {
  id: string;
  title: string;
  onRetry: () => void;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Loading YouTube player…");
  const [error, setError] = useState(false);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let cancelled = false;
    let ready = false;
    let player: YouTubePlayer | undefined;
    let visible = false;
    let readyTimeout: ReturnType<typeof setTimeout> | undefined;
    const fail = () => {
      if (cancelled) return;
      setError(true);
      setStatus(
        "This video cannot play here. Try again or use the YouTube link below.",
      );
    };
    const pause = () => {
      if (ready) player?.pauseVideo();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        if (!visible) pause();
      },
      { threshold: [0, 0.25] },
    );
    observer.observe(element);
    const onVisibility = () => {
      if (document.hidden) pause();
    };
    document.addEventListener("visibilitychange", onVisibility);

    loadYouTubeAPI()
      .then((api) => {
        if (cancelled) return;
        const target = document.createElement("div");
        element.append(target);
        readyTimeout = setTimeout(fail, 20000);
        player = new api.Player(target, {
          videoId: id,
          host: "https://www.youtube-nocookie.com",
          width: "100%",
          height: "100%",
          playerVars: {
            origin: window.location.origin,
            playsinline: 1,
            rel: 0,
            autoplay: 0,
            enablejsapi: 1,
          },
          events: {
            onReady: ({ target: instance }) => {
              if (cancelled) return;
              clearTimeout(readyTimeout);
              ready = true;
              setError(false);
              setStatus("");
              instance.getIframe().title = title;
              instance
                .getIframe()
                .setAttribute(
                  "referrerpolicy",
                  "strict-origin-when-cross-origin",
                );
              if (visible && !document.hidden) {
                claimPlayback(instance);
                instance.playVideo();
                instance.getIframe().focus({ preventScroll: true });
              } else instance.pauseVideo();
            },
            onStateChange: ({ target: instance, data }) => {
              if (cancelled || data !== 1) return;
              if (!visible || document.hidden) instance.pauseVideo();
              else claimPlayback(instance);
            },
            onError: () => {
              clearTimeout(readyTimeout);
              pause();
              fail();
            },
          },
        });
      })
      .catch(fail);

    return () => {
      cancelled = true;
      clearTimeout(readyTimeout);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (player) {
        if (ready) player.pauseVideo();
        releasePlayback(player);
        // Destroy also stops playback when switching cards or leaving the page.
        player.destroy();
      }
      element.replaceChildren();
    };
  }, [id, title]);

  return (
    <div className="youtube-player-shell" aria-busy={!!status && !error}>
      <div ref={host} className="youtube-player-host" />
      {status && (
        <div className="youtube-player-status" role="status">
          <p>{status}</p>
          {error && (
            <button type="button" onClick={onRetry}>
              Retry player
            </button>
          )}
        </div>
      )}
    </div>
  );
}
