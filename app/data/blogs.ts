import { promises as fs } from 'fs';
import path from 'path';

export interface BlogPost {
  id: string;
  title: {
    en: string;
    nl: string;
  };
  date: string;
  location: {
    en: string;
    nl: string;
  };
  coverImage: string;
  gpxFiles: string[];
  summary: {
    en: string;
    nl: string;
  };
  content: BlogContent[];
}

export interface BlogContent {
  type: 'text' | 'image';
  content: string | {
    en: string;
    nl: string;
  };
  caption?: {
    en: string;
    nl: string;
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogsDirectory = path.join(process.cwd(), 'app/data/blogs');
  const filenames = await fs.readdir(blogsDirectory);
  
  const blogs = await Promise.all(
    filenames
      .filter(filename => filename.endsWith('.json'))
      .map(async filename => {
        const filePath = path.join(blogsDirectory, filename);
        const content = await fs.readFile(filePath, 'utf8');
        return JSON.parse(content) as BlogPost;
      })
  );

  return blogs.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getAllGPXFiles(): Promise<string[]> {
  const blogs = await getBlogPosts();
  return blogs.flatMap(blog => blog.gpxFiles);
}