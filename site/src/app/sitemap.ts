import type { MetadataRoute } from "next";
import { PILLARS } from "@/lib/content";

export const dynamic = "force-static";

const BASE = "https://thebushgroupinc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/about/steve-bush",
    "/about/jessalynn-bush",
    "/core-eight",
    "/advisory",
    "/consulting",
    "/facilitation",
    "/contact",
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${BASE}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...PILLARS.map((p) => ({
      url: `${BASE}/core-eight/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
