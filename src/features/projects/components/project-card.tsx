import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Project } from "@/features/projects/data/projects";
import { GitHub } from "../../../components/ui/github-icon";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 transition-colors duration-200 hover:border-accent/40 hover:bg-surface">
      {/* Project preview */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="relative block aspect-video overflow-hidden bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
      >
        {project.image.src ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
              Project preview
            </span>
          </div>
        )}

        <div className="absolute right-4 top-4">
          <span className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-foreground-secondary backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </Link>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-foreground-muted">
            {project.status}
          </span>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Case study
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <h2 className="mb-2 text-xl font-semibold tracking-tight">
          {project.title}
        </h2>

        <p className="mb-6 text-sm leading-relaxed text-foreground-secondary">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-border-subtle bg-surface-elevated px-2.5 py-1 text-xs text-foreground-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* External links */}
        {(project.links.github || project.links.liveDemo) && (
          <div className="mt-auto flex items-center gap-4 border-t border-border-subtle pt-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <GitHub className="size-4" />
                GitHub
              </a>
            )}

            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ExternalLink size={15} />
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
