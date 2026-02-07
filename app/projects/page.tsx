import { getProjects } from '../lib/actions';
import { ProjectsPageClient } from './ProjectsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Pamoth Kumarasinghe',
  description: 'Browse Pamoth Kumarasinghe\'s portfolio of innovative web development, game development, and software engineering projects. Built with React, Next.js, Node.js, Unity, and cutting-edge technologies.',
  keywords: ['Pamoth Kumarasinghe Projects', 'Web Development Portfolio', 'Game Development Projects', 'React Projects', 'Next.js Projects', 'Software Engineering Portfolio'],
  alternates: {
    canonical: 'https://pamoth.cse.mrt.lk/projects',
  },
  openGraph: {
    title: 'Projects Portfolio | Pamoth Kumarasinghe',
    description: 'Browse my portfolio of innovative web development, game development, and software engineering projects built with modern technologies.',
    url: 'https://pamoth.cse.mrt.lk/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | Pamoth Kumarasinghe',
    description: 'Browse my portfolio of innovative web development, game development, and software engineering projects.',
  },
};

export default async function Projects() {
  const projects = await getProjects();

  return <ProjectsPageClient projects={projects} />;
}
