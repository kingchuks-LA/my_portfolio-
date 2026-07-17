interface RequestFlowSelectorProps {
  selectedFlow: string;
  onSelect: (flow: string) => void;
}

const flows = [
  "Create Trip",
  "Book Trip",
  "Verify Identity",
  "Leave Feedback",
];

export function RequestFlowSelector({
  selectedFlow,
  onSelect,
}: RequestFlowSelectorProps) {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold">
        How the System Works
      </h3>

      <p className="mt-2 text-gray-600">
        Select a user action, then click any architecture layer to inspect its role in processing the request.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {flows.map((flow) => (
          <button
            key={flow}
            onClick={() => onSelect(flow)}
            className={`rounded-full border px-4 py-2 transition
              ${
                selectedFlow === flow
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white hover:bg-gray-50"
              }`}
          >
            {flow}
          </button>
        ))}
      </div>
    </div>
  );
}