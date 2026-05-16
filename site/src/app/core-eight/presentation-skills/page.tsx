import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { PILLARS } from "@/lib/content";

const PILLAR = PILLARS.find((p) => p.slug === "presentation-skills")!;

export const metadata: Metadata = {
  title: PILLAR.meta.title,
  description: PILLAR.meta.description,
  alternates: { canonical: "/core-eight/presentation-skills" },
};

export default function Page() {
  return <PillarPage pillar={PILLAR} />;
}
