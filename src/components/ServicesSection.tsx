'use client';

import { siteConfig } from '@/config/site';
import { ScrollReveal, FadeInStagger, FadeInItem } from './Motion';

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[var(--bg-sunken)]">
      <div className="section-container">
        <ScrollReveal>
          <div className="mb-12">
            <span className="section-label">Services</span>
            <h2 className="section-title">
              What I Build
            </h2>
            <p className="text-[var(--text-muted)] max-w-lg">
              Technical work for businesses that need reliable software shipped on schedule.
            </p>
          </div>
        </ScrollReveal>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] rounded-lg overflow-hidden" staggerDelay={0.1}>
          {siteConfig.services.map((service, index) => (
            <FadeInItem key={service.title}>
              <div className="bg-[var(--bg-raised)] p-6 lg:p-8 h-full">
                <div className="flex items-baseline gap-3 mb-4">
                  <span 
                    className="text-[var(--text-faint)] text-sm"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    0{index + 1}
                  </span>
                  <h3 
                    className="text-base font-semibold text-[var(--text)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <ScrollReveal className="mt-10 text-center">
          <p className="text-[var(--text-faint)] text-sm mb-4">
            Different scope in mind?
          </p>
          <a
            href="#contact"
            className="btn-secondary inline-flex"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let&apos;s Talk
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
