"use client";

import Link from "next/link";
import Logo from "../components/logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "../i18n/I18nProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

  const isActive = (path: string) => pathname === path;

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/pages/about", label: t("nav.aboutPage") },
    { href: "/pages/projects", label: t("nav.projects") },
    { href: "/pages/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-portfolio-bright/5 bg-portfolio-bg/90 py-4 text-portfolio-bright backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3">
          <Logo />

          <div className="flex items-center gap-2">
            <LanguageToggle className="md:order-2" />

            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="rounded-lg p-2 transition-colors hover:bg-portfolio-surface md:hidden"
              aria-label={isMenuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <ul
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } absolute left-0 right-0 top-full flex-col space-y-1 bg-portfolio-bg p-4 md:relative md:top-auto md:order-1 md:flex md:flex-row md:space-x-1 md:space-y-0 md:bg-transparent md:p-0`}
            >
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-4 py-2 text-sm transition-colors ${
                      isActive(item.href)
                        ? "text-portfolio-accent"
                        : "text-portfolio-body hover:text-portfolio-bright"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
