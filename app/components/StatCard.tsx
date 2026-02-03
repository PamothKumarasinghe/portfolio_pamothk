'use client';

import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

export function StatCard({ stat, index }: { stat: { label: string; value: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(251, 191, 36, 0.3)'
      }}
      className="border border-white/10 p-8 text-center hover:border-amber-500/50 hover:bg-amber-500/5 transition-all rounded-lg backdrop-blur-sm relative overflow-hidden group"
    >
      {/* Background glow */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-yellow-500/0 via-amber-500/20 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 blur"
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Trophy icon */}
        <motion.div
          className="flex justify-center mb-4"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Trophy size={40} className="text-amber-400" />
        </motion.div>

        {/* Animated counter */}
        <motion.div 
          className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-6xl mb-3 font-bold"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          {stat.value}
        </motion.div>
        
        <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
      </div>
    </motion.div>
  );
}
