import Link from "next/link";

const productStrategyDecisions = [
  {
    title: "Focus on One Corridor First",
    description:
      "Start with one commuter corridor to improve route density, validate demand, and learn before expanding.",
    status: "Coming soon",
  },
  {
    title: "Build Trust Before Expanding the Network",
    description:
      "Strengthen verification, accountability, and safety processes before scaling to more users and locations.",
    status: "Coming soon",
  },
  {
    title: "Daily Commuting Instead of General Ride Sharing",
    description:
      "Focus the product on recurring work journeys rather than occasional or on-demand trips.",
    status: "Coming soon",
  },
];

const technicalDecisions = [
  {
    title: "created_by Instead of user_id",
    description:
      "Use a field name that clearly records who created a route instead of implying ownership or a general user relationship.",
    status: "Coming soon",
  },
  {
    title: "Backend-Controlled Seat Availability",
    description:
      "Keep seat calculations on the server to maintain accurate availability and reduce the risk of overbooking.",
    status: "Coming soon",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Restrict sensitive actions according to the authenticated user's role and permissions.",
    status: "Coming soon",
  },
  {
    title: "Foreign-Key Relationships",
    description:
      "Maintain valid relationships between users, routes, bookings, payments, and verification records.",
    status: "Coming soon",
  },
];

const futureConsiderations = [
  {
    title: "Low-Connectivity Support",
    description:
      "Design clearer retry, timeout, and failure-recovery behaviour for weak network conditions.",
    status: "Planned",
  },
  {
    title: "Notification Reliability",
    description:
      "Improve delivery handling for booking confirmations, route changes, and cancellations.",
    status: "Planned",
  },
  {
    title: "Idempotent Booking Requests",
    description:
      "Prevent duplicate bookings when users retry requests after delays or connection failures.",
    status: "Planned",
  },
  {
    title: "Advanced Verification",
    description:
      "Explore document expiry tracking, automated checks, reminders, and risk-based reviews.",
    status: "Future",
  },
  {
    title: "Incident Reporting and Reputation Signals",
    description:
      "Introduce reporting, ratings, reviews, account restrictions, and dispute-resolution workflows.",
    status: "Future",
  },
];

type DecisionCardProps = {
  title: string;
  description: string;
  status: string;
};

function DecisionCard({ title, description, status }: DecisionCardProps) {
  return (
    <article className="rounded-xl border p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <span className="shrink-0 rounded-full border px-3 py-1 text-sm text-gray-500">
          {status}
        </span>
      </div>

      <p className="leading-7 text-gray-600">{description}</p>
    </article>
  );
}

export default function OtherDecisionsPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/systems-design"
          className="mb-10 inline-block font-semibold underline underline-offset-4"
        >
          ← Back to All Design Decisions
        </Link>

        <header className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Commute Matcher
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Other Product, Strategy, and Technical Decisions
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            A broader view of the decisions shaping the product, its market
            entry, backend design, and future direction.
          </p>
        </header>

        <div className="space-y-16">
          <section>
            <div className="mb-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide">
                Product Strategy
              </p>

              <h2 className="text-2xl font-semibold">
                Market Entry and Growth
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {productStrategyDecisions.map((decision) => (
                <DecisionCard key={decision.title} {...decision} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide">
                Supporting Technical Decisions
              </p>

              <h2 className="text-2xl font-semibold">
                Backend Clarity and Data Integrity
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {technicalDecisions.map((decision) => (
                <DecisionCard key={decision.title} {...decision} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide">
                Future Considerations
              </p>

              <h2 className="text-2xl font-semibold">
                Planned Improvements and Exploration
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {futureConsiderations.map((decision) => (
                <DecisionCard key={decision.title} {...decision} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
