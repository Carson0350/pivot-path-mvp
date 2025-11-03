import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Alert from '../ui/Alert';
import { trackEvent } from '../../utils/analytics';

/**
 * LeadMagnetDownload Component
 * 
 * Two-step lead magnet download process:
 * 1. Capture email (and optional name)
 * 2. Submit to ConvertKit with "lead_magnet_download" tag
 * 3. Auto-download PDF + show success message
 * 
 * @param {string} pdfUrl - URL to the PDF file
 * @param {string} pdfFileName - Filename for download
 * @param {string} source - Source location for analytics
 */
const LeadMagnetDownload = ({ 
  pdfUrl = '/pivot-path-mvp/downloads/LinkedIn_Revamp_Checklist.pdf',
  pdfFileName = 'LinkedIn_Revamp_Checklist.pdf',
  source = 'unknown'
}) => {
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

  const downloadPDF = () => {
    // Track download
    trackEvent('lead_magnet_downloaded', {
      source,
      pdf_name: pdfFileName,
      timestamp: new Date().toISOString(),
    });

    // Trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

    setIsSubmitting(true);
    setErrorMessage('');

    // Track submission attempt
    trackEvent('lead_magnet_email_submitted', {
      source,
      has_name: !!firstName,
    });

    try {
      // Submit to ConvertKit with tag
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email.trim(),
          first_name: firstName.trim() || undefined,
          tags: ['lead_magnet_download'], // Tag for segmentation
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setSubmitStatus('success');
        
        // Auto-download PDF
        setTimeout(() => {
          downloadPDF();
        }, 500);

        // Track success
        trackEvent('lead_magnet_conversion_completed', {
          source,
          has_name: !!firstName,
        });
      } else {
        // API error
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Lead magnet submission error:', error);
      
      // Even if ConvertKit fails, still allow download
      setSubmitStatus('success');
      setTimeout(() => {
        downloadPDF();
      }, 500);

      // Track error (but don't show to user since we're allowing download anyway)
      trackEvent('lead_magnet_submission_error', {
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
      <div className="space-y-4">
        <Alert variant="success">
          <strong>Success!</strong> Your download should start automatically. Check your email for the guide and bonus tips!
        </Alert>
        <Button 
          variant="outline" 
          size="lg" 
          fullWidth
          onClick={downloadPDF}
        >
          📥 Download Again
        </Button>
        <p className="text-sm text-slate-500 text-center">
          Didn't receive the email? Check your spam folder or contact us at hello@pivotpath.us
        </p>
      </div>
    );
  }

  // Form state
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      {errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting}>
        {isSubmitting ? 'Processing...' : '📥 Get Free LinkedIn Guide'}
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

LeadMagnetDownload.propTypes = {
  pdfUrl: PropTypes.string,
  pdfFileName: PropTypes.string,
  source: PropTypes.string,
};

export default LeadMagnetDownload;
