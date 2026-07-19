interface RequestFlowSelectorProps {
  selectedFlow: string;
  onSelect: (flow: string) => void;
}

const flows = ["Create Trip", "Book Trip", "Verify Identity", "Leave Feedback"];

export function RequestFlowSelector({
  selectedFlow,
  onSelect,
}: RequestFlowSelectorProps) {
  return (
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
  );
}
