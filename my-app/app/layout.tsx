import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const robotoMono = localFont({
  src: '../public/fonts/robotoMono.ttf',
  variable: '--font-roboto-mono',
});

export const rougeScript = localFont({
  src: '../public/fonts/rougeScript.ttf',
  variable: '--font-rouge-scrpit',
});

export const metadata: Metadata = {
  title: "Giulio & Jessica | Nosso Casamento",

  description: "Seja bem-vindo(a) ao site de casamento de Giulio & Jessica! Encontre informações sobre a data, localização, confirme sua presença e descubra como nos presentear. Juntos para sempre!",

  keywords: ["casamento", "giulio e jessica", "giulio", "jessica", "site de casamento", "convite digital", "confirmação de presença", "rsvp", "lista de presentes", "pix casamento", "cerimônia", "recepção", "amor", "uniao"],

  openGraph: {
    title: "Giulio & Jessica | Nosso Casamento",
    description: "Convidamos você a celebrar o amor de Giulio & Jessica. Todas as informações para o nosso Grande Dia estão aqui!",
    url: "https://giulio&jessica.vercel.app",
    siteName: "Casamento Giulio & Jessica",
    images: [
      {
        url: "https://giulio&jessica.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Giulio e Jessica - Foto de Casamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  authors: [{ name: "Giulio & Jessica" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={ robotoMono.className }>
        { children }
      </body>
    </html>
  );
}
