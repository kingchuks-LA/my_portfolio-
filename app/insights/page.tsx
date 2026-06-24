import Link from "next/link";

export default function ComeLearnWithMePage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-4xl font-bold">Insights</h1>

        <p className="mb-8 text-2xl italic leading-relaxed text-gray-700">
          Documenting my journey through AI, technology, and human-centred
          design—one question at a time.
        </p>

        <p className="mb-8 text-xl">
          I am not an expert. I&apos;m{" "}
          <span className="border-b-4 border-yellow-300">simply</span> curious.
        </p>

        <div className="max-w-4xl space-y-6 text-lg leading-8">
          <p>
            This is a space where I explore ideas that intrigue me, translate
            complex concepts into everyday language, and share what I&apos;m
            learning as I go. Some days, I&apos;ll have insights. Other days,
            I&apos;ll have more questions than answers.
          </p>

          <p>
            If you&apos;re curious too, pull up a chair. Let&apos;s learn
            together.
          </p>
        </div>

        <section className="mb-12 mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Topics I Am Exploring</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">Human-Centred AI</h3>

              <p className="leading-7">
                Exploring how artificial intelligence can support human
                decision-making, creativity, agency, and real-world problem
                solving.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">Systems Thinking</h3>

              <p className="leading-7">
                Understanding how people, processes, data, services, and
                technology interact within complex systems.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">Product Thinking</h3>

              <p className="leading-7">
                Reflecting on how ideas move from problems to requirements,
                decisions, designs, and deliverable solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Published Reflections</h2>

          <article className="rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Human-Centred Design
            </p>

            <h3 className="mb-3 text-2xl font-semibold">
              From Manual Approval to Automatic Booking: A Human-Centred Design
              Decision
            </h3>

            <p className="mb-5 leading-7 text-gray-700">
              How understanding commuter behaviour changed the Commute Matcher
              booking flow.
            </p>

            <Link
              href="/insights/manual-approval-to-automatic-booking"
              className="inline-flex font-semibold underline decoration-yellow-300 decoration-4 underline-offset-4 transition hover:text-gray-600"
            >
              Read reflection →
            </Link>
          </article>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Upcoming Reflections</h2>

          <div className="space-y-6">
            <div className="rounded-xl border p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Human Intelligence and AI in System Design
              </h3>

              <p className="leading-7">
                Exploring how human judgment and artificial intelligence might
                work together in designing better systems.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Building Trust in Peer-to-Peer Transportation
              </h3>

              <p className="leading-7">
                Thoughts on verification, safety, user confidence, and the
                challenge of designing trust into commuter platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-xl border p-8">
          <h2 className="mb-4 text-2xl font-semibold">The Invitation</h2>

          <p className="text-lg leading-8">
            This page will evolve as I learn. Some ideas may begin as simple
            notes, while others may grow into articles, case studies, or
            research reflections. The goal is not perfection. The goal is
            curiosity, clarity, and continuous growth.
          </p>
        </section>
      </section>
    </main>
  );
}
