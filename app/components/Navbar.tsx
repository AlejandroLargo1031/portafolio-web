'use client'; // Asegura que el componente se renderice en el cliente

import Link from 'next/link';
import Logo from '../components/logo';
import { usePathname } from 'next/navigation'; // Usa este hook en lugar de `useRouter`
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname(); // Obtén la ruta actual
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-portfolio-bright/5 bg-portfolio-bg/90 py-4 text-portfolio-bright backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 transition-colors hover:bg-portfolio-surface md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col space-y-1 bg-portfolio-bg p-4 md:relative md:top-auto md:flex md:flex-row md:space-x-1 md:space-y-0 md:bg-transparent md:p-0`}
          >
            {[
              { href: "/", label: "Inicio" },
              { href: "/pages/about", label: "Acerca de mí" },
              { href: "/pages/projects", label: "Proyectos" },
              { href: "/pages/contact", label: "Contacto" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-md px-4 py-2 text-sm transition-colors ${
                    isActive(item.href)
                      ? "text-portfolio-accent"
                      : "text-portfolio-body hover:text-portfolio-bright"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
