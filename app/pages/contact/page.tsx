"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import SiteShell from "@/app/components/SiteShell";
import Reveal from "@/app/components/Reveal";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Contact() {
  const { t } = useI18n();

  const rows = [
    {
      id: "phone",
      label: t("pages.contact.phone"),
      value: "+57 324 570 93 64",
      href: "https://wa.me/573245709364",
    },
    {
      id: "email",
      label: t("pages.contact.email"),
      value: "alejandropulidolargo@gmail.com",
      href: "mailto:alejandropulidolargo@gmail.com",
    },
    {
      id: "location",
      label: t("pages.contact.location"),
      value: t("pages.contact.locationValue"),
    },
    {
      id: "availability",
      label: t("pages.contact.availability"),
      value: t("pages.contact.availabilityValue"),
    },
  ];

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-accent">
            {t("pages.contact.eyebrow")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-portfolio-bright sm:text-5xl">
            {t("pages.contact.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-portfolio-body">
            {t("pages.contact.subtitle")}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ul className="space-y-6">
              {rows.map((row) => (
                <li key={row.id}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-accent">
                    {row.label}
                  </p>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        row.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-1 block text-lg text-portfolio-bright transition-colors hover:text-portfolio-accent"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg text-portfolio-bright">{row.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-portfolio-bright/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h2 className="font-display text-xl font-semibold text-portfolio-bright">
                {t("pages.contact.socialTitle")}
              </h2>
              <ul
                className="mt-6 flex items-center gap-5"
                aria-label={t("a11y.social")}
              >
                <li>
                  <a
                    href="https://github.com/AlejandroLargo1031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-body transition-colors hover:text-portfolio-accent"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-7 w-7" />
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
                    <FaLinkedin className="h-7 w-7" />
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
                    <FaWhatsapp className="h-7 w-7" />
                  </a>
                </li>
              </ul>

              <a
                href="/CV-Alejandro-Largo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-md border border-portfolio-accent/50 px-5 py-2.5 text-sm font-semibold text-portfolio-accent transition-colors hover:border-portfolio-accent hover:bg-portfolio-accent/10"
              >
                {t("hero.ctaResume")}
              </a>
            </div>
          </Reveal>
        </div>
      </main>
    </SiteShell>
  );
}
