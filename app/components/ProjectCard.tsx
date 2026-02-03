'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  codeLink: string;
  liveLink?: string;
  year?: string;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.6 }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)'
      }}
      className="border border-white/10 p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all rounded-lg backdrop-blur-sm group relative overflow-hidden"
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-20 blur"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <motion.span 
            className="text-cyan-400 text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            {project.type}
          </motion.span>
          {project.year && (
            <motion.span 
              className="text-gray-500 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.year}
            </motion.span>
          )}
        </div>
        <h3 className="text-white mb-3 group-hover:text-cyan-300 transition-colors text-xl font-semibold">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index + tagIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="text-xs px-3 py-1 bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-4 text-gray-400">
          {project.codeLink ? (
            <motion.a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#22d3ee' }}
              className="hover:text-cyan-300 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              Code
            </motion.a>
          ) : (
            <span className="opacity-50 flex items-center gap-2">
              <Github size={18} />
              Code
            </span>
          )}
          {project.liveLink ? (
            <motion.a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#22d3ee' }}
              className="hover:text-cyan-300 transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Live
            </motion.a>
          ) : (
            <span className="opacity-50 flex items-center gap-2">
              <ExternalLink size={18} />
              Live
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
