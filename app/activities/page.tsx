'use client';

import React from 'react';

export default function ExperiencesPage() {
  return (
    <>
      {/* Immersive Hero Section */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1655890193532-3f51318b23c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Golden sunset over Sri Lankan coastline with traditional elements"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div className="max-w-6xl">
            <h1 className="text-7xl md:text-9xl font-[var(--font-serif)] font-extralight tracking-tight mb-8 leading-tight">
              Curated<br />
              <span className="italic text-amber-300">Experiences</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light tracking-wide max-w-4xl opacity-90 mb-12">
              Immerse yourself in the soul of Sri Lanka — where culture, cuisine, nature, and wellness intertwine
            </p>
            <p className="text-xl italic opacity-85 max-w-3xl">
              “Every moment at Ceylon Heart Villa is designed to connect you deeply with this magical island.”
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <svg className="w-10 h-10 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Experiences Content */}
      <section className="relative py-32 bg-gradient-to-b from-amber-50/50 via-white to-teal-50/30 overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-500" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-sm uppercase tracking-[0.5em] text-amber-700 font-semibold">
                Culture • Cuisine • Wellness
              </span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-500" />
            </div>

            <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight text-amber-950 mb-8 leading-tight">
              A Journey of the Senses
            </h2>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
              Each experience at Ceylon Heart Villa is thoughtfully curated to offer you an authentic taste of Sri Lankan life — 
              from the vibrant spices in our kitchen to the golden sunsets over ancient hills.
            </p>
          </div>

          {/* Large Curated Experiences Card */}
          <div className="max-w-5xl mx-auto mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-300/40 to-orange-400/40 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              <div className="relative bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-rose-100/60">
                
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-[var(--font-serif)] font-light text-rose-950 mb-4">
                      Curated Experiences
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                      Immerse yourself in authentic Sri Lankan culture, wellness, and natural beauty through our thoughtfully designed activities — 
                      each one crafted to create lasting memories.
                    </p>
                  </div>
                </div>

                {/* Activities Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Cooking Experience */}
                  <div className="group p-8 bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-3xl border border-orange-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-md">
                        <span className="text-3xl">🍛</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Hands-on Sri Lankan Cooking Experience</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Join our chef to prepare traditional dishes like coconut roti, spicy sambols, fragrant dhal curry, and fresh seafood — using authentic Ceylon spices and time-honored techniques.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Kitchen to Table */}
                  <div className="group p-8 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 rounded-3xl border border-amber-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center shadow-md">
                        <span className="text-3xl">🍽️</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Culinary Journey from Kitchen to Table</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Sit down to enjoy the delicious meal you've created together — a true celebration of Sri Lankan hospitality and flavor.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Walk to Pagoda */}
                  <div className="group p-8 bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-3xl border border-purple-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-md">
                        <span className="text-3xl">🚶</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Gentle Walk to the Japanese Peace Pagoda</h4>
                        <p className="text-gray-600 leading-relaxed">
                          A leisurely afternoon stroll through lush paths to the iconic white stupa on Rumassala Hill — a place of profound peace and reflection.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Breathtaking Views */}
                  <div className="group p-8 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 rounded-3xl border border-blue-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-md">
                        <span className="text-3xl">🏔️</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Panoramic Ocean Views from the Pagoda</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Stand at the edge of the mountain and take in sweeping vistas of the endless Indian Ocean — a moment of pure awe.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sunset */}
                  <div className="group p-8 bg-gradient-to-br from-rose-50/80 to-orange-50/80 rounded-3xl border border-rose-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center shadow-md">
                        <span className="text-3xl">🌅</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Pause, Reflect, and Watch the Sunset</h4>
                        <p className="text-gray-600 leading-relaxed">
                          As the sun dips below the horizon in a blaze of color, find stillness and gratitude in one of nature's most beautiful daily rituals.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Yoga */}
                  <div className="group p-8 bg-gradient-to-br from-teal-50/80 to-emerald-50/80 rounded-3xl border border-teal-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center shadow-md">
                        <span className="text-3xl">🧘</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Yoga in a Serene Rooftop Sanctuary</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Flow, breathe, and reconnect in our elevated open-air yoga space — surrounded by sky and gentle island breezes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Teaser */}
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-[var(--font-serif)] font-extralight text-amber-950 mb-12">
              Moments to Remember
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" alt="Traditional Sri Lankan cooking" className="rounded-3xl object-cover h-80 shadow-2xl hover:scale-105 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1583417319072-4b3e5a4b2a3f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" alt="Sunset at Peace Pagoda" className="rounded-3xl object-cover h-80 shadow-2xl hover:scale-105 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" alt="Rooftop yoga session" className="rounded-3xl object-cover h-80 shadow-2xl hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Elegant CTA */}
      <section className="py-40 bg-gradient-to-b from-amber-950 to-orange-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.4)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight mb-12">
            Ready to Live the Experience?
          </h2>
          <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Let us craft your perfect Sri Lankan journey — filled with flavor, wonder, and deep connection.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 justify-center">
            <a href="/contact" className="px-16 py-7 bg-amber-500 text-amber-950 rounded-full text-2xl font-semibold hover:bg-amber-400 transition-all shadow-2xl inline-flex items-center justify-center gap-5">
              Book Your Stay
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/contact" className="px-16 py-7 border-2 border-amber-400 text-white rounded-full text-2xl font-medium hover:bg-amber-400/20 transition-all">
              Inquire About Experiences
            </a>
          </div>
        </div>
      </section>
    </>
  );
}