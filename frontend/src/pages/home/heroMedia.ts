const bundledHeroMedia = new Set([
  "/assets/video/home-hero.webm",
  "/assets/video/home-hero.mp4",
  "/assets/images/figma-home/hero-group.png",
]);

// The CMS still chooses the URLs. Version only the bundled files so a new
// deployment can replace them without reusing an older browser-cached video.
export function versionHeroMedia(source: string): string {
  if (!bundledHeroMedia.has(source.split(/[?#]/, 1)[0])) return source;
  const url = new URL(source, "https://kbc.invalid");
  url.searchParams.set("v", __HOME_HERO_MEDIA_VERSION__);
  return `${url.pathname}${url.search}${url.hash}`;
}
