/**
 * ---------------------------------------------
 * File: featured-case-study.ts
 *
 * Purpose:
 * Defines the domain model for a featured
 * product case study displayed on the Projects page.
 *
 * Responsibilities:
 * - Define the structure of a featured case study
 * - Provide strong typing between the data layer
 *   and presentation layer
 *
 * Imports:
 * None
 * ---------------------------------------------
 */

export interface ExploreItem {
  id: string;
  label: string;
}

export interface FeaturedCaseStudyData {
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  readingTime:string;
  status:string;
  exploreItems: ExploreItem[];
  href: string;
}