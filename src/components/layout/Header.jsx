import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-2xl font-bold text-blue-900">
              Pivot Path
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/enterprise"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              Enterprise
            </Link>
            <Link
              to="/about"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/how-it-works"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Get Started
            </Link>
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
            <Link
              to="/"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/enterprise"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enterprise
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/how-it-works"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block mx-4 mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
