interface RoadmapItem {
  phase: string;
  goal: string;
}

interface RoadmapProps {
  roadmap: RoadmapItem[];
}

export function Roadmap({ roadmap }: RoadmapProps) {
  return (
    <div className="mt-10 space-y-8">
      {roadmap.map((item, index) => (
        <div key={item.phase} className="flex gap-6">
          {/* Timeline */}
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full bg-blue-600" />

            {index < roadmap.length - 1 && (
              <div className="mt-2 h-full w-px bg-gray-300" />
            )}
          </div>

          {/* Milestone */}
          <div className="flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {item.phase}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-gray-900">
              {item.goal}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
