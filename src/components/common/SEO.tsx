import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noIndex?: boolean;
}

export default function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "https://kentbusinesscollege.com/og-image.jpg",
  ogType = "website",
  canonical,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    if (description) {
      setMeta("description", description);
    }

    setMeta("og:title", ogTitle || title, true);
    if (ogDescription || description) {
      setMeta("og:description", ogDescription || description || "", true);
    }
    setMeta("og:image", ogImage, true);
    setMeta("og:type", ogType, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ogTitle || title);
    if (ogDescription || description) {
      setMeta("twitter:description", ogDescription || description || "");
    }
    setMeta("twitter:image", ogImage);

    if (noIndex) {
      setMeta("robots", "noindex, nofollow");
    } else {
      setMeta("robots", "index, follow");
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogType, canonical, noIndex]);

  return null;
}