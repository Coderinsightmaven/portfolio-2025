'use client';

import { siteConfig } from '@/config/site';

const getServiceIcon = (icon: string) => {
  switch (icon) {
    case 'globe':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    case 'server':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      );
    case 'creditcard':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      );
    default:
      return null;
  }
};

const getServiceColor = (index: number) => {
  const colors = ['cyan', 'purple', 'magenta', 'cyan'];
  return colors[index % colors.length];
};

const getColorClasses = (color: string) => {
  switch (color) {
    case 'cyan':
      return {
        border: 'border-[var(--neon-cyan)]/20 hover:border-[var(--neon-cyan)]/50',
        bg: 'bg-[var(--neon-cyan)]/10',
        text: 'text-[var(--neon-cyan)]',
        glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
      };
    case 'purple':
      return {
        border: 'border-[var(--neon-purple)]/20 hover:border-[var(--neon-purple)]/50',
        bg: 'bg-[var(--neon-purple)]/10',
        text: 'text-[var(--neon-purple)]',
        glow: 'group-hover:shadow-[0_0_30px_rgba(157,0,255,0.15)]',
      };
    case 'magenta':
      return {
        border: 'border-[var(--neon-magenta)]/20 hover:border-[var(--neon-magenta)]/50',
        bg: 'bg-[var(--neon-magenta)]/10',
        text: 'text-[var(--neon-magenta)]',
        glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,212,0.15)]',
      };
    default:
      return {
        border: 'border-[var(--glass-border)]',
        bg: 'bg-white/5',
        text: 'text-[var(--text-primary)]',
        glow: '',
      };
  }
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--neon-purple)] rounded-full blur-[200px] opacity-[0.03]" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-16">
          <span className="section-label justify-center">
            Services
          </span>
          <h2 
            className="section-title"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            What I Build
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
            From quick landing pages to complex real-time systems. 
            I handle the technical work so you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {siteConfig.services.map((service, index) => {
            const color = getServiceColor(index);
            const colorClasses = getColorClasses(color);
            
            return (
              <div
                key={service.title}
                className={`group relative p-6 lg:p-8 rounded-2xl bg-[var(--bg-card)] border ${colorClasses.border} transition-all duration-300 ${colorClasses.glow}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses.bg} ${colorClasses.text} mb-4`}>
                  {getServiceIcon(service.icon)}
                </div>
                
                <h3 
                  className={`text-xl font-bold mb-3 ${colorClasses.text}`}
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-[var(--text-muted)] text-sm mb-4">
            Have a different project in mind?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let&apos;s Discuss
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
