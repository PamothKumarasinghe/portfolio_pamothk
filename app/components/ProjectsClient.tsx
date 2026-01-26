'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '../lib/actions';

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <section id="projects" className="min-h-screen py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-400 mb-4">Featured Projects</h2>
          <p className="text-gray-300 max-w-3xl mb-16">
            A selection of projects showcasing my expertise across web development, game development, and software engineering.
          </p>

          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No projects available at the moment.</p>
            </div>
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
                    className="border border-white/10 p-6 hover:border-white/30 transition-all group hover:translate-y-[-4px]"
                  >
                    <div className="mb-3">
                      <span className="text-gray-500 text-sm">{project.type}</span>
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
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 text-center"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border border-white/10 px-6 py-3 hover:border-white/30 group"
                >
                  View All Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
