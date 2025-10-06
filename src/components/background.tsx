"use client";

const RocketShip = () => {
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

  return (
    <div className="absolute opacity-80 w-full flex justify-center">
      {/* Rocket Ship */}
      <div className="animate-rocket-launch">
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

      {/* Rocket Ship with integrated smoke trails */}
      <RocketShip />
    </div>
  );
};

export const PatternedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <FlyingAirplanes />
    </div>
  );
};
