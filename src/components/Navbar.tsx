import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Home, Hotel, Menu, User, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Rooms', href: '/rooms', icon: Hotel },
  { name: 'Banquet Halls', href: '/banquet-halls', icon: Building2 },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <Hotel className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MVR Residency</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname === item.href
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/profile"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Link>
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/login"
                className="ml-4 px-4 py-2 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow transition-colors duration-200 border border-indigo-600"
              >
                Login
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              {/* ...mobile menu toggle... */}
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a] shadow-lg z-50 flex flex-col items-center py-4 gap-4 animate-fade-in">
                {/* ...mobile navigation links... */}
                <Link
                  to="/login"
                  className="text-[10px] px-1.5 py-0.5 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-500 md:text-sm md:px-3 md:py-2 flex items-center gap-1"
                >
                  <User className="h-4 w-4 mr-1" />
                  Login
                </Link>
              </div>
            )}
          </div>
          <div className="flex sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 px-3 text-base font-medium ${
                  location.pathname === item.href
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.name}
                </div>
              </Link>
            ))}
            <Link
              to="/profile"
              className="block py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Profile
              </div>
            </Link>
            <Link
              to="/login"
              className="block py-2 px-3 mt-2 rounded-md text-base font-semibold bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}