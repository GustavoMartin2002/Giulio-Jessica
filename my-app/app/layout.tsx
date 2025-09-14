import type { Metadata } from "next";
import { comingSoon } from "./utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giulio & Jessica | Nosso Casamento",
  description: "Seja bem-vindo(a) ao site de casamento de Giulio & Jessica! Encontre informações sobre a data, localização, confirme sua presença e descubra como nos presentear. Juntos para sempre!",
  keywords: ["casamento", "giulio e jessica", "giulio", "jessica", "site de casamento", "convite digital", "confirmação de presença", "lista de presentes", "pix casamento", "cerimônia", "recepção", "amor", "uniao"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Giulio & Jessica | Nosso Casamento",
    description: "Convidamos você a celebrar o amor de Giulio & Jessica. Todas as informações para o nosso Grande Dia estão aqui!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL as string}`,
    siteName: "Casamento de Giulio & Jessica",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL as string}/favicon.webp`,
        width: 1200,
        height: 630,
        alt: "Casamento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casamento | Giulio & Jessica",
    description:"Convidamos você a celebrar o amor de Giulio & Jessica. Todas as informações para o nosso Grande Dia estão aqui!",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL as string}/favicon.webp`],
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
      <body className={ comingSoon.className }>
        { children }
      </body>
    </html>
  );
}
