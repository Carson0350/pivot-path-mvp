import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Card from '../components/ui/Card';
import Alert from '../components/ui/Alert';
import { trackFormSubmission } from '../utils/analytics';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you'd send this to your backend
    console.log('Form submitted:', formData);

    // Track form submission
    trackFormSubmission('contact_form', true);

    // Navigate to thank you page
    navigate('/thank-you');
  };

  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Let's Talk About Your Career
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation. No pressure, no sales pitch—just honest advice
              about your next career move.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section background="white" spacing="xl">
        <Container maxWidth="lg" centerContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="bordered">
                <Card.Body>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Schedule Your Free Consultation
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Full Name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                    />

                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      helperText="Optional - We'll use this to schedule your call"
                    />

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border-2 border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-offset-1 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select a service...</option>
                        <option value="linkedin">LinkedIn Profile Review ($99)</option>
                        <option value="coaching">Career Coaching Package ($299)</option>
                        <option value="resume">Resume Optimization ($149)</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>

                    <Textarea
                      label="Tell Me About Your Situation"
                      name="message"
                      placeholder="What are your career goals? What challenges are you facing?"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      error={errors.message}
                      helperText="The more details you provide, the more helpful our call will be"
                      required
                    />

                    <Alert variant="info">
                      <strong>What happens next?</strong> I'll review your message and send you a
                      calendar link within 24 hours to schedule your free 30-minute consultation.
                    </Alert>

                    <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Schedule Free Consultation'}
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      By submitting this form, you agree to receive email communication from Pivot
                      Path. We respect your privacy and won't spam you.
                    </p>
                  </form>
                </Card.Body>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card variant="bordered">
                <Card.Body>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
                  <div className="space-y-4 text-slate-600">
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">📧 Email</div>
                      <a href="mailto:hello@pivotpath.com" className="text-blue-900 hover:underline">
                        hello@pivotpath.com
                      </a>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">⏰ Response Time</div>
                      <p>Within 24 hours on weekdays</p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">📅 Availability</div>
                      <p>Monday - Saturday</p>
                      <p className="text-sm">9am - 8pm EST</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card variant="bordered">
                <Card.Body>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>30-minute video call</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Discuss your career goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Get initial recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Learn about services & pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>No pressure or commitment</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
