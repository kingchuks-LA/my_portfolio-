
import Link from "next/link";

export default function AutomaticBookingDecisionPage() {
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
            Design Decision · Booking Experience
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Why Automatic Booking Instead of Driver Approval?
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            Automatic booking was selected because Commute Matcher drivers are
            commuters first, not professional drivers actively waiting for
            requests.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Context</h2>

            <div className="space-y-4 leading-8">
              <p>
                Commute Matcher is designed for people who are already
                travelling to work, rather than professional drivers actively
                waiting for ride requests.
              </p>

              <p>
                On ride-hailing platforms, drivers are usually financially
                motivated to respond quickly because accepting trips is part of
                their primary work. A driver approval workflow fits that
                environment because drivers are actively monitoring the
                platform.
              </p>

              <p>
                Commute Matcher operates differently. Its drivers are commuters
                first. They may be getting ready for work, already driving,
                attending a meeting, or simply not checking the application
                when a passenger submits a booking request.
              </p>

              <p>
                Early-morning passengers also need predictable transport
                arrangements. Waiting for manual approval could create
                uncertainty when passengers need to know whether their commute
                is confirmed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Decision</h2>

            <div className="space-y-4 leading-8">
              <p>
                Passenger bookings are confirmed automatically when a matching
                route has an available seat.
              </p>

              <p>
                Drivers do not need to manually approve each booking. When a
                driver publishes a route and specifies the number of available
                seats, that action is treated as a pre-commitment to accept
                eligible, verified passengers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Alternatives Considered
            </h2>

            <div className="space-y-4 leading-8">
              <p>A manual driver approval workflow was considered:</p>

              <div className="rounded-xl border p-6">
                <p>Driver publishes a route</p>
                <p>↓</p>
                <p>Passenger requests a seat</p>
                <p>↓</p>
                <p>Driver receives a notification</p>
                <p>↓</p>
                <p>Driver accepts or rejects the request</p>
                <p>↓</p>
                <p>Passenger receives confirmation</p>
              </div>

              <p>
                This approach would give drivers greater control over
                individual bookings. However, it would also make passengers
                dependent on drivers noticing and responding to requests in
                time.
              </p>

              <p>
                A time-limited approval model was also considered, where a
                booking would be automatically approved or cancelled if the
                driver did not respond within a set period.
              </p>

              <p>
                That approach would add more complexity while still leaving the
                passenger uncertain during the waiting period.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Reasoning</h2>

            <div className="space-y-4 leading-8">
              <p>
                The decision is based on the expected behaviour of Commute
                Matcher users.
              </p>

              <p>
                Drivers are not expected to remain active on the application
                throughout the day. Requiring their approval for every booking
                would introduce a dependency that the product cannot reliably
                expect them to fulfil quickly.
              </p>

              <p>If passengers had to wait for approval:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>the driver might not see the notification immediately;</li>
                <li>
                  the passenger might not know whether to continue searching
                  for another route;
                </li>
                <li>available seats could remain temporarily blocked;</li>
                <li>
                  early-morning commuters could experience unnecessary delays;
                  and
                </li>
                <li>
                  the platform could feel unreliable even when suitable routes
                  are available.
                </li>
              </ul>

              <p>
                Moving the driver&apos;s decision earlier in the process reduces
                this uncertainty.
              </p>

              <p>
                By publishing a route, choosing a departure time, and declaring
                available seats, the driver is explicitly indicating that
                those seats are available to eligible passengers.
              </p>

              <div className="rounded-xl border p-6">
                <p>Driver publishes a route with available seats</p>
                <p>↓</p>
                <p>Passenger finds a matching route</p>
                <p>↓</p>
                <p>Passenger books a seat</p>
                <p>↓</p>
                <p>The seat is reserved automatically</p>
                <p>↓</p>
                <p>Both users receive confirmation</p>
              </div>

              <p>
                This is a human-centred design decision because the workflow is
                based on the real behaviour and constraints of everyday
                commuters rather than being copied directly from ride-hailing
                platforms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Trade-offs</h2>

            <div className="space-y-4 leading-8">
              <p>
                Automatic booking reduces the driver&apos;s ability to review
                and approve each passenger before confirmation.
              </p>

              <p>
                A driver may prefer greater control over who joins the commute.
                Automatic booking could therefore create discomfort if the
                platform does not provide sufficient trust and accountability
                mechanisms.
              </p>

              <p>
                There is also a risk that a passenger could reserve a seat and
                fail to appear, preventing another passenger from booking it.
              </p>

              <p>These risks must be managed through:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>user verification;</li>
                <li>clear cancellation rules;</li>
                <li>booking limits;</li>
                <li>user accountability;</li>
                <li>audit trails;</li>
                <li>ratings and reporting features; and</li>
                <li>restrictions for repeated no-shows.</li>
              </ul>

              <p>
                The trade-off is less individual booking control for drivers in
                exchange for greater speed, certainty, and reduced friction for
                passengers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Implementation</h2>

            <div className="space-y-4 leading-8">
              <p>When a driver creates a route, they provide:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>origin;</li>
                <li>destination;</li>
                <li>departure time;</li>
                <li>total available seats; and</li>
                <li>other relevant route details.</li>
              </ul>

              <p>When a passenger books a route, the backend checks that:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>the route exists;</li>
                <li>the route is still available;</li>
                <li>at least one seat remains;</li>
                <li>the passenger is eligible to book;</li>
                <li>
                  the passenger has not already booked the same route; and
                </li>
                <li>
                  the booking will not cause the route to exceed its seat
                  capacity.
                </li>
              </ul>

              <p>If those conditions are satisfied, the system:</p>

              <ol className="list-decimal space-y-2 pl-6">
                <li>creates the booking;</li>
                <li>marks it as confirmed;</li>
                <li>reduces the available seat count; and</li>
                <li>returns the confirmed booking information.</li>
              </ol>

              <p>
                The database operation should be handled safely so that two
                passengers cannot claim the final available seat at the same
                time.
              </p>

              <p>
                Drivers may still cancel a route or report a passenger, but
                they do not need to approve every valid booking individually.
              </p>
            </div>
          </section>

          <section className="rounded-xl border p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Outcome</h2>

            <div className="space-y-4 leading-8">
              <p>
                Automatic booking gives passengers immediate confirmation and
                reduces their dependence on drivers responding to
                notifications.
              </p>

              <p>
                It also makes seat availability more meaningful. When the
                platform displays an available seat, the passenger can reserve
                it without entering an uncertain approval process.
              </p>

              <p>
                For drivers, the workflow remains simple: they make one clear
                commitment when publishing the route instead of repeatedly
                reviewing individual requests.
              </p>

              <p>
                The result is a booking process designed around predictable
                commuting, reduced friction, and the real-world behaviour of
                drivers and passengers.
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
