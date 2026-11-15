import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hannah · German lessons in Abu Dhabi and online",
    short_name: "Hannah German",
    description: "Private German lessons in Abu Dhabi or online with a native speaker from Austria.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#2f5fd0",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
