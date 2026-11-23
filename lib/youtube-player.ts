/** The small subset of the official IFrame Player API used by the page. */
export type YouTubePlayer = {
  playVideo(): void;
  pauseVideo(): void;
  destroy(): void;
  getIframe(): HTMLIFrameElement;
};
type PlayerEvent = { target: YouTubePlayer; data: number };
export type YouTubeAPI = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      host: string;
      width: string;
      height: string;
      playerVars: Record<string, string | number>;
      events: {
        onReady: (event: PlayerEvent) => void;
        onStateChange: (event: PlayerEvent) => void;
        onError: (event: PlayerEvent) => void;
      };
    },
  ) => YouTubePlayer;
};
declare global {
  interface Window {
    YT?: YouTubeAPI;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YouTubeAPI> | undefined;
/** One script request for the entire app, deferred until a Play click. */
export function loadYouTubeAPI(): Promise<YouTubeAPI> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    const script = document.createElement("script");
    const finish = () => {
      if (!window.YT?.Player) return;
      clearTimeout(timeout);
      window.onYouTubeIframeAPIReady = previous;
      resolve(window.YT);
      previous?.();
    };
    const fail = () => {
      clearTimeout(timeout);
      script.remove();
      window.onYouTubeIframeAPIReady = previous;
      apiPromise = undefined;
      reject(
        new Error(
          "YouTube could not be loaded. Please retry or watch on YouTube.",
        ),
      );
    };
    const timeout = window.setTimeout(fail, 15000);
    window.onYouTubeIframeAPIReady = finish;
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = fail;
    document.head.append(script);
  });
  return apiPromise;
}

let playing: YouTubePlayer | undefined;
export function claimPlayback(player: YouTubePlayer) {
  if (playing && playing !== player) playing.pauseVideo();
  playing = player;
}
export function releasePlayback(player: YouTubePlayer) {
  if (playing === player) playing = undefined;
}
