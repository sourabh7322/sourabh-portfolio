import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ReactLenis } from 'lenis/react';

import SplashCursor from './components/SplashCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import { ToastProvider } from './context/ToastContext';

const App = () => {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('portfolio-loaded'));
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!loading) return undefined;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('portfolio-loaded', '1');
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return (
      <motion.div
        className="h-screen w-screen bg-[#050505] flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="w-16 h-16 bg-gradient-to-tr from-brand-primary to-brand-secondary shadow-[0_0_30px_#A855F7]"
        />
      </motion.div>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        smoothWheel: true,
      }}
    >
      <ToastProvider>
        <div className="bg-[#050505] min-h-screen text-white relative flex flex-col items-center selection:bg-brand-primary/30 selection:text-white">
          <ParticlesBackground />

          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary z-50 origin-left pointer-events-none"
            style={{ scaleX }}
          />

          <SplashCursor
            COLOR="#A855F7"
            SPLAT_RADIUS={0.2}
            VELOCITY_DISSIPATION={2}
            DENSITY_DISSIPATION={3.5}
          />

          <Navbar />

          <main className="relative z-10 w-full flex flex-col items-center">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>

          <footer className="relative z-10 w-full py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-12 bg-black/20">
            &copy; {new Date().getFullYear()} Sourabh Rawat. All Rights Reserved. Built with React & Tailwind.
          </footer>
        </div>
      </ToastProvider>
    </ReactLenis>
  );
};

export default App;
