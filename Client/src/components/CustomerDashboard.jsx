import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">AS</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">AutoSharePolling</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">👤</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Customer</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'home', label: 'Home', icon: '🏠' },
              { id: 'book', label: 'Book Ride', icon: '🚗' },
              { id: 'trips', label: 'My Trips', icon: '📋' },
              { id: 'profile', label: 'Profile', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'home' && (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Welcome back! 👋</h2>
              <p className="text-blue-100">Ready for your next ride? Book now and enjoy the journey.</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book a Ride</h3>
                <p className="text-gray-600 mb-4">Find and book your perfect ride instantly</p>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  Book Now
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">My Trips</h3>
                <p className="text-gray-600 mb-4">View your ride history and upcoming trips</p>
                <button className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  View Trips
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rate Driver</h3>
                <p className="text-gray-600 mb-4">Rate your recent rides and drivers</p>
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  Rate Now
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🚗</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Ride completed</p>
                    <p className="text-sm text-gray-600">From Central Park to Times Square</p>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💰</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Payment received</p>
                    <p className="text-sm text-gray-600">$15.50 for your last ride</p>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'book' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Ride</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter pickup address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter destination address"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Economy</option>
                    <option>Comfort</option>
                    <option>Premium</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Credit Card</option>
                    <option>PayPal</option>
                    <option>Cash</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
                Book Ride
              </button>
            </div>
          </div>
        )}

        {activeTab === 'trips' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Trips</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">Central Park → Times Square</h3>
                    <p className="text-sm text-gray-600">Today, 2:30 PM</p>
                    <p className="text-sm text-gray-600">Driver: John Smith</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$15.50</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">Airport → Downtown</h3>
                    <p className="text-sm text-gray-600">Yesterday, 10:15 AM</p>
                    <p className="text-sm text-gray-600">Driver: Sarah Johnson</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$28.75</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    defaultValue="123 Main St, New York, NY"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 