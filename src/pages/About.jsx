import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

function About() {
  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              About Pivot Path
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Real career coaching from someone who's been in your shoes. No fluff, just proven
              strategies that work.
            </p>
          </div>
        </Container>
      </Section>

      {/* Founder Story */}
      <Section background="white" spacing="xl">
        <Container maxWidth="md" centerContent>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Story</h2>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, I'm the founder of Pivot Path. I've been where you are—stuck in a role that
              doesn't fit, wondering how to break into a new field, and frustrated by the lack of
              affordable, practical career guidance.
            </p>

            <p className="text-lg leading-relaxed">
              After successfully navigating multiple career transitions in tech, I realized something:
              most career coaching is either too expensive ($5K-$10K+) or too generic to be useful.
              People don't need another resume template or LinkedIn course—they need someone who's
              actually done it to show them the way.
            </p>

            <p className="text-lg leading-relaxed">
              That's why I created Pivot Path. I've helped dozens of professionals optimize their
              LinkedIn profiles, land interviews at top tech companies, and successfully transition
              into new roles. My approach is simple: real strategies, honest feedback, and pricing
              that won't break the bank.
            </p>

            <p className="text-lg leading-relaxed">
              I'm not a traditional career coach with a fancy certification. I'm someone who's been in
              the trenches, made the mistakes, learned what works, and now I'm sharing that knowledge
              with people who need it most.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Values */}
      <Section background="gray" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What I Stand For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything I do at Pivot Path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="bordered" hoverable>
              <Card.Body>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Real Results</h3>
                <p className="text-slate-600 leading-relaxed">
                  No fluff, no theory. Just practical strategies that have worked for me and my
                  clients. If it doesn't work, I won't teach it.
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered" hoverable>
              <Card.Body>
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Affordable Access</h3>
                <p className="text-slate-600 leading-relaxed">
                  Career coaching shouldn't cost $10K. Quality guidance should be accessible to
                  everyone, not just executives with deep pockets.
                </p>
              </Card.Body>
            </Card>

            <Card variant="bordered" hoverable>
              <Card.Body>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Honest Feedback</h3>
                <p className="text-slate-600 leading-relaxed">
                  I'll tell you what you need to hear, not what you want to hear. Honest, direct
                  feedback is the fastest path to improvement.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="white" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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
              <div className="text-4xl font-extrabold text-blue-900 mb-2">$299</div>
              <div className="text-slate-600">Starting Price</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="dark" spacing="lg">
        <Container maxWidth="md" centerContent>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Your Move?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Let's talk about your career goals and create a plan to get you where you want to be.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Schedule Free Consultation
              </Button>
            </Link>
            <p className="text-slate-400 text-sm mt-6">
              30-minute call. No pressure. Just honest advice.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default About;
