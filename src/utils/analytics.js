/**
 * Google Analytics 4 Event Tracking Utilities
 * 
 * Usage:
 * import { trackEvent, trackPageView } from './utils/analytics';
 * 
 * trackEvent('button_click', { button_name: 'Schedule Consultation' });
 * trackPageView('/services');
 */

/**
 * Track a custom event
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track a page view
 * @param {string} path - Page path
 */
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
    });
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
