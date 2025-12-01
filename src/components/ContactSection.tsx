'use client';

import { useState } from 'react';

const contactMethods = [
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'liammarincik@gmail.com',
    href: 'mailto:liammarincik@gmail.com',
    color: 'cyan',
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    label: 'GitHub',
    value: '@Coderinsightmaven',
    href: 'https://github.com/Coderinsightmaven',
    color: 'purple',
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
    label: 'X (Twitter)',
    value: '@TAmerican797466',
    href: 'https://x.com/TAmerican797466',
    color: 'magenta',
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('name')?.toString().split(' ')[0] || '',
      lastName: formData.get('name')?.toString().split(' ').slice(1).join(' ') || '',
      email: formData.get('email'),
      message: formData.get('message'),
      company: '',
      phoneNumber: '',
      country: 'US',
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10 border-[var(--neon-cyan)]/20';
      case 'purple': return 'text-[var(--neon-purple)] bg-[var(--neon-purple)]/10 border-[var(--neon-purple)]/20';
      case 'magenta': return 'text-[var(--neon-magenta)] bg-[var(--neon-magenta)]/10 border-[var(--neon-magenta)]/20';
      default: return '';
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--neon-cyan)] rounded-full blur-[200px] opacity-5" />
      </div>

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label justify-center">
              Get In Touch
            </span>
            <h2 
              className="section-title"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Let&apos;s Build Something
              <br />
              <span className="text-[var(--neon-cyan)]">Amazing Together</span>
            </h2>
            <p className="max-w-lg mx-auto text-[var(--text-secondary)]">
              Have a project in mind or want to discuss opportunities? 
              I&apos;m always open to new challenges and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">
                Connect with me
              </h3>
              
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)] hover:border-[var(--neon-cyan)]/30 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border ${getColorClass(method.color)}`}>
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="text-xs text-[var(--text-muted)]">{method.label}</div>
                    <div className="text-sm font-medium text-[var(--text-primary)] truncate group-hover:text-[var(--neon-cyan)] transition-colors">
                      {method.value}
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--neon-cyan)] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}

              {/* Location */}
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)]">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-[var(--glass-border)]">
                    <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)]">Location</div>
                    <div className="text-sm font-medium text-[var(--text-primary)]">
                      Colorado, USA • Remote Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--glass-border)]">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Send a Message
                </h3>

                <div className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-3 rounded-lg bg-[var(--neon-green)]/10 border border-[var(--neon-green)]/30 animate-fade-in-up">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-medium text-[var(--neon-green)]">
                          Message sent successfully!
                        </span>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 animate-fade-in-up">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-sm font-medium text-red-400">
                          Failed to send. Please try again.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

