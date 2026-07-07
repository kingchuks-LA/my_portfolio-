/**
 * ---------------------------------------------
 * File: page.tsx
 *
 * Purpose:
 * Composes the Trusted Carpool Network case study
 * using reusable components and domain data.
 *
 * Responsibilities:
 * - Assemble the page layout
 * - Connect data with presentation components
 * - Define the overall reading experience
 *
 * Imports:
 * - Hero
 * - Section
 * - trustedCarpoolNetwork
 * ---------------------------------------------
 */

import { Hero, Section } from "@/components/case-study";
import { trustedCarpoolNetwork } from "@/data/trusted-carpool-network";

export default function TrustedCarpoolNetworkPage() {
  const caseStudy = trustedCarpoolNetwork;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Hero hero={caseStudy.hero} />

      <Section id="overview" title="Overview">
        <p className="text-lg leading-8 text-gray-600">{caseStudy.overview}</p>
      </Section>
    </main>
  );
}
