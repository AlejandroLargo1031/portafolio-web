import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Carrousel from "../components/Carrousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900/95 bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,rgba(59,130,246,0.12),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(147,51,234,0.08),transparent_50%),linear-gradient(to_bottom,#272c50,#18181b_40%,#272c50)]">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <section className="w-full px-4 py-8 md:py-12">
          <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg">
            <div className="relative isolate aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10 lg:aspect-[5/7]">
              <Image
                src="/alejandro-2.png"
                alt="Alejandro Largo"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_35%,rgba(0,0,0,0.55)_75%,rgba(0,0,0,0.85)_100%)]"
                aria-hidden
              />
              <div className="relative z-10 flex h-full min-h-0 flex-col justify-end px-4 pb-8 pt-12 sm:px-6 sm:pb-10 md:pb-12">
                <div className="mx-auto w-full max-w-[20rem] text-center sm:max-w-md">
                  <h1 className="mb-2 text-2xl font-bold tracking-tight text-white drop-shadow-md sm:text-3xl md:text-4xl">
                    ¡Hola! Soy Alejandro Largo
                  </h1>
                  <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-white/85 sm:text-base md:mb-8 md:text-lg">
                    Desarrollador Fullstack especializado en JavaScript
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    <Button
                      link="/pages/projects"
                      text="Explora mis proyectos"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-black/30 hover:opacity-90 transition-opacity"
                    />
                    <Button
                      link="/pages/about"
                      text="Conoce más sobre mí"
                      className="px-6 py-3 rounded-full border-2 border-white/80 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-800 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "2+", label: "Años de Experiencia" },
                { number: "4+", label: "Proyectos Completados" },
                { number: "10+", label: "Tecnologías Dominadas" },
                { number: "100%", label: "Satisfacción Cliente" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full py-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          </h2>
          <Carrousel />
        </div>

        <div className="bg-gray-800 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ¿Listo para crear algo increíble?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transformemos tus ideas en realidad. Estoy aquí para ayudarte a construir tu próximo proyecto.
            </p>
            <Button
              link="/pages/contact"
              text="Hablemos de tu proyecto"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
