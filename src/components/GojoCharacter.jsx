import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import GojoModel from './GojoModel';

// Bigger character; y shifts feet toward bottom of the canvas.
const MODEL_SCALE = 0.92;
const MODEL_Y = -1.7;

const IdleGojo = () => {
  const groupRef = useRef(null);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    const t = state.clock.elapsedTime;
    group.rotation.y = Math.sin(t * 0.4) * 0.22;
    group.position.y = MODEL_Y + Math.sin(t * 1.2) * 0.03;
  });

  return (
    <group ref={groupRef} position={[0, MODEL_Y, 0]} scale={MODEL_SCALE}>
      <GojoModel />
    </group>
  );
};

const GojoCharacter = () => (
  <div
    className="pointer-events-none fixed bottom-0 right-0 z-30 hidden h-[min(78vh,620px)] w-[min(52vw,480px)] select-none md:block"
    aria-hidden="true"
  >
    <Canvas
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0.2, 5.2], fov: 34, near: 0.1, far: 50 }}
      dpr={[1, 1.75]}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[3, 5, 4]} intensity={1.6} />
      <directionalLight position={[-3, 2, -2]} intensity={0.55} color="#93c5fd" />
      <Suspense fallback={null}>
        <IdleGojo />
      </Suspense>
    </Canvas>
  </div>
);

export default GojoCharacter;
