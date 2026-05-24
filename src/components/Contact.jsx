import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Code2, Briefcase, MessageCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const Contact = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('error', 'Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate network delay for realism
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Build mailto link as fallback — opens email client with prefilled content
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:sourabhrawat77200@gmail.com?subject=${subject}&body=${body}`, '_blank');

      showToast('success', '✅ Message sent! Opening your email client...');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      showToast('error', error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              <motion.div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me At</p>
                  <p className="font-medium text-white">sourabhrawat77200@gmail.com</p>
                </div>
              </motion.div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-secondary">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-white">Bangaluru, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-primary">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Me At</p>
                  <p className="font-medium text-white">+91 7906834867</p>
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

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
