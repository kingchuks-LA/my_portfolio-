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

import { useEffect, useState } from "react";
import { Hero, Section } from "@/components/case-study";
import { trustedCarpoolNetwork } from "@/data/trusted-carpool-network";
import { trustedCarpoolNavigation } from "@/data/trusted-carpool-navigation";
import { EvidenceCard } from "@/components/case-study/EvidenceCard";
import {
  NavigationButton,
  DocumentNavigator,
} from "@/components/document-navigation";

import { Roadmap } from "@/components/case-study/Roadmap";
import { WireframeGallery } from "@/components/case-study/WireframeGallery";
import { ApiInteractionFlow } from "@/components/case-study/ApiInteractionFlow";
import { LayeredArchitectureDiagram } from "@/components/case-study/LayeredArchitectureDiagram";
import { RequestFlowSelector } from "@/components/case-study/RequestFlowSelector";
import { Breadcrumb } from "@/components/case-study";
import { LayerDetailPanel } from "@/components/case-study/LayerDetailPanel";

export default function TrustedCarpoolNetworkPage() {
  const caseStudy = trustedCarpoolNetwork;

  const [selectedFlow, setSelectedFlow] = useState("Create Trip");

  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const handleFlowChange = (flow: string) => {
    setSelectedFlow(flow);
    setSelectedLayerIndex(0);
  };

  useEffect(() => {
    const sectionIds = trustedCarpoolNavigation.flatMap((group) =>
      group.items.map((item) => item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <DocumentNavigator
        navigation={trustedCarpoolNavigation}
        activeSection={activeSection}
        isOpen={isNavigatorOpen}
        onClose={() => setIsNavigatorOpen(false)}
      />

      <Breadcrumb items={caseStudy.breadcrumb} />
      <Hero
        hero={caseStudy.hero}
        actions={<NavigationButton onClick={() => setIsNavigatorOpen(true)} />}
      />

      <div className="mt-16">
        <div>
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
          </Section>

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

            {/* Architecture Explorer */}
            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  How the System Works
                </h3>

                <p className="mt-2 text-gray-600">
                  Select a user action, then click any architecture layer to
                  inspect its role in processing the request.
                </p>
              </div>

              <div className="mt-8">
                <RequestFlowSelector
                  selectedFlow={selectedFlow}
                  onSelect={handleFlowChange}
                />
              </div>

              <div className="mt-10 flex flex-col items-center gap-8">
                <LayeredArchitectureDiagram
                  layers={caseStudy.systemArchitecture.layers}
                  selectedLayerIndex={selectedLayerIndex}
                  onLayerSelect={setSelectedLayerIndex}
                />

                <div className="w-full max-w-2xl">
                  <LayerDetailPanel
                    layer={
                      caseStudy.systemArchitecture.layers[selectedLayerIndex]
                    }
                    selectedFlow={selectedFlow}
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
