'use client'

import { useState, useEffect } from 'react'

const RocketShip = () => {
  const [key, setKey] = useState(1);

  // Generate 33 engine positions evenly spaced across the rocket bottom
  const engines = [];
  const startX = 8.5;
  const endX = 15.5;
  const numEngines = 33;

  for (let i = 0; i < numEngines; i++) {
    const x = startX + (i * (endX - startX) / (numEngines - 1));
    engines.push(
      <g key={i}>
        <ellipse cx={x} cy="34" rx="0.3" ry="1" fill="#ff6b35"/>
        <ellipse cx={x} cy="33" rx="0.2" ry="0.7" fill="#ff4500"/>
        <ellipse cx={x} cy="32" rx="0.15" ry="0.4" fill="#ffffff"/>
      </g>
    );
  }

  useEffect(() => {
    // Launch rocket every 25 seconds
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 25000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-80 z-0 pointer-events-none">
      <div 
        key={key}
        className="animate-rocket-launch"
        style={{ transform: 'translateY(120vh)' }}
      >
        <svg
          width="80"
          height="120"
          viewBox="0 0 24 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-400 drop-shadow-lg"
        >
          {/* Rocket Body */}
          <rect x="8" y="12" width="8" height="20" fill="currentColor" rx="2"/>
          {/* Rocket Nose */}
          <polygon points="12,8 8,12 16,12" fill="currentColor"/>
          {/* Rocket Fins */}
          <polygon points="6,28 8,32 8,28" fill="currentColor"/>
          <polygon points="16,28 16,32 18,28" fill="currentColor"/>
          {/* Rocket Window */}
          <circle cx="12" cy="18" r="2" fill="#ffffff" opacity="0.8"/>
          {/* 33 Engine Flames */}
          {engines}
        </svg>
      </div>
    </div>
  );
};

const TypewriterText = () => {
  const titles = [
    '💻 Full-Stack Developer',
    '🎨 UI/UX Designer',
    '🚀 Performance Optimizer',
    '🔍 SEO Optimizer',
    '💡 Creative Thinker',
    '🤝 Problem Solver',
    '🔥 Passionate Developer',
    '💬 Communicator',
    '🎯 Goal-Oriented',
    '💪 Hardworker',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typeSpeed = 100; // ms per character
    const deleteSpeed = 50; // ms per character when deleting
    const pauseTime = 5000; // ms to pause at full text

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <span className="inline-block min-w-0">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function NewHeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative overflow-hidden">
        <div className="relative isolate px-6 pt-14 lg:px-8">
      
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
              <TypewriterText />
              <button
                onClick={() => scrollToSection('#projects')}
                className="font-semibold text-indigo-600 dark:text-indigo-400 ml-2"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                View Work <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
              Crafting Digital
              <br />
              Experiences That
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Amaze & Convert
              </span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              Transforming ideas into stunning, high-performance websites that drive results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Start Your Project
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-cyan-400 transition-colors"
              >
                Explore Work <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <RocketShip />
    </div>
  )
}
