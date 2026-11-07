import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/features/projects/data/projects";

type ProjectNavigationProps = {
  previousProject: Project | null;
  nextProject: Project | null;
};

export default function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  if (!previousProject && !nextProject) return null;

  return (
    <nav
      aria-label="Project navigation"
      className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
    >
      {previousProject ? (
        <Link
          href={`/projects/${previousProject.slug}`}
          className="group rounded-xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent/40"
        >
          <span className="flex items-center gap-2 text-xs text-foreground-muted">
            <ArrowLeft className="size-3.5" />
            Previous project
          </span>

          <span className="mt-3 block font-semibold text-foreground transition-colors group-hover:text-accent">
            {previousProject.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {nextProject ? (
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group rounded-xl border border-border bg-surface/50 p-5 text-left transition-colors hover:border-accent/40 sm:text-right"
        >
          <span className="flex items-center justify-end gap-2 text-xs text-foreground-muted">
            Next project
            <ArrowRight className="size-3.5" />
          </span>

          <span className="mt-3 block font-semibold text-foreground transition-colors group-hover:text-accent">
            {nextProject.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
