import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Node Solutions - Implementando IA de verdad a empresas reales",
  description: "Consultoría especializada en implementación de soluciones de Inteligencia Artificial para empresas",
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
