import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Accordion from '../components/ui/Accordion';

function Services() {
  const faqItems = [
    {
      title: 'How quickly will I see results?',
      content:
        'Most clients see improved LinkedIn engagement within 1-2 weeks of profile optimization. For career coaching, you\'ll have actionable strategies from day one, with many clients landing interviews within 3-4 weeks.',
    },
    {
      title: 'What makes your coaching different?',
      content:
        'I\'ve personally navigated multiple career transitions in tech. You\'re not getting generic advice from a textbook—you\'re getting real-world strategies that I\'ve used and seen work. Plus, my pricing is a fraction of traditional career coaches.',
    },
    {
      title: 'Do you offer refunds?',
      content:
        'Yes! I offer a 100% satisfaction guarantee on your first session. If you\'re not satisfied, I\'ll provide a full refund. After the first session, refunds are prorated based on sessions completed.',
    },
    {
      title: 'Can I switch packages later?',
      content:
        'Absolutely! If you start with a LinkedIn review and want to upgrade to full coaching, I\'ll credit your initial payment toward the coaching package.',
    },
    {
      title: 'How are sessions conducted?',
      content:
        'All sessions are conducted via video call (Zoom or Google Meet). You\'ll receive a calendar invite with the meeting link. Sessions are recorded and shared with you for future reference.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Services & Pricing
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Professional career coaching at a fraction of traditional costs. Choose the package
              that fits your needs.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Tiers */}
      <Section background="white" spacing="xl">
        <Container maxWidth="lg" centerContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LinkedIn Profile Review */}
            <Card variant="elevated" hoverable>
              <Card.Body>
                <Badge variant="info" size="sm" className="mb-4">
                  Most Popular
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  LinkedIn Profile Review
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-blue-900">$99</span>
                  <span className="text-slate-600 ml-2">one-time</span>
                </div>
                <p className="text-slate-600 mb-6">
                  Perfect for professionals who want to optimize their LinkedIn presence and attract
                  recruiters.
                </p>
                <ul className="space-y-3 mb-8 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Comprehensive profile analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Keyword optimization for your industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Headline & summary rewrite</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Experience section optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>1-hour consultation call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Written recommendations document</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" fullWidth>
                    Get Started
                  </Button>
                </Link>
              </Card.Body>
            </Card>

            {/* Career Coaching Package */}
            <Card variant="elevated" hoverable className="border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="warning" size="lg" rounded>
                  🔥 Best Value
                </Badge>
              </div>
              <Card.Body className="pt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Career Coaching Package
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-blue-900">$299</span>
                  <span className="text-slate-600 ml-2">4 weeks</span>
                </div>
                <p className="text-slate-600 mb-6">
                  Complete career transition support with personalized coaching, profile
                  optimization, and ongoing guidance.
                </p>
                <ul className="space-y-3 mb-8 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>4 one-on-one coaching sessions (1 hour each)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Complete LinkedIn profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Resume review & enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Personalized job search strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Interview preparation & practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Networking strategy & outreach templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Email support for 30 days</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="primary" fullWidth size="lg">
                    Get Started
                  </Button>
                </Link>
              </Card.Body>
            </Card>

            {/* Resume Optimization */}
            <Card variant="elevated" hoverable>
              <Card.Body>
                <Badge variant="secondary" size="sm" className="mb-4">
                  Quick Win
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Resume Optimization</h3>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-blue-900">$149</span>
                  <span className="text-slate-600 ml-2">one-time</span>
                </div>
                <p className="text-slate-600 mb-6">
                  Get your resume professionally reviewed and optimized to pass ATS systems and
                  impress hiring managers.
                </p>
                <ul className="space-y-3 mb-8 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Professional resume review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>ATS (Applicant Tracking System) optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Achievement highlighting & quantification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Format & layout improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>2-hour consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Revised resume document</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" fullWidth>
                    Get Started
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <Container maxWidth="md" centerContent>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Got questions? Here are answers to the most common ones.
            </p>
          </div>
          <Accordion items={faqItems} />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="dark" spacing="lg">
        <Container maxWidth="md" centerContent>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Schedule a free 30-minute consultation to discuss your career goals and find the right
              package for you.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Schedule Free Consultation
              </Button>
            </Link>
            <p className="text-slate-400 text-sm mt-6">
              No pressure, no commitment. Just a friendly conversation about your career.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Services;
