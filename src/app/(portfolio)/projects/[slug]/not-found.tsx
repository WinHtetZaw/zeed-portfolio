import Link from "next/link";
import { ArrowLeft, FolderSearch } from "lucide-react";

import Section from "@/components/ui/section";

export default function ProjectNotFound() {
  return (
    <Section className="min-h-[60svh]">
      <div className="flex min-h-[40svh] flex-col items-center justify-center text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-border bg-surface">
          <FolderSearch size={28} className="text-foreground-muted" />
        </div>

        <h1 className="text-3xl font-semibold tracking-tight">
          Project not found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-secondary">
          The project you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </div>
    </Section>
  );
}
