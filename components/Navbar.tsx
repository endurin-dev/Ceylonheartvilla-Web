"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", isHome: true },
    { href: "/accommodation", label: "Accommodation" },
    { href: "/nearby-destinations", label: "Attractions" },
    { href: "/yoga-space", label: "Yoga Space" },
    { href: "/activities", label: "Activities" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/offers", label: "Special Offers", isSpecial: true },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/ceylonheartvilla",
      aria: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.746 1.688 4.849 4.85.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.103 3.162-1.597 4.702-4.849 4.85-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.746-1.688-4.849-4.85-.058-1.266-.07-1.646-.07-4.85s.012 3.584.07-4.85c.103-3.162 1.597-4.702 4.849-4.85 1.266-.058 1.646-.07 4.85-.07zm0 2.163c-3.259 0-3.667.014-4.947.072-2.638.118-3.967 1.594-4.083 3.967-.058 1.28-.072 1.689-.072 4.947s.014 3.667.072 4.947c.116 2.373 1.445 3.849 4.083 3.967 1.28.058 1.689.072 4.947.072s3.667-.014 4.947-.072c2.638-.118 3.967-1.594 4.083-3.967.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.116-2.373-1.445-3.849-4.083-3.967-1.28-.058-1.689-.072-4.947-.072zm0 3.837a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm6.406-6.406a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z",
    },
    {
      href: "https://www.facebook.com/ceylonheartvilla",
      aria: "Facebook",
      icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.713h2.54V9.845c0-2.512 1.491-3.902 3.774-3.902 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.713h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    {
      href: "https://www.booking.com/Share-FhBlleM",
      aria: "Booking.com",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-11c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm5 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHide(true);
      } else {
        setHide(false);
      }

      if (currentScrollY > lastScrollY) {
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsScrolledDown(false);
      } else if (currentScrollY <= 100) {
        setIsScrolledDown(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        hide ? "-translate-y-full" : "translate-y-0"
      } 
      ${isScrolledDown 
        ? "bg-emerald-800/20 backdrop-blur-3xl border-b border-emerald-600/30" 
        : "bg-white/80 backdrop-blur-3xl border-b border-emerald-200/50 shadow-lg"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/images/logo.png"
              alt="Ceylon Heart Villa Logo"
              className="w-10 h-10 object-contain drop-shadow-md group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className={`absolute -inset-1 rounded-full blur-xl transition-all duration-300 ${
              isScrolledDown 
                ? "bg-emerald-400/30 group-hover:bg-emerald-400/40" 
                : "bg-emerald-600/40 group-hover:bg-emerald-600/50"
            }`} />
          </div>

          <div className="flex flex-col leading-tight">
            <span className={`text-xl font-bold tracking-widest transition-colors duration-300 drop-shadow ${
              isScrolledDown 
                ? "text-white group-hover:text-emerald-50" 
                : "text-gray-900 group-hover:text-emerald-800"
            }`}>
              Ceylon Heart Villa
            </span>
            <span className={`text-xs font-medium tracking-wider opacity-90 transition-colors duration-300 ${
              isScrolledDown ? "text-emerald-200" : "text-emerald-700"
            }`}>
              Unawatuna
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Even tighter spacing */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center">
            {navLinks.map((link, index) => (
              <li key={link.href} className="flex items-center">
                {link.isSpecial ? (
                  <Link
                    href={link.href}
                    className="relative inline-flex items-center gap-2 px-5 py-2.5 mx-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold text-xs tracking-wide rounded-full shadow-lg hover:from-red-600 hover:to-rose-700 hover:shadow-xl transition-all duration-300"
                  >
                    {link.label}
                    <span className="absolute -top-1 -right-3 flex items-center gap-1 px-2 py-0.5 text-xs font-bold uppercase rounded-full bg-white text-red-600 shadow-md">
                      <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Hot!
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-2.5 py-2 text-xs font-medium tracking-wider transition-all duration-300 ${
                      isScrolledDown
                        ? "text-gray-100 hover:text-white"
                        : "text-gray-800 hover:text-gray-900"
                    }`}
                  >
                    {link.isHome ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      </svg>
                    ) : (
                      link.label
                    )}
                  </Link>
                )}

                {/* Faded Separator - reduced spacing */}
                {index < navLinks.length - 1 && !link.isSpecial && (
                  <div className={`h-5 w-px bg-gradient-to-b from-transparent via-gray-400/30 to-transparent ${
                    index === 0 ? "mx-1.5" : "mx-2"
                  }`} />
                )}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-6 pl-6 border-l transition-colors duration-300"
            style={{ borderColor: isScrolledDown ? "rgba(110, 231, 183, 0.3)" : "rgba(110, 231, 183, 0.4)" }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.aria}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.aria}
                className={`transition-colors duration-300 ${
                  isScrolledDown 
                    ? "text-emerald-200 hover:text-emerald-300" 
                    : "text-emerald-700 hover:text-emerald-900"
                }`}
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
            isScrolledDown
              ? "text-emerald-200 hover:text-white hover:bg-emerald-700/20"
              : "text-emerald-700 hover:text-emerald-900 hover:bg-emerald-100"
          }`}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden transition-all duration-300 border-t shadow-2xl ${
          isScrolledDown
            ? "bg-emerald-900/30 backdrop-blur-3xl border-emerald-600/40"
            : "bg-white/90 backdrop-blur-3xl border-emerald-200/50"
        }`}>
          <ul className="px-6 py-8 space-y-5">
            {navLinks.map((link) => (
              !link.isSpecial && (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-lg font-medium tracking-wide transition-colors flex items-center gap-3 ${
                      isScrolledDown
                        ? "text-white hover:text-emerald-100"
                        : "text-gray-900 hover:text-emerald-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.isHome ? (
                      <>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                        Home
                      </>
                    ) : (
                      link.label
                    )}
                  </Link>
                </li>
              )
            ))}
          </ul>

          <div className="px-6 pb-8">
            <Link
              href="/offers"
              className="relative block w-full text-center px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-lg rounded-full shadow-2xl hover:from-red-600 hover:to-rose-700 hover:shadow-3xl transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Special Offers
              <span className="absolute -top-2 -right-4 flex items-center gap-1.5 px-3 py-1 text-sm font-bold uppercase rounded-full bg-white text-red-600 shadow-md">
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Hot!
              </span>
            </Link>
          </div>

          <div className="flex justify-center gap-8 px-6 pb-8 pt-4 border-t transition-colors duration-300"
            style={{ borderColor: isScrolledDown ? "rgba(110, 231, 183, 0.3)" : "rgba(110, 231, 183, 0.4)" }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.aria}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.aria}
                className={`transition-colors ${
                  isScrolledDown 
                    ? "text-emerald-200 hover:text-emerald-300" 
                    : "text-emerald-700 hover:text-emerald-900"
                }`}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}