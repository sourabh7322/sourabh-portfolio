import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
              className="glass-card rounded-2xl overflow-hidden group perspective-1000"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full border border-brand-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a href={project.live} className="flex items-center gap-2 text-sm text-white hover:text-brand-secondary transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm text-white hover:text-brand-primary transition-colors">
                    <Code2 size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
