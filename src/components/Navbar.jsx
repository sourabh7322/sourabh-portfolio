"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

const RESUME_URL = '/CV/Sourabh_Resume_26.pdf';
const RESUME_FILENAME = 'Sourabh_Rawat_Resume.pdf';

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-6 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-full border border-border transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--surface-strong)] py-2.5 px-4 shadow-[var(--nav-shadow)] backdrop-blur-xl sm:px-6 md:px-8'
          : 'bg-surface/80 py-3 px-4 backdrop-blur-md sm:px-6 md:px-8'
      }`}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <a
          href="#"
          onClick={(e) => handleAnchorClick(e, '#')}
          className="font-heading shrink-0 text-lg font-bold tracking-wide text-foreground"
        >
          <span className="text-brand-primary">S</span>ourabh
        </a>

        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="group relative text-sm font-medium tracking-wide text-muted transition-colors hover:text-foreground"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-primary transition-all hover:border-brand-primary/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-3.5 w-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              CV
            </a>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="btn-primary inline-flex px-5 py-2 text-sm font-semibold"
            >
              Contact
            </a>
          </div>

          <ThemeToggle />

          <div className="lg:hidden">
            <HamburgerMenu
              isOpen={menuOpen}
              onToggle={() => setMenuOpen((prev) => !prev)}
              onClose={() => setMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
