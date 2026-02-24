import { getAchievements } from '../lib/actions';
import { AchievementsPageClient } from './AchievementsPageClient';
import type { Metadata } from 'next';

// Enable ISR: Static generation with revalidation every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Achievements & Awards | Pamoth Kumarasinghe',
  description: 'Explore achievements, awards, and certifications in software development, game development, and competitive programming.',
  keywords: ['Pamoth Kumarasinghe Achievements', 'Software Development Awards', 'Programming Certifications', 'Game Development Awards', 'Engineering Achievements'],
  alternates: {
    canonical: 'https://pamoth.cse.mrt.lk/achievements',
  },
  openGraph: {
    title: 'Achievements & Awards | Pamoth Kumarasinghe',
    description: 'Explore achievements, awards, and certifications in software development, game development, and competitive programming.',
    url: 'https://pamoth.cse.mrt.lk/achievements',
    type: 'website',
    images: [
      {
        url: 'https://pamoth.cse.mrt.lk/profilepic.jpg',
        width: 1200,
        height: 630,
        alt: 'Pamoth Kumarasinghe - Achievements & Awards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achievements & Awards | Pamoth Kumarasinghe',
    description: 'Explore achievements, awards, and certifications in software development, game development, and competitive programming.',
    images: ['https://pamoth.cse.mrt.lk/profilepic.jpg'],
  },
};

export default async function Achievements() {
  const achievements = await getAchievements();

  return <AchievementsPageClient achievements={achievements} />;
}

