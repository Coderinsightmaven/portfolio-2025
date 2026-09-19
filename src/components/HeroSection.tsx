'use client';

import dynamic from 'next/dynamic';
import { siteConfig } from '@/config/site';
import { FadeIn } from './Motion';

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-xl bg-[var(--bg-raised)] border border-[var(--border)]" />
    </div>
  ),
});

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn delay={0}>
              <p 
                className="text-[var(--text-faint)] text-sm mb-4"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {siteConfig.name} · {siteConfig.brand}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 
                className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-[var(--text)]">Production websites,</span>
                <br />
                <span className="text-[var(--text)]">backends, and MVPs</span>
                <br />
                <span className="text-[var(--text-muted)]">for businesses that move fast.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-[var(--text-muted)] text-base leading-relaxed mb-8 max-w-md">
                Full-stack development with a focus on real-time systems, 
                cross-platform applications, and shipping quality code on schedule.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary"
                >
                  View Work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary"
                >
                  Get in Touch
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 h-[280px] sm:h-[340px] lg:h-[420px]">
            <FadeIn delay={0.2} className="h-full">
              <Hero3D />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
