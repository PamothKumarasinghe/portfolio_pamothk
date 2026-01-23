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
    <section id="skills" className="min-h-screen flex items-center py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-400 mb-4">Skills & Technologies</h2>
          <p className="text-gray-300 max-w-3xl mb-16">
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
                className="p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <h3 className="text-white mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                        duration: 0.3
                      }}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
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