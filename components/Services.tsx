'use client';

import ScrollReveal from './ScrollReveal';

// Iconos SVG corporativos
const AgentIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const VoiceIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const AutomationIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IntegrationIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ConsultingIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: <AgentIcon />,
      title: 'Agentes Conversacionales',
      description:
        'Diseñamos chatbots y asistentes virtuales inteligentes para mejorar la atención al cliente, automatizar ventas y resolver consultas 24/7.',
      features: ['Atención al cliente', 'Automatización de ventas', 'Soporte multicanal'],
    },
    {
      icon: <VoiceIcon />,
      title: 'Agentes de Voz',
      description:
        'Creamos asistentes de voz con IA para gestionar llamadas, cualificar leads y ofrecer soporte telefónico automatizado.',
      features: ['Gestión de llamadas', 'Cualificación de leads', 'IVR inteligente'],
    },
    {
      icon: <AutomationIcon />,
      title: 'Automatización con IA',
      description:
        'Optimizamos tus procesos empresariales mediante automatización inteligente. Reduce costes operativos y libera tiempo de tu equipo.',
      features: ['Optimización de procesos', 'Reducción de costes', 'Flujos automatizados'],
    },
    {
      icon: <IntegrationIcon />,
      title: 'Integración de Sistemas',
      description:
        'Conectamos ChatGPT y otras plataformas de IA con tus sistemas empresariales (CRM, ERP, bases de datos) para escalar capacidades.',
      features: ['ChatGPT empresarial', 'Conexión con CRM/ERP', 'APIs personalizadas'],
    },
    {
      icon: <DocumentIcon />,
      title: 'Digitalización de Documentos',
      description:
        'Automatizamos la lectura y procesamiento de documentos e imágenes con OCR e IA para optimizar tareas y ganar eficiencia.',
      features: ['OCR inteligente', 'Extracción de datos', 'Procesamiento automático'],
    },
    {
      icon: <ConsultingIcon />,
      title: 'Consultoría en IA',
      description:
        'Te ayudamos a identificar oportunidades de mejora y diseñamos la estrategia de IA adecuada para tu negocio.',
      features: ['Análisis de procesos', 'Estrategia de IA', 'Roadmap de implementación'],
    },
  ];

  return (
    <section id="servicios" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-node-blue/10 border border-node-blue/30 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-node-blue font-medium">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
            Transformamos operaciones con{' '}
            <span className="text-node-blue">Inteligencia Artificial</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto px-4">
            Mejoramos tu productividad, reducimos costes operativos y escalamos 
            las capacidades de tu equipo mediante soluciones de IA a medida.
          </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
              className="h-full"
            >
              <div className="group relative h-full p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-node-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-node-blue/10 hover:-translate-y-1">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-node-blue/0 via-node-blue/0 to-node-blue/0 group-hover:from-node-blue/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-node-blue/10 border border-node-blue/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-white/60">
                      <svg
                        className="w-4 h-4 text-node-blue mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="fade" delay={800}>
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-4">
          <a
            href="#contacto"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-node-blue hover:bg-node-blue/80 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-node-blue/50"
          >
            <span>Cuéntanos tu proyecto</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
