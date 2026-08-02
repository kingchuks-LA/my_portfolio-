import { NavigationGroup } from "@/types/case-study-navigation";

export const trustedCarpoolNavigation: NavigationGroup[] = [
  {
    title: "Product Discovery",
    items: [
      { id: "overview", label: "Overview" },
      { id: "problem-statement", label: "Problem Statement" },
      { id: "product-vision", label: "Product Vision" },
      { id: "user-journey", label: "User Journey" },
    ],
  },

  {
    title: "Planning",
    items: [
      { id: "mvp", label: "Minimum Viable Product" },
      { id: "product-requirements", label: "Product Requirements" },
      { id: "user-stories", label: "User Stories" },
      { id: "acceptance-criteria", label: "Acceptance Criteria" },
      { id: "roadmap", label: "Product Roadmap" },
    ],
  },

  {
    title: "Solution Design",
    items: [
      { id: "wireframes", label: "Wireframes" },
      { id: "database-design", label: "Database Design" },
      { id: "rest-api", label: "REST API" },
      { id: "system-architecture", label: "System Architecture" },
    ],
  },
];
