import Image from "next/image";
import Link from "next/link";

export default function SystemsDesignPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          System Design
        </p>
        <h1 className="mb-6 text-4xl font-bold">
          Designing Practical, Scalable Systems
        </h1>
        <p className="mb-12 max-w-3xl text-lg leading-8">
          I use systems thinking to connect product goals with technical
          architecture. This includes understanding users, modeling data,
          designing services, and making trade-offs between simplicity,
          scalability, trust, and delivery speed.
        </p>
        <section className="mt-16 rounded-xl border p-8">
          <h2 className="mb-4 text-3xl font-semibold">
            Trusted Carpool Network
          </h2>

          <p className="mb-6 text-lg leading-8">
            A verification-first commuter matching platform designed to improve
            trust and safety for daily commuters.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border px-3 py-1 text-sm">
              Product Strategy
            </span>

            <span className="rounded-full border px-3 py-1 text-sm">
              User Flows
            </span>

            <span className="rounded-full border px-3 py-1 text-sm">
              System Architecture
            </span>

            <span className="rounded-full border px-3 py-1 text-sm">
              PostgreSQL
            </span>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Key Design Decisions</h2>

            <p className="mt-2 max-w-3xl leading-7 text-gray-600">
              Explore the technical and product decisions that shaped the
              Commute Matcher platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/systems-design/design-decisions/postgresql-over-mongodb"
              className="group rounded-xl border p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="rounded-full border px-3 py-1 text-sm">
                  Database
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                PostgreSQL over MongoDB
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                PostgreSQL was selected to support strongly related data,
                reliable matching logic, auditability, and transactional
                consistency.
              </p>

              <span className="font-semibold underline underline-offset-4">
                Read the full decision
              </span>
            </Link>

            <Link
              href="/systems-design/design-decisions/automatic-booking"
              className="group rounded-xl border p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="rounded-full border px-3 py-1 text-sm">
                  Booking Experience
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Automatic Booking Instead of Driver Approval
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Publishing a route is treated as a driver&apos;s pre-commitment,
                allowing eligible passengers to reserve available seats without
                waiting for manual approval.
              </p>

              <span className="font-semibold underline underline-offset-4">
                Read the full decision
              </span>
            </Link>

            <Link
              href="/systems-design/design-decisions/verified-commuters"
              className="group rounded-xl border p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="rounded-full border px-3 py-1 text-sm">
                  Product Design
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Verified Commuters Rather Than Open Ride Sharing
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Commute Matcher prioritises a trusted network of identifiable
                commuters rather than allowing unrestricted participation from
                anonymous users.
              </p>

              <span className="font-semibold underline underline-offset-4">
                Read the full decision
              </span>
            </Link>

            <Link
              href="/systems-design/design-decisions/verification-first-approach"
              className="group rounded-xl border p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="rounded-full border px-3 py-1 text-sm">
                  Trust & Safety
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Verification-First Approach
              </h3>

              <p className="mb-5 leading-7 text-gray-600">
                Users must meet the required verification level before creating
                routes, booking seats, or joining confirmed commutes.
              </p>

              <span className="font-semibold underline underline-offset-4">
                Read the full decision
              </span>
            </Link>

            <article className="rounded-xl border p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="rounded-full border px-3 py-1 text-sm">
                  Matching
                </span>

                <span className="text-sm font-medium text-gray-500">
                  Coming soon
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Route-Based Matching
              </h3>

              <p className="leading-7 text-gray-600">
                Commuters are matched using recurring routes and schedules
                rather than an on-demand ride-hailing model.
              </p>
            </article>
          </div>
        </section>

        <div className="mt-8">
          <Link
            href="/systems-design/other-decisions"
            className="font-semibold underline underline-offset-4"
          >
            View other product, strategy, and technical decisions →
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold">Design Artifacts</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">User Flow Diagram</h3>

              <p className="mb-4 leading-7">
                Shows how riders and drivers move from registration to
                verification, ride creation, matching, booking, and
                confirmation.
              </p>
              <section className="mt-16">
                <h2 className="mb-2 text-3xl font-semibold">
                  User Flow Diagrams
                </h2>
                <p className="mb-8 max-w-4xl text-lg leading-7">
                  These flows show how users register, select rides, book trips,
                  and complete payment within the Trusted Carpool Network.
                </p>

                {/*USER FLOW DIAGRAMS*/}

                {/*User Registration & Verification*/}

                <div className="space-y-12">
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold">
                      User Registration & Verification
                    </h3>

                    <p className="mb-4 leading-7">
                      Shows how users create an account, submit verification
                      details, and become eligible to participate in trusted
                      ride matching.
                    </p>
                    <div className="rounded-xl border p-1">
                      <Image
                        src="/artifacts/user-reg-verify.jpg"
                        alt="User registration and verification flow"
                        width={1200}
                        height={700}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="mt-2 flex flex-col gap-0.5">
                      <a
                        href="/artifacts/user-reg-verify.jpg"
                        target="_blank"
                        className="font-semibold underline"
                      >
                        Open Full Size →
                      </a>
                      <a
                        href="/artifacts/user-reg-verify.pdf"
                        target="_blank"
                        className="font-semibold underline"
                      >
                        Download PDF →
                      </a>
                    </div>
                  </div>

                  {/*SELECT RIDE FLOW*/}
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold">
                      Select Ride Flow
                    </h3>

                    <p className="mb-4 leading-7">
                      Shows how a commuter searches available rides, reviews
                      route details, and selects a suitable ride option.
                    </p>

                    <div className="rounded-xl border p-1">
                      <Image
                        src="/artifacts/select-ride-flow.jpg"
                        alt="Select ride flow"
                        width={1200}
                        height={700}
                        className="w-full rounded-lg"
                      />
                    </div>

                    <div className="mt-2 flex flex-col gap-0.5">
                      <a
                        href="/artifacts/select-ride-flow.jpg"
                        target="_blank"
                        className="font-semibold underline"
                      >
                        Open Full Size →
                      </a>
                      <a
                        href="/artifacts/select-ride-flow.pdf"
                        target="_blank"
                        className="font-semibold underline"
                      >
                        Download PDF →
                      </a>
                    </div>
                  </div>

                  {/*BOOKING AND PAYMENT FLOW*/}

                  <div>
                    <h3 className="mb-2 text-2xl font-semibold">
                      Booking & Payment Flow
                    </h3>

                    <p className="mb-4 leading-7">
                      Shows how a rider books a selected ride, confirms trip
                      details, and completes payment.
                    </p>
                    <div className="rounded-xl border p-1">
                      <Image
                        src="/artifacts/book-pay-flow.jpg"
                        alt="Booking and payment flow"
                        width={1200}
                        height={700}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="mt-2 flex flex-col gap-0.5">
                      <a
                        href="/artifacts/book-pay-flow.jpg"
                        target="_blank"
                        className="font-semibold underline"
                      >
                        Open Full Size →
                      </a>
                      <a
                        href="/artifacts/book-pay-flow.pdf"
                        target="_blank"
                        className="font-semibold underline"
                      >
                        Download PDF →
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*SYSTEM ARCHITECTURE*/}
            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                System Architecture
              </h3>

              <p className="mb-4 leading-7">
                Shows how the frontend, authentication service, matching
                service, notification service, payment flow, and database
                communicate.
              </p>
              <div className="rounded-xl border p-1">
                <Image
                  src="/artifacts/system-architecture.jpg"
                  alt="Trusted Carpool System Architecture Diagram"
                  width={800}
                  height={500}
                  className="w-full rounded-lg"
                />
              </div>

              <div className="mt-2 flex flex-col gap-0.5">
                <a
                  href="/artifacts/system-architecture.jpg"
                  target="_blank"
                  className="font-semibold underline"
                >
                  Open Full Size →
                </a>

                <a
                  href="/artifacts/system-architecture.pdf"
                  target="_blank"
                  className="font-semibold underline"
                >
                  Download PDF →
                </a>
              </div>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Entity Relationship Diagram
              </h3>

              <p className="mb-4 leading-7">
                Shows the relational database structure for users, rides,
                bookings, payments, verification records, and driver profiles.
              </p>

              <div className="rounded-xl border p-1">
                <Image
                  src="/artifacts/erd.jpeg"
                  alt="Entity Relationship Diagram"
                  width={800}
                  height={500}
                  className="w-full rounded-lg"
                />
              </div>

              <div className="mt-2 flex flex-col gap-0.5">
                <a
                  href="/artifacts/erd.jpeg"
                  target="_blank"
                  className="font-semibold underline"
                >
                  Open Full Size →
                </a>

                <a
                  href="/artifacts/erd.pdf"
                  target="_blank"
                  className="font-semibold underline"
                >
                  Download PDF →
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
