'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const roles = ['Software Engineer', 'Full Stack Developer', 'Game Developer'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
              <Image
                src="/profilepic.jpg"
                alt="Pamoth Kumarasinghe"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-gray-400"
          >
            Hello, I&apos;m
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white mb-6"
          >
            Pamoth Kumarasinghe
          </motion.h1>

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
              >
                {index > 0 && <span className="mx-3 text-gray-600">|</span>}
                {role}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a href="#projects">
              <button className="ui-btn">
                <span>View Work</span>
              </button>
            </a>
            <a href="#contact">
              <button className="ui-btn">
                <span>Get in Touch</span>
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}