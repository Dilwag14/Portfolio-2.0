import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

export default function ContactModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Let's build something — Dilwag The Series")}`;
  const phoneClean = profile.phone.replace(/[^0-9]/g, '');

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact Dilwag"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* modal card */}
      <motion.div
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-ink-2 p-6 shadow-2xl sm:p-8"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent" />

        {/* header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-crimson-2">Direct Contact</p>
            <h3 className="mt-1 font-display text-3xl tracking-wide text-bone">GET IN TOUCH</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone transition hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-mist">
          Feel free to reach out for full-time opportunities, collaborations, or discussing projects in Web Development, Java, and Data Science.
        </p>

        {/* email box */}
        <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Email Address</p>
          <div className="mt-1 flex items-center justify-between gap-3">
            <span className="truncate font-mono text-sm font-semibold text-bone">{profile.email}</span>
            <button
              type="button"
              onClick={copyEmail}
              className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-bold transition ${
                copied ? 'bg-emerald-500 text-white' : 'bg-white/10 text-bone hover:bg-white/20'
              }`}
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* action buttons */}
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-crimson px-4 text-xs font-bold tracking-wider text-white shadow-[0_0_30px_rgba(229,19,43,0.35)] transition hover:bg-crimson-2"
          >
            <span>✉</span> Open in Gmail ↗
          </a>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`}
            className="glass flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-xs font-semibold tracking-wider text-bone transition hover:bg-white/15"
          >
            <span>↗</span> Default Mail App
          </a>
        </div>

        {/* secondary connect links */}
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">More Ways to Connect</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-xs font-medium text-bone transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span className="text-emerald-400">💬</span>
              <div className="truncate text-left">
                <p className="truncate font-semibold">WhatsApp</p>
                <p className="truncate text-[10px] text-mist">{profile.phone}</p>
              </div>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-xs font-medium text-bone transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span className="text-sky-400">💼</span>
              <div className="truncate text-left">
                <p className="truncate font-semibold">LinkedIn</p>
                <p className="truncate text-[10px] text-mist">Connect ↗</p>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
