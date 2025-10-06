"use client";

import { useState, useEffect } from "react";

interface AnimatedBadgeProps {
  phrases?: string[];
  interval?: number;
  className?: string;
}

export const AnimatedBadge = ({
  phrases = [
    "✨ Modern Web Development",
    "📊 Analytics & Performance",
    "🔧 Maintenance & Support",
    "🎨 UI/UX Design Excellence",
    "⚡ Fast & Scalable Solutions",
    "🚀 API Design & Integration"
  ],
  interval = 3000,
  className = ""
}: AnimatedBadgeProps) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const changePhrase = () => {
      const nextPhrase = (currentPhrase + 1) % phrases.length;

      // Start fade out
      setIsAnimating(true);

      setTimeout(() => {
        // Start typewriter effect for new phrase
        setIsTyping(true);
        setCurrentPhrase(nextPhrase);
        typeText(phrases[nextPhrase], 0);
      }, 400);
    };

    const typeText = (text: string, index: number) => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        setTimeout(() => typeText(text, index + 1), 50); // Typing speed
      } else {
        setTimeout(() => {
          setIsAnimating(false);
          setIsTyping(false);
        }, 1000); // Pause after typing complete
      }
    };

    const timer = setTimeout(changePhrase, interval);
    return () => clearTimeout(timer);
  }, [currentPhrase, phrases, interval]);

  return (
    <div className={`inline-block pr-7 sm:pr-9 md:pr-11 pl-6 sm:pl-8 md:pl-9 py-4 sm:py-3 md:py-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}>
      <span
        className={`text-xs sm:text-sm font-medium text-white transition-all duration-500 ${
          isAnimating && !isTyping
            ? 'opacity-0'
            : isTyping
            ? 'opacity-100 animate-pulse'
            : 'opacity-100'
        }`}
      >
        {displayText}
        {isTyping && (
          <span className="inline-block w-1 h-4 bg-white ml-0.5 animate-pulse"></span>
        )}
      </span>
    </div>
  );
};
