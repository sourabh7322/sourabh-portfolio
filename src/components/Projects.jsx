import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: 'JARVIS',
    description:
      'A voice + text personal AI dashboard with live web search, RAG memory, and Graphify token compression. Built with Next.js, FastAPI, and OpenRouter — streaming replies in real time with weather, system control, and a glassmorphic command-center UI.',
    image: '/Project/Project-4.jpeg',
    live: 'https://jarvisautomated.netlify.app/',
    theme: {
      leftBg: 'bg-gradient-to-br from-[#0A1628] to-[#050B14]',
      rightBg: 'bg-gradient-to-br from-[#0E7490] to-[#164E63]',
      lightLeftBg: 'bg-gradient-to-br from-[#ecfeff] to-[#cffafe]',
      lightRightBg: 'bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]',
      accentColor: '#22D3EE',
    },
  },
  {
    title: 'Knowledge Knook',
    description:
      'A robust edu-tech platform for creating, consuming, and rating educational content. Built with the MERN stack — React, Node.js, Express, and MongoDB — with a full ecosystem for learners to explore resources and collaborate.',
    image: '/Project/Project-1.png',
    live: 'https://lg-legends-053-nem-104.vercel.app',
    theme: {
      leftBg: 'bg-gradient-to-br from-[#0F2A24] to-[#071612]',
      rightBg: 'bg-gradient-to-br from-[#14532D] to-[#052E16]',
      lightLeftBg: 'bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5]',
      lightRightBg: 'bg-gradient-to-br from-[#f0fdf4] to-[#bbf7d0]',
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
      lightLeftBg: 'bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff]',
      lightRightBg: 'bg-gradient-to-br from-[#eff6ff] to-[#bfdbfe]',
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
      lightLeftBg: 'bg-gradient-to-br from-[#fffbeb] to-[#fef3c7]',
      lightRightBg: 'bg-gradient-to-br from-[#fef9c3] to-[#fde68a]',
      accentColor: '#D4AF37',
    },
  },
];

const CARD_COUNT = projects.length;

const SEGMENT = 1 / CARD_COUNT;

const ProgressDot = ({ index, progress, isDark }) => {
  const enterStart = index * SEGMENT;
  const enterMid = enterStart + SEGMENT * 0.5;

  const backgroundColor = useTransform(
    progress,
    [enterStart, enterMid],
    isDark
      ? ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.9)']
      : ['rgba(208,1,27,0.2)', 'rgba(208,1,27,0.95)'],
    { clamp: true }
  );

  return <motion.div className="w-2 h-2 rounded-full" style={{ backgroundColor }} />;
};

const ScrollHint = ({ progress }) => {
  const opacity = useTransform(progress, [0, SEGMENT * 0.2], [1, 0], { clamp: true });

  return (
    <motion.div className="w-full flex justify-center select-none pointer-events-none">
      <motion.span className="text-foreground/30 text-xs tracking-widest uppercase animate-bounce" style={{ opacity }}>
        scroll
      </motion.span>
    </motion.div>
  );
};

const Card = ({ i, title, description, image, live, theme, progress }) => {
  const { isDark } = useTheme();
  const isEven = i % 2 === 0;

  const textPanelBg = isDark
    ? isEven
      ? theme.leftBg
      : theme.rightBg
    : isEven
      ? theme.lightLeftBg
      : theme.lightRightBg;

  const imagePanelBg = isDark
    ? isEven
      ? theme.rightBg
      : theme.leftBg
    : isEven
      ? theme.lightRightBg
      : theme.lightLeftBg;

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
      <div
        className={`relative flex h-[520px] w-full flex-col overflow-hidden rounded-[24px] border border-border md:h-[450px] md:rounded-[32px] ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        } ${isDark ? 'shadow-[0_30px_70px_rgba(0,0,0,0.85)]' : 'shadow-[var(--glass-shadow)]'}`}
      >
        <div
          className={`relative flex w-full flex-col items-start justify-center overflow-hidden p-8 md:w-1/2 md:p-16 ${textPanelBg}`}
        >
          <div
            className={`pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r to-transparent ${
              isDark ? 'from-white/10' : 'from-black/5'
            }`}
          />

          <h3
            className={`mb-6 text-3xl font-extrabold leading-[1.15] tracking-tight md:text-5xl ${
              isDark ? 'text-white' : 'text-foreground'
            }`}
          >
            {title}
          </h3>

          <p
            className={`mb-8 max-w-lg text-sm leading-relaxed font-light md:text-base ${
              isDark ? 'text-white/80' : 'text-muted'
            }`}
          >
            {description}
          </p>

          <a
            href={live}
            className={`group pointer-events-auto inline-flex cursor-pointer items-center gap-2 border-b pb-0.5 text-sm font-semibold transition-all duration-300 md:text-base ${
              isDark
                ? 'border-transparent text-white hover:border-white'
                : 'border-transparent text-brand-primary hover:border-brand-primary'
            }`}
          >
            View Site{' '}
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </a>
        </div>

        <div
          className={`relative flex w-full items-center justify-center overflow-hidden p-6 md:w-1/2 md:p-12 ${imagePanelBg}`}
        >
          <div
            className={`relative z-10 flex h-full max-h-[220px] w-full flex-col rounded-2xl border p-3 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] md:max-h-[300px] md:p-4 ${
              isDark ? 'border-white/10 bg-black/40' : 'border-border bg-white/90'
            }`}
          >
            <div
              className={`mb-2.5 flex select-none items-center gap-1.5 border-b pb-2.5 md:mb-3 md:pb-3 ${
                isDark ? 'border-white/5' : 'border-border'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            <div
              className={`relative w-full flex-1 overflow-hidden rounded-lg border ${
                isDark ? 'border-white/5' : 'border-border'
              }`}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div
            className={`pointer-events-none absolute inset-0 ${isDark ? 'bg-black/10' : 'bg-white/20'}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
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
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground tracking-widest uppercase">
            PROJECTS
          </h2>
          <div className="mx-6 h-[2px] flex-1 bg-border" />
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <ProgressDot key={i} index={i} progress={scrollYProgress} isDark={isDark} />
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
