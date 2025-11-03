import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Accordion from '../components/ui/Accordion';
import CalendlyModal from '../components/integrations/CalendlyModal';

function Enterprise() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [calendlySource, setCalendlySource] = useState('');

  // Add SEO metadata and structured data
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Enterprise Outplacement Services | Pivot Path';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Professional outplacement services for tech companies. Support your team through transitions with flexible pricing, expert coaching, and proven results.'
      );
    }

    // Add Organization structured data (JSON-LD)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Pivot Path',
      url: 'https://pivotpath.us',
      logo: 'https://pivotpath.us/logo.png',
      description:
        'Professional career coaching and outplacement services for tech professionals and companies.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'hello@pivotpath.us',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '349',
        highPrice: '12499',
        offerCount: '2',
      },
    });
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.head.removeChild(script);
      // Reset title to default
      document.title = 'Pivot Path - Affordable Career Coaching for Tech Professionals';
    };
  }, []);

  const openCalendly = (source) => {
    setCalendlySource(source);
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  const enterpriseFaqItems = [
    {
      title: 'What information do you need about our employees?',
      content:
        'We need basic contact information: employee name, email address, and optionally their job title, department, and termination date. This helps us personalize the coaching experience. All data is handled securely and in compliance with privacy regulations.',
    },
    {
      title: 'How quickly can we get started?',
      content:
        'We can typically onboard your company within 24-48 hours. After our initial consultation, you\'ll receive access to the company portal where you can immediately start adding employees. Email invitations are sent automatically, and employees can book their first session right away.',
    },
    {
      title: 'Can we customize the service tiers?',
      content:
        'Yes! While we offer three standard tiers (Essentials, Accelerator, Partnership), we can customize the services to match your specific needs. For larger engagements (50+ employees), we offer fully tailored packages with dedicated account management.',
    },
    {
      title: 'What reporting do we receive?',
      content:
        'You\'ll have real-time access to your company dashboard showing: total employees enrolled, invitations sent, sessions booked, and sessions completed. For privacy, you won\'t see session details or coaching notes—only high-level status updates.',
    },
    {
      title: 'How do employees book sessions?',
      content:
        'After you add an employee to the portal, they receive an automated email invitation with a direct link to our booking calendar. They can choose a time that works for them, and all sessions are conducted via video call (Zoom or Google Meet).',
    },
    {
      title: 'What if an employee doesn\'t use their session?',
      content:
        'For pay-per-use pricing, you only pay for sessions that are actually booked and completed—no charge for unused invitations. For retainer pricing, unused sessions roll over for up to 3 months, giving you maximum flexibility.',
    },
    {
      title: 'Do you offer volume discounts beyond the retainer model?',
      content:
        'Yes! For companies with 100+ employees or ongoing outplacement needs, we offer custom enterprise pricing with additional volume discounts, dedicated account management, and priority scheduling. Contact us for a personalized quote.',
    },
    {
      title: 'Can we add more employees mid-contract?',
      content:
        'Absolutely! For pay-per-use pricing, simply add employees anytime through the portal. For retainer contracts, you can add employees as needed—if you exceed your monthly session allocation, we\'ll work with you to adjust your plan or invoice for additional sessions at your contracted rate.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="xl">
        <Container maxWidth="lg" centerContent>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
              Enterprise Outplacement Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-8">
              Support your team through transitions with dignity and results-driven career coaching.
            </p>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              When layoffs happen, show your team you care with professional career coaching
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="text-sm font-semibold text-slate-700">Reduce Liability</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-sm font-semibold text-slate-700">Maintain Employer Brand</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-sm font-semibold text-slate-700">Support Employee Success</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <p className="text-sm font-semibold text-slate-700">Flexible Pricing</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openCalendly('enterprise-hero-primary')}
              >
                Schedule Enterprise Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Pricing Options
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Pivot Path for Enterprise */}
      <Section background="white" spacing="xl">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Pivot Path for Enterprise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional outplacement services designed specifically for tech companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tech-Specialized Expertise */}
            <Card variant="elevated" hoverable>
              <Card.Body className="text-center">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Tech-Specialized Expertise
                </h3>
                <p className="text-slate-600">
                  Our coaches understand tech roles, hiring processes, and industry trends. We speak
                  your employees&apos; language and know what tech recruiters are looking for.
                </p>
              </Card.Body>
            </Card>

            {/* Flexible Pricing Models */}
            <Card variant="elevated" hoverable>
              <Card.Body className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Flexible Pricing Models</h3>
                <p className="text-slate-600">
                  Pay-per-use or retainer options to fit your budget. No hidden fees, no long-term
                  commitments. Scale up or down based on your needs.
                </p>
              </Card.Body>
            </Card>

            {/* Fast Results */}
            <Card variant="elevated" hoverable>
              <Card.Body className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Results</h3>
                <p className="text-slate-600">
                  Employees land jobs faster with our proven LinkedIn strategies, personalized
                  coaching, and tech-focused job search tactics.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Dual Pricing Models Section */}
      <Section background="gray" spacing="xl" id="pricing">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Flexible Pricing for Every Company Size
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the pricing model that works best for your situation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Pay-Per-Use Model */}
            <Card variant="elevated" hoverable>
              <Card.Body>
                <Badge variant="info" size="md" className="mb-4">
                  Best for: Smaller layoffs (1-10 employees)
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Pay-Per-Use</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">Essentials</span>
                    <span className="text-2xl font-bold text-blue-900">$349</span>
                    <span className="text-slate-600">/employee</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">Accelerator</span>
                    <span className="text-2xl font-bold text-blue-900">$899</span>
                    <span className="text-slate-600">/employee</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">Partnership</span>
                    <span className="text-2xl font-bold text-blue-900">$2,799</span>
                    <span className="text-slate-600">/employee</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      <span>Only pay for employees who use the service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      <span>No minimum commitment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      <span>Invoiced monthly (net-30 terms)</span>
                    </li>
                  </ul>
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => openCalendly('enterprise-pay-per-use')}
                >
                  Get Started with Pay-Per-Use
                </Button>
              </Card.Body>
            </Card>

            {/* Retainer Model (Emphasized) */}
            <Card variant="elevated" hoverable className="border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="warning" size="lg" rounded>
                  🔥 Recommended
                </Badge>
              </div>
              <Card.Body className="pt-8">
                <Badge variant="warning" size="md" className="mb-4">
                  Best for: Larger layoffs or ongoing support (10+ employees)
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Retainer</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <div>
                      <div className="font-semibold text-slate-700">10 sessions/month</div>
                      <div className="text-xs text-slate-500">~$300/session · 15% discount</div>
                    </div>
                    <span className="text-2xl font-bold text-blue-900">$2,999</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <div>
                      <div className="font-semibold text-slate-700">25 sessions/month</div>
                      <div className="text-xs text-slate-500">~$280/session · 20% discount</div>
                    </div>
                    <span className="text-2xl font-bold text-blue-900">$6,999</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <div>
                      <div className="font-semibold text-slate-700">50 sessions/month</div>
                      <div className="text-xs text-slate-500">~$250/session · 30% discount</div>
                    </div>
                    <span className="text-2xl font-bold text-blue-900">$12,499</span>
                  </div>
                  <div className="flex justify-between items-center pb-3">
                    <div>
                      <div className="font-semibold text-slate-700">Custom (100+ sessions)</div>
                      <div className="text-xs text-slate-500">Contact for enterprise pricing</div>
                    </div>
                    <span className="text-lg font-bold text-slate-700">Contact Sales</span>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 mb-6">
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">✓</span>
                      <span>Unused sessions roll over for 3 months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">✓</span>
                      <span>Prepaid monthly, volume discounts included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">✓</span>
                      <span>Priority scheduling and dedicated support</span>
                    </li>
                  </ul>
                </div>

                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={() => openCalendly('enterprise-retainer')}
                >
                  Request Retainer Quote
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* Service Tiers Link */}
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <p className="text-slate-600 mb-4">
              Want to see what&apos;s included in each service tier?
            </p>
            <Link to="/services">
              <Button variant="outline">View Full Service Details</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* How It Works for Companies */}
      <Section background="white" spacing="xl" id="how-it-works">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works for Companies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Simple, streamlined process to support your team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Schedule Consultation</h3>
              <p className="text-slate-600 text-sm">
                Discuss your needs, employee count, and timeline with our team
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💵</span>
              </div>
              <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Choose Pricing Model</h3>
              <p className="text-slate-600 text-sm">
                Select pay-per-use or retainer based on your situation
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📤</span>
              </div>
              <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Submit Employee Data</h3>
              <p className="text-slate-600 text-sm">
                Use our company portal to upload employee information (CSV or manual entry)
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Employees Get Coaching</h3>
              <p className="text-slate-600 text-sm">
                We send invites, employees book sessions, you track progress
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Enterprise FAQ */}
      <Section background="gray" spacing="xl" id="faq">
        <Container maxWidth="md" centerContent>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Enterprise FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from HR leaders and decision-makers
            </p>
          </div>
          <Accordion items={enterpriseFaqItems} />
        </Container>
      </Section>

      {/* Social Proof / Trust Signals */}
      <Section background="white" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Trusted by companies who care about their people
            </h2>
            <div className="bg-slate-50 rounded-lg p-8 mb-8">
              <p className="text-slate-600 italic mb-4">
                &ldquo;Providing outplacement services showed our team we valued them even during
                difficult times. The coaching was professional, personalized, and most importantly,
                effective.&rdquo;
              </p>
              <p className="text-slate-700 font-semibold">— HR Leader, Tech Startup</p>
              <p className="text-slate-500 text-sm">(Testimonial placeholder)</p>
            </div>
            <p className="text-slate-500 text-sm">
              Company logos and additional testimonials coming soon
            </p>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section background="dark" spacing="xl">
        <Container maxWidth="md" centerContent>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Support Your Team?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Schedule a consultation to discuss your needs and get a custom quote. No pressure, no
              commitment—just a conversation about how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openCalendly('enterprise-final-cta')}
              >
                Schedule Enterprise Consultation
              </Button>
              <Link to="/portal/login">
                <Button variant="outline" size="lg">
                  Access Company Portal
                </Button>
              </Link>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Already have an account?{' '}
              <Link to="/portal/login" className="text-blue-400 hover:text-blue-300 underline">
                Log in to your company portal
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} source={calendlySource} />
    </>
  );
}

export default Enterprise;
