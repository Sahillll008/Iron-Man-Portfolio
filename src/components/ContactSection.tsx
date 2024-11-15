import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:21107050.sahil.mujumdar@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section className="min-h-screen py-20 relative" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1A1B26]/80 backdrop-blur-lg rounded-lg p-8 shadow-2xl border border-[#FFB86C]/20"
        >
          <div className="flex items-center mb-8">
            <MessageSquare className="text-[#FFB86C] mr-3" />
            <h2 className="text-4xl font-bold font-[Cinzel] text-[#FFB86C]">Send an Owl</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#2A2B36] border border-[#FFB86C]/20 text-white focus:border-[#FFB86C] focus:ring-1 focus:ring-[#FFB86C] transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#2A2B36] border border-[#FFB86C]/20 text-white focus:border-[#FFB86C] focus:ring-1 focus:ring-[#FFB86C] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-[#2A2B36] border border-[#FFB86C]/20 text-white focus:border-[#FFB86C] focus:ring-1 focus:ring-[#FFB86C] transition-colors"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#FFB86C] to-[#FFD700] text-black font-bold rounded-lg flex items-center justify-center space-x-2 hover:from-[#FFD700] hover:to-[#FFB86C] transition-all duration-300"
            >
              <Send size={20} />
              <span>Send Message</span>
            </motion.button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-[#FFB86C]/20">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Mail size={20} className="text-[#FFB86C]" />
              <span>Or email me directly at: </span>
              <a href="mailto:21107050.sahil.mujumdar@gmail.com" className="text-[#FFB86C] hover:text-[#FFD700] transition-colors">
                21107050.sahil.mujumdar@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;