"use client";

import { useEffect, useRef, useState } from "react";

export type StatItem = {
  target: number;
  suffix: string;
  label: string;
};

const DEFAULT_STATS: StatItem[] = [
  { target: 2, suffix: "+", label: "Años de Experiencia" },
  { target: 4, suffix: "+", label: "Proyectos Completados" },
  { target: 10, suffix: "+", label: "Tecnologías Dominadas" },
  { target: 100, suffix: "%", label: "Satisfacción Cliente" },
];

const TOTAL_MS = 5_000;
const RANDOM_PHASE_MS = 7500;
const RANDOM_TICK_MS = 100;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function formatStat(stat: StatItem, value: number) {
  const v = Math.round(value);
  if (stat.suffix === "%") {
    return `${v}%`;
  }
  return `${v}${stat.suffix}`;
}

function randomUpper(target: number) {
  if (target === 100) return 100;
  return Math.max(target * 4, 25);
}

type Props = {
  stats?: StatItem[];
};

export default function AnimatedStatsSection({ stats = DEFAULT_STATS }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState<number[]>(() => stats.map(() => 0));
  const [isActive, setIsActive] = useState(false);

  const bucketRef = useRef(-1);
  const randomSnapshotRef = useRef<number[]>([]);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    randomSnapshotRef.current = stats.map(() => 0);
    setDisplay(stats.map(() => 0));
  }, [stats]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          setIsActive(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) return;

    bucketRef.current = -1;
    const start = performance.now();
    let raf = 0;

    const loop = (now: number) => {
      const elapsed = now - start;

      if (elapsed >= TOTAL_MS) {
        setDisplay(stats.map((s) => s.target));
        return;
      }

      const next = stats.map((stat, i) => {
        if (elapsed < RANDOM_PHASE_MS) {
          const bucket = Math.floor(elapsed / RANDOM_TICK_MS);
          if (bucket !== bucketRef.current) {
            bucketRef.current = bucket;
            randomSnapshotRef.current = stats.map((s) => {
              const hi = randomUpper(s.target);
              return Math.floor(Math.random() * (hi + 1));
            });
          }
          return randomSnapshotRef.current[i] ?? 0;
        }

        const settleDur = TOTAL_MS - RANDOM_PHASE_MS;
        const t = Math.min(1, (elapsed - RANDOM_PHASE_MS) / settleDur);
        const from = randomSnapshotRef.current[i] ?? 0;
        const eased = easeOutCubic(t);
        return Math.round(from + (stat.target - from) * eased);
      });

      setDisplay(next);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [isActive, stats]);

  return (
    <section ref={sectionRef} className="bg-portfolio-surface py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={`${stat.label}-${index}`}
              className="transform rounded-lg bg-portfolio-raised p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <h3 className="mb-2 font-mono text-3xl font-bold tabular-nums text-portfolio-accent">
                {formatStat(stat, display[index] ?? 0)}
              </h3>
              <p className="text-portfolio-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
