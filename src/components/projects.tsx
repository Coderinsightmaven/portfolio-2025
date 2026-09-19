'use client';

import Link from 'next/link';
import { projects } from '@/config/site';
import { ScrollReveal, CardTilt, FadeInStagger, FadeInItem } from './Motion';

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <CardTilt>
      <article className={`card group relative overflow-hidden ${project.featured ? 'lg:col-span-2' : ''}`}>
        <div className="relative p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <span 
                className="chip mb-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {project.category}
              </span>
              <h3 
                className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors"
                style={{ fontFamily: 'var(--font-display)', transitionDuration: 'var(--duration-fast)' }}
              >
                {project.title}
              </h3>
            </div>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 rounded-md border border-[var(--border)] text-[var(--text-faint)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
              style={{ transitionDuration: 'var(--duration-fast)' }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="pt-4 border-t border-[var(--border)]">
            <div 
              className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--text-faint)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {project.tech.map((tech, i) => (
                <span key={i} className="whitespace-nowrap">
                  {tech}
                  {i < project.tech.length - 1 && <span className="ml-3 text-[var(--border-strong)]">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </CardTilt>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="mb-12">
            <span className="section-label">Selected Work</span>
            <h2 className="section-title">
              Projects in Production
            </h2>
            <p className="text-[var(--text-muted)] max-w-lg">
              Real-time systems, desktop applications, and full-stack platforms.
              Each links to its public repository.
            </p>
          </div>
        </ScrollReveal>

        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5" staggerDelay={0.08}>
          {projects.map((project) => (
            <FadeInItem key={project.id} className={project.featured ? 'lg:col-span-2' : ''}>
              <ProjectCard project={project} />
            </FadeInItem>
          ))}
        </FadeInStagger>

        <ScrollReveal className="mt-10">
          <a
            href="https://github.com/Coderinsightmaven?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            All Repositories
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
