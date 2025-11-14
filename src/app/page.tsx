import CTACinematic from "@/components/CTACinematic";
import CortexGrid from "@/components/CortexGrid";
import Footer from "@/components/Footer";
import HeroCinematic from "@/components/HeroCinematic";
import NavigationCinematic from "@/components/NavigationCinematic";
import PhilosophyCinematic from "@/components/PhilosophyCinematic";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import TeamSection from "@/components/TeamSection";
import ClientsSection from "@/components/ClientsSection";
import SocialImpactSection from "@/components/SocialImpactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black">
      <NavigationCinematic />

      <HeroCinematic />

      <CortexGrid />

      <PhilosophyCinematic />

      <TechnologiesSection />

      <ProjectTypesSection />

      <TeamSection />

      <ClientsSection />

      <SocialImpactSection />

      <CTACinematic />

      <Footer />
    </main>
  );
}
