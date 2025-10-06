import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlyingAirplanesBackground } from "@/components/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
  adjustFontFallback: true,
  fallback: ['Courier New', 'monospace'],
});

export const metadata: Metadata = {
  title: "Liam | Full Stack Developer & Web Designer",
  description: "Creative full-stack developer specializing in modern web technologies, responsive design, and innovative digital solutions for startups and businesses.",
  keywords: ["full stack developer", "web designer", "react", "next.js", "typescript", "portfolio", "Liam"],
  authors: [{ name: "Liam" }],
  creator: "Liam",
  publisher: "Liam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.liamm.me'), // Update this with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Liam | Full Stack Developer & Web Designer",
    description: "Creative full-stack developer specializing in modern web technologies, responsive design, and innovative digital solutions.",
    url: "https://liam-portfolio.vercel.app",
    siteName: "Liam's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liam | Full Stack Developer & Web Designer",
    description: "Creative full-stack developer specializing in modern web technologies, responsive design, and innovative digital solutions.",
    creator: "@liamdev", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Creative full-stack developer specializing in modern web technologies, responsive design, and innovative digital solutions for startups and businesses." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00ffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Falling Stars Background - Optimized, decorative only */}
        <div className="stars" role="presentation">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="star" data-star-index={i} role="presentation"></div>
          ))}
        </div>
        <FlyingAirplanesBackground />

        {/* Static Moon in Upper Right Corner */}
        <div className="fixed top right-4 z-10 pointer-events-none" role="presentation">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-200 drop-shadow-xl"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9"/>
            <circle cx="8" cy="8" r="2" fill="#ffffff" opacity="0.6"/>
            <circle cx="14" cy="10" r="1.5" fill="#ffffff" opacity="0.4"/>
            <circle cx="10" cy="14" r="1" fill="#ffffff" opacity="0.3"/>
          </svg>
        </div>

        {children}
      </body>
    </html>
  );
}
