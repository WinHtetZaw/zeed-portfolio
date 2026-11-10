import type { ProjectCaseStudy } from "../project-case-study";
import { dummyCaseStudy } from "./dummy-project-2";
import { dummyCaseStudy2 } from "./dummy-project-3";

import { noteAICaseStudy } from "./noteai";

export const caseStudies: Record<string, ProjectCaseStudy> = {
  noteai: noteAICaseStudy,
  "dummy-project-2": dummyCaseStudy,
  "dummy-project-3": dummyCaseStudy2,
};

export function getCaseStudy(slug: string) {
  return caseStudies[slug] ?? null;
}
