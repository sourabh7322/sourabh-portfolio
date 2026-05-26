import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useTheme } from '../context/ThemeContext';

export default function ParticlesBackground() {
  const { isDark } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 120,
      particles: {
        number: { value: isDark ? 80 : 55, density: { enable: true, area: 800 } },
        color: {
          value: isDark ? ['#A855F7', '#EC4899'] : ['#d0011b', '#ff8fa3'],
        },
        links: {
          enable: true,
          color: isDark ? '#A855F7' : '#d0011b',
          opacity: isDark ? 0.4 : 0.22,
          distance: 150,
        },
        move: { enable: true, speed: isDark ? 1 : 0.7 },
        opacity: { value: isDark ? 0.6 : 0.45 },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
      },
    }),
    [isDark],
  );

  if (!isDark) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0 h-full w-full pointer-events-none"
      options={options}
    />
  );
}
