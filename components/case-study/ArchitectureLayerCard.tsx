import type { ArchitectureLayer } from "@/types/case-study";

interface ArchitectureLayerCardProps {
  layer: ArchitectureLayer;
  isActive: boolean;
  onClick: () => void;
}

export function ArchitectureLayerCard({
  layer,
  isActive,
  onClick,
}: ArchitectureLayerCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-36 shrink-0 rounded-xl border p-4 text-center transition-all ${
        isActive
          ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md"
          : "border-gray-200 bg-white hover:border-blue-300"
      }`}
    >
      <div className="text-2xl">{layer.icon}</div>
      <div className="mt-2 text-lg-semibold">{layer.shortTitle}</div>
    </button>
  );
}
