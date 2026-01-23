import { createClient } from '@supabase/supabase-js';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  codeLink: string;
  liveLink?: string;
  year?: string;
}

async function getProjects(): Promise<Project[]> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <PageHeader
          title="All Projects"
          description="A comprehensive collection of my work across web development, game development, mobile apps, and more."
        />

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">No projects found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
