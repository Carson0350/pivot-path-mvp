import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

function NotFound() {
  return (
    <>
      {/* 404 Hero */}
      <Section background="white" spacing="xl">
        <Container maxWidth="md" centerContent>
          <div className="text-center">
            {/* Large 404 */}
            <div className="mb-8">
              <h1 className="text-9xl font-extrabold text-blue-900 mb-4">404</h1>
              <div className="text-6xl mb-6">🤔</div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on
              track!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button variant="primary" size="lg">
                  Go to Homepage
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Popular Pages */}
      <Section background="gray" spacing="lg">
        <Container maxWidth="lg" centerContent>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Looking for Something?</h3>
            <p className="text-slate-600">Here are our most popular pages:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="block">
              <Card variant="bordered" hoverable>
                <Card.Body>
                  <div className="text-4xl mb-3">💼</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Services</h4>
                  <p className="text-slate-600">
                    Explore our coaching packages and pricing options.
                  </p>
                </Card.Body>
              </Card>
            </Link>

            <Link to="/about" className="block">
              <Card variant="bordered" hoverable>
                <Card.Body>
                  <div className="text-4xl mb-3">👋</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">About Us</h4>
                  <p className="text-slate-600">
                    Learn about our founder and mission to help you succeed.
                  </p>
                </Card.Body>
              </Card>
            </Link>

            <Link to="/how-it-works" className="block">
              <Card variant="bordered" hoverable>
                <Card.Body>
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">How It Works</h4>
                  <p className="text-slate-600">
                    Understand our process from booking to landing your job.
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Help Section */}
      <Section background="white" spacing="lg">
        <Container maxWidth="md" centerContent>
          <Card variant="bordered">
            <Card.Body>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Still Can't Find What You Need?</h3>
                <p className="text-slate-600 mb-6">
                  We're here to help! Reach out to us and we'll get you sorted.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </Section>
    </>
  );
}

export default NotFound;
