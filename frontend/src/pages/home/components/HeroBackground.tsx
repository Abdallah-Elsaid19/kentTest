import { useState } from "react";

export function HeroBackground({ poster, webm, mp4 }: { poster: string; webm: string; mp4: string }) {
  const [playing, setPlaying] = useState(false);

  return <>
    <img className="figma-hero__video-poster" src={poster} alt="" aria-hidden="true" loading="eager" fetchPriority="high" />
    <video
      className={`figma-hero__background-video figma-hero__background-video--fade-in${playing ? " is-playing" : ""}`}
      autoPlay muted loop playsInline preload="auto" poster={poster}
      aria-hidden="true" tabIndex={-1}
      onLoadedMetadata={event => { event.currentTarget.playbackRate = 0.8; }}
      onPlaying={() => setPlaying(true)}
      onError={() => setPlaying(false)}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  </>;
}
