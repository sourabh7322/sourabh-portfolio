import { motion } from 'framer-motion';

const skills = [
  { name: 'React & Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Framer Motion', level: 85 },
  { name: 'MongoDB / PostgreSQL', level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 blur-[2px]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
