import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "9rtm.com",
    short_name: "9rtm",
    description: "9rotama home page",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
    ],
  };
}
