/**
 * ---------------------------------------------
 * File: featured-case-study.ts
 *
 * Purpose:
 * Provides the content displayed in the Featured
 * Product Case Study section.
 *
 * Responsibilities:
 * - Store presentation data
 * - Keep UI components free from hardcoded content
 *
 * Imports:
 * - FeaturedCaseStudy
 * ---------------------------------------------
 */

import { FeaturedCaseStudyData } from "@/types/featured-case-study";

export const featuredCaseStudy: FeaturedCaseStudyData = {
  eyebrow: "FEATURED PRODUCT CASE STUDY",

  title: "Trusted Carpool Network",

  summary:
    "Designing a verification-first commuter platform that helps professionals travel safely and confidently across Lagos.",

  role: "Technical Product Owner",

  readingTime: "15 min read",

  status: "In Progress",

  exploreItems: [
    { id: "1", label: "Product Discovery" },
    { id: "2", label: "Product Vision" },
    { id: "3", label: "User Journey" },
    { id: "4", label: "PRD" },
    { id: "5", label: "User Stories" },
    { id: "6", label: "Acceptance Criteria" },
    { id: "7", label: "Product Roadmap" },
    { id: "8", label: "Wireframes" },
    { id: "9", label: "System Design" },
    { id: "10", label: "Database Design" },
    { id: "11", label: "REST API Design" },
    { id: "12", label: "Engineering Decisions" },
  ],

  href: "/case-studies/trusted-carpool-network",
};
