"use client";

import { useEffect, useState, useRef } from "react";

const roles = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Creative Technologist",
];

const highlights = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "15+" },
];

const TypewriterText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 3000;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="inline-block">
      <span className="text-[var(--neon-cyan)]">{displayText}</span>
      <span className="animate-pulse text-[var(--neon-cyan)]">|</span>
    </span>
  );
};

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Cyan Orb */}
      <div 
        className="orb orb-cyan w-[500px] h-[500px] -top-20 -right-40 opacity-20"
        style={{ animationDelay: '0s' }}
      />
      {/* Medium Purple Orb */}
      <div 
        className="orb orb-purple w-[400px] h-[400px] top-1/2 -left-60 opacity-15"
        style={{ animationDelay: '-5s' }}
      />
      {/* Small Magenta Orb */}
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
      
      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: mousePosition.x > 0 ? 0.6 : 0,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 section-container text-center">
        {/* Status Badge */}
        <div className="animate-fade-in-down mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--glass-border)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--neon-green)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon-green)]"></span>
            </span>
            <span className="text-sm text-[var(--text-secondary)]">Available for new opportunities</span>
          </div>
        </div>

        {/* Role Badge */}
        <div className="animate-fade-in-down delay-100 mb-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/5">
            <TypewriterText />
          </div>
        </div>

        {/* Main Headline */}
        <h1 
          className="animate-fade-in-up delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          <span className="block text-[var(--text-primary)]">
            Hi, I&apos;m <span className="text-[var(--neon-cyan)]">Liam</span>
          </span>
          <span className="block mt-2 text-[var(--text-primary)]">
            I Build Digital
          </span>
          <span className="block mt-2">
            <span className="relative">
              <span className="text-[var(--neon-cyan)]">Experiences</span>
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 200 12" 
                fill="none"
                preserveAspectRatio="none"
              >
                <path 
                  d="M2 8C30 3 70 3 100 6C130 9 170 9 198 4" 
                  stroke="var(--neon-cyan)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-300 max-w-2xl mx-auto text-lg sm:text-xl text-[var(--text-secondary)] mb-10">
          Self-taught developer with a passion for crafting{" "}
          <span className="text-[var(--text-primary)]">thoughtful, scalable solutions</span>{" "}
          that turn ideas into impact. Specializing in modern web technologies and{" "}
          <span className="text-[var(--text-primary)]">user-centric design</span>.
        </p>

        {/* CTA Buttons */}
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
          <a
            href="https://github.com/Coderinsightmaven"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Highlight Stats */}
        <div className="animate-fade-in-up delay-500 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-3xl sm:text-4xl font-bold text-[var(--neon-cyan)] mb-1"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                {item.value}
              </div>
              <div className="text-sm text-[var(--text-muted)]">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
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

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}
