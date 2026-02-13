import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/contacts"];

  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${BASE_URL}${page}`,
        uk: `${BASE_URL}/uk${page}`,
      },
    },
  }));
}
