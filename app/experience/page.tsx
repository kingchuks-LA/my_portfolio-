export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Experience
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          Building Across Product, Engineering, and Business
        </h1>

        <p className="mb-12 text-lg leading-8">
          My experience spans product ownership, business analysis, software
          development, and project management. I enjoy working at the intersection
          of business goals, user needs, and technical implementation.
        </p>

        <div className="space-y-8">
          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">Project Manager</h2>
            <p className="mb-4 font-medium">A.M AMOSKEN NIG LTD • 2023 - Present</p>
            <p className="leading-7">
              Coordinate architects, engineers, contractors, suppliers, and
              stakeholders to support successful project delivery. This role has
              strengthened my ability to manage complexity, communicate clearly,
              and align execution with business objectives.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">
              Software Developer, Student Support
            </h2>
            <p className="mb-4 font-medium">Staffbase GmbH • 2020 - 2021</p>
            <p className="leading-7">
              Contributed to web development and API-related work in an Agile
              environment. Built and tested RESTful APIs, supported sprint
              activities, and developed a MERN-stack application.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">
              Business Analyst / Technical Product Owner
            </h2>
            <p className="mb-4 font-medium">A4S Ltd • 2010 - 2015</p>
            <p className="leading-7">
              Worked as a bridge between business stakeholders and technical
              teams. Gathered requirements, created user stories and functional
              specifications, supported ERP automation, database analysis,
              testing, and product delivery.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}