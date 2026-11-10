import { Lightbulb, Layers3, Accessibility, RefreshCw } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Understand before building",
    description:
      "I believe good development starts with understanding the problem. Before writing code, I consider the requirements, user needs, and possible solutions.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Build with structure",
    description:
      "I value clean architecture, reusable components, and maintainable code. A good solution should be understandable and easy to improve as an application grows.",
  },
  {
    number: "03",
    icon: Accessibility,
    title: "Focus on the experience",
    description:
      "I care about creating interfaces that are intuitive, responsive, accessible, and comfortable to use across different devices.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Improve continuously",
    description:
      "I treat every project as an opportunity to learn. I review my decisions, investigate problems, and look for ways to improve performance, reliability, and code quality.",
  },
];

export default function DevelopmentPhilosophy() {
  return (
    <Section id="my-approach" className="scroll-mt-20 pt-0">
      <SectionHeading
        eyebrow="How I work"
        title="Principles behind my work."
        description="The principles that guide how I approach problems and build software."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {principles.map((principle) => {
          const Icon = principle.icon;

          return (
            <article
              key={principle.number}
              className="group rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-accent/40 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent-secondary">
                  <Icon className="size-5" />
                </div>

                <span className="font-mono text-xs text-foreground-muted">
                  {principle.number}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                {principle.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
