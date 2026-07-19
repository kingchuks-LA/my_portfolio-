import type { ArchitectureLayer } from "@/types/case-study";

interface ArchitectureLayerCardProps {
  layer: ArchitectureLayer;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}

export function ArchitectureLayerCard({
  layer,
  isActive,
  isLast,
  onClick,
}: ArchitectureLayerCardProps) {
  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className={`w-40 shrink-0 rounded-xl border p-4 text-center transition-all ${
          isActive
            ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md"
            : "border-gray-200 bg-white hover:border-blue-300"
        }`}
      >
        <div className="text-2xl">{layer.icon}</div>
        <div className="mt-2 font-semibold">{layer.shortTitle}</div>
      </button>

      {!isLast && (
        <div className="mx-2 hidden text-xl text-gray-400 lg:flex lg:items-center">
          →
        </div>
      )}
    </div>
  );
}