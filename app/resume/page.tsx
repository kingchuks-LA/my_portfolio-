export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">Resume</h1>

        <p className="mb-12 max-w-4xl text-lg leading-8">
          A summary of my experience across product ownership, business
          analysis, system design, and software engineering. For a detailed
          overview, download the complete resume below.
        </p>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Professional Snapshot</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-xl">Years in Product & Business Analysis</p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="text-3xl font-bold">M.Sc.</h3>
              <p className="text-xl">Web Engineering</p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="text-3xl font-bold">CSPO</h3>
              <p className="text-xl">Certified Scrum Product Owner</p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="text-3xl font-bold">End-to-End</h3>
              <p className="text-xl">Product Delivery</p>
              <p className="mt-3 text-sm text-gray-600">
                Business → Product → Engineering
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Core Competencies</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Product Ownership",
              "Business Analysis",
              "Stakeholder Management",
              "Requirements Engineering",
              "System Design",
              "Solution Architecture",
              "Agile Delivery",
              "User Stories",
              "REST APIs",
              "SQL",
              "PostgreSQL",
            ].map((skill) => (
              <span key={skill} className="rounded-full border px-4 py-2">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-xl border p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Download Resume</h2>

          <p className="mb-6">
            Download the complete resume for a detailed view of my
            education,qualification and experience.
          </p>

          <a
            href="/artifacts/resume.pdf"
            target="_blank"
            className="inline-block rounded-lg bg-black px-6 py-3 text-white"
          >
            Download PDF
          </a>
        </section>
      </section>
    </main>
  );
}
