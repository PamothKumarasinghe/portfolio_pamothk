import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  readTime: string;
  content: string;
}

export interface BlogPostPreview {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  readTime: string;
}

// Ensure directory exists
function ensureDirectoryExists() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): BlogPostPreview[] {
  ensureDirectoryExists();
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') && fileName !== 'README.md')
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        author: data.author || 'Pamoth Kumarasinghe',
        tags: data.tags || [],
        readTime: data.readTime || '5 min read',
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureDirectoryExists();
  
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      author: data.author || 'Pamoth Kumarasinghe',
      tags: data.tags || [],
      readTime: data.readTime || '5 min read',
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  ensureDirectoryExists();
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md') && fileName !== 'README.md')
    .map(fileName => fileName.replace(/\.md$/, ''));
}
