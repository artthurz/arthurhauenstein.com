import type { MetadataRoute } from "next";

const BASE_URL = "https://arthurhauenstein.com";
const locales = ["en", "pt", "es"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
  }));
}
