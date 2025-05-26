import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Building2, Calendar, Home, Hotel, MapPin, Menu, User, Utensils, Waves, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Rooms', href: '/rooms', icon: Hotel },
  { name: 'Banquet Halls', href: '/banquet-halls', icon: Building2 },
  // { name: 'Travel Services', href: '/travel', icon: MapPin },
  // { name: 'Dining', href: '/dining', icon: Utensils },
  // { name: 'Spa & Wellness', href: '/spa', icon: Waves },
  // { name: 'My Bookings', href: '/bookings', icon: Calendar },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
              <Link
                to="/login"
                className="inline-flex items-center px-3 py-2 rounded-md text-sm font-semibold bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                Login
              </Link>
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

        {/* Mobile menu */}
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

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">About Us</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Company</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Services</h3>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="mailto:support@luxstay.com" className="text-sm text-gray-500 hover:text-gray-900">
                    support@luxstay.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-sm text-gray-500 hover:text-gray-900">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}