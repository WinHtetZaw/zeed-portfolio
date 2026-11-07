import { projects } from "@/features/projects/data/projects";

import Section from "@/components/ui/section";

export default function ProjectsHeader() {
  return (
    <Section className="pb-12 sm:pb-16">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent" />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            My work
          </span>
        </div>

        <div className="max-w-3xl space-y-5">
          <h1 className="text-(length:--text-display) font-semibold leading-[1.05] tracking-tight">
            Things I've
            <span className="text-accent"> built.</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary sm:text-lg">
            A collection of projects exploring frontend development, modern web
            technologies, and thoughtful engineering.
          </p>
        </div>

        <div className="flex items-center gap-3 border-t border-border-subtle pt-6">
          <span className="font-mono text-sm text-foreground">
            {String(projects.length).padStart(2, "0")}
          </span>

          <span className="text-sm text-foreground-muted">
            {projects.length === 1 ? "Project" : "Projects"} in the collection
          </span>
        </div>
      </div>
    </Section>
  );
}
