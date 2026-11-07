import AboutCTA from "@/features/about/components/about-cta";
import AboutHero from "@/features/about/components/about-hero";
import DevelopmentJourney from "@/features/about/components/development-journey";
import DevelopmentPhilosophy from "@/features/about/components/development-philosophy";
import SkillsSection from "@/features/about/components/skills-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my journey as a frontend developer, the technologies I work with, and my approach to building web applications.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <DevelopmentJourney />
      <SkillsSection />
      <DevelopmentPhilosophy />
      <AboutCTA />
    </>
  );
}
