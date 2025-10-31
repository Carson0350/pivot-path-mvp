import { useState } from 'react';
import Alert from '../ui/Alert';
import Button from '../ui/Button';

function AlertDemo() {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Alert Component</h2>

      {/* Variants */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Variants</h3>
        <div className="space-y-4">
          <Alert variant="success">
            Your profile has been successfully updated!
          </Alert>

          <Alert variant="warning">
            Your session will expire in 5 minutes. Please save your work.
          </Alert>

          <Alert variant="danger">
            Payment failed. Please check your payment method and try again.
          </Alert>

          <Alert variant="info">
            New features are available! Check out our latest updates.
          </Alert>
        </div>
      </div>

      {/* With Titles */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">With Titles</h3>
        <div className="space-y-4">
          <Alert variant="success" title="Success!">
            Your LinkedIn profile has been optimized and is now live.
          </Alert>

          <Alert variant="warning" title="Action Required">
            Please complete your payment to activate your coaching package.
          </Alert>

          <Alert variant="danger" title="Error">
            Unable to process your request. Please contact support if the problem persists.
          </Alert>

          <Alert variant="info" title="Pro Tip">
            Add keywords to your LinkedIn headline to improve your profile visibility by 40%.
          </Alert>
        </div>
      </div>

      {/* Dismissible */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Dismissible Alerts</h3>
        <div className="space-y-4">
          {showDismissible && (
            <Alert
              variant="info"
              title="Welcome!"
              dismissible
              onDismiss={() => console.log('Alert dismissed')}
            >
              Click the X button to dismiss this alert.
            </Alert>
          )}

          <Alert variant="success" dismissible>
            This alert can be dismissed. Try clicking the X button.
          </Alert>

          {!showDismissible && (
            <div className="text-center py-4">
              <p className="text-slate-600 mb-4">Alert was dismissed!</p>
              <Button size="sm" onClick={() => setShowDismissible(true)}>
                Show Alert Again
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Real-World Examples */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Real-World Examples</h3>
        <div className="space-y-4">
          <Alert variant="success" title="Session Booked!">
            Your career coaching session is scheduled for Monday, Nov 4th at 2:00 PM. You&apos;ll
            receive a calendar invite shortly.
          </Alert>

          <Alert variant="warning" title="Limited Spots Available">
            Only 3 spots left for this month&apos;s LinkedIn optimization workshop. Book now to
            secure your place!
          </Alert>

          <Alert variant="info" title="New Resource Available" dismissible>
            We&apos;ve added a new guide: &quot;10 LinkedIn Profile Mistakes That Cost You
            Interviews&quot;. Check it out in your dashboard.
          </Alert>

          <Alert variant="danger" title="Payment Issue">
            Your payment method was declined. Please update your billing information to continue
            your subscription.
          </Alert>

          <Alert variant="success" dismissible>
            🎉 Congratulations! You&apos;ve completed your first coaching session. Your next
            session is in 3 days.
          </Alert>
        </div>
      </div>
    </section>
  );
}

export default AlertDemo;
