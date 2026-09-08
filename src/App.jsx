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
import BackgroundLayer from './components/BackgroundLayer';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import SocialSidebar from './components/SocialSidebar';
import GojoCharacter from './components/GojoCharacter';
import { preloadGreeting } from './utils/portfolioGreeting';

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    preloadGreeting();

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        className="flex h-screen w-screen items-center justify-center bg-background"
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
          className="h-16 w-16 bg-gradient-to-tr from-brand-primary to-brand-secondary shadow-[var(--accent-glow)]"
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
        <div className="relative flex min-h-screen flex-col items-center bg-background text-foreground transition-colors duration-400">
          <BackgroundLayer />

          <motion.div
            className="pointer-events-none fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-brand-primary to-brand-secondary"
            style={{ scaleX }}
          />

          {isDark && (
            <SplashCursor
              COLOR="#A855F7"
              SPLAT_RADIUS={0.2}
              VELOCITY_DISSIPATION={2}
              DENSITY_DISSIPATION={3.5}
            />
          )}

          <Navbar />
          <SocialSidebar />
          <GojoCharacter />

          <main className="relative z-10 flex w-full flex-col items-center">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>

          <footer className="relative z-10 mt-12 w-full border-t border-border py-8 text-center text-sm text-muted bg-[var(--footer-bg)]">
            &copy; {new Date().getFullYear()} Sourabh Rawat. All Rights Reserved. Built with React & Tailwind.
          </footer>
        </div>
      </ToastProvider>
    </ReactLenis>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
