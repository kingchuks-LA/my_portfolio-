/**
 * Projects Data
 *
 * Purpose:
 * Provides the static content displayed on the Projects page.
 *
 * Responsibility:
 * - Defines technical project information.
 * - Defines research project information.
 * - Serves as the source of truth for the Projects page content.
 *
 * It does NOT own:
 * - Presentation
 * - Layout
 * - Styling
 * - Rendering logic
 *
 * Design Principle:
 * Separate content from presentation to keep the UI focused on
 * rendering while this file focuses solely on describing project data.
 *
 * Evolution:
 * This file should evolve as the portfolio grows. If project
 * content is later retrieved from an API or CMS, the UI should
 * require little or no change.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const technicalProjects: Project[] = [
  {
    id: "mern-stack-app",
    title: "MERN Stack Application",
    description:
      "Built a full-stack MERN application while working in an Agile environment. The project involved API development, frontend implementation, database integration, and deployment.",
    tags: ["React", "Node.js", "MongoDB", "REST APIs", "Agile"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase product ownership, business analysis, system design, and software engineering work.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
] as const;

export const researchProjects: Project[] = [
  {
    id: "schema-inference-for-semi-structured-data",
    title: "Schema Inference for Semi-Structured Data",
    description:
      "Master's thesis focused on evaluating schema inference approaches for JSON-based semi-structured data. The research compared techniques for detecting data structures, optional attributes, nested objects, arrays, and data types.",
    tags: [
      "Research",
      "JSON",
      "Data Modeling",
      "Web Engineering",
      "Schema Inference",
    ],
  },
] as const;
