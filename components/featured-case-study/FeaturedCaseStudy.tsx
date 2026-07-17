/**
 * ---------------------------------------------
 * File: FeaturedCaseStudy.tsx
 *
 * Purpose:
 * Displays a preview of the featured product
 * case study on the Projects page.
 *
 * Responsibilities:
 * - Display the featured case study information
 * - Encourage visitors to explore the full case study
 * - Keep presentation concerns separate from data
 *
 * Imports:
 * - Link
 * - FeaturedCaseStudy
 * ---------------------------------------------
 */

import Link from "next/link";

import { FeaturedCaseStudyData } from "@/types/featured-case-study";

interface FeaturedCaseStudyProps {
  caseStudy: FeaturedCaseStudyData;
}

export function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {caseStudy.eyebrow}
          </p>

          {/* Hero */}

          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {caseStudy.title}
          </h2>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            {caseStudy.summary}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Role
            </p>
            {/* Case study metadata */}
            <p className="mt-2 text-xl font-medium">{caseStudy.role}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Reading Time
            </p>

            <p className="mt-2 text-xl font-medium">{caseStudy.readingTime}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Status
            </p>

            <p className="mt-2 text-xl font-medium">{caseStudy.status}</p>
          </div>
        </div>
        {/* What you'll explore */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            What You&apos;ll Explore
          </h3>

          <ul className="grid gap-3 md:grid-cols-2">
            {caseStudy.exploreItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="text-green-600" aria-hidden="true">
                  ✓
                </span>

                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Primary call-to-action */}
        <div className="border-t pt-8">
          <Link
            href={caseStudy.href}
            className="inline-flex flex-col items-start gap-2 group"
          >
            <span className="text-lg font-semibold text-blue-600 transition group-hover:translate-x-1">
              Explore Product Case Study →
            </span>

            <span className="max-w-md text-gray-600">
              See how the product evolved from discovery to MVP.
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
