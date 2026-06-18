import Link from "next/link";

export default function VerificationFirstApproachPage() {
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
            Design Decision · Trust & Safety
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Why a Verification-First Approach?
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            Verification is treated as part of the core product experience
            because Commute Matcher depends on trust, accountability, and
            identifiable participation.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Context</h2>

            <div className="space-y-4 leading-8">
              <p>
                Commute Matcher is designed for people sharing private vehicles
                with commuters they may not already know personally.
              </p>

              <p>
                Unlike public transport or traditional ride-hailing services,
                the platform depends on both drivers and passengers feeling
                comfortable enough to share a daily commute. This makes
                identity, accountability, and safety central to the product
                experience.
              </p>

              <p>
                The platform is also intended for early-morning and evening
                commuters, when people may feel more vulnerable and have fewer
                alternative transport options.
              </p>

              <p>
                In this environment, successful route matching alone is not
                enough. Users also need reasonable confidence that the people
                they meet through the platform are genuine and accountable.
              </p>

              <p>
                Commute Matcher must therefore do more than connect people
                travelling in the same direction. It must build trust into the
                way users access and participate in the platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Decision</h2>

            <div className="space-y-4 leading-8">
              <p>Commute Matcher will follow a verification-first approach.</p>

              <p>
                Users may be allowed to register and explore limited parts of
                the platform, but they must meet the required verification level
                before carrying out sensitive actions such as:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>creating a route;</li>
                <li>offering seats as a driver;</li>
                <li>booking a seat;</li>
                <li>joining a confirmed commute; and</li>
                <li>participating in payment or review processes.</li>
              </ul>

              <p>
                Verification is therefore treated as part of the core product
                flow rather than as an optional feature added after the matching
                system.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Alternatives Considered
            </h2>

            <div className="space-y-4 leading-8">
              <p>
                One alternative was to allow users to register, create routes,
                and book seats immediately, with verification introduced after
                the platform gained more users.
              </p>

              <p>
                This could reduce onboarding friction and increase early
                sign-ups. However, it would expose users to unverified
                participants and make it more difficult to establish a strong
                trust culture from the beginning.
              </p>

              <p>
                Another alternative was to make verification optional and allow
                users to decide whether they wanted to interact only with
                verified participants.
              </p>

              <p>
                Although this would provide more flexibility, it could create an
                inconsistent trust experience and weaken the platform&apos;s
                safety-focused value proposition.
              </p>

              <p>
                A third alternative was to verify only drivers. However, this
                would create an unequal trust model. Drivers are opening their
                private vehicles to other people and also need confidence that
                passengers are genuine and accountable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Reasoning</h2>

            <div className="space-y-4 leading-8">
              <p>
                Trust is not a secondary feature in Commute Matcher. It is one
                of the product&apos;s core requirements.
              </p>

              <p>
                A route match based on origin, destination, and departure time
                is useful only when both participants feel reasonably
                comfortable proceeding with the commute.
              </p>

              <p>A verification-first model helps the platform establish:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>that users are connected to genuine accounts;</li>
                <li>
                  that participants can be linked to their platform activity;
                </li>
                <li>
                  that drivers meet additional requirements before offering
                  seats;
                </li>
                <li>that route and booking activity can be audited; and</li>
                <li>
                  that misconduct can be investigated through identifiable
                  records.
                </li>
              </ul>

              <p>
                The approach also supports mutual trust. Drivers are not treated
                as the only possible source of risk, and passengers are not
                allowed to participate anonymously.
              </p>

              <p>
                This is particularly important because Commute Matcher drivers
                are commuters first, not professional transport operators. They
                are allowing other people into their private vehicles and need
                confidence that the platform has taken reasonable steps to
                identify those passengers.
              </p>

              <p>
                Passengers also need confidence that a route is connected to a
                genuine driver whose identity and eligibility to offer seats
                have been reviewed.
              </p>

              <p>
                This decision reflects a human-centred design approach because
                it considers the concerns, responsibilities, and expectations of
                both sides of the commute.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Trade-offs</h2>

            <div className="space-y-4 leading-8">
              <p>
                A verification-first approach introduces additional onboarding
                effort.
              </p>

              <p>
                Users may need to provide information, submit documents, or wait
                for approval before gaining full access to the platform.
              </p>

              <p>This can result in:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>slower account activation;</li>
                <li>lower onboarding completion rates;</li>
                <li>additional operational work;</li>
                <li>more complex data handling;</li>
                <li>longer development time; and</li>
                <li>frustration for users who expect immediate access.</li>
              </ul>

              <p>
                Verification may also create accessibility concerns for people
                who do not have corporate email addresses, strong digital
                profiles, or easily accessible identity documents.
              </p>

              <p>
                There is also a privacy trade-off. The platform must collect
                enough information to support trust without collecting more
                personal data than necessary.
              </p>

              <p>
                The chosen trade-off is additional onboarding friction in
                exchange for stronger accountability, trust, and safety.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Implementation</h2>

            <p className="mb-6 leading-8">
              The verification approach is divided into three stages to clearly
              distinguish between what has already been designed, what is
              planned for the MVP, and what may be introduced later.
            </p>

            <div className="space-y-8">
              <section className="rounded-xl border p-6 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border px-3 py-1 text-sm font-semibold">
                    Current
                  </span>

                  <h3 className="text-xl font-semibold">
                    Implemented or Currently Designed
                  </h3>
                </div>

                <p className="mb-4 leading-8">
                  The current system and product design already include:
                </p>

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>user roles for drivers and passengers;</li>
                  <li>role-based access control;</li>
                  <li>
                    restricting route creation to authorised driver accounts;
                  </li>
                  <li>connecting routes to the user who created them;</li>
                  <li>connecting bookings to passengers and routes;</li>
                  <li>
                    verification-related records in the proposed data model;
                  </li>
                  <li>authentication using protected routes;</li>
                  <li>
                    traceable user activity through route and booking records;
                    and
                  </li>
                  <li>
                    preventing passengers from accessing driver-only
                    functionality.
                  </li>
                </ul>

                <p className="mt-4 leading-8">
                  These features provide a basic foundation for identity,
                  accountability, and controlled access. However, they do not
                  yet represent a complete identity-verification system.
                </p>
              </section>

              <section className="rounded-xl border p-6 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border px-3 py-1 text-sm font-semibold">
                    MVP
                  </span>

                  <h3 className="text-xl font-semibold">Planned for the MVP</h3>
                </div>

                <p className="mb-4 leading-8">
                  The MVP verification process is expected to include:
                </p>

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>verified phone number;</li>
                  <li>verified email address;</li>
                  <li>basic user profile information;</li>
                  <li>identity verification;</li>
                  <li>driver&apos;s licence verification for drivers;</li>
                  <li>verification status;</li>
                  <li>manual review where required;</li>
                  <li>rejection and resubmission handling;</li>
                  <li>restricting route creation to verified drivers;</li>
                  <li>
                    restricting booking participation to verified passengers;
                    and
                  </li>
                  <li>
                    displaying a verification indicator without exposing private
                    documents.
                  </li>
                </ul>

                <p className="mt-5 mb-3 font-semibold leading-8">
                  Possible verification statuses:
                </p>

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>not started;</li>
                  <li>pending;</li>
                  <li>verified;</li>
                  <li>rejected; and</li>
                  <li>requires resubmission.</li>
                </ul>

                <p className="mt-5 mb-3 leading-8">
                  The platform may also use supplementary trust signals such as:
                </p>

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>corporate email addresses;</li>
                  <li>LinkedIn profiles;</li>
                  <li>professional affiliations;</li>
                  <li>alumni communities; and</li>
                  <li>referrals from existing verified users.</li>
                </ul>

                <p className="mt-4 leading-8">
                  These should support verification rather than serve as the
                  only available method. Alternative verification options will
                  be important for users who do not have corporate email
                  addresses or strong professional profiles.
                </p>
              </section>

              <section className="rounded-xl border p-6 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border px-3 py-1 text-sm font-semibold">
                    Future
                  </span>

                  <h3 className="text-xl font-semibold">
                    Future Considerations
                  </h3>
                </div>

                <p className="mb-4 leading-8">
                  More advanced verification and trust controls may be
                  introduced as the platform develops.
                </p>

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>vehicle registration verification;</li>
                  <li>vehicle photographs;</li>
                  <li>number plate verification;</li>
                  <li>document expiry tracking;</li>
                  <li>automatic restriction when documents expire;</li>
                  <li>insurance verification where relevant;</li>
                  <li>
                    confirmation that a driver is authorised to use a vehicle;
                  </li>
                  <li>advanced verification audit trails;</li>
                  <li>fraud detection;</li>
                  <li>repeated no-show monitoring;</li>
                  <li>risk-based verification reviews;</li>
                  <li>incident reporting;</li>
                  <li>user ratings;</li>
                  <li>account suspension;</li>
                  <li>dispute resolution; and</li>
                  <li>automated reminders for document renewal.</li>
                </ul>

                <p className="mt-4 leading-8">
                  These features are not presented as currently implemented.
                  They represent future product and operational considerations
                  that may become necessary as the platform grows.
                </p>
              </section>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Privacy and Data Protection
            </h2>

            <div className="space-y-4 leading-8">
              <p>Verification information must be handled carefully.</p>

              <p>The platform should:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>collect only information necessary for verification;</li>
                <li>restrict access to sensitive documents;</li>
                <li>store verification records securely;</li>
                <li>avoid exposing private documents to other users;</li>
                <li>
                  show verification status rather than raw identification
                  documents;
                </li>
                <li>
                  define how long verification information will be retained; and
                </li>
                <li>keep appropriate records of verification decisions.</li>
              </ul>

              <p>
                Users should be able to see that another participant has met the
                platform&apos;s verification requirements without gaining access
                to that person&apos;s private documents.
              </p>
            </div>
          </section>

          <section className="rounded-xl border p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Outcome</h2>

            <div className="space-y-4 leading-8">
              <p>
                The verification-first approach gives Commute Matcher a stronger
                foundation for trust and accountability.
              </p>

              <p>
                The system already supports role-based access, protected
                functionality, route ownership, booking relationships, and
                traceable user activity.
              </p>

              <p>
                The planned MVP verification process will build on that
                foundation by requiring appropriate identity and driver checks
                before users can participate fully in commutes.
              </p>

              <p>
                Future trust and safety controls can then be introduced as the
                platform gains users, operational experience, and a clearer
                understanding of real-world risks.
              </p>

              <p>
                This staged approach keeps the portfolio description honest. It
                shows what has already been designed, what is planned for the
                MVP, and what remains under consideration.
              </p>

              <p>
                Most importantly, it aligns the product&apos;s technical
                direction with its core promise: Commute Matcher is not only
                matching routes; it is working toward a trusted and accountable
                commuter network.
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
