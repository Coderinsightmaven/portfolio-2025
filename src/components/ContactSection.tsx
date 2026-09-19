'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { ScrollReveal } from './Motion';

const isPlaceholder = (value: string) => {
  return value.includes('example.com') || value.includes('example') || value === '';
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const emailConfigured = !isPlaceholder(siteConfig.contact.email);
  const calendarConfigured = !isPlaceholder(siteConfig.contact.calendar);
  const hasContactMethods = emailConfigured || calendarConfigured;

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

  return (
    <section id="contact" className="relative bg-[var(--bg-sunken)]">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="section-label">Contact</span>
              <h2 className="section-title">
                Start a Project
              </h2>
              <p className="text-[var(--text-muted)] max-w-md mx-auto">
                Tell me about what you&apos;re building. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                {hasContactMethods ? (
                  <div className="space-y-3">
                    {emailConfigured && (
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-raised)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors group"
                        style={{ transitionDuration: 'var(--duration-fast)' }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[var(--accent-muted)] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[var(--text-faint)]">Email</p>
                          <p className="text-sm text-[var(--text)] truncate group-hover:text-[var(--accent)] transition-colors">
                            {siteConfig.contact.email}
                          </p>
                        </div>
                      </a>
                    )}
                    
                    {calendarConfigured && (
                      <a
                        href={siteConfig.contact.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-raised)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors group"
                        style={{ transitionDuration: 'var(--duration-fast)' }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[var(--accent-muted)] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[var(--text-faint)]">Schedule</p>
                          <p className="text-sm text-[var(--text)] truncate group-hover:text-[var(--accent)] transition-colors">
                            Book a call
                          </p>
                        </div>
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-[var(--bg-raised)] border border-[var(--border)]">
                    <p className="text-sm text-[var(--text-muted)]">
                      Contact details coming soon. Use the form to get in touch.
                    </p>
                  </div>
                )}

                <div className="mt-4 p-3 rounded-lg bg-[var(--bg-raised)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--text-faint)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-[var(--text-muted)]">
                      {siteConfig.location} · Remote
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="p-5 rounded-lg bg-[var(--bg-raised)] border border-[var(--border)]">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          className="w-full px-3 py-2 text-sm rounded-md bg-[var(--bg-canvas)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                          style={{ transitionDuration: 'var(--duration-fast)' }}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-3 py-2 text-sm rounded-md bg-[var(--bg-canvas)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                          style={{ transitionDuration: 'var(--duration-fast)' }}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-3 py-2 text-sm rounded-md bg-[var(--bg-canvas)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                        style={{ transitionDuration: 'var(--duration-fast)' }}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-3 rounded-md bg-[var(--ok)]/10 border border-[var(--ok)]/30">
                        <p className="text-sm text-[var(--ok)]">
                          Message sent. I&apos;ll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-3 rounded-md bg-[var(--danger)]/10 border border-[var(--danger)]/30">
                        <p className="text-sm text-[var(--danger)]">
                          Failed to send. Please try again.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
