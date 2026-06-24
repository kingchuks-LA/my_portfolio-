import Link from "next/link";

export default function VerifiedCommutersDecisionPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/systems-design"
          className="mb-10 inline-block font-semibold underline underline-offset-4"
        >
          ← Back to All Design Decisions
        </Link>

        <header className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Major Product Design Decision · Trust & Participation
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Why Verified Commuters Rather Than Open Ride Sharing?
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            Commute Matcher was designed as a trusted network of identifiable
            commuters because the primary problem being addressed is trust, not
            transportation alone.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Context</h2>

            <div className="space-y-4 leading-8">
              <p>
                Commute Matcher was inspired by the realities of daily commuting
                in Lagos, particularly during early-morning hours.
              </p>

              <p>
                Commuters sometimes rely on informal arrangements with people
                they do not know. Passengers may enter private vehicles after
                asking whether the driver is travelling towards destinations
                such as Victoria Island or Lekki. Drivers may also accept
                passengers without knowing who they are.
              </p>

              <p>
                Although these arrangements may offer convenience, they create
                uncertainty for both drivers and passengers.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border p-6">
                  <h3 className="mb-4 text-xl font-semibold">
                    Passenger Concerns
                  </h3>

                  <ul className="list-disc space-y-2 pl-6 leading-8">
                    <li>robbery or fraud;</li>
                    <li>entering an unknown vehicle;</li>
                    <li>uncertainty about the driver&apos;s identity;</li>
                    <li>limited information about the vehicle; and</li>
                    <li>
                      no reliable way to identify the driver after an incident.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border p-6">
                  <h3 className="mb-4 text-xl font-semibold">
                    Driver Concerns
                  </h3>

                  <ul className="list-disc space-y-2 pl-6 leading-8">
                    <li>
                      allowing anonymous passengers into a private vehicle;
                    </li>
                    <li>theft or misconduct;</li>
                    <li>false reports;</li>
                    <li>payment disputes; and</li>
                    <li>having no reliable information about the passenger.</li>
                  </ul>
                </div>
              </div>

              <p>
                The core problem is therefore not simply a shortage of
                transportation. It is the absence of trust, identity, and
                accountability within informal commuter arrangements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Decision</h2>

            <div className="space-y-4 leading-8">
              <p>
                Commute Matcher will operate as a network of verified commuters
                rather than as an open ride-sharing platform.
              </p>

              <p>
                Users must meet the platform&apos;s relevant verification
                requirements before they can participate fully as drivers or
                passengers.
              </p>

              <p>
                The goal is not to allow the largest possible number of people
                to join immediately. The goal is to create a commuter network in
                which participants have reasonable confidence that the people
                they travel with are identifiable and accountable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Alternatives Considered
            </h2>

            <div className="space-y-8">
              <div className="rounded-xl border p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold">
                  Open Registration
                </h3>

                <div className="space-y-4 leading-8">
                  <p>
                    An open ride-sharing model could allow almost anyone to
                    register, create routes, or search for rides with minimal
                    checks.
                  </p>

                  <p>This could:</p>

                  <ul className="list-disc space-y-2 pl-6">
                    <li>reduce onboarding friction;</li>
                    <li>increase the number of early users;</li>
                    <li>create more available routes;</li>
                    <li>improve initial matching volume; and</li>
                    <li>support faster geographical expansion.</li>
                  </ul>

                  <p>
                    However, it could reproduce the same trust problems already
                    present in informal offline commuting.
                  </p>

                  <p>
                    Moving an anonymous interaction from the roadside into an
                    application does not automatically make it safer.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold">
                  Optional Verification
                </h3>

                <div className="space-y-4 leading-8">
                  <p>
                    Another option was to allow verified and unverified users to
                    participate while displaying verification badges for people
                    who completed additional checks.
                  </p>

                  <p>
                    This would provide greater flexibility, but it could create
                    an inconsistent trust experience. Users would still need to
                    decide whether it was safe to interact with an unverified
                    participant.
                  </p>

                  <p>
                    It could also weaken the platform&apos;s identity as a
                    trust-focused commuter network.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold">
                  Driver-Only Verification
                </h3>

                <div className="space-y-4 leading-8">
                  <p>
                    The platform could verify drivers while allowing passengers
                    to participate with minimal checks.
                  </p>

                  <p>
                    However, trust must work in both directions. Passengers need
                    confidence in drivers, but drivers also need confidence in
                    the people entering their private vehicles.
                  </p>

                  <p>
                    Verifying only one side would create an unequal trust model.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Reasoning</h2>

            <div className="space-y-4 leading-8">
              <p>
                The primary problem Commute Matcher is designed to address is
                trust rather than transportation alone.
              </p>

              <p>
                A commuter considering a ride at 5:30 AM is not evaluating only
                the destination, price, available seats, and departure time. The
                commuter is also evaluating:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>whether the other person is genuine;</li>
                <li>whether the vehicle information is credible;</li>
                <li>whether the journey feels reasonably safe;</li>
                <li>whether the participant can be identified; and</li>
                <li>
                  whether there will be accountability if something goes wrong.
                </li>
              </ul>

              <p>Verification helps the platform respond to these concerns.</p>

              <p>Possible forms of verification include:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>identity verification;</li>
                <li>driver&apos;s licence verification;</li>
                <li>phone and email verification;</li>
                <li>professional or workplace verification;</li>
                <li>vehicle verification; and</li>
                <li>additional trust signals introduced over time.</li>
              </ul>

              <p>
                Verification does not guarantee that an incident will never
                occur. It creates stronger identity and accountability controls
                than an anonymous, open platform.
              </p>

              <p>
                It also gives the platform a foundation for investigating
                reports, restricting accounts, and identifying the users
                involved in a commute.
              </p>

              <blockquote className="rounded-xl border-l-4 p-6 text-xl font-semibold leading-8">
                Transportation is the service, but trust is the product.
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Trade-offs</h2>

            <div className="space-y-4 leading-8">
              <p>
                A verified network may grow more slowly than an open
                ride-sharing platform.
              </p>

              <p>Verification can introduce:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>additional onboarding steps;</li>
                <li>slower account activation;</li>
                <li>document-review requirements;</li>
                <li>higher operational costs;</li>
                <li>privacy and data-protection responsibilities;</li>
                <li>lower registration-completion rates; and</li>
                <li>fewer users and routes during the early stages.</li>
              </ul>

              <p>
                A smaller user base can also make matching more difficult. A
                passenger may not immediately find a suitable route if only a
                limited number of verified users are available.
              </p>

              <p>
                However, prioritising rapid growth before establishing trust
                could undermine the main reason the platform exists.
              </p>

              <p>
                The selected trade-off is slower and more deliberate growth in
                exchange for stronger user confidence, accountability, and
                alignment with the product&apos;s purpose.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Implementation</h2>

            <p className="mb-6 leading-8">
              The verified commuter model is being developed in stages so that
              the portfolio clearly distinguishes between existing work, MVP
              plans, and future considerations.
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

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>authenticated user accounts;</li>
                  <li>driver and passenger roles;</li>
                  <li>role-based access control;</li>
                  <li>protected backend endpoints;</li>
                  <li>routes linked to the users who created them;</li>
                  <li>bookings linked to passengers and routes;</li>
                  <li>
                    prevention of passengers accessing driver-only
                    functionality; and
                  </li>
                  <li>traceable route and booking activity.</li>
                </ul>

                <p className="mt-4 leading-8">
                  These features establish basic accountability, but they do not
                  yet represent a complete verification system.
                </p>
              </section>

              <section className="rounded-xl border p-6 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border px-3 py-1 text-sm font-semibold">
                    MVP
                  </span>

                  <h3 className="text-xl font-semibold">Planned for the MVP</h3>
                </div>

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>verified phone numbers;</li>
                  <li>verified email addresses;</li>
                  <li>basic profile information;</li>
                  <li>identity verification;</li>
                  <li>driver&apos;s licence checks for drivers;</li>
                  <li>verification statuses;</li>
                  <li>manual review where required;</li>
                  <li>rejection and resubmission handling;</li>
                  <li>verified-driver access to route creation; and</li>
                  <li>verified-passenger access to booking.</li>
                </ul>

                <p className="mt-5 leading-8">
                  Supplementary trust signals may include corporate email
                  verification, professional affiliation, LinkedIn profiles,
                  alumni networks, or referrals from verified community members.
                </p>

                <p className="mt-4 leading-8">
                  Alternative verification methods should remain available for
                  legitimate commuters who do not have strong professional or
                  digital profiles.
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

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>vehicle registration checks;</li>
                  <li>number plate verification;</li>
                  <li>vehicle photographs;</li>
                  <li>document-expiry monitoring;</li>
                  <li>incident reporting;</li>
                  <li>ratings and reviews;</li>
                  <li>account suspension;</li>
                  <li>fraud detection;</li>
                  <li>repeated no-show tracking;</li>
                  <li>dispute resolution; and</li>
                  <li>risk-based verification reviews.</li>
                </ul>

                <p className="mt-4 leading-8">
                  These are future considerations and are not presented as
                  currently implemented features.
                </p>
              </section>
            </div>
          </section>

          <section className="rounded-xl border p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Outcome</h2>

            <div className="space-y-4 leading-8">
              <p>
                Choosing verified commuters over open ride sharing gives Commute
                Matcher a clear product identity.
              </p>

              <p>
                The platform is not designed merely to connect people who are
                travelling in the same direction. It is designed to create a
                more trusted environment in which drivers and passengers can
                participate with greater confidence.
              </p>

              <p>The decision supports:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>mutual trust between drivers and passengers;</li>
                <li>identifiable participation;</li>
                <li>clearer accountability;</li>
                <li>safer platform access;</li>
                <li>investigation of reported incidents; and</li>
                <li>deliberate growth built around trust.</li>
              </ul>

              <p>
                Although this approach may slow early adoption, it keeps the
                product aligned with the original problem it was created to
                solve.
              </p>

              <p>
                Commute Matcher&apos;s value is therefore not only route
                availability. Its value is the trusted network surrounding each
                route.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-14 border-t pt-8">
          <Link
            href="/systems-design"
            className="font-semibold underline underline-offset-4"
          >
            ←  Back to All Design Decisions
          </Link>
        </div>
      </article>
    </main>
  );
}
