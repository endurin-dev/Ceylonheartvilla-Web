"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/accommodation", label: "Accommodation" },
    { href: "/nearby-destinations", label: "Attractions" },
    { href: "/yoga-space", label: "Yoga Space" },
    { href: "/activities", label: "Activities" },
    { href: "/contact-us", label: "Contact Us", highlight: true },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/ceylonheartvilla", aria: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.746 1.688 4.849 4.85.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.103 3.162-1.597 4.702-4.849 4.85-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.746-1.688-4.849-4.85-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.103-3.162 1.597-4.702 4.849-4.85 1.266-.058 1.646-.07 4.85-.07zm0 2.163c-3.259 0-3.667.014-4.947.072-2.638.118-3.967 1.594-4.083 3.967-.058 1.28-.072 1.689-.072 4.947s.014 3.667.072 4.947c.116 2.373 1.445 3.849 4.083 3.967 1.28.058 1.689.072 4.947.072s3.667-.014 4.947-.072c2.638-.118 3.967-1.594 4.083-3.967.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.116-2.373-1.445-3.849-4.083-3.967-1.28-.058-1.689-.072-4.947-.072zm0 3.837a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm6.406-6.406a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" },
    { href: "https://www.facebook.com/ceylonheartvilla", aria: "Facebook", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.713h2.54V9.845c0-2.512 1.491-3.902 3.774-3.902 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.713h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { href: "https://www.tripadvisor.com", aria: "TripAdvisor", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-11c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm5 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHide(true);
      } else {
        setHide(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        hide ? "-translate-y-full" : "translate-y-0"
      } bg-black/40 backdrop-blur-3xl shadow-2xl border-b border-white/20`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
    <img
      src="/images/logo.png"
      alt="Logo"
      className="h-10 w-auto object-contain"
    />
  </div>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <svg
              className="w-10 h-10 text-amber-400 group-hover:text-amber-300 transition-colors duration-300 drop-shadow-md"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.67C7.58 17.2 9.7 12 16 9.71V12h2V4h-8v2h4.25c-.19.14-.37.29-.55.45L17 8zm-2 12c-2.76 0-5-2.24-5-5 0-2.64 2.05-4.78 4.65-4.96C12.28 13.07 11 15.38 11 18c0 3.31 2.69 6 6 6 1.39 0 2.67-.48 3.69-1.28C19.44 21.6 17.83 20 15 20z" />
            </svg>
            <div className="absolute -inset-1 bg-amber-400/30 rounded-full blur-xl group-hover:bg-amber-400/40 transition-all duration-300"></div>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-widest text-white group-hover:text-amber-50 transition-colors duration-300 drop-shadow">
              Ceylon Heart Villa
            </span>
            <span className="text-xs text-amber-200 font-medium tracking-wider opacity-90">
              Unawatuna
            </span>
          </div>
        </Link>

        {/* Desktop Navigation + Social */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 drop-shadow ${
                    link.highlight
                      ? "text-amber-400 font-semibold hover:text-amber-300"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-8 border-l border-white/30">
            {socialLinks.map((social) => (
              <a
                key={social.aria}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.aria}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 drop-shadow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-200 hover:text-amber-400 p-2 rounded-md hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
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
        <div className="lg:hidden bg-black/60 backdrop-blur-3xl border-t border-white/20">
          <ul className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-base font-medium tracking-wide transition-colors drop-shadow ${
                    link.highlight
                      ? "text-amber-400 font-semibold"
                      : "text-gray-200 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 px-6 pb-6 pt-4 border-t border-white/20">
            {socialLinks.map((social) => (
              <a
                key={social.aria}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.aria}
                className="text-gray-300 hover:text-amber-400 transition-colors drop-shadow"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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