'use client';

import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
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
      className="border border-white/10 overflow-hidden hover:border-white/30 transition-all group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={achievement.image}
          alt={achievement.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-gray-400 text-sm">{achievement.category}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <Icon className="text-gray-400 mt-1" size={24} />
          <div className="flex-1">
            <h3 className="text-white mb-2 group-hover:text-gray-300 transition-colors">
              {achievement.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              {achievement.description}
            </p>
            <span className="text-gray-500 text-xs">{achievement.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
