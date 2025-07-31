import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DriverDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [isOnline, setIsOnline] = useState(true);
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
              <div className="h-8 w-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">AS</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">AutoSharePolling</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">🚗</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Driver</span>
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

      {/* Online Status */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`h-3 w-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm font-medium text-gray-700">
                {isOnline ? 'Online - Ready for rides' : 'Offline'}
              </span>
            </div>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isOnline
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {isOnline ? 'Go Offline' : 'Go Online'}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'home', label: 'Home', icon: '🏠' },
              { id: 'rides', label: 'Ride Requests', icon: '🚗' },
              { id: 'earnings', label: 'Earnings', icon: '💰' },
              { id: 'profile', label: 'Profile', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
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
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Welcome back, Mike! 👋</h2>
              <p className="text-green-100">You're online and ready to accept ride requests.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Today's Earnings</h3>
                <p className="text-2xl font-bold text-green-600">$127.50</p>
                <p className="text-sm text-gray-600">+$23.40 from yesterday</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rides Today</h3>
                <p className="text-2xl font-bold text-blue-600">8</p>
                <p className="text-sm text-gray-600">2 more to reach goal</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rating</h3>
                <p className="text-2xl font-bold text-yellow-600">4.8</p>
                <p className="text-sm text-gray-600">Based on 156 reviews</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-3xl mb-4">⏱️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Online Time</h3>
                <p className="text-2xl font-bold text-purple-600">6h 23m</p>
                <p className="text-sm text-gray-600">Today's active time</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">✅</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Ride completed</p>
                      <p className="text-sm text-gray-600">Central Park → Times Square</p>
                    </div>
                    <span className="text-sm text-gray-500">$15.50</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">⭐</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">5-star rating received</p>
                      <p className="text-sm text-gray-600">Great service!</p>
                    </div>
                    <span className="text-sm text-gray-500">2 min ago</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Goals</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Rides Target</span>
                      <span className="text-sm text-gray-600">8/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Earnings Target</span>
                      <span className="text-sm text-gray-600">$127.50/$150</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rides' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ride Requests</h2>
              
              {/* Active Ride */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Active Ride</h3>
                    <p className="text-sm text-gray-600">Central Park → Times Square</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">In Progress</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Passenger:</span>
                    <p className="font-medium">Sarah Johnson</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Fare:</span>
                    <p className="font-medium">$15.50</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200">
                    Complete Ride
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors duration-200">
                    Cancel
                  </button>
                </div>
              </div>

              {/* Available Requests */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Requests</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Airport → Downtown</h4>
                      <p className="text-sm text-gray-600">Distance: 12.5 km</p>
                      <p className="text-sm text-gray-600">Estimated time: 25 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$28.75</p>
                      <p className="text-sm text-gray-600">High demand</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200">
                      Accept
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors duration-200">
                      Decline
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Mall → Residential Area</h4>
                      <p className="text-sm text-gray-600">Distance: 8.2 km</p>
                      <p className="text-sm text-gray-600">Estimated time: 18 min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$18.90</p>
                      <p className="text-sm text-gray-600">Standard fare</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200">
                      Accept
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors duration-200">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Earnings</h2>
              
              {/* Earnings Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Today</h3>
                  <p className="text-2xl font-bold text-green-600">$127.50</p>
                  <p className="text-sm text-gray-600">8 rides completed</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">This Week</h3>
                  <p className="text-2xl font-bold text-blue-600">$892.30</p>
                  <p className="text-sm text-gray-600">45 rides completed</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">This Month</h3>
                  <p className="text-2xl font-bold text-purple-600">$3,245.80</p>
                  <p className="text-sm text-gray-600">156 rides completed</p>
                </div>
              </div>

              {/* Recent Transactions */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Central Park → Times Square</p>
                    <p className="text-sm text-gray-600">Today, 2:30 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$15.50</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Airport → Downtown</p>
                    <p className="text-sm text-gray-600">Today, 1:15 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$28.75</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Mall → Residential Area</p>
                    <p className="text-sm text-gray-600">Today, 11:45 AM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$18.90</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Driver Profile</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚗</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Mike Johnson</h3>
                  <p className="text-gray-600">mike.johnson@example.com</p>
                  <p className="text-sm text-gray-500">Driver since March 2024</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Mike Johnson"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="mike.johnson@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 987-6543"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle</label>
                  <input
                    type="text"
                    defaultValue="Toyota Camry 2022"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">License Plate</label>
                  <input
                    type="text"
                    defaultValue="ABC-1234"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl">⭐</span>
                    <span className="text-lg font-semibold text-gray-900">4.8</span>
                    <span className="text-sm text-gray-600">(156 reviews)</span>
                  </div>
                </div>
              </div>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 