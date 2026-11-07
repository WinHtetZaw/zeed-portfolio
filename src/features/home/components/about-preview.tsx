import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";

import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern interfaces with React, Next.js, and TypeScript.",
  },
  {
    icon: Layers3,
    title: "Clean Architecture",
    description:
      "Creating maintainable and well-organized application structures.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "Developing interfaces that work across different screen sizes.",
  },
  {
    icon: Workflow,
    title: "Problem Solving",
    description:
      "Breaking complex problems into practical and reliable solutions.",
  },
];

export default function AboutPreview() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Introduction */}
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            eyebrow="A little about me"
            title="I enjoy turning ideas into useful digital experiences."
          />

          <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary sm:text-base">
            <p>
              I'm a frontend developer passionate about building modern web
              applications with React, Next.js, and TypeScript.
            </p>

            <p>
              I enjoy working on both the visual and technical sides of
              development — from creating intuitive interfaces to designing
              maintainable application architecture.
            </p>

            <p>
              My goal is to build software that is not only visually appealing
              but also reliable, accessible, and easy to maintain.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            More about me
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Focus Areas */}
        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="rounded-xl border border-border bg-surface/50 p-5 transition-colors duration-200 hover:border-white/15"
              >
                <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} />
                </div>

                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {area.title}
                </h3>

                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
