"use client";

import AboutPanel from "@/components/AboutPanel";
import ContactFormSection from "@/components/ContactFormSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import HeroBanner from "@/components/HeroBanner";
import ProjectShowcase from "@/components/ProjectShowcase";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SkillsMatrix from "@/components/SkillsMatrix";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <HeroBanner />
      <AboutPanel />
      <ExperienceTimeline />
      <ProjectShowcase />
      <SkillsMatrix />
      <ContactFormSection />
      <SiteFooter />
    </div>
  );
}
