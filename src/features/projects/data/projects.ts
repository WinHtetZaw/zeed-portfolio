export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  status: "In development" | "Completed";
  technologies: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "noteai",
    title: "NoteAI",
    description:
      "An AI-powered note-taking workspace designed to help individuals and teams organize their notes and work more efficiently.",
    category: "AI SaaS",
    status: "In development",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Neon",
      "Better Auth",
      "Stripe",
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
