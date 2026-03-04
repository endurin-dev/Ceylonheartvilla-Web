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
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100047660652440",
      aria: "Facebook",
      icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.713h2.54V9.845c0-2.512 1.491-3.902 3.774-3.902 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.713h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    // Instagram - update href if you have an official account
    // Example: "https://www.instagram.com/sunvillaunawatuna" or similar
    {
      href: "#", // ← REPLACE WITH ACTUAL INSTAGRAM URL
      aria: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.746 1.688 4.849 4.85.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.103 3.162-1.597 4.702-4.849 4.85-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.746-1.688-4.849-4.85-.058-1.266-.07-1.646-.07-4.85s.012 3.584.07-4.85c.103-3.162 1.597-4.702 4.849-4.85 1.266-.058 1.646-.07 4.85-.07zm0 2.163c-3.259 0-3.667.014-4.947.072-2.638.118-3.967 1.594-4.083 3.967-.058 1.28-.072 1.689-.072 4.947s.014 3.667.072 4.947c.116 2.373 1.445 3.849 4.083 3.967 1.28.058 1.689.072 4.947.072s3.667-.014 4.947-.072c2.638-.118 3.967-1.594 4.083-3.967.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.116-2.373-1.445-3.849-4.083-3.967-1.28-.058-1.689-.072-4.947-.072zm0 3.837a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm6.406-6.406a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z",
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
    <>
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
                alt="Sun Villa Unawatuna Logo"
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
                Sun Villa Unawatuna
              </span>
              <span className={`text-xs font-medium tracking-wider opacity-90 transition-colors duration-300 ${
                isScrolledDown ? "text-emerald-200" : "text-emerald-700"
              }`}>
                Unawatuna
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <li key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                      isScrolledDown
                        ? "text-gray-100 hover:text-white"
                        : "text-gray-800 hover:text-gray-900"
                    }`}
                  >
                    {link.isHome ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      </svg>
                    ) : (
                      link.label
                    )}
                  </Link>

                  {index < navLinks.length - 1 && (
                    <div className="h-5 w-px bg-gradient-to-b from-transparent via-gray-400/30 to-transparent mx-2" />
                  )}
                </li>
              ))}
            </ul>

            {/* Social Icons - at the end of the nav bar */}
            <div className="flex items-center gap-4 ml-8 pl-6 border-l transition-colors duration-300"
              style={{ borderColor: isScrolledDown ? "rgba(110, 231, 183, 0.3)" : "rgba(110, 231, 183, 0.4)" }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.aria}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.aria}
                  className={`transition-all duration-300 hover:scale-110 ${
                    isScrolledDown 
                      ? "text-emerald-200 hover:text-emerald-100" 
                      : "text-emerald-700 hover:text-emerald-900"
                  }`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
              ))}
            </ul>

            {/* Social icons in mobile menu */}
            <div className="flex justify-center gap-10 px-6 pb-8 pt-4 border-t transition-colors duration-300"
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
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* WhatsApp Floating Action Button (kept from previous version) */}
      <a
        href="https://wa.me/94769459595"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.044h-.004c-1.575-.001-3.022-.603-4.089-1.595l-.293-.175-2.917.766.766-2.843-.18-.292c-1.014-1.65-1.64-3.618-1.64-5.9 0-6.082 4.953-11.03 11.043-11.03 2.952 0 5.732 1.152 7.82 3.243 2.09 2.09 3.241 4.87 3.241 7.82-.001 6.083-4.95 11.031-11.042 11.031m4.346-17.715c-3.528 0-6.427 1.19-8.74 3.144l-.292.291c-2.049 2.05-3.178 4.777-3.178 7.682 0 2.905 1.129 5.632 3.178 7.682l.291.292c2.313 2.313 5.212 3.503 8.74 3.503 3.528 0 6.427-1.19 8.74-3.144l-.292-.291c2.049-2.05 3.178-4.777 3.178-7.682s-1.129-5.632-3.178-7.682c-2.313-2.313-5.212-3.503-8.74-3.503" />
            </svg>
          </div>
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </a>
    </>
  );
}