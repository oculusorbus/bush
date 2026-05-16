import type { Metadata } from "next";
import { BioLayout } from "@/components/BioLayout";

export const metadata: Metadata = {
  title: "Steve Bush, CEO",
  description:
    "Steve Bush — co-founder of The Bush Group. Certified Master Facilitator, Prosci Master Instructor, Lean Six Sigma Master Black Belt, PMP, former Fortune 100 executive.",
  alternates: { canonical: "/about/steve-bush" },
};

export default function SteveBushPage() {
  return (
    <BioLayout
      name="Steve Bush"
      role="Founder · CEO"
      image="/headshots/steve-bush-portrait.jpg"
      imageAlt="Steve Bush"
      education={["B.A. Philosophy"]}
      certifications={[
        "Certified Master Facilitator (CMF)",
        "Certified Kaizen Facilitator",
        "Certified Project Manager (PMP)",
        "Lean Six Sigma, Master Black Belt",
        "Prosci Master Instructor, Change Management",
        "U.S. National Champion in Speech",
        "Nationally Ranked in Collegiate Debate",
      ]}
      bio={[
        "Steve Bush is co-founder of The Bush Group, which consists of Bush Group Facilitation and Bush Group Consulting, specializing in change management. He is a former executive with over thirty years experience at several Fortune 100 companies.",
        "As a Certified Master Facilitator™ (CMF) and experienced performance coach, Steve leads fast-paced meetings that engage teams, reach solid decisions, inspire action, and get results. His unique style and approach help leaders achieve their desired objectives while building team unity and camaraderie at the same time. He is also a Prosci Master Instructor in change management practice.",
        "In addition to being a Certified Master Facilitator, Steve leads Bush Group Consulting, which provides change management strategy and consulting services to its clients. Steve is also a professional keynote and international conference speaker.",
        "Steve lives in Northern California with his wife Jessalynn. They have five children between them, and one granddaughter. For fun, he enjoys riding motorcycles, reading history, and live music.",
      ]}
    />
  );
}
