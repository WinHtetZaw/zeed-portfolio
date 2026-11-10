import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Section from "@/components/ui/section";

export default function AboutHero() {
  return (
    <Section className="pb-16 sm:pb-24">
      <div className="max-w-4xl">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          About me
        </p>

        <h1 className="text-(length:--text-display) font-semibold leading-[1.05] tracking-tight text-foreground">
          Building for the web,
          <span className="text-accent"> with purpose.</span>
        </h1>

        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground-secondary">
          <p>
            I'm Win Htet Zaw, a full stack developer focused on React, Next.js,
            and building modern web applications.
          </p>

          <p>
            I enjoy turning ideas into thoughtful digital experiences, with
            attention to usability, performance, and maintainable code.
          </p>

          <p>
            I'm also interested in application architecture and understanding
            how frontend experiences connect with the systems behind them.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Explore my work
            <ArrowRight className="size-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
          >
            Get in touch
          </Link>
        </div>

        <a
          href="#my-approach"
          className="mt-16 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          Discover how I work
          <ArrowDown className="size-4" />
        </a>
      </div>
    </Section>
  );
}
