'use client';

import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const roles = ['Software Engineer', 'Full Stack Developer', 'Game Developer'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid with glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture with enhanced glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <motion.div 
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl animate-glow-pulse"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/profilepic.jpg"
                alt="Pamoth Kumarasinghe"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                animate={{ 
                  borderColor: ['rgba(59, 130, 246, 0)', 'rgba(139, 92, 246, 0.5)', 'rgba(59, 130, 246, 0)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Greeting with sparkles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-gray-400 flex items-center justify-center gap-2"
          >
            <Sparkles size={20} className="text-blue-500" />
            <span>Hello, I&apos;m</span>
            <Sparkles size={20} className="text-purple-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Pamoth Kumarasinghe
          </motion.h1>

          {/* Animated roles with stagger */}
          <div className="mb-8 h-12 flex items-center justify-center">
            {roles.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7 + index * 0.2,
                  duration: 0.5
                }}
                className="text-gray-400"
                whileHover={{ scale: 1.1, color: '#3b82f6' }}
              >
                {index > 0 && <span className="mx-3 text-gray-600">|</span>}
                {role}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <button className="ui-btn hover:shadow-lg hover:shadow-blue-500/50">
                <span>View Work</span>
              </button>
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <button className="ui-btn hover:shadow-lg hover:shadow-purple-500/50">
                <span>Get in Touch</span>
              </button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5 },
          y: { delay: 1.5, repeat: Infinity, duration: 2 }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}