export default function TrustedCarpoolNetworkPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Case Study
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          Trusted Carpool Network
        </h1>

        <p className="mb-10 text-lg leading-8">
          A verification-first commuter matching platform designed to improve
          trust and safety for daily commuters in Lagos.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">The Problem</h2>
        <p className="mb-8 text-lg leading-8">
          Early-morning commuters often rely on informal ride arrangements with
          strangers. This creates safety, trust, and accountability concerns for
          both passengers and drivers.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">My Role</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-lg">
          <li>Product discovery</li>
          <li>Requirements definition</li>
          <li>User flow design</li>
          <li>System architecture design</li>
          <li>Database design</li>
          <li>MVP planning</li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">Key Decisions</h2>
        <div className="space-y-4">
          <div className="rounded-lg border p-5">
            <h3 className="mb-2 font-semibold">PostgreSQL over MongoDB</h3>
            <p>
              The system has strongly related entities such as users, rides,
              bookings, vehicles, payments, and verification records.
            </p>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="mb-2 font-semibold">Verification-first design</h3>
            <p>
              Trust is treated as a core product requirement, not an afterthought.
            </p>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="mb-2 font-semibold">Corridor-focused MVP</h3>
            <p>
              The first version focuses on one commuter corridor to improve
              matching quality and reduce launch complexity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}