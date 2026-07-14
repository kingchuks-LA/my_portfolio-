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

  mvp: {
    description:
      "The MVP was intentionally scoped to validate the core hypothesis: verified commuters would be willing to use a trusted platform to find and share trips with people travelling along similar routes. Features were prioritised based on their ability to establish trust, enable successful matching, and collect feedback for future iterations.",

    objectives: [
      "Validate demand for a verification-first commuter network.",
      "Enable verified drivers and passengers to create and join trips.",
      "Match commuters travelling along similar routes.",
      "Build trust through identity verification and post-trip feedback.",
      "Capture user feedback to inform future product iterations.",
    ],
  },
  productRequirements: {
    description:
      "The Product Requirements Document (PRD) translated the product vision and MVP into a structured implementation plan. It aligned product goals with engineering execution by defining the scope, functional requirements, user flows, assumptions, constraints, and success criteria for the first release.",

    highlights: [
      "Product goals and success metrics",
      "MVP scope and feature prioritisation",
      "Functional requirements",
      "User flows and key scenarios",
      "Assumptions and constraints",
      "Acceptance criteria",
    ],
  },
  userStories: {
    description:
      "User stories translated the product requirements into user-centred functionality, ensuring every feature was tied to a real commuter need and provided clear direction for development.",

    highlights: [
      "Driver trip creation",
      "Passenger trip discovery",
      "Identity verification",
      "Automatic route matching",
      "Booking confirmation",
      "Trip cancellation",
      "Post-trip feedback",
    ],
  },

  acceptanceCriteria: {
    description:
      "Acceptance criteria transformed user stories into testable outcomes, ensuring every feature had clear conditions for completion before development began.",

    highlights: [
      "Clear success conditions for every user story",
      "Functional behaviour defined before development",
      "Support for developer implementation",
      "Support for QA validation",
      "Reduced ambiguity across the team",
    ],
  },

  roadmap: {
    description:
      "The roadmap organised product delivery into clear phases, ensuring the team validated the core problem before investing in more advanced capabilities. Each phase built on the learning from the previous one.",

    roadmap: [
      {
        phase: "Phase 1",
        goal: "Build and validate the MVP with verified commuters.",
      },
      {
        phase: "Phase 2",
        goal: "Improve trust through ratings, feedback, and enhanced verification.",
      },
      {
        phase: "Phase 3",
        goal: "Expand route coverage and improve the matching experience.",
      },
      {
        phase: "Phase 4",
        goal: "Introduce intelligent recommendations and operational analytics.",
      },
    ],
  },
  wireframes: {
    description:
      "Wireframes translated product requirements into visual user flows, allowing key interactions to be validated before investing in detailed UI design or development.",

    screens: [
      "Registration",
      "Login",
      "Create Trip",
      "Find Trip",
      "Trip Details",
      "Booking Confirmation",
      "My Trips",
      "Profile & Verification",
    ],
  },

  databaseDesign: {
    description:
      "The database design transformed product concepts into a structured data model, ensuring users, routes, bookings, and verification records accurately reflected real-world commuter interactions while supporting scalability and maintainability.",

    entities: ["Users", "Routes", "Bookings", "Verifications", "Feedback"],
  },
  restApi: {
    description:
      "The REST API translated product capabilities into clear, predictable contracts between the frontend and backend. Each endpoint represented a user action, ensuring the system remained modular, testable, and easy to evolve.",

    interactions: [
      {
        action: "Sign In",
        resource: "Authentication",
      },
      {
        action: "Create Trip",
        resource: "Routes",
      },
      {
        action: "Book Trip",
        resource: "Bookings",
      },
      {
        action: "Verify Identity",
        resource: "Verification",
      },
      {
        action: "Leave Feedback",
        resource: "Feedback",
      },
    ],
  },

  systemArchitecture: {
    description:
      "The Trusted Carpool Network is organised into a layered architecture where each layer has a clear responsibility. This separation makes the platform easier to understand, maintain, test, and evolve as new features are introduced.",
    requestFlows: {
      "Create Trip": {
        title: "Create Trip Flow",

        summary:
          "Follow how a Create Trip request travels through the Trusted Carpool Network.",

        steps: [
          {
            title: "Commuter",
            description:
              "The commuter completes the Create Trip form and submits the request.",
          },
          {
            title: "Presentation Layer",
            description:
              "The frontend validates the input and sends the request to the backend.",
          },
          {
            title: "API Layer",
            description: "The POST /routes endpoint receives the request.",
          },
          {
            title: "Application Services",
            description:
              "The Trip Management Service validates the request and creates the trip.",
          },
          {
            title: "Data Layer",
            description: "The Routes table stores the newly created trip.",
          },
          {
            title: "Response",
            description:
              "The API returns a successful response to the commuter.",
          },
        ],
      },

      "Book Trip": {
        title: "Book Trip Flow",

        summary: "Follow how a commuter books an available trip.",

        steps: [
          {
            title: "Commuter",
            description:
              "The commuter selects an available trip and confirms the booking.",
          },
          {
            title: "Presentation Layer",
            description:
              "The booking request is submitted from the user interface.",
          },
          {
            title: "API Layer",
            description:
              "The POST /bookings endpoint receives the booking request.",
          },
          {
            title: "Application Services",
            description:
              "The Booking Service verifies seat availability and business rules.",
          },
          {
            title: "Data Layer",
            description:
              "The booking is stored and available seats are updated.",
          },
          {
            title: "Response",
            description:
              "The commuter receives confirmation that the booking was successful.",
          },
        ],
      },

      "Verify Identity": {
        title: "Identity Verification Flow",

        summary:
          "Follow how a commuter becomes a verified member of the platform.",

        steps: [
          {
            title: "Commuter",
            description:
              "The commuter submits identity verification information.",
          },
          {
            title: "Presentation Layer",
            description:
              "The verification form validates the submitted details.",
          },
          {
            title: "API Layer",
            description: "The verification endpoint receives the request.",
          },
          {
            title: "Application Services",
            description:
              "The Verification Service validates and processes the identity information.",
          },
          {
            title: "Data Layer",
            description:
              "Verification records are stored and linked to the commuter profile.",
          },
          {
            title: "Response",
            description: "The commuter is notified of the verification status.",
          },
        ],
      },

      "Leave Feedback": {
        title: "Feedback Flow",

        summary:
          "Follow how post-trip feedback strengthens trust across the network.",

        steps: [
          {
            title: "Commuter",
            description:
              "The commuter submits feedback after completing a journey.",
          },
          {
            title: "Presentation Layer",
            description: "The feedback form captures the rating and comments.",
          },
          {
            title: "API Layer",
            description: "The POST /feedback endpoint receives the submission.",
          },
          {
            title: "Application Services",
            description:
              "The Feedback Service validates and processes the submission.",
          },
          {
            title: "Data Layer",
            description:
              "The feedback is stored for future trust and reputation calculations.",
          },
          {
            title: "Response",
            description:
              "The commuter receives confirmation that the feedback was submitted.",
          },
        ],
      },
    },

    layers: [
      {
        icon: "👤",
        title: "Commuter",
        responsibility:
          "Drivers and passengers interact with the platform to register, verify their identity, create trips, join journeys and leave feedback.",
        behaviours: [
          {
            flow: "Create Trip",
            description:
              "The commuter completes the Create Trip form and submits the request.",
          },
          {
            flow: "Book Trip",
            description:
              "The commuter selects an available trip and confirms the booking.",
          },
          {
            flow: "Verify Identity",
            description:
              "The commuter submits identity verification information.",
          },
          {
            flow: "Leave Feedback",
            description:
              "The commuter submits feedback after completing a journey.",
          },
        ],
        examples: [
          {
            label: "Register",
            flow: "Register",
          },
          {
            label: "Complete Verification",
            flow: "Verify Identity",
          },
          {
            label: "Create Trip",
            flow: "Create Trip",
          },
          {
            label: "Book Trip",
            flow: "Book Trip",
          },
          {
            label: "Leave Feedback",
            flow: "Leave Feedback",
          },
        ],

        technologies: ["Web Browser", "Mobile Browser"],
      },
      {
        icon: "💻",
        title: "Presentation Layer",
        responsibility:
          "Provides the web interface where users interact with the platform and submit requests.",
        behaviours: [
          {
            flow: "Create Trip",
            description:
              "The frontend validates the Create Trip form and sends the request to the backend.",
          },
          {
            flow: "Book Trip",
            description:
              "The booking request is validated and submitted from the user interface.",
          },
          {
            flow: "Verify Identity",
            description:
              "The verification form validates the submitted identity information.",
          },
          {
            flow: "Leave Feedback",
            description:
              "The feedback form captures the rating and comments before submission.",
          },
        ],
        examples: [
          {
            label: "Registration Screen",
            flow: "Register",
          },
          {
            label: "Verification Screen",
            flow: "Verify Identity",
          },
          {
            label: "Create Trip Screen",
            flow: "Create Trip",
          },
          {
            label: "Booking Screen",
            flow: "Book Trip",
          },
          {
            label: "Feedback Screen",
            flow: "Leave Feedback",
          },
        ],
        technologies: ["Next.js", "React", "Tailwind CSS"],
      },

      {
        icon: "🔗",
        title: "API Layer",
        responsibility:
          "Exposes REST endpoints that receive requests from the frontend and route them to the appropriate services.",
        behaviours: [
          {
            flow: "Create Trip",
            description:
              "The POST /routes endpoint receives the request and forwards it to the Trip Management Service.",
          },
          {
            flow: "Book Trip",
            description:
              "The POST /bookings endpoint receives the booking request.",
          },
          {
            flow: "Verify Identity",
            description:
              "The verification endpoint receives and forwards the identity request.",
          },
          {
            flow: "Leave Feedback",
            description:
              "The POST /feedback endpoint receives the submitted feedback.",
          },
        ],
        examples: [
          {
            label: "POST /auth/register",
            flow: "Register",
          },
          {
            label: "POST /verification",
            flow: "Verify Identity",
          },
          {
            label: "POST /routes",
            flow: "Create Trip",
          },
          {
            label: "POST /bookings",
            flow: "Book Trip",
          },
          {
            label: "POST /feedback",
            flow: "Leave Feedback",
          },
        ],
        technologies: ["REST API", "Express.js"],
      },
      {
        icon: "⚙️",
        title: "Application Services Layer",
        responsibility:
          "Implements the business rules for verification, trip management, booking, matching and feedback.",
        behaviours: [
          {
            flow: "Create Trip",
            description:
              "The Trip Management Service validates the request, applies business rules, and creates the trip.",
          },
          {
            flow: "Book Trip",
            description:
              "The Booking Service verifies seat availability and confirms the booking.",
          },
          {
            flow: "Verify Identity",
            description:
              "The Verification Service validates the commuter's identity and updates their verification status.",
          },
          {
            flow: "Leave Feedback",
            description:
              "The Feedback Service validates and processes the submitted feedback.",
          },
        ],
        examples: [
          {
            label: "User Registration Service",
            flow: "Register",
          },
          {
            label: "Verification Service",
            flow: "Verify Identity",
          },
          {
            label: "Trip Management Service",
            flow: "Create Trip",
          },
          {
            label: "Booking Service",
            flow: "Book Trip",
          },
          {
            label: "Feedback Service",
            flow: "Leave Feedback",
          },
        ],
        technologies: ["Node.js", "Business Logic"],
      },
      {
        icon: "🗄️",
        title: "Data Layer",
        responsibility:
          "Stores and retrieves application data including users, routes, bookings, verifications and feedback.",
        behaviours: [
          {
            flow: "Create Trip",
            description: "The Routes table stores the newly created trip.",
          },
          {
            flow: "Book Trip",
            description:
              "The Bookings table stores the booking and updates seat availability.",
          },
          {
            flow: "Verify Identity",
            description:
              "Verification records are stored and linked to the commuter profile.",
          },
          {
            flow: "Leave Feedback",
            description:
              "The Feedback table stores ratings and comments for future trust calculations.",
          },
        ],
        examples: [
          {
            label: "Users",
            flow: "Register",
          },
          {
            label: "Verifications",
            flow: "Verify Identity",
          },
          {
            label: "Routes",
            flow: "Create Trip",
          },
          {
            label: "Bookings",
            flow: "Book Trip",
          },
          {
            label: "Feedback",
            flow: "Leave Feedback",
          },
        ],
        technologies: ["PostgreSQL"],
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
