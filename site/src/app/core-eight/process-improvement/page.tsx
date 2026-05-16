import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { PILLARS } from "@/lib/content";

const PILLAR = PILLARS.find((p) => p.slug === "process-improvement")!;

export const metadata: Metadata = {
  title: PILLAR.meta.title,
  description: PILLAR.meta.description,
  alternates: { canonical: "/core-eight/process-improvement" },
};

export default function Page() {
  return <PillarPage pillar={PILLAR} />;
}
