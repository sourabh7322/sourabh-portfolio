import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Code2, Briefcase, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submit
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 glass-card p-8 md:p-12 rounded-3xl">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s talk about your project</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am currently available for freelance work and full-time opportunities.
              If you have a project that needs some creative magic, don&apos;t hesitate to contact me.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me At</p>
                  <p className="font-medium text-white">hello@maxbyte.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-secondary">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-white">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-primary">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Me At</p>
                  <p className="font-medium text-white">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-primary flex items-center justify-center text-white transition-all hover:scale-110 border border-white/10">
                <Code2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-secondary flex items-center justify-center text-white transition-all hover:scale-110 border border-white/10">
                <Briefcase size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-primary flex items-center justify-center text-white transition-all hover:scale-110 border border-white/10">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
