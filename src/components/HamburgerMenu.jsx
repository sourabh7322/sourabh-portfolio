import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const navLinks = [
  { name: 'Home',       href: '#'           },
  { name: 'About',      href: '#about'      },
  { name: 'Skills',     href: '#skills'     },
  { name: 'Projects',   href: '#projects'   },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact'    },
];

const HamburgerMenu = ({ isOpen, onToggle, onClose }) => {
  const { handleAnchorClick } = useSmoothScroll();

  const handleLinkClick = (e, href) => {
    handleAnchorClick(e, href);
    onClose();
  };

  return (
    <>
      {/* ── Sleek Hamburger Button (Navbar Flow) ──────────────── */}
      <button
        onClick={onToggle}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col justify-center items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
      >
        <span className="block w-5 h-[2px] bg-white rounded-full transition-transform duration-300" />
        <span className="block w-5 h-[2px] bg-white rounded-full transition-transform duration-300" />
        <span className="block w-3.5 h-[2px] bg-white rounded-full self-start ml-[11px] transition-transform duration-300" />
      </button>

      {/* ── Slide-in Right Side Drawer via React Portal ────────── */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dark & Blurred Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
                className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-md cursor-pointer"
              />

              {/* Premium Right Side Drawer Panel */}
              <motion.aside
                key="drawer"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 right-0 bottom-0 z-[999] w-[75vw] sm:w-[65vw] md:w-[50vw] max-w-[420px] bg-[#0a0a0f] border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] flex flex-col"
              >
                {/* Modern Radial Glow overlay in drawer */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_40%)] pointer-events-none" />

                {/* Header Area */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 shrink-0 relative z-10">
                  {/* Brand Logo */}
                  <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, '#')}
                    className="font-bold text-white text-lg tracking-wide hover:opacity-85 transition-opacity"
                  >
                    <span className="text-brand-primary">S</span>ourabh
                  </a>

                  {/* Circular Close X Icon */}
                  <button
                    onClick={onClose}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Vertical Navigation Links */}
                <nav className="flex-1 flex flex-col justify-start px-8 py-10 space-y-6 overflow-y-auto hide-scrollbar relative z-10">
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
                        className="group flex flex-col text-left py-2 cursor-pointer"
                      >
                        <span className="text-2xl sm:text-3xl font-extrabold text-white/85 tracking-widest uppercase transition-colors duration-300 group-hover:text-brand-primary">
                          {link.name}
                        </span>
                        {/* Interactive sliding glow line under link */}
                        <span className="h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary w-0 group-hover:w-full transition-all duration-350 mt-1.5 rounded-full" />
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Drawer Footer */}
                <div className="px-8 py-6 border-t border-white/5 bg-black/30 shrink-0 relative z-10">
                  <p className="text-[10px] text-gray-500 tracking-[0.25em] uppercase text-center sm:text-left">
                    © {new Date().getFullYear()} · Sourabh Rawat
                  </p>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default HamburgerMenu;
