import { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-900">
              Pivot Path
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="/"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/how-it-works"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="/contact"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href="/contact"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 rounded-md p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a
              href="/"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
            >
              Home
            </a>
            <a
              href="/services"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
            >
              Services
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
            >
              About
            </a>
            <a
              href="/how-it-works"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
            >
              How It Works
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
            >
              Contact
            </a>
            <a
              href="/contact"
              className="block mx-4 mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
