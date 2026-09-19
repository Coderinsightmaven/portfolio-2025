'use client';

import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { ScrollReveal, FadeIn } from './Motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Tauri'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Rust', 'PostgreSQL', 'WebSocket'],
  },
  {
    title: 'Tools',
    skills: ['Turborepo', 'Docker', 'Git', 'SQLite', 'CMake'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[var(--bg-raised)] border border-[var(--border)]">
                  <Image
                    src="/Liam.jpg"
                    alt="Liam"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-[var(--scrim)]" style={{ mixBlendMode: 'multiply', opacity: 0.3 }} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-8">
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-[var(--border)] text-[var(--text-faint)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
                  style={{ transitionDuration: 'var(--duration-fast)' }}
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-[var(--border)] text-[var(--text-faint)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
                  style={{ transitionDuration: 'var(--duration-fast)' }}
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <FadeIn>
              <span className="section-label">About</span>
              <h2 className="section-title">
                Building Software That Works
              </h2>
            </FadeIn>

            <ScrollReveal>
              <div className="prose-width space-y-4 text-[var(--text-muted)] text-sm leading-relaxed mb-8">
                <p>
                  Self-taught developer who started tinkering with code as a teenager. What began with a beat-up laptop and online tutorials turned into a career building production software for real businesses.
                </p>
                <p>
                  My focus is on real-time systems, full-stack applications, and cross-platform desktop apps. I&apos;ve built tennis scoring platforms handling live tournament data, show-control video applications for live events, and various client projects from MVPs to ongoing systems.
                </p>
                <p>
                  Based in Colorado, I work remotely with clients who need reliable, maintainable code delivered on time.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mb-8 p-4 rounded-lg bg-[var(--bg-raised)] border border-[var(--border)]">
                <p className="text-sm text-[var(--text-muted)]">
                  <span className="text-[var(--text)] font-medium">How I work:</span> Clear communication, realistic timelines, and working code. I start with understanding your problem, scope the work properly, and keep you updated throughout.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h3 
                className="text-sm font-medium text-[var(--text)] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Technical Stack
              </h3>
              
              <div className="space-y-4">
                {skillCategories.map((category) => (
                  <div key={category.title} className="flex items-baseline gap-4">
                    <span 
                      className="text-xs text-[var(--text-faint)] w-16 flex-shrink-0"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {category.title}
                    </span>
                    <div 
                      className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--text-muted)]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {category.skills.map((skill, i) => (
                        <span key={skill}>
                          {skill}
                          {i < category.skills.length - 1 && <span className="ml-3 text-[var(--border-strong)]">/</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
