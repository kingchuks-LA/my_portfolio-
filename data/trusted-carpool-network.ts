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

  overview: {
    description: `Trusted Carpool Network is a verification-first commuter platform designed to connect professionals travelling along similar routes while prioritising safety, trust, and reliability. Rather than simply matching drivers and passengers, the platform establishes trust before every journey through identity verification and structured commuter matching.

The idea emerged from observing a recurring challenge faced by early-morning commuters in Lagos, where finding transportation often meant choosing between convenience and personal safety. Understanding that challenge became the foundation for every product decision that followed.`,
  },
  problemStatement: {
    description: `During repeated early-morning journeys along the Mowe–Ibafo–Berger corridor in Lagos, I observed professionals standing by the roadside between 5:00 a.m. and 6:00 a.m., relying on private vehicles for transportation. For many commuters, accepting a ride from an unfamiliar driver had become a routine part of getting to work.

While transportation was available, trust was not. Every journey required commuters to make a rapid decision with very little information about the driver or the vehicle. The choice often came down to balancing punctuality against personal safety.

These observations revealed that the real problem was not the lack of transportation, but the absence of a trusted way for verified commuters to connect with one another. That insight became the foundation for the product vision`,
  },
  productVision: {
    description: `The vision was to create a trusted commuter network where professionals could confidently connect with verified drivers and passengers travelling along similar routes. Instead of leaving trust to chance, the platform would establish it before every journey through identity verification, structured matching, and a community built around accountability.

Rather than becoming another ride-hailing service, the goal was to build a verification-first platform that enabled safer daily commuting while strengthening trust among commuters. This vision guided every product decision that followed.`,
  },

  userJourney: {
    introduction:
      "The user journey was designed to reduce uncertainty at every stage of the commuter experience. Rather than focusing only on booking a ride, the journey prioritised trust before, during, and after every trip.",

    steps: [
      {
        title: "Register",
        description:
          "Users create an account to join the trusted commuter network.",
      },
      {
        title: "Complete Verification",
        description:
          "Identity and verification checks establish trust before users can participate.",
      },
      {
        title: "Publish or Find a Trip",
        description:
          "Drivers publish available trips while passengers search for routes that match their commute.",
      },
      {
        title: "Automatic Match",
        description:
          "Compatible commuters are matched based on route, schedule, and availability.",
      },
      {
        title: "Confirm Journey",
        description:
          "Matched commuters review the trip details before travelling together.",
      },
      {
        title: "Travel Together",
        description:
          "Verified commuters complete their journey with greater confidence and transparency.",
      },
      {
        title: "Leave Feedback",
        description:
          "After the trip, commuters provide feedback to strengthen trust within the network.",
      },
    ],
  },

  myRole: {
    title: "Technical Product Owner",

    summary:
      "Led product discovery, defined the MVP, created product artefacts, designed the system architecture, and built the backend prototype.",

    responsibilities: [
      "Led product discovery and problem definition.",
      "Defined the MVP scope and product roadmap.",
      "Created user journeys, product requirements, and user stories.",
      "Designed the REST API and database model.",
      "Documented architectural and engineering decisions..",
    ],
  },

  deliverables: {
    items: [
      "Problem Statement",
      "Product Vision",
      "User Journey",
      "PRD",
      "User Stories",
      "Acceptance Criteria",
      "Roadmap",
      "Wireframes",
      "System Architecture",
      "ER Diagram",
      "REST API Design",
      "Engineering Decisions",
    ],
  },
};
