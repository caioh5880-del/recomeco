import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "RECOMEÇO — Vida Espiritual & Devoção Mariana",
  description:
    "Todos os dias são uma nova oportunidade de voltar para Deus. Com Jesus no centro e Maria nos ensinando a caminhar.",
  keywords: [
    "católico",
    "oração",
    "nossa senhora",
    "maria",
    "vida espiritual",
    "liturgia",
    "recomeço",
    "rosário",
    "jovens católicos"
  ]
};

export const viewport: Viewport = {
  themeColor: "#0d1527",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fcfbf7] text-[#0d1527]">
        {children}
      </body>
    </html>
  );
}
