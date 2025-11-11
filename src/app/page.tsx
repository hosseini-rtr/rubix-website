import CoreModules from "@/components/CoreModules";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import HeroNew from "@/components/HeroNew";
import Navigation from "@/components/Navigation";
import PhilosophyTeaser from "@/components/PhilosophyTeaser";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black">
      <Navigation />

      <HeroNew />

      <CoreModules />

      <PhilosophyTeaser />

      <CTABlock />

      <Footer />
    </main>
  );
}
