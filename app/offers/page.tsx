'use client';

import React from 'react';
import Link from 'next/link';

export default function OffersPage() {
  return (
    <>
      {/* Hero Section - Vibrant & Exciting */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="images/offers.png" 
            alt="Golden sunset over Unawatuna beach with palm trees and waves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div className="max-w-5xl">
         

            <h1 className="text-7xl md:text-9xl font-[var(--font-serif)] font-extralight tracking-tight mb-8 leading-tight">
              Ceylon Heart<br />
              <span className="italic text-amber-300">Experiences</span>
            </h1>

            <p className="text-2xl md:text-3xl font-light tracking-wide max-w-4xl opacity-90 mb-12">
              Unlock unforgettable moments in Unawatuna with our handpicked local partners — enjoy exclusive discounts as our guest
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30">
                <p className="text-xl font-medium">15% Off Surfing & Tea</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30">
                <p className="text-xl font-medium">Premium Airport Transfers</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30">
                <p className="text-xl font-medium">Beach Dining Specials</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <svg className="w-10 h-10 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Offers Grid - Creative Cards with Badges */}
      <section className="relative py-32 bg-gradient-to-b from-amber-50/50 via-white to-teal-50/30 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight text-teal-950 mb-8">
              Guest-Only Perks
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
              As a Ceylon Heart Villa guest, enjoy these exclusive offers from our trusted local partners — just mention your stay!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Surfing Offer */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-teal-100/50">
                <div className="h-64 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551524358-f34c0214781d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Surfer riding wave in Unawatuna"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-lg rounded-full shadow-lg animate-pulse">
                      15% OFF
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-[var(--font-serif)] font-light text-teal-950 mb-4">
                    Ceylon Heart Surfing
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Ride the waves with expert instructors at Unawatuna's best surf spot. Boards, lessons, and guidance included.
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href="https://maps.app.goo.gl/pAAjkVrtEZbFoeJf6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-medium hover:text-emerald-900 flex items-center gap-2"
                    >
                      View Location →
                    </a>
                    <span className="text-sm text-gray-600">Just mention Ceylon Heart Villa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tea Experience */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-amber-100/50">
                <div className="h-64 relative">
                  <img 
                    src="images/tea.webp" 
                    alt="Traditional Ceylon tea tasting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-lg rounded-full shadow-lg animate-pulse">
                      15% OFF
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-[var(--font-serif)] font-light text-teal-950 mb-4">
                    Ceylon Heart Tea
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Savor authentic Sri Lankan tea in a beautiful setting — 15% discount on every tea item and experience.
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href="https://maps.app.goo.gl/pAAjkVrtEZbFoeJf6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-700 font-medium hover:text-amber-900 flex items-center gap-2"
                    >
                      View Location →
                    </a>
                    <span className="text-sm text-gray-600">All tea menu items included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Airport Transfers */}
            <div className="relative group md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-indigo-100/50">
                <div className="h-64 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                    alt="Luxury airport transfer vehicle"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg rounded-full shadow-lg">
                      PREMIUM SERVICE
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-[var(--font-serif)] font-light text-teal-950 mb-4">
                    Airport Transfers & Vehicle Booking
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Seamless pickup/drop-off from Colombo Airport. Choose from luxury car, van, or bus — comfortable, air-conditioned, and reliable.
                  </p>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>• Private car (1-3 passengers)</li>
                    <li>• Van (4-8 passengers)</li>
                    <li>• Mini-bus (up to 15)</li>
                  </ul>
                  <a 
                    href="/contact-us" 
                    className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg"
                  >
                    Book Transfer
                  </a>
                </div>
              </div>
            </div>

            {/* Beach Restaurant */}
            <div className="relative group lg:col-span-3">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-pink-100/50">
                <div className="h-80 relative">
                  <img 
                    src="images/beachvilla.jpg" 
                    alt="Beachfront dining at sunset"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <span className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-2xl rounded-full shadow-lg animate-pulse">
                      BEACH DINING EXPERIENCE
                    </span>
                  </div>
                </div>
                <div className="p-12 text-center">
                  <h3 className="text-4xl md:text-5xl font-[var(--font-serif)] font-light text-teal-950 mb-6">
                    Ceylon Heart Beach Restaurant
                  </h3>
                  <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                    Fresh seafood, tropical cocktails, and toes-in-the-sand dining just steps from the waves. 
                    Exclusive offers and priority seating for Ceylon Heart Villa guests.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                      href="https://web.facebook.com/ceylonheartrestaurant" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-10 py-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full text-xl font-medium hover:shadow-2xl transition-all"
                    >
                      View Location & Menu
                    </a>
                    <a 
                      href="/contact-us" 
                      className="px-10 py-5 border-2 border-pink-500 text-pink-600 rounded-full text-xl font-medium hover:bg-pink-50 transition-all"
                    >
                      Reserve Table
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Final Note */}
          <div className="text-center mt-24">
            <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 px-12 py-8 rounded-3xl border-2 border-dashed border-emerald-300">
              <p className="text-2xl font-[var(--font-serif)] font-light text-emerald-900 italic">
                These offers are exclusively for Ceylon Heart Villa guests<br />
                Simply mention your stay when visiting our partners
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}