import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/features/projects/data/projects";

import ProjectPreview from "./project-preview";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";

export function SelectedProjects() {
  return (
    <Section id="work">
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've been building."
          description="A selection of projects where I explore modern frontend development, thoughtful interfaces, and practical engineering."
        />

        <div className="grid gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="group grid gap-6 rounded-2xl border border-border bg-surface/50 p-4 transition-colors duration-300 hover:border-white/15 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-10"
            >
              {/* Project visual */}
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title} case study`}
                className="block overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                  <ProjectPreview
                    title={project.title}
                    category={project.category}
                  />
                </div>
              </Link>

              {/* Project details */}
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground-secondary">
                    {project.category}
                  </span>

                  <span className="text-xs text-foreground-muted">
                    {project.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-relaxed text-foreground-secondary sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-surface-elevated px-2.5 py-1.5 text-xs text-foreground-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Case study link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Explore case study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
