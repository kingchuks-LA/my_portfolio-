export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-bold">Let's Connect</h1>

        <p className="mb-12 max-w-4xl text-lg leading-8">
          Whether you're interested in discussing product opportunities, system
          design, collaboration, or simply exchanging ideas, I'd be happy to
          connect.
        </p>

        <section className="mt-16 max-w-5xl mx-auto rounded-xl border p-8 mb-12">
          <h3 className="mb-6 text-2xl font-semibold">
            Bridging People, Products, and Technology
          </h3>
          <p className="text-lg leading-8">
            I enjoy turning complex problems into practical solutions by
            bridging business goals, human-centered design, and technical
            execution. Whether you're building meaningful products,exploring
            human-centered AI and human–AI collaboration , or looking for
            someone who can connect user needs with system architecture, I'd
            love to hear from you.
          </p>
          <p className="mt-4 text-lg leading-8">
            I'm open to Technical Product Owner, Product Manager, and Business
            Systems Analyst opportunities, as well as remote collaborations,
            international roles, and PhD research initiatives focused on
            Human-Centered AI.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="mb-3 text-xl font-semibold">LinkedIn</h2>
            <p>Let's connect professionally and exchange ideas.</p>
            <a
              href="https://www.linkedin.com/in/kingsleyemeka"
              target="_blank"
              className="underline"
            >
              Connect on LinkedIn →
            </a>
          </div>

          <div className="rounded-xl border p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="mb-3 text-xl font-semibold">Email</h2>
            <p>
              For opportunities, collaborations, or academic research
              discussions.
            </p>

            <a
              href="mailto:kingsley_emeka_c@yahoo.com?subject=Portfolio%20Inquiry"
              className="underline"
            >
              Send an Email →
            </a>
          </div>

          <div className="rounded-xl border p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="mb-3 text-xl font-semibold">GitHub</h2>
            <p>Explore my technical projects, system designs, and code.</p>

            <a
              href="https://github.com/kingchuks-LA?tab=repositories"
              target="_blank"
              className="underline"
            >
              View GitHub Profile →
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
