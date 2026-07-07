import { FeaturedCaseStudy } from "@/components/featured-case-study";
import { featuredCaseStudy } from "@/data/featured-case-study";

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
            {/* MERN Project */}
            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-2xl font-semibold">
                MERN Stack Application
              </h3>

              <p className="mb-4 leading-7">
                Built a full-stack MERN application while working in an Agile
                environment. The project involved API development, frontend
                implementation, database integration, and deployment.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border px-3 py-1 text-sm">
                  React
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  Node.js
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  MongoDB
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  REST APIs
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  Agile
                </span>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-2xl font-semibold">Portfolio Website</h3>

              <p className="mb-4 leading-7">
                Designed and developed a personal portfolio website to showcase
                product ownership, business analysis, system design, and
                software engineering work.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border px-3 py-1 text-sm">
                  Next.js
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  TypeScript
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  Tailwind CSS
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  Responsive Design
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold">
            Research & Academic Work
          </h2>

          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-2xl font-semibold">
              Schema Inference for Semi-Structured Data
            </h3>

            <p className="mb-4 leading-7">
              Master's thesis focused on evaluating schema inference approaches
              for JSON-based semi-structured data. The research compared
              techniques for detecting data structures, optional attributes,
              nested objects, arrays, and data types.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-sm">
                Research
              </span>

              <span className="rounded-full border px-3 py-1 text-sm">
                JSON
              </span>

              <span className="rounded-full border px-3 py-1 text-sm">
                Data Modeling
              </span>

              <span className="rounded-full border px-3 py-1 text-sm">
                Web Engineering
              </span>

              <span className="rounded-full border px-3 py-1 text-sm">
                Schema Inference
              </span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
