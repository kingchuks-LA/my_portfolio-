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

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h2 className="mb-3 text-xl font-semibold">LinkedIn</h2>
            <p>Let's connect professionally and exchange ideas.</p>
            <a
              href="www.linkedin.com/in/kingsleyemeka"
              target="_blank"
              className="underline"
            >
              Connect on LinkedIn →
            </a>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="mb-3 text-xl font-semibold">Email</h2>
            <p>For opportunities, collaborations, or questions.</p>

            <a
              href="mailto:kingsley_emeka_c@yahoo.com?subject=Portfolio%20Inquiry"
              className="underline"
            >
              Send an Email →
            </a>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="mb-3 text-xl font-semibold">GitHub</h2>
            <p>Explore my technical projects and code.</p>

            <a
              href="https://github.com/kingchuks-LA?tab=repositories"
              target="_blank"
              className="underline"
            >
              View Projects →
            </a>
          </div>
        </section>

        <section className="mt-16 rounded-xl border p-8">
          <p className="text-lg leading-8">
            I enjoy turning complex problems into practical solutions by
            bridging business goals, product thinking, and engineering
            execution. Whether you're building meaningful products, exploring
            new ideas, or looking for someone who can connect strategy with
            implementation, I'd love to hear from you.
          </p>
          <p className="text-lg leading-8">
            Open to product, business analysis, and technical product
            opportunities, including remote collaborations and international
            roles.
          </p>
        </section>
      </section>
    </main>
  );
}
