'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phoneNumber: formData.get('phone-number'),
      country: formData.get('country'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[10000]">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        aria-hidden="true" 
      />

      {/* Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative mx-auto w-full max-w-lg transform overflow-hidden rounded-2xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] shadow-2xl transition-all">
          {/* Decorative top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-[var(--neon-cyan)]/50" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors z-10"
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-5 w-5" />
          </button>

          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <DialogTitle 
                className="text-2xl font-bold text-[var(--text-primary)] mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Let&apos;s Work Together
              </DialogTitle>
              <p className="text-sm text-[var(--text-secondary)]">
                Fill out the form and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Company (optional) */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Company <span className="text-[var(--text-muted)]">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-colors"
                  placeholder="Your company"
                />
              </div>

              {/* Hidden fields for country and phone (simplified form) */}
              <input type="hidden" name="country" value="US" />
              <input type="hidden" name="phone-number" value="" />

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)]/50 focus:ring-1 focus:ring-[var(--neon-cyan)]/50 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
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
                      Message sent! I&apos;ll get back to you soon.
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
                      Something went wrong. Please try again or email me directly.
                    </span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
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
                ) : submitStatus === 'success' ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sent!
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
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-4 border-t border-[var(--glass-border)]">
              <p className="text-xs text-center text-[var(--text-muted)]">
                Or reach me directly at{' '}
                <a 
                  href="mailto:liammarincik@gmail.com" 
                  className="text-[var(--neon-cyan)] hover:underline"
                >
                  liammarincik@gmail.com
                </a>
              </p>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
