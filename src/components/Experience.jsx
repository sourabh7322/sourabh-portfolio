import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    year: '2022 - Present',
    description: 'Led a team of developers in building a hyper-scalable SaaS platform. Improved performance by 40% using modern React practices and optimized API architecture.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Creative Web Studio',
    year: '2020 - 2022',
    description: 'Developed highly interactive and performant web applications using React and Framer Motion. Collaborated closely with UI/UX designers.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Startup Hub',
    year: '2019 - 2020',
    description: 'Assisted in the development of several progressive web apps. Gained hands-on experience in full-stack JavaScript environments.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">
          Experience
        </h2>
        
        <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-brand-primary shadow-[0_0_10px_#A855F7] border border-[#050505]" />
              
              <div className="glass-card p-6 rounded-2xl relative group hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-brand-secondary font-medium text-sm md:text-base bg-brand-secondary/10 px-3 py-1 rounded-full w-max mt-2 md:mt-0">
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-gray-300 font-medium mb-3">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
