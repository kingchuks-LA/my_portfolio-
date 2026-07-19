import type { ArchitectureLayer } from "@/types/case-study";
import { ArchitectureLayerCard } from "./ArchitectureLayerCard";

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
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
      {layers.map((layer, index) => (
        <ArchitectureLayerCard
          key={layer.title}
          layer={layer}
          isActive={selectedLayerIndex === index}
          isLast={index === layers.length - 1}
          onClick={() => onLayerSelect(index)}
        />
      ))}
    </div>
  );
}

