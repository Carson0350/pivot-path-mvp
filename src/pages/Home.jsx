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

      {/* Testimonials / Social Proof */}
      <Section background="white" spacing="xl">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real people who've transformed their careers with Pivot Path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <Card variant="bordered">
              <Card.Body>
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "I landed 3 interviews within 2 weeks of optimizing my LinkedIn profile. The
                    strategies were practical and easy to implement. Best $99 I've ever spent!"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Sarah M.</div>
                    <div className="text-sm text-slate-600">Software Engineer</div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Testimonial 2 */}
            <Card variant="bordered">
              <Card.Body>
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "The career coaching package was a game-changer. I went from feeling stuck to
                    accepting an offer at my dream company in just 4 weeks. Worth every penny!"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JC
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">James C.</div>
                    <div className="text-sm text-slate-600">Product Manager</div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Testimonial 3 */}
            <Card variant="bordered">
              <Card.Body>
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "Finally, career coaching that doesn't cost a fortune! The resume optimization
                    helped me get past ATS systems and land multiple interviews. Highly recommend!"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MR
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Maria R.</div>
                    <div className="text-sm text-slate-600">Data Analyst</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Stats Bar */}
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold text-blue-900 mb-2">50+</div>
                <div className="text-slate-600">Clients Helped</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-900 mb-2">90%</div>
                <div className="text-slate-600">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-900 mb-2">3-4</div>
                <div className="text-slate-600">Weeks to Interviews</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-900 mb-2">4.9/5</div>
                <div className="text-slate-600">Average Rating</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Home;
