'use client';

import { motion } from 'motion/react';
import { Code2, Gamepad2, Layers } from 'lucide-react';


export function About() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Software Engineering',
      description: 'Building robust, scalable applications with clean architecture and best practices.'
    },
    {
      icon: <Layers size={32} />,
      title: 'Full Stack Development',
      description: 'End-to-end development from frontend interfaces to backend systems and databases.'
    },
    {
      icon: <Gamepad2 size={32} />,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences with compelling mechanics and engaging narratives.'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-400 mb-4">About Me</h2>
          <p className="text-white max-w-3xl mb-16 text-gray-300">
            I&apos;m a passionate developer who loves crafting exceptional digital experiences. 
            With expertise spanning software engineering, full stack development, and game development, 
            I bring ideas to life through code, creativity, and attention to detail.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="p-6 border border-white/10 hover:border-white/30 transition-colors group"
              >
                <div className="text-white mb-4 group-hover:scale-110 transition-transform inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}