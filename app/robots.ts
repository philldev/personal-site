import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: `${siteUrl}/sitemap.xml`,
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}
