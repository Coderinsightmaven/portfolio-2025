'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useReducedMotion } from 'framer-motion';

const navigation = {
  main: [
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: siteConfig.social.github,
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: siteConfig.social.twitter,
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-[var(--border)]">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-1 group"
            >
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

            <nav className="hidden sm:block">
              <ul className="flex items-center gap-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-xs text-[var(--text-faint)] hover:text-[var(--text-muted)] transition-colors"
                      style={{ transitionDuration: 'var(--duration-fast)' }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[var(--text-faint)] hover:text-[var(--text-muted)] transition-colors"
                style={{ transitionDuration: 'var(--duration-fast)' }}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-4 h-4" aria-hidden="true" />
              </Link>
            ))}
            
            <span className="text-xs text-[var(--text-faint)]">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
