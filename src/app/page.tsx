"use client";

import { useState, useEffect } from "react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Pattern } from "@/components/pattern";
import ProjectCarousel from "@/components/ProjectCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { PatternedBackground } from "@/components/background";

import ServiceCards from "@/components/ServiceCards";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen w-full">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4 sm:px-6">
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl border border-gray-700/50 px-4 sm:px-6 py-3 sm:py-4 ring-1 ring-white/10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
              LM
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all hover:scale-105 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-all hover:scale-105 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
                href="#about"
                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-all hover:scale-105 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <AnimatedButton href="#contact" variant="primary">
                Let's talk
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden ring-1 ring-white/10">
              <div className="flex flex-col py-2">
                <a
                  href="#home"
                  className="px-6 py-3 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 text-sm font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 text-sm font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <div className="px-6 py-3">
                  <AnimatedButton href="#contact" variant="primary">
                    Let's talk
                  </AnimatedButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Flying Airplanes Background */}
        <PatternedBackground />


        <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white m-6">
              <span className="text-sm font-medium text-cyan-400 mr-2">✨</span>
              <span className="text-sm text-gray-300 font-medium">Full-Stack Developer & UI/UX Designer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient animate-text-glow">
                Crafting Digital
              </span>
              <br />
              <span className="text-white animate-pulse">Experiences That</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Amaze & Convert
              </span>
            </h1>

            <div className="flex justify-center mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl leading-relaxed text-center font-light">
                Transforming ideas into stunning, high-performance websites that drive results.
                <span className="text-cyan-400 font-medium"> Webflow certified</span> with expertise in modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-0">
              <AnimatedButton href="#contact" variant="primary">
                Start Your Project
              </AnimatedButton>
              <AnimatedButton href="#projects" variant="secondary">
                Explore Work
              </AnimatedButton>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <div className="h-16 sm:h-20 md:h-24 lg:h-32"></div>

      {/* Projects Showcase */}
      <section
        id="projects"
        className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 "
      >
        <div className="relative w-full px-4 sm:px-6 lg:px-12 border-t-2 border-gray-700">
          <div className="flex justify-center">
            <SectionHeader
              badge="💼 Portfolio"
              title="Featured Projects"
              subtitle="Explore my latest creative work and client success stories"
            />
          </div>

          <ProjectCarousel />
        </div>
      </section>
      {/* Services Section */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-gray-800 border-t border-cyan-400/30 flex justify-center">
        {/* Lava Lamp Background */}
        <div id="lamp" className="absolute pointer-events-none">
          <div id="top"></div>
          <div id="glass">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <div id="bottom"></div>
        </div>
        <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-12 z-10">
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="text-center max-w-4xl p-4">
              <SectionHeader
                title="What I Offer"
                subtitle="Comprehensive web development services tailored to your needs"
              />
            </div>
          </div>
          <div className="flex justify-center px-4">
          <ServiceCards />
          </div>
        </div>
      </section>

      <div className="h-16 sm:h-20 md:h-24 lg:h-32"></div>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-cyan-400/30"
      >
        <Pattern variant="waves" className="text-white opacity-10" />

        <div className="relative w-full px-4 sm:px-6 text-center z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Let's Build Something Amazing
          </h2>\
          <div className="flex justify-center">
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-4xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and
            create something extraordinary together.
          </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="mailto:hello@example.com"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              Get In Touch
        </a>
        <a
              href="#projects"
              className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 text-white border-t border-gray-700">
        <Pattern variant="grid" className="text-white opacity-5" />
        <div className="relative w-full px-4 sm:px-6 text-center z-10">
          <p className="text-sm sm:text-base text-gray-400">
            © 2024 LM. Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
