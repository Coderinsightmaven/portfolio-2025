import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FixedNavigation from "@/components/FixedNavigation";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Liam · Rivet | Freelance Software Development",
  description: "Production websites, backends, and MVPs for businesses that move fast. Specializing in real-time systems and cross-platform applications.",
  keywords: ["freelance developer", "web development", "backend development", "MVP development", "react", "next.js", "typescript", "nestjs", "tauri"],
  authors: [{ name: "Liam" }],
  creator: "Liam · Rivet",
  publisher: "Liam · Rivet",
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
  openGraph: {
    title: "Liam · Rivet | Freelance Software Development",
    description: "Production websites, backends, and MVPs for businesses that move fast.",
    siteName: "Liam · Rivet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liam · Rivet | Freelance Software Development",
    description: "Production websites, backends, and MVPs for businesses that move fast.",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#09090b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
      >
        <FixedNavigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
