'use client';

import Navbar from '../../components/Navbar';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const INTRO_FULL =
  '¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para colaboraciones y nuevos desafíos.';

const TYPE_MS = 38;
const CONTACT_STAGGER_MS = 340;

const contactRows = [
  {
    label: 'Teléfono',
    value: '+57 324 570 93 64',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    label: 'Email',
    value: 'alejandropulidolargo@gmail.com',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: 'Ubicación',
    value: 'Roldanillo, Colombia',
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
  },
  {
    label: 'Disponibilidad',
    value: 'Disponible para proyectos freelance y tiempo completo',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

const popSpring = {
  type: 'spring' as const,
  stiffness: 520,
  damping: 22,
  mass: 0.6,
};

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573245709364', '_blank');
  };

  const [typedIntro, setTypedIntro] = useState('');
  const [introDone, setIntroDone] = useState(false);
  const [contactVisible, setContactVisible] = useState(0);
  const [showSocialBlock, setShowSocialBlock] = useState(false);

  /* Máquina de escribir — intro */
  useEffect(() => {
    if (typedIntro.length >= INTRO_FULL.length) {
      setIntroDone(true);
      return;
    }
    const t = window.setTimeout(() => {
      setTypedIntro(INTRO_FULL.slice(0, typedIntro.length + 1));
    }, TYPE_MS);
    return () => window.clearTimeout(t);
  }, [typedIntro]);

  /* Filas de contacto, una tras otra */
  useEffect(() => {
    if (!introDone) return;
    if (contactVisible >= contactRows.length) return;
    const t = window.setTimeout(() => {
      setContactVisible((n) => n + 1);
    }, CONTACT_STAGGER_MS);
    return () => window.clearTimeout(t);
  }, [introDone, contactVisible]);

  /* Bloque redes cuando terminan las filas */
  useEffect(() => {
    if (contactVisible < contactRows.length) return;
    const t = window.setTimeout(() => setShowSocialBlock(true), 280);
    return () => window.clearTimeout(t);
  }, [contactVisible]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-portfolio-bg to-portfolio-surface">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto min-h-[4.5rem] max-w-2xl text-lg text-portfolio-body md:min-h-[3.75rem]">
            {typedIntro}
            {!introDone && (
              <span className="ml-0.5 inline-block animate-pulse font-light text-portfolio-accent">
                |
              </span>
            )}
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="space-y-8 rounded-xl bg-portfolio-surface p-5">
            <div>
              <h2 className="mb-6 text-center text-2xl font-semibold text-portfolio-bright">
                Información de Contacto
              </h2>
              <div className="space-y-4">
                {contactRows.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={false}
                    animate={
                      i < contactVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -28 }
                    }
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-portfolio-accent">
                      <svg
                        className="h-6 w-6 text-portfolio-bg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {row.icon}
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-medium text-portfolio-bright/90">
                        {row.label}
                      </h3>
                      <p className="text-portfolio-body">{row.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {showSocialBlock && (
                <motion.div
                  key="social"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="border-t border-portfolio-accent/20 pt-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...popSpring, delay: 0 }}
                    className="mb-6 text-center text-2xl font-semibold text-portfolio-bright"
                  >
                    Redes Sociales
                  </motion.h2>
                  <div className="flex justify-center space-x-6">
                    <motion.a
                      href="https://github.com/AlejandroLargo1031"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ ...popSpring, delay: 0.15 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-portfolio-raised transition-colors hover:bg-portfolio-accent"
                    >
                      <FaGithub className="h-7 w-7 text-portfolio-bright" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/alejandro-largo-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ ...popSpring, delay: 0.38 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-portfolio-raised transition-colors hover:bg-portfolio-accent"
                    >
                      <FaLinkedin className="h-7 w-7 text-portfolio-bright" />
                    </motion.a>
                    <motion.button
                      type="button"
                      onClick={handleWhatsAppClick}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ ...popSpring, delay: 0.61 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-portfolio-raised transition-colors hover:bg-[#25D366]"
                    >
                      <FaWhatsapp className="h-7 w-7 text-portfolio-bright" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
