import React from "react";

export default function UiText() {
  return (
    <div>
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

          <h1 className="text-[length:var(--text-display)] font-semibold leading-[1.05] tracking-tight">
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
    </div>
  );
}
