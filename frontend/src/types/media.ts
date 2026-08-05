export type MediaAsset = {
  id: number;
  url: string;
  altText: string;
  caption?: string;
  width?: number | null;
  height?: number | null;
  mimeType?: string;
  fileSize?: number;
};
