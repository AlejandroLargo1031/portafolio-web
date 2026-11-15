import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
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
  title: "Alejandro Largo · Desarrollador Fullstack",
  description:
    "Desarrollador Fullstack especializado en JavaScript. Construyo productos web con React, Node y buenas prácticas.",
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
        {children}
      </body>
    </html>
  );
}
