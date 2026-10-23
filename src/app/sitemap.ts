import type { MetadataRoute } from "next";

const siteUrl = "https://surhires.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/jobs`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/employers`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}
