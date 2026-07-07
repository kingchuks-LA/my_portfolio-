import { FeaturedCaseStudy } from "@/components/featured-case-study";
import { featuredCaseStudy } from "@/data/featured-case-study";

import Card from "@/components/ui/Card";

import { technicalProjects, researchProjects } from "./projects.data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Projects
        </p>

        <h1 className="mb-6 text-4xl font-bold">Projects</h1>

        <p className="mb-12 max-w-4xl text-lg leading-8">
          A collection of projects that showcase my approach to product
          ownership, business analysis, system design, and software engineering.
          Each project reflects how I move from problem discovery to solution
          design and implementation.
        </p>
        <FeaturedCaseStudy caseStudy={featuredCaseStudy} />

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold">Other Technical Work</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {technicalProjects.map((project) => (
              <Card key={project.id}>
                <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>

                <p className="mb-6 leading-7">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold">
            Research & Academic Work
          </h2>
          {researchProjects.map((project) => (
            <Card key={project.id}>
              <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>

              <p className="mb-6 leading-7">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </section>
      </section>
    </main>
  );
}
