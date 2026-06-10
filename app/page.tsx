export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Product Ownership • Business Analysis • System Design
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Kingsley Emeka
        </h1>

        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          Technical Product Owner | Business Analyst | Solution Architect
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
  <a
  href="/resume"
  className="rounded-lg border px-5 py-3"
>
  View Resume
</a>
    </div>
      </section>
  <section>
     <div className="mt-16 grid gap-6 md:grid-cols-3">
  <div>
    <h3 className="text-3xl font-bold">5+</h3>
    <p>Years in Product & Business Analysis</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">M.Sc.</h3>
    <p>Web Engineering</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">CSPO</h3>
    <p>Certified Scrum Product Owner</p>
  </div>
</div>
    
    </section>    
 <section className="mt-24">
  <h2 className="mb-8 text-3xl font-bold">Featured Project</h2>

  <div className="rounded-xl border p-8">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wide">
      Case Study
    </p>

    <h3 className="mb-4 text-3xl font-bold">
      Trusted Carpool Network
    </h3>

    <p className="mb-6 max-w-3xl text-lg leading-8">
      Inspired by the safety challenges faced by early-morning commuters in Lagos,
      this platform matches verified drivers and passengers through a trust-first
      carpooling network.
     The platform focuses on verification, trust, 
     and route-based matching rather than operating as a traditional
      ride-hailing service. 

    </p>  

    <div className="mb-6 flex flex-wrap gap-2">
      <span className="rounded-full border px-3 py-1 text-sm">Product Strategy</span>
      <span className="rounded-full border px-3 py-1 text-sm">System Design</span>
      <span className="rounded-full border px-3 py-1 text-sm">Solution Architecture</span>
      <span className="rounded-full border px-3 py-1 text-sm">PostgreSQL</span>
      <span className="rounded-full border px-3 py-1 text-sm">Node.js</span>
    </div>

    <ul className="mb-6 list-disc pl-6 space-y-2">
      <li>Defined user journeys and verification workflows</li>
      <li>Designed system architecture and service interactions</li>
      <li>Modeled relational database structure using PostgreSQL</li>
      <li>Built MVP backend APIs and matching logic</li>
    </ul>
<hr className="my-8" />
    <div className="mb-6 grid gap-4 md:grid-cols-3">
      <div>
        <p className="font-semibold">Role</p>
        <p>Product Owner / Solution Architect</p>
      </div>

      <div>
        <p className="font-semibold">Status</p>
        <p>MVP in Progress</p>
      </div>

      <div>
        <p className="font-semibold">Focus</p>
        <p>Trust, Safety, Matching</p>
      </div>
      <div>
        <p className="font-semibold">Impact</p>
        <p>Safer and more trusted commuting</p>
      </div>
    </div>

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