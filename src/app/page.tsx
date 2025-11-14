import CTACinematic from "@/components/CTACinematic";
import ClientsSection from "@/components/ClientsSection";
import CortexGrid from "@/components/CortexGrid";
import Footer from "@/components/Footer";
import HeroCinematic from "@/components/HeroCinematic";
import NavigationCinematic from "@/components/NavigationCinematic";
import PhilosophyCinematic from "@/components/PhilosophyCinematic";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import SocialImpactSection from "@/components/SocialImpactSection";
import TeamSection from "@/components/TeamSection";
import TechnologiesSection from "@/components/TechnologiesSection";

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
