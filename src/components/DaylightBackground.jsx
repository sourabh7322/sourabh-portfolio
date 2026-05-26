import { motion } from 'framer-motion';

const blobs = [
  {
    className: 'left-[-12%] top-[8%] h-[420px] w-[420px] bg-[#f8d4e8]',
    duration: 22,
  },
  {
    className: 'right-[-8%] top-[18%] h-[380px] w-[380px] bg-[#e8d4f8]',
    duration: 26,
  },
  {
    className: 'left-[18%] bottom-[5%] h-[460px] w-[460px] bg-[#ffd6e0]',
    duration: 24,
  },
  {
    className: 'right-[12%] bottom-[-8%] h-[340px] w-[340px] bg-[#ddd4ff]',
    duration: 20,
  },
  {
    className: 'left-[42%] top-[42%] h-[300px] w-[300px] bg-[#ffe8f0]',
    duration: 28,
  },
];

const DaylightBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
    <div className="absolute inset-0 bg-gradient-to-br from-[#fff9fc] via-[#faf6ff] to-[#f3eeff]" />

    {blobs.map((blob, index) => (
      <motion.div
        key={index}
        className={`absolute rounded-full opacity-70 blur-3xl ${blob.className}`}
        animate={{
          x: [0, 24, -16, 0],
          y: [0, -20, 14, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{
          duration: blob.duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}

    <div className="absolute inset-0 bg-white/30" />
  </div>
);

export default DaylightBackground;
