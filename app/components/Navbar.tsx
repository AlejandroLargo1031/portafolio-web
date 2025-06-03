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
    <nav className="bg-gray-900/95 backdrop-blur-sm text-white py-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Burger Menu Button - Only visible on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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

          {/* Navigation Links - Hidden on mobile when menu is closed */}
          <ul className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-gray-900 md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-1`}>
            <li>
              <Link
                href="/"
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/pages/about"
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/pages/about')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Acerca de mí
              </Link>
            </li>
            <li>
              <Link
                href="/pages/projects"
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/pages/projects')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/pages/contact"
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/pages/contact')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
