import { notFound } from "next/navigation";
import { projects } from "@/features/projects/data/projects";
import Section from "@/components/ui/section";
import { Suspense } from "react";
import { getCaseStudy } from "@/features/projects/data/case-studies";
import { CaseStudyContent } from "@/features/projects/components/case-study-content";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import CaseStudyNavigation from "@/features/projects/components/case-study-navigation";
import { GitHub } from "@/components/ui/github-icon";
import { ProjectImage } from "@/features/projects/components/project-image";
import { ProjectGallery } from "@/features/projects/components/project-gallery";
import { projectImages } from "@/features/projects/data/project-images";
import ProjectNavigation from "@/features/projects/components/project-navigation";
import { Metadata } from "next";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Zeed.dev`,
      description: project.description,
      type: "article",
      images: project.image.src ? [project.image.src] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Project Hero */}
      <Section className="pt-14 pb-12 sm:pb-16">
        <div className="flex flex-col gap-6">
          {/* Back Navigation */}
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          {/* Category and Status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground-secondary">
              {project.category}
            </span>

            <span className="text-xs text-foreground-muted">
              {project.status}
            </span>
          </div>

          {/* Title and Description */}
          <div className="max-w-3xl space-y-5">
            <h1 className="text-(length:--text-display) font-semibold leading-[1.05] tracking-tight">
              {project.title}
              <span className="text-accent">.</span>
            </h1>

            <p className="text-lg leading-relaxed text-foreground-secondary">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-border-subtle bg-surface-elevated px-3 py-1.5 text-xs text-foreground-muted"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* External Project Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm transition-colors hover:bg-white/5"
              >
                <GitHub className="size-4" />
                GitHub
                <ExternalLink size={14} />
              </a>
            )}

            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-600"
              >
                Live demo
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </Section>

      {/* <Section className="pt-0">
        <div className="space-y-12">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-elevated">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-sm uppercase tracking-widest text-foreground-muted">
                Project screenshots coming soon
              </span>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_280px]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                Project overview
              </h2>

              <p className="leading-relaxed text-foreground-secondary">
                {project.longDescription}
              </p>
            </div>

            <aside className="h-fit rounded-xl border border-border bg-surface/50 p-5">
              <h2 className="mb-4 text-sm font-semibold">
                Project information
              </h2>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-foreground-muted">Category</dt>
                  <dd className="mt-1 text-foreground">{project.category}</dd>
                </div>

                <div>
                  <dt className="text-foreground-muted">Status</dt>
                  <dd className="mt-1 text-foreground">{project.status}</dd>
                </div>

                <div>
                  <dt className="text-foreground-muted">Technologies</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-surface-elevated px-2 py-1 text-xs text-foreground-secondary"
                      >
                        {technology}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">
              Key features
            </h2>

            <ul className="grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl border border-border bg-surface/50 p-4 text-sm text-foreground-secondary"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section> */}

      {/* Project Preview */}
      <Section className="pt-0 pb-12 sm:pb-16">
        <ProjectImage
          src={project.image.src}
          alt={project.image.alt}
          priority
        />
      </Section>

      {/* Case Study Navigation */}
      <CaseStudyNavigation />

      <Section>
        <ProjectGallery
          images={projectImages[slug as keyof typeof projectImages] ?? []}
        />
      </Section>

      {/* Case Study Content */}
      <Section className="pt-0">
        <CaseStudyContent caseStudy={caseStudy} />
      </Section>

      <Section className="pt-0">
        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </Section>
    </>
  );
}
