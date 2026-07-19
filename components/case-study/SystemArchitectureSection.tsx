import { SystemArchitectureSection as SystemArchitectureData } from "@/types/case-study";

interface SystemArchitectureSectionProps {
  systemArchitecture: SystemArchitectureData;
}

export function SystemArchitectureSection({
  systemArchitecture,
}: SystemArchitectureSectionProps) {
  return (
    <section>
      <h2>{systemArchitecture.title}</h2>

      <p>{systemArchitecture.description}</p>

      <div className="rounded-xl border border-dashed p-12 text-center">
        Layered Architecture Diagram
      </div>
    </section>
  );
}
