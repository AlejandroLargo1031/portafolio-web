'use client';

import Navbar from '../../components/Navbar';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573245709364', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contacto
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para colaboraciones y nuevos desafíos.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 p-5 rounded-xl space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Información de Contacto
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-300 font-medium">Teléfono</h3>
                    <p className="text-gray-400">+57 324 570 93 64</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-300 font-medium">Email</h3>
                    <p className="text-gray-400">alejandropulidolargo@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-300 font-medium">Ubicación</h3>
                    <p className="text-gray-400">Roldanillo, Colombia</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-300 font-medium">Disponibilidad</h3>
                    <p className="text-gray-400">Disponible para proyectos freelance y tiempo completo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Redes Sociales
              </h2>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/AlejandroLargo1031" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-500 transition-colors">
                  <FaGithub className="w-7 h-7 text-white" />
                </a>
                <a href="https://linkedin.com/in/alejandro-largo-dev" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-500 transition-colors">
                  <FaLinkedin className="w-7 h-7 text-white" />
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <FaWhatsapp className="w-7 h-7 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 