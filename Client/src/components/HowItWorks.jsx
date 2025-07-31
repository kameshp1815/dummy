export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '👤',
      title: 'Register/Login',
      description: 'Create your account or sign in to start your journey with AutoSharePolling.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      icon: '📍',
      title: 'Enter Pickup & Drop Location',
      description: 'Simply enter your pickup and destination locations to find available rides.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      icon: '🚗',
      title: 'Choose Solo or Pool',
      description: 'Select between solo ride or pool with other passengers to save money.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '04',
      icon: '🎯',
      title: 'Track and Complete Ride',
      description: 'Track your ride in real-time and enjoy a safe, comfortable journey.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with AutoSharePolling is simple. Follow these easy steps 
            to book your first ride in minutes.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-yellow-500 transform -translate-y-1/2 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group text-center"
              >
                {/* Step Number */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of users who are already enjoying smarter, safer rides.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 