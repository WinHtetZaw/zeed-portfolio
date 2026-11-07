import type { ProjectCaseStudy } from "../project-case-study";

export const dummyCaseStudy: ProjectCaseStudy = {
  overview: {
    role: "Full-stack Developer",
    timeline: "Ongoing",
    team: "Solo project",
    summary:
      "NoteAI is an AI-powered note-taking SaaS designed to help individuals and teams organize information through collaborative workspaces and intelligent note management.",
  },

  problem: {
    title: "The Problem",
    description:
      "Managing notes across different tools can become difficult as personal and team workflows grow.",

    paragraphs: [
      "NoteAI explores how note-taking, workspace organization, and AI-assisted productivity can come together in one application.",
      "The goal is to build a structured environment where users can organize notes, collaborate with others, and access AI-powered features.",
    ],
  },

  solution: {
    title: "The Solution",
    description:
      "Build a workspace-based note-taking application with a modular architecture.",

    paragraphs: [
      "The application uses a workspace-based model to organize notes, folders, and members.",
      "Authentication, permissions, subscription management, and AI usage limits are designed as separate parts of the application architecture.",
    ],
  },

  technicalDecisions: [
    {
      technology: "Next.js",
      reason:
        "Provides the App Router, server components, and server-side functionality in one application.",
    },
    {
      technology: "TypeScript",
      reason:
        "Improves type safety and makes application code easier to maintain.",
    },
    {
      technology: "Drizzle ORM",
      reason: "Provides type-safe database queries and schema definitions.",
    },
    {
      technology: "Neon PostgreSQL",
      reason:
        "Provides a managed PostgreSQL database for relational application data.",
    },
    {
      technology: "Better Auth",
      reason:
        "Handles authentication and integrates with the application's database.",
    },
    {
      technology: "Stripe",
      reason: "Provides subscription and payment infrastructure.",
    },
  ],

  challenges: [
    {
      title: "Workspace permissions",
      problem: "Different workspace members need different levels of access.",

      solution:
        "Designed a role-based permission system with owner, admin, and member roles.",
    },
    {
      title: "AI usage limits",
      problem: "AI requests need to respect subscription-based usage limits.",

      solution:
        "Designed a usage reservation and completion flow to help enforce quotas and handle request failures.",
    },
    {
      title: "Database consistency",
      problem:
        "Operations involving multiple related records can leave inconsistent data if only some operations succeed.",

      solution:
        "Explored atomic database operations and transactions for important mutations.",
    },
  ],

  lessons: [
    "Designing database relationships before implementing application features.",
    "Separating business logic from UI components.",
    "Thinking about authorization and data consistency early.",
    "Building subscription and usage systems around workspace-level ownership.",
    "Testing important business logic instead of relying only on manual testing.",
  ],
};
