import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'EcoScan - AI Recycling Assistant',
    slug: 'ecoscan-ai',
    shortDescription: 'Scan objects to instantly know if they are recyclable in your city.',
    fullDescription: 'EcoScan uses computer vision to categorize waste...',
    problemStatement: 'Recycling rules are confusing, leading to contamination.',
    techStack: ['Flutter', 'TensorFlow', 'Firebase'],
    tags: ['AI/ML', 'Mobile'],
    difficulty: 'Intermediate',
    upvotes: 45,
    author: { name: 'Alex Chen' },
    status: 'Help Wanted',
    createdAt: '2023-10-15',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'AlgoVisualizer',
    slug: 'algovisualizer',
    shortDescription: 'Interactive sorting algorithm visualizations for students.',
    fullDescription: 'A web app that animates Bubble, Merge, and Quick sort...',
    problemStatement: 'CS students struggle to visualize abstract algorithms.',
    techStack: ['React', 'D3.js', 'TypeScript'],
    tags: ['Web Dev'],
    difficulty: 'Beginner',
    upvotes: 120,
    author: { name: 'Sarah Jenkins' },
    status: 'Active',
    createdAt: '2023-11-01',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80'
  }
];

export async function getProjects(): Promise<Project[]> {
  // Simulate API delay
  return new Promise((resolve) => setTimeout(() => resolve(projects), 500));
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return new Promise((resolve) => 
    setTimeout(() => resolve(projects.find(p => p.slug === slug)), 500)
  );
}