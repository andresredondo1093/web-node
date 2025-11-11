'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-node-blue/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center ml-4 md:ml-8 lg:ml-12">
            <Image
              src="/isotipo.png"
              alt="Node Solutions"
              width={700}
              height={186}
              className="h-16 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity"
              priority
            />
          </a>

          {/* Menú */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Menú móvil - botón hamburguesa */}
          <button className="md:hidden text-white">
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
          </button>
        </div>
      </div>
    </nav>
  );
}


