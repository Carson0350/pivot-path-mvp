import Container from '../ui/Container';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

function LayoutDemo() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Layout Components</h2>

      {/* Container Sizes */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Container Sizes</h3>
        <div className="space-y-4">
          <div className="bg-slate-100 p-4 rounded">
            <Container maxWidth="sm" centerContent>
              <div className="bg-blue-100 p-4 rounded text-center">
                <p className="font-semibold">Small Container (max-w-3xl)</p>
                <p className="text-sm text-slate-600">Perfect for focused content like blog posts</p>
              </div>
            </Container>
          </div>

          <div className="bg-slate-100 p-4 rounded">
            <Container maxWidth="md" centerContent>
              <div className="bg-cyan-100 p-4 rounded text-center">
                <p className="font-semibold">Medium Container (max-w-5xl)</p>
                <p className="text-sm text-slate-600">Good for forms and moderate content</p>
              </div>
            </Container>
          </div>

          <div className="bg-slate-100 p-4 rounded">
            <Container maxWidth="lg" centerContent>
              <div className="bg-orange-100 p-4 rounded text-center">
                <p className="font-semibold">Large Container (max-w-7xl)</p>
                <p className="text-sm text-slate-600">Default size, great for most pages</p>
              </div>
            </Container>
          </div>
        </div>
      </div>

      {/* Section Backgrounds */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Section Backgrounds</h3>
        <div className="space-y-4 -mx-8">
          <Section background="white" spacing="sm">
            <Container maxWidth="lg" centerContent>
              <p className="text-center font-semibold">White Background Section</p>
            </Container>
          </Section>

          <Section background="gray" spacing="sm">
            <Container maxWidth="lg" centerContent>
              <p className="text-center font-semibold">Gray Background Section</p>
            </Container>
          </Section>

          <Section background="blue" spacing="sm">
            <Container maxWidth="lg" centerContent>
              <p className="text-center font-semibold">Blue Background Section</p>
            </Container>
          </Section>

          <Section background="dark" spacing="sm">
            <Container maxWidth="lg" centerContent>
              <p className="text-center font-semibold">Dark Background Section</p>
            </Container>
          </Section>
        </div>
      </div>

      {/* Section Spacing */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Section Spacing</h3>
        <div className="space-y-4 -mx-8">
          <Section background="gray" spacing="sm">
            <Container maxWidth="lg" centerContent>
              <p className="text-center text-sm">Small Spacing (py-8)</p>
            </Container>
          </Section>

          <Section background="blue" spacing="md">
            <Container maxWidth="lg" centerContent>
              <p className="text-center text-sm">Medium Spacing (py-12)</p>
            </Container>
          </Section>

          <Section background="gray" spacing="lg">
            <Container maxWidth="lg" centerContent>
              <p className="text-center text-sm">Large Spacing (py-16) - Default</p>
            </Container>
          </Section>
        </div>
      </div>

      {/* Real-World Example */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Real-World Example</h3>
        <div className="-mx-8 border-2 border-dashed border-slate-300 rounded-lg overflow-hidden">
          {/* Hero Section */}
          <Section background="blue" spacing="xl">
            <Container maxWidth="lg" centerContent>
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
                  Transform Your Career
                </h1>
                <p className="text-xl text-slate-700 mb-6 max-w-2xl mx-auto">
                  Professional coaching to help you land your dream job in tech.
                </p>
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </div>
            </Container>
          </Section>

          {/* Services Section */}
          <Section background="white" spacing="lg">
            <Container maxWidth="lg" centerContent>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="bordered">
                  <Card.Body>
                    <h3 className="font-bold text-lg mb-2">LinkedIn Optimization</h3>
                    <p className="text-slate-600 text-sm">
                      Optimize your profile to attract recruiters.
                    </p>
                  </Card.Body>
                </Card>
                <Card variant="bordered">
                  <Card.Body>
                    <h3 className="font-bold text-lg mb-2">Resume Review</h3>
                    <p className="text-slate-600 text-sm">
                      Professional resume enhancement.
                    </p>
                  </Card.Body>
                </Card>
                <Card variant="bordered">
                  <Card.Body>
                    <h3 className="font-bold text-lg mb-2">Career Coaching</h3>
                    <p className="text-slate-600 text-sm">
                      One-on-one guidance for your transition.
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
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-slate-300 mb-6">
                  Schedule a free consultation today and take the first step toward your new career.
                </p>
                <Button variant="secondary" size="lg">
                  Book Free Consultation
                </Button>
              </div>
            </Container>
          </Section>
        </div>
      </div>
    </section>
  );
}

export default LayoutDemo;
