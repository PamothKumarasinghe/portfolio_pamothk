'use client';

import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Game Development',
      skills: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Game Design', '3D Modeling']
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'Linux']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-gray-400 mb-4 text-4xl font-bold"
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-gray-300 max-w-3xl mb-16 text-lg">
            A comprehensive toolkit for building everything from web applications to immersive games.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                }}
                className="p-6 border border-white/10 hover:border-blue-500/50 rounded-lg hover:bg-blue-500/5 transition-all backdrop-blur-sm"
              >
                <motion.h3 
                  className="text-white mb-4 text-xl font-semibold"
                  whileInView={{ scale: [1, 1.05, 1] }}
                  viewport={{ once: true }}
                >
                  {category.category}
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderColor: 'rgba(59, 130, 246, 0.8)',
                        y: -2
                      }}
                      transition={{
                        delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                        duration: 0.3
                      }}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full hover:text-white transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}