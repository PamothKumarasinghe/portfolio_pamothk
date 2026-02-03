'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '../lib/actions';

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <section id="projects" className="min-h-screen py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-20 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={24} className="text-cyan-400" />
            <h2 className="text-gray-400 text-4xl font-bold">Featured Projects</h2>
            <Sparkles size={24} className="text-cyan-400" />
          </div>
          <p className="text-gray-300 max-w-3xl mb-16 text-lg">
            A selection of projects showcasing my expertise across web development, game development, and software engineering.
          </p>

          {projects.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              animate={{ scale: [0.95, 1] }}
            >
              <p className="text-gray-400">No projects available at the moment.</p>
            </motion.div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
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
                      <motion.div 
                        className="mb-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-cyan-400 text-sm font-semibold">{project.type}</span>
                      </motion.div>
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
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: tagIndex * 0.05 }}
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
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-all border border-white/10 hover:border-cyan-500/50 px-6 py-3 rounded-lg hover:bg-cyan-500/10 group"
                  >
                    View All Projects
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
