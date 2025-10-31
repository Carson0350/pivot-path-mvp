import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="xl">
        <Container maxWidth="lg" centerContent>
          <div className="text-center">
            <Badge variant="secondary" size="md" rounded className="mb-6">
              🚀 Career Transition Experts
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Land Your Dream Tech Job
              <span className="block text-blue-900 mt-2">Without the $10K Price Tag</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get expert LinkedIn optimization, resume reviews, and career coaching from someone
              who&apos;s successfully transitioned careers—all at a fraction of traditional coaching
              costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View Services & Pricing
                </Button>
              </Link>
            </div>
            <p className="text-sm text-slate-600 mt-6">
              ✓ No long-term contracts &nbsp;&nbsp; ✓ 100% satisfaction guarantee &nbsp;&nbsp; ✓
              Results in weeks, not months
            </p>
          </div>
        </Container>
      </Section>

      {/* Value Propositions */}
      <Section background="white" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Pivot Path?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from someone who&apos;s been in your shoes and knows what works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="bordered" hoverable>
              <Card.Body>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Expert Guidance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Get personalized coaching from someone who&apos;s successfully navigated career
                  transitions in tech. No generic advice—just proven strategies.
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered" hoverable>
              <Card.Body>
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-cyan-600 mb-3">LinkedIn Mastery</h3>
                <p className="text-slate-600 leading-relaxed">
                  Learn the exact strategies to optimize your profile, get noticed by recruiters,
                  and land interviews fast. Real tactics that work.
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered" hoverable>
              <Card.Body>
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Affordable Pricing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Professional coaching without the $10K price tag. Get the same quality guidance at
                  a fraction of the cost. Plans starting at just $99.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section background="gray" spacing="xl">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the service that fits your needs. All packages include personalized support and
              proven strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* LinkedIn Profile Review */}
            <Card variant="elevated" hoverable>
              <Card.Body>
                <Badge variant="info" size="sm" className="mb-4">
                  Most Popular
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  LinkedIn Profile Review
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-blue-900">$99</span>
                  <span className="text-slate-600 ml-2">one-time</span>
                </div>
                <ul className="space-y-3 mb-6 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Comprehensive profile analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Keyword optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Headline & summary rewrite</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>1-hour consultation call</span>
                  </li>
                </ul>
                <Link to="/services">
                  <Button variant="outline" fullWidth>
                    Learn More
                  </Button>
                </Link>
              </Card.Body>
            </Card>

            {/* Career Coaching Package */}
            <Card variant="elevated" hoverable className="border-2 border-orange-500">
              <Card.Body>
                <Badge variant="warning" size="sm" className="mb-4">
                  Best Value
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Career Coaching Package
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-blue-900">$299</span>
                  <span className="text-slate-600 ml-2">4 weeks</span>
                </div>
                <ul className="space-y-3 mb-6 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>4 one-on-one coaching sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>LinkedIn profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Resume review & enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Job search strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Email support for 30 days</span>
                  </li>
                </ul>
                <Link to="/services">
                  <Button variant="primary" fullWidth>
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
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-blue-900">$149</span>
                  <span className="text-slate-600 ml-2">one-time</span>
                </div>
                <ul className="space-y-3 mb-6 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Professional resume review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>ATS optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Achievement highlighting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>2-hour consultation</span>
                  </li>
                </ul>
                <Link to="/services">
                  <Button variant="outline" fullWidth>
                    Learn More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="secondary" size="lg">
                View All Services & Pricing
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Home;
