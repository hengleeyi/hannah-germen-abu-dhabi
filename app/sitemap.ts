import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: "2026-11-15",
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/hannah.webp`],
    },
  ];
}
