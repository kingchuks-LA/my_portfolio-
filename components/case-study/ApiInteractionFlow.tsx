interface ApiInteraction {
  action: string;
  resource: string;
}

interface ApiInteractionFlowProps {
  interactions: ApiInteraction[];
}

export function ApiInteractionFlow({
  interactions,
}: ApiInteractionFlowProps) {
  return (
    <div className="mt-10 space-y-6">
      {interactions.map((interaction) => (
        <div
          key={`${interaction.action}-${interaction.resource}`}
          className="rounded-xl border border-gray-200 bg-white p-6"
        >
          <div className="grid items-center gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">User Action</p>

              <p className="mt-1 font-semibold text-gray-900">
                {interaction.action}
              </p>
            </div>

            <div className="text-center text-2xl text-blue-600">
              →
            </div>

            <div className="rounded-lg bg-blue-50 p-4 text-center">
              <p className="text-sm text-gray-500">API Resource</p>

              <p className="mt-1 font-semibold text-blue-700">
                {interaction.resource}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}