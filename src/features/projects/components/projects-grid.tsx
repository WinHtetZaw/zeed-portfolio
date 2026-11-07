import ProjectCard from "@/features/projects/components/project-card";
import { projects } from "@/features/projects/data/projects";

import Section from "@/components/ui/section";

export default function ProjectsGrid() {
  if (projects.length === 0) {
    return (
      <Section className="pt-0">
        <div className="rounded-2xl border border-border bg-surface/50 px-6 py-16 text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            No projects yet
          </h2>

          <p className="mt-2 text-sm text-foreground-secondary">
            I'm working on some interesting projects. Check back soon.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section className="pt-0">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
