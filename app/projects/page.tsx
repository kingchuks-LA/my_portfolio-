import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Projects
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          Selected Work
        </h1>

        <p className="mb-12 max-w-3xl text-lg leading-8">
          A collection of product, systems design, research, and engineering
          work that reflects how I approach real-world problems.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide">
              Featured Case Study
            </p>

            <h2 className="mb-3 text-2xl font-semibold">
              Trusted Carpool Network
            </h2>

            <p className="mb-4 leading-7">
              A verification-first commuter matching platform designed to
              improve trust and safety for daily commuters in Lagos.
            </p>

            <Link
              href="/case-studies/trusted-carpool-network"
              className="font-semibold underline"
            >
              View Case Study →
            </Link>
          </div>

          <div className="rounded-xl border p-6">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide">
              Research
            </p>

            <h2 className="mb-3 text-2xl font-semibold">
              MSc Thesis: Schema Inference for JSON Data
            </h2>

            <p className="mb-4 leading-7">
              A research project evaluating schema inference approaches for
              semi-structured JSON data, with focus on correctness, structure,
              and data modeling quality.
            </p>

            <p className="font-semibold">Coming Soon</p>
          </div>

          <div className="rounded-xl border p-6">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide">
              Business Systems
            </p>

            <h2 className="mb-3 text-2xl font-semibold">
              ERP Automation & Process Improvement
            </h2>

            <p className="mb-4 leading-7">
              Business analysis and product ownership work focused on improving
              workflows, reducing manual processes, and supporting better
              operational decisions.
            </p>

            <p className="font-semibold">Coming Soon</p>
          </div>
        </div>
      </section>
    </main>
  );
}