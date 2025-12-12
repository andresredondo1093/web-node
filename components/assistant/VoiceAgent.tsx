'use client';

import { useState, useRef, useEffect } from 'react';

// Tipos para Ultravox
type UltravoxSessionStatus = 
  | 'disconnected' 
  | 'disconnecting' 
  | 'connecting' 
  | 'idle' 
  | 'listening' 
  | 'thinking' 
  | 'speaking';

interface Transcript {
  text: string;
  isFinal: boolean;
  speaker: 'user' | 'agent';
  medium: 'voice' | 'text';
}

interface VoiceAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoiceAgent({ isOpen, onClose }: VoiceAgentProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [status, setStatus] = useState<UltravoxSessionStatus>('disconnected');
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sessionRef = useRef<any>(null);
  const transcriptsEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll transcripts
  useEffect(() => {
    transcriptsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcripts]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sessionRef.current) {
        sessionRef.current.leaveCall();
      }
    };
  }, []);

  const startCall = async () => {
    setIsConnecting(true);
    setError(null);
    setTranscripts([]);

    try {
      // 1. Crear la llamada via API route
      const response = await fetch('/api/voice/create-call', {
        method: 'POST',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear la llamada');
      }

      const { joinUrl } = await response.json();

      // 2. Importar dinámicamente el SDK
      const { UltravoxSession } = await import('ultravox-client');

      // 3. Crear sesión y configurar listeners
      const session = new UltravoxSession();
      sessionRef.current = session;

      // Listener de estado
      session.addEventListener('status', () => {
        const newStatus = session.status as UltravoxSessionStatus;
        setStatus(newStatus);
        
        // Detectar cuando Ultravox cuelga la llamada (por inactividad u otra razón)
        if (newStatus === 'disconnected' && sessionRef.current) {
          console.log('Llamada finalizada por Ultravox');
          sessionRef.current = null;
          setIsCallActive(false);
        }
      });

      // Listener de transcripciones
      session.addEventListener('transcripts', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newTranscripts = session.transcripts.map((t: any) => ({
          text: t.text,
          isFinal: t.isFinal,
          speaker: t.speaker,
          medium: t.medium,
        }));
        setTranscripts(newTranscripts);
      });

      // 4. Unirse a la llamada
      session.joinCall(joinUrl);
      setIsCallActive(true);

    } catch (err: unknown) {
      console.error('Error starting call:', err);
      setError(err instanceof Error ? err.message : 'Error al iniciar la llamada');
    } finally {
      setIsConnecting(false);
    }
  };

  const endCall = async () => {
    if (sessionRef.current) {
      try {
        await sessionRef.current.leaveCall();
      } catch (err) {
        console.error('Error leaving call:', err);
      }
      sessionRef.current = null;
    }
    setIsCallActive(false);
    setStatus('disconnected');
  };

  const handleClose = () => {
    if (isCallActive) {
      endCall();
    }
    onClose();
  };

  // Obtener texto e icono del estado
  const getStatusInfo = () => {
    switch (status) {
      case 'connecting':
        return { text: 'Conectando...', color: 'text-yellow-400' };
      case 'idle':
        return { text: 'Conectado', color: 'text-green-400' };
      case 'listening':
        return { text: 'Escuchando...', color: 'text-node-blue' };
      case 'thinking':
        return { text: 'Pensando...', color: 'text-purple-400' };
      case 'speaking':
        return { text: 'Hablando...', color: 'text-green-400' };
      case 'disconnecting':
        return { text: 'Desconectando...', color: 'text-yellow-400' };
      default:
        return { text: 'Desconectado', color: 'text-white/40' };
    }
  };

  const statusInfo = getStatusInfo();

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 inset-x-4 sm:inset-x-auto sm:right-6 sm:left-auto z-[9999] sm:w-[360px] animate-fade-in">
      <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl shadow-node-blue/20 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-node-blue/20 to-chip-blue/20 px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-2 border-node-blue/50 overflow-hidden">
                <img 
                  src="/voice-avatar.png" 
                  alt="Asistente"
                  className="w-full h-full object-cover"
                />
              </div>
              {isCallActive && (
                <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-[#1a1a1a] ${
                  status === 'speaking' ? 'bg-green-500 animate-pulse' : 
                  status === 'listening' ? 'bg-node-blue animate-pulse' : 
                  status === 'thinking' ? 'bg-purple-400 animate-pulse' : 
                  'bg-green-500'
                }`} />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium text-sm">Sofía</h3>
              <p className={`text-xs ${statusInfo.color}`}>{statusInfo.text}</p>
            </div>
            <button
              onClick={handleClose}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col" style={{ height: '380px' }}>
          {!isCallActive ? (
            // Vista inicial - Iniciar llamada
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-node-blue to-chip-blue rounded-full blur-lg opacity-40 scale-110" />
                <div className="relative w-28 h-28 rounded-full border-4 border-node-blue/50 overflow-hidden">
                  <img 
                    src="/voice-avatar.png" 
                    alt="Asistente de voz"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 text-center">
                👋 ¡Hola! Soy Sofía
              </h3>
              <p className="text-white/60 text-sm text-center mb-6">
                Tu asistente de <span className="text-node-blue font-medium">Node Solutions</span>
              </p>

              {error && (
                <p className="text-red-400 text-xs text-center mb-4 px-4">{error}</p>
              )}

              <button
                onClick={startCall}
                disabled={isConnecting}
                className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isConnecting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
                    <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-white/40 text-xs mt-4">
                {isConnecting ? 'Conectando...' : 'Pulsa para iniciar la llamada'}
              </p>
            </div>
          ) : (
            // Vista de llamada activa
            <>
              {/* Área de transcripciones */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {transcripts.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white/30 text-sm">Esperando conversación...</p>
                  </div>
                ) : (
                  transcripts.filter(t => t.isFinal).map((transcript, index) => (
                    <div
                      key={index}
                      className={`flex ${transcript.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                          transcript.speaker === 'user'
                            ? 'bg-gradient-to-r from-node-blue to-chip-blue text-white'
                            : 'bg-white/10 text-white/90'
                        }`}
                      >
                        {transcript.text}
                      </div>
                    </div>
                  ))
                )}
                <div ref={transcriptsEndRef} />
              </div>

              {/* Indicador visual de estado */}
              <div className="px-4 py-2 border-t border-white/5">
                <div className="flex items-center justify-center gap-2">
                  {status === 'listening' && (
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-4 bg-node-blue rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-6 bg-node-blue rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-4 bg-node-blue rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                    </div>
                  )}
                  {status === 'speaking' && (
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
                      <span className="w-1.5 h-4 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                      <span className="w-1.5 h-6 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      <span className="w-1.5 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                    </div>
                  )}
                  {status === 'thinking' && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Botón colgar */}
              <div className="px-4 py-4 border-t border-white/10">
                <button
                  onClick={endCall}
                  className="w-full py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 font-medium text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                  Finalizar llamada
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

