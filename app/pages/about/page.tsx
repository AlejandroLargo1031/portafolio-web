"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiDjango,
  SiExpress,
  SiDeno,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiOpenai,
  SiDocker,
  SiLinux,
  SiAmazon,
  SiVercel,
  SiNginx,
} from "react-icons/si";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaCloud,
  FaGraduationCap,
  FaRobot,
  FaServer,
} from "react-icons/fa6";
import SiteShell from "@/app/components/SiteShell";
import Reveal from "@/app/components/Reveal";
import { useI18n } from "@/app/i18n/I18nProvider";

const EDUCATION_LOGOS: Record<
  string,
  { src: string; bg: string; alt: string }
> = {
  univalle: {
    src: "/univalle.png",
    bg: "bg-white",
    alt: "Universidad del Valle",
  },
  parquesoft: {
    src: "/software-development-full-stack.png",
    bg: "bg-portfolio-raised",
    alt: "ParqueSoft TI",
  },
  freecodecamp: {
    src: "/codecamp.jpeg",
    bg: "bg-white",
    alt: "freeCodeCamp",
  },
};

const SKILL_GROUP_ICONS: Record<string, IconType> = {
  frontend: FaCode,
  backend: FaLayerGroup,
  data: FaDatabase,
  ai: FaRobot,
  devops: FaCloud,
};

const SKILL_ICONS: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Astro: SiAstro,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Django: SiDjango,
  Express: SiExpress,
  Deno: SiDeno,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  "GPT": SiOpenai,
  RAG: FaBrain,
  Embeddings: FaBrain,
  "Azure Cognitive": FaCloud,
  "Prompt Engineering": FaBrain,
  Docker: SiDocker,
  Linux: SiLinux,
  AWS: SiAmazon,
  Vercel: SiVercel,
  Nginx: SiNginx,
  PM2: FaServer,
};

export default function About() {
  const { t, messages } = useI18n();
  const reduce = useReducedMotion();
  const experiences = messages.experiences;
  const education = messages.education;
  const skillGroups = messages.skillGroups;

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-accent">
            {t("pages.experience.eyebrow")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-portfolio-bright sm:text-5xl">
            {t("pages.experience.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-portfolio-body">
            {t("pages.experience.subtitle")}
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-portfolio-body">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
        </Reveal>

        <section className="mt-20" aria-labelledby="exp-timeline-title">
          <Reveal>
            <h2
              id="exp-timeline-title"
              className="font-display text-2xl font-bold text-portfolio-bright sm:text-3xl"
            >
              {t("experience.title")}
            </h2>
          </Reveal>

          <ol className="relative mt-12 space-y-0 md:pl-2">
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
                      {job.tech.map((tech) => {
                        const Icon = SKILL_ICONS[tech];
                        return (
                          <li key={tech}>
                            <span className="tech-chip inline-flex items-center gap-1.5">
                              {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden /> : null}
                              {tech}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        <section
          className="mt-8 border-t border-portfolio-bright/5 pt-16"
          aria-labelledby="skills-title"
        >
          <Reveal>
            <h2
              id="skills-title"
              className="font-display text-2xl font-bold text-portfolio-bright sm:text-3xl"
            >
              {t("pages.experience.skillsTitle")}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => {
              const GroupIcon = SKILL_GROUP_ICONS[group.id] ?? FaCode;
              return (
                <Reveal key={group.id} delay={i * 0.05}>
                  <div className="h-full rounded-lg bg-portfolio-surface/50 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-portfolio-accent/15 text-portfolio-accent">
                        <GroupIcon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-portfolio-bright">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => {
                        const Icon = SKILL_ICONS[item];
                        return (
                          <li key={item}>
                            <span className="tech-chip inline-flex items-center gap-1.5">
                              {Icon ? (
                                <Icon className="h-3.5 w-3.5" aria-hidden />
                              ) : null}
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section
          className="mt-20 border-t border-portfolio-bright/5 pt-16"
          aria-labelledby="edu-title"
        >
          <Reveal>
            <h2
              id="edu-title"
              className="font-display text-2xl font-bold text-portfolio-bright sm:text-3xl"
            >
              {t("pages.experience.educationTitle")}
            </h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {education.map((item, i) => {
              const logo = EDUCATION_LOGOS[item.id];
              return (
                <Reveal key={item.id} delay={i * 0.06}>
                  <article className="flex items-start gap-5">
                    <div
                      className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden ${
                        logo?.bg ?? "bg-portfolio-raised"
                      }`}
                      aria-hidden
                    >
                      {logo ? (
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain p-1.5"
                          sizes="64px"
                        />
                      ) : (
                        <FaGraduationCap className="h-7 w-7 text-portfolio-accent" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-portfolio-bright">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-portfolio-body">{item.org}</p>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-portfolio-body">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <Reveal>
          <div className="mt-20 border-t border-portfolio-bright/5 pt-16 text-center">
            <h2 className="font-display text-2xl font-bold text-portfolio-bright">
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
      </main>
    </SiteShell>
  );
}
