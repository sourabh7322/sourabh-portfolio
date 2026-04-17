import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full border border-white/10 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3 px-8' 
          : 'bg-white/5 backdrop-blur-md py-4 px-10'
      }`}
    >
      <div className="flex items-center gap-8 md:gap-12">
        <a href="#" className="font-bold text-white text-lg tracking-wide hidden md:block">
          <span className="text-brand-primary">M</span>ax
        </a>
        
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
