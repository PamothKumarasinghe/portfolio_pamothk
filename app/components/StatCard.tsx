'use client';

import { motion } from 'motion/react';

export function StatCard({ stat, index }: { stat: { label: string; value: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      className="border border-white/10 p-8 text-center hover:border-white/30 transition-all"
    >
      <div className="text-white text-5xl mb-3 font-bold">{stat.value}</div>
      <div className="text-gray-400 text-lg">{stat.label}</div>
    </motion.div>
  );
}
