"use client";

import { useState, useEffect } from "react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Pattern } from "@/components/pattern";
import ProjectCarousel from "@/components/ProjectCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { PatternedBackground } from "@/components/background";
import ModernNavbar from "@/components/ModernNavbar";

import ServiceCards from "@/components/ServiceCards";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="">
      {/* Modern Navigation */}
      <ModernNavbar />

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
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl leading-relaxed text-center font-light pb-2">
                Transforming ideas into stunning, high-performance websites that drive results.
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

            {/* Downward Scroll Arrow */}
            <div className="mt-12 sm:mt-16 flex flex-col items-center gap-3 animate-slow-bounce">
              <svg 
                className="w-8 h-8 text-cyan-400" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
              <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">Scroll Down</p>
            </div>

          </div>
        </div>
      </section>

      <div className="h-16 sm:h-20 md:h-24 lg:h-32"></div>

      {/* Projects Showcase */}
      <section
        id="projects"
        className="relative py-20 sm:py-24 md:py-32 lg:py-40"
      >
        <div className="relative w-full px-4 sm:px-6 lg:px-8 border-t-2 border-gray-700">
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
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 border-t border-cyan-400/30" style={{ background: 'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)' }}>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="text-center max-w-4xl">
              <SectionHeader
                title="What I Offer"
                subtitle="Comprehensive web development services tailored to your needs"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <ServiceCards />
          </div>
        </div>
      </section>

      <div className="h-16 sm:h-20 md:h-24 lg:h-32"></div>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden border-t border-cyan-400/30"
      >
        <Pattern variant="waves" className="text-white opacity-10" />

        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Let's Create Something Amazing Together
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
      <footer className="relative py-16 sm:py-20 md:py-24 text-white border-t border-gray-700">
        <Pattern variant="grid" className="text-white opacity-5" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center z-10">
          <p className="text-sm sm:text-base text-gray-400">
            © 2024 LM. Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
