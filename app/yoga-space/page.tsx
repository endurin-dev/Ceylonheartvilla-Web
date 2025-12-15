'use client';

import React from 'react';

export default function YogaPage() {
  return (
    <>
      {/* Full-Screen Immersive Hero */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
            alt="Serene rooftop yoga at sunrise with ocean horizon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div className="max-w-6xl">
            <h1 className="text-7xl md:text-9xl font-[var(--font-serif)] font-extralight tracking-tight mb-8 leading-tight">
              Butterfly Lounge<br />
              <span className="italic text-emerald-300">Yoga</span>
              <span  className="italic text-emerald-300">Retreat</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light tracking-wide max-w-4xl opacity-90 mb-12">
              Elevate your practice above the world, where sky, breath, and stillness become one
            </p>
            <p className="text-xl md:text-2xl font-light italic max-w-3xl opacity-85">
              “The space is always open and welcoming to all yoga practitioners — join us on the rooftop for your personal practice or group sessions.”
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <svg className="w-10 h-10 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Sanctuary Content */}
      <section className="relative py-32 bg-gradient-to-b from-emerald-50/60 via-white to-teal-50/50 overflow-hidden">
        {/* Animated Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-emerald-500" />
              <span className="text-sm uppercase tracking-[0.5em] text-emerald-700 font-semibold">
                Mind • Body • Spirit
              </span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-emerald-500" />
            </div>

            <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight text-emerald-950 mb-8 leading-tight">
              An Open Invitation to All Yogis
            </h2>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto mb-12">
              Our rooftop yoga sanctuary is <span className="font-semibold text-emerald-800">always available</span> for personal practice, group classes, retreats, or teacher-led sessions. 
              Whether you are a seasoned practitioner, a curious beginner, or a yoga teacher seeking a magical space—we warmly welcome you to join us above the treetops.
            </p>

            <div className="inline-block bg-emerald-50/80 backdrop-blur-sm px-10 py-6 rounded-3xl border border-emerald-200 shadow-xl">
              <p className="text-lg font-medium text-emerald-900">
                The space is open daily from sunrise to sunset — no reservation needed for individual practice.
              </p>
            </div>
          </div>

          {/* Large Image + Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Left: Hero Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-300/50 to-teal-400/50 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative rounded-3xl overflow-hidden shadow-3xl">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                  alt="Peaceful rooftop yoga session at golden hour"
                  className="w-full h-[600px] md:h-[700px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-8 py-5 rounded-3xl shadow-2xl">
                <p className="text-3xl font-[var(--font-serif)] font-light text-emerald-800">360°</p>
                <p className="text-sm uppercase tracking-wider text-gray-700">Panoramic Views</p>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md px-8 py-5 rounded-3xl shadow-2xl">
                <p className="text-3xl font-[var(--font-serif)] font-light text-emerald-800">Open</p>
                <p className="text-sm uppercase tracking-wider text-gray-700">To All Yogis</p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-10 py-6 rounded-full shadow-2xl text-center">
                <p className="text-lg font-semibold text-emerald-900">Daily Sunrise to Sunset</p>
              </div>
            </div>

            {/* Right: Extended Content */}
            <div className="space-y-12 order-1 lg:order-2">
              <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-emerald-100/60">
                <h3 className="text-3xl md:text-4xl font-[var(--font-serif)] font-light text-emerald-950 mb-6">
                  A Space for Everyone
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This rooftop shala is more than just a beautiful venue — it’s a community space created for connection and growth. 
                  Drop in anytime for your personal flow, meditate under the open sky, or bring your students for an unforgettable class.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We provide high-quality mats, blocks, straps, bolsters, and blankets. The serene environment, fresh ocean breeze, and panoramic views make every session deeply restorative.
                </p>
              </div>

              {/* Expanded Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-5xl mb-6">🌅</div>
                  <h4 className="text-xl font-semibold text-emerald-900 mb-3">Golden Hour Sessions</h4>
                  <p className="text-gray-700">Sunrise yoga or sunset restorative — the most magical times to practice</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-5xl mb-6">👥</div>
                  <h4 className="text-xl font-semibold text-teal-900 mb-3">Group & Retreat Friendly</h4>
                  <p className="text-gray-700">Ideal for workshops, teacher trainings, or private retreats</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-3xl border border-cyan-100 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-5xl mb-6">🧘‍♀️</div>
                  <h4 className="text-xl font-semibold text-cyan-900 mb-3">All Levels Welcome</h4>
                  <p className="text-gray-700">Beginners to advanced — everyone finds their flow here</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-3xl border border-indigo-100 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-5xl mb-6">🕉️</div>
                  <h4 className="text-xl font-semibold text-indigo-900 mb-3">Teacher-Friendly Space</h4>
                  <p className="text-gray-700">Yoga instructors are invited to host classes — contact us to reserve</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-[var(--font-serif)] font-extralight text-emerald-950 mb-12">
              Moments of Presence
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" alt="Sunrise yoga flow" className="rounded-3xl object-cover h-72 shadow-2xl hover:scale-105 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Meditation with horizon view" className="rounded-3xl object-cover h-72 shadow-2xl hover:scale-105 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Meditation with horizon view" className="rounded-3xl object-cover h-72 shadow-2xl hover:scale-105 transition-transform duration-700"/>
              <img src="https://images.unsplash.com/photo-1552196527-bffef41ef674?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Peaceful savasana under open sky" className="rounded-3xl object-cover h-72 shadow-2xl hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-40 bg-gradient-to-b from-emerald-950 to-teal-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.4)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight mb-12">
            The Rooftop Awaits You
          </h2>
          <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Drop in anytime for personal practice, or reserve the space for your group class, workshop, or retreat.
          </p>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-md">
              <p className="text-lg mb-4">Personal Practice</p>
              <p className="text-3xl font-[var(--font-serif)] font-light text-emerald-300">Free Access</p>
              <p className="text-sm mt-2 opacity-80">Daily sunrise to sunset — just bring yourself</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-md">
              <p className="text-lg mb-4">Group Sessions & Reservations</p>
              <p className="text-3xl font-[var(--font-serif)] font-light text-emerald-300">Contact Us</p>
              <p className="text-sm mt-2 opacity-80">Perfect for classes, retreats, or events</p>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center">
            <a href="/contact" className="px-16 py-7 bg-emerald-600 text-white rounded-full text-2xl font-medium hover:bg-emerald-500 transition-all shadow-2xl inline-flex items-center justify-center gap-5">
              Reserve the Space
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/contact" className="px-16 py-7 border-2 border-emerald-400 text-white rounded-full text-2xl font-medium hover:bg-emerald-400/20 transition-all">
              Inquire Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}