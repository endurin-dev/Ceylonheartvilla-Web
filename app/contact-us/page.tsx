'use client';

import React, { useState, ReactNode } from 'react';

export default function ContactPage() {
  const [activeMethod, setActiveMethod] = useState('whatsapp');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/villa-exterior.webp" // ← Update this path to your actual villa image
            alt="Sun Villa Unawatuna - Luxury accommodation in Unawatuna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>

        <div className="relative h-full flex flex-col justify-between py-20 px-6 max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="max-w-3xl mt-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Visit Us
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 italic font-light leading-relaxed">
              "Relax under the Sri Lankan sun — your peaceful retreat in Unawatuna awaits."
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
              We're here to assist you — pick whatever suits you best
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
                    <MessageIcon className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Chat on WhatsApp</h3>
                    <p className="text-lg text-gray-600">
                      Instant responses and easy photo sharing for your inquiries
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/94769459595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Start WhatsApp Chat
                  </a>
                  <p className="text-center text-sm text-gray-500">
                    Available daily · Quick replies usually within minutes
                  </p>
                </div>
              </div>
            )}

            {activeMethod === 'phone' && (
              <div className="bg-white rounded-3xl shadow-xl p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-lg text-gray-600">
                      Reach our team directly for fast assistance
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="tel:+94769459595"
                    className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition group"
                    aria-label="Call primary number"
                  >
                    <div className="text-sm text-gray-600 mb-2">Primary Contact</div>
                    <div className="text-xl font-bold text-gray-900 mb-1">Reservation Team</div>
                    <div className="text-lg text-gray-700">+94 76 945 9595</div>
                  </a>

                  <a
                    href="tel:+94773899595"
                    className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition group"
                    aria-label="Call secondary number"
                  >
                    <div className="text-sm text-gray-600 mb-2">Alternative Contact</div>
                    <div className="text-xl font-bold text-gray-900 mb-1">Reservation Team</div>
                    <div className="text-lg text-gray-700">+94 77 389 9595</div>
                  </a>
                </div>
              </div>
            )}

            {activeMethod === 'email' && (
              <div className="bg-white rounded-3xl shadow-xl p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Send an Email</h3>
                    <p className="text-lg text-gray-600">
                      Ideal for detailed questions, bookings, or special requests
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Our Email Address</div>
                  <div className="text-2xl font-bold text-gray-900 break-all mb-4">
                    suranga.ag@gmail.com
                  </div>
                  <a
                    href="mailto:suranga.ag@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
                  >
                    <MailIcon className="w-5 h-5 text-white" />
                    Compose Email
                  </a>
                </div>

                <p className="text-center text-sm text-gray-500">
                  We aim to reply within a few hours during business days
                </p>
              </div>
            )}
          </div>

          {/* Removed social links section as no links were provided */}
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
                Situated in the beautiful coastal town of Unawatuna, close to stunning beaches and local attractions.
              </p>

              <div className="space-y-3 pt-4 text-lg text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span>No 03, Deniyawaththa</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span>Maharaba Road, Unawatuna</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span>Short walk to the beach</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.282923847299!2d80.261499575872!3d6.009399999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1738e9b5c49b3%3A0x9c8c8f8f8f8f8f8f!2sSun%20Villa%20Unawatuna!5e0!3m2!1sen!2slk!4v1700000000000" // ← Replace with actual embed code for "No 3 Deniyawaththa Maharaba Road Unawatuna"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sun Villa Unawatuna Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Let's plan your relaxing getaway in Unawatuna. Contact us today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/94769459595"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.044h-.004c-1.575-.001-3.022-.603-4.089-1.595l-.293-.175-2.917.766.766-2.843-.18-.292c-1.014-1.65-1.64-3.618-1.64-5.9 0-6.082 4.953-11.03 11.043-11.03 2.952 0 5.732 1.152 7.82 3.243 2.09 2.09 3.241 4.87 3.241 7.82-.001 6.083-4.95 11.031-11.042 11.031m4.346-17.715c-3.528 0-6.427 1.19-8.74 3.144l-.292.291c-2.049 2.05-3.178 4.777-3.178 7.682 0 2.905 1.129 5.632 3.178 7.682l.291.292c2.313 2.313 5.212 3.503 8.74 3.503 3.528 0 6.427-1.19 8.74-3.144l-.292-.291c2.049-2.05 3.178-4.777 3.178-7.682s-1.129-5.632-3.178-7.682c-2.313-2.313-5.212-3.503-8.74-3.503"/>
              </svg>
              Message on WhatsApp
            </a>

            {/* Call Button */}
            <a
              href="tel:+94769459595"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Components */

interface MethodButtonProps {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

function MethodButton({ active, onClick, icon, label }: MethodButtonProps) {
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

/* SVG Icons — kept the same as original for consistency */

function PhoneIcon({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MessageIcon({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function MailIcon({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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