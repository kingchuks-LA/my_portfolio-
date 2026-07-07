/**
 * ---------------------------------------------
 * File: Hero.tsx
 *
 * Purpose:
 * Renders the introductory section of a case study.
 *
 * Responsibilities:
 * - Display the title
 * - Display the subtitle
 * - Display the project summary
 * - Display project metadata
 * - Render technology badges
 *
 * Imports:
 * - CaseStudyHero (types/case-study.ts)
 *
 * Summary:
 * This component is intentionally presentational.
 * It does not fetch data or contain business logic.
 * ---------------------------------------------
 */

import { CaseStudyHero } from "@/types/case-study";

interface HeroProps {
  hero: CaseStudyHero;
}

export function Hero({ hero }: HeroProps) {
  return (
    <header className="border-b border-gray-200 pb-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {hero.badges.map((badge) => (
            <span
              key={badge.id}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
            >
              {badge.label}
            </span>
          ))}
        </div>
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            {hero.title}
          </h1>
          {/* Subtitle */}
          <p className="text-xl text-gray-600">{hero.subtitle}</p>
        </div>

        <p className="max-w-3xl text-lg leading-8 text-gray-600">
          {hero.summary}
        </p>
        {/* Role */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span>
            <strong>Role:</strong> {hero.role}
          </span>

          <span>•</span>

          <span>{hero.readingTime}</span>

          <span>•</span>

          <span>Updated {hero.lastUpdated}</span>

          <span>•</span>

          <span>{hero.status}</span>
        </div>
      </div>
    </header>
  );
}
