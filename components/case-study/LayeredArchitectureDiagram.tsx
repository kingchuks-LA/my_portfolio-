import type { ArchitectureLayer } from "@/types/case-study";
import { ArchitectureLayerCard } from "./ArchitectureLayerCard";
interface LayeredArchitectureDiagramProps {
  layers: ArchitectureLayer[];
  selectedFlow: string;
  currentStep: number;
}

export function LayeredArchitectureDiagram({
  layers,
  selectedFlow,
  currentStep,
}: LayeredArchitectureDiagramProps) {
  return (
    <div className="space-y-8">
      {layers.map((layer, index) => (
        <div key={layer.title}>
          <ArchitectureLayerCard
            layer={layer}
            selectedFlow={selectedFlow}
            currentStep={currentStep}
            layerIndex={index}
          />
          {index < layers.length - 1 && (
            <div className="py-4 text-center text-2xl">↓</div>
          )}
        </div>
      ))}
    </div>
  );
}
