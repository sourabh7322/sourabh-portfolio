import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import SoftAurora from './SoftAurora';

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
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0">
        <SoftAurora 
          color1="#0f0c29" // dark deep
          color2="#302b63" // purpleish
          brightness={0.8}
          speed={0.4}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-brand-primary tracking-wide">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight"
        >
          Hi, I&apos;m <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">MaxByte</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-300 font-medium mb-10 h-10"
        >
          I am a <TypingEffect words={['Full Stack Developer.', 'UI/UX Enthusiast.', 'Problem Solver.']} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-3 rounded-full text-white font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            View Projects <ArrowRight size={18} />
          </motion.a>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 glass px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-colors"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 z-10"
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
