import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import SplashCursor from './components/SplashCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time for initial animations
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-[#050505] flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="w-16 h-16 bg-gradient-to-tr from-brand-primary to-brand-secondary shadow-[0_0_30px_#A855F7]"
        />
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white relative flex flex-col items-center overflow-x-hidden selection:bg-brand-primary/30 selection:text-white">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Global Interactive Cursor */}
      <SplashCursor 
        COLOR="#A855F7"
        SPLAT_RADIUS={0.2}
        VELOCITY_DISSIPATION={2}
        DENSITY_DISSIPATION={3.5}
      />
      
      <Navbar />
      
      <main className="w-full flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-12 bg-black/20">
        &copy; {new Date().getFullYear()} MaxByte. Built with React & Tailwind.
      </footer>
    </div>
  );
};

export default App;
