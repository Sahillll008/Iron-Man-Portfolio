import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Shield, Zap } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import MarvelBackground from './components/HogwartsBackground';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  const projects = [
    {
      title: "Space Theme Portfolio",
      description: "A cosmic journey through my professional universe",
      link: "https://github.com/MujumdarSahil/Personal-Portfolio",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "Breast Cancer Prediction AI",
      description: "AI-powered medical diagnosis system",
      link: "https://github.com/MujumdarSahil/Diabetes_Prediction_App",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
    },
    {
      title: "Amazon Sales Dashboard",
      description: "PowerBI visualization of sales analytics",
      link: "https://github.com/MujumdarSahil/Prime-Video-Power-BI",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Google Chrome Clone",
      description: "A faithful recreation of the world's most popular browser",
      link: "https://github.com/MujumdarSahil/Google-Clone",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2024&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <MarvelBackground />
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center"
        >
          <div className="relative z-10 text-center px-4 py-20">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-bold mb-4 font-['Roboto'] text-[#00bfff]"
            >
              Sahil Mujumdar
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl mb-8 text-white/90"
            >
              Data Analyst & Cyber Security Specialist
            </motion.p>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center space-x-6"
            >
              <a href="https://github.com/MujumdarSahil" target="_blank" rel="noopener noreferrer" className="hover:text-[#00bfff] transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sahil-mujumdar-2ba179268/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00bfff] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:21107050.sahil.mujumdar@gmail.com" className="hover:text-[#00bfff] transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
        </motion.section>

        <AboutSection />
        
        {/* Projects Section */}
        <section className="py-20 px-4 md:px-8" id="projects">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
              <Zap className="text-[#00bfff] mr-3" />
              <h2 className="text-4xl font-bold font-['Roboto'] text-[#00bfff]">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />

        {/* Footer */}
        <footer className="py-8 text-center backdrop-blur-sm bg-black/20">
          <p className="text-white/60">
            Powered by Arc Reactor Technology © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;