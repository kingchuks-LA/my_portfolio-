import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "From Manual Approval to Automatic Booking: Designing a Faster Booking Experience for Commuters",

  description:
    "A human-centred design case study on how automating ride bookings reduced friction and improved the commuter experience in Commute Matcher.",

  alternates: {
    canonical:
      "https://www.kingsleyemeka.com/come-learn-with-me/manual-approval-to-automatic-booking",
  },

  openGraph: {
    title:
      "From Manual Approval to Automatic Booking: Designing a Faster Booking Experience for Commuters",

    description:
      "A human-centred design case study on how automating ride bookings reduced friction and improved the commuter experience in Commute Matcher.",

    url: "https://www.kingsleyemeka.com/come-learn-with-me/manual-approval-to-automatic-booking",

    siteName: "Kingsley Emeka",

    type: "article",

    images: [
      {
        url: "/images/manual-approval-to-automatic-booking-og.png",
        width: 1200,
        height: 630,
        alt: "From Manual Approval to Automatic Booking — Designing a Faster Booking Experience for Commuters",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "From Manual Approval to Automatic Booking: Designing a Faster Booking Experience for Commuters",

    description:
      "A human-centred design case study on how automating ride bookings reduced friction and improved the commuter experience in Commute Matcher.",

    images: ["/images/manual-approval-to-automatic-booking-og.png"],
  },
};

export default function ManualApprovalToAutomaticBooking() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 text-gray-800">
      <Link
        href="/insights"
        className="mb-8 inline-flex font-semibold underline decoration-yellow-300 decoration-4 underline-offset-4 transition hover:text-gray-600"
      >
        ← Back to Insights
      </Link>
      <header className="mb-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Human-Centred Design
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-5xl">
          From Manual Approval to Automatic Booking: A Human-Centred Design
          Decision
        </h1>

        <p className="mt-5 text-lg italic leading-8 text-gray-600">
          How understanding commuter behaviour changed the Commute Matcher
          booking flow.
        </p>
      </header>

      <div className="space-y-7 text-lg leading-8">
        <p>
          One of the first booking flows I designed for Commute Matcher required
          drivers to manually approve or reject every passenger request.
        </p>

        <section>
          <h2 className="mb-5 text-2xl font-semibold text-gray-950">
            The original booking flow
          </h2>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex flex-col items-center gap-3 text-center font-medium text-gray-900">
              <p>Driver uploads a route</p>
              <span aria-hidden="true">↓</span>

              <p>Passenger finds a matching route</p>
              <span aria-hidden="true">↓</span>

              <p>Passenger requests a seat</p>
              <span aria-hidden="true">↓</span>

              <p>Driver approves or rejects the request</p>
              <span aria-hidden="true">↓</span>

              <p>Booking is confirmed</p>
            </div>
          </div>
        </section>

        <p>At first, this appeared logical.</p>

        <p>
          Many transport platforms require drivers to accept ride requests, so I
          naturally considered a similar workflow.
        </p>

        <p>But Commute Matcher is not a traditional ride-hailing platform.</p>

        <p>
          Its drivers are not full-time commercial drivers waiting online for
          requests. They are regular commuters travelling to work and offering
          available seats to verified passengers heading in the same direction.
        </p>

        <p>
          A driver may upload a route the night before, prepare for work early
          in the morning, begin driving, or simply not check the platform
          immediately.
        </p>

        <blockquote className="border-l-4 border-gray-900 pl-6 text-xl font-medium italic text-gray-900">
          Should a passenger be kept waiting for approval when the driver has
          already published the route, selected a departure time, and declared
          the number of available seats?
        </blockquote>

        <p>
          I concluded that uploading a route already communicates readiness to
          accept eligible passengers.
        </p>

        <p>
          The published route therefore serves as a form of advance consent.
        </p>

        <section>
          <h2 className="mb-5 text-2xl font-semibold text-gray-950">
            The revised booking flow
          </h2>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex flex-col items-center gap-3 text-center font-medium text-gray-900">
              <p>Driver uploads a route and specifies available seats</p>
              <span aria-hidden="true">↓</span>

              <p>Verified passenger finds a matching route</p>
              <span aria-hidden="true">↓</span>

              <p>System checks route compatibility and seat availability</p>
              <span aria-hidden="true">↓</span>

              <p>Seat is booked automatically</p>
              <span aria-hidden="true">↓</span>

              <p>Driver receives a booking notification</p>
            </div>
          </div>
        </section>

        <p>
          The main advantage of this design is that passengers are not left
          waiting for a driver who may be busy, preparing for work, or already
          on the road.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950">
            The trade-offs behind automatic booking
          </h2>

          <p className="mt-5">
            Removing manual approval means the system must take greater
            responsibility for protecting both drivers and passengers.
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>Only verified passengers should be allowed to book.</li>
            <li>Seat availability must update immediately.</li>
            <li>The system must prevent overbooking.</li>
            <li>
              Drivers must be able to close a route when they no longer want
              additional passengers.
            </li>
            <li>Cancellations must follow clear rules.</li>
            <li>Drivers must receive immediate booking notifications.</li>
          </ul>
        </section>

        <p>Automatic booking should not mean removing driver control.</p>

        <p>
          The driver still decides the route, departure time, number of
          available seats, and when the route stops accepting bookings. The
          system only removes the need to repeat a decision the driver has
          already made by publishing the route.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950">
            How the design evolved
          </h2>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Before
              </p>

              <p className="font-medium text-gray-950">
                The driver must approve every passenger request.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-900 bg-gray-950 p-6 text-white">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-300">
                After
              </p>

              <p className="font-medium">
                Publishing a route with available seats signals the
                driver&apos;s readiness and advance consent to accept verified
                matching passengers.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950">
            What I learned
          </h2>

          <p className="mt-5">
            The broader lesson for me was not simply that automatic booking is
            better than manual approval.
          </p>

          <p>
            User flows should be designed around the real operating context of
            users, rather than copied from products that only appear similar.
          </p>

          <p>
            A workflow may look logical on a diagram and still fail to reflect
            how people behave in practice.
          </p>

          <div className="mt-8 rounded-2xl bg-gray-100 p-7">
            <p className="text-xl font-semibold leading-8 text-gray-950">
              Sometimes, human-centred design is not about adding another
              feature.
            </p>

            <p className="mt-3 text-xl leading-8 text-gray-800">
              Sometimes, it is about removing unnecessary friction while
              introducing the right safeguards.
            </p>
          </div>
        </section>
      </div>
      <div className="mt-12 border-t pt-8">
        <Link
          href="/insights"
          className="inline-flex font-semibold underline decoration-yellow-300 decoration-4 underline-offset-4 transition hover:text-gray-600"
        >
          ← Back to Insights
        </Link>
      </div>
    </article>
  );
}
