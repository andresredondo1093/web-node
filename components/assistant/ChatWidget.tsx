'use client';

import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';

interface ChatWidgetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ChatWidget({ isOpen, onOpenChange }: ChatWidgetProps) {
  const chatInitialized = useRef(false);

  const openChat = () => {
    const chatWindow = document.querySelector('.chat-window') as HTMLElement;
    if (chatWindow) {
      chatWindow.style.display = 'flex';
      onOpenChange(true);
    }
  };

  const closeChat = () => {
    const chatWindow = document.querySelector('.chat-window') as HTMLElement;
    if (chatWindow) {
      chatWindow.style.display = 'none';
      onOpenChange(false);
    }
  };

  const initAndOpenChat = async () => {
    // Si ya está inicializado, solo mostramos la ventana del chat
    if (chatInitialized.current) {
      openChat();
      return;
    }

    const { createChat } = await import('@n8n/chat');
    
    createChat({
      webhookUrl: 'https://n8n-n8n.crt53y.easypanel.host/webhook/b3b9c94b-9f6e-4d53-9ab2-e6bcc388f704/chat',
      mode: 'window',
      showWelcomeScreen: true,
      initialMessages: [
        '¡Hola! 👋',
        'Soy el asistente de Node Solutions. ¿En qué puedo ayudarte hoy?'
      ],
      i18n: {
        en: {
          title: 'Node Solutions',
          subtitle: 'Asistente de IA',
          footer: '',
          getStarted: 'Iniciar conversación',
          inputPlaceholder: 'Escribe tu mensaje...',
          closeButtonTooltip: 'Cerrar chat',
        },
      },
    });
    
    chatInitialized.current = true;
    
    // Mostrar la ventana del chat directamente después de crearlo
    setTimeout(() => {
      openChat();
    }, 200);
  };

  // Exponer funciones para el componente padre
  useEffect(() => {
    if (isOpen && !chatInitialized.current) {
      initAndOpenChat();
    } else if (isOpen && chatInitialized.current) {
      openChat();
    } else if (!isOpen && chatInitialized.current) {
      closeChat();
    }
  }, [isOpen]);

  // Añadir estilos para ocultar el toggle de n8n y posicionar el chat correctamente
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'n8n-chat-custom-position';
    style.textContent = `
      /* Ocultar cualquier toggle de n8n */
      .n8n-chat > button:first-child,
      .chat-window-wrapper > button {
        display: none !important;
      }
      
      /* Posicionar el chat en la esquina inferior derecha */
      .chat-window {
        position: fixed !important;
        bottom: 90px !important;
        right: 24px !important;
        width: 420px !important;
        max-height: 600px !important;
        z-index: 99998 !important;
        border-radius: 12px !important;
        overflow: hidden !important;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
      }
      
      /* Responsive para móvil */
      @media (max-width: 480px) {
        .chat-window {
          width: calc(100vw - 32px) !important;
          max-width: 420px !important;
          right: 16px !important;
          left: 16px !important;
          bottom: 80px !important;
          max-height: 70vh !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.getElementById('n8n-chat-custom-position');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return (
    <style jsx global>{`
      /* Estilos personalizados para el chat de n8n */
      :root {
        --chat--color-primary: #0099cc;
        --chat--color-primary-shade-50: #007aa3;
        --chat--color-primary-shade-100: #005c7a;
        --chat--color-secondary: #206880;
        --chat--color-secondary-shade-50: #1a5266;
        --chat--color-white: #ffffff;
        --chat--color-light: #1a1a1a;
        --chat--color-light-shade-50: #2a2a2a;
        --chat--color-light-shade-100: #3a3a3a;
        --chat--color-medium: #4a4a4a;
        --chat--color-dark: #ffffff;
        --chat--color-disabled: #5a5a5a;
        --chat--color-typing: #0099cc;
        
        --chat--spacing: 1rem;
        --chat--border-radius: 0.75rem;
        --chat--transition-duration: 0.3s;
        
        --chat--window--width: 420px;
        --chat--window--height: 600px;
        
        --chat--header-height: auto;
        --chat--header--padding: 1rem;
        --chat--header--background: linear-gradient(135deg, #0099cc 0%, #206880 100%);
        --chat--header--color: #ffffff;
        --chat--header--border-bottom: none;
        
        --chat--heading--font-size: 1.25rem;
        --chat--subtitle--font-size: 0.875rem;
        --chat--subtitle--line-height: 1.5;
        
        --chat--textarea--height: 50px;
        
        --chat--message--font-size: 0.8125rem;
        --chat--message--padding: 0.625rem 0.875rem;
        --chat--message--border-radius: 0.75rem;
        --chat--message-line-height: 1.45;
        
        --chat--message--bot--background: #2a2a2a;
        --chat--message--bot--color: #ffffff;
        --chat--message--bot--border: 1px solid rgba(255, 255, 255, 0.1);
        
        --chat--message--user--background: linear-gradient(135deg, #0099cc 0%, #206880 100%);
        --chat--message--user--color: #ffffff;
        --chat--message--user--border: none;
        
        --chat--message--pre--background: #1a1a1a;
        
        --chat--toggle--background: linear-gradient(135deg, #0099cc 0%, #206880 100%);
        --chat--toggle--hover--background: linear-gradient(135deg, #007aa3 0%, #1a5266 100%);
        --chat--toggle--active--background: linear-gradient(135deg, #005c7a 0%, #143d4d 100%);
        --chat--toggle--color: #ffffff;
        --chat--toggle--size: 56px;
        
        --chat--input--background: #2a2a2a;
        --chat--input--border: 1px solid rgba(255, 255, 255, 0.1);
        --chat--input--border-active: 1px solid #0099cc;
        --chat--input--color: #ffffff;
        --chat--input--placeholder: rgba(255, 255, 255, 0.4);
        
        --chat--button--background: #0099cc;
        --chat--button--hover--background: #007aa3;
        --chat--button--active--background: #005c7a;
        --chat--button--color: #ffffff;
      }

      /* Ocultar el botón toggle de n8n */
      .n8n-chat__toggle,
      .n8n-chat [class*="toggle"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      /* Fondo del chat */
      .n8n-chat .chat-window,
      .n8n-chat__window {
        background: #1a1a1a !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        box-shadow: 0 25px 50px -12px rgba(0, 153, 204, 0.25) !important;
        z-index: 99999 !important;
        border-radius: 12px !important;
        overflow: hidden !important;
      }

      /* Área de mensajes */
      .n8n-chat .chat-messages-list,
      .n8n-chat__messages-list {
        background: #1a1a1a !important;
      }

      /* Input area */
      .n8n-chat .chat-input,
      .n8n-chat__input {
        background: #1a1a1a !important;
        border-top: none !important;
        padding: 12px !important;
      }

      .n8n-chat .chat-input textarea,
      .n8n-chat__input textarea {
        background: rgba(255, 255, 255, 0.05) !important;
        color: #ffffff !important;
        overflow: hidden !important;
        resize: none !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
        border-radius: 8px !important;
        padding: 12px !important;
        font-size: 0.8125rem !important;
      }

      .n8n-chat .chat-input textarea:focus,
      .n8n-chat__input textarea:focus {
        border-color: rgba(0, 153, 204, 0.3) !important;
        outline: none !important;
      }

      /* Ocultar scrollbar del textarea */
      .n8n-chat .chat-input textarea::-webkit-scrollbar,
      .n8n-chat__input textarea::-webkit-scrollbar {
        display: none !important;
      }

      .n8n-chat .chat-input textarea::placeholder,
      .n8n-chat__input textarea::placeholder {
        color: rgba(255, 255, 255, 0.4) !important;
      }

      /* Botón enviar */
      .n8n-chat .chat-input button,
      .n8n-chat__input button {
        background: #0099cc !important;
        border-radius: 8px !important;
        color: #ffffff !important;
      }

      .n8n-chat .chat-input button svg,
      .n8n-chat__input button svg {
        fill: #ffffff !important;
        stroke: #ffffff !important;
        color: #ffffff !important;
      }

      .n8n-chat .chat-input button:hover,
      .n8n-chat__input button:hover {
        background: #007aa3 !important;
      }

      /* Mensajes del usuario */
      .n8n-chat .chat-message-from-user,
      .n8n-chat__message--user,
      .chat-message.from-user .chat-message-body,
      [class*="message"][class*="user"] {
        background: linear-gradient(135deg, #0099cc 0%, #206880 100%) !important;
        color: #ffffff !important;
        border: none !important;
      }

      /* Tamaño de fuente de los mensajes */
      .n8n-chat .chat-message,
      .n8n-chat__message,
      .chat-message-body,
      [class*="message-body"],
      [class*="message-text"] {
        font-size: 0.8125rem !important;
        line-height: 1.45 !important;
      }

      /* Welcome screen */
      .n8n-chat .chat-welcome,
      .n8n-chat__welcome {
        background: #1a1a1a !important;
      }

      .n8n-chat .chat-welcome button,
      .n8n-chat__welcome button {
        background: linear-gradient(135deg, #0099cc 0%, #206880 100%) !important;
        border: none !important;
        font-weight: 600 !important;
      }

      .n8n-chat .chat-welcome button:hover,
      .n8n-chat__welcome button:hover {
        background: linear-gradient(135deg, #007aa3 0%, #1a5266 100%) !important;
      }

      /* Scrollbar personalizado */
      .n8n-chat .chat-messages-list::-webkit-scrollbar,
      .n8n-chat__messages-list::-webkit-scrollbar {
        width: 6px;
      }

      .n8n-chat .chat-messages-list::-webkit-scrollbar-track,
      .n8n-chat__messages-list::-webkit-scrollbar-track {
        background: #1a1a1a;
      }

      .n8n-chat .chat-messages-list::-webkit-scrollbar-thumb,
      .n8n-chat__messages-list::-webkit-scrollbar-thumb {
        background: #0099cc;
        border-radius: 3px;
      }

      /* Typing indicator */
      .n8n-chat .chat-typing-indicator span,
      .n8n-chat__typing-indicator span,
      [class*="typing"] span {
        background: #0099cc !important;
        width: 6px !important;
        height: 6px !important;
      }
    `}</style>
  );
}

