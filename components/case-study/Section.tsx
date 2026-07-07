/**
 * ---------------------------------------------
 * File: Section.tsx
 *
 * Purpose:
 * Provides a reusable layout component that provides a consistent structure
 * for all sections within a case study.
 *
 * Responsibilities:
 * - Render semantic section markup
 * - Display a section heading
 * - Render child content using composition
 * - Maintain consistent spacing and typography
 *
 * Imports:
 * - ReactNode
 *
 * Summary:
 * This component is intentionally presentational.
 * It owns layout, not content.
 * ---------------------------------------------
 */

import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-gray-200 py-16 scroll-mt-24">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <div>{children}</div>
      </div>
    </section>
  );
}
