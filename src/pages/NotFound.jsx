function NotFound() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-slate-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Page Not Found</h2>
          <p className="text-xl text-slate-600 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
