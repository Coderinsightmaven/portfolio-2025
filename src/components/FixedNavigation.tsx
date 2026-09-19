'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ContactForm from './ContactForm';
import { siteConfig } from '@/config/site';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function FixedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
        behavior: 'smooth'
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
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          scrolled 
            ? 'glass-subtle py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <nav aria-label="Global" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <button
                onClick={() => scrollToSection('#home')}
                className="group -m-1.5 p-1.5 flex items-center gap-2"
              >
                <span className="sr-only">{siteConfig.name} · {siteConfig.brand}</span>
                <div className="relative">
                  <span 
                    className="text-xl font-extrabold"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <span className="text-[var(--text-primary)]">{siteConfig.name}</span>
                    <span className="text-[var(--neon-cyan)]"> · </span>
                    <span className="text-[var(--neon-cyan)]">{siteConfig.brand}</span>
                  </span>
                  <div className="absolute -inset-2 bg-[var(--neon-cyan)] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 rounded-full" />
                </div>
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'active' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                onClick={() => setContactFormOpen(true)}
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[var(--bg-primary)] bg-[var(--neon-cyan)] rounded-full transition-all duration-300 hover:bg-[var(--neon-cyan-muted)] hover:shadow-[var(--glow-cyan)]"
              >
                <span>Let&apos;s Talk</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full max-w-sm overflow-y-auto bg-[var(--bg-secondary)] border-l border-[var(--glass-border)]">
          <div className="flex items-center justify-between p-6 border-b border-[var(--glass-border)]">
            <button
              onClick={() => scrollToSection('#home')}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">{siteConfig.name} · {siteConfig.brand}</span>
              <span 
                className="text-xl font-extrabold"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                <span className="text-[var(--text-primary)]">{siteConfig.name}</span>
                <span className="text-[var(--neon-cyan)]"> · </span>
                <span className="text-[var(--neon-cyan)]">{siteConfig.brand}</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="p-6 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="p-6 border-t border-[var(--glass-border)]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setContactFormOpen(true);
              }}
              className="w-full btn-primary justify-center"
            >
              Let&apos;s Talk
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center justify-center gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </>
  );
}
