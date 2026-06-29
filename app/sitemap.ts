import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://the-heritage.org";
  const routes = [
    "",
    "/about",
    "/contact",
    "/donate",
    "/admin",
    "/gallery",
    "/privacy",
    "/terms",
    "/scientific-data",
    "/disclosures",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
