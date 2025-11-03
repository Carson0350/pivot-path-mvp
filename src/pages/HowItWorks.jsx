import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaComments, FaEdit, FaBullseye } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Icon from '../components/ui/Icon';
import CalendlyModal from '../components/integrations/CalendlyModal';

function HowItWorks() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [calendlySource, setCalendlySource] = useState('');

  const openCalendly = (source) => {
    setCalendlySource(source);
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              How It Works
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              A simple, straightforward process to get you from where you are to where you want to
              be.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process Steps */}
      <Section background="white" spacing="xl">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Journey to Success
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here's exactly what happens when you work with Pivot Path.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <Card variant="bordered" className="relative">
              <div className="absolute -left-4 top-8 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <Card.Body className="pl-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Schedule Your Free Consultation
                    </h3>
                    <p className="text-slate-600 text-lg mb-4">
                      Book a 30-minute call where we'll discuss your career goals, current situation,
                      and challenges. No pressure, no sales pitch—just an honest conversation about
                      whether we're a good fit.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Discuss your career objectives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Assess your current profile and resume</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Get initial recommendations</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <Badge variant="info" size="lg" rounded>
                      Free
                    </Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Step 2 */}
            <Card variant="bordered" className="relative">
              <div className="absolute -left-4 top-8 w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <Card.Body className="pl-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Choose Your Package & Get Started
                    </h3>
                    <p className="text-slate-600 text-lg mb-4">
                      Select the service that fits your needs and budget. Once you're enrolled, you'll
                      receive a welcome email with next steps, scheduling links, and any prep work.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Secure payment via Stripe</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Instant access to scheduling system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Welcome packet with resources</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <Badge variant="secondary" size="lg" rounded>
                      Day 1
                    </Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Step 3 */}
            <Card variant="bordered" className="relative">
              <div className="absolute -left-4 top-8 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <Card.Body className="pl-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Work Together on Your Goals
                    </h3>
                    <p className="text-slate-600 text-lg mb-4">
                      We'll meet for scheduled sessions (video call) where we'll work on your LinkedIn
                      profile, resume, interview skills, or job search strategy. Between sessions,
                      you'll have email support and action items to complete.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Live video sessions (Zoom/Google Meet)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Recorded sessions for your reference</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Email support between sessions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <Badge variant="warning" size="lg" rounded>
                      Weeks 1-4
                    </Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Step 4 */}
            <Card variant="bordered" className="relative">
              <div className="absolute -left-4 top-8 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <Card.Body className="pl-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Land Interviews & Get Hired
                    </h3>
                    <p className="text-slate-600 text-lg mb-4">
                      With your optimized profile, polished resume, and interview skills, you'll start
                      landing interviews. I'll continue to support you through the process until you
                      accept an offer.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Interview prep and practice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Offer negotiation guidance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Ongoing support until you're hired</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <Badge variant="success" size="lg" rounded>
                      Success!
                    </Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Section>

      {/* What to Expect */}
      <Section background="gray" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here's what working with me looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="bordered">
              <Card.Body>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  <Icon icon={FaCalendar} size="sm" className="inline mr-2" /> Flexible Scheduling
                </h3>
                <p className="text-slate-600">
                  Sessions available Monday-Saturday, including evenings. Book times that work for
                  your schedule through our online calendar system.
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered">
              <Card.Body>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  <Icon icon={FaComments} size="sm" className="inline mr-2" /> Direct Communication
                </h3>
                <p className="text-slate-600">
                  Email me anytime with questions. I typically respond within 24 hours on weekdays.
                  No automated responses or chatbots.
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered">
              <Card.Body>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  <Icon icon={FaEdit} size="sm" className="inline mr-2" /> Actionable Homework
                </h3>
                <p className="text-slate-600">
                  Between sessions, you'll have specific tasks to complete. These aren't busywork—they're
                  practical steps that move you closer to your goal.
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered">
              <Card.Body>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  <Icon icon={FaBullseye} size="sm" className="inline mr-2" /> Results-Focused
                </h3>
                <p className="text-slate-600">
                  Every session has a clear objective. We track progress and adjust strategy as needed.
                  No fluff, just results.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="dark" spacing="lg">
        <Container maxWidth="md" centerContent>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Book your free consultation and let's create a plan to land your dream job.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => openCalendly('how-it-works-cta')}
            >
              Schedule Free Consultation
            </Button>
            <p className="text-slate-400 text-sm mt-6">
              Most clients land interviews within 3-4 weeks.
            </p>
          </div>
        </Container>
      </Section>

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        source={calendlySource}
      />
    </>
  );
}

export default HowItWorks;
