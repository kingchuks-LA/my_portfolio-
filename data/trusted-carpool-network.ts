/**
 * ---------------------------------------------
 * File: trusted-carpool-network.ts
 *
 * Purpose:
 * Provides the content for the Trusted Carpool Network
 * case study.
 *
 *
 * Responsibilities:
 * - Store business content
 * - Populate the case study using the domain model
 * - Keep presentation concerns out of the data layer
 *
 * Imports:
 * - CaseStudy (types/case-study.ts)
 *
 * Summary
 * This file contains business content only.
 * It intentionally contains no UI logic.
 * ---------------------------------------------
 */

import { CaseStudy } from "@/types/case-study";

export const trustedCarpoolNetwork: CaseStudy = {
  hero: {
    title: "Trusted Carpool Network",

    subtitle:
      "Designing a verification-first commuter platform that helps professionals travel together safely.",

    role: "Technical Product Owner",

    summary:
      "Led product discovery, system design, user journey mapping, API design, database modelling and MVP planning for a trusted commuter matching platform.",

    readingTime: "15 min read",

    lastUpdated: "July 2026",

    status: "In Progress",

    badges: [
      { id: "product", label: "Product Management" },
      { id: "system-design", label: "System Design" },
      { id: "rest-api", label: "REST API" },
      { id: "postgresql", label: "PostgreSQL" },
      { id: "agile", label: "Agile" },
      { id: "ux", label: "User Experience" },
    ],
  },

  overview:
    "Trusted Carpool Network is a verification-first platform designed to connect commuters travelling along similar routes while prioritising safety, trust and reliability.",
};
