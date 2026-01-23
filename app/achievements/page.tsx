import { createClient } from '@supabase/supabase-js';
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

async function getAchievements(): Promise<Achievement[]> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching achievements:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Error fetching achievements:', err);
    return [];
  }
}

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

