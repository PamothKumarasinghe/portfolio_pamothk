'use server';

import { createClient } from '@supabase/supabase-js';
import { unstable_cache } from 'next/cache';

// Create Supabase client with server-side keys
function getSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_ANON_KEY!;
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }
  
  return createClient(supabaseUrl, supabaseKey);
}

// Types
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  codeLink: string;
  liveLink?: string;
  year?: string;
  created_at?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

// Get all projects with caching
export const getProjects = unstable_cache(
  async (): Promise<Project[]> => {
    try {
      const supabase = getSupabaseClient();

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
  },
  ['all-projects'],
  {
    revalidate: 60, // Cache for 60 seconds
    tags: ['projects'],
  }
);

// Get recent projects (limit 3) with caching
export const getRecentProjects = unstable_cache(
  async (): Promise<Project[]> => {
    try {
      const supabase = getSupabaseClient();

      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
        console.error('Error fetching recent projects:', error);
        return [];
      }

      return data || [];
    } catch (err) {
      console.error('Error fetching recent projects:', err);
      return [];
    }
  },
  ['recent-projects'],
  {
    revalidate: 60, // Cache for 60 seconds
    tags: ['projects'],
  }
);

// Get all achievements with caching
export const getAchievements = unstable_cache(
  async (): Promise<Achievement[]> => {
    try {
      const supabase = getSupabaseClient();

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
  },
  ['all-achievements'],
  {
    revalidate: 60, // Cache for 60 seconds
    tags: ['achievements'],
  }
);
