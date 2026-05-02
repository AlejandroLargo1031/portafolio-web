"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Button from "./Button";

/** Ruta por defecto; puedes usar la misma en todos los slides o una por `src`. */
export const HERO_CAROUSEL_DEFAULT_IMAGE = "/alejandro-1.jpeg";

type Slide = {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  alt: string;
};

const slides: Slide[] = [
  {
    id: 0,
    src: HERO_CAROUSEL_DEFAULT_IMAGE,
    title: "¡Hola! Soy Alejandro Largo",
    subtitle: "Desarrollador Fullstack especializado en JavaScript",
    alt: "Alejandro Largo",
  },
  {
    id: 1,
    src: "/api.jpg",
    title: "Proyectos que resuelven problemas reales",
    subtitle: "De la idea al despliegue: APIs, interfaces y buenas prácticas",
    alt: "Proyectos destacados",
  },
  {
    id: 2,
    src: "/js.webp",
    title: "Stack centrado en JavaScript",
    subtitle: "React, Node y herramientas modernas para productos mantenibles",
    alt: "Tecnologías y stack",
  },
  {
    id: 3,
    src: "/equipo.png",
    title: "Trabajo en equipo y código limpio",
    subtitle: "Comunicación clara, revisiones y entregas que se pueden escalar",
    alt: "Colaboración y calidad",
  },
  {
    id: 4,
    src: "/sociedad.avif",
    title: "Construyamos tu siguiente versión",
    subtitle: "¿Tienes un reto técnico? Hablemos y lo convertimos en plan",
    alt: "Contacto y próximos pasos",
  },
];

export default function HeroImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const n = slides.length;

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % n);
  }, [n]);

  const prevIdx = (activeIndex - 1 + n) % n;
  const nextIdx = (activeIndex + 1) % n;

  /**
   * Central max-w-xl (36rem). Laterales al 95% del ancho central (34.2rem) sin transform,
   * para que no se encogen por columnas 1fr estrechas en pantallas medianas.
   */
  const cardBaseClass =
    "relative isolate aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-portfolio-bright/15 lg:aspect-[5/7]";

  const sideCardClass = `${cardBaseClass} group w-[clamp(12rem,26vw,34.2rem)] shrink-0 shadow-xl shadow-black/40 transition-all duration-300 ease-out hover:z-40 hover:scale-[1.05] hover:shadow-2xl hover:ring-portfolio-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg origin-center`;

  const sideImageClass =
    "object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110";

  const centerCardClass = `${cardBaseClass} z-10 w-full max-w-xl shrink-0 shadow-2xl shadow-black/40 sm:w-[36rem]`;

  return (
    <div className="mx-auto w-full max-w-[100rem] px-2 sm:px-4">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3 md:gap-4 lg:gap-6">
        <div className="order-2 flex w-full justify-center sm:order-1 sm:w-auto sm:justify-end">
          <button
            type="button"
            onClick={goPrev}
            className={sideCardClass}
            aria-label={`Imagen anterior: ${slides[prevIdx].title}`}
          >
            <Image
              src={slides[prevIdx].src}
              alt={slides[prevIdx].alt}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1280px) 30vw, 548px"
              className={sideImageClass}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_28%,rgba(0,0,0,0.5)_68%,rgba(0,0,0,0.82)_100%)]"
              aria-hidden
            />
            <div className="relative z-10 flex h-full min-h-0 flex-col justify-end px-3 pb-5 pt-10 text-center sm:px-4 sm:pb-6">
              <h2 className="mb-1.5 line-clamp-3 text-sm font-bold leading-snug tracking-tight text-portfolio-bright drop-shadow-md sm:mb-2 sm:text-base md:text-lg">
                {slides[prevIdx].title}
              </h2>
              <p className="line-clamp-3 text-[0.65rem] font-medium uppercase leading-snug tracking-[0.15em] text-portfolio-bright/90 sm:text-xs md:text-sm">
                {slides[prevIdx].subtitle}
              </p>
            </div>
          </button>
        </div>

        <div className={`${centerCardClass} order-1 sm:order-2`}>
          <Image
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            fill
            priority
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 38vw, 576px"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_35%,rgba(0,0,0,0.55)_75%,rgba(0,0,0,0.85)_100%)]"
            aria-hidden
          />
          <div className="relative z-10 flex h-full min-h-0 flex-col justify-end px-4 pb-8 pt-12 sm:px-6 sm:pb-10 md:pb-12">
            <div className="mx-auto w-full max-w-[20rem] text-center sm:max-w-md">
              <h1
                key={slides[activeIndex].id}
                className="mb-2 text-2xl font-bold tracking-tight text-portfolio-bright drop-shadow-md sm:text-3xl md:text-4xl"
              >
                {slides[activeIndex].title}
              </h1>
              <p
                key={`sub-${slides[activeIndex].id}`}
                className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-portfolio-bright/90 sm:text-base md:mb-8 md:text-lg"
              >
                {slides[activeIndex].subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Button
                  link="/pages/projects"
                  text="Explora mis proyectos"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep text-portfolio-bright font-semibold shadow-lg shadow-black/30 hover:opacity-90 transition-opacity"
                />
                <Button
                  link="/pages/about"
                  text="Conoce más sobre mí"
                  className="px-6 py-3 rounded-full border-2 border-portfolio-accent/70 bg-portfolio-accent/15 text-portfolio-bright font-semibold backdrop-blur-sm hover:bg-portfolio-accent/25 hover:border-portfolio-accent transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="order-3 flex w-full justify-center sm:w-auto sm:justify-start">
          <button
            type="button"
            onClick={goNext}
            className={sideCardClass}
            aria-label={`Imagen siguiente: ${slides[nextIdx].title}`}
          >
            <Image
              src={slides[nextIdx].src}
              alt={slides[nextIdx].alt}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1280px) 30vw, 548px"
              className={sideImageClass}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_28%,rgba(0,0,0,0.5)_68%,rgba(0,0,0,0.82)_100%)]"
              aria-hidden
            />
            <div className="relative z-10 flex h-full min-h-0 flex-col justify-end px-3 pb-5 pt-10 text-center sm:px-4 sm:pb-6">
              <h2 className="mb-1.5 line-clamp-3 text-sm font-bold leading-snug tracking-tight text-portfolio-bright drop-shadow-md sm:mb-2 sm:text-base md:text-lg">
                {slides[nextIdx].title}
              </h2>
              <p className="line-clamp-3 text-[0.65rem] font-medium uppercase leading-snug tracking-[0.15em] text-portfolio-bright/90 sm:text-xs md:text-sm">
                {slides[nextIdx].subtitle}
              </p>
            </div>
          </button>
        </div>
      </div>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
        aria-label="Posición en el carrusel"
      >
        {slides.map((_, i) => (
          <button
            key={slides[i].id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex
                ? "w-8 bg-portfolio-accent"
                : "w-2 bg-portfolio-body/50 hover:bg-portfolio-accent/60"
            }`}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
