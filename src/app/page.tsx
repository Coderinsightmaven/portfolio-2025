"use client";

import HeroSection from "@/components/HeroSection";
import Projects from "@/components/projects";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <AboutSection />
      <Footer />
    </>
  );
}
