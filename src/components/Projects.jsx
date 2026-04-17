import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import TiltedCard from './TiltedCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    stack: ['React', 'Node.js', 'Tailwind', 'MongoDB'],
    description: 'A full-stack e-commerce platform with real-time inventory and Stripe payments.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    live: '#',
    github: '#',
  },
  {
    title: 'AI Dashboard',
    stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    description: 'Analytics dashboard featuring AI-driven insights and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    live: '#',
    github: '#',
  },
  {
    title: 'Social Media App',
    stack: ['React Native', 'Firebase', 'Redux'],
    description: 'Mobile social networking app with real-time messaging and media sharing.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80',
    live: '#',
    github: '#',
  },
];

const Projects = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">
          Featured Work
        </h2>

        <motion.div 
          ref={carousel} 
          className="w-[80vw] relative left-1/2 -ml-[40vw] overflow-hidden pb-8 cursor-grab active:cursor-grabbing"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-8 px-[10vw] w-max"
          >
            {projects.map((project, i) => (
              <div key={i} className="snap-center shrink-0">
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.title}
                  captionText={project.title}
                  containerHeight="400px"
                  containerWidth="350px"
                  imageHeight="400px"
                  imageWidth="350px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="flex flex-col w-full">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.stack.map(tech => (
                          <span key={tech} className="text-[10px] font-medium text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded-full border border-brand-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <a href={project.live} className="flex items-center gap-1.5 text-xs text-white hover:text-brand-secondary transition-colors cursor-pointer pointer-events-auto">
                          <ExternalLink size={14} /> Live
                        </a>
                        <a href={project.github} className="flex items-center gap-1.5 text-xs text-white hover:text-brand-primary transition-colors cursor-pointer pointer-events-auto">
                          <Code2 size={14} /> Code
                        </a>
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
