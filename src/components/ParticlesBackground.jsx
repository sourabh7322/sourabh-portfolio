import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0 h-full w-full pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 120,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: ['#A855F7', '#EC4899'] },
          links: {
            enable: true,
            color: '#A855F7',
            opacity: 0.4,
            distance: 150,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
      }}
    />
  );
}
