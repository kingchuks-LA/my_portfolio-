interface DomainModelProps {
  entities: string[];
}

export function DomainModel({
  entities,
}: DomainModelProps) {
  return (
    <div className="mt-10 rounded-xl border border-gray-200 bg-white p-8">
      <div className="flex flex-col items-center">
        {/* Central Entity */}
        <div className="rounded-full border-2 border-blue-600 bg-blue-50 px-6 py-3 font-semibold text-blue-700">
          {entities[0]}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-8">
          {entities.slice(1).map((entity) => (
            <div
              key={entity}
              className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-4 text-center shadow-sm"
            >
              {entity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}