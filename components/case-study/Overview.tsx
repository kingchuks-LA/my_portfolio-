import { OverviewSection } from "@/types/case-study";

interface OverviewProps {
  overview: OverviewSection;
}

export default function Overview({ overview }: OverviewProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-3xl font-semibold">Overview</h2>

      <p className="max-w-4xl text-lg leading-8">
        {overview.description}
      </p>
    </section>
  );
}