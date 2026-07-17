import type { ArchitectureLayer } from "@/types/case-study";

interface LayerDetailPanelProps {
  layer: ArchitectureLayer;
  selectedFlow: string;
}

export function LayerDetailPanel({
  layer,
  selectedFlow,
}: LayerDetailPanelProps) {
  const behaviour = layer.behaviours.find((item) => item.flow === selectedFlow);

  return (
    <div className="rounded-xl border-2 border-blue-600 bg-blue-50 p-8 shadow-lg">
      <h3 className="text-xl font-semibold text-blue-700">
        {layer.icon} {layer.title}
      </h3>

      <div className="mt-6">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          What Happens Here
        </h4>

        <p className="mt-3 leading-7 text-gray-700">
          {behaviour?.description ??
            "No behaviour has been documented for this flow yet."}
        </p>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Example
        </h4>
        <div className="mt-3 flex flex-wrap justify-start gap-2">
          {layer.examples
            .filter((example) => example.flow === selectedFlow)
            .map((example) => (
              <span
                key={example.label}
                className="rounded-full border border-blue-600 bg-blue-600 px-3 py-1 text-sm text-white"
              >
                {example.label}
              </span>
            ))}
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Technologies
        </h4>

        <div className="mt-3 flex flex-wrap justify-start gap-2">
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
    </div>
  );
}
