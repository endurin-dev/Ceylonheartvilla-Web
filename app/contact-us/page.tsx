'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [activeMethod, setActiveMethod] = useState('whatsapp');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/villa-exterior.webp"
            alt="Ceylon Heart Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>

        <div className="relative h-full flex flex-col justify-between py-20 px-6 max-w-7xl mx-auto">
          {/* Vertical Social Rail - Right Side */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col gap-3">
              <div className="text-white text-xs font-medium tracking-wider -rotate-90 origin-center mb-8 whitespace-nowrap">
                FOLLOW US
              </div>
              <a
                href="https://www.facebook.com/ceylonheartrestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center hover:bg-white hover:border-white transition-all">
                  <div className="text-white group-hover:text-gray-900 transition-colors">
                    <FacebookIcon />
                  </div>
                </div>
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                  <div className="text-xs text-gray-500 mb-1">Facebook</div>
                  <div className="text-sm font-semibold text-gray-900">ceylonheartrestaurant</div>
                </div>
              </a>
              
              <a
                href="https://www.instagram.com/ceylon.heart"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center hover:bg-white hover:border-white transition-all">
                  <div className="text-white group-hover:text-pink-600 transition-colors">
                    <InstagramIcon />
                  </div>
                </div>
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                  <div className="text-xs text-gray-500 mb-1">Instagram</div>
                  <div className="text-sm font-semibold text-gray-900">@ceylon.heart</div>
                </div>
              </a>
              
              <div className="w-px h-12 bg-white/30 mx-auto mt-2" />
            </div>
          </div>

          {/* Hero Content - Bottom */}
          <div className="max-w-3xl mt-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Visit Us
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/95 italic font-light leading-relaxed">
              "Where the ocean whispers and time stands still — your sanctuary awaits in paradise."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Way to Connect
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help, whatever works best for you
            </p>
          </div>

          {/* Method Selector */}
          <div className="flex justify-center gap-3 mb-12">
            <MethodButton
              active={activeMethod === 'whatsapp'}
              onClick={() => setActiveMethod('whatsapp')}
              icon={<MessageIcon />}
              label="WhatsApp"
            />
            <MethodButton
              active={activeMethod === 'phone'}
              onClick={() => setActiveMethod('phone')}
              icon={<PhoneIcon />}
              label="Phone"
            />
            <MethodButton
              active={activeMethod === 'email'}
              onClick={() => setActiveMethod('email')}
              icon={<MailIcon />}
              label="Email"
            />
          </div>

          {/* Content Area */}
          <div className="max-w-3xl mx-auto">
            {activeMethod === 'whatsapp' && (
              <div className="bg-white rounded-3xl shadow-xl p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageIcon />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Chat on WhatsApp</h3>
                    <p className="text-lg text-gray-600">
                      Get instant replies and share photos of what you're looking for
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/94717393971"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Start WhatsApp Chat
                  </a>
                  
                  <p className="text-center text-sm text-gray-500">
                    Available daily · Usually responds within minutes
                  </p>
                </div>
              </div>
            )}

            {activeMethod === 'phone' && (
              <div className="bg-white rounded-3xl shadow-xl p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-lg text-gray-600">
                      Speak directly with our team for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="tel:+94717393971"
                    className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition group"
                  >
                    <div className="text-sm text-gray-600 mb-2">Contact Person</div>
                    <div className="text-xl font-bold text-gray-900 mb-1">Sampath</div>
                    <div className="text-lg text-gray-700">+94 71 739 3971</div>
                  </a>

                  <a
                    href="tel:+94771552043"
                    className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition group"
                  >
                    <div className="text-sm text-gray-600 mb-2">Contact Person</div>
                    <div className="text-xl font-bold text-gray-900 mb-1">Janith</div>
                    <div className="text-lg text-gray-700">+94 77 155 2043</div>
                  </a>
                </div>
              </div>
            )}

            {activeMethod === 'email' && (
              <div className="bg-white rounded-3xl shadow-xl p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Send an Email</h3>
                    <p className="text-lg text-gray-600">
                      Perfect for detailed inquiries and booking requests
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Our Email Address</div>
                  <div className="text-2xl font-bold text-gray-900 break-all mb-4">
                    ceylonheart@gmail.com
                  </div>
                  <a
                    href="mailto:ceylonheart@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
                  >
                    <MailIcon />
                    Compose Email
                  </a>
                </div>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 2-4 hours during business hours
                </p>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="mt-16">
            <div className="text-center text-sm text-gray-500 mb-6">Connect with us</div>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.facebook.com/ceylonheartrestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all">
                  <div className="text-white">
                    <FacebookIcon />
                  </div>
                </div>
                <div className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                  ceylonheartrestaurant
                </div>
              </a>
              
              <a
                href="https://www.instagram.com/ceylon.heart"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-pink-500/50 transition-all">
                  <div className="text-white">
                    <InstagramIcon />
                  </div>
                </div>
                <div className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                  @ceylon.heart
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                <MapPinIcon />
                Location
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Find Us in Unawatuna
              </h2>
              
              <p className="text-lg text-gray-600">
                Located in the heart of Sri Lanka's premier beach destination, just a 5-minute walk from pristine shores.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span>5 minutes to beach</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span>Central location</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span>Easy access to attractions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps?q=Ceylon%20Heart%20Villa&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Ceylon Heart Villa Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's start planning your perfect Sri Lankan getaway. We'll handle all the details.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94717393971"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-teal-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl"
            >
              <MessageIcon />
              Message on WhatsApp
            </a>
            <a
              href="tel:+94717393971"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <PhoneIcon />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Components */

function MethodButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all ${
        active
          ? 'bg-gray-900 text-white shadow-xl scale-105'
          : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      {label}
    </button>
  );
}

/* SVG Icons */

function PhoneIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}