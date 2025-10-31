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

      <div className="mb-6">
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

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Input Components</h3>
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{`import Input from './components/ui/Input';
import Textarea from './components/ui/Textarea';

// Basic input
<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={handleChange}
  required
/>

// With validation
<Input
  label="Username"
  error="Username is already taken"
  helperText="Choose a unique username"
/>

// Textarea
<Textarea
  label="Message"
  rows={4}
  placeholder="Enter your message..."
  value={message}
  onChange={handleChange}
/>`}</code>
        </pre>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Badge Component</h3>
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{`import Badge from './components/ui/Badge';

// Variants
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Suspended</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// Rounded (pill shape)
<Badge variant="primary" rounded>New</Badge>
<Badge variant="success" rounded>Popular</Badge>`}</code>
        </pre>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Alert Component</h3>
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{`import Alert from './components/ui/Alert';

// Basic alerts
<Alert variant="success">
  Profile updated successfully!
</Alert>

// With title & dismissible
<Alert variant="info" title="Pro Tip" dismissible>
  Add keywords to improve visibility.
</Alert>`}</code>
        </pre>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Modal Component</h3>
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{`import Modal from './components/ui/Modal';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
  footer={
    <Button onClick={handleSubmit}>Submit</Button>
  }
>
  <p>Modal content goes here</p>
</Modal>`}</code>
        </pre>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Accordion Component</h3>
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{`import Accordion from './components/ui/Accordion';

const items = [
  {
    title: 'Question 1',
    content: 'Answer to question 1'
  },
  {
    title: 'Question 2',
    content: 'Answer to question 2'
  }
];

// Basic accordion
<Accordion items={items} />

// With default open & allow multiple
<Accordion 
  items={items}
  defaultOpen={0}
  allowMultiple
/>`}</code>
        </pre>
      </div>
    </section>
  );
}

export default CodeExamples;
