import { Code2, Search, Sparkles, type LucideIcon } from "lucide-react";

import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";

type ApproachStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Every good application starts with understanding the problem before writing code.",
    details: [
      "Clarify goals and requirements",
      "Understand user needs",
      "Plan the right solution",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Turn ideas into reliable applications with thoughtful architecture and maintainable code.",
    details: [
      "Build reusable components",
      "Choose tools intentionally",
      "Keep code clean and organized",
    ],
    icon: Code2,
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Improve the experience through testing, feedback, and attention to detail.",
    details: [
      "Test functionality and interactions",
      "Improve accessibility and performance",
      "Polish responsive layouts",
    ],
    icon: Sparkles,
  },
];

export function DevelopmentApproach() {
  return (
    <Section id="approach">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="HOW I WORK"
            title="A thoughtful process, from idea to interface."
            description="I approach every project with a focus on understanding the problem, building a solid solution, and continuously improving the result."
            className="max-w-2xl"
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {approachSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group flex flex-col rounded-2xl border border-border bg-surface/50 p-6 transition-colors duration-200 hover:border-accent/40 hover:bg-surface"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-sm text-foreground-muted">
                    / {step.number}
                  </span>

                  <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent-secondary transition-colors duration-200 group-hover:border-accent/30">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-foreground-secondary">
                  {step.description}
                </p>

                <ul className="mt-auto flex flex-col gap-3 border-t border-border-subtle pt-5">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm text-foreground-muted"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
