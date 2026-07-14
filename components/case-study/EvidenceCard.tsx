interface EvidenceCardProps {
  title: string;
  description: string;
  cta: string;
  href: string;
}

export function EvidenceCard({
  title,
  description,
  cta,
  href,
}: EvidenceCardProps) {
  return (
    <a
      href={href}
      className="mt-8 block rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Evidence
      </p>

      <h3 className="mt-2 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      <div className="mt-6 font-medium text-blue-600">
        {cta} →
      </div>
    </a>
  );
}