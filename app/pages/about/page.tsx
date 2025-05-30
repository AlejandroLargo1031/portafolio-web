'use client'
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiHtml5, 
  SiAstro,
  SiRemix,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,  
  SiMysql,
  SiGithub,
  SiDocker,
  SiLinux,
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';
import { FaAws, FaDatabase } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl h-20 font-bold  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Alejandro Largo
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                Frontend Developer · Software Engineer
              </h2>
              <p className="text-gray-400 text-lg">
                Soy una persona que siempre está en continuo aprendizaje, con buenas habilidades de comunicación, 
                creatividad, solución de problemas y trabajo en equipo. Me destaco por mi capacidad de adaptación 
                y mi pasión por crear soluciones tecnológicas innovadoras y eficientes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mis Habilidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Frontend",
                  description: "Desarrollo de interfaces modernas y responsivas",
                  skills: [
                    { name: "React", level: "Avanzado", icon: SiReact },
                    { name: "Next.js", level: "Avanzado", icon: SiNextdotjs },
                    { name: "JavaScript", level: "Avanzado", icon: SiJavascript },
                    { name: "TypeScript", level: "Intermedio", icon: SiTypescript },
                    { name: "HTML5/CSS3", level: "Avanzado", icon: SiHtml5 },
                    { name: "Tailwind CSS", level: "Avanzado", icon: SiTailwindcss },
                    { name: "Astro", level: "Intermedio", icon: SiAstro },
                    { name: "Remix", level: "Intermedio", icon: SiRemix }
                  ]
                },
                {
                  category: "Backend",
                  description: "Construcción de APIs y servicios robustos",
                  skills: [
                    { name: "Node.js", level: "Intermedio", icon: SiNodedotjs },
                    { name: "Express", level: "Intermedio", icon: SiExpress },
                    { name: "Python", level: "Intermedio", icon: SiPython },
                    { name: "Django", level: "Avanzado", icon: SiDjango },
                    { name: "REST APIs", level: "Avanzado", icon: FaDatabase }
                  ]
                },
                {
                  category: "Database",
                  description: "Gestión y optimización de bases de datos",
                  skills: [
                    { name: "PostgreSQL", level: "Intermedio", icon: SiPostgresql },
                    { name: "MongoDB", level: "Intermedio", icon: SiMongodb },
                    { name: "MySQL", level: "Intermedio", icon: SiMysql }
                  ]
                },
                {
                  category: "DevOps & Tools",
                  description: "Herramientas de desarrollo y despliegue",
                  skills: [
                    { name: "Git/GitHub", level: "Avanzado", icon: SiGithub },
                    { name: "Docker", level: "Intermedio", icon: SiDocker },
                    { name: "AWS", level: "Básico", icon: FaAws },
                    { name: "Linux", level: "Intermedio", icon: SiLinux }
                  ]
                }
              ].map((category) => (
                <div
                  key={category.category}
                  className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">
                    {category.category}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.name} className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <Icon className="w-6 h-6 text-gray-300" />
                            <span className="text-gray-300">{skill.name}</span>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs ${
                            skill.level === 'Avanzado' 
                              ? 'bg-purple-500/20 text-purple-400' 
                              : skill.level === 'Intermedio'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src="/isotipo.png"
                    alt="DxAbstract Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-purple-400">
                    Desarrollador Frontend
                  </h3>
                  <p className="text-gray-400 mt-2">DxAbstract Colombia</p>
                  <p className="text-gray-400">Diciembre 2024 - Presente</p>
                  <ul className="text-gray-300 mt-4 space-y-2 list-disc list-inside">
                    <li>Desarrollo de IA experta en análisis de leyes Colombianas usando Azure Cognitive Services y GPT-4</li>
                    <li>Implementación de modelos NLP para consultas legales con 35% de precisión</li>
                    <li>Desarrollo de aplicaciones web con Next.js, mejorando la velocidad de carga en 20%</li>
                    <li>Creación de landing page con Astro, logrando puntaje perfecto en Lighthouse</li>
                    <li>Análisis de requisitos para sistema de gestión de parqueaderos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Formación Académica
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/univalle.png"
                      alt="Universidad del Valle Logo"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-purple-400">
                      Tecnólogo en Sistemas
                    </h3>
                    <p className="text-gray-400">Universidad Del Valle Zarzal, Colombia</p>
                    <p className="text-gray-400">Enero 2019 - 2024</p>
                    <ul className="text-gray-300 mt-4 space-y-2 list-disc list-inside">
                      <li>Excelente rendimiento académico y habilidades de liderazgo</li>
                      <li>Participación en proyectos colaborativos con diversas tecnologías</li>
                      <li>Integrante activo de semilleros de investigación</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/codecamp.jpeg"
                      alt="FreeCodeCamp Logo"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-purple-400">
                      JavaScript Algorithms and Data Structures
                    </h3>
                    <p className="text-gray-400">FreeCodeCamp Colombia</p>
                    <p className="text-gray-400">Enero 2024 - Abril 2024</p>
                    <p className="text-gray-300 mt-4">
                      Manejo de algoritmos de optimización para mejorar el rendimiento y la eficiencia en sistemas de alto flujo de peticiones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ¿Interesado en trabajar juntos?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos de cómo podemos crear algo increíble juntos!
            </p>
            <a
              href="/pages/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
