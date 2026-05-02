import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Carrousel from "../components/Carrousel";
import HeroImageCarousel from "../components/HeroImageCarousel";
import AnimatedStatsSection from "../components/AnimatedStatsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-portfolio-bg bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,rgba(89,150,146,0.14),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(223,229,236,0.05),transparent_50%),linear-gradient(to_bottom,#11172a,#1a2238_42%,#11172a)]">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <section className="w-full px-4 py-8 md:py-12">
          <HeroImageCarousel />
        </section>

        <AnimatedStatsSection />

        <div className="w-full py-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep bg-clip-text text-transparent">
          </h2>
          <Carrousel />
        </div>

        <div className="bg-portfolio-surface py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep bg-clip-text text-transparent">
              ¿Listo para crear algo increíble?
            </h2>
            <p className="text-portfolio-body mb-8 max-w-2xl mx-auto">
              Transformemos tus ideas en realidad. Estoy aquí para ayudarte a construir tu próximo proyecto.
            </p>
            <Button
              link="/pages/contact"
              text="Hablemos de tu proyecto"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-deep text-portfolio-bright font-semibold shadow-lg shadow-black/25 hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
