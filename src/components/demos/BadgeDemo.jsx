import Badge from '../ui/Badge';
import Card from '../ui/Card';

function BadgeDemo() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Badge Component</h2>

      {/* Variants */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="primary" size="sm">
            Small
          </Badge>
          <Badge variant="primary" size="md">
            Medium
          </Badge>
          <Badge variant="primary" size="lg">
            Large
          </Badge>
        </div>
      </div>

      {/* Rounded (Pill) */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Rounded (Pill Shape)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary" rounded>
            Primary
          </Badge>
          <Badge variant="success" rounded>
            Success
          </Badge>
          <Badge variant="warning" rounded>
            Warning
          </Badge>
          <Badge variant="danger" rounded>
            Danger
          </Badge>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Status Indicators</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-700">Order Status:</span>
            <Badge variant="success" size="sm">
              Completed
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-700">Payment Status:</span>
            <Badge variant="warning" size="sm">
              Pending
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-700">Delivery Status:</span>
            <Badge variant="info" size="sm">
              In Transit
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-700">Account Status:</span>
            <Badge variant="danger" size="sm">
              Suspended
            </Badge>
          </div>
        </div>
      </div>

      {/* Real-World Examples */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Real-World Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="bordered">
            <Card.Body>
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-lg">LinkedIn Profile Review</h4>
                <Badge variant="success" size="sm" rounded>
                  Active
                </Badge>
              </div>
              <p className="text-slate-600 mb-3">
                Get your LinkedIn profile reviewed by an expert.
              </p>
              <div className="flex gap-2">
                <Badge variant="info" size="sm">
                  1 hour
                </Badge>
                <Badge variant="secondary" size="sm">
                  $99
                </Badge>
              </div>
            </Card.Body>
          </Card>

          <Card variant="bordered">
            <Card.Body>
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-lg">Career Coaching Package</h4>
                <Badge variant="warning" size="sm" rounded>
                  Limited
                </Badge>
              </div>
              <p className="text-slate-600 mb-3">
                4-week intensive career transition program.
              </p>
              <div className="flex gap-2">
                <Badge variant="info" size="sm">
                  4 weeks
                </Badge>
                <Badge variant="secondary" size="sm">
                  $299
                </Badge>
                <Badge variant="primary" size="sm">
                  Popular
                </Badge>
              </div>
            </Card.Body>
          </Card>

          <Card variant="bordered">
            <Card.Body>
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-lg">Resume Optimization</h4>
                <Badge variant="danger" size="sm" rounded>
                  Sold Out
                </Badge>
              </div>
              <p className="text-slate-600 mb-3">
                Professional resume review and optimization.
              </p>
              <div className="flex gap-2">
                <Badge variant="info" size="sm">
                  2 hours
                </Badge>
                <Badge variant="secondary" size="sm">
                  $149
                </Badge>
              </div>
            </Card.Body>
          </Card>

          <Card variant="bordered">
            <Card.Body>
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-lg">Mock Interview Prep</h4>
                <Badge variant="success" size="sm" rounded>
                  New
                </Badge>
              </div>
              <p className="text-slate-600 mb-3">
                Practice interviews with real-time feedback.
              </p>
              <div className="flex gap-2">
                <Badge variant="info" size="sm">
                  1.5 hours
                </Badge>
                <Badge variant="secondary" size="sm">
                  $129
                </Badge>
                <Badge variant="warning" size="sm">
                  Hot
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default BadgeDemo;
