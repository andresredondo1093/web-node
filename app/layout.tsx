import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Node Solutions - Convertimos la IA en resultados reales",
  description: "Consultora especializada en transformar operaciones empresariales mediante inteligencia artificial. Agentes de IA, automatización y optimización de procesos.",
  icons: {
    icon: "/isotipo.png",
    apple: "/isotipo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
