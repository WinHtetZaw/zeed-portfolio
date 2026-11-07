import type { ReactNode } from "react";

type CaseStudySectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function CaseStudySection(props: CaseStudySectionProps) {
  const { id, title, description, children } = props;

  return (
    <section id={id} className="scroll-mt-38 space-y-6">
      <div className="max-w-2xl space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Case study
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="text-base leading-relaxed text-foreground-secondary">
            {description}
          </p>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
}
