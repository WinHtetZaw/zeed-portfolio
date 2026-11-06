import Button from "@/components/ui/button";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import React from "react";

export default function UiText() {
  //   const projects = ["NoteAI", "Portfolio Website", "Other Projects"];
  const projects = [
    {
      name: "NoteAI",
      description: "An AI-powered note-taking workspace.",
    },
    {
      name: "Portfolio",
      description: "A personal portfolio built with Next.js.",
    },
    {
      name: "Other Projects",
      description: "More experiments and development work.",
    },
  ];
  const isActive = true;
  return (
    <main>
      <article className="min-h-screen bg-background p-8 text-foreground">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold">Zeed.dev</h1>

          <p className="text-foreground-secondary">
            Testing our design system.
          </p>

          <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
            <h2 className="text-xl font-semibold">
              Design tokens are working!
            </h2>

            <p className="mt-2 text-foreground-muted">
              This card uses our reusable color, radius, border, and shadow
              tokens.
            </p>

            <button className="mt-5 rounded-lg bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-hover">
              Test button
            </button>
          </div>
        </div>
      </article>

      <article className="mx-auto min-h-screen max-w-5xl space-y-12 px-6 py-20">
        <section className="space-y-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Frontend Developer
          </p>

          <h1 className="text-(length:--text-display) font-semibold leading-[1.05] tracking-tight">
            Building thoughtful digital experiences.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-foreground-secondary">
            I'm Zeed, a frontend developer focused on React, Next.js, and
            building modern web applications.
          </p>
        </section>

        <section className="space-y-5 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>

          <p className="text-base leading-relaxed text-foreground-secondary">
            A collection of projects that demonstrate my approach to frontend
            development.
          </p>

          <p className="font-mono text-sm text-foreground-muted">
            NEXT.JS / REACT / TYPESCRIPT
          </p>
        </section>
      </article>

      <article>
        <section className="section-spacing">
          <div className="container-layout space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-sm text-accent">
                FRONTEND DEVELOPER
              </p>

              <h1 className="text-[length:var(--text-display)] font-semibold tracking-tight">
                Building thoughtful digital experiences.
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-foreground-secondary">
                Focused on React, Next.js, and modern web applications.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-xl border border-border bg-surface p-6"
                >
                  <h2 className="text-xl font-semibold">{project.name}</h2>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    A project built with modern web technologies.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </article>

      <article className="container-layout section-spacing space-y-8">
        <h1 className="text-4xl font-semibold">Testing cn()</h1>

        <div
          className={cn(
            "rounded-xl border border-border bg-surface p-6",
            isActive && "border-accent",
          )}
        >
          <p className="text-foreground-secondary">
            Conditional classes are working.
          </p>
        </div>

        <div className={cn("px-4 py-2", "px-8")}>
          <p>Tailwind conflicts are resolved.</p>
        </div>
      </article>

      <article>
        <Section>
          <SectionHeading
            eyebrow="01 — Selected Work"
            title="Projects I've built."
            description="A collection of projects showcasing my approach to building modern web applications."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="text-xl font-semibold">{project.name}</h3>

                <p className="mt-3 text-sm text-foreground-secondary">
                  {project.description}
                </p>

                <Button variant="outline" size="sm" className="mt-5">
                  View project
                </Button>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="02 — About Me"
            title="A little about how I work."
            description="I enjoy turning complex ideas into simple, thoughtful digital experiences."
            align="center"
          />
        </Section>
      </article>
    </main>
  );
}
