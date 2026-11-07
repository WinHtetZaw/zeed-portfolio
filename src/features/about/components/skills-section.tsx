import { Code2, Palette, Database, Wrench } from "lucide-react";

import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive web applications.",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Styling & UI",
    description: "Creating clean, consistent, and accessible interfaces.",
    icon: Palette,
    skills: [
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    title: "Backend & Database",
    description: "Working with application logic and data management.",
    icon: Database,
    skills: ["Node.js", "PostgreSQL", "Drizzle ORM", "REST APIs"],
  },
  {
    title: "Tools & Integrations",
    description: "Managing development workflows and connecting services.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Better Auth", "Stripe"],
  },
];

export default function SkillsSection() {
  return (
    <Section className="pt-0">
      <SectionHeading
        eyebrow="Skills & expertise"
        title="Tools I work with."
        description="Technologies and tools I use to design, develop, and build modern web applications."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.title}
              className="rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-accent/40 sm:p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent">
                <Icon className="size-5" />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border-subtle bg-surface-elevated px-3 py-1.5 text-xs text-foreground-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
