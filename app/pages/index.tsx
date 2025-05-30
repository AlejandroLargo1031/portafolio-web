import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Carrousel from "../components/Carrousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500">
              <Image
                src="/alejandro-2.jpg"
                alt="Alejandro Largo"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl h-24 font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ¡Hola! Soy Alejandro Largo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Desarrollador Fullstack especializado en JavaScript
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                link="/pages/projects"
                text="Explora mis proyectos"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
              />
              <Button
                link="/pages/about"
                text="Conoce más sobre mí"
                className="px-6 py-3 rounded-full border-2 border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "1+", label: "Años de Experiencia" },
                { number: "4+", label: "Proyectos Completados" },
                { number: "15+", label: "Tecnologías Dominadas" },
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
