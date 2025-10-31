import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Welcome to Pivot Path
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Career transition coaching for tech professionals. Your journey to a new career starts
            here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Expert Guidance</h3>
            <p className="text-slate-600">
              Get personalized coaching from someone who&apos;s successfully navigated career
              transitions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-cyan-600 mb-2">LinkedIn Mastery</h3>
            <p className="text-slate-600">
              Learn proven strategies to optimize your profile and land your next role fast.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-orange-500 mb-2">Affordable Pricing</h3>
            <p className="text-slate-600">
              Professional coaching without the $10K price tag. Plans starting at $299.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
