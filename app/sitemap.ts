import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site-metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/work",
    ...projects.map((project) => `/work/${project.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
