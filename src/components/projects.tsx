'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Tempuz Live Scoreboard',
    description: 'Real-time live data integration scoreboard for Ioncourt, a scoring application built for ITA Tennis Tournaments. Features live score updates, match tracking, and tournament management.',
    longDescription: 'Built a high-performance desktop application using Tauri v2 that handles real-time score updates with minimal latency. The system processes hundreds of concurrent matches while maintaining smooth UI performance.',
    imageUrl: '/Code.png',
    href: 'https://github.com/Coderinsightmaven/tempuz-scoreboard',
    tech: ['Tauri v2', 'Vite', 'TypeScript', 'Rust', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    outcome: 'Real-time updates with <100ms latency',
    featured: true,
  },
  {
    id: 2,
    title: 'Match Point Systems API',
    description: 'Comprehensive Tennis API for live tournament data integration with Ioncourt scoring application. Handles match data, player statistics, and tournament brackets.',
    longDescription: 'Designed and built a scalable RESTful API that serves real-time tournament data to multiple client applications simultaneously, with robust error handling and caching strategies.',
    imageUrl: 'https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg',
    href: 'https://github.com/Coderinsightmaven/mps-tennisapi',
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis'],
    role: 'Backend Developer',
    outcome: 'Serving 10K+ requests/day',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio 2025',
    description: 'Modern, performant portfolio website built with Next.js 15, featuring a bold dark + neon design system, smooth animations, and optimal Core Web Vitals.',
    longDescription: 'Crafted a high-performance portfolio showcasing modern web development practices including server components, optimized fonts, and accessible design patterns.',
    imageUrl: '/Code.png',
    href: 'https://github.com/Coderinsightmaven',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    outcome: '100 Lighthouse Performance',
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`card card-glow group relative overflow-hidden ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-64 lg:h-72 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/60 to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="chip">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
          </div>
        )}

        {/* Role Badge */}
        <div className="absolute top-4 right-4">
          <span className="chip chip-purple">{project.role}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Link */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 
            className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            {project.title}
          </h3>
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-lg border border-[var(--glass-border)] text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/30 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Outcome */}
        <div className="flex items-center gap-2 mb-4 text-sm">
          <svg className="w-4 h-4 text-[var(--neon-green)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-[var(--neon-green)]">{project.outcome}</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-[var(--text-muted)] border border-[var(--glass-border)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 240, 255, 0.06), transparent 40%)',
        }}
      />
    </article>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label justify-center">
            Selected Work
          </span>
          <h2 
            className="section-title"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Projects That Define Me
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
            A curated selection of projects showcasing my expertise in full-stack development,
            from real-time applications to scalable APIs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Coderinsightmaven?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
