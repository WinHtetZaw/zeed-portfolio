import { Code2, Database, Palette, Wrench, CreditCard } from "lucide-react";

import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";

const technologyGroups = [
  {
    title: "Frontend Development",
    description: "Building modern and interactive web applications.",
    icon: Code2,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    title: "Styling & UI",
    description: "Creating responsive and consistent interfaces.",
    icon: Palette,
    technologies: ["Tailwind CSS", "Responsive Design", "CSS Modules"],
  },
  {
    title: "Backend & Database",
    description: "Working with application logic and data.",
    icon: Database,
    technologies: [
      "Node.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Neon",
      "Better Auth",
    ],
  },
  {
    title: "Integrations & Tools",
    description: "Connecting services and managing development workflows.",
    icon: Wrench,
    technologies: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    title: "Payments & AI",
    description: "Integrating external services into web applications.",
    icon: CreditCard,
    technologies: ["Stripe", "AI API Integration"],
  },
];

export default function TechStack() {
  return (
    <Section id="stack">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="My toolkit"
            title="Technologies I work with."
            description="The tools and technologies I use to build modern, maintainable, and user-focused web applications."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-xl border border-border bg-surface/50 p-6 transition-colors duration-200 hover:border-white/15"
              >
                <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-semibold text-foreground">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border-subtle bg-background px-2.5 py-1.5 text-xs text-foreground-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
