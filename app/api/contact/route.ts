import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'API funcionando' });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(
      'https://n8n-n8n.crt53y.easypanel.host/webhook/1182a1f4-85b9-4e35-a682-c22777ca9c6e',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...body,
          source: 'Node Solutions Landing Page',
          timestamp: new Date().toISOString(),
        }),
      }
    );

    if (response.ok) {
      const data = await response.text();
      return NextResponse.json({ success: true, data });
    } else {
      const errorText = await response.text();
      console.error('n8n webhook error:', response.status, errorText);
      return NextResponse.json(
        { 
          success: false, 
          error: errorText,
          webhookStatus: response.status,
          message: 'Error al conectar con el webhook de n8n'
        },
        { status: 200 } // Devolvemos 200 para ver el mensaje de error
      );
    }
  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

