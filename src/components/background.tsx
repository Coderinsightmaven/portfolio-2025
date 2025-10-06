"use client";

import { useEffect, useState } from 'react';

const FlyingAirplanes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Airplane 1 */}
      <div className="absolute animate-fly-1 opacity-20">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-cyan-400 transform rotate-90"
        >
          <path
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Airplane 2 */}
      <div className="absolute animate-fly-2 opacity-15">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-400 transform rotate-90"
        >
          <path
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Airplane 3 */}
      <div className="absolute animate-fly-3 opacity-25">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-purple-400 transform rotate-90"
        >
          <path
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export const FlyingAirplanesBackground = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Don't render on mobile
  if (!isDesktop) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <FlyingAirplanes />
    </div>
  );
};

export const PatternedBackground = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Don't render on mobile
  if (!isDesktop) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <FlyingAirplanes />
    </div>
  );
};
