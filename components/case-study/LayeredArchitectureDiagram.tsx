import type { ArchitectureLayer } from "@/types/case-study";
interface LayeredArchitectureDiagramProps {
  layers: ArchitectureLayer[];
  selectedFlow: string;
  selectedLayerIndex: number;
  onLayerSelect: (layerIndex: number) => void;
}

export function LayeredArchitectureDiagram({
  layers,
  selectedLayerIndex,
  onLayerSelect,
}: LayeredArchitectureDiagramProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      {layers.map((layer, index) => {
        const isActive = selectedLayerIndex === index;
        return (
          <div key={layer.title} className="flex flex-col items-center">
            <button
              onClick={() => onLayerSelect(index)}
              className={`w-56 rounded-xl border p-4 text-center transition-all ${
                isActive
                  ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              <div className="text-2xl">{layer.icon}</div>
              <div className="mt-2 font-semibold">{layer.title}</div>
            </button>

            {index < layers.length - 1 && (
              <div className="py-2 text-xl text-gray-400">↓</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
