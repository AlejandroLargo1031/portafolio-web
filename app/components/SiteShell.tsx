"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Logo from "./logo";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "../i18n/I18nProvider";

const LINKS = [
  { href: "/", key: "nav.home", match: (p: string) => p === "/" },
  {
    href: "/pages/about",
    key: "nav.experience",
    match: (p: string) => p.startsWith("/pages/about"),
  },
  {
    href: "/pages/projects",
    key: "nav.projects",
    match: (p: string) => p.startsWith("/pages/projects"),
  },
  {
    href: "/pages/contact",
    key: "nav.contact",
    match: (p: string) => p.startsWith("/pages/contact"),
  },
] as const;

export default function SiteShell({
  children,
  contentId = "contenido",
}: {
  children: React.ReactNode;
  contentId?: string;
}) {
  const { t } = useI18n();
  const pathname = usePathname();
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

  return (
    <div
      className="page-atmosphere relative min-h-screen"
      onMouseMove={onMouseMove}
    >
      {!reduce && <div className="cursor-spotlight" aria-hidden />}

      <a
        href={`#${contentId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-portfolio-accent focus:px-3 focus:py-2 focus:text-portfolio-bg"
      >
        {t("a11y.skip")}
      </a>

      <header className="sticky top-0 z-50 border-b border-portfolio-bright/5 bg-portfolio-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={t("a11y.home")}
          >
            <Logo />
            <span className="font-display text-sm font-semibold tracking-wide text-portfolio-bright">
              Alejandro Largo
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <nav
              className="flex items-center gap-1"
              aria-label={t("a11y.sections")}
            >
              {LINKS.map((item) => {
                const active = item.match(pathname);
                const isContact = item.href === "/pages/contact";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      isContact
                        ? "ml-2 rounded-md bg-portfolio-accent px-3.5 py-2 text-sm font-semibold text-portfolio-bg transition-opacity hover:opacity-90"
                        : `rounded-md px-3 py-2 text-sm transition-colors ${
                            active
                              ? "text-portfolio-accent"
                              : "text-portfolio-body hover:text-portfolio-bright"
                          }`
                    }
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>
            <LanguageToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="rounded-md p-2 text-portfolio-bright"
              aria-label={menuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-portfolio-bright/5 px-5 py-3 md:hidden">
            {LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-portfolio-body"
                onClick={() => setMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div id={contentId}>{children}</div>

      <footer className="mx-auto max-w-6xl px-5 py-10 text-center text-sm text-portfolio-body/60 sm:px-8">
        <p>{t("footer.text")}</p>
      </footer>
    </div>
  );
}
