import Link from "next/link";

export default function PostgreSQLOverMongoDBPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/systems-design"
          className="mb-10 inline-block font-semibold underline underline-offset-4"
        >
          ← Back to Systems Design
        </Link>

        <header className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Design Decision · Database
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Why PostgreSQL Over MongoDB?
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            PostgreSQL was selected as the primary database for Commute Matcher
            because the platform depends on structured relationships,
            accountability, reliable matching, and strong data integrity.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Context</h2>

            <div className="space-y-4 leading-8">
              <p>
                Commute Matcher is a relationship-driven platform. Its core
                entities are closely connected:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>A user can participate as a driver or passenger.</li>
                <li>A driver creates a route.</li>
                <li>A passenger books a seat on a route.</li>
                <li>
                  A booking belongs to both a passenger and a specific route.
                </li>
                <li>A route is connected to the driver who created it.</li>
                <li>
                  Payments, verification records, reviews, and future
                  notifications will connect to users, routes, and bookings.
                </li>
              </ul>

              <p>
                The platform therefore needs to maintain clear and reliable
                relationships between its records.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Decision</h2>

            <p className="leading-8">
              PostgreSQL was selected as the primary database for the Commute
              Matcher MVP.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Alternatives Considered
            </h2>

            <div className="space-y-4 leading-8">
              <p>
                MongoDB was considered because it supports flexible document
                structures and can be useful when application data is
                unstructured or likely to change frequently.
              </p>

              <p>
                However, most of Commute Matcher&apos;s core data is structured
                and relational. The product benefits more from clearly defined
                relationships and constraints than from document flexibility.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Reasoning</h2>

            <div className="space-y-4 leading-8">
              <p>
                PostgreSQL allows the system to enforce relationships through
                foreign keys.
              </p>

              <p>
                For example, the{" "}
                <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                  created_by
                </code>{" "}
                field in the{" "}
                <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                  routes
                </code>{" "}
                table references an existing record in the{" "}
                <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                  users
                </code>{" "}
                table. This prevents a route from being associated with a user
                who does not exist.
              </p>

              <p>
                This is particularly important because Commute Matcher is a
                trust-focused product. The system must be able to determine:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>who created a route;</li>
                <li>who booked a seat;</li>
                <li>who made or received a payment;</li>
                <li>who completed verification; and</li>
                <li>who participated in a commute.</li>
              </ul>

              <p>
                Maintaining these relationships supports accountability,
                auditing, safety investigations, and future dispute resolution.
              </p>

              <p>
                PostgreSQL also supports the platform&apos;s matching
                requirements. Route matching involves filtering and joining data
                based on origin, destination, departure time, user role, seat
                availability, and eventually verification status.
              </p>

              <p>
                SQL provides a clear and reliable way to perform these
                operations across related tables.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Trade-offs</h2>

            <div className="space-y-4 leading-8">
              <p>
                Choosing PostgreSQL introduces a more structured schema. Changes
                to the data model may require database migrations and more
                careful planning than they would in a flexible document
                database.
              </p>

              <p>
                MongoDB could make it easier to store rapidly changing or
                loosely structured data. However, that flexibility could also
                make it more difficult to consistently enforce relationships
                between users, routes, bookings, and payments.
              </p>

              <p>
                For the MVP, stronger consistency and relational integrity were
                considered more important than schema flexibility.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Implementation</h2>

            <div className="space-y-4 leading-8">
              <p>The database is organised around related tables such as:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                    users
                  </code>
                </li>
                <li>
                  <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                    routes
                  </code>
                </li>
                <li>
                  <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                    bookings
                  </code>
                </li>
                <li>
                  <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                    payments
                  </code>
                </li>
                <li>verification records</li>
              </ul>

              <p>
                Foreign keys are used to connect these records. For example:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                    routes.created_by
                  </code>{" "}
                  references{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                    users.id
                  </code>
                  ;
                </li>
                <li>a booking references both a passenger and a route; and</li>
                <li>
                  payment records can be connected to the relevant booking and
                  user.
                </li>
              </ul>

              <p>
                These constraints help prevent incomplete, invalid, or
                disconnected records from entering the system.
              </p>
            </div>
          </section>

          <section className="rounded-xl border p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Outcome</h2>

            <div className="space-y-4 leading-8">
              <p>
                PostgreSQL provides Commute Matcher with a reliable foundation
                for relational data, matching logic, auditability, and future
                trust and safety features.
              </p>

              <p>
                The relational model currently supports connected route and
                booking records while allowing the backend to calculate seat
                availability and return the relevant commute information.
              </p>

              <p>
                The decision also prepares the platform for payments,
                verification, notifications, reviews, reporting, and dispute
                resolution.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-14 border-t pt-8">
          <Link
            href="/systems-design"
            className="font-semibold underline underline-offset-4"
          >
            ← Return to all design decisions
          </Link>
        </div>
      </article>
    </main>
  );
}
