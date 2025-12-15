import Link from "next/link";
import PartnersSlider from "@/components/PartnersSlider";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-950 via-emerald-900 to-indigo-950 overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/banner.webp')",
    }}
  />
  
  {/* Reduced Dark Overlay – lighter for better visibility */}
  <div className="absolute inset-0 bg-black/40" />
  
  {/* Subtle Gold Texture Overlay */}
  <div 
    className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center"
    style={{
      backgroundImage: "url('https://img.freepik.com/premium-psd/png-gold-background-texture-golden-abstract_53876-621139.jpg')",
    }}
  />

  {/* Centered Content */}
  <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
    {/* Elegant Quote */}
    <p className="text-4xl md:text-5xl font-light italic text-amber-100 leading-relaxed drop-shadow-2xl">
      “Timeless luxury immersed in pristine nature and profound quietude.”
    </p>
    
    <p className="mt-12 text-lg font-light tracking-widest text-amber-200 uppercase drop-shadow-md">
      — Ceylon Heart Villa
    </p>
    
    {/* Pure CSS Elegant Divider */}
    <div className="mt-12 flex items-center justify-center">
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
      <div className="mx-6 w-1 h-1 rounded-full bg-amber-500 shadow-lg"></div>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
    </div>
    
    {/* Subtle Welcome Text */}
    <p className="mt-12 text-xl md:text-2xl font-light text-white/90 leading-relaxed drop-shadow-md">
      A serene sanctuary nestled among swaying palms on Sri Lanka’s southern coast.
    </p>
  </div>

  {/* Refined Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <svg
      className="w-8 h-8 text-amber-300/70"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>

<PartnersSlider/>

{/* Redesigned About / Location Section – Modern Luxury */}
<section className="relative py-20 bg-gradient-to-b from-white to-teal-50/30 overflow-hidden font-[var(--font-sans)]">
  
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* HERO SECTION */}
    <div className="text-center mb-20 max-w-4xl mx-auto">
      <div className="inline-block mb-6">
        <span className="text-xs uppercase tracking-[0.4em] text-teal-600 font-semibold px-6 py-2 bg-teal-50 rounded-full border border-teal-200">
          Discover Ceylon Heart Villa
        </span>
      </div>
      <h2 className="text-6xl md:text-7xl font-[var(--font-serif)] font-light text-teal-950 leading-[1.1] mb-8">
        Where Nature Meets
        <br />
        <span className="italic text-amber-700 relative inline-block">
          Refined Luxury
          <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-200" viewBox="0 0 200 12" preserveAspectRatio="none">
            <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </span>
      </h2>
      <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
        A sanctuary nestled among coconut palms and mango groves on Sri Lanka's enchanting southern coast
      </p>
    </div>

    {/* DUAL IMAGE SHOWCASE */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
      
      {/* Primary Image Card */}
      <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src="/images/morning.webp"
          alt="Couple enjoying villa"
          className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-8 left-8 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm uppercase tracking-widest mb-2">Experience</p>
          <p className="text-2xl font-[var(--font-serif)] font-light">Pure Serenity</p>
        </div>
      </div>

      {/* Secondary Image Card */}
      <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src="/images/villa-exterior.webp"
          alt="Bedroom with jungle view"
          className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-8 left-8 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm uppercase tracking-widest mb-2">Awaken To</p>
          <p className="text-2xl font-[var(--font-serif)] font-light">Nature's Symphony</p>
        </div>
      </div>
    </div>

    {/* SPLIT CONTENT SECTION */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT – Location & Proximity */}
      <div className="space-y-8">
        
        {/* Location Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-teal-100/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-[var(--font-serif)] font-light text-teal-950 mb-3">
                  Perfectly Positioned
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Experience the best of both worlds—secluded tranquility with immediate access to Sri Lanka's most captivating destinations.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {/* Beach & Coastal */}
              <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏖️</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Unawatuna Beach</p>
                  <p className="text-xs text-gray-600">10-minute walk</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏝️</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Jungle Beach</p>
                  <p className="text-xs text-gray-600">15-minute drive</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🐢</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Turtle Beach</p>
                  <p className="text-xs text-gray-600">20-minute drive</p>
                </div>
              </div>

              {/* Cultural & Heritage */}
              <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏰</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Galle Dutch Fort</p>
                  <p className="text-xs text-gray-600">5-minute drive · UNESCO Site</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">⛩️</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Japanese Peace Pagoda</p>
                  <p className="text-xs text-gray-600">15-minute drive</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🛕</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Yatagala Buddhist Temple</p>
                  <p className="text-xs text-gray-600">25-minute drive</p>
                </div>
              </div>

              {/* Nature & Wildlife */}
              <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🐋</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Mirissa Whale Watching</p>
                  <p className="text-xs text-gray-600">30-minute drive</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🌳</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Sinharaja Rain Forest</p>
                  <p className="text-xs text-gray-600">1.5-hour drive · UNESCO Site</p>
                </div>
              </div>

              {/* Transport */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-xl border border-teal-100/50 mt-4">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✈️</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-teal-950 text-sm">Colombo Airport (CMB)</p>
                  <p className="text-xs text-gray-600">2.5-hour scenic coastal drive</p>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-4 gap-3 pt-6 border-t border-teal-100">
              <div className="text-center">
                <p className="text-3xl font-[var(--font-serif)] font-light text-teal-700 mb-1">8</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">Attractions</p>
              </div>
              <div className="text-center border-x border-teal-100">
                <p className="text-3xl font-[var(--font-serif)] font-light text-teal-700 mb-1">10</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">Min Walk</p>
              </div>
              <div className="text-center border-r border-teal-100">
                <p className="text-3xl font-[var(--font-serif)] font-light text-teal-700 mb-1">5</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">Min Drive</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-[var(--font-serif)] font-light text-teal-700 mb-1">2</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">UNESCO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT – Curated Experiences */}
      <div className="space-y-8">
        
        {/* Curated Activities Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-rose-100/50">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-[var(--font-serif)] font-light text-rose-950 mb-3">
                  Curated Experiences
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Immerse yourself in authentic Sri Lankan culture, wellness, and natural beauty through our thoughtfully designed activities
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* 1. Cooking Experience */}
              <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl">🍛</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Hands-on Sri Lankan Cooking Experience</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Discover authentic flavours—learn coconut roti, sambal, dhal curry with Ceylon spices
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Kitchen to Table */}
              <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl">🍽️</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Culinary Journey from Kitchen to Table</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Enjoy the fruits of your labour as you taste and savour your creations
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Walk to Pagoda */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl">🚶</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Gentle Walk to the Japanese Peace Pagoda</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Stroll to the Japanese Peace Pagoda on Rumassala Mountain in the late afternoon
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Breathtaking Views */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl">🏔️</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Enjoy Breathtaking Views from the Pagoda</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Marvel at the panoramic views of the Indian Ocean from the edge of the mountain
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Sunset */}
              <div className="p-4 bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl border border-rose-100/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl">🌅</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Pause, Reflect, and Watch the Sunset</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Take a moment to reflect and witness a truly unforgettable sunset
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Yoga */}
              <div className="p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl">🧘</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Yoga in a Serene Space</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Relax and rejuvenate in a peaceful yoga space surrounded by nature
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="bg-gradient-to-br from-teal-700 to-teal-900 p-10 rounded-3xl shadow-2xl text-white">
          <h4 className="text-2xl font-[var(--font-serif)] font-light mb-4">
            Ready to Experience Paradise?
          </h4>
          <p className="text-teal-100 mb-6 leading-relaxed">
            Immerse yourself in the perfect blend of natural beauty, cultural immersion, and refined comfort.
          </p>
         <a
  href="https://www.booking.com/Share-TO7tdC"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-teal-900 px-8 py-4 rounded-full font-medium hover:bg-amber-50 hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 group"
>
  Book Your Stay
  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</a>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Dedicated Yoga Section – Rooftop Sanctuary */}
<section className="relative py-15 bg-gradient-to-b from-teal-50/30 via-white to-emerald-50/30 overflow-hidden font-[var(--font-sans)]">
  
  {/* Decorative Background Elements */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* SECTION HEADER */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-300" />
        <span className="text-xs uppercase tracking-[0.4em] text-teal-600 font-semibold">
          Mind • Body • Spirit
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-300" />
      </div>
      
      <h2 className="text-5xl md:text-6xl font-[var(--font-serif)] font-light text-teal-950 leading-tight mb-6">
        Butterfly Lounge
        <br />
        <span className="italic text-emerald-700">YogaRetreat</span>
      </h2>
      
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Elevate your practice in our serene rooftop yoga space, where sky meets stillness and every breath connects you to nature's tranquil rhythm
      </p>
    </div>

    {/* MAIN CONTENT GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

      {/* LEFT – Image */}
      <div className="relative group order-2 lg:order-1">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/images/yoga01.webp"
            alt="Rooftop yoga space at Ceylon Heart Villa"
            className="w-full h-[500px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Floating Badge */}
        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-teal-100">
          <div className="text-center">
            <p className="text-3xl font-[var(--font-serif)] font-light text-teal-700 mb-1">360°</p>
            <p className="text-xs uppercase tracking-wider text-gray-600">Views</p>
          </div>
        </div>
      </div>

      {/* RIGHT – Content */}
      <div className="space-y-8 order-1 lg:order-2">
        
        {/* Main Description Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl blur-xl opacity-30" />
          <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-teal-100/50 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-[var(--font-serif)] font-light text-teal-950 mb-3">
                  A Space Above It All
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Our rooftop yoga space offers an unparalleled setting for your practice—surrounded by swaying palms, open skies, and the gentle sounds of nature. Here, elevated above the world, you'll find the perfect environment for mindful movement and meditation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-teal-100/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-3">
              <span className="text-2xl">🌅</span>
            </div>
            <p className="font-semibold text-gray-900 text-sm mb-1">Sunrise & Sunset</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Practice during golden hour with breathtaking views
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
              <span className="text-2xl">🌿</span>
            </div>
            <p className="font-semibold text-gray-900 text-sm mb-1">Nature Immersion</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Surrounded by lush tropical greenery and fresh air
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
              <span className="text-2xl">🧘</span>
            </div>
            <p className="font-semibold text-gray-900 text-sm mb-1">Quiet Sanctuary</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Peaceful atmosphere away from distractions
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
              <span className="text-2xl">🌤️</span>
            </div>
            <p className="font-semibold text-gray-900 text-sm mb-1">Open-Air Design</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Connect with the elements in our rooftop setting
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="relative py-15 bg-gradient-to-b from-teal-50/30 via-white to-emerald-50/30 overflow-hidden font-[var(--font-sans)]">
  
  {/* Decorative Background Elements */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* SECTION HEADER */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-300" />
        <span className="text-xs uppercase tracking-[0.4em] text-teal-600 font-semibold">
          Mind • Body • Spirit
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-300" />
      </div>
      
      <h2 className="text-5xl md:text-6xl font-[var(--font-serif)] font-light text-teal-950 leading-tight mb-6">
        See the Wild life habitat
        <br />
        <span className="italic text-emerald-700">from our butterfly lounge</span>
      </h2>
      
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Relax in our butterfly lounge on the rooftop and immerse yourself in the surrounding wildlife habitat, where tropical birds and monkeys come to life against a backdrop of lush greenery.
      </p>
    </div>

    {/* MAIN CONTENT GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

      {/* LEFT – Content */}
      <div className="space-y-8 order-1">
        
        {/* Main Description Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl blur-xl opacity-30" />
          <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-teal-100/50 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332-.477-4.5-1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-[var(--font-serif)] font-light text-teal-950 mb-3">
                  Wildlife at Your Doorstep
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  From the comfort of our rooftop butterfly lounge, observe a variety of birds soaring overhead and playful monkeys in the nearby trees. The surrounding habitat teems with life, offering a serene and captivating natural spectacle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife Cards Grid - Larger animal photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-teal-50 to-white rounded-3xl border border-teal-100/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-32 mb-4 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://cdn.download.ams.birds.cornell.edu/api/v2/asset/145284511/1200" 
                alt="Crested Hawk Eagle" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="font-semibold text-gray-900 text-sm">Crested Hawk Eagle</p>
            <p className="text-xs text-gray-600 mt-1 leading-tight">
              Majestic raptor soaring above
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-emerald-50 to-white rounded-3xl border border-emerald-100/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-32 mb-4 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Peacock_Plumage.jpg" 
                alt="Peacock" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="font-semibold text-gray-900 text-sm">Peacock</p>
            <p className="text-xs text-gray-600 mt-1 leading-tight">
              Vibrant displays in trees
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-32 mb-4 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1000,h_666/https://neprimateconservancy.org/wp-content/uploads/2021/12/purple-faced-langur-iStock-512335336-resize.jpg" 
                alt="Black-faced Leaf Monkey" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="font-semibold text-gray-900 text-sm">Black-faced Leaf Monkey</p>
            <p className="text-xs text-gray-600 mt-1 leading-tight">
              Playful in the canopy
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-32 mb-4 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://cdn.download.ams.birds.cornell.edu/api/v2/asset/133740231/1200" 
                alt="Paradise Flycatcher" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="font-semibold text-gray-900 text-sm">Paradise Flycatcher</p>
            <p className="text-xs text-gray-600 mt-1 leading-tight">
              Elegant flowing tail
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-lime-50 to-white rounded-3xl border border-lime-100/50 shadow-sm hover:shadow-lg transition-shadow duration-300 md:col-span-1 col-span-2">
            <div className="w-full h-32 mb-4 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Treron_vernans_male_-_Kent_Ridge_Park.jpg" 
                alt="Green Pigeon" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="font-semibold text-gray-900 text-sm">Green Pigeon</p>
            <p className="text-xs text-gray-600 mt-1 leading-tight">
              Bright green in foliage
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-lime-50 to-white rounded-3xl border border-lime-100/50 shadow-sm hover:shadow-lg transition-shadow duration-300 md:col-span-1 col-span-2">
            <div className="w-full h-32 mb-4 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/DuculaAenea.JPG" 
                alt="Green imperial pigeon" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="font-semibold text-gray-900 text-sm">Green imperial pigeon</p>
            <p className="text-xs text-gray-600 mt-1 leading-tight">
              Greenish unique pigeon breed
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT – Image */}
      <div className="relative group order-2">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/images/nature.webp"
            alt="View of wildlife habitat from the butterfly lounge at Ceylon Heart Villa"
            className="w-full h-[500px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Floating Badge */}
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-teal-100">
          <div className="text-center">
            <p className="text-3xl font-[var(--font-serif)] font-light text-teal-700 mb-1">Wildlife Views</p>
            <p className="text-xs uppercase tracking-wider text-gray-600">Wildlife Views</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="relative py-20 bg-gradient-to-b from-white to-teal-50/40 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-14">
      <span className="text-sm uppercase tracking-[0.4em] text-teal-700 font-medium">
        Amenities
      </span>
      <h3 className="mt-4 text-4xl md:text-5xl font-[var(--font-serif)] font-extralight text-neutral-900 leading-tight">
        Everything You Need,<br />
        <span className="italic text-teal-800">Nothing You Don’t</span>
      </h3>
      <p className="mt-5 text-neutral-600 max-w-2xl mx-auto">
        Thoughtfully curated comforts designed for effortless living and quiet luxury.
      </p>
    </div>

    {/* Amenities Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card */}
      {[
        {
          title: "High-Speed WiFi",
          label: "Complimentary",
          desc: "Fast, reliable fiber-optic internet across the entire villa.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          )
        },
        {
          title: "Tea & Coffee Station",
          label: "24 / 7",
          desc: "Premium Ceylon teas and freshly brewed coffee anytime.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4" />
          )
        },
        {
          title: "Laundry Service",
          label: "Self Service",
          desc: "Wash, dry, and fold service for a carefree stay.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9" />
          )
        },
        {
          title: "Tour Consultant",
          label: "Local Expert",
          desc: "Personalised itineraries and hidden island experiences.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618" />
          )
        },
        {
          title: "Curated Library",
          label: "Available",
          desc: "A handpicked collection for relaxed tropical reading.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5" />
          )
        },
        {
          title: "Mini Refrigerator",
          label: "On Request",
          desc: "In-room cooling for drinks, fruit, and essentials.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4" />
          )
        }
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {item.icon}
              </svg>
            </div>

            <div>
              <h4 className="text-lg font-[var(--font-serif)] text-neutral-900">
                {item.title}
              </h4>
              <span className="text-xs uppercase tracking-wider text-teal-600 font-semibold">
                {item.label}
              </span>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Highlight Card */}
    <div className="mt-12 bg-white/90 border border-teal-200/50 rounded-3xl p-8 md:p-10">
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
          <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7" />
          </svg>
        </div>
        <div>
          <h4 className="text-2xl font-[var(--font-serif)] text-neutral-900">
            Full Kitchen Facilities
          </h4>
          <p className="mt-3 text-neutral-600 max-w-3xl">
            Fully equipped open-plan kitchen with premium cookware, gas stove,
            full-size fridge, blender, rice cooker, and dining essentials perfect for home-style or chef-prepared meals.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

<section className="relative py-10 bg-gradient-to-b from-teal-50/30 via-white to-emerald-50/30 overflow-hidden font-[var(--font-sans)]">
  
  {/* Decorative Background Elements */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* SECTION HEADER */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-300" />
        <span className="text-xs uppercase tracking-[0.4em] text-teal-600 font-semibold">
          Guest Experiences
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-300" />
      </div>
      
      <h2 className="text-5xl md:text-6xl font-[var(--font-serif)] font-light text-teal-950 leading-tight mb-6">
        What Our Guests
        <br />
        <span className="italic text-emerald-700">Say About Us</span>
      </h2>
      
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Heartfelt words from those who have experienced the serenity and warmth of Ceylon Heart Villa
      </p>
    </div>

    {/* REVIEWS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

      {/* Review 1 */}
      <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-teal-100/50 shadow-lg hover:shadow-xl transition-shadow duration-500">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-6 italic">
          "A true sanctuary! The rooftop yoga space and butterfly lounge offered breathtaking views of nature. The staff were incredibly warm and attentive – felt like home."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">🌿</div>
          <div>
            <p className="font-semibold text-teal-950">Sarah & Family</p>
            <p className="text-sm text-gray-600">Germany, 2025</p>
          </div>
        </div>
      </div>

      {/* Review 2 */}
      <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-teal-100/50 shadow-lg hover:shadow-xl transition-shadow duration-500">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-6 italic">
          "Peaceful and luxurious. Watching peacocks and monkeys from the lounge while enjoying fresh coconut was magical. The villa is spotless and the food divine."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">🦜</div>
          <div>
            <p className="font-semibold text-teal-950">James Thompson</p>
            <p className="text-sm text-gray-600">UK, 2025</p>
          </div>
        </div>
      </div>

      {/* Review 3 */}
      <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-teal-100/50 shadow-lg hover:shadow-xl transition-shadow duration-500">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-6 italic">
          "The perfect escape. Serene surroundings, exceptional hospitality, and every detail thoughtfully curated. We'll be back soon!"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">🌴</div>
          <div>
            <p className="font-semibold text-teal-950">Elena Rossi</p>
            <p className="text-sm text-gray-600">Italy, 2025</p>
          </div>
        </div>
      </div>

    </div>

    {/* Optional CTA */}
    <div className="text-center">
      <p className="text-gray-600 mb-6">Read more reviews on</p>
      <div className="flex justify-center gap-6">
        <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-emerald-700 font-medium">TripAdvisor</a>
        <a href="https://www.booking.com/Share-GP8uvT" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-emerald-700 font-medium">Booking.com</a>
      </div>
    </div>
  </div>
</section>

{/* Compact & Creative FAQ Section - Tropical Minimalist Style */}
<section className="relative py-16 bg-white overflow-hidden">
  {/* Subtle Creative Background Element */}
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200 to-teal-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  </div>

  <div className="max-w-4xl mx-auto px-6 relative z-10">
    {/* Compact Header with Creative Touch */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] font-light text-neutral-900 mb-3">
        FAQ
      </h2>
      <p className="text-base text-neutral-600 max-w-xl mx-auto">
        Quick answers for your Ceylon Heart Villa stay
      </p>
      <div className="mt-6 flex justify-center">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
      </div>
    </div>

    {/* Compact Accordion - Smaller Padding, Tighter Spacing */}
    <div className="space-y-3">
      
      {/* Reusable Accordion Item Pattern */}
      <details className="group bg-neutral-50/80 rounded-xl border border-neutral-200 overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer py-4 px-6 list-none">
          <h3 className="text-lg font-[var(--font-serif)] font-light text-neutral-900 pr-6">
            What are the check-in and check-out times?
          </h3>
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
            <svg className="w-4 h-4 text-teal-700 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed">
          <p>Check-in: <strong>2:00 PM</strong> | Check-out: <strong>11:00 AM</strong>. Early/late options available on request.</p>
        </div>
      </details>

      <details className="group bg-neutral-50/80 rounded-xl border border-neutral-200 overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer py-4 px-6 list-none">
          <h3 className="text-lg font-[var(--font-serif)] font-light text-neutral-900 pr-6">
            How many guests can the villa accommodate?
          </h3>
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
            <svg className="w-4 h-4 text-teal-700 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed">
          <p>Up to <strong>6-8 guests</strong>. Flexible bedding for families or groups – let us know your needs.</p>
        </div>
      </details>

      <details className="group bg-neutral-50/80 rounded-xl border border-neutral-200 overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer py-4 px-6 list-none">
          <h3 className="text-lg font-[var(--font-serif)] font-light text-neutral-900 pr-6">
            Do you provide airport transportation?
          </h3>
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
            <svg className="w-4 h-4 text-teal-700 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed">
          <p>Yes – private transfers from Colombo Airport (~2.5 hours). Book in advance for comfort.</p>
        </div>
      </details>

      <details className="group bg-neutral-50/80 rounded-xl border border-neutral-200 overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer py-4 px-6 list-none">
          <h3 className="text-lg font-[var(--font-serif)] font-light text-neutral-900 pr-6">
            Are meals included or can you arrange catering?
          </h3>
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
            <svg className="w-4 h-4 text-teal-700 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed">
          <p>Not included, but our private chef offers Sri Lankan & international dishes, cooking classes, or self-catering.</p>
        </div>
      </details>

      <details className="group bg-neutral-50/80 rounded-xl border border-neutral-200 overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer py-4 px-6 list-none">
          <h3 className="text-lg font-[var(--font-serif)] font-light text-neutral-900 pr-6">
            Is the villa child-friendly and pet-friendly?
          </h3>
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
            <svg className="w-4 h-4 text-teal-700 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed">
          <p><strong>Child-friendly:</strong> Yes! Cribs & amenities on request. <strong>Pets:</strong> Case-by-case with approval.</p>
        </div>
      </details>

      <details className="group bg-neutral-50/80 rounded-xl border border-neutral-200 overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer py-4 px-6 list-none">
          <h3 className="text-lg font-[var(--font-serif)] font-light text-neutral-900 pr-6">
            What is your cancellation policy?
          </h3>
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
            <svg className="w-4 h-4 text-teal-700 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed">
          <p>30+ days: full refund | 15-30 days: 50% | 15 days: future stay credit. Flexible for emergencies.</p>
        </div>
      </details>

      <details className="group bg-neutral-50/80 rounded-xl border border-neutral-200 overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer py-4 px-6 list-none">
          <h3 className="text-lg font-[var(--font-serif)] font-light text-neutral-900 pr-6">
            What activities and attractions are nearby?
          </h3>
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
            <svg className="w-4 h-4 text-teal-700 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed">
          <p>Unawatuna Beach (walk), Galle Fort (5 min drive), whale watching, safaris & more. We’ll tailor recommendations.</p>
        </div>
      </details>

      <details className="group bg-neutral-50/80 rounded-xl border border-neutral-200 overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer py-4 px-6 list-none">
          <h3 className="text-lg font-[var(--font-serif)] font-light text-neutral-900 pr-6">
            How secure is the property?
          </h3>
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
            <svg className="w-4 h-4 text-teal-700 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed">
          <p>24/7 staff, secure locks, in-room safe, well-lit grounds in a safe neighborhood.</p>
        </div>
      </details>
    </div>


  </div>
</section>

   
    </div>
  );
}