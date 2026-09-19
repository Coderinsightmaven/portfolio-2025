"use client";

import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/config/site";

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="orb orb-cyan w-[500px] h-[500px] -top-20 -right-40 opacity-20"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="orb orb-purple w-[400px] h-[400px] top-1/2 -left-60 opacity-15"
        style={{ animationDelay: '-5s' }}
      />
      <div 
        className="orb orb-magenta w-[300px] h-[300px] bottom-20 right-20 opacity-10"
        style={{ animationDelay: '-10s' }}
      />
    </div>
  );
};

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingOrbs />
      
      <div 
        className="cursor-glow hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: mousePosition.x > 0 ? 0.6 : 0,
        }}
      />

      <div className="relative z-10 section-container text-center">
        <div className="animate-fade-in-down mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--glass-border)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--neon-green)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon-green)]"></span>
            </span>
            <span className="text-sm text-[var(--text-secondary)]">Available for new projects</span>
          </div>
        </div>

        <h1 
          className="animate-fade-in-up delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          <span className="block text-[var(--text-primary)]">
            {siteConfig.name} <span className="text-[var(--neon-cyan)]">·</span> <span className="text-[var(--neon-cyan)]">{siteConfig.brand}</span>
          </span>
          <span className="block mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--text-secondary)]">
            {siteConfig.tagline}
          </span>
        </h1>

        <p className="animate-fade-in-up delay-300 max-w-2xl mx-auto text-lg sm:text-xl text-[var(--text-secondary)] mb-10">
          {siteConfig.description}
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary w-full sm:w-auto"
          >
            <span>View My Work</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary w-full sm:w-auto"
          >
            <span>Get In Touch</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <div className="animate-fade-in-up delay-500 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {siteConfig.services.slice(0, 4).map((service, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-sm font-medium text-[var(--neon-cyan)] mb-1"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                {service.title}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('projects')}
            className="p-2 rounded-full border border-[var(--glass-border)] text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/30 transition-colors"
            aria-label="Scroll to projects"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}
