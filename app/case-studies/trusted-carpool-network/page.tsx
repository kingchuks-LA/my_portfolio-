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
        <p className="text-lg leading-8 text-gray-600">
          {caseStudy.overview.description}
        </p>
      </Section>
      <Section id="problem-statement" title="Problem Statement">
        <p className="text-lg leading-8 text-gray-600 whitespace-pre-line">
          {caseStudy.problemStatement.description}
        </p>
      </Section>
      <Section id="product-vision" title="Product Vision">
        <p className="text-lg leading-8 text-gray-600 whitespace-pre-line">
          {caseStudy.productVision.description}
        </p>
      </Section>
      <Section id="user-journey" title="User Journey">
        <p className="mb-10 text-lg leading-8 text-gray-600">
          {caseStudy.userJourney.introduction}
        </p>

        <div className="space-y-6">
          {caseStudy.userJourney.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-6 border-l-2 border-gray-200 pl-6"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-sm font-semibold">
                {index + 1}
              </div>

              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>

                <p className="mt-2 text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="my-role" title="My Contribution"></Section>
      <Section id="my-role" title="My Role">
        <h3 className="mb-4 text-xl font-semibold">{caseStudy.myRole.title}</h3>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          {caseStudy.myRole.summary}
        </p>

        <ul className="space-y-3">
          {caseStudy.myRole.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section id="deliverables" title="What I Delivered">
        <ul className="space-y-3">
          {caseStudy.deliverables.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section id="deliverables" title="What I Delivered">
        <ul className="space-y-3">
          {caseStudy.deliverables.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 text-green-600">
                ✓
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
