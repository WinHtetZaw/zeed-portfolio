import ProjectsGrid from "@/features/projects/components/projects-grid";
import ProjectsHeader from "@/features/projects/components/projects-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected projects built with React, Next.js, TypeScript, and modern web technologies.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <ProjectsGrid />
    </>
  );
}
