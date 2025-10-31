import { useState } from 'react';
import Button from '../ui/Button';

function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Button Component</h2>

      {/* Variants */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </div>

      {/* States */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">States</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button loading={loading} onClick={handleLoadingDemo}>
            {loading ? 'Loading...' : 'Click to Load'}
          </Button>
        </div>
      </div>

      {/* Full Width */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Full Width</h3>
        <Button fullWidth>Full Width Button</Button>
      </div>

      {/* Combined Examples */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Combined Examples</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Large Primary
            </Button>
            <Button variant="secondary" size="sm">
              Small Secondary
            </Button>
            <Button variant="outline" size="md">
              Medium Outline
            </Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="danger" size="sm">
              Delete
            </Button>
            <Button variant="ghost" size="lg">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButtonDemo;
