# Google Analytics 4 Setup Guide

This project includes Google Analytics 4 (GA4) tracking for monitoring website traffic and user behavior.

## Setup Instructions

### 1. Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon in bottom left)
3. Click **Create Property**
4. Enter property name: "Pivot Path MVP"
5. Select timezone and currency
6. Click **Next**
7. Fill in business information
8. Click **Create**
9. Accept Terms of Service

### 2. Get Your Measurement ID

1. In your new property, click **Data Streams**
2. Click **Add stream** > **Web**
3. Enter website URL: `https://carson0350.github.io/pivot-path-mvp/`
4. Enter stream name: "Pivot Path Website"
5. Click **Create stream**
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Update the Code

Replace `G-XXXXXXXXXX` in the following files with your actual Measurement ID:

**File 1: `index.html`** (lines 34 and 39)
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID-HERE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ID-HERE', {
    page_path: window.location.pathname,
  });
</script>
```

**File 2: `src/utils/analytics.js`** (line 26)
```javascript
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-YOUR-ID-HERE', {
      page_path: path,
    });
  }
};
```

### 4. Deploy and Verify

1. Commit and push your changes
2. Wait for GitHub Actions to deploy
3. Visit your live site
4. In Google Analytics, go to **Reports** > **Realtime**
5. You should see yourself as an active user!

## Tracked Events

The following events are automatically tracked:

### Page Views
- Automatically tracked on every page load
- Includes page path and title

### Form Submissions
- **Event Name:** `form_submission`
- **Parameters:**
  - `form_name`: Name of the form (e.g., "contact_form")
  - `success`: Whether submission was successful

### Button Clicks (Ready to implement)
- **Event Name:** `button_click`
- **Parameters:**
  - `button_name`: Name of the button
  - `location`: Where the button is located

### Service Selection (Ready to implement)
- **Event Name:** `service_selection`
- **Parameters:**
  - `service_name`: Name of the service
  - `price`: Price of the service

## Custom Event Tracking

To track custom events in your components:

```javascript
import { trackEvent, trackButtonClick, trackFormSubmission } from './utils/analytics';

// Track a custom event
trackEvent('custom_event_name', { 
  param1: 'value1',
  param2: 'value2' 
});

// Track a button click
trackButtonClick('Schedule Consultation', 'Hero Section');

// Track a form submission
trackFormSubmission('newsletter_signup', true);
```

## Privacy Considerations

- Google Analytics is GDPR compliant when configured properly
- Consider adding a cookie consent banner if targeting EU users
- Analytics data is anonymized by default
- No personally identifiable information (PII) is tracked

## Useful Reports

Once data starts flowing, check these reports in Google Analytics:

1. **Realtime** - See current visitors
2. **Acquisition** - How users find your site
3. **Engagement** - Which pages users visit
4. **Events** - Custom events like form submissions
5. **Conversions** - Track form submissions as conversions

## Troubleshooting

**Not seeing data?**
- Check that your Measurement ID is correct
- Make sure you're testing on the live site (not localhost)
- Check browser console for errors
- Disable ad blockers
- Wait 24-48 hours for data to populate in reports

**Want to test locally?**
- GA4 works on localhost, but data may be filtered
- Use GA4 DebugView to see events in real-time
- Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/) Chrome extension

## Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Event Tracking](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GA4 Best Practices](https://support.google.com/analytics/answer/9267735)
