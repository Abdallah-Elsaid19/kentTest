import { Helmet } from "react-helmet-async";

import { environment } from "@/app/environment";
import type { SEO } from "@/types/seo";

export function RouteMeta({ seo, fallbackTitle, fallbackDescription = "" }: { seo?: SEO; fallbackTitle: string; fallbackDescription?: string }) {
  const title = seo?.title || fallbackTitle;
  const description = seo?.description || fallbackDescription;
  const canonical = seo?.canonical || `${environment.VITE_SITE_URL}${window.location.pathname}`;
  const socialImage = seo?.openGraph?.image?.url || `${environment.VITE_SITE_URL}/og-kent-business-college.png`;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={seo?.robots || "index,follow"} />
      <meta property="og:title" content={seo?.openGraph?.title || title} />
      {description && <meta property="og:description" content={seo?.openGraph?.description || description} />}
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo?.openGraph?.image?.altText || "Kent Business College"} />
      <meta name="twitter:card" content={seo?.twitterCard || "summary_large_image"} />
      <meta name="twitter:image" content={socialImage} />
      {(seo?.schema || []).map((schema, index) => <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>)}
    </Helmet>
  );
}
