import React from 'react';

export default function AccommodationPage() {
  return (
    <>
      {/* Immersive Hero with Rooftop Focus */}
      <section className="relative h-screen min-h-[900px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/accommodation/villa-exterior.webp" 
            alt="Panoramic rooftop terrace at Ceylon Heart Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-7xl md:text-9xl font-[var(--font-serif)] font-extralight tracking-tight mb-6">
            Ceylon Heart<br />
            <span className="italic text-teal-300">Villa</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light tracking-wider max-w-5xl opacity-95">
            A grand colonial rooftop retreat with panoramic views and timeless elegance
          </p>
          <div className="mt-16">
            <svg className="w-10 h-10 animate-bounce opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Elegant Introduction */}
      <section className="py-32 bg-gradient-to-b from-teal-50/40 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight text-neutral-900 mb-10 leading-tight">
            Your Exclusive Rooftop Sanctuary
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto mb-20">
            Ceylon Heart Villa is a luxurious 11-bedroom colonial-style retreat featuring an expansive rooftop terrace with breathtaking panoramic views. 
            Fully staffed and private, it offers refined elegance for large groups, celebrations, or serene escapes.
          </p>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="group">
              <div className="text-5xl font-[var(--font-serif)] text-teal-700 mb-4 group-hover:scale-110 transition-transform duration-500">22+</div>
              <p className="text-neutral-600 uppercase tracking-[0.3em] text-sm font-medium">Guests</p>
            </div>
            <div className="group">
              <div className="text-5xl font-[var(--font-serif)] text-teal-700 mb-4 group-hover:scale-110 transition-transform duration-500">11</div>
              <p className="text-neutral-600 uppercase tracking-[0.3em] text-sm font-medium">Bedrooms</p>
            </div>
            <div className="group">
              <div className="text-5xl font-[var(--font-serif)] text-teal-700 mb-4 group-hover:scale-110 transition-transform duration-500">Expansive</div>
              <p className="text-neutral-600 uppercase tracking-[0.3em] text-sm font-medium">Rooftop Terrace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bedroom Gallery - 11 Rooms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight text-neutral-900 mb-6">
              Eleven Elegantly Appointed Bedrooms
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Each air-conditioned bedroom blends colonial charm with modern luxury, featuring king or twin beds, premium linens, and serene ambiance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-1.jpeg" alt="Master Suite" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-2.jpeg" alt="Signature Bedroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-3.jpeg" alt="Deluxe Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-4.jpeg" alt="Classic Suite" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-5.jpeg" alt="Superior Bedroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-6.jpeg" alt="Premium Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-7.jpeg" alt="Executive Suite" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-8.jpeg" alt="Heritage Bedroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-9.jpeg" alt="Luxury Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-10.jpeg" alt="Grand Bedroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="/accommodation/rooms-11.jpeg" alt="Rooftop View Suite" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Grand Living Areas */}
      <section className="py-28 bg-teal-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-[var(--font-serif)] font-extralight text-neutral-900 mb-10">
                Expansive Colonial Living Spaces
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Soaring ceilings, polished floors, and antique furnishings create inviting lounges and sitting areas perfect for gatherings or quiet moments.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Multiple elegant spaces flow seamlessly, offering versatility for intimate conversations or larger events.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <img src="/accommodation/living-01.jpeg" alt="Grand lounge" className="rounded-2xl object-cover h-96 shadow-lg hover:scale-105 transition-transform duration-500" />
              <img src="/accommodation/living-02.jpeg" alt="Elegant sitting room" className="rounded-2xl object-cover h-96 shadow-lg hover:scale-105 transition-transform duration-500" />
              <img src="/accommodation/living-03.jpeg" alt="Formal living area" className="rounded-2xl object-cover h-96 shadow-lg hover:scale-105 transition-transform duration-500" />
              <img src="/accommodation/living-04.jpeg" alt="Relaxed colonial lounge" className="rounded-2xl object-cover h-96 shadow-lg hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Expansive Rooftop Terrace */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight text-neutral-900 mb-16">
            Panoramic Rooftop Terrace
          </h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <img 
      src="/accommodation/rooftop-01.jpeg" 
      alt="Rooftop terrace sunset" 
      className="w-full h-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-700" 
    />
  </div>
  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <img 
      src="/accommodation/rooftop-02.jpeg" 
      alt="Evening rooftop lounge" 
      className="w-full h-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-700" 
    />
  </div>
  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <img 
      src="/accommodation/rooftop-03.jpeg" 
      alt="Rooftop dining area" 
      className="w-full h-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-700" 
    />
  </div>
  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <img 
      src="/accommodation/rooftop-04.jpeg" 
      alt="Panoramic city views from rooftop" 
      className="w-full h-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-700" 
    />
  </div>
  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <img 
      src="/accommodation/rooftop-05.jpeg" 
      alt="Rooftop bar setup" 
      className="w-full h-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-700" 
    />
  </div>
  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <img 
      src="/accommodation/rooftop-06.jpeg" 
      alt="Sunrise over the rooftop" 
      className="w-full h-full object-cover aspect-[16/9] group-hover:scale-110 transition-transform duration-700" 
    />
  </div>
</div>
          <p className="text-2xl text-neutral-600 max-w-5xl mx-auto leading-relaxed">
            The crown jewel—an expansive rooftop terrace with 360-degree views, ideal for events, relaxation, dining, or watching the city lights.
          </p>
        </div>
      </section>

      {/* Colonial Exterior */}
      <section className="py-28 bg-teal-50/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight text-neutral-900 mb-16">
            Timeless Colonial Facade
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <img src="/accommodation/exterior-01.jpeg" alt="Majestic colonial facade" className="rounded-2xl object-cover h-96 shadow-lg hover:scale-105 transition-transform duration-500" />
            <img src="/accommodation/exterior-02.jpeg" alt="Grand entrance" className="rounded-2xl object-cover h-96 shadow-lg hover:scale-105 transition-transform duration-500" />
            <img src="/accommodation/exterior-03.jpeg" alt="Architectural details" className="rounded-2xl object-cover h-96 shadow-lg hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>


      {/* Elegant CTA */}
      <section className="py-20 bg-white text-neutral-900 relative overflow-hidden">
  {/* Subtle elegant accent instead of dark overlay */}
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2)_0%,transparent_70%)]" />
  </div>

  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight mb-10 text-neutral-900">
      Elevate Your Stay
    </h2>
    <p className="text-2xl mb-16 text-neutral-700 max-w-3xl mx-auto leading-relaxed">
      Exclusive use of the 11-bedroom villa and rooftop terrace—your private elevated retreat awaits.
    </p>
    <div className="flex flex-col sm:flex-row gap-8 justify-center">
      <a 
        href="/contact-us" 
        className="px-14 py-6 bg-teal-600 text-white rounded-full text-xl font-medium hover:bg-teal-700 transition-all shadow-2xl inline-flex items-center justify-center gap-4"
      >
        Inquire Now
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <a 
        href="https://www.booking.com/Share-GP8uvT" 
        className="px-14 py-6 border-2 border-teal-600 text-teal-600 rounded-full text-xl font-medium hover:bg-teal-50 transition-all"
      >
        View Rates & Availability
      </a>
    </div>
  </div>
</section>
    </>
  );
}