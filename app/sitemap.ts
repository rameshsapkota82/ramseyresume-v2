import type { MetadataRoute } from "next";
import { sitePages } from "@/content/page-registry";
import { siteConfig } from "@/lib/site";

function priorityFor(page: (typeof sitePages)[number]): number {
  if (page.status !== "production") return 0.5;
  if (page.eyebrow === "Legal") return 0.3;
  if (page.eyebrow === "Local SEO" || page.eyebrow === "National SEO" || page.eyebrow === "Specialist Resume Services") {
    return 0.9;
  }
  if (page.eyebrow === "Industries") return 0.8;
  return 0.6;
}

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
      priority: priorityFor(page),
    })),
  ];
}
