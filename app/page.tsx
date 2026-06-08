export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Product • Systems Design • Engineering
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Kingsley Emeka
        </h1>

        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          Technical Product Owner | Systems Thinker | Web Engineer
        </h2>

        <p className="mb-8 max-w-3xl text-lg leading-8">
          I bridge the gap between business goals, user needs, and technical
          implementation. My work combines product strategy, systems thinking,
          and software engineering to design practical, scalable, and impactful
          solutions.
        </p>

  <div className="flex flex-wrap gap-4 mb-16">
  <a
    href="/case-studies/trusted-carpool-network"
    className="rounded-lg bg-black px-5 py-3 text-white"
  >
    View Case Study
  </a>

  <a
    href="/about"
    className="rounded-lg border px-5 py-3"
  >
    About Me
  </a>
    </div>
      </section>
      <section>
  <h2 className="mb-6 text-3xl font-bold">
    Featured Project
  </h2>

  <div className="rounded-xl border p-6">
    <p className="mb-2 text-sm uppercase tracking-wide">
      Case Study
    </p>

    <h3 className="mb-3 text-2xl font-semibold">
      Trusted Carpool Network
    </h3>

    

  <p className="mb-4 text-sm font-medium uppercase tracking-wide">
  Product Owner • System Designer • Solution Architect
  </p>

    <p className="mb-4 leading-7">
      A verification-first commuter matching platform designed
      to improve trust and safety for daily commuters.
    </p>

    <a
      href="/case-studies/trusted-carpool-network"
      className="font-semibold underline"
    >
      Read Case Study →
    </a>
  </div>
</section>
    </main>
  );
}