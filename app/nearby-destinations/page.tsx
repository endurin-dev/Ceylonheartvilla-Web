import React from 'react';

export default function NearbyAttractionsPage() {
  return (
    <>
{/* Introduction - Now Acts as Page Header with Even Stronger Top Shadow */}
<section className="py-32 bg-gradient-to-b from-teal-50/40 to-white relative">
  {/* Even stronger top shadow overlay for maximum navbar visibility */}
  <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none z-10"></div>

  <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
    <h1 className="text-7xl md:text-8xl font-[var(--font-serif)] font-extralight text-neutral-900 mb-8 leading-tight">
      Nearby<br />
      <span className="italic text-teal-700">Attractions</span>
    </h1>
    <p className="text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto mb-12">
      Discover the treasures surrounding Ceylon Heart Villa in Unawatuna
    </p>
    <p className="text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
      From the golden sands of Unawatuna Beach to the historic charm of Galle Fort and serene spiritual sites, 
      Ceylon Heart Villa is perfectly positioned for unforgettable day trips and adventures. 
      Most attractions are just a short tuk-tuk ride away.
    </p>
  </div>
</section>

      {/* Attractions Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Unawatuna Beach */}
            <div className="group">
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1526485856375-9110812fbf35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-[var(--font-serif)] font-light text-neutral-900 mb-4">Unawatuna Beach</h3>
              <p className="text-teal-700 font-medium mb-4">Distance: 1-2 km (5-10 min walk or tuk-tuk)</p>
              <p className="text-neutral-600 leading-relaxed">
                The heart of the area – a beautiful crescent-shaped beach with calm, protected waters ideal for swimming, snorkeling, and relaxing. Lined with restaurants and bars, it's perfect for sunset dinners or water sports like diving and surfing.
              </p>
            </div>

            {/* Galle Dutch Fort */}
            <div className="group">
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579989197111-928f586796a3?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Historic walls of Galle Dutch Fort at sunset"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-[var(--font-serif)] font-light text-neutral-900 mb-4">Galle Dutch Fort</h3>
              <p className="text-teal-700 font-medium mb-4">Distance: 5-6 km (15-20 min tuk-tuk)</p>
              <p className="text-neutral-600 leading-relaxed">
                A UNESCO World Heritage Site with colonial architecture, ramparts for walking, boutique shops, cafes, and museums. Explore the lighthouse, churches, and cobblestone streets – a must-visit for history and photography lovers.
              </p>
            </div>

            {/* Japanese Peace Pagoda */}
            <div className="group">
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Shanti_Stupa.jpg/500px-Shanti_Stupa.jpg" 
                  alt="Serene Japanese Peace Pagoda on Rumassala Hill"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-[var(--font-serif)] font-light text-neutral-900 mb-4">Japanese Peace Pagoda (Rumassala)</h3>
              <p className="text-teal-700 font-medium mb-4">Distance: 2-3 km (10 min tuk-tuk)</p>
              <p className="text-neutral-600 leading-relaxed">
                A stunning white stupa atop Rumassala Hill offering peaceful meditation and breathtaking ocean views. Ideal for sunrise or sunset visits – combine with a short hike for an enriching spiritual experience.
              </p>
            </div>

            {/* Jungle Beach */}
            <div className="group">
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1527437934671-61474b530017?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Secluded Jungle Beach near Unawatuna"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-[var(--font-serif)] font-light text-neutral-900 mb-4">Jungle Beach (Rumassala South Beach)</h3>
              <p className="text-teal-700 font-medium mb-4">Distance: 2-3 km (10-15 min tuk-tuk or hike)</p>
              <p className="text-neutral-600 leading-relaxed">
                A secluded, less crowded beach surrounded by jungle – perfect for snorkeling, swimming in calm waters, and relaxing away from the main tourist areas.
              </p>
            </div>

            {/* Dalawella Beach Palm Swing */}
            <div className="group">
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://suchaspot.com/dalawella-beach-palm-tree-swing/dalawella-beach-palm-tree-swing-sunset.jpg" 
                  alt="Iconic palm tree rope swing at Dalawella Beach"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-[var(--font-serif)] font-light text-neutral-900 mb-4">Dalawella Beach & Famous Palm Swing</h3>
              <p className="text-teal-700 font-medium mb-4">Distance: 6-8 km (20 min tuk-tuk)</p>
              <p className="text-neutral-600 leading-relaxed">
                Home to Sri Lanka's most Instagram-famous palm tree rope swing. A beautiful beach with calm waters – great for photos, swimming, and relaxed vibes.
              </p>
            </div>

            {/* Yatagala Raja Maha Viharaya */}
            <div className="group">
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.lakpura.com/images/LK94009636-02-E.JPG" 
                  alt="Ancient cave temple at Yatagala Raja Maha Viharaya"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-[var(--font-serif)] font-light text-neutral-900 mb-4">Yatagala Raja Maha Viharaya Temple</h3>
              <p className="text-teal-700 font-medium mb-4">Distance: 4 km (10-15 min tuk-tuk)</p>
              <p className="text-neutral-600 leading-relaxed">
                An ancient rock temple with a 9m reclining Buddha and beautiful murals in a peaceful cave setting. A serene cultural experience away from the beaches.
              </p>
            </div>

            {/* Sea Turtle Snorkeling */}
            <div className="group">
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1636619304146-427f6e3e68db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Snorkeling with sea turtles near Unawatuna"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-[var(--font-serif)] font-light text-neutral-900 mb-4">Sea Turtle Snorkeling</h3>
              <p className="text-teal-700 font-medium mb-4">Distance: At local beaches or short boat trip</p>
              <p className="text-neutral-600 leading-relaxed">
                Swim alongside gentle sea turtles in the shallow reefs around Unawatuna and nearby beaches. Ethical tours available – a magical wildlife encounter.
              </p>
            </div>

            {/* Whale Watching in Mirissa */}
            <div className="group">
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Whale watching adventure from Mirissa"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-[var(--font-serif)] font-light text-neutral-900 mb-4">Whale Watching (Mirissa)</h3>
              <p className="text-teal-700 font-medium mb-4">Distance: 30-40 km (45-60 min drive)</p>
              <p className="text-neutral-600 leading-relaxed">
                One of the world's best spots for blue whale sightings (seasonal: Nov-Apr). Early morning boat tours from nearby Mirissa – an unforgettable ocean safari.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA - Light Version */}
      <section className="py-32 bg-white text-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2)_0%,transparent_70%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-extralight mb-10 text-neutral-900">
            Ready to Explore?
          </h2>
          <p className="text-2xl mb-16 text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Let our tour consultant arrange personalized excursions and transportation.
          </p>
          <a href="/contact-us" className="px-14 py-6 bg-teal-600 text-white rounded-full text-xl font-medium hover:bg-teal-700 transition-all shadow-2xl inline-flex items-center justify-center gap-4">
            Contact Us
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}