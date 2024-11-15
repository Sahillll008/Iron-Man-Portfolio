import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, Cpu } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 relative" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/80 backdrop-blur-lg rounded-lg p-8 shadow-2xl border border-[#00bfff]/20"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border-4 border-[#00bfff] shadow-lg overflow-hidden hologram">
                  <img
                    src="https://i.imgur.com/Hy7Hy7H.jpg"
                    alt="Sahil Mujumdar"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#00bfff]/20 to-transparent pointer-events-none" />
                {/* Arc Reactor Glow Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#00bfff]/20 animate-pulse filter blur-xl" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center mb-6">
                <Shield className="text-[#00bfff] mr-3" />
                <h2 className="text-4xl font-bold font-['Roboto'] text-[#00bfff] glow-text">About Me</h2>
              </div>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                Like Tony Stark in the digital realm, I combine technical expertise with innovative problem-solving. 
                Armed with my own version of JARVIS (Just A Rather Very Intelligent System), I navigate through complex 
                data structures and fortify digital defenses with the precision of an Arc Reactor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start p-4 bg-black/50 rounded-lg border border-[#00bfff]/30 hover:border-[#00bfff] transition-colors">
                  <Database className="text-[#00bfff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                    <p className="text-gray-400">Processing complex data streams with AI-enhanced analytical tools.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-black/50 rounded-lg border border-[#00bfff]/30 hover:border-[#00bfff] transition-colors">
                  <Shield className="text-[#00bfff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cyber Security</h3>
                    <p className="text-gray-400">Protecting digital assets with quantum-grade security protocols.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-black/50 rounded-lg border border-[#00bfff]/30 hover:border-[#00bfff] transition-colors">
                  <Zap className="text-[#00bfff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                    <p className="text-gray-400">Enhancing system efficiency with advanced optimization techniques.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-black/50 rounded-lg border border-[#00bfff]/30 hover:border-[#00bfff] transition-colors">
                  <Cpu className="text-[#00bfff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                    <p className="text-gray-400">Implementing smart solutions with cutting-edge AI technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;