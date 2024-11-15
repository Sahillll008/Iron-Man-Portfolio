import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group overflow-hidden rounded-lg shadow-xl bg-[#1A1B26]"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#FFB86C] hover:text-[#FFD700] transition-colors"
        >
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828] via-transparent to-transparent opacity-60" />
    </motion.div>
  );
};

export default ProjectCard;