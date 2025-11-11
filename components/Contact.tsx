'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simular envío de formulario
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Información de contacto */}
          <ScrollReveal direction="left">
            <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-node-blue/10 border border-node-blue/30 rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm text-node-blue font-medium">
                  Hablemos
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6">
                ¿Listo para transformar tu empresa con{' '}
                <span className="text-node-blue">IA?</span>
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Cuéntanos sobre tu proyecto y descubre cómo nuestras soluciones
                de inteligencia artificial pueden llevar tu negocio al siguiente
                nivel.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-3 sm:space-y-4">
              <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-node-blue/10 border border-node-blue/30 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-sm sm:text-base font-semibold mb-1">Email</h3>
                    <p className="text-white/70 text-sm sm:text-base break-all">contacto@nodesolutions.es</p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-node-blue/10 border border-node-blue/30 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-sm sm:text-base font-semibold mb-1">
                      Horario de atención
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base">
                      Lunes a Viernes: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-node-blue/10 border border-node-blue/30 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-sm sm:text-base font-semibold mb-1">
                      Respuesta rápida
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base">
                      Te respondemos en menos de 24 horas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>

          {/* Formulario */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
            <div className="relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-node-blue to-chip-blue opacity-20 blur-xl" />

              <form onSubmit={handleSubmit} className="relative space-y-4 sm:space-y-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-white mb-2"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-node-blue focus:ring-1 focus:ring-node-blue transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-white mb-2"
                  >
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-node-blue focus:ring-1 focus:ring-node-blue transition-all"
                    placeholder="tu@empresa.com"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs sm:text-sm font-medium text-white mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-node-blue focus:ring-1 focus:ring-node-blue transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-white mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-node-blue focus:ring-1 focus:ring-node-blue transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-white mb-2"
                  >
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-node-blue focus:ring-1 focus:ring-node-blue transition-all resize-none"
                    placeholder="Describe qué necesitas y cómo podemos ayudarte..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-node-blue hover:bg-node-blue/80 disabled:bg-node-blue/50 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-node-blue/50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {/* Success message */}
                {status === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm text-center">
                      ¡Mensaje enviado con éxito! Te contactaremos pronto.
                    </p>
                  </div>
                )}
              </form>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


