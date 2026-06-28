import type { MetadataRoute } from "next";
import { sitePages } from "@/content/page-registry";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sitePages.map((page) => ({
      url: `${siteConfig.url}/${page.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.status === "production" ? 0.9 : 0.5,
    })),
  ];
}
