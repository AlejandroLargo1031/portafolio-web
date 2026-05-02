'use client'
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

const REVEAL_STAGGER_MS = 340;

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  imageSrc: string;
  imageAlt: string;
  logoWrapClassName: string;
  imageClassName: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: "bitparner",
    title: "ingeniero de software (Full Stack)",
    company: "Bitparner",
    period: "octubre 2025 — actualmente",
    imageSrc: "/appsmartt.jpeg",
    imageAlt: "Bitparner",
    logoWrapClassName:
      "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-portfolio-body/25",
    imageClassName: "object-contain",
    bullets: [
      "Diseñé e implementé la arquitectura completa del sistema (backend, frontend e infraestructura), logrando una solución escalable que soporta +50% de crecimiento en usuarios sin degradación de rendimiento.",
      "Gestioné despliegues y operación en servidores (DigitalOcean) usando PM2 y Nginx, alcanzando una disponibilidad del sistema del 99.9% y reduciendo caídas en un 40%.",
      "Implementé almacenamiento y manejo de archivos con AWS S3, mejorando la eficiencia en la gestión de recursos en un 30% y reduciendo carga en el servidor principal.",
      "Desarrollé el frontend con React (v19), mejorando la experiencia de usuario y reduciendo los tiempos de carga en un 25% mediante optimización de componentes y manejo de estado.",
      "Lideré el ciclo completo de desarrollo (arquitectura, desarrollo, despliegue y mantenimiento), reduciendo tiempos de entrega en un 20% gracias a buenas prácticas y automatización.",
    ],
  },
  {
    id: "vtn",
    title: "Desarrollador de software (Full Stack)",
    company: "Vende tu nave Colombia",
    period: "agosto 2025 — Enero 2026",
    imageSrc: "/vtn.svg",
    imageAlt: "Vende tu nave Colombia",
    logoWrapClassName:
      "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-portfolio-body/25 bg-white p-2",
    imageClassName: "object-contain",
    bullets: [
      "Migré y reestructuré el backend de PHP a FastAPI, logrando una mejora de hasta 40% en tiempos de respuesta y mayor escalabilidad del sistema.",
      "Implementé un backoffice en Django, reduciendo en aproximadamente 30% los tiempos operativos del equipo administrativo mediante automatización de procesos internos.",
      "Realicé mantenimiento y optimización del frontend, mejorando el rendimiento de carga en un 25% y reduciendo errores en producción en un 20%.",
      "Diseñé e implementé nuevos módulos funcionales, incrementando la cobertura del sistema en un 35% y mejorando la experiencia de usuario en flujos clave.",
    ],
  },
  {
    id: "dxabstract",
    title: "Desarrollador de software (Full Stack)",
    company: "DxAbstract Colombia",
    period: "Diciembre 2024 — agosto 2025",
    imageSrc: "/isotipo.png",
    imageAlt: "DxAbstract Logo",
    logoWrapClassName: "relative h-20 w-20 flex-shrink-0",
    imageClassName: "object-contain rounded-lg",
    bullets: [
      "Desarrollo de IA experta en análisis de leyes Colombianas usando Azure Cognitive Services y GPT-4",
      "Implementación de modelos NLP para consultas legales con 35% de precisión",
      "Desarrollo de aplicaciones web con Next.js, mejorando la velocidad de carga en 20%",
      "Creación de landing page con Astro, logrando puntaje perfecto en Lighthouse",
      "Análisis de requisitos para sistema de gestión de parqueaderos",
    ],
  },
];

function ProfessionalExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasStartedRef = useRef(false);
  const [sectionReady, setSectionReady] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          setSectionReady(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionReady) return;
    if (visibleCount >= experiences.length) return;
    const delay = visibleCount === 0 ? 0 : REVEAL_STAGGER_MS;
    const t = window.setTimeout(() => {
      setVisibleCount((n) => n + 1);
    }, delay);
    return () => window.clearTimeout(t);
  }, [sectionReady, visibleCount]);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-6 py-16"
      aria-label="Experiencia profesional"
    >
      <h2 className="mb-12 text-center text-3xl font-bold bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep bg-clip-text text-transparent">
        Experiencia Profesional
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={false}
            animate={
              i < visibleCount
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -28 }
            }
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border-l-4 border-portfolio-accent bg-portfolio-surface p-6"
          >
            <div className="flex items-start gap-6">
              <div className={exp.logoWrapClassName} aria-hidden>
                <Image
                  src={exp.imageSrc}
                  alt={exp.imageAlt}
                  fill
                  className={exp.imageClassName}
                />
              </div>
              <div className="min-w-0 flex-grow">
                <h3 className="text-xl font-semibold text-portfolio-accent">
                  {exp.title}
                </h3>
                <p className="mt-2 text-portfolio-body">{exp.company}</p>
                <p className="text-portfolio-body">{exp.period}</p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-portfolio-bright/90">
                  {exp.bullets.map((line, bi) => (
                    <li key={`${exp.id}-${bi}`}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

type EducationItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  imageSrc: string;
  imageAlt: string;
  logoWrapClassName: string;
  imageClassName: string;
  intro?: string;
  bullets?: string[];
};

const educationItems: EducationItem[] = [
  {
    id: "parquesoft",
    title: "Curso Intensivo en Desarrollo de Software Full Stack",
    org: "Parquesoft TI — Colombia",
    period: "Agosto 2024 - Abril 2025",
    imageSrc: "/software-development-full-stack.png",
    imageAlt: "Parquesoft-Ti",
    logoWrapClassName:
      "relative flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-portfolio-surface",
    imageClassName: "object-contain rounded-lg",
    intro:
      "Formación práctica de siete meses orientada al desarrollo de soluciones completas, integrando tecnologías de frontend y backend. Durante el programa, fortalecí mis habilidades en bases de datos relacionales, desarrollo de APIs, servidores web, control de versiones y pruebas de software. Las clases en vivo con tutores expertos facilitaron una experiencia de aprendizaje inmersiva y enfocada en buenas prácticas y metodologías ágiles.",
    bullets: [
      "Participé en proyectos colaborativos enfocados en resolver problemas reales mediante soluciones innovadoras.",
      "Apliqué tecnologías modernas en entornos de desarrollo reales, consolidando un enfoque full stack.",
      "Fui parte activa de iniciativas académicas e investigativas, trabajando con equipos multidisciplinarios y fomentando el pensamiento crítico y la creatividad técnica.",
      "Actualmente, sigo perfeccionando mis capacidades para aportar soluciones escalables, eficientes y alineadas con los desafíos actuales del desarrollo de software.",
    ],
  },
  {
    id: "univalle",
    title: "Tecnólogo en Sistemas",
    org: "Universidad Del Valle Zarzal, Colombia",
    period: "Enero 2019 - 2024",
    imageSrc: "/univalle.png",
    imageAlt: "Universidad del Valle Logo",
    logoWrapClassName: "relative h-20 w-20 flex-shrink-0",
    imageClassName: "object-contain rounded-lg",
    bullets: [
      "Excelente rendimiento académico y habilidades de liderazgo",
      "Participación en proyectos colaborativos con diversas tecnologías",
      "Integrante activo de semilleros de investigación",
    ],
  },
  {
    id: "freecodecamp",
    title: "JavaScript Algorithms and Data Structures",
    org: "FreeCodeCamp Colombia",
    period: "Enero 2024 - Abril 2024",
    imageSrc: "/codecamp.jpeg",
    imageAlt: "FreeCodeCamp Logo",
    logoWrapClassName: "relative h-20 w-20 flex-shrink-0",
    imageClassName: "object-contain rounded-lg",
    intro:
      "Manejo de algoritmos de optimización para mejorar el rendimiento y la eficiencia en sistemas de alto flujo de peticiones.",
  },
];

function AcademicFormationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasStartedRef = useRef(false);
  const [sectionReady, setSectionReady] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          setSectionReady(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionReady) return;
    if (visibleCount >= educationItems.length) return;
    const delay = visibleCount === 0 ? 0 : REVEAL_STAGGER_MS;
    const t = window.setTimeout(() => {
      setVisibleCount((n) => n + 1);
    }, delay);
    return () => window.clearTimeout(t);
  }, [sectionReady, visibleCount]);

  return (
    <div className="bg-portfolio-surface py-16">
      <section
        ref={sectionRef}
        className="container mx-auto px-6"
        aria-label="Formación académica"
      >
        <h2 className="mb-12 text-center text-3xl font-bold bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep bg-clip-text text-transparent">
          Formación Académica
        </h2>
        <div className="mx-auto max-w-3xl space-y-8">
          {educationItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={
                i < visibleCount
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -28 }
              }
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg bg-portfolio-raised p-6"
            >
              <div className="flex items-start gap-6">
                <div className={item.logoWrapClassName} aria-hidden>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className={item.imageClassName}
                  />
                </div>
                <div className="min-w-0 flex-grow">
                  <h3 className="text-xl font-semibold text-portfolio-accent">
                    {item.title}
                  </h3>
                  <p className="text-portfolio-body">{item.org}</p>
                  <p className="text-portfolio-body">{item.period}</p>
                  {item.intro ? (
                    <p className="mt-4 text-portfolio-bright/90">{item.intro}</p>
                  ) : null}
                  {item.bullets?.length ? (
                    <ul className="mt-4 list-inside list-disc space-y-2 text-portfolio-bright/90">
                      {item.bullets.map((line, bi) => (
                        <li key={`${item.id}-b-${bi}`}>{line}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-portfolio-bg to-portfolio-surface text-portfolio-bright">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl h-20 font-bold  bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep bg-clip-text text-transparent">
                Alejandro Largo
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-portfolio-bright/90">
                Frontend Developer · Software Engineer
              </h2>
              <p className="text-portfolio-body text-lg">
                Soy una persona que siempre está en continuo aprendizaje, con buenas habilidades de comunicación, 
                creatividad, solución de problemas y trabajo en equipo. Me destaco por mi capacidad de adaptación 
                y mi pasión por crear soluciones tecnológicas innovadoras y eficientes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-portfolio-surface py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep bg-clip-text text-transparent">
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
                  className="bg-portfolio-raised p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-portfolio-accent mb-2">
                    {category.category}
                  </h3>
                  <p className="text-portfolio-body mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.name} className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <Icon className="w-6 h-6 text-portfolio-bright/85" />
                            <span className="text-portfolio-bright/90">{skill.name}</span>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs ${
                            skill.level === 'Avanzado' 
                              ? 'bg-portfolio-accent/20 text-portfolio-accent' 
                              : skill.level === 'Intermedio'
                              ? 'bg-portfolio-body/20 text-portfolio-bright/90'
                              : 'bg-portfolio-body/15 text-portfolio-body'
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

        <ProfessionalExperienceSection />

        <AcademicFormationSection />

        <div className="bg-portfolio-surface py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep bg-clip-text text-transparent">
              ¿Interesado en trabajar juntos?
            </h2>
            <p className="text-portfolio-body mb-8 max-w-2xl mx-auto">
              Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos de cómo podemos crear algo increíble juntos!
            </p>
            <a
              href="/pages/contact"
              className="inline-block bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep text-portfolio-bright px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contáctame
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
