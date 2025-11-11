'use client';

import ScrollReveal from './ScrollReveal';

// Iconos SVG corporativos
const ChatBotIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
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

const VoiceIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const KnowledgeIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CustomIcon = () => (
  <svg className="w-8 h-8 text-node-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: <ChatBotIcon />,
      title: 'Agentes de IA',
      description:
        'Desarrollamos chatbots inteligentes y agentes virtuales personalizados que automatizan la atención al cliente y optimizan procesos empresariales.',
      features: ['Chatbots conversacionales', 'Asistentes virtuales', 'Integración multicanal'],
    },
    {
      icon: <AutomationIcon />,
      title: 'Automatización Inteligente',
      description:
        'Implementamos soluciones de automatización con IA y OCR para optimizar procesos repetitivos y aumentar la eficiencia operativa.',
      features: ['Automatización de procesos', 'OCR avanzado', 'Flujos inteligentes'],
    },
    {
      icon: <IntegrationIcon />,
      title: 'Integración de Sistemas',
      description:
        'Conectamos tus sistemas existentes con IA para crear ecosistemas inteligentes que mejoran la toma de decisiones y productividad.',
      features: ['APIs inteligentes', 'Sincronización de datos', 'Integración legacy'],
    },
    {
      icon: <VoiceIcon />,
      title: 'Agentes de Voz',
      description:
        'Creamos asistentes de voz con IA para atención telefónica automatizada, gestión de llamadas y soporte al cliente 24/7.',
      features: ['IVR inteligente', 'Reconocimiento de voz', 'Síntesis de voz natural'],
    },
    {
      icon: <KnowledgeIcon />,
      title: 'RAG & Conocimiento',
      description:
        'Desarrollamos sistemas RAG (Retrieval-Augmented Generation) que permiten a los agentes de IA acceder y utilizar el conocimiento de tu empresa.',
      features: ['Bases de conocimiento', 'Búsqueda semántica', 'Respuestas contextuales'],
    },
    {
      icon: <CustomIcon />,
      title: 'Soluciones a Medida',
      description:
        'Diseñamos e implementamos soluciones personalizadas de IA adaptadas a las necesidades específicas de tu negocio.',
      features: ['Consultoría especializada', 'Desarrollo custom', 'Soporte continuo'],
    },
  ];

  return (
    <section id="servicios" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-node-blue/10 border border-node-blue/30 rounded-full mb-6">
            <span className="text-sm text-node-blue font-medium">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Soluciones de IA que{' '}
            <span className="text-node-blue">transforman negocios</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Implementamos tecnología de inteligencia artificial de vanguardia para
            resolver problemas reales y generar valor tangible en tu empresa.
          </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-node-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-node-blue/10 hover:-translate-y-1">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-node-blue/0 via-node-blue/0 to-node-blue/0 group-hover:from-node-blue/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-node-blue/10 border border-node-blue/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-white/60">
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
          <div className="mt-20 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-node-blue hover:bg-node-blue/80 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-node-blue/50"
          >
            <span>Descubre cómo podemos ayudarte</span>
            <svg
              className="w-5 h-5 ml-2"
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


