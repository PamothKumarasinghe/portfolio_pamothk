import { getAchievements } from '../lib/actions';
import { AchievementsPageClient } from './AchievementsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements & Awards | Pamoth Kumarasinghe',
  description: 'Explore my achievements, awards, certifications, and milestones in software development, game development, and engineering.',
  openGraph: {
    title: 'Achievements & Awards | Pamoth Kumarasinghe',
    description: 'Explore my achievements, awards, certifications, and milestones in software and game development.',
    url: 'https://pamoth.cse.mrt.lk/achievements',
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

  return <AchievementsPageClient achievements={achievements} />;
}

