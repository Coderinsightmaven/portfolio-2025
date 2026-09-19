# Liam · Rivet — Freelance Portfolio

A production-quality portfolio site for Liam's freelance software development practice, **Rivet**. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 16 with App Router, React 19, TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first, accessible, with smooth animations
- **Real Project Showcase**: Links to actual GitHub repositories with accurate tech stacks
- **Contact Form**: Email integration via Resend
- **Performance Optimized**: Server components, optimized fonts, minimal bundle size

## Sections

- **Hero**: Liam · Rivet branding with freelance positioning
- **Selected Work**: Real projects from GitHub with accurate descriptions
- **Services**: Websites, Backends & APIs, MVPs, Booking & Payments
- **About**: Background, skills, and approach
- **Contact**: Email, calendar booking, and contact form

## Configuration

Site settings are centralized in `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Liam",
  brand: "Rivet",
  contact: {
    email: "hello@example.com",      // Update with real email
    calendar: "https://cal.com/example", // Update with real calendar link
  },
  social: {
    github: "https://github.com/Coderinsightmaven",
    twitter: "https://x.com/TAmerican797466",
  },
  // ...
};
```

## Run Locally

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Start production server
bun start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Deploy (zero configuration needed)

### Environment Variables (Optional)

For the contact form to work, set up [Resend](https://resend.com):

```
RESEND_API_KEY=re_xxxxx
```

## Project Structure

```
src/
├── app/
│   ├── api/send-email/   # Contact form API route
│   ├── globals.css       # Global styles & design system
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page
├── components/
│   ├── HeroSection.tsx   # Hero with Rivet branding
│   ├── projects.tsx      # Project cards from config
│   ├── ServicesSection.tsx # Services grid
│   ├── AboutSection.tsx  # About & skills
│   ├── ContactSection.tsx # Contact methods & form
│   ├── FixedNavigation.tsx # Navigation header
│   └── footer.tsx        # Footer with links
└── config/
    └── site.ts           # Site configuration & projects
```

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI**: Headless UI, Heroicons
- **Email**: Resend + React Email
- **Font**: Outfit, Plus Jakarta Sans

## License

UNLICENSED - Private project
