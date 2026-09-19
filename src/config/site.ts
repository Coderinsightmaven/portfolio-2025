export const siteConfig = {
  name: "Liam",
  brand: "Rivet",
  tagline: "Freelance Software Development",
  description: "Building production-ready websites, backends, and MVPs for businesses that move fast.",
  
  contact: {
    email: "hello@example.com",
    calendar: "https://cal.com/example",
  },
  
  social: {
    github: "https://github.com/Coderinsightmaven",
    twitter: "https://x.com/TAmerican797466",
  },
  
  location: "Colorado, USA",
  
  services: [
    {
      title: "Websites",
      description: "Modern, responsive websites built with Next.js, React, and Tailwind CSS. Fast, accessible, and optimized for conversions.",
      icon: "globe",
    },
    {
      title: "Backends & APIs",
      description: "Scalable REST APIs and WebSocket servers with Node.js, NestJS, PostgreSQL. Real-time data handling built-in.",
      icon: "server",
    },
    {
      title: "MVPs",
      description: "Ship your product idea fast. Full-stack prototypes with the foundations to scale when you're ready.",
      icon: "rocket",
    },
    {
      title: "Booking & Payments",
      description: "Integrate booking systems, payment processing, and business workflows into your existing site or app.",
      icon: "creditcard",
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Tempuz Scoreboard",
    description: "Professional desktop application for designing and displaying custom tennis scoreboards with live data integration. Features drag-and-drop designer, multi-monitor output, and real-time WebSocket updates.",
    tech: ["Tauri v2", "React", "TypeScript", "Rust", "WebSocket"],
    href: "https://github.com/Coderinsightmaven/tempuz-scoreboard",
    featured: true,
    category: "Desktop App",
  },
  {
    id: 2,
    title: "Tennis Scoreboard API",
    description: "REST API with WebSocket support for managing tennis courts and real-time match scoring. Automatically transforms complex scoring data into optimized scoreboard displays with ~85% data reduction.",
    tech: ["NestJS", "TypeScript", "WebSocket", "Swagger"],
    href: "https://github.com/Coderinsightmaven/mps-tennisapi",
    featured: true,
    category: "Backend API",
  },
  {
    id: 3,
    title: "Tennis Tournament System",
    description: "Full-stack monorepo for managing tennis tournaments. Includes NestJS API with PostgreSQL, Next.js web dashboard, and Tauri mobile scoring app with official tennis scoring rules.",
    tech: ["Turborepo", "NestJS", "Next.js", "Tauri", "PostgreSQL"],
    href: "https://github.com/Coderinsightmaven/mps-turborepo",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 4,
    title: "ClubScore LAN",
    description: "Local network tennis scoring system for clubs. Supports 12 simultaneous courts with offline operation, Android scorer app, and native Windows scoreboard display via Tauri.",
    tech: ["Turborepo", "SQLite", "Tauri", "React", "mDNS"],
    href: "https://github.com/Coderinsightmaven/clubscore-turbo",
    featured: false,
    category: "Full-Stack",
  },
  {
    id: 5,
    title: "VideoPlayerForMe",
    description: "Cross-platform show-control video application inspired by ProVideoPlayer. Multi-screen outputs with OSC, DMX, and MIDI control. Built for live event production.",
    tech: ["Qt/C++", "CMake", "OSC", "Art-Net DMX", "MIDI"],
    href: "https://github.com/Coderinsightmaven/curly-videoplayer",
    featured: false,
    category: "Desktop App",
  },
];
