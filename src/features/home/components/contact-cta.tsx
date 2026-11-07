import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import Section from "@/components/ui/section";

export function ContactCTA() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
        {/* Decorative background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-start gap-8">
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5">
            <span className="size-2 rounded-full bg-success" />
            <span className="text-xs font-medium text-foreground-secondary">
              Let's connect
            </span>
          </div>

          <div className="max-w-2xl space-y-4">
            <h2 className="text-(length:--text-heading) font-semibold tracking-tight">
              Have an idea or opportunity?
              <span className="text-accent"> Let's talk.</span>
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-foreground-secondary">
              I'm always interested in connecting with people, discussing
              interesting projects, and exploring opportunities to build
              meaningful digital experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground"
            >
              <Mail size={16} />
              your-email@example.com
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
