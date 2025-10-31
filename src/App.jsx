function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Pivot Path MVP
          </h1>
          <p className="text-xl text-slate-700">
            Design System Configuration Test
          </p>
        </div>

        {/* Brand Colors */}
        <div className="animate-slide-in-left">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-900 text-white p-6 rounded-lg">
              <p className="font-semibold">Deep Blue (Primary)</p>
              <p className="text-sm">#1E3A8A</p>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg">
              <p className="font-semibold">Tech Teal (Secondary)</p>
              <p className="text-sm">#06B6D4</p>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-lg">
              <p className="font-semibold">Warm Orange (Accent)</p>
              <p className="text-sm">#F97316</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="animate-slide-in-right">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Typography (Inter)</h2>
          <div className="space-y-2 bg-white p-6 rounded-lg shadow">
            <p className="text-4xl font-extrabold">Heading 1 - Extrabold</p>
            <p className="text-3xl font-bold">Heading 2 - Bold</p>
            <p className="text-2xl font-semibold">Heading 3 - Semibold</p>
            <p className="text-lg font-medium">Body Large - Medium</p>
            <p className="text-base">Body Regular - Normal</p>
          </div>
        </div>

        {/* Animations */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Custom Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow animate-fade-in">
              <p className="font-semibold">Fade In</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow animate-slide-in-left">
              <p className="font-semibold">Slide In Left</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow animate-slide-in-right">
              <p className="font-semibold">Slide In Right</p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <p className="text-green-800 font-semibold">
            ✓ TailwindCSS Design System Configured Successfully
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
