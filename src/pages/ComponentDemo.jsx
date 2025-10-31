import { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

function ComponentDemo() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">
          Component Library Demo
        </h1>

        {/* Button Component */}
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
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              Combined Examples
            </h3>
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

        {/* Card Component */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Card Component</h2>

          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default">
                <Card.Body>
                  <h4 className="font-bold text-lg mb-2">Default Card</h4>
                  <p className="text-slate-600">Simple card with white background.</p>
                </Card.Body>
              </Card>

              <Card variant="bordered">
                <Card.Body>
                  <h4 className="font-bold text-lg mb-2">Bordered Card</h4>
                  <p className="text-slate-600">Card with a subtle border.</p>
                </Card.Body>
              </Card>

              <Card variant="elevated">
                <Card.Body>
                  <h4 className="font-bold text-lg mb-2">Elevated Card</h4>
                  <p className="text-slate-600">Card with shadow elevation.</p>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* With Header and Footer */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              With Header and Footer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="bordered">
                <Card.Header>
                  <h4 className="font-bold text-lg">Card Title</h4>
                </Card.Header>
                <Card.Body>
                  <p className="text-slate-600">
                    This card has a header and footer section for better content organization.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm">Action</Button>
                </Card.Footer>
              </Card>

              <Card variant="elevated">
                <Card.Header>
                  <h4 className="font-bold text-lg">Featured Content</h4>
                </Card.Header>
                <Card.Body>
                  <p className="text-slate-600">
                    Elevated card with structured sections for professional layouts.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <div className="flex gap-2">
                    <Button size="sm" variant="primary">
                      Learn More
                    </Button>
                    <Button size="sm" variant="ghost">
                      Cancel
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>

          {/* Hoverable Cards */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">Hoverable Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="bordered" hoverable>
                <Card.Body>
                  <h4 className="font-bold text-lg mb-2">Hover Me</h4>
                  <p className="text-slate-600">This card lifts on hover.</p>
                </Card.Body>
              </Card>

              <Card
                variant="elevated"
                onClick={() => alert('Card clicked!')}
              >
                <Card.Body>
                  <h4 className="font-bold text-lg mb-2">Clickable Card</h4>
                  <p className="text-slate-600">Click me to trigger an action.</p>
                </Card.Body>
              </Card>

              <Card variant="bordered" hoverable>
                <Card.Body>
                  <h4 className="font-bold text-lg mb-2">Interactive</h4>
                  <p className="text-slate-600">Hover effect for better UX.</p>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Service Card Example */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              Real-World Example
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="elevated" hoverable>
                <Card.Body>
                  <div className="text-blue-900 mb-4">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl mb-2">Expert Guidance</h4>
                  <p className="text-slate-600 mb-4">
                    Get personalized coaching from someone who&apos;s successfully navigated
                    career transitions.
                  </p>
                  <Button variant="outline" size="sm" fullWidth>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>

              <Card variant="elevated" hoverable>
                <Card.Body>
                  <div className="text-cyan-600 mb-4">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl mb-2">LinkedIn Mastery</h4>
                  <p className="text-slate-600 mb-4">
                    Learn proven strategies to optimize your profile and land your next role
                    fast.
                  </p>
                  <Button variant="outline" size="sm" fullWidth>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>

              <Card variant="elevated" hoverable>
                <Card.Body>
                  <div className="text-orange-500 mb-4">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl mb-2">Affordable Pricing</h4>
                  <p className="text-slate-600 mb-4">
                    Professional coaching without the $10K price tag. Plans starting at $299.
                  </p>
                  <Button variant="outline" size="sm" fullWidth>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="bg-slate-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white mb-4">Usage Examples</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Button Component</h3>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`import Button from './components/ui/Button';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// Sizes & States
<Button size="lg">Large</Button>
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Card Component</h3>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`import Card from './components/ui/Card';

// Basic card
<Card variant="bordered">
  <Card.Body>
    <h4>Title</h4>
    <p>Content goes here</p>
  </Card.Body>
</Card>

// With header and footer
<Card variant="elevated">
  <Card.Header>
    <h4>Card Title</h4>
  </Card.Header>
  <Card.Body>
    <p>Main content</p>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// Hoverable & Clickable
<Card hoverable onClick={handleClick}>
  <Card.Body>Interactive card</Card.Body>
</Card>`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComponentDemo;
