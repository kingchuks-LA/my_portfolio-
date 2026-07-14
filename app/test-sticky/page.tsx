export default function TestStickyPage() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <div className="flex gap-12">
        <aside className="w-64 shrink-0">
          <div className="sticky top-24 rounded bg-red-200 p-4">
            Sticky Navigation
          </div>
        </aside>

        <div className="flex-1 space-y-6">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="h-40 rounded border border-gray-200">
              Section {i + 1}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
