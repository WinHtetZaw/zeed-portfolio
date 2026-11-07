export type ProjectCategory = "Full-stack" | "Frontend" | "Experiment";

export type ProjectStatus = "In development" | "Completed";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  featured: boolean;

  image: {
    src: string;
    alt: string;
  };

  links: {
    liveDemo?: string;
    github?: string;
  };

  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "noteai",
    title: "NoteAI",
    description:
      "An AI-powered note-taking workspace designed to help individuals and teams organize their notes and work efficiently.",
    longDescription:
      "NoteAI is a SaaS application focused on workspace-based note management, collaboration, and AI-powered productivity features.",

    category: "Full-stack",
    status: "In development",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Neon",
      "Better Auth",
      "Stripe",
    ],

    featured: true,

    image: {
      src: "/images/projects/noteai/cover.jpg",
      alt: "NoteAI application dashboard",
    },

    links: {
      // Add your actual URLs when available.
      liveDemo: "https://your-domain.com",
      github: "https://github.com/your-username/noteai",
    },

    highlights: [
      "Workspace and member management",
      "Role-based permissions",
      "AI-powered note summarization",
      "Subscription and usage management",
    ],
  },
  {
    slug: "dummy-project-2",
    title: "Placeholder Project",
    description:
      "An AI-powered note-taking workspace designed to help individuals and teams organize their notes and work efficiently.",
    longDescription:
      "NoteAI is a SaaS application focused on workspace-based note management, collaboration, and AI-powered productivity features.",

    category: "Full-stack",
    status: "In development",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Neon",
      "Better Auth",
      "Stripe",
    ],

    featured: false,

    image: {
      src: "/images/projects/noteai/cover.jpg",
      alt: "NoteAI application dashboard",
    },

    links: {
      // Add your actual URLs when available.
      liveDemo: "https://your-domain.com",
      github: "https://github.com/your-username/noteai",
    },

    highlights: [
      "Workspace and member management",
      "Role-based permissions",
      "AI-powered note summarization",
      "Subscription and usage management",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
