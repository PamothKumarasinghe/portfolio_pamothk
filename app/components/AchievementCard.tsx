'use client';

import { motion } from 'motion/react';
import { Trophy, Award, Star } from 'lucide-react';
import Image from 'next/image';

interface Achievement {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const Icon = Trophy;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 25px 50px rgba(251, 191, 36, 0.2)'
      }}
      className="border border-white/10 overflow-hidden hover:border-amber-500/50 hover:bg-amber-500/5 transition-all rounded-lg backdrop-blur-sm group relative"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-yellow-500/0 via-amber-500/0 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-20 blur"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Floating stars */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Star size={20} className="text-amber-400 fill-amber-400" />
          </motion.div>

          <div className="absolute bottom-4 left-4">
            <motion.span 
              className="text-amber-400 text-sm font-semibold px-3 py-1 bg-amber-500/20 rounded-full backdrop-blur-sm border border-amber-500/30"
              whileHover={{ scale: 1.05 }}
            >
              {achievement.category}
            </motion.span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-3 mb-3">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Icon className="text-amber-400 mt-1" size={24} />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-white mb-2 group-hover:text-amber-300 transition-colors text-xl font-semibold">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                {achievement.description}
              </p>
              <motion.span 
                className="text-amber-500 text-xs font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {achievement.date}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
