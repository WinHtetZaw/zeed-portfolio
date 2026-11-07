import AboutPreview from "@/features/home/components/about-preview";
import { DevelopmentApproach } from "@/features/home/components/development-approach";
import { HeroSection } from "@/features/home/components/hero-section";
import { SelectedProjects } from "@/features/home/components/selected-projects";
import TechStack from "@/features/home/components/tech-stack";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SelectedProjects />

      <AboutPreview />

      <TechStack />

      <DevelopmentApproach />
    </>
  );
}
