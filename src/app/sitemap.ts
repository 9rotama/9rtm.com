import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://9rtm.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: "https://9rtm.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: "https://9rtm.com/works",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
