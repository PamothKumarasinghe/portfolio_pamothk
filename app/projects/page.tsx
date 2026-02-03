import { getProjects } from '../lib/actions';
import { ProjectsPageClient } from './ProjectsPageClient';
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

  return <ProjectsPageClient projects={projects} />;
}
