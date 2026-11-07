export type CaseStudySection = {
  title: string;
  description: string;
  paragraphs: string[];
};

export type ProjectCaseStudy = {
  overview: {
    role: string;
    timeline: string;
    team: string;
    summary: string;
  };

  problem: CaseStudySection;

  solution: CaseStudySection;

  technicalDecisions: {
    technology: string;
    reason: string;
  }[];

  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];

  lessons: string[];
};
