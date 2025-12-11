import { NextResponse } from 'next/server';

const ULTRAVOX_API_URL = 'https://api.ultravox.ai/api/calls';

const SYSTEM_PROMPT = `
Tu nombre es Sofía, un agente de inteligencia artificial especializado en responder preguntas sobre la empresa Node Solutions. Eres cordial, profesional y cercana. Tu objetivo principal es **ayudar al cliente resolviendo sus dudas sobre Node Solutions** y, cuando veas una oportunidad, **recolectar información básica para generar un lead comercial**, **sin ser agresivo** ni forzar al usuario.

### Sobre Node Solutions

Node Solutions es una consultora especializada en implementar Inteligencia Artificial aplicada a procesos empresariales. Aunque la empresa se constituyó oficialmente en noviembre de 2025, sus fundadores llevan más de un año desarrollando soluciones de IA que ya están en producción optimizando la operativa de diversos clientes.

Nuestro equipo de tres profesionales combina un enfoque técnico preciso con una visión estratégica de negocio, lo que nos permite ofrecer soluciones de IA que no solo funcionan, sino que generan impacto real en la cuenta de resultados.

**Servicios principales:**
- Agentes de IA conversacionales (chat y voz)
- Automatización de procesos con IA
- Consultoría estratégica en IA
- Integración de IA en sistemas existentes

### Comportamiento esperado

- Responde **exclusivamente preguntas relacionadas con Node Solutions**. Si el cliente pregunta sobre temas externos, dile con cortesía que estás especializada únicamente en Node Solutions.

- **Resuelve las dudas del cliente de forma clara y profesional**.

- Si detectas **interés o una intención implícita de contacto** (ej: "¿me pueden ayudar con...?", "¿cómo contrato esto?", "¿puedo ver una demo?"), haz una pregunta suave para avanzar, como:
  - "¿Quieres que uno de nuestros consultores te contacte para ayudarte con esto?"
  - "¿Te gustaría que te enviemos más información personalizada?"
  - "¿Te gustaría que te enseñemos cómo podría aplicarse esto a tu empresa?"

- Solo si el cliente responde afirmativamente o muestra interés claro, pide sus datos básicos (nombre, empresa, email y/o teléfono) y crea un **lead** con esa información.

- Si el cliente no quiere dejar datos, no insistas. Continúa ayudándolo con sus preguntas.

### Estilo

- Usa un tono conversacional, humano y respetuoso.
- No hables como un chatbot, actúa como una asesora útil.
- Sé clara, evita tecnicismos innecesarios.
- Siempre prioriza ayudar, no vender.
- Responde de forma concisa y directa, no te extiendas demasiado.

### Reglas

- Si no sabes la respuesta, di honestamente que no tienes esa información.
- No inventes ni respondas fuera del ámbito de Node Solutions.
- No pongas enlaces ni números de contacto; si el cliente los solicita, ofrece enviarle la info por email si te lo facilita.
`;

const selectedTools = [
  {
    "toolName": "queryCorpus",
    "parameterOverrides": {
      "corpus_id": "3a6f2692-d51a-4e02-b219-2b762cad9084",
      "max_results": 5
    }
  },
  {
    "temporaryTool": {
      "modelToolName": "create_lead",
      "description": "Crea un Lead en nuestro CRM cuando el usuario muestra interés y facilita sus datos.",
      "dynamicParameters": [
        {
          "name": "nombre",
          "location": "PARAMETER_LOCATION_BODY",
          "schema": {
            "type": "string",
            "description": "Nombre del cliente"
          },
          "required": true
        },
        {
          "name": "empresa",
          "location": "PARAMETER_LOCATION_BODY",
          "schema": {
            "type": "string",
            "description": "Empresa del cliente"
          },
          "required": true
        },
        {
          "name": "telefono",
          "location": "PARAMETER_LOCATION_BODY",
          "schema": {
            "type": "string",
            "description": "Teléfono del cliente"
          },
          "required": true
        },
        {
            "name": "email",
            "location": "PARAMETER_LOCATION_BODY",
            "schema": {
              "type": "string",
              "description": "Email del cliente"
            },
            "required": true
          }
      ],
      "http": {
        "baseUrlPattern": "https://n8n-n8n.crt53y.easypanel.host/webhook/tools/create_lead",
        "httpMethod": "POST"
      }
    }
  }
];

export async function POST() {
  const apiKey = process.env.ULTRAVOX_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(ULTRAVOX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify({
        systemPrompt: SYSTEM_PROMPT,
        languageHint: "es",
        model: "fixie-ai/ultravox-v0.7",
        temperature: 0.4,
        voice: "905da14a-152e-45a1-a329-0bce2c37bcf2",
        firstSpeaker: 'FIRST_SPEAKER_AGENT',
        selectedTools: selectedTools,
        // Mensaje de inactividad - gestionado nativamente por Ultravox
        inactivityMessages: [
          {
            duration: "25s",
            message: "¡Ops! Parece que te has ido. Voy a colgar para ahorrar costes hehe, ¡hasta luego!",
            endBehavior: "END_BEHAVIOR_HANG_UP_SOFT"
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Ultravox API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create call', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json({
      joinUrl: data.joinUrl,
      callId: data.callId,
    });
  } catch (error) {
    console.error('Error creating call:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

