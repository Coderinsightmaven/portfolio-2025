"use client";

import { useState } from "react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export const AnimatedButton = ({ href, children, variant = "primary", onClick, className }: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "primary") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm text-white overflow-hidden group min-w-[140px] ${className || ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 transition-all duration-300 group-hover:scale-105"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Pulsing glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
          {children}
          <svg 
            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm text-gray-700 overflow-hidden group bg-white border-2 border-gray-200 min-w-[150px] ${className || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Border gradient effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-transparent bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-border"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
        {children}
        <svg 
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </a>
  );
};
