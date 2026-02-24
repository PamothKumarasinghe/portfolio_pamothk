import { getProjects } from '../lib/actions';
import { ProjectsPageClient } from './ProjectsPageClient';
import type { Metadata } from 'next';

// Enable ISR: Static generation with revalidation every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Projects | Pamoth Kumarasinghe',
  description: 'Portfolio of web development, game development, and software engineering projects built with React, Next.js, Unity, and modern tech.',
  keywords: ['Pamoth Kumarasinghe Projects', 'Web Development Portfolio', 'Game Development Projects', 'React Projects', 'Next.js Projects', 'Software Engineering Portfolio'],
  alternates: {
    canonical: 'https://pamoth.cse.mrt.lk/projects',
  },
  openGraph: {
    title: 'Projects Portfolio | Pamoth Kumarasinghe',
    description: 'Portfolio of web development, game development, and software engineering projects built with React, Next.js, Unity, and modern tech.',
    url: 'https://pamoth.cse.mrt.lk/projects',
    type: 'website',
    images: [
      {
        url: 'https://pamoth.cse.mrt.lk/profilepic.jpg',
        width: 1200,
        height: 630,
        alt: 'Pamoth Kumarasinghe - Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | Pamoth Kumarasinghe',
    description: 'Portfolio of web development, game development, and software engineering projects built with React, Next.js, Unity, and modern tech.',
    images: ['https://pamoth.cse.mrt.lk/profilepic.jpg'],
  },
};

export default async function Projects() {
  const projects = await getProjects();

  return <ProjectsPageClient projects={projects} />;
}
