export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-[var(--font-serif)] font-light text-white mb-4">
              Ceylon Heart Villa
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              A serene luxury retreat nestled along Sri Lanka's southern coast, offering peace, privacy, and authentic island living.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="www.instagram.com/ceylon.heart"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-teal-500 hover:text-teal-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.69.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="TripAdvisor"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-teal-500 hover:text-teal-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-9h2v6h-2zm0-3h2v2h-2z"/>
                </svg>
              </a>
              <a
                href="https://www.booking.com/Share-AwP86RA"
                aria-label="Booking.com"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-teal-500 hover:text-teal-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 8.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-15 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9.2 3.2c-1.4-1.4-3.7-1.4-5.1 0-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4-.8-.8-.8-2.1 0-2.8.8-.8 2.1-.8 2.8 0 .4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0-.8.8-2.1.8-2.8 0-.8-.8-.8-2.1 0-2.8.8-.8 2.1-.8 2.8 0 .4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Accommodation</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">The Villa</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Yoga & Wellness Space</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Experiences & Activities</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Information</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Location & Directions</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Unawatuna, Southern Province, Sri Lanka
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:ceylonheart@gmail.com" className="hover:text-teal-400 transition-colors">
                  ceylonheart@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +94 71 739 3971 (WhatsApp available)
              </p>
            </div>

            {/* Small CTA */}
            <a
              href="https://www.booking.com/Share-AwP86RA"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-500 transition-all"
            >
              Book Your Stay
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <p>© {currentYear} Ceylon Heart Villa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}