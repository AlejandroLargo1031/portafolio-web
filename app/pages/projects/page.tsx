'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { SiNextdotjs, SiDjango, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

// Componente del cliente para el botón de GitHub
function GitHubButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://github.com/AlejandroLargo1031/App_Habitos', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
    >
      <FaGithub className="w-5 h-5" />
      <span>Ver en GitHub</span>
    </button>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Mis Proyectos
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora mi portafolio de proyectos donde aplico mis habilidades y conocimientos en desarrollo web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a 
            href="https://app-habitos-ruddy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="relative h-64 w-full">
              <Image
                src="/app-dashboard.png"
                alt="Conqueror - Gestor de Hábitos"
                fill
                className="object-contain bg-gray-900"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Conqueror</h2>
              <p className="text-gray-400 mb-4">
                Aplicación web full-stack para el seguimiento y gestión de hábitos diarios, 
                permitiendo a los usuarios establecer, monitorear y mantener sus rutinas de manera efectiva.
              </p>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Características Principales</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Dashboard personalizado con métricas de progreso</li>
                  <li>Sistema de seguimiento de hábitos con recordatorios</li>
                  <li>Estadísticas y visualizaciones de progreso</li>
                  <li>Autenticación y perfiles de usuario</li>
                  <li>Notificaciones y recordatorios personalizados</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Stack Tecnológico</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
                    <SiNextdotjs className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
                    <SiTypescript className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
                    <SiDjango className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Django</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
                    <SiPostgresql className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
                    <SiTailwindcss className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <GitHubButton />
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Ver Demo
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-400 mb-8">
            Estoy disponible para nuevos proyectos y colaboraciones.
          </p>
          <a
            href="/pages/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </main>
    </div>
  );
}
