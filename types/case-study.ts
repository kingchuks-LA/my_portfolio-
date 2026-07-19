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
 * MVP section.
 */
export interface MVPSection {
  description: string;

  objectives: string[];
}

/**
 * Product Requirements section.
 */
export interface ProductRequirementsSection {
  description: string;

  highlights: string[];
}
/**
 * User Stories section.
 */
export interface UserStoriesSection {
  description: string;

  highlights: string[];
}
/**
 * Acceptance Criteria section.
 */
export interface AcceptanceCriteriaSection {
  description: string;

  highlights: string[];
}

/**
 * Product Roadmap section.
 */
export interface RoadmapItem {
  phase: string;
  goal: string;
}

export interface RoadmapSection {
  description: string;

  roadmap: RoadmapItem[];
}

/**
 * Wireframes section.
 */
export interface WireframesSection {
  description: string;

  screens: string[];
}

/**
 * Database Design section.
 */
export interface DatabaseDesignSection {
  description: string;

  entities: string[];
}
/**
 * REST API section.
 */

export interface ApiInteraction {
  action: string;
  resource: string;
}

export interface RestApiSection {
  description: string;

  interactions: ApiInteraction[];
}
export interface ArchitectureLayer {
  title: string;
  responsibility: string;
  shortTitle: string;
}

/**
 * System Architecture section.
 */
export interface SystemArchitectureSection {
  description: string;
  requestFlows: Record<string, RequestFlow>;
  layers: ArchitectureLayer[];
}

export interface ArchitectureExample {
  label: string;
  flow: string;
}

export interface ArchitectureLayer {
  icon: string;
  title: string;
  responsibility: string;
  behaviours: LayerBehaviour[];
  examples: ArchitectureExample[];
  technologies: string[];
}
export interface JourneyStep {
  title: string;
  description: string;
}
export interface RequestFlow {
  title: string;
  summary: string;
  steps:JourneyStep[];
}

export interface LayerBehaviour {
  flow: string;
  description: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
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
  mvp: MVPSection;
  productRequirements: ProductRequirementsSection;
  userStories: UserStoriesSection;
  acceptanceCriteria: AcceptanceCriteriaSection;
  roadmap: RoadmapSection;
  wireframes: WireframesSection;
  databaseDesign: DatabaseDesignSection;
  restApi: RestApiSection;
  systemArchitecture: SystemArchitectureSection;
  breadcrumb: BreadcrumbItem[];
  myRole: MyRoleSection;
  deliverables: DeliverablesSection;
}
