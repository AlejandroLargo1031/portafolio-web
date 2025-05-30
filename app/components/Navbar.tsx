'use client'; // Asegura que el componente se renderice en el cliente

import Link from 'next/link';
import Logo from '../components/logo';
import { usePathname } from 'next/navigation'; // Usa este hook en lugar de `useRouter`

export default function Navbar() {
  const pathname = usePathname(); // Obtén la ruta actual

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm text-white py-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="flex space-x-1">
            <li>
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/pages/about"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/pages/about')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Acerca de mí
              </Link>
            </li>
            <li>
              <Link
                href="/pages/projects"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/pages/projects')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/pages/contact"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/pages/contact')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
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
