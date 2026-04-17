import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-30 blur-2xl rounded-full" />
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&q=80" 
            alt="Developer" 
            className="relative rounded-2xl w-full h-[400px] object-cover border border-white/10"
          />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary inline-block">
          My Story
        </h2>
        <h3 className="text-2xl text-gray-300 font-semibold mb-6">Building digital products that matter.</h3>
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            I&apos;m a passionate Full Stack Developer with a keen eye for modern design and robust architecture. 
            My journey into coding started with customizing themes and has grown into a full-fledged obsession with building scalable web applications.
          </p>
          <p>
            When I&apos;m not writing code, I&apos;m exploring the latest technologies, contributing to open-source, or experimenting with WebGL and interactive animations. I believe that a great UI should not only look stunning but also feel alive and intuitive.
          </p>
          <p>
            My approach combines clean architecture with creative problem-solving to deliver products that users love. Let&apos;s build something amazing together.
          </p>
        </div>
        
        <div className="mt-8 flex gap-8">
          <div>
            <span className="block text-3xl font-bold text-white">5+</span>
            <span className="text-sm text-brand-primary">Years Experience</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-white">40+</span>
            <span className="text-sm text-brand-secondary">Projects Done</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
