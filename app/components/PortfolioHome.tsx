"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Logo from "./logo";

const NAV_ITEMS = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
] as const;

const experiences = [
  {
    id: "bitparner",
    period: "Oct 2025 — Presente",
    title: "Ingeniero de Software (Full Stack)",
    company: "Bitparner",
    logo: "/appsmartt.jpeg",
    logoBg: "bg-white",
    description:
      "Diseñé e implementé la arquitectura completa del sistema (backend, frontend e infraestructura). Gestioné despliegues en DigitalOcean con PM2 y Nginx, integré AWS S3 y lideré el ciclo con React 19.",
    tech: ["React", "Node.js", "AWS S3", "DigitalOcean", "Nginx"],
  },
  {
    id: "vtn",
    period: "Ago 2025 — Ene 2026",
    title: "Desarrollador de Software (Full Stack)",
    company: "Vende tu nave Colombia",
    logo: "/vtn.svg",
    logoBg: "bg-white",
    description:
      "Migré el backend de PHP a FastAPI, implementé un backoffice en Django y optimicé el frontend. Nuevos módulos que mejoraron tiempos de respuesta y operación interna.",
    tech: ["FastAPI", "Django", "Python", "JavaScript"],
  },
  {
    id: "dxabstract",
    period: "Dic 2024 — Ago 2025",
    title: "Desarrollador de Software (Full Stack)",
    company: "DxAbstract Colombia",
    logo: "/isotipo.png",
    logoBg: "bg-portfolio-raised",
    description:
      "Soluciones con IA para análisis legal, apps con Next.js y landing en Astro con excelente rendimiento. Entrega orientada a producto y requisitos de negocio.",
    tech: ["Next.js", "Astro", "Azure", "GPT-4", "TypeScript"],
  },
];

const projects = [
  {
    id: "conqueror",
    title: "Conqueror",
    description:
      "App full-stack para gestión de hábitos: autenticación, dashboard con métricas, seguimiento con recordatorios y visualización de progreso.",
    image: "/app-dashboard.png",
    demoUrl: "https://app-habitos-ruddy.vercel.app/",
    githubUrl: "https://github.com/AlejandroLargo1031/App_Habitos",
    tech: ["Next.js", "TypeScript", "Django", "PostgreSQL", "Tailwind"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioHome() {
  const [activeSection, setActiveSection] = useState("sobre-mi");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce) return;
      const root = e.currentTarget;
      root.style.setProperty("--spotlight-x", `${e.clientX}px`);
      root.style.setProperty("--spotlight-y", `${e.clientY}px`);
    },
    [reduce]
  );

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="page-atmosphere relative min-h-screen"
      onMouseMove={onMouseMove}
    >
      {!reduce && (
        <div className="cursor-spotlight" aria-hidden />
      )}

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-portfolio-accent focus:px-3 focus:py-2 focus:text-portfolio-bg"
      >
        Saltar al contenido
      </a>

      {/* Header superior — distinto al sidebar sticky de Brittany */}
      <header className="sticky top-0 z-50 border-b border-portfolio-bright/5 bg-portfolio-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Inicio">
            <Logo />
            <span className="font-display text-sm font-semibold tracking-wide text-portfolio-bright">
              Alejandro Largo
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Secciones">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  activeSection === item.id
                    ? "text-portfolio-accent"
                    : "text-portfolio-body hover:text-portfolio-bright"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/pages/contact"
              className="ml-2 rounded-md bg-portfolio-accent px-3.5 py-2 text-sm font-semibold text-portfolio-bg transition-opacity hover:opacity-90"
            >
              Contacto
            </Link>
          </nav>

          <button
            type="button"
            className="rounded-md p-2 text-portfolio-bright md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-portfolio-bright/5 px-5 py-3 md:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-2 text-portfolio-body"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/pages/contact"
              className="mt-2 block py-2 font-semibold text-portfolio-accent"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </header>

      <main id="contenido">
        {/* Hero: marca grande + foto a pantalla */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24 lg:pt-20">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-accent">
                Fullstack · JavaScript
              </p>
              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-portfolio-bright sm:text-6xl lg:text-7xl">
                Alejandro
                <br />
                Largo
              </h1>
              <span className="accent-shimmer mt-6" aria-hidden />
              <p className="mt-6 max-w-md text-lg leading-relaxed text-portfolio-body">
                Construyo productos web sólidos: APIs, interfaces y despliegues
                que se pueden mantener y escalar.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#proyectos"
                  className="rounded-md bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep px-5 py-2.5 text-sm font-semibold text-portfolio-bright transition-opacity hover:opacity-90"
                >
                  Ver proyectos
                </a>
                <a
                  href="#experiencia"
                  className="rounded-md px-5 py-2.5 text-sm font-semibold text-portfolio-bright underline-offset-4 transition-colors hover:text-portfolio-accent hover:underline"
                >
                  Trayectoria
                </a>
              </div>
              <ul className="mt-10 flex items-center gap-5" aria-label="Redes">
                <li>
                  <a
                    href="https://github.com/AlejandroLargo1031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-body transition-colors hover:text-portfolio-accent"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/alejandro-largo-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-body transition-colors hover:text-portfolio-accent"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/573245709364"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-body transition-colors hover:text-portfolio-accent"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-md lg:max-w-none"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-float relative aspect-[4/5] overflow-hidden bg-portfolio-surface">
                <Image
                  src="/alejandro-1.png"
                  alt="Alejandro Largo"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-portfolio-bg via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div
                className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 border border-portfolio-accent/40"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 bg-portfolio-accent/20"
                aria-hidden
              />
            </motion.div>
          </div>
        </section>

        {/* Franja de logos de empresas */}
        <section aria-label="Empresas" className="border-y border-portfolio-bright/5 bg-portfolio-surface/40">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-5 py-8 sm:px-8">
            <p className="w-full text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-body/70 sm:w-auto">
              Donde he aportado
            </p>
            {experiences.map((job, i) => (
              <motion.div
                key={job.id}
                className="flex items-center gap-3"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                whileHover={reduce ? undefined : { y: -4 }}
              >
                <div
                  className={`relative h-11 w-11 overflow-hidden ${job.logoBg}`}
                >
                  <Image
                    src={job.logo}
                    alt=""
                    fill
                    className="object-contain p-1.5"
                    sizes="44px"
                  />
                </div>
                <span className="text-sm font-medium text-portfolio-bright/90">
                  {job.company}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sobre mí — layout asimétrico */}
        <section
          id="sobre-mi"
          className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28"
          aria-labelledby="sobre-mi-title"
        >
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
              <div>
                <h2
                  id="sobre-mi-title"
                  className="font-display text-3xl font-bold text-portfolio-bright sm:text-4xl"
                >
                  Sobre mí
                </h2>
                <p className="mt-3 text-sm text-portfolio-accent">
                  Código limpio · producto real
                </p>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-portfolio-body lg:border-l lg:border-portfolio-accent/30 lg:pl-10">
                <p>
                  Me gusta construir cosas que resuelvan problemas reales. Soy
                  desarrollador fullstack con foco en{" "}
                  <span className="font-medium text-portfolio-bright">
                    JavaScript
                  </span>
                  , y disfruto el punto donde el diseño limpio se encuentra con
                  código mantenible.
                </p>
                <p>
                  Hoy trabajo en{" "}
                  <span className="font-medium text-portfolio-bright">
                    Bitparner
                  </span>{" "}
                  liderando arquitectura, frontend con React y operación en
                  servidores. Antes aporté en{" "}
                  <span className="font-medium text-portfolio-bright">
                    Vende tu nave
                  </span>{" "}
                  y{" "}
                  <span className="font-medium text-portfolio-bright">
                    DxAbstract
                  </span>
                  .
                </p>
                <p>
                  Sigo aprendiendo, colaborando en equipo y buscando retos donde
                  una idea se convierta en un plan claro y un producto estable.
                </p>
                <Link
                  href="/pages/about"
                  className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-portfolio-accent transition-colors hover:text-portfolio-bright"
                >
                  Más detalles y skills
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Experiencia — timeline vertical con logos */}
        <section
          id="experiencia"
          className="scroll-mt-24 bg-portfolio-surface/30 py-20 lg:py-28"
          aria-labelledby="experiencia-title"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2
                id="experiencia-title"
                className="font-display text-3xl font-bold text-portfolio-bright sm:text-4xl"
              >
                Experiencia
              </h2>
              <p className="mt-3 max-w-xl text-portfolio-body">
                Un recorrido reciente construyendo y operando productos de punta
                a punta.
              </p>
            </Reveal>

            <ol className="relative mt-14 space-y-0 md:pl-2">
              <div className="timeline-rail" aria-hidden />
              {experiences.map((job, i) => (
                <Reveal key={job.id} delay={i * 0.08}>
                  <li className="relative grid gap-5 pb-14 pl-16 md:grid-cols-[auto_1fr] md:gap-8 md:pl-20">
                    <div className="absolute left-0 top-0 z-10 md:left-1">
                      <motion.div
                        className={`relative h-14 w-14 overflow-hidden ring-4 ring-portfolio-bg ${job.logoBg}`}
                        whileHover={reduce ? undefined : { scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 360, damping: 18 }}
                      >
                        <Image
                          src={job.logo}
                          alt={`Logo ${job.company}`}
                          fill
                          className="object-contain p-1.5"
                          sizes="56px"
                        />
                      </motion.div>
                    </div>

                    <div className="md:pt-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-accent">
                        {job.period}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-semibold text-portfolio-bright">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-portfolio-body">{job.company}</p>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-portfolio-body">
                        {job.description}
                      </p>
                      <ul
                        className="mt-4 flex flex-wrap gap-2"
                        aria-label="Tecnologías"
                      >
                        {job.tech.map((t) => (
                          <li key={t}>
                            <span className="tech-chip">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Proyectos — bloques grandes alternados */}
        <section
          id="proyectos"
          className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28"
          aria-labelledby="proyectos-title"
        >
          <Reveal>
            <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2
                  id="proyectos-title"
                  className="font-display text-3xl font-bold text-portfolio-bright sm:text-4xl"
                >
                  Proyectos
                </h2>
                <p className="mt-3 max-w-lg text-portfolio-body">
                  Productos que he construido de extremo a extremo.
                </p>
              </div>
              <Link
                href="/pages/projects"
                className="text-sm font-semibold text-portfolio-accent hover:text-portfolio-bright"
              >
                Ver todos →
              </Link>
            </div>
          </Reveal>

          <div className="space-y-20">
            {projects.map((project, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={project.id} delay={0.05}>
                  <article
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block aspect-[16/10] overflow-hidden bg-portfolio-surface"
                    >
                      <Image
                        src={project.image}
                        alt={`Captura de ${project.title}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-portfolio-bg/50 via-transparent to-portfolio-accent/10 opacity-80 transition-opacity group-hover:opacity-60"
                        aria-hidden
                      />
                    </a>

                    <div>
                      <h3 className="font-display text-2xl font-semibold text-portfolio-bright">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 transition-colors hover:text-portfolio-accent"
                        >
                          {project.title}
                          <FaArrowUpRightFromSquare className="h-3.5 w-3.5" aria-hidden />
                        </a>
                      </h3>
                      <p className="mt-3 text-portfolio-body leading-relaxed">
                        {project.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
                        {project.tech.map((t) => (
                          <li key={t}>
                            <span className="tech-chip">{t}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-4 text-sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-portfolio-accent hover:text-portfolio-bright"
                        >
                          Ver demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-portfolio-body hover:text-portfolio-accent"
                        >
                          <FaGithub className="h-4 w-4" />
                          Código
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-portfolio-bright/5 bg-gradient-to-br from-portfolio-surface to-portfolio-bg">
          <Reveal>
            <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 lg:py-20">
              <h2 className="font-display text-3xl font-bold text-portfolio-bright">
                ¿Construimos algo juntos?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-portfolio-body">
                Estoy abierto a proyectos freelance y roles fullstack. Cuéntame
                tu idea y lo convertimos en un plan.
              </p>
              <Link
                href="/pages/contact"
                className="mt-8 inline-block rounded-md bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep px-6 py-3 text-sm font-semibold text-portfolio-bright transition-opacity hover:opacity-90"
              >
                Escribirme
              </Link>
            </div>
          </Reveal>
        </section>

        <footer className="mx-auto max-w-6xl px-5 py-10 text-center text-sm text-portfolio-body/60 sm:px-8">
          <p>
            Diseñado y desarrollado por Alejandro Largo · Next.js + Tailwind
          </p>
        </footer>
      </main>
    </div>
  );
}
