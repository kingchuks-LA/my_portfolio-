export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Experience
        </p>

        <h1 className="mb-6 text-4xl font-bold">Experience</h1>

        <p className="mb-12 max-w-4xl text-lg leading-8">
          Over the years, I have worked across product ownership, business
          analysis, software development, and project management. My experience
          spans startup, enterprise, and project environments where I have
          translated business needs into practical solutions, collaborated with
          cross-functional teams, and delivered outcomes that create measurable
          value.
        </p>

        <div className="space-y-8">
          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">Project Manager</h2>
            <p className="mb-4 font-medium">
              A.M AMOSKEN NIG LTD • 2023 - Present
            </p>
            <p className="mb-4 leading-7">
              Led the coordination of architects, engineers, contractors,
              suppliers, and stakeholders across construction projects, ensuring
              delivery quality, schedule alignment, and budget control.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Managed project execution from planning through delivery.</li>
              <li>Coordinated multidisciplinary teams and external vendors.</li>
              <li>
                Tracked budgets, procurement activities, and project timelines.
              </li>
              <li>
                Ensured compliance with regulatory and quality requirements.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-sm">
                Project Management
              </span>
              <span className="rounded-full border px-3 py-1 text-sm">
                Stakeholder Management
              </span>
              <span className="rounded-full border px-3 py-1 text-sm">
                Vendor Coordination
              </span>
            </div>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">
              Software Developer, Student Support
            </h2>
            <p className="mb-4 font-medium">Staffbase GmbH • 2020 - 2021</p>
            <p className="mb-4 leading-7">
              Contributed to software development and product delivery within an
              Agile environment while supporting API development, testing, and
              sprint execution.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Designed and tested RESTful APIs.</li>
              <li>Participated in backlog refinement and sprint planning.</li>
              <li>
                Built a MERN-stack application and deployed it to production.
              </li>
              <li>
                Collaborated with developers and stakeholders in an
                international environment.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-sm">
                REST APIs
              </span>
              <span className="rounded-full border px-3 py-1 text-sm">
                Agile
              </span>
              <span className="rounded-full border px-3 py-1 text-sm">
                MERN Stack
              </span>
              <span className="rounded-full border px-3 py-1 text-sm">
                Product Development
              </span>
            </div>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">
              Business Analyst / Technical Product Owner
            </h2>
            <p className="mb-4 font-medium">
              A4S Ltd formely known as G4V Limited • 2010 - 2015
            </p>
            <p className="mb-4 leading-7">
              Worked as a Business Analyst and Technical Product Owner,
              collaborating with business stakeholders and development teams to
              improve business processes, define requirements, and deliver
              software solutions.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Gathered and documented business and functional requirements.
              </li>
              <li>
                Created user stories, workflows, and product documentation.
              </li>
              <li>
                Supported ERP automation and business process improvements.
              </li>
              <li>
                Worked closely with developers, testers, and business
                stakeholders.
              </li>
              <li>
                Performed data analysis, SQL reporting, and solution validation.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-sm">
                Product Ownership
              </span>
              <span className="rounded-full border px-3 py-1 text-sm">
                Business Analysis
              </span>
              <span className="rounded-full border px-3 py-1 text-sm">
                Agile Scrum
              </span>
              <span className="rounded-full border px-3 py-1 text-sm">SQL</span>
              <span className="rounded-full border px-3 py-1 text-sm">
                ERP Systems
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 rounded-xl border p-8">
        <h2 className="mb-4 text-2xl font-semibold">Key Strengths</h2>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border px-4 py-2">
            Product Ownership
          </span>

          <span className="rounded-full border px-4 py-2">
            Business Analysis
          </span>

          <span className="rounded-full border px-4 py-2">System Design</span>

          <span className="rounded-full border px-4 py-2">
            Solution Architecture
          </span>

          <span className="rounded-full border px-4 py-2">
            Stakeholder Management
          </span>

          <span className="rounded-full border px-4 py-2">Agile Delivery</span>
        </div>
      </section>
    </main>
  );
}
