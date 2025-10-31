function CodeExamples() {
  return (
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
  );
}

export default CodeExamples;
