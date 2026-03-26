import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Lazy load the 3D background for better performance
const ThreeBackground = lazy(() => import("@/components/ThreeBackground"));

// Loading fallback for 3D scene
const CanvasLoader = () => (
  <div className="fixed inset-0 -z-10 bg-background" />
);

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* 3D Background - loaded lazily */}
    <Suspense fallback={<CanvasLoader />}>
      <ThreeBackground />
    </Suspense>

    {/* Content layers */}
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;
