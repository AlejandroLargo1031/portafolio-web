"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import SiteShell from "./SiteShell";
import Reveal from "./Reveal";
import { useI18n } from "../i18n/I18nProvider";

export default function PortfolioHome() {
  const { t, messages } = useI18n();
  const reduce = useReducedMotion();
  const experiences = messages.experiences;
  const projects = messages.projectList;

  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24 lg:pt-20">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-accent">
                {t("hero.eyebrow")}
              </p>
              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-portfolio-bright sm:text-6xl lg:text-7xl">
                Alejandro
                <br />
                Largo
              </h1>
              <span className="accent-shimmer mt-6" aria-hidden />
              <p className="mt-6 max-w-md text-lg leading-relaxed text-portfolio-body">
                {t("hero.tagline")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/pages/projects"
                  className="rounded-md bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep px-5 py-2.5 text-sm font-semibold text-portfolio-bright transition-opacity hover:opacity-90"
                >
                  {t("hero.ctaProjects")}
                </Link>
                <Link
                  href="/pages/about"
                  className="rounded-md px-5 py-2.5 text-sm font-semibold text-portfolio-bright underline-offset-4 transition-colors hover:text-portfolio-accent hover:underline"
                >
                  {t("hero.ctaExperience")}
                </Link>
                <a
                  href="/CV-Alejandro-Largo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-portfolio-accent/50 px-5 py-2.5 text-sm font-semibold text-portfolio-accent transition-colors hover:border-portfolio-accent hover:bg-portfolio-accent/10"
                >
                  {t("hero.ctaResume")}
                </a>
              </div>
              <ul className="mt-10 flex items-center gap-5" aria-label={t("a11y.social")}>
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
                  alt={t("hero.photoAlt")}
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

        <section
          aria-label={t("a11y.companies")}
          className="border-y border-portfolio-bright/5 bg-portfolio-surface/40"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-5 py-8 sm:px-8">
            <p className="w-full text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-body/70 sm:w-auto">
              {t("companies.label")}
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
                  className={`relative flex h-11 w-11 items-center justify-center overflow-hidden ${job.logoBg}`}
                >
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      alt=""
                      fill
                      className="object-contain p-1.5"
                      sizes="44px"
                    />
                  ) : (
                    <span className="font-display text-sm font-bold text-portfolio-accent">
                      {job.logoInitial}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-portfolio-bright/90">
                  {job.company}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

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
                  {t("about.title")}
                </h2>
                <p className="mt-3 text-sm text-portfolio-accent">
                  {t("about.subtitle")}
                </p>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-portfolio-body lg:border-l lg:border-portfolio-accent/30 lg:pl-10">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
                <Link
                  href="/pages/about"
                  className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-portfolio-accent transition-colors hover:text-portfolio-bright"
                >
                  {t("about.more")}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

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
                {t("experience.title")}
              </h2>
              <p className="mt-3 max-w-xl text-portfolio-body">
                {t("experience.subtitle")}
              </p>
            </Reveal>

            <ol className="relative mt-14 space-y-0 md:pl-2">
              <div className="timeline-rail" aria-hidden />
              {experiences.map((job, i) => (
                <Reveal key={job.id} delay={i * 0.08}>
                  <li className="relative grid gap-5 pb-14 pl-16 md:grid-cols-[auto_1fr] md:gap-8 md:pl-20">
                    <div className="absolute left-0 top-0 z-10 md:left-1">
                      <motion.div
                        className={`relative flex h-14 w-14 items-center justify-center overflow-hidden ring-4 ring-portfolio-bg ${job.logoBg}`}
                        whileHover={reduce ? undefined : { scale: 1.06 }}
                        transition={{
                          type: "spring",
                          stiffness: 360,
                          damping: 18,
                        }}
                      >
                        {job.logo ? (
                          <Image
                            src={job.logo}
                            alt={`Logo ${job.company}`}
                            fill
                            className="object-contain p-1.5"
                            sizes="56px"
                          />
                        ) : (
                          <span className="font-display text-lg font-bold text-portfolio-accent">
                            {job.logoInitial}
                          </span>
                        )}
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
                        aria-label={t("a11y.tech")}
                      >
                        {job.tech.map((tech) => (
                          <li key={tech}>
                            <span className="tech-chip">{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal>
              <Link
                href="/pages/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-portfolio-accent transition-colors hover:text-portfolio-bright"
              >
                {t("about.more")}
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </section>

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
                  {t("projects.title")}
                </h2>
                <p className="mt-3 max-w-lg text-portfolio-body">
                  {t("projects.subtitle")}
                </p>
              </div>
              <Link
                href="/pages/projects"
                className="text-sm font-semibold text-portfolio-accent hover:text-portfolio-bright"
              >
                {t("projects.viewAll")}
              </Link>
            </div>
          </Reveal>

          <div className="space-y-20">
            {projects.map((project, i) => {
              const reverse = i % 2 === 1;
              const screenshotAlt = t("projects.screenshotAlt", {
                title: project.title,
              });
              return (
                <Reveal key={project.id} delay={0.05}>
                  <article
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block aspect-[16/10] overflow-hidden bg-portfolio-surface"
                      >
                        <Image
                          src={project.image}
                          alt={screenshotAlt}
                          fill
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-portfolio-bg/50 via-transparent to-portfolio-accent/10 opacity-80 transition-opacity group-hover:opacity-60"
                          aria-hidden
                        />
                      </a>
                    ) : (
                      <div className="relative aspect-[16/10] overflow-hidden bg-portfolio-surface">
                        <Image
                          src={project.image}
                          alt={screenshotAlt}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-portfolio-bg/50 via-transparent to-portfolio-accent/10 opacity-80"
                          aria-hidden
                        />
                      </div>
                    )}

                    <div>
                      <h3 className="font-display text-2xl font-semibold text-portfolio-bright">
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 transition-colors hover:text-portfolio-accent"
                          >
                            {project.title}
                            <FaArrowUpRightFromSquare
                              className="h-3.5 w-3.5"
                              aria-hidden
                            />
                          </a>
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </h3>
                      <p className="mt-3 leading-relaxed text-portfolio-body">
                        {project.description}
                      </p>
                      <ul
                        className="mt-5 flex flex-wrap gap-2"
                        aria-label={t("a11y.stack")}
                      >
                        {project.tech.map((tech) => (
                          <li key={tech}>
                            <span className="tech-chip">{tech}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-4 text-sm">
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-portfolio-accent hover:text-portfolio-bright"
                          >
                            {t("projects.demo")}
                          </a>
                        ) : null}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-portfolio-body hover:text-portfolio-accent"
                        >
                          <FaGithub className="h-4 w-4" />
                          {t("projects.code")}
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="border-t border-portfolio-bright/5 bg-gradient-to-br from-portfolio-surface to-portfolio-bg">
          <Reveal>
            <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 lg:py-20">
              <h2 className="font-display text-3xl font-bold text-portfolio-bright">
                {t("cta.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-portfolio-body">
                {t("cta.body")}
              </p>
              <Link
                href="/pages/contact"
                className="mt-8 inline-block rounded-md bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep px-6 py-3 text-sm font-semibold text-portfolio-bright transition-opacity hover:opacity-90"
              >
                {t("cta.button")}
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </SiteShell>
  );
}
