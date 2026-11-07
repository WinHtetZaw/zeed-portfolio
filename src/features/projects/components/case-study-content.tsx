import type { ProjectCaseStudy } from "@/features/projects/data/project-case-study";

import CaseStudySection from "./case-study-section";

type CaseStudyContentProps = {
  caseStudy: ProjectCaseStudy;
};

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <div className="space-y-16 sm:space-y-20 pt-8 sm:pt-10">
      {/* Overview */}
      <CaseStudySection
        id="overview"
        title="Project overview"
        description={caseStudy.overview.summary}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Role", value: caseStudy.overview.role },
            { label: "Timeline", value: caseStudy.overview.timeline },
            { label: "Team", value: caseStudy.overview.team },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-surface/50 p-5"
            >
              <p className="text-sm text-foreground-muted">{item.label}</p>

              <p className="mt-2 font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Problem */}
      <CaseStudySection
        id="problem"
        title={caseStudy.problem.title}
        description={caseStudy.problem.description}
      >
        <div className="max-w-3xl space-y-4">
          {caseStudy.problem.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed text-foreground-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </CaseStudySection>

      {/* Solution */}
      <CaseStudySection
        id="solution"
        title={caseStudy.solution.title}
        description={caseStudy.solution.description}
      >
        <div className="max-w-3xl space-y-4">
          {caseStudy.solution.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed text-foreground-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </CaseStudySection>

      {/* Technical decisions */}
      <CaseStudySection
        id="technical-decisions"
        title="Technical decisions"
        description="The technologies and architectural choices behind the application."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {caseStudy.technicalDecisions.map((decision) => (
            <article
              key={decision.technology}
              className="rounded-xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent/40"
            >
              <h3 className="font-semibold text-foreground">
                {decision.technology}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                {decision.reason}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* Challenges */}
      <CaseStudySection
        id="challenges"
        title="Challenges & solutions"
        description="Some of the engineering problems considered during development."
      >
        <div className="space-y-4">
          {caseStudy.challenges.map((challenge) => (
            <article
              key={challenge.title}
              className="grid gap-4 rounded-xl border border-border bg-surface/50 p-5 md:grid-cols-2"
            >
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-foreground-muted">
                  Challenge
                </p>

                <h3 className="font-semibold">{challenge.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  {challenge.problem}
                </p>
              </div>

              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                  Approach
                </p>

                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {challenge.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* Lessons */}
      <CaseStudySection
        id="lessons"
        title="Key takeaways"
        description="What this project has taught me about building reliable applications."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {caseStudy.lessons.map((lesson) => (
            <li
              key={lesson}
              className="rounded-xl border border-border bg-surface/50 p-4 text-sm leading-relaxed text-foreground-secondary"
            >
              {lesson}
            </li>
          ))}
        </ul>
      </CaseStudySection>
    </div>
  );
}
