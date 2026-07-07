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

export interface CaseStudy {
  hero: CaseStudyHero;
  overview: string;
}
