import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Alert from '../ui/Alert';
import { trackEvent } from '../../utils/analytics';

/**
 * NewsletterForm Component
 * 
 * Email subscription form integrated with ConvertKit.
 * Supports email-only (compact) or email + name (full) modes.
 * 
 * @param {boolean} compact - If true, shows email-only field (for footer)
 * @param {string} source - Source location for analytics tracking
 */
const NewsletterForm = ({ compact = false, source = 'unknown' }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID;
  const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Check if ConvertKit is configured
    if (!formId || !apiKey) {
      console.error('ConvertKit not configured. Missing VITE_CONVERTKIT_FORM_ID or VITE_CONVERTKIT_API_KEY');
      setErrorMessage('Newsletter signup is not configured. Please contact us at hello@pivotpath.us');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Track attempt
    trackEvent('newsletter_signup_attempted', {
      source,
      has_name: !!firstName,
    });

    try {
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email.trim(),
          first_name: firstName.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setSubmitStatus('success');
        setEmail('');
        setFirstName('');

        // Track success
        trackEvent('newsletter_signup_completed', {
          source,
          has_name: !!firstName,
        });
      } else {
        // API error
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Unable to subscribe. Please try again or email us at hello@pivotpath.us');

      // Track error
      trackEvent('newsletter_signup_error', {
        source,
        error: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (submitStatus === 'success') {
    return (
      <Alert variant="success">
        <strong>Thanks for subscribing!</strong> Check your email to confirm your subscription.
      </Alert>
    );
  }

  // Compact mode (footer)
  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="flex-1"
          />
          <Button type="submit" variant="primary" size="sm" loading={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        {errorMessage && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
        <p className="text-xs text-slate-500">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  // Full mode (with name field)
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus === 'error' && errorMessage && (
        <Alert variant="error">{errorMessage}</Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          label="First Name (optional)"
          placeholder="John"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={isSubmitting}
        />
        <Input
          type="email"
          label="Email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>

      {errorMessage && !submitStatus && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting}>
        {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
      </Button>

      <p className="text-sm text-slate-500 text-center">
        We respect your privacy. Unsubscribe anytime.{' '}
        <a href="/privacy" className="text-blue-900 hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
};

NewsletterForm.propTypes = {
  compact: PropTypes.bool,
  source: PropTypes.string,
};

export default NewsletterForm;
