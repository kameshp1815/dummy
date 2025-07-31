export default function KeyFeatures() {
  const features = [
    {
      icon: '🚗',
      title: 'Smart Ride Pooling',
      description: 'Match with other passengers heading in the same direction and split your fare.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🗺️',
      title: 'Route Optimization',
      description: 'AI-powered algorithms find the fastest and most efficient routes for your journey.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📍',
      title: 'Real-Time GPS Tracking',
      description: 'Track your ride in real-time with precise location updates and ETA.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '💰',
      title: 'Fare Splitting',
      description: 'Automatically split costs between passengers for maximum savings.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: '✅',
      title: 'Secure Verified Drivers',
      description: 'All drivers are background-checked and verified for your safety.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🔔',
      title: 'Instant Notifications',
      description: 'Get real-time updates about your ride status and driver location.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AutoSharePolling?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of transportation with our innovative features designed 
            to make your journey safer, cheaper, and more convenient.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Thousands of Happy Users
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">100K+</div>
                <div className="text-gray-600">Rides Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4.9★</div>
                <div className="text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 