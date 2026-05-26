import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RazonesSection from "./components/RazonesSection";
import LiveWorkPlaySection from "./components/LiveWorkPlaySection";
import AmenidadesSection from "./components/AmenidadesSection";
import DepartamentosSection from "./components/DepartamentosSection";
import AcabadosSection from "./components/AcabadosSection";
import PlantasSection from "./components/PlantasSection";
import UbicacionSection from "./components/UbicacionSection";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RazonesSection />
        <FadeIn direction="zoom">
          <LiveWorkPlaySection />
        </FadeIn>
        <AmenidadesSection />
        <FadeIn direction="left">
          <DepartamentosSection />
        </FadeIn>
        <FadeIn direction="right">
          <AcabadosSection />
        </FadeIn>
        <FadeIn direction="up">
          <PlantasSection />
        </FadeIn>
        <FadeIn direction="up">
          <UbicacionSection />
        </FadeIn>
      </main>
      <FadeIn direction="up">
        <Footer />
      </FadeIn>
      <WhatsAppButton />
    </>
  );
}
