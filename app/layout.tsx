import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import Providers from "./components/Providers";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alejandro Largo · Full Stack Engineer | AI & Cloud",
  description:
    "Software Engineer construyendo productos SaaS, fintech y soluciones con IA. Especializado en Node.js, React, Next.js, Python, Django, PostgreSQL, RAG y cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${body.variable} antialiased bg-portfolio-bg text-portfolio-body`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
