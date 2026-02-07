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
    <section id="about" className="min-h-screen flex items-center py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            whileInView={{ x: [0] }}
          >
            About Me
          </motion.h2>
          <p className="text-white max-w-3xl mb-16 text-gray-300 text-lg leading-relaxed">
            I&apos;m a passionate developer who loves crafting exceptional digital experiences. 
            With expertise spanning software engineering, full stack development, and game development, 
            I bring ideas to life through code, creativity, and attention to detail.
            Pamoth Kumarasinghe a name that resonates with innovation, dedication, and a relentless pursuit of excellence in the world of technology. With a passion for crafting exceptional digital experiences, Pamoth has established himself as a versatile developer with expertise spanning software engineering, full stack development, and game development. Through code, creativity, and attention to detail, Pamoth brings ideas to life, creating impactful solutions that push the boundaries of what&apos;s possible in the digital realm.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="p-6 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all rounded-lg group backdrop-blur-sm"
              >
                <motion.div 
                  className="text-blue-400 mb-4 inline-block"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-white mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}