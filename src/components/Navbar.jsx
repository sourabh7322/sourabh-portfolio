import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import HamburgerMenu from './HamburgerMenu';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleAnchorClick } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full border border-white/10 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3 px-6 md:px-8'
            : 'bg-white/5 backdrop-blur-md py-3 px-6 md:px-10'
        }`}
      >
        <div className="flex items-center gap-6 md:gap-12">

          {/* Logo — always visible */}
          <a
            href="#"
            onClick={(e) => handleAnchorClick(e, '#')}
            className="font-bold text-white text-lg tracking-wide"
          >
            <span className="text-brand-primary">S</span>ourabh
          </a>

          {/* Desktop nav links — hidden on md and below */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Contact CTA — hidden on md and below */}
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, '#contact')}
            className="hidden lg:inline-flex bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all"
          >
            Contact
          </a>

          {/* Hamburger — visible only on tablet & mobile (below lg) */}
          <div className="flex lg:hidden">
            <HamburgerMenu
              isOpen={menuOpen}
              onToggle={() => setMenuOpen((prev) => !prev)}
              onClose={() => setMenuOpen(false)}
            />
          </div>

        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
