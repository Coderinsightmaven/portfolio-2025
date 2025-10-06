'use client'

import { useState, useEffect } from 'react'
import { AnimatedButton } from './AnimatedButton'

export default function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-gray-900/90 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10'
        : 'bg-gray-900/70 backdrop-blur-xl border-b border-white/10 shadow-lg'
    }`}>
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <nav aria-label="Global" className="flex items-center justify-between py-3 lg:py-6">
          {/* Logo - Desktop Only */}
          <button
            onClick={() => scrollToSection('home')}
            className="hidden lg:block flex-shrink-0"
          >
            <span className="sr-only">Liam&apos;s Portfolio</span>
            <span className="relative text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 group">
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                <span className="relative">LM</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </span>
            </span>
          </button>

          {/* Mobile Navigation - Full Width */}
          <div className="flex lg:hidden w-full justify-center overflow-x-auto gap-2 scrollbar-hide">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="relative px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 group rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 whitespace-nowrap"
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute inset-0 rounded-lg bg-gradient-to-r ${
                  index === 0 ? 'from-cyan-500/20 to-blue-500/20' :
                  index === 1 ? 'from-blue-500/20 to-purple-500/20' :
                  index === 2 ? 'from-purple-500/20 to-pink-500/20' :
                  'from-pink-500/20 to-cyan-500/20'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
              </button>
            ))}
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:gap-x-8">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 group rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
                  index === 0 ? 'from-cyan-500/20 to-blue-500/20' :
                  index === 1 ? 'from-blue-500/20 to-purple-500/20' :
                  index === 2 ? 'from-purple-500/20 to-pink-500/20' :
                  'from-pink-500/20 to-cyan-500/20'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${
                  index === 0 ? 'from-cyan-400 to-blue-400' :
                  index === 1 ? 'from-blue-400 to-purple-400' :
                  index === 2 ? 'from-purple-400 to-pink-400' :
                  'from-pink-400 to-cyan-400'
                } group-hover:w-3/4 transition-all duration-300 rounded-full shadow-lg`}></span>
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop Only */}
          <div className="hidden lg:flex flex-shrink-0">
            <AnimatedButton
              href="#contact"
              variant="primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </AnimatedButton>
          </div>
        </nav>
      </div>

    </header>
  )
}
