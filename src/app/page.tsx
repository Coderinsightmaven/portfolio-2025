"use client";

import HeroSection from "@/components/HeroSection";
import Projects from "@/components/projects";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
