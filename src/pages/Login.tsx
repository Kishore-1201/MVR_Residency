// Login page for MVR Residency - modern luxury hotel style
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      setError('');
      alert('Logged in!');
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] overflow-hidden font-sans px-2 sm:px-0">
        <img
          src="https://media.gettyimages.com/id/2110310187/photo/luxury-tropical-pool-villa-at-dusk.jpg?b=1&s=2048x2048&w=0&k=20&c=Vh7WFoCQRNmvHGeWZ4EAgHpuNjppJ4wEMVt0YIW3_I0="
          alt="Luxury hotel lobby background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 blur-sm scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#1e293b]/70 to-[#0a192f]/90 z-10" />
        <div className="relative z-20 w-full max-w-md px-4 sm:px-8 py-10 rounded-3xl shadow-2xl bg-white/10 border border-indigo-600/30 backdrop-blur-lg animate-fade-in">
          <div className="flex flex-col items-center mb-8 transition-transform duration-300 hover:scale-110">
            <Hotel className="h-16 w-16 text-indigo-600 drop-shadow-lg" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow mb-1 tracking-wide text-center">Welcome Back</h1>
          <p className="text-center text-base text-white font-medium mb-2 max-w-xs mx-auto">
            Experience comfort and elegance. Sign in to manage your stay, bookings, and exclusive guest services.
          </p>
          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-1 ">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-indigo-400/40 bg-white/80 text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400/40 focus:bg-white focus:text-gray-900 transition-all duration-200 backdrop-blur-sm px-4 py-2 outline-none hover:border-indigo-600"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-white mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-indigo-400/40 bg-white/80 text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400/40 focus:bg-white focus:text-gray-900 transition-all duration-200 backdrop-blur-sm px-4 py-2 outline-none hover:border-indigo-600"
                  placeholder="••••••••"
                />
              </div>
              {error && <div className="text-red-400 text-sm font-medium text-center">{error}</div>}
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg border border-indigo-600 bg-indigo-600 py-2 px-4 text-lg font-bold text-white shadow-lg hover:bg-indigo-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all duration-200"
              >
                <span className="transition-transform group-hover:scale-105 drop-shadow">Sign In</span>
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <span className="text-sm text-white">New to MVR Residency?{' '}</span>
            <Link
              to="/register"
              className="font-semibold text-indigo-400 hover:text-white transition-colors duration-200 underline underline-offset-2"
            >
              Register here
            </Link>
          </div>
        </div>
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}</style>
      </div>
    </>
  );
};

export default Login;