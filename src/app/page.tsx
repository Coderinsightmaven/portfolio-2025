"use client";

import { useState, useEffect } from "react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Pattern } from "@/components/pattern";
import ProjectCarousel from "@/components/ProjectCarousel";
import { SectionHeader } from "@/components/SectionHeader";

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
        <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              LM
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all hover:scale-105 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-all hover:scale-105 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-all hover:scale-105 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <AnimatedButton href="#contact" variant="secondary">
                Let's talk
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
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
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
              <div className="flex flex-col py-2">
                <a
                  href="#home"
                  className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <div className="px-6 py-3">
                  <AnimatedButton href="#contact" variant="secondary">
                    Let's talk
                  </AnimatedButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-4 left-8 sm:-bottom-8 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative w-full px-4 sm:px-6 z-10 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                High-quality Solutions
              </span>
              <br />
              <span className="text-gray-900">for Startups and Agencies</span>
            </h1>
            <div className="flex justify-center">
              <p className="sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-4xl leading-relaxed text-center">
                As a certified Webflow developer and experienced UI/UX designer,
                I create custom, high-quality websites that stand out and are
                fun to use.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <AnimatedButton href="#contact" variant="primary">
                Let's talk
              </AnimatedButton>
              <AnimatedButton href="#projects" variant="secondary">
                View Projects
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 sm:h-20 md:h-24 lg:h-32"></div>

      {/* Projects Showcase */}
      <section
        id="projects"
        className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-white border-t border-gray-100"
      >
        <div className="relative w-full px-4 sm:px-6 lg:px-12 ">
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
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700 flex justify-center">
        <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="text-center max-w-4xl p-4">
              <SectionHeader
                badge="⚡ Services"
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
        className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 overflow-hidden border-t border-cyan-400/30"
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
      <footer className="relative py-16 sm:py-20 md:py-24 bg-gray-900 text-white border-t border-gray-700">
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
