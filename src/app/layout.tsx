import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FixedNavigation from "@/components/FixedNavigation";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Liam | Full Stack Developer & Creative Technologist",
  description: "Building thoughtful, scalable software that turns ideas into impact. Full-stack developer specializing in modern web technologies and innovative digital solutions.",
  keywords: ["full stack developer", "web developer", "react", "next.js", "typescript", "portfolio", "Liam", "software engineer"],
  authors: [{ name: "Liam" }],
  creator: "Liam",
  publisher: "Liam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/favicon.svg',
  },
  metadataBase: new URL('https://www.liamm.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Liam | Full Stack Developer & Creative Technologist",
    description: "Building thoughtful, scalable software that turns ideas into impact. Full-stack developer specializing in modern web technologies.",
    url: "https://www.liamm.me",
    siteName: "Liam's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liam | Full Stack Developer & Creative Technologist",
    description: "Building thoughtful, scalable software that turns ideas into impact.",
    creator: "@liamdev",
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
      >
        {/* Background Layers */}
        <div className="fixed inset-0 bg-gradient-dark" aria-hidden="true" />
        <div className="grid-bg" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Falling Stars Background */}
        <div className="stars" role="presentation" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="star" data-star-index={i} />
          ))}
        </div>

        {/* Navigation */}
        <FixedNavigation />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
