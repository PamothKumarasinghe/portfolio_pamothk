import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';
import { getProjects } from '../lib/actions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Pamoth Kumarasinghe',
  description: 'Browse my portfolio of web development, game development, and software engineering projects. Explore innovative solutions built with modern technologies.',
  openGraph: {
    title: 'Projects | Pamoth Kumarasinghe',
    description: 'Browse my portfolio of web development, game development, and software engineering projects.',
    url: 'https://pamothK.com/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Pamoth Kumarasinghe',
    description: 'Browse my portfolio of web development, game development, and software engineering projects.',
  },
};

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
