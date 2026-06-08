export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-20">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          Let&apos;s Connect
        </h1>

        <p className="mb-10 text-lg leading-8">
          I am open to opportunities across Technical Product Ownership,
          Product Management, Business Analysis, Systems Design, and
          technology-driven problem solving.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border p-6">
            <h2 className="mb-2 text-xl font-semibold">LinkedIn</h2>
            <p>Add your LinkedIn profile link here.</p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="mb-2 text-xl font-semibold">GitHub</h2>
            <p>Add your GitHub profile link here.</p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="mb-2 text-xl font-semibold">Email</h2>
            <p>Add your professional email address here.</p>
          </div>
        </div>
      </section>
    </main>
  );
}