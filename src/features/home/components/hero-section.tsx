"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/section";
import { motion, useReducedMotion } from "motion/react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <Section className="relative isolate overflow-hidden !pt-28 md:!pt-40">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Intro label */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2"
        >
          <span className="size-2 rounded-full bg-success" />

          <span className="font-mono text-xs tracking-wide text-foreground-secondary">
            FULL STACK DEVELOPER
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-display font-semibold leading-[1.08] tracking-[-0.05em] text-foreground"
        >
          Building thoughtful{" "}
          <span className="text-accent">digital experiences.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg"
        >
          I'm WIn Htet Zaw, a full stack developer focused on React, Next.js,
          and building modern web applications with attention to detail,
          performance, and usability.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
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
        </motion.div>

        {/* Focus areas */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
            My focus
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-foreground-secondary">
            <span>Modern full stack development</span>
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
