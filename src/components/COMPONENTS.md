# Component Library Documentation

A comprehensive collection of reusable React components for the Pivot Path MVP.

## Table of Contents

- [UI Components](#ui-components)
  - [Button](#button)
  - [Card](#card)
  - [Input](#input)
  - [Textarea](#textarea)
  - [Badge](#badge)
  - [Alert](#alert)
  - [Modal](#modal)
  - [Accordion](#accordion)
- [Layout Components](#layout-components)
  - [Container](#container)
  - [Section](#section)
- [Demo Components](#demo-components)

---

## UI Components

### Button

A versatile button component with multiple variants, sizes, and states.

**Location:** `src/components/ui/Button.jsx`

**Props:**
- `variant` - Button style: `primary`, `secondary`, `outline`, `ghost`, `danger` (default: `primary`)
- `size` - Button size: `sm`, `md`, `lg` (default: `md`)
- `disabled` - Disable the button (default: `false`)
- `loading` - Show loading spinner (default: `false`)
- `fullWidth` - Take full width of container (default: `false`)
- `type` - HTML button type: `button`, `submit`, `reset` (default: `button`)
- `onClick` - Click handler function
- `className` - Additional CSS classes

**Example:**
```jsx
import Button from './components/ui/Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>

<Button variant="danger" loading>
  Processing...
</Button>
```

---

### Card

A flexible container component for grouping related content.

**Location:** `src/components/ui/Card.jsx`

**Props:**
- `variant` - Card style: `default`, `bordered`, `elevated` (default: `default`)
- `hoverable` - Add hover lift effect (default: `false`)
- `onClick` - Click handler (makes card clickable)
- `className` - Additional CSS classes

**Sub-components:**
- `Card.Header` - Card header section
- `Card.Body` - Main content area
- `Card.Footer` - Footer section
- `Card.Image` - Image section

**Example:**
```jsx
import Card from './components/ui/Card';

<Card variant="elevated" hoverable>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here</p>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

---

### Input

A flexible input component with validation states and multiple types.

**Location:** `src/components/ui/Input.jsx`

**Props:**
- `label` - Input label text
- `type` - Input type: `text`, `email`, `password`, `number`, `tel`, `url` (default: `text`)
- `placeholder` - Placeholder text
- `value` - Input value
- `onChange` - Change handler function
- `required` - Mark as required (default: `false`)
- `disabled` - Disable the input (default: `false`)
- `error` - Error message to display
- `helperText` - Helper text to display
- `id` - Input ID
- `name` - Input name
- `className` - Additional CSS classes

**Example:**
```jsx
import Input from './components/ui/Input';

<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={handleChange}
  error={errors.email}
  required
/>
```

---

### Textarea

A textarea component with validation states.

**Location:** `src/components/ui/Textarea.jsx`

**Props:**
- `label` - Textarea label text
- `placeholder` - Placeholder text
- `value` - Textarea value
- `onChange` - Change handler function
- `rows` - Number of visible rows (default: `4`)
- `required` - Mark as required (default: `false`)
- `disabled` - Disable the textarea (default: `false`)
- `error` - Error message to display
- `helperText` - Helper text to display
- `id` - Textarea ID
- `name` - Textarea name
- `className` - Additional CSS classes

**Example:**
```jsx
import Textarea from './components/ui/Textarea';

<Textarea
  label="Message"
  placeholder="Enter your message..."
  value={message}
  onChange={handleChange}
  rows={6}
  required
/>
```

---

### Badge

A small status indicator or label component.

**Location:** `src/components/ui/Badge.jsx`

**Props:**
- `variant` - Badge color: `primary`, `secondary`, `success`, `warning`, `danger`, `info` (default: `primary`)
- `size` - Badge size: `sm`, `md`, `lg` (default: `md`)
- `rounded` - Full rounded (pill shape) (default: `false`)
- `className` - Additional CSS classes

**Example:**
```jsx
import Badge from './components/ui/Badge';

<Badge variant="success" rounded>Active</Badge>
<Badge variant="warning" size="sm">Pending</Badge>
```

---

### Alert

A notification message component for displaying important information.

**Location:** `src/components/ui/Alert.jsx`

**Props:**
- `variant` - Alert type: `success`, `warning`, `danger`, `info` (default: `info`)
- `title` - Optional alert title
- `dismissible` - Show close button (default: `false`)
- `onDismiss` - Callback when dismissed
- `className` - Additional CSS classes

**Example:**
```jsx
import Alert from './components/ui/Alert';

<Alert variant="success" title="Success!" dismissible>
  Your profile has been updated successfully.
</Alert>

<Alert variant="warning">
  Your session will expire in 5 minutes.
</Alert>
```

---

### Modal

A dialog overlay component for displaying content above the main page.

**Location:** `src/components/ui/Modal.jsx`

**Props:**
- `isOpen` - Whether modal is open (required)
- `onClose` - Close handler function (required)
- `title` - Modal title
- `footer` - Optional footer content
- `size` - Modal size: `sm`, `md`, `lg`, `xl` (default: `md`)
- `closeOnOverlayClick` - Close when clicking overlay (default: `true`)
- `className` - Additional CSS classes

**Features:**
- ESC key to close
- Click overlay to close (configurable)
- Body scroll lock when open
- Smooth animations
- Fully accessible

**Example:**
```jsx
import Modal from './components/ui/Modal';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="sm"
  footer={
    <div className="flex justify-end gap-3">
      <Button variant="ghost" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleConfirm}>Confirm</Button>
    </div>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

---

### Accordion

A collapsible content container with multiple panels.

**Location:** `src/components/ui/Accordion.jsx`

**Props:**
- `items` - Array of items with `{title, content}` (required)
- `allowMultiple` - Allow multiple panels open (default: `false`)
- `defaultOpen` - Index or array of indexes to open by default
- `className` - Additional CSS classes

**Example:**
```jsx
import Accordion from './components/ui/Accordion';

const faqItems = [
  {
    title: 'What is included?',
    content: 'Detailed answer here...'
  },
  {
    title: 'How long does it take?',
    content: 'Another answer...'
  }
];

<Accordion items={faqItems} defaultOpen={0} />

<Accordion items={faqItems} allowMultiple />
```

---

## Layout Components

### Container

A responsive wrapper component with max-width constraints.

**Location:** `src/components/ui/Container.jsx`

**Props:**
- `maxWidth` - Maximum width: `sm`, `md`, `lg`, `xl`, `full` (default: `lg`)
- `centerContent` - Center horizontally (default: `false`)
- `className` - Additional CSS classes

**Example:**
```jsx
import Container from './components/ui/Container';

<Container maxWidth="lg" centerContent>
  <h1>Page Content</h1>
</Container>
```

---

### Section

A semantic section wrapper with consistent spacing and backgrounds.

**Location:** `src/components/ui/Section.jsx`

**Props:**
- `background` - Background color: `white`, `gray`, `blue`, `dark` (default: `white`)
- `spacing` - Vertical padding: `sm`, `md`, `lg`, `xl` (default: `lg`)
- `id` - Section ID for anchor links
- `className` - Additional CSS classes

**Example:**
```jsx
import Section from './components/ui/Section';
import Container from './components/ui/Container';

<Section background="blue" spacing="xl">
  <Container maxWidth="lg" centerContent>
    <h1>Hero Section</h1>
  </Container>
</Section>
```

---

## Demo Components

All components have corresponding demo components showcasing their usage:

- `ButtonDemo.jsx` - Button variations and states
- `CardDemo.jsx` - Card layouts and examples
- `InputDemo.jsx` - Form inputs and validation
- `BadgeDemo.jsx` - Badge variants and use cases
- `AlertDemo.jsx` - Alert types and dismissible examples
- `ModalDemo.jsx` - Modal sizes and interactive demos
- `AccordionDemo.jsx` - FAQ and collapsible content
- `LayoutDemo.jsx` - Container and Section examples
- `CodeExamples.jsx` - Code snippets for all components

**View all demos:** Navigate to `/components` route in the application.

---

## Design System

### Colors

- **Primary:** Blue 900 (`#1E3A8A`)
- **Secondary:** Cyan 600 (`#06B6D4`)
- **Accent:** Orange 500 (`#F97316`)
- **Success:** Green 600
- **Warning:** Yellow 500
- **Danger:** Red 600
- **Info:** Blue 500

### Typography

- **Font Family:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700, 800, 900

### Spacing Scale

- **sm:** py-8 (2rem)
- **md:** py-12 (3rem)
- **lg:** py-16 (4rem)
- **xl:** py-24 (6rem)

---

## Accessibility

All components follow accessibility best practices:

- Semantic HTML elements
- ARIA attributes where appropriate
- Keyboard navigation support
- Focus states
- Screen reader friendly
- Color contrast compliance

---

## Contributing

When adding new components:

1. Create component in `src/components/ui/`
2. Add PropTypes validation
3. Include JSDoc documentation
4. Create demo in `src/components/demos/`
5. Update this documentation
6. Add code examples to `CodeExamples.jsx`

---

## License

Private project - All rights reserved
