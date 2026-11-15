"use client";

import { useI18n, type Locale } from "../i18n/I18nProvider";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  const options: { id: Locale; label: string }[] = [
    { id: "es", label: "ES" },
    { id: "en", label: "EN" },
  ];

  return (
    <div
      className={`inline-flex items-center rounded-md border border-portfolio-bright/10 bg-portfolio-surface/60 p-0.5 ${className}`}
      role="group"
      aria-label={t("a11y.language")}
    >
      {options.map((opt) => {
        const active = locale === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLocale(opt.id)}
            aria-pressed={active}
            aria-label={opt.id === "es" ? t("a11y.switchToEs") : t("a11y.switchToEn")}
            className={`min-w-[2.25rem] rounded px-2 py-1 text-xs font-semibold tracking-wide transition-colors ${
              active
                ? "bg-portfolio-accent text-portfolio-bg"
                : "text-portfolio-body hover:text-portfolio-bright"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
