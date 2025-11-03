import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PopupModal } from 'react-calendly';
import { trackEvent } from '../../utils/analytics';

/**
 * CalendlyModal Component
 * 
 * Modal wrapper for Calendly booking widget with analytics tracking,
 * accessibility features, and error handling.
 * 
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Callback when modal closes
 * @param {string} source - Source page/button that triggered modal (for analytics)
 * @param {object} prefill - Optional prefill data (name, email)
 */
const CalendlyModal = ({ isOpen, onClose, source = 'unknown', prefill = {} }) => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  // Track modal open event
  useEffect(() => {
    if (isOpen) {
      trackEvent('calendly_modal_opened', {
        source,
        timestamp: new Date().toISOString(),
      });
    }
  }, [isOpen, source]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle booking completion
  const handleEventScheduled = (e) => {
    trackEvent('calendly_booking_completed', {
      source,
      event_uri: e.data.payload.event.uri,
      invitee_uri: e.data.payload.invitee.uri,
      timestamp: new Date().toISOString(),
    });

    // Optional: Redirect to thank you page
    // setTimeout(() => {
    //   window.location.href = '/thank-you?source=calendly';
    // }, 2000);
  };

  // Error fallback if Calendly URL not configured
  if (!calendlyUrl) {
    console.error('VITE_CALENDLY_URL not configured in .env file');
    return null;
  }

  // Build prefill parameters
  const prefillParams = {};
  if (prefill.name) prefillParams.name = prefill.name;
  if (prefill.email) prefillParams.email = prefill.email;

  return (
    <PopupModal
      url={calendlyUrl}
      open={isOpen}
      onModalClose={onClose}
      rootElement={document.getElementById('root')}
      prefill={prefillParams}
      onEventScheduled={handleEventScheduled}
      // Accessibility attributes
      aria-modal="true"
      role="dialog"
      aria-labelledby="calendly-modal-title"
    />
  );
};

CalendlyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  source: PropTypes.string,
  prefill: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default CalendlyModal;
