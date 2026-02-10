import { Project } from '@/types';

export interface ProjectCardData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
  likes: number;
  image?: string;
}

export function toProjectCard(project: Project): ProjectCardData {
  return {
    id: project.slug, // IMPORTANT: slug for routing
    title: project.title,
    description: project.shortDescription,
    tags: project.tags,
    author: {
      name: project.author.name,
      avatar: project.author.avatarUrl,
    },
    likes: project.upvotes,
    image: project.image, 
  };
}
