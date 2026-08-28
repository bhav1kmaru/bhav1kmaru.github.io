import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function ContactSidebar({ open, onClose }: ContactSidebarProps) {
  const [state, handleSubmit, reset] = useForm('mjvdgypr');
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (open && sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Auto-close after successful submission
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose, reset]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-400"
        style={{
          backgroundColor: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Sidebar panel */}
      <div
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
        className="fixed top-0 right-0 h-full z-50 w-full max-w-[420px] flex flex-col"
        style={{
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
          background: 'linear-gradient(160deg, rgba(15,15,15,0.97) 0%, rgba(10,10,10,0.98) 60%, rgba(5,5,5,0.99) 100%)',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.8)',
        }}
      >
        {/* Top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />

        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-10 pb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#D7E2EA]">Get in touch</h2>
            <p className="text-sm text-[#D7E2EA]/50 mt-0.5 font-light">I&apos;ll get back to you within 24h</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close contact form"
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-white/10 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-8 mb-6 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.15), transparent)' }} />

        {state.succeeded ? (
          /* Success state */
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M5 14l7 7L23 7" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#D7E2EA] text-lg font-semibold text-center">Message sent!</p>
            <p className="text-[#D7E2EA]/50 text-sm text-center">Thanks for reaching out. I&apos;ll be in touch soon.</p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5 px-8 pb-10 overflow-y-auto">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/25 outline-none transition-all duration-200 focus:ring-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.08), inset 0 1px 3px rgba(0,0,0,0.3)'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.3)'; }}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-0.5" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/25 outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.08), inset 0 1px 3px rgba(0,0,0,0.3)'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.3)'; }}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-0.5" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/25 outline-none resize-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.08), inset 0 1px 3px rgba(0,0,0,0.3)'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.3)'; }}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-0.5" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-auto w-full rounded-xl py-3.5 text-sm font-semibold uppercase tracking-widest text-[#0C0C0C] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 50%, #f5f5f5 100%)',
                boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
              }}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <span className="text-xs text-[#D7E2EA]/30 uppercase tracking-widest">or reach out via</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
            </div>
            <div className="flex items-center justify-center gap-4">
              <a href="mailto:bhavik.m01@gmail.com" className="text-xs text-[#D7E2EA]/40 hover:text-white transition-colors duration-200 uppercase tracking-wider">Email</a>
              <span className="text-[#D7E2EA]/20">·</span>
              <a href="https://linkedin.com/in/bhav1kmaru" target="_blank" rel="noreferrer" className="text-xs text-[#D7E2EA]/40 hover:text-white transition-colors duration-200 uppercase tracking-wider">LinkedIn</a>
            </div>
          </form>
        )}

        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />
      </div>
    </>
  );
}
