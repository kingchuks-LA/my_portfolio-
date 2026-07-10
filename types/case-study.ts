/**
 * ---------------------------------------------
 * File: case-study.ts
 *
 * Purpose:
 * Defines the domain models for the Case Study feature.
 * * These interfaces represent the domain, not the UI.
 * Components render these models but never define them.
 *
 * Responsibilities:
 * - Define shared TypeScript interfaces
 * - Establish contracts between the data and UI layers
 * - Provide strong typing for case study content
 *
 * Imports:
 * None
 * ---------------------------------------------
 */

export interface Badge {
  id: string;
  label: string;
}
/**
 * Hero section displayed at the top of the case study.
 */

export interface CaseStudyHero {
  title: string;
  subtitle: string;
  role: string;
  summary: string;
  readingTime: string;
  lastUpdated: string;
  status: string;
  badges: Badge[];
}

export interface OverviewSection {
  description: string;
}

/**
 * Problem Statement section.
 */
export interface ProblemStatementSection {
  description: string;
}

/**
 * Product Vision section.
 */
export interface ProductVisionSection {
  description: string;
}

/**
 * My Role section.
 */

export interface MyRoleSection {
  title: string;
  summary: string;
  responsibilities: string[];
}

/**
 * What I Delivered section.
 */
export interface DeliverablesSection {
  items: string[];
}

export interface JourneyStep {
  title: string;
  description: string;
}

export interface UserJourneySection {
  introduction: string;
  steps: JourneyStep[];
}

/**
 * Complete Case Study.
 */

export interface CaseStudy {
  hero: CaseStudyHero;
  overview: OverviewSection;
  problemStatement: ProblemStatementSection;
  productVision: ProductVisionSection;
  userJourney: UserJourneySection;
  myRole: MyRoleSection;
  deliverables: DeliverablesSection;
}
