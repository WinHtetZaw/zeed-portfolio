import type { ProjectCaseStudy } from "../project-case-study";
import { dummyCaseStudy } from "./dummy-project-2";

import { noteAICaseStudy } from "./noteai";

export const caseStudies: Record<string, ProjectCaseStudy> = {
  noteai: noteAICaseStudy,
  "dummy-project-2": dummyCaseStudy,
};

export function getCaseStudy(slug: string) {
  return caseStudies[slug] ?? null;
}
