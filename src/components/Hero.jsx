import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const TypingEffect = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block min-w-8">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const { handleAnchorClick } = useSmoothScroll();

  return (
    <section className="relative z-10 w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium tracking-wide text-brand-primary backdrop-blur-md">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl"
        >
          Hi, I&apos;m <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">Sourabh Rawat</span>
        </motion.h1>

        {/* Real, crawlable role heading — helps Google tie "Sourabh Rawat" to Full Stack Developer + tech stack */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-3 h-10 text-xl font-medium text-muted md:text-3xl"
        >
          I am a <TypingEffect words={['Full Stack Developer.', 'UI/UX Enthusiast.', 'Problem Solver.']} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10 max-w-2xl text-sm text-muted/80 md:text-base"
        >
          Full Stack Developer specializing in React, Next.js, Node.js, NestJS, TypeScript &amp; PostgreSQL.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => handleAnchorClick(e, '#projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 px-8 py-3 font-semibold"
          >
            View Projects <ArrowRight size={18} />
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2 px-8 py-3 font-semibold hover:border-brand-primary/30"
          >
            Hire Me <Download size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-muted"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-brand-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
