'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';
import { motion, useReducedMotion } from 'framer-motion';

const navigation = [
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function FixedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'projects', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.slice(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    const section = href.slice(1);
    return activeSection === section;
  };

  return (
    <>
      <motion.header 
        initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
        style={{ transitionDuration: 'var(--duration-base)' }}
      >
        <nav aria-label="Global" className="mx-auto max-w-[1080px] px-6">
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <button
                onClick={() => scrollToSection('#home')}
                className="group flex items-center gap-1"
              >
                <span className="sr-only">{siteConfig.name} · {siteConfig.brand}</span>
                <span 
                  className="text-sm font-medium text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors"
                  style={{ fontFamily: 'var(--font-display)', transitionDuration: 'var(--duration-fast)' }}
                >
                  {siteConfig.name}
                </span>
                <span className="text-[var(--text-faint)]">·</span>
                <span 
                  className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontFamily: 'var(--font-display)', transitionDuration: 'var(--duration-fast)' }}
                >
                  {siteConfig.brand}
                </span>
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link px-3 py-2 rounded-md transition-colors ${
                    isActive(item.href) ? 'active text-[var(--text)]' : ''
                  }`}
                  style={{ transitionDuration: 'var(--duration-fast)' }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-sm py-2 px-4"
              >
                Get in Touch
              </button>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                style={{ transitionDuration: 'var(--duration-fast)' }}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-[9998] bg-black/60" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full max-w-xs overflow-y-auto bg-[var(--bg-raised)] border-l border-[var(--border)]">
          <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-1"
            >
              <span 
                className="text-sm font-medium text-[var(--text-muted)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {siteConfig.name}
              </span>
              <span className="text-[var(--text-faint)]">·</span>
              <span 
                className="text-sm font-medium text-[var(--text)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {siteConfig.brand}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              style={{ transitionDuration: 'var(--duration-fast)' }}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="p-5 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[var(--text)] bg-[var(--accent-muted)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-canvas)]'
                }`}
                style={{ transitionDuration: 'var(--duration-fast)' }}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="p-5 border-t border-[var(--border)]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('#contact');
              }}
              className="w-full btn-primary"
            >
              Get in Touch
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
