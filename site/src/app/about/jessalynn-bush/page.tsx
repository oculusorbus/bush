import type { Metadata } from "next";
import { BioLayout } from "@/components/BioLayout";

export const metadata: Metadata = {
  title: "Jessalynn Bush, VP Operations",
  description:
    "Jessalynn Bush — co-founder and Operations Director of The Bush Group. Two decades of experience in health, wellness, coaching, and organizational performance.",
  alternates: { canonical: "/about/jessalynn-bush" },
};

export default function JessalynnBushPage() {
  return (
    <BioLayout
      name="Jessalynn Bush"
      role="Founder · VP Operations"
      image="/headshots/jessalynn-bush-portrait.jpg"
      imageAlt="Jessalynn Bush"
      education={["BS Kinesiology", "MA Exercise Physiology"]}
      certifications={[
        "Certified Strength and Conditioning Coach",
        "Certified Project Manager (PMP)",
        "Executive coaching experience with global Fortune 500 companies",
      ]}
      bio={[
        "Jessalynn brings more than two decades of experience in health, wellness, coaching, and organizational performance. Her career spans university instruction, executive coaching for global Fortune 500 companies, and leadership roles in corporate marketing and engagement strategy.",
        "As co-founder and Operations Director of The Bush Group, Jessalynn oversees day-to-day business operations, client experience, and strategic planning.",
        "Jessalynn lives in Northern California with her husband Steve. They have five children and three grandchildren between them. She enjoys working out, being outdoors, and lake living.",
      ]}
    />
  );
}
