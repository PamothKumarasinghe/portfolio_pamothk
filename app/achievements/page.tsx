import { PageHeader } from '../components/PageHeader';
import { AchievementCard } from '../components/AchievementCard';
import { StatCard } from '../components/StatCard';
import { getAchievements } from '../lib/actions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements & Awards | Pamoth Kumarasinghe',
  description: 'Explore my achievements, awards, certifications, and milestones in software development, game development, and engineering.',
  openGraph: {
    title: 'Achievements & Awards | Pamoth Kumarasinghe',
    description: 'Explore my achievements, awards, certifications, and milestones in software and game development.',
    url: 'https://pamothK.com/achievements',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achievements & Awards | Pamoth Kumarasinghe',
    description: 'Explore my achievements, awards, certifications, and milestones in software and game development.',
  },
};

export default async function Achievements() {
  const achievements = await getAchievements();
  const stats = [
    { label: 'Awards Won', value: achievements.length.toString() },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
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
          <div className="text-center py-20">
            <p className="text-gray-400">No achievements found.</p>
          </div>
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

