'use client';

import Image from 'next/image';
import { siteConfig } from '@/config/site';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Tauri'],
    color: 'cyan',
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'NestJS', 'Rust', 'PostgreSQL', 'WebSocket'],
    color: 'purple',
  },
  {
    title: 'Tools & More',
    icon: '🛠️',
    skills: ['Turborepo', 'Docker', 'Git', 'SQLite', 'CMake'],
    color: 'magenta',
  },
];

const socialLinks = [
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
    name: 'X (Twitter)',
    href: siteConfig.social.twitter,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
];

const getSkillBorderColor = (color: string) => {
  switch (color) {
    case 'cyan': return 'border-[var(--neon-cyan)]/20 hover:border-[var(--neon-cyan)]/50';
    case 'purple': return 'border-[var(--neon-purple)]/20 hover:border-[var(--neon-purple)]/50';
    case 'magenta': return 'border-[var(--neon-magenta)]/20 hover:border-[var(--neon-magenta)]/50';
    default: return 'border-[var(--glass-border)]';
  }
};

const getSkillTextColor = (color: string) => {
  switch (color) {
    case 'cyan': return 'text-[var(--neon-cyan)]';
    case 'purple': return 'text-[var(--neon-purple)]';
    case 'magenta': return 'text-[var(--neon-magenta)]';
    default: return 'text-[var(--text-secondary)]';
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/Liam.jpg"
                  alt="Liam - Freelance Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-2xl border border-[var(--glass-border)] group-hover:border-[var(--neon-cyan)]/30 transition-colors duration-500" />
              </div>

              <div className="absolute -bottom-6 -right-6 left-12 glass rounded-xl p-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <blockquote className="text-sm italic text-[var(--text-secondary)]">
                  &ldquo;Ship fast, iterate faster. The best code is code that solves real problems.&rdquo;
                </blockquote>
                <cite className="block mt-2 text-xs text-[var(--neon-cyan)] not-italic">
                  — How I approach every project
                </cite>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[var(--neon-cyan)]/20 rounded-full opacity-50" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-[var(--neon-purple)]/20 rounded-full opacity-30" />
            </div>

            <div className="mt-16 flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl border border-[var(--glass-border)] text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/30 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                  <div className="absolute inset-0 rounded-xl bg-[var(--neon-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="section-label">
              About
            </span>

            <h2 
              className="section-title"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Building Software
              <br />
              <span className="text-[var(--neon-cyan)]">That Works</span>
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)] mb-10">
              <p>
                I&apos;m a self-taught developer who started tinkering with code as a teenager and never stopped. What began with a beat-up laptop and online tutorials turned into a career building{' '}
                <span className="text-[var(--text-primary)]">production software</span> for real businesses.
              </p>
              <p>
                My focus is on{' '}
                <span className="text-[var(--text-primary)]">real-time systems</span>, full-stack applications, and cross-platform desktop apps. I&apos;ve built tennis scoring platforms handling live tournament data, show-control video applications for live events, and various client projects from MVPs to ongoing systems.
              </p>
              <p>
                Based in Colorado, I work remotely with clients who need{' '}
                <span className="text-[var(--text-primary)]">reliable, maintainable code</span> delivered on time. Whether it&apos;s a new website, a backend API, or integrating booking and payment systems into your existing setup, I handle the technical work so you can focus on your business.
              </p>
            </div>

            <div className="mb-10 p-4 rounded-xl bg-[var(--neon-cyan)]/5 border border-[var(--neon-cyan)]/20">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--neon-cyan)]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--neon-cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">How I Work</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Clear communication, realistic timelines, and working code. I start with understanding your problem, scope the work properly, and keep you updated throughout. No surprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-outfit)' }}>
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {skillCategories.map((category) => (
                  <div
                    key={category.title}
                    className={`p-4 rounded-xl bg-[var(--bg-card)] border ${getSkillBorderColor(category.color)} transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{category.icon}</span>
                      <h4 className={`font-semibold ${getSkillTextColor(category.color)}`}>
                        {category.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-[var(--text-muted)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
