import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleBookRide = () => {
    if (isLoggedIn) {
      navigate('/booking');
    } else {
      navigate('/login');
    }
  };

  const handleDashboard = () => {
    if (isLoggedIn) {
      if (user?.role === 'customer') {
        navigate('/customer/dashboard');
      } else if (user?.role === 'driver') {
        navigate('/driver/dashboard');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-spin"></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Smarter, Safer,{' '}
          <span className="text-yellow-300">Shared Rides.</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl sm:text-2xl mb-12 text-gray-100 leading-relaxed">
          Connect with trusted drivers, reduce your cost, and travel eco-friendly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Book a Ride Button */}
          <button
            onClick={handleBookRide}
            className="group relative px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
          >
            <span className="text-2xl">🚗</span>
            <span>Book a Ride</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Dashboard Button */}
          <button
            onClick={handleDashboard}
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 border-2 border-white/20"
          >
            <span className="text-2xl">📊</span>
            <span>
              {isLoggedIn ? 'Go to Dashboard' : 'Login to Access Dashboard'}
            </span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-200">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✓</span>
            <span>Instant Booking</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✓</span>
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✓</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
} 