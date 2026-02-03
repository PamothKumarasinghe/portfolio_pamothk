'use client';

import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { AchievementCard } from '../components/AchievementCard';
import { StatCard } from '../components/StatCard';

interface Achievement {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export function AchievementsPageClient({ achievements }: { achievements: Achievement[] }) {
  const stats = [
    { label: 'Awards Won', value: achievements.length.toString() },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <PageHeader
          title="Achievements & Recognition"
          description="A collection of awards, certifications, and milestones throughout my career in software development and game development."
        />

        {/* Stats Section */}
        <div className="flex justify-center mb-16">
          <div className="max-w-md w-full">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        {achievements.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400">No achievements found.</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
