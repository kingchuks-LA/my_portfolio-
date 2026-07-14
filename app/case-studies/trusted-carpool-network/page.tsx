"use client";

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

import { useState } from "react";
import { Hero, Section } from "@/components/case-study";
import { trustedCarpoolNetwork } from "@/data/trusted-carpool-network";
import { EvidenceCard } from "@/components/case-study/EvidenceCard";
import { CaseStudyNavigation } from "@/components/case-study/CaseStudyNavigation";
import { trustedCarpoolNavigation } from "@/data/case-study-navigation";
import { Roadmap } from "@/components/case-study/Roadmap";
import { WireframeGallery } from "@/components/case-study/WireframeGallery";
import { DomainModel } from "@/components/case-study/DomainModel";
import { ApiInteractionFlow } from "@/components/case-study/ApiInteractionFlow";
import { LayeredArchitectureDiagram } from "@/components/case-study/LayeredArchitectureDiagram";
import { RequestFlowSelector } from "@/components/case-study/RequestFlowSelector";

export default function TrustedCarpoolNetworkPage() {
  const caseStudy = trustedCarpoolNetwork;

  const [selectedFlow, setSelectedFlow] = useState("Create Trip");

  const [currentStep, setCurrentStep] = useState(0);
  const handleFlowChange = (flow: string) => {
    setSelectedFlow(flow);
    setCurrentStep(0);
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Hero hero={caseStudy.hero} />

      <div className="mt-16 grid grid-cols-12 gap-12">
        <aside className="col-span-3">
          <CaseStudyNavigation navigation={trustedCarpoolNavigation} />
        </aside>

        <div className="col-span-9">
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
          <Section id="mvp" title="Minimum Viable Product (MVP)">
            <p className="mb-8 text-lg leading-8 text-gray-600">
              {caseStudy.mvp.description}
            </p>

            <ul className="space-y-4">
              {caseStudy.mvp.objectives.map((objective) => (
                <li key={objective} className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✓</span>

                  <span className="text-gray-700 leading-7">{objective}</span>
                </li>
              ))}
            </ul>
          </Section>
          <Section id="product-requirements" title="Product Requirements (PRD)">
            <p className="mb-8 text-lg leading-8 text-gray-600">
              {caseStudy.productRequirements.description}
            </p>

            <ul className="space-y-4">
              {caseStudy.productRequirements.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600">•</span>

                  <span className="leading-7 text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
            <EvidenceCard
              title="Product Requirements Document"
              description="Explore the complete PRD, including the MVP scope, functional requirements, user flows, assumptions, constraints, and acceptance criteria."
              cta="Explore PRD"
              href="#"
            />
            <Section id="user-stories" title="User Stories">
              <p className="mb-8 text-lg leading-8 text-gray-600">
                {caseStudy.userStories.description}
              </p>

              <ul className="space-y-4">
                {caseStudy.userStories.highlights.map((story) => (
                  <li key={story} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600">•</span>

                    <span className="leading-7 text-gray-700">{story}</span>
                  </li>
                ))}
              </ul>

              <EvidenceCard
                title="User Stories"
                description="Explore the complete backlog of user stories that translated commuter needs into implementable product requirements."
                cta="Explore User Stories"
                href="#"
              />
            </Section>
          </Section>

          <Section id="acceptance-criteria" title="Acceptance Criteria">
            <p className="mb-8 text-lg leading-8 text-gray-600">
              {caseStudy.acceptanceCriteria.description}
            </p>

            <ul className="space-y-4">
              {caseStudy.acceptanceCriteria.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600">•</span>

                  <span className="leading-7 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <EvidenceCard
              title="Acceptance Criteria"
              description="Explore the detailed acceptance criteria used to define when each MVP feature was considered complete."
              cta="Explore Acceptance Criteria"
              href="#"
            />
          </Section>

          <Section id="roadmap" title="Product Roadmap">
            <p className="mb-8 text-lg leading-8 text-gray-600">
              {caseStudy.roadmap.description}
            </p>

            <Roadmap roadmap={caseStudy.roadmap.roadmap} />

            <EvidenceCard
              title="Product Roadmap"
              description="Explore the complete roadmap showing how the product evolves from MVP validation to intelligent commuter recommendations."
              cta="Explore Product Roadmap"
              href="#"
            />
          </Section>
          <Section id="wireframes" title="Wireframes">
            <p className="mb-8 text-lg leading-8 text-gray-600">
              {caseStudy.wireframes.description}
            </p>

            <WireframeGallery screens={caseStudy.wireframes.screens} />

            <EvidenceCard
              title="Wireframes"
              description="Explore the complete wireframe collection used to validate the core commuter experience before UI design and development."
              cta="Explore Wireframes"
              href="#"
            />
          </Section>
          <Section id="database-design" title="Database Design">
            <p className="mb-8 text-lg leading-8 text-gray-600">
              {caseStudy.databaseDesign.description}
            </p>

            <DomainModel entities={caseStudy.databaseDesign.entities} />

            <EvidenceCard
              title="Entity Relationship Diagram"
              description="Explore the complete ER diagram showing the entities, relationships, and data model that underpin the Trusted Carpool Network."
              cta="Explore ER Diagram"
              href="#"
            />
          </Section>
          <Section id="rest-api" title="REST API">
            <p className="mb-8 text-lg leading-8 text-gray-600">
              {caseStudy.restApi.description}
            </p>

            <ApiInteractionFlow interactions={caseStudy.restApi.interactions} />

            <EvidenceCard
              title="REST API Specification"
              description="Explore the API specification that defines how the frontend and backend communicate through well-defined contracts."
              cta="Explore REST API"
              href="#"
            />
          </Section>

          <Section id="system-architecture" title="System Architecture">
            <p className="text-lg leading-8 text-gray-600">
              {caseStudy.systemArchitecture.description}
            </p>

            <RequestFlowSelector
              selectedFlow={selectedFlow}
              onSelect={handleFlowChange}
            />
            <p className="mt-6 text-gray-600 leading-7">
              Select a request, then use the controls below to follow how it is
              processed through each layer of the system.
            </p>

            <LayeredArchitectureDiagram
              layers={caseStudy.systemArchitecture.layers}
              selectedFlow={selectedFlow}
              currentStep={currentStep}
            />
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
                className="rounded-lg border px-4 py-2"
              >
                Previous
              </button>

              <span className="text-sm text-gray-600">
                Step {currentStep + 1} of{" "}
                {caseStudy.systemArchitecture.layers.length}
              </span>

              <button
                onClick={() =>
                  setCurrentStep((step) =>
                    Math.min(
                      step + 1,
                      caseStudy.systemArchitecture.layers.length - 1
                    )
                  )
                }
                className="rounded-lg border px-4 py-2"
              >
                Next
              </button>
            </div>
          </Section>

          <Section id="my-role" title="My Contribution"></Section>
          <Section id="my-role" title="My Role">
            <h3 className="mb-4 text-xl font-semibold">
              {caseStudy.myRole.title}
            </h3>

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
        </div>
      </div>
    </main>
  );
}
