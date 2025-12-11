'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil cuando se hace clic en un enlace
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-node-blue/20'
          : 'bg-black/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center relative z-10">
            <Image
              src="/isotipo.png"
              alt="Node Solutions"
              width={700}
              height={186}
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain hover:opacity-80 transition-opacity"
              priority
            />
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#inicio"
              className="text-sm font-medium text-white/80 hover:text-node-blue transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-white/80 hover:text-node-blue transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-node-blue hover:bg-node-blue/80 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-node-blue/50"
            >
              Contacto
            </a>
          </div>

          {/* Botón hamburguesa móvil */}
          <button 
            className="md:hidden relative z-50 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-black/95 backdrop-blur-lg border-b border-node-blue/20">
          <a
            href="#inicio"
            onClick={closeMobileMenu}
            className="block px-4 py-3 text-base font-medium text-white/80 hover:text-node-blue hover:bg-white/5 rounded-lg transition-all"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            onClick={closeMobileMenu}
            className="block px-4 py-3 text-base font-medium text-white/80 hover:text-node-blue hover:bg-white/5 rounded-lg transition-all"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            onClick={closeMobileMenu}
            className="block px-4 py-3 bg-node-blue hover:bg-node-blue/80 text-white font-medium rounded-lg transition-all text-center"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

