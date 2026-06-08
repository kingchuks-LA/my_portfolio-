
export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">About Me</h1>

        <p className="mb-6 text-lg leading-8">
          I am a Technical Product Owner, Business Analyst, and Web Engineering
          graduate with a passion for building products that solve meaningful
          real-world problems.
        </p>

        <p className="mb-6 text-lg leading-8">
          My background combines product management, systems design, software
          engineering, business analysis, and project delivery. I enjoy
          transforming complex problems into structured, practical solutions.
        </p>

        <p className="mb-10 text-lg leading-8">
          I hold a Master&apos;s degree in Web Engineering and I am a Certified
          Scrum Product Owner. My work focuses on bridging business goals, user
          needs, and technical implementation.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">What I Do</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 font-semibold">Product Management</h3>
            <p>Requirements, user stories, backlog, discovery, and delivery.</p>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="mb-2 font-semibold">Systems Design</h3>
            <p>Architecture, database modeling, APIs, and trade-off analysis.</p>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="mb-2 font-semibold">Software Engineering</h3>
            <p>React, Node.js, REST APIs, SQL, PostgreSQL, and MongoDB.</p>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="mb-2 font-semibold">Project Delivery</h3>
            <p>Agile Scrum, coordination, stakeholder communication, and execution.</p>
          </div>
        </div>
      </section>
    </main>
  );
}