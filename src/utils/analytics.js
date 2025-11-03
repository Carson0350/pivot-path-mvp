/**
 * Google Analytics 4 Event Tracking Utilities
 * 
 * Usage:
 * import { trackEvent, trackPageView } from './utils/analytics';
 * 
 * trackEvent('button_click', { button_name: 'Schedule Consultation' });
 * trackPageView('/services');
 */

import ReactGA from 'react-ga4';

/**
 * Track a custom event
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (import.meta.env.PROD && import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.event(eventName, eventParams);
  }
};

/**
 * Track a page view
 * @param {string} path - Page path
 */
export const trackPageView = (path) => {
  if (import.meta.env.PROD && import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

/**
 * Track button clicks
 * @param {string} buttonName - Name of the button clicked
 * @param {string} location - Where the button is located
 */
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {boolean} success - Whether submission was successful
 */
export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
  });
};

/**
 * Track link clicks (external or internal)
 * @param {string} url - URL clicked
 * @param {string} linkText - Text of the link
 * @param {boolean} isExternal - Whether link is external
 */
export const trackLinkClick = (url, linkText = '', isExternal = false) => {
  trackEvent('link_click', {
    url: url,
    link_text: linkText,
    is_external: isExternal,
  });
};

/**
 * Track service selection
 * @param {string} serviceName - Name of the service
 * @param {string} price - Price of the service
 */
export const trackServiceSelection = (serviceName, price = '') => {
  trackEvent('service_selection', {
    service_name: serviceName,
    price: price,
  });
};

/**
 * Track Calendly modal opened
 * @param {string} source - Source page/button that triggered modal
 */
export const trackCalendlyModalOpened = (source = 'unknown') => {
  trackEvent('calendly_modal_opened', {
    source: source,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track Calendly booking completed
 * @param {string} source - Source page/button that triggered modal
 * @param {object} eventData - Event data from Calendly
 */
export const trackCalendlyBookingCompleted = (source = 'unknown', eventData = {}) => {
  trackEvent('calendly_booking_completed', {
    source: source,
    event_uri: eventData.event_uri || '',
    invitee_uri: eventData.invitee_uri || '',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track newsletter signup attempt
 * @param {string} source - Source location of the form
 * @param {boolean} hasName - Whether first name was provided
 */
export const trackNewsletterSignupAttempted = (source = 'unknown', hasName = false) => {
  trackEvent('newsletter_signup_attempted', {
    source: source,
    has_name: hasName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track newsletter signup success
 * @param {string} source - Source location of the form
 * @param {boolean} hasName - Whether first name was provided
 */
export const trackNewsletterSignupCompleted = (source = 'unknown', hasName = false) => {
  trackEvent('newsletter_signup_completed', {
    source: source,
    has_name: hasName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track newsletter signup error
 * @param {string} source - Source location of the form
 * @param {string} error - Error message
 */
export const trackNewsletterSignupError = (source = 'unknown', error = '') => {
  trackEvent('newsletter_signup_error', {
    source: source,
    error: error,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track lead magnet form viewed
 * @param {string} source - Source page where form is displayed
 */
export const trackLeadMagnetFormViewed = (source = 'unknown') => {
  trackEvent('lead_magnet_form_viewed', {
    source: source,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track lead magnet email submitted
 * @param {string} source - Source page of submission
 * @param {boolean} hasName - Whether first name was provided
 */
export const trackLeadMagnetEmailSubmitted = (source = 'unknown', hasName = false) => {
  trackEvent('lead_magnet_email_submitted', {
    source: source,
    has_name: hasName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track lead magnet downloaded
 * @param {string} source - Source page of download
 * @param {string} pdfName - Name of the PDF file
 */
export const trackLeadMagnetDownloaded = (source = 'unknown', pdfName = '') => {
  trackEvent('lead_magnet_downloaded', {
    source: source,
    pdf_name: pdfName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track lead magnet conversion completed
 * @param {string} source - Source page
 * @param {boolean} hasName - Whether first name was provided
 */
export const trackLeadMagnetConversionCompleted = (source = 'unknown', hasName = false) => {
  trackEvent('lead_magnet_conversion_completed', {
    source: source,
    has_name: hasName,
    timestamp: new Date().toISOString(),
  });
};
