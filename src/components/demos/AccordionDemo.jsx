import Accordion from '../ui/Accordion';

function AccordionDemo() {
  const faqItems = [
    {
      title: 'What is included in the career coaching package?',
      content: (
        <div>
          <p className="mb-2">
            Our career coaching package includes 4 one-on-one sessions with an experienced career
            coach, personalized LinkedIn profile optimization, resume review and optimization, and
            ongoing email support throughout the program.
          </p>
          <p>
            You&apos;ll also get access to our exclusive job search resources and templates.
          </p>
        </div>
      ),
    },
    {
      title: 'How long does the LinkedIn optimization take?',
      content:
        'The LinkedIn optimization process typically takes 3-5 business days. We conduct a thorough review of your profile, identify areas for improvement, and provide detailed recommendations. You can implement the changes yourself or we can do it for you.',
    },
    {
      title: 'Do you offer refunds?',
      content:
        'Yes, we offer a 100% satisfaction guarantee. If you\'re not satisfied with your first session, we\'ll provide a full refund. After the first session, refunds are prorated based on the number of sessions completed.',
    },
    {
      title: 'Can I schedule sessions at my convenience?',
      content:
        'Absolutely! We offer flexible scheduling with sessions available Monday through Saturday, including evening slots. You can book sessions through our online calendar system at times that work best for you.',
    },
  ];

  const processItems = [
    {
      title: 'Step 1: Initial Consultation',
      content: (
        <div>
          <p className="mb-2">
            We start with a free 30-minute consultation to understand your career goals, current
            situation, and challenges.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Discuss your career objectives</li>
            <li>Assess your current profile and resume</li>
            <li>Identify key areas for improvement</li>
            <li>Create a customized action plan</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Step 2: Profile Optimization',
      content:
        'We optimize your LinkedIn profile and resume to highlight your strengths, achievements, and unique value proposition. This includes keyword optimization, compelling headline creation, and professional summary enhancement.',
    },
    {
      title: 'Step 3: Strategy Sessions',
      content:
        'Through our coaching sessions, we develop your job search strategy, practice interview techniques, and build your professional network. Each session is tailored to your specific needs and goals.',
    },
    {
      title: 'Step 4: Ongoing Support',
      content:
        'Even after your sessions end, you have access to our resources and email support. We\'re here to help you succeed in your career transition journey.',
    },
  ];

  const pricingItems = [
    {
      title: 'LinkedIn Profile Review - $99',
      content: (
        <div>
          <p className="mb-2 font-semibold">Perfect for quick improvements</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Comprehensive profile analysis</li>
            <li>Detailed improvement recommendations</li>
            <li>Keyword optimization suggestions</li>
            <li>1-hour consultation call</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Career Coaching Package - $299',
      content: (
        <div>
          <p className="mb-2 font-semibold text-orange-500">Most Popular!</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>4 one-on-one coaching sessions</li>
            <li>LinkedIn profile optimization</li>
            <li>Resume review and enhancement</li>
            <li>Job search strategy development</li>
            <li>Email support for 30 days</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Premium Package - $599',
      content: (
        <div>
          <p className="mb-2 font-semibold">Complete career transformation</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>8 one-on-one coaching sessions</li>
            <li>Complete LinkedIn profile overhaul</li>
            <li>Professional resume rewrite</li>
            <li>Mock interview practice (3 sessions)</li>
            <li>Networking strategy and outreach templates</li>
            <li>Email support for 60 days</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Accordion Component</h2>

      {/* Basic Accordion */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">FAQ Accordion</h3>
        <Accordion items={faqItems} />
      </div>

      {/* With Default Open */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">
          Process Steps (First Item Open)
        </h3>
        <Accordion items={processItems} defaultOpen={0} />
      </div>

      {/* Allow Multiple Open */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">
          Pricing Options (Multiple Can Be Open)
        </h3>
        <Accordion items={pricingItems} allowMultiple defaultOpen={[1]} />
      </div>
    </section>
  );
}

export default AccordionDemo;
