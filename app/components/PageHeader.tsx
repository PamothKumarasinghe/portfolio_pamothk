'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        whileHover={{ x: -5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all mb-8 group"
        >
          <motion.div
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowLeft size={20} className="group-hover:text-blue-400" />
          </motion.div>
          <span className="group-hover:underline">Back to Home</span>
        </Link>
      </motion.div>

      <div className="flex items-center gap-3 mb-4">
        <Sparkles size={28} className="text-blue-400" />
        <motion.h1 
          className="text-4xl md:text-5xl font-bold gradient-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <Sparkles size={28} className="text-purple-400" />
      </div>
      
      <motion.p 
        className="text-gray-300 max-w-3xl mb-16 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
