import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section className="relative isolate overflow-hidden !pt-28 md:!pt-40">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Intro label */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2">
          <span className="size-2 rounded-full bg-success" />

          <span className="font-mono text-xs tracking-wide text-foreground-secondary">
            FRONTEND DEVELOPER
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-display font-semibold leading-[1.08] tracking-[-0.05em] text-foreground">
          Building thoughtful{" "}
          <span className="text-accent">digital experiences.</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg">
          I'm Zeed, a frontend developer focused on React, Next.js, and building
          modern web applications with attention to detail, performance, and
          usability.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-base font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Explore my work
            <ArrowUpRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 text-base font-medium text-foreground transition-colors hover:bg-surface"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Focus areas */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
            My focus
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-foreground-secondary">
            <span>Modern frontend development</span>
            <span className="text-accent">/</span>
            <span>User-focused interfaces</span>
            <span className="text-accent">/</span>
            <span>Scalable web applications</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex items-center gap-2 text-xs text-foreground-muted">
          <ArrowDown size={14} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </Section>
  );
}
