'use client';

import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';

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

export function ProjectsPageClient({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <PageHeader
          title="All Projects"
          description="A comprehensive collection of my work across web development, game development, mobile apps, and more."
        />

        {projects.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400">No projects found.</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
