import { Code2, Layers3, Rocket } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";

const journeyItems = [
  {
    icon: Code2,
    number: "01",
    title: "Learning the foundations",
    description:
      "I started by building my understanding of web development, learning how the web works, and developing a solid foundation in HTML, CSS, JavaScript, and programming fundamentals.",
    focus: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: Layers3,
    number: "02",
    title: "Growing with React and Next.js",
    description:
      "As I became more interested in frontend development, I focused on React, TypeScript, and Next.js. I began exploring component architecture, application structure, reusable UI, and better development practices.",
    focus: ["React", "TypeScript", "Next.js"],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Building real-world applications",
    description:
      "I started applying what I learned to larger projects, including NoteAI, an AI-powered note-taking SaaS. This helped me explore authentication, databases, workspace management, permissions, subscriptions, and application architecture.",
    focus: ["Full-stack development", "Drizzle ORM", "PostgreSQL"],
  },
];

export default function DevelopmentJourney() {
  return (
    <Section className="pt-0">
      <SectionHeading
        eyebrow="My journey"
        title="Learning by building."
        description="My development journey is driven by curiosity, continuous learning, and turning knowledge into practical projects."
      />

      <div className="mt-12 space-y-6">
        {journeyItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.number}
              className="relative grid gap-5 rounded-2xl border border-border bg-surface/50 p-6 sm:grid-cols-[auto_1fr] sm:p-8"
            >
              <div className="flex items-center gap-4 sm:block">
                <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent">
                  <Icon className="size-5" />
                </div>

                <span className="font-mono sm:text-center text-xs text-foreground-muted sm:mt-4 sm:block">
                  {item.number}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>

                <p className="max-w-3xl text-sm leading-relaxed text-foreground-secondary sm:text-base">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.focus.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border-subtle bg-surface-elevated px-3 py-1.5 text-xs text-foreground-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
