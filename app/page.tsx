import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/banner.webp')",
    }}
  />
  
  {/* Dark Overlay for Better Text Readability */}
  <div className="absolute inset-0 bg-black/40" />
  
  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-10">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
      Welcome to{" "}
      <span className="text-yellow-400">Ceylon Heart Villa</span>
    </h1>
    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
      Experience the perfect blend of luxury, comfort, and authentic Sri
      Lankan hospitality in the heart of paradise
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/accommodation"
        className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        View Accommodation
      </Link>
      <Link
        href="/contact-us"
        className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/50 transform hover:-translate-y-1"
      >
        Contact Us
      </Link>
    </div>
  </div>
  
  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <svg
      className="w-8 h-8 text-white drop-shadow-lg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Ceylon Heart Villa?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes our villa the perfect destination for your
              Sri Lankan getaway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-100 text-yellow-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Luxurious Accommodation
              </h3>
              <p className="text-gray-600">
                Premium rooms with modern amenities and stunning views
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-100 text-yellow-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prime Location
              </h3>
              <p className="text-gray-600">
                Close to beaches, attractions, and cultural sites
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-100 text-yellow-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Yoga & Wellness
              </h3>
              <p className="text-gray-600">
                Dedicated yoga space for relaxation and meditation
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-100 text-yellow-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Local Activities
              </h3>
              <p className="text-gray-600">
                Curated experiences and adventures in Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Paradise?
          </h2>
          <p className="text-xl text-yellow-50 mb-8">
            Book your stay at Ceylon Heart Villa today and create memories that
            will last a lifetime.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-yellow-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}