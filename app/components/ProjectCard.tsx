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
      className="border border-white/10 p-6 hover:border-white/30 transition-all group hover:translate-y-[-4px]"
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-gray-500 text-sm">{project.type}</span>
        {project.year && <span className="text-gray-600 text-xs">{project.year}</span>}
      </div>
      <h3 className="text-white mb-3 group-hover:text-gray-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-white/5 text-gray-400 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-gray-400">
        {project.codeLink ? (
          <a 
            href={project.codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Github size={18} />
            Code
          </a>
        ) : (
          <span className="opacity-50 flex items-center gap-2">
            <Github size={18} />
            Code
          </span>
        )}
        {project.liveLink ? (
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <ExternalLink size={18} />
            Live
          </a>
        ) : (
          <span className="opacity-50 flex items-center gap-2">
            <ExternalLink size={18} />
            Live
          </span>
        )}
      </div>
    </motion.div>
  );
}
