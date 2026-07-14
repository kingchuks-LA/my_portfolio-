interface RequestFlow {
  title: string;
  description: string;
}

interface RequestFlowExplanationProps {
  flow: RequestFlow;
}

export function RequestFlowExplanation({ flow }: RequestFlowExplanationProps) {
  return (
    <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
      <h3 className="text-lg font-semibold text-blue-900">{flow.title}</h3>

      <p className="mt-3 leading-7 text-blue-800">{flow.description}</p>
    </div>
  );
}
