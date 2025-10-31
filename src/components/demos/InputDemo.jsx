import { useState } from 'react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

function InputDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    website: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = () => {
    if (formData.email && !formData.email.includes('@')) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Input Components</h2>

      {/* Basic Inputs */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Input Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            helperText="First and last name"
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={validateEmail}
            error={errors.email}
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            helperText="At least 8 characters"
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
          />

          <Input
            label="Website"
            type="url"
            name="website"
            placeholder="https://example.com"
            value={formData.website}
            onChange={handleChange}
          />

          <Input
            label="Disabled Input"
            type="text"
            placeholder="This is disabled"
            disabled
          />
        </div>
      </div>

      {/* Validation States */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Validation States</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Success State"
            type="text"
            placeholder="Valid input"
            value="john@example.com"
            helperText="Email is valid"
          />

          <Input
            label="Error State"
            type="text"
            placeholder="Invalid input"
            value="invalid-email"
            error="Please enter a valid email address"
          />

          <Input
            label="Required Field"
            type="text"
            placeholder="This field is required"
            required
            helperText="This field cannot be empty"
          />

          <Input
            label="With Helper Text"
            type="text"
            placeholder="Enter something"
            helperText="This is helpful information about the field"
          />
        </div>
      </div>

      {/* Textarea */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Textarea</h3>
        <div className="grid grid-cols-1 gap-6">
          <Textarea
            label="Message"
            name="message"
            placeholder="Enter your message here..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            helperText="Maximum 500 characters"
          />

          <Textarea
            label="Comments (with error)"
            placeholder="Enter comments"
            error="This field is required"
            rows={3}
            required
          />

          <Textarea
            label="Disabled Textarea"
            placeholder="This is disabled"
            disabled
            rows={3}
          />
        </div>
      </div>
    </section>
  );
}

export default InputDemo;
