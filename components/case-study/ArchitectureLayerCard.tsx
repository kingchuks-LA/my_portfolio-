import type { ArchitectureLayer } from "@/types/case-study";

interface ArchitectureLayerCardProps {
  layer: ArchitectureLayer;
  selectedFlow: string;
  currentStep: number;
  layerIndex: number;
}

export function ArchitectureLayerCard({
  layer,
  selectedFlow,
  currentStep,
  layerIndex,
}: ArchitectureLayerCardProps) {
  const isCurrentLayer = currentStep === layerIndex;
  const isLayerActive =
    layer.examples.some((example) => example.flow === selectedFlow) &&
    isCurrentLayer;
  const behaviour = layer.behaviours.find((item) => item.flow === selectedFlow);
  return (
    <div
      className={`rounded-xl p-8 transition-all duration-300 ${
        isLayerActive
          ? "border-2 border-blue-600 bg-blue-50 shadow-lg"
          : "border border-gray-200 bg-white opacity-60"
      }`}
    >
      <h3
        className={`text-xl font-semibold ${
          isLayerActive ? "text-blue-700" : "text-gray-900"
        }`}
      >
        {layer.icon} {layer.title}
      </h3>
      {isLayerActive && (
        <>
          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              What Happens Here
            </h4>

            <p className="mt-3 leading-7 text-gray-700">
              {behaviour?.description}
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Example
            </h4>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {layer.examples
                .filter((example) => example.flow === selectedFlow)
                .map((example) => {
                  const isActive = example.flow === selectedFlow;

                  return (
                    <span
                      key={example.label}
                      className={`rounded-full px-3 py-1 text-sm transition-all ${
                        isActive
                          ? "border border-blue-600 bg-blue-600 text-white"
                          : "border border-gray-200"
                      }`}
                    >
                      {example.label}
                    </span>
                  );
                })}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Technologies
            </h4>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {layer.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
