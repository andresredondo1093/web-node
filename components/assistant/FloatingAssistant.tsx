'use client';

import { useState } from 'react';
import ChatWidget from './ChatWidget';
import VoiceAgent from './VoiceAgent';

export default function FloatingAssistant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  const handleChatClick = () => {
    setIsMenuOpen(false);
    setIsChatOpen(true);
  };

  const handleVoiceClick = () => {
    setIsMenuOpen(false);
    setIsVoiceOpen(true);
  };

  const handleMainButtonClick = () => {
    // Si el chat está abierto, cerrarlo
    if (isChatOpen) {
      setIsChatOpen(false);
      return;
    }
    // Si el modal de voz está abierto, cerrarlo
    if (isVoiceOpen) {
      setIsVoiceOpen(false);
      return;
    }
    // Si no, toggle del menú
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Menú de opciones */}
      {isMenuOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] flex flex-col gap-3 animate-fade-in">
          {/* Opción Chat */}
          <button
            onClick={handleChatClick}
            className="group flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-node-blue/50 hover:bg-[#2a2a2a] transition-all duration-300 shadow-lg shadow-black/20"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-node-blue to-chip-blue rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-medium text-sm">Agente Chat</p>
              <p className="text-white/50 text-xs">Escríbenos tu consulta</p>
            </div>
            <svg className="w-4 h-4 text-white/30 group-hover:text-node-blue transition-colors ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Opción Voz */}
          <button
            onClick={handleVoiceClick}
            className="group flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-node-blue/50 hover:bg-[#2a2a2a] transition-all duration-300 shadow-lg shadow-black/20"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-medium text-sm">Agente Voz</p>
              <p className="text-white/50 text-xs">Habla con nosotros</p>
            </div>
            <svg className="w-4 h-4 text-white/30 group-hover:text-green-500 transition-colors ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={handleMainButtonClick}
        className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isMenuOpen || isChatOpen || isVoiceOpen
            ? 'bg-white/10 border border-white/20 shadow-black/20'
            : 'bg-gradient-to-br from-node-blue to-chip-blue shadow-node-blue/40'
        }`}
        aria-label={isChatOpen ? 'Cerrar chat' : isVoiceOpen ? 'Cerrar voz' : isMenuOpen ? 'Cerrar menú' : 'Abrir asistente'}
      >
        {isMenuOpen || isChatOpen || isVoiceOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#1a1a1a] animate-pulse" />
          </>
        )}
      </button>

      {/* Widgets */}
      <ChatWidget isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
      <VoiceAgent isOpen={isVoiceOpen} onClose={() => setIsVoiceOpen(false)} />
    </>
  );
}

