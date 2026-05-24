import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'Knowledge Knook',
    description:
      'A robust edu-tech platform for creating, consuming, and rating educational content. Built with the MERN stack — React, Node.js, Express, and MongoDB — with a full ecosystem for learners to explore resources and collaborate.',
    image: '/Project/Project-1.png',
    live: 'https://lg-legends-053-nem-104.vercel.app',
    theme: {
      leftBg: 'bg-gradient-to-br from-[#0F2A24] to-[#071612]',
      rightBg: 'bg-gradient-to-br from-[#14532D] to-[#052E16]',
      accentColor: '#22C55E',
    },
  },
  {
    title: 'Beyond Boundary',
    description:
      'A full-stack platform that outsources services and delivers end-to-end business solutions, connecting skilled professionals with global career opportunities. Built with TypeScript, React, Vite, and a Node.js backend on Render.',
    image: '/Project/Project-2.png',
    live: 'https://6645cad5f9b1737972e5748c--glistening-pithivier-5a324a.netlify.app/',
    theme: {
      leftBg: 'bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A]',
      rightBg: 'bg-gradient-to-br from-[#2563EB] to-[#1E3A8A]',
      accentColor: '#3B82F6',
    },
  },
  {
    title: 'Gold Hub',
    description:
      'A collaborative Tanishq-inspired jewellery e-commerce clone with responsive product listings, cart flows, and backend APIs. Built with HTML, CSS, JavaScript, and Bootstrap as a construct week full-stack project.',
    image: '/Project/Project-3.png',
    live: 'https://pixel-prerana.vercel.app/Frontend/home.html',
    theme: {
      leftBg: 'bg-gradient-to-br from-[#2A1F0E] to-[#1A1208]',
      rightBg: 'bg-gradient-to-br from-[#B8860B] to-[#8B6914]',
      accentColor: '#D4AF37',
    },
  },
  {
    title: 'Image Adjuster Online',
    description:
      'Effortless, professional-grade photo color grading. Upload your image, make adjustments, and download without any hassle. Built using NextJS, Typescript & TailwindCSS.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    live: '#',
    theme: {
      leftBg: 'bg-gradient-to-br from-[#1C1236] to-[#120A24]',
      rightBg: 'bg-gradient-to-br from-[#5339A6] to-[#25134A]',
      accentColor: '#8B5CF6',
    },
  },
  {
    title: 'Modern Rajab Maintenance and Construction Co.',
    description:
      'Designed and developed a website for Modern Rajab Maintenance & Construction Co., a top UAE contracting company.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    live: '#',
    theme: {
      leftBg: 'bg-gradient-to-br from-[#9D2320] to-[#450C0A]',
      rightBg: 'bg-gradient-to-br from-[#260C0A] to-[#140404]',
      accentColor: '#EF4444',
    },
  },
  {
    title: 'Fix My Office',
    description:
      'Designed and developed the front end for Fix My Office, a UAE-based office solutions company. Created a modern, responsive interface that effectively showcases their services, enhancing user engagement and accessibility.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    live: '#',
    theme: {
      leftBg: 'bg-gradient-to-br from-[#120E28] to-[#0A0717]',
      rightBg: 'bg-gradient-to-br from-[#30267D] to-[#120D3E]',
      accentColor: '#3B82F6',
    },
  },
];

const CARD_COUNT = projects.length;

const SEGMENT = 1 / CARD_COUNT;

const ProgressDot = ({ index, progress }) => {
  const enterStart = index * SEGMENT;
  const enterMid = enterStart + SEGMENT * 0.5;

  const backgroundColor = useTransform(
    progress,
    [enterStart, enterMid],
    ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.9)'],
    { clamp: true }
  );

  return <motion.div className="w-2 h-2 rounded-full" style={{ backgroundColor }} />;
};

const ScrollHint = ({ progress }) => {
  const opacity = useTransform(progress, [0, SEGMENT * 0.2], [1, 0], { clamp: true });

  return (
    <motion.div className="w-full flex justify-center select-none pointer-events-none">
      <motion.span className="text-white/30 text-xs tracking-widest uppercase animate-bounce" style={{ opacity }}>
        scroll
      </motion.span>
    </motion.div>
  );
};

const Card = ({ i, title, description, image, live, theme, progress }) => {
  const isEven = i % 2 === 0;

  const enterStart = i * SEGMENT;
  const enterEnd = (i + 1) * SEGMENT;

  const y = useTransform(
    progress,
    i === 0 ? [0, 1] : [enterStart, enterEnd],
    i === 0 ? ['0%', '0%'] : ['120%', '0%'],
    { clamp: true }
  );

  const scale = useTransform(
    progress,
    i === CARD_COUNT - 1
      ? [0, 1]
      : [enterEnd, Math.min(enterEnd + SEGMENT * 0.2, 1)],
    i === CARD_COUNT - 1 ? [1, 1] : [1, 0.93],
    { clamp: true }
  );

  const opacity = useTransform(progress, (value) =>
    i === 0 || value >= enterStart ? 1 : 0
  );

  const visibility = useTransform(progress, (value) =>
    i === 0 || value >= enterStart ? 'visible' : 'hidden'
  );

  const pointerEvents = useTransform(progress, (value) =>
    i === 0 || value >= enterStart ? 'auto' : 'none'
  );

  return (
    <motion.div
      style={{ y, scale, opacity, visibility, pointerEvents, zIndex: i + 1 }}
      className="absolute inset-0 mx-auto flex w-full max-w-7xl items-center justify-center px-4 md:px-12"
    >
      <div className={`w-full h-[520px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        } border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.85)] relative`}
      >
        <div
          className={`w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start relative overflow-hidden ${
            isEven ? theme.leftBg : theme.rightBg
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />

          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
            {title}
          </h3>

          <p className="text-gray-300/90 text-sm md:text-base mb-8 leading-relaxed max-w-lg font-light">
            {description}
          </p>

          <a
            href={live}
            className="group inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white/95 hover:text-white transition-all duration-300 cursor-pointer pointer-events-auto border-b border-transparent hover:border-white pb-0.5"
          >
            View Site{' '}
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </a>
        </div>

        <div
          className={`w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center relative overflow-hidden ${
            isEven ? theme.rightBg : theme.leftBg
          }`}
        >
          <div className="w-full h-full max-h-[220px] md:max-h-[300px] bg-black/40 rounded-2xl border border-white/10 p-3 md:p-4 flex flex-col shadow-2xl backdrop-blur-md relative z-10 transition-transform duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-1.5 pb-2.5 md:pb-3 border-b border-white/5 mb-2.5 md:mb-3 select-none">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            <div className="flex-1 w-full overflow-hidden rounded-lg border border-white/5 relative">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const sectionHeight = `${CARD_COUNT * 100}vh`;

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative z-10 w-full"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex items-center select-none z-20">
          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-widest uppercase">
            PROJECTS
          </h2>
          <div className="h-[2px] flex-1 bg-white/10 mx-6" />
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <ProgressDot key={i} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>

        <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              i={i}
              {...project}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <ScrollHint progress={scrollYProgress} />
      </div>
    </section>
  );
};

export default Projects;
