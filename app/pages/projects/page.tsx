"use client";

import Image from "next/image";
import {
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiShadcnui,
  SiSwagger,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function Projects() {
  const projects = [
    {
      title: "Conqueror",
      description:
        "Aplicación web full-stack para gestión de hábitos, con autenticación segura, análisis de progreso y almacenamiento en la nube.",
      caracteristicas: ["Dashboard personalizado con métricas de progreso",
        "Sistema de seguimiento de hábitos con recordatorios",
        "Estadísticas y visualizaciones de progreso",
        "Autenticación y perfiles de usuario",
        "Notificaciones y recordatorios personalizados"],
      image: "/app-dashboard.png",
      demoUrl: "https://app-habitos-ruddy.vercel.app/",
      githubUrl: "https://github.com/AlejandroLargo1031/App_Habitos",
      stack: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Finances-App",
      description:
        "Sistema de gestión de ingresos y egresos con base de datos en la nube y panel de estadísticas en tiempo real.",
      caracteristicas: [ "Autenticación y Autorización",
        "Gestión de Ingresos y Egresos",
        "Gestión de Usuarios (solo ADMIN)",
        "Reportes Financieros (solo ADMIN)",
        "Seguridad"],
      image: "/app-finances.png",
      demoUrl: "https://finances-prevalentware-yrvl.vercel.app/",
      githubUrl: "https://github.com/AlejandroLargo1031/finances-prevalentware",
      stack: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Supabase", icon: RiSupabaseLine },
        { name: "Prisma", icon: SiPrisma },
        { name: "Swagger", icon: SiSwagger },
        { name: "ShadCN", icon: SiShadcnui },
        { name: "Recharts", icon: ImStatsBars },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Better-Auth", icon: GrSecure },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-900" id="projects">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mis Proyectos
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explora mi portafolio de proyectos donde aplico mis habilidades y
              conocimientos en desarrollo web.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="block bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain bg-gray-900"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">
                      Características Principales
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.caracteristicas.map((caracteristica, i) => (
                        <li key={i}>{caracteristica}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <span
                          key={i}
                          className="flex items-center gap-1 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                        >
                          <Icon className="w-4 h-4" />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Ver en GitHub</span>
                    </button>
                    <button
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      Ver Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="text-center mt-16 bg-gray-900" >
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-gray-400 mb-8">
          Estoy disponible para nuevos proyectos y colaboraciones.
        </p>
        <Link
          href="/pages/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
        >
          Hablemos de tu proyecto
        </Link>
      </div>
      </section>
    </>
  );
}
