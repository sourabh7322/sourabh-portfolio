import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const RESUME_URL = '/CV/Sourabh_Resume_26.pdf';
const RESUME_FILENAME = 'Sourabh_Rawat_Resume.pdf';

const HamburgerMenu = ({ isOpen, onToggle, onClose }) => {
  const { handleAnchorClick } = useSmoothScroll();

  const handleLinkClick = (e, href) => {
    handleAnchorClick(e, href);
    onClose();
  };

  return (
    <>
      <button
        onClick={onToggle}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-surface transition-all duration-300 hover:scale-105 hover:border-brand-primary/30 active:scale-95"
      >
        <span className="block h-[2px] w-5 rounded-full bg-foreground transition-transform duration-300" />
        <span className="block h-[2px] w-5 rounded-full bg-foreground transition-transform duration-300" />
        <span className="ml-[11px] block h-[2px] w-3.5 self-start rounded-full bg-foreground transition-transform duration-300" />
      </button>

      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={onClose}
                  className="fixed inset-0 z-[998] cursor-pointer bg-[var(--drawer-overlay)] backdrop-blur-md"
                />

                <motion.aside
                  key="drawer"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed top-0 right-0 bottom-0 z-[999] flex w-[min(100vw,420px)] max-w-[92vw] flex-col border-l border-border bg-[var(--drawer-bg)] shadow-[-20px_0_50px_rgba(0,0,0,0.15)] sm:max-w-[420px]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_45%)]" />

                  <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-border px-6 py-5">
                    <a
                      href="#"
                      onClick={(e) => handleLinkClick(e, '#')}
                      className="font-heading text-lg font-bold tracking-wide text-foreground"
                    >
                      <span className="text-brand-primary">S</span>ourabh
                    </a>

                    <div className="flex items-center gap-2">
                      <ThemeToggle />
                      <button
                        onClick={onClose}
                        aria-label="Close menu"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all hover:text-foreground"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <nav className="hide-scrollbar relative z-10 flex flex-1 flex-col gap-5 overflow-y-auto px-8 py-8">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 35 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 35 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className="group flex flex-col py-1"
                        >
                          <span className="font-heading text-2xl font-extrabold uppercase tracking-widest text-foreground/90 transition-colors group-hover:text-brand-primary sm:text-3xl">
                            {link.name}
                          </span>
                          <span className="mt-1.5 h-[2px] w-0 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 group-hover:w-full" />
                        </a>
                      </motion.div>
                    ))}

                    <div className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
                      <a
                        href={RESUME_URL}
                        download={RESUME_FILENAME}
                        className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-brand-primary"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        onClick={(e) => handleLinkClick(e, '#contact')}
                        className="btn-primary inline-flex items-center justify-center px-5 py-3 text-sm font-semibold"
                      >
                        Contact Me
                      </a>
                    </div>
                  </nav>

                  <div className="relative z-10 shrink-0 border-t border-border px-8 py-5">
                    <p className="text-center text-[10px] uppercase tracking-[0.25em] text-muted sm:text-left">
                      © {new Date().getFullYear()} · Sourabh Rawat
                    </p>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default HamburgerMenu;
