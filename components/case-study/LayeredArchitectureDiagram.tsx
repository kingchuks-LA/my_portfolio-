import type { ArchitectureLayer } from "@/types/case-study";
import { ArchitectureLayerCard } from "./ArchitectureLayerCard";
import { Fragment } from "react";

interface LayeredArchitectureDiagramProps {
  layers: ArchitectureLayer[];
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
        <Fragment key={layer.title}>
          <ArchitectureLayerCard
            layer={layer}
            isActive={selectedLayerIndex === index}
            onClick={() => onLayerSelect(index)}
          />

          {index < layers.length - 1 && (
            <>
              {/* Mobile */}
              <div className="py-2 text-xl text-gray-400 lg:hidden">↓</div>

              {/* Desktop */}
              <div className="mx-1 hidden text-xl text-gray-400 lg:flex lg:items-center">
                →
              </div>
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
}
