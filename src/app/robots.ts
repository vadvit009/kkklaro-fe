import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // TODO: switch to allow: "/" when ready for production indexing
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
      // allow: "/",
    },
    // sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
