import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Alert from '../components/ui/Alert';
import Icon from '../components/ui/Icon';

function ThankYou() {
  return (
    <>
      {/* Success Section */}
      <Section background="white" spacing="xl">
        <Container maxWidth="md" centerContent>
          <div className="text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="h-16 w-16 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Thank You! <Icon icon={FaCheckCircle} size="lg" className="inline text-green-600" />
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Your consultation request has been received. I'm excited to help you with your career
              transition!
            </p>

            <Alert variant="success" className="text-left mb-8">
              <strong>What happens next?</strong> I'll review your message and send you a calendar
              link within 24 hours (usually much sooner) to schedule your free 30-minute
              consultation.
            </Alert>
          </div>
        </Container>
      </Section>

      {/* Next Steps */}
      <Section background="gray" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              While You Wait...
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here are some things you can do to prepare for our call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="bordered">
              <Card.Body>
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Update Your LinkedIn</h3>
                <p className="text-slate-600 mb-4">
                  Make sure your LinkedIn profile is current. We'll be reviewing it together during
                  our call.
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered">
              <Card.Body>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Define Your Goals</h3>
                <p className="text-slate-600 mb-4">
                  Think about what you want to achieve. What's your ideal role? What companies
                  interest you?
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered">
              <Card.Body>
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Prepare Questions</h3>
                <p className="text-slate-600 mb-4">
                  Write down any questions you have about the career transition process or my
                  services.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Section>

      {/* What to Expect */}
      <Section background="white" spacing="lg">
        <Container maxWidth="md" centerContent>
          <Card variant="bordered">
            <Card.Body>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                What to Expect on Our Call
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Quick intro (5 min):</strong> We'll get to know each other and I'll learn
                    about your background.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Your goals (10 min):</strong> You'll share what you're looking for and
                    what challenges you're facing.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Initial recommendations (10 min):</strong> I'll give you specific,
                    actionable advice you can use right away.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Next steps (5 min):</strong> We'll discuss if working together makes sense
                    and what package would be best for you.
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="blue" spacing="lg">
        <Container maxWidth="md" centerContent>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Want to Learn More in the Meantime?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Check out our services and read more about how we can help you land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button variant="primary" size="lg">
                  View Services
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">
                  How It Works
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="lg">
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ThankYou;
