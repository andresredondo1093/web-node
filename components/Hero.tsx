'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido de texto */}
          <ScrollReveal direction="left">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Logo para móvil - Solo visible en pantallas pequeñas */}
            <div className="lg:hidden flex justify-center mb-8">
              <div className="relative">
                {/* Círculo de fondo con efecto glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-node-blue/20 rounded-full blur-2xl animate-pulse" />
                </div>
                {/* Logo */}
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Node Solutions"
                    width={280}
                    height={280}
                    className="w-56 h-56 sm:w-64 sm:h-64 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Título principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
              <span className="text-white">Implementando</span>{' '}
              <span className="text-node-blue">IA de verdad</span>{' '}
              <span className="text-white">a empresas reales</span>
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Transformamos tu negocio con soluciones de Inteligencia Artificial
              a medida. Automatización, agentes inteligentes y optimización de
              procesos que generan resultados reales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-node-blue hover:bg-node-blue/80 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-node-blue/50 text-center"
              >
                Solicitar Consulta
              </a>
              <a
                href="#servicios"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 text-center"
              >
                Ver Servicios
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-node-blue">100+</div>
                <div className="text-xs sm:text-sm text-white/60">Proyectos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-node-blue">50+</div>
                <div className="text-xs sm:text-sm text-white/60">Clientes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-node-blue">98%</div>
                <div className="text-xs sm:text-sm text-white/60">Satisfacción</div>
              </div>
            </div>
            </div>
          </ScrollReveal>

          {/* Imagen/Ilustración */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative hidden lg:block">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {/* Círculo de fondo con efecto glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-node-blue/20 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Logo central con nombre */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Node Solutions"
                  width={320}
                  height={320}
                  className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Elementos flotantes vacíos */}
              <div className="absolute top-20 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-node-blue/10 backdrop-blur-sm border border-node-blue/30 rounded-2xl animate-float shadow-lg shadow-node-blue/10" />
              
              <div className="absolute bottom-32 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-chip-blue/10 backdrop-blur-sm border border-chip-blue/30 rounded-2xl animate-float-delayed shadow-lg shadow-chip-blue/10" />
              
              <div className="absolute top-40 left-20 w-10 h-10 sm:w-12 sm:h-12 bg-light-violet/10 backdrop-blur-sm border border-light-violet/30 rounded-xl animate-float shadow-lg shadow-light-violet/10" />
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-node-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}


