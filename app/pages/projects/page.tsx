"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SiteShell from "@/app/components/SiteShell";
import Reveal from "@/app/components/Reveal";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Projects() {
  const { t, messages } = useI18n();
  const projects = messages.projectList;

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-accent">
            {t("nav.projects")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-portfolio-bright sm:text-5xl">
            {t("projects.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-portfolio-body">
            {t("projects.subtitle")}
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
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
                    <h2 className="font-display text-2xl font-semibold text-portfolio-bright">
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
                    </h2>
                    <p className="mt-3 leading-relaxed text-portfolio-body">
                      {project.description}
                    </p>

                    {project.features?.length ? (
                      <div className="mt-5">
                        <h3 className="text-sm font-semibold text-portfolio-accent">
                          {t("projects.featuresTitle")}
                        </h3>
                        <ul className="mt-2 space-y-1.5 text-sm text-portfolio-body">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex gap-2">
                              <span className="text-portfolio-accent" aria-hidden>
                                ·
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

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

        <Reveal>
          <div className="mt-20 border-t border-portfolio-bright/5 pt-16 text-center">
            <h2 className="font-display text-2xl font-bold text-portfolio-bright">
              {t("projects.ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-portfolio-body">
              {t("projects.ctaBody")}
            </p>
            <Link
              href="/pages/contact"
              className="mt-8 inline-block rounded-md bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep px-6 py-3 text-sm font-semibold text-portfolio-bright transition-opacity hover:opacity-90"
            >
              {t("projects.ctaButton")}
            </Link>
          </div>
        </Reveal>
      </main>
    </SiteShell>
  );
}
