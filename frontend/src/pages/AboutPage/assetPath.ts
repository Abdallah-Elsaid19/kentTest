const basePath = __BASE_PATH__.endsWith("/") ? __BASE_PATH__ : `${__BASE_PATH__}/`;

export function ourStoryAsset(path: string) {
  return `${basePath}our-story/assets/${path.replace(/^\/+/, "")}`;
}
