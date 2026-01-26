import { getRecentProjects } from '../lib/actions';
import { ProjectsClient } from './ProjectsClient';

export async function Projects() {
  const projects = await getRecentProjects();
  
  return <ProjectsClient projects={projects} />;
}