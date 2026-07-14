interface WireframeGalleryProps {
  screens: string[];
}

export function WireframeGallery({ screens }: WireframeGalleryProps) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {screens.map((screen) => (
        <div
          key={screen}
          className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
        >
          <div className="mb-6 flex h-24 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50">
            <span className="text-3xl">📱</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900">{screen}</h3>

          <p className="mt-2 text-sm text-gray-600">Wireframe screen</p>
        </div>
      ))}
    </div>
  );
}
