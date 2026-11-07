import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Section from "@/components/ui/section";

export default function AboutCTA() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 px-6 py-12 text-center sm:px-12 sm:py-16">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <p className="mb-4 text-sm font-medium text-violet-400">
            What's next?
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let's build something meaningful.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-400">
            I'm interested in thoughtful projects, solving problems, and
            opportunities to grow as a developer.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              Explore my work
              <Mail size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
